import React from 'react'
import Styled from '../Styled'
import { createField } from '../Utils'

const StyledArticle = Styled.Defaults.Field

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
		const { as:StyledComponent=StyledArticle } = this.props;
		return(
			<StyledComponent>
				{this.transformChildren()}
			</StyledComponent>
		)
	}
}

export default createField(Field);
