import React from 'react'
import styled from 'styled-components'
import { prop } from '../resources/Utils'

const StyledCombo = styled.select``
const StyledOption = styled.option``

const getFirst = prop("0");
const getValue = prop("value")
const getFirstValue = obj => getValue(getFirst(obj))

class ComboBox extends React.Component{
	constructor(props){
		super(props);
		const { value , options } = props;
		const children = React.Children.toArray(props.children)
		const defaultValue = value || getFirstValue(props.options) || children[0].props.value || children[0].props.children
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

export default ComboBox;
