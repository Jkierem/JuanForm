import React from 'react'
import Styled from '../Styled'

const StyledInput = Styled.Defaults.CheckBox

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
		const { label=false , name , id , as:StyledComponent=StyledInput} = this.props;
		const { isChecked } = this.state;
		return(
			<StyledComponent
				id={id}
				type="checkbox"
				value={name}
				checked={isChecked}
				onChange={this.handleChange}
			/>
		)
	}
}

export default CheckBox;
