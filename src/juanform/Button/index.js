import React from 'react'
import Styled from '../Styled'
import { createButton } from '../Utils'

const StyledButton = Styled.Defaults.Button;

const Button = (props) => {
	const handleClick = (e) => {
		e.preventDefault()
		if (props.onClick) {
			props.onClick(e, {
				...props
			})
		}
	}

	const { id, label = props.children, as, ...rest } = props
	const StyledComponent = as ? as : StyledButton;

	return (
		<StyledComponent id={id} onClick={handleClick} {...rest}>{label}</StyledComponent>
	);
}

export default createButton(Button);
