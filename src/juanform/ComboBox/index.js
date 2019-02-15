import React from 'react'
import Styled from '../Styled'
import { prop , compose } from '../Utils/toolbox'
import { createComboBox } from '../Utils/index.js'

const StyledCombo = Styled.Defaults.ComboBox
const StyledOption = Styled.Defaults.Option

const getFirst = prop("0");
const getValue = prop("value")
const getProps = prop("props")
const getChildren = prop("children")

const getFirstValue = compose( getValue , getFirst )
const getPropsOfFirst = compose( getProps , getFirst )
const getFirstGrandson = compose( getChildren , getPropsOfFirst )
const getValueFromFirstChild = compose( getValue , getPropsOfFirst )

class ComboBox extends React.Component{
	constructor(props){
		super(props);
		const { value , options } = props;
		const children = React.Children.toArray(props.children)
		const defaultValue = value || getFirstValue(props.options) || getValueFromFirstChild(children) || getFirstGrandson(children)
		this.state={
			value: defaultValue
		}
		const { id , name } = props
		if( props.onChange ){
			props.onChange(null,{
				id: id,
				name: name,
				value: this.state.value
			})
		}
	}

	static Option(props){
		const { as:StyledComponent=StyledOption } = props;
		return (
			<StyledComponent {...props}>{props.children}</StyledComponent>
		)
	}

	renderOptions = () =>{
		const { options , emptyMessage="-- Empty --"} = this.props;
		if( options.length === 0){
			return <ComboBox.Option value={null}>{emptyMessage}</ComboBox.Option>
		}
		return options.map((op,key) => {
			return <ComboBox.Option key={key} value={op.value}>{op.label}</ComboBox.Option>
		})
	}

	handleChange = (e) =>{
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
		const { id, name, as:StyledComponent=StyledCombo , options } = this.props;
		const { renderOptions } = this;
		return(
			<StyledComponent id={id} name={name} onChange={this.handleChange}>
				{options ? renderOptions() : this.props.children }
			</StyledComponent>
		);
	}
}

export default createComboBox(ComboBox)
