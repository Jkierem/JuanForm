import React, { useReducer } from 'react'
import Styled from '../Styled'

const StyledForm = Styled.Defaults.Form

const reducer = (state, action) => {
	switch (action.type) {
		case "INPUT":
			const { id, name, value } = action.data;
			return {
				...state,
				[name ? name : id]: value,
			}
	}
}

const Form = (props) => {

	const [state, dispatch] = useReducer(reducer, {})

	const handleSubmit = (e) => {
		e.preventDefault();
		props.onSubmit(state)
	};

	const onInputChange = (e, obj) => dispatch({ type: "INPUT", data: obj })

	const transform = (child) => {
		const definedChild = child == null ? {} : { ...child }
		const { type = {} } = definedChild
		const { formElement: element } = type;
		let resultingClone = child;
		switch (element) {
			case "Field":
				resultingClone = React.cloneElement(child, {
					transform,
				})
				break;
			case "Button":
				if (child.props.submit) {
					resultingClone = React.cloneElement(child, {
						onClick: handleSubmit
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

	const { id, as: StyledComponent = StyledForm } = props
	return (
		<StyledComponent id={id} onSubmit={handleSubmit}>
			{React.Children.map(props.children, transform)}
		</StyledComponent>
	);
}

export default Form;
