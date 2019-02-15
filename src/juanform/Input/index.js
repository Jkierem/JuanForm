import React from 'react'
import Styled from '../Styled'
import { createInput } from '../Utils'
import { Either , ValueOf , Find } from '../Utils/toolbox'
import { Types } from './constants'

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

	findType(t){
		return Either( Types )
						( Find(t) ) //or
						( ValueOf("text") )
	}

	render(){
		const { id , name , type="text", placeholder , as:StyledComponent=StyledInput } = this.props
		const { value } = this.state
		const _type = this.findType(type)
		return(
			<StyledComponent
				id={id}
				name={name}
				onChange={this.handleChange}
				placeholder={placeholder}
				type={_type}
				value={value}
			/>
		);
	}
}

export default createInput(Input);
