import React from 'react'
import styled from 'styled-components'

const StyledLabel = styled.label`
	padding: 10px;
`

class Label extends React.Component{
	render(){
		const { htmlFor , id , as:StyledComponent=StyledLabel } = this.props;
		return(
			<StyledComponent id={id} htmlFor={htmlFor} >{this.props.children }</StyledComponent>
		);
	}
}

export default Label;
