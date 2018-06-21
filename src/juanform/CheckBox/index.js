import React from 'react'
import { checkStyle } from '../resources/Styles'

class CheckBox extends React.Component{
	constructor(props){
		super(props);
		const { checked=false } = this.props;
		this.state={
			isChecked: checked
		}
	}

	handleChange = (e) => {
		const { isChecked } = this.state;
		this.setState({
			isChecked: !isChecked
		},()=>{
			const { id , name } = this.props
			if( this.props.onChange ){
				this.props.onChange(e,{
					id: id,
					name: name,
					value: this.state.isChecked
				})
			}
		})
	}

	render(){
		const { label=false , style={} , name , id } = this.props;
		const { isChecked } = this.state;
		const realStyle = {
			...checkStyle,
			...style
		}
		return(
			<input
				type="checkbox"
				value={name}
				style={realStyle}
				checked={isChecked}
				onChange={this.handleChange}
			/>
		)
	}
}

export default CheckBox;
