import React from 'react'

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
		return(
			<article>
				{this.transformChildren()}
			</article>
		)
	}
}

export default Field;
