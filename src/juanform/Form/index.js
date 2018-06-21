import React from 'react'
import { Button , Input , ComboBox , CheckBox , Field } from '../'
import { formStyle } from '../resources/Styles'

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
			this.props.onSubmit(e, this.state)
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
		const { id , style={} } = this.props
		const { handleSubmit } = this
		let realStyle = {
			...formStyle,
			...style
		}
		return(
			<form id={id} style={realStyle} onSubmit={handleSubmit}>
				{this.transformChildren()}
			</form>
		);
	}
}

export default Form;
