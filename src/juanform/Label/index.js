import React from 'react'
import Styled from '../Styled'
import { createLabel } from '../Utils'

const StyledLabel = Styled.Defaults.Label

const Label = (props) => {
	const { htmlFor, id, as: StyledComponent = StyledLabel } = props;
	return (
		<StyledComponent id={id} htmlFor={htmlFor} >{props.children}</StyledComponent>
	);
}

export default createLabel(Label);
