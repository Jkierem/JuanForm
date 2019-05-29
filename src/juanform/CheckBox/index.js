import React, { useState } from 'react'
import Styled from '../Styled'
import { createCheckBox } from '../Utils'

const StyledInput = Styled.Defaults.CheckBox

const CheckBox = (props) => {
	const { checked = false } = props;
	const [isChecked, setChecked] = useState(checked);

	const handleChange = (e) => {
		setChecked(!isChecked);
		const { id, name } = props
		props.onChange ?.(e, {
			id: id,
			name: name,
			value: !isChecked,
		})
	}

	const { name, id, as: StyledComponent = StyledInput } = props;
	return (
		<StyledComponent
			id={id}
			type="checkbox"
			value={name}
			checked={isChecked}
			onChange={handleChange}
		/>
	)
}

export default createCheckBox(CheckBox);
