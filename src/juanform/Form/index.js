import React, { useReducer } from 'react'
import Styled from '../Styled'

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
	switch (element) {
		case "Field":
			resultingClone = React.cloneElement(child, {
				transform: createTransform({ props, onSubmit, onInputChange }),
			})
			break;
		case "Button":
			if (child.props.submit) {
				resultingClone = React.cloneElement(child, {
					onClick: onSubmit
				})
			}
			break;
		case "Input":
		case "ComboBox":
		case "CheckBox":
			resultingClone = React.cloneElement(child, {
				onChange: onInputChange,
			})
			break;
		default:
			if (child == null) {
				resultingClone = undefined
			}
			break;
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
