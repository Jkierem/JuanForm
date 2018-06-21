import React from 'react'
import { labelStyle } from '../resources/Styles'

class Label extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}

	render(){
		const { htmlFor , id , style } = this.props;
		const realStyle = {
			...labelStyle,
			...style
		}
		return(
			<label id={id} style={realStyle} htmlFor={htmlFor} >{this.props.children }</label>
		);
	}
}

export default Label;
