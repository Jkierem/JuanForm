import React, { useReducer } from 'react'
import Styled from '../Styled'
import { isAnyOf } from '../Utils/toolbox';

const StyledForm = Styled.Defaults.Form

export const reducer = (state, action) => {
	switch (action.type) {
		case "INPUT":
			const { id, name, value } = action.data;
			return {
				...state,
				[name ? name : id]: value,
			}
		default:
			return state
	}
}

export const createTransform = ({ props, onSubmit, onInputChange, transform }) => (child) => {
	const definedChild = child == null ? {} : { ...child }
	const { type = {} } = definedChild
	const { formElement: element } = type;
	let resultingClone = child;
	const isFieldType = isAnyOf("Field");
	const isClickType = isAnyOf("Button");
	const isChangeType = isAnyOf("Input", "ComboBox", "CheckBox");
	if (isFieldType(element)) {
		resultingClone = React.cloneElement(child, {
			transform: createTransform({ props, onSubmit, onInputChange }),
		})
	} else if (isClickType(element)) {
		if (child.props.submit) {
			resultingClone = React.cloneElement(child, {
				onClick: onSubmit
			})
		}
	} else if (isChangeType(element)) {
		resultingClone = React.cloneElement(child, {
			onChange: onInputChange,
		})
	} else {
		if (child == null) {
			resultingClone = undefined
		}
	}
	if (props.customTransform && typeof (props.customTransform) === "function") {
		resultingClone = props.customTransform(resultingClone)
	}
	return resultingClone;
}

const Form = (props) => {

	const [state, dispatch] = useReducer(reducer, {})

	const handleSubmit = (e) => {
		e.preventDefault();
		props.onSubmit(state)
	};

	const onInputChange = (e, obj) => {
		dispatch({ type: "INPUT", data: obj })
		props.onChange ? props.onChange(e, obj) : null;
	}

	const transform = createTransform({
		props,
		onInputChange,
		onSubmit: handleSubmit,
	});

	const { id, as: StyledComponent = StyledForm } = props
	return (
		<StyledComponent id={id} onSubmit={handleSubmit}>
			{React.Children.map(props.children, transform)}
		</StyledComponent>
	);
}

export default Form;
