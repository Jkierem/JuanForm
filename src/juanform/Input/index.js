import React, { useState } from 'react'
import Styled from '../Styled'
import { createInput } from '../Utils'
import { Either, JustOf, Find } from '../Utils/toolbox'
import { Types } from './constants'

const StyledInput = Styled.Defaults.Input

export const findType = (t) => {
	return Either(Types)
		(Find(t)) //or
		(JustOf("text"))
}

const Input = (props) => {

	const [value, setValue] = useState('');

	const handleChange = (e) => {
		setValue(e.target.value);
		const { id, name } = props;
		props.onChange(e, {
			id,
			name,
			value: e.target.value,
		})
	}

	const { 
		id, 
		name, 
		type = "text", 
		placeholder, as: StyledComponent = StyledInput,
		...rest
	} = props
	const _type = findType(type)
	return (
		<StyledComponent
			id={id}
			name={name}
			onChange={handleChange}
			placeholder={placeholder}
			type={_type}
			value={value}
			{...rest}
		/>
	);
}

export default createInput(Input);
