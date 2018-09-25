import React from 'react'
import Styled from '../Styled'
import { Button , Input , ComboBox , CheckBox , Field } from '../'

const StyledForm = Styled.Defaults.Form

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
		const { formElement:element } = child.type;
		let resultingClone = child;
		if( element === "Input" ){
			if( child.props.type === "password" ){
				resultingClone = React.cloneElement(child,{
					onChange: this.handlePasswordChange
				})
			}else{
				resultingClone = React.cloneElement(child,{
					onChange: this.handleInputChange
				})
			}
		}else if( element === "Button" ){
			if( child.props.submit ){
				resultingClone = React.cloneElement(child,{
					onClick: this.handleSubmit
				})
			}
		}else if( element === "ComboBox" ){
			resultingClone = React.cloneElement(child,{
				onChange: this.handleInputChange
			})
		}else if( element === "CheckBox" ){
			resultingClone = React.cloneElement(child,{
				onChange: this.handleInputChange
			})
		}
		if( this.customTransform && typeof(this.customTransform) === "function"){
			resultingClone = this.customTransform(resultingClone,this)
		}
		return resultingClone;
	}

	transformChildren = () =>{
		return React.Children.map(this.props.children,(child) => {
			if(child === null) {
				return undefined;
			}
			if( child.type.formElement === "Field" ){
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
