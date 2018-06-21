import React from 'react'
import { buttonStyle } from '../resources/Styles'

class Button extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}

	handleClick = (e) =>{
    e.preventDefault()
		if( this.props.onClick ){
			this.props.onClick(e,{
				...this.props
			})
		}
	}

	render(){
		const { id , label=this.props.children , style={} } = this.props
		const { handleClick } = this
		let realStyle = {
			...buttonStyle,
			...style
		}
		return(
			<button id={id} style={realStyle} onClick={handleClick} >{label}</button>
		);
	}
}

export default Button;
