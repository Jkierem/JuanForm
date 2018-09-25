import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
	padding: 5px
`

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
		const { id , label=this.props.children , as } = this.props
		const { handleClick } = this
		const StyledComponent = as ? as : StyledButton;
		return(
			<StyledComponent id={id} onClick={handleClick} >{label}</StyledComponent>
		);
	}
}

export default Button;
