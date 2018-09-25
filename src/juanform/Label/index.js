import React from 'react'
import Styled from '../Styled'

const StyledLabel = Styled.Defaults.Label

class Label extends React.Component{
	render(){
		const { htmlFor , id , as:StyledComponent=StyledLabel } = this.props;
		return(
			<StyledComponent id={id} htmlFor={htmlFor} >{this.props.children }</StyledComponent>
		);
	}
}

export default Label;
