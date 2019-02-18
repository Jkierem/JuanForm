import React from 'react'
import Styled from '../Styled'

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

	handleChange = () =>{
		if( this.props.onChange ){
			this.props.onChange(this.state)
		}
	}

	handleSubmit = (e) =>{
		e.preventDefault();
		if( this.props.onSubmit ){
			this.props.onSubmit(this.state)
		}
	};

	transform = (child) =>{
		const definedChild = child == null ? {} : {...child}
		const { type={} } = definedChild
		const { formElement:element } = type;
		let resultingClone = child;
		switch(element){
			case "Field":
				resultingClone = React.cloneElement(child,{
					transform: this.transform
				})
			break;
			case "Button":
				if( child.props.submit ){
					resultingClone = React.cloneElement(child,{
						onClick: this.handleSubmit
					})
				}
			break;
			case "Input":
			case "ComboBox":
			case "CheckBox":
				resultingClone = React.cloneElement(child,{
					onChange: this.handleInputChange
				})
			break;
			default:
				if( child == null ){
					resultingClone = undefined
				}
			break;
		}
		if( this.customTransform && typeof(this.customTransform) === "function"){
			resultingClone = this.customTransform(resultingClone,this)
		}
		return resultingClone;
	}

	transformChildren = () =>{
		return React.Children.map(this.props.children, this.transform)
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
