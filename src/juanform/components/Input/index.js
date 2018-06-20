import React from 'react'

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
		const { id , name , type="text", placeholder } = this.props
		const { value } = this.state
		return(
			<input
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

export default Input;
