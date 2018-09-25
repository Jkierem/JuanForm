import React from 'react'
import styled from 'styled-components'
import { Button , Input , ComboBox , CheckBox , Field } from '../'

const StyledForm = styled.form`
	padding: 10px;
`

class Form extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}

	handleInputChange = (e,obj) =>{
		let {id,name,value} = obj
		if( name !== undefined ){
			this.setState({
				[name]: value
			},this.handleChange)
		}else{
			this.setState({
				[id]: value
			},this.handleChange)
		}
	};

	handleChange = (s) =>{
		if( this.props.onChange ){
			this.props.onChange(this.state)
		}
	}

	handlePasswordChange = (e,obj) =>{
		//TODO: Handle password change: how should I store it in front end
		this.handleInputChange(e,obj)
	};

	handleSubmit = (e) =>{
		e.preventDefault();
		if( this.props.onSubmit ){
			this.props.onSubmit(this.state)
		}
	};

	transform = (child) =>{
		if( child.type === Input ){
			if( child.props.type === "password" ){
				return React.cloneElement(child,{
					onChange: this.handlePasswordChange
				})
			}else{
				return React.cloneElement(child,{
					onChange: this.handleInputChange
				})
			}
		}else if( child.type === Button ){
			if( child.props.submit ){
				return React.cloneElement(child,{
					onClick: this.handleSubmit
				})
			}else{
				return child
			}
		}else if( child.type === ComboBox ){
			return React.cloneElement(child,{
				onChange: this.handleInputChange
			})
		}else if( child.type === CheckBox ){
			return React.cloneElement(child,{
				onChange: this.handleInputChange
			})
		}else{
			return child
		}
	}

	transformChildren = () =>{
		return React.Children.map(this.props.children,(child) => {
			if(child === null) {
				return undefined;
			}
			if( child.type === Field ){
				return React.cloneElement(child,{
					transform: this.transform
				})
			}else{
				return this.transform(child)
			}
		})
	}

	render(){
		const { id , as:StyledComponent=StyledForm } = this.props
		const { handleSubmit } = this
		return(
			<StyledComponent id={id} onSubmit={handleSubmit}>
				{this.transformChildren()}
			</StyledComponent>
		);
	}
}

export default Form;
