import React from 'react'
import Styled from '../Styled'
import { createInput } from '../Utils'

const StyledInput = Styled.Defaults.Input

class Input extends React.Component{
	constructor(props){
		super(props);
		this.state={
			value: ""
		}
	}

	handleChange = (e) => {
		this.setState({
			value: e.target.value
		})
		const { id , name } = this.props
		if( this.props.onChange ){
			this.props.onChange(e,{
				id: id,
				name: name,
				value: e.target.value
			})
		}
	}

	render(){
		const { id , name , type="text", placeholder , as:StyledComponent=StyledInput } = this.props
		const { value } = this.state

		if( type !== "radio" && type !== "checkbox"){
			return(
				<StyledComponent
					id={id}
					name={name}
					onChange={this.handleChange}
					placeholder={placeholder}
					type={type}
					value={value}
				/>
			);
		}
	}
}

export default createInput(Input);
