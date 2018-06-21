import React from 'react'
import { fieldStyle } from '../resources/Styles'

//FieldWrapper for form inputs etc etc
class Field extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}

	transformChildren = () =>{
		const { transform=(e)=>(e) } = this.props
		return React.Children.map(this.props.children,(child) => {
			return transform(child)
		})
	}

	render(){
		const { style={} } = this.props;
		let realStyle = {
			...fieldStyle,
			...style
		}
		return(
			<article style={realStyle}>
				{this.transformChildren()}
			</article>
		)
	}
}

export default Field;
