import React from 'react'
import Styled from '../Styled'
import { createButton } from '../Utils'

const StyledButton = Styled.Defaults.Button;

class Button extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}

	handleClick = (e) =>{
    e.preventDefault()
		this.props.onClick?.(e,{
			...this.props
		})
	}

	render(){
		const { id , label=this.props.children , as } = this.props
		const { handleClick } = this
		const StyledComponent = as ? as : StyledButton;
		return(
			<StyledComponent id={id} onClick={handleClick} >{label}</StyledComponent>
		);
	}
}

export default createButton(Button);
