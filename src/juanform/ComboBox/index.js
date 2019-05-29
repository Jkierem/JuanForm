import React, { useState, useEffect } from 'react'
import Styled from '../Styled'
import { prop, compose } from '../Utils/toolbox'
import { createComboBox } from '../Utils/index.js'

const StyledCombo = Styled.Defaults.ComboBox
const StyledOption = Styled.Defaults.Option

const getFirst = prop("0");
const getValue = prop("value")
const getProps = prop("props")
const getChildren = prop("children")

const getFirstValue = compose(getValue, getFirst)
const getPropsOfFirst = compose(getProps, getFirst)
const getFirstGrandson = compose(getChildren, getPropsOfFirst)
const getValueFromFirstChild = compose(getValue, getPropsOfFirst)

const Option = (props) => {
	const { as: StyledComponent = StyledOption } = props;
	return (
		<StyledComponent {...props}>{props.children}</StyledComponent>
	)
}

const renderOptions = (renderData) => {
	const { options, emptyMessage = "-- Empty --" } = renderData;
	if (options.length === 0) {
		return <Option value={null}>{emptyMessage}</Option>
	}
	return options.map((op, key) => {
		return <Option key={key} value={op.value}>{op.label}</Option>
	})
}

const ComboBox = (props) => {
	const { name, id, options, emptyMessage } = props;
	const children = React.Children.toArray(props.children);
	const defaultValue = props.value || getFirstValue(options) || getValueFromFirstChild(children) || getFirstGrandson(children);
	const [value, setValue] = useState(defaultValue);

	useEffect(() => {
		props.onChange ?.(null, {
			id,
			name,
			value,
		})
	}, [])

	const handleChange = (e) => {
		setValue(e.target.value);
		const { id, name } = props
		props.onChange ?.(e, {
			id,
			name,
			value: e.target.value
		})
	}

	const { as: StyledComponent = StyledCombo } = props;
	return (
		<StyledComponent id={id} name={name} onChange={handleChange}>
			{options ? renderOptions({ options, emptyMessage }) : props.children}
		</StyledComponent>
	);
}

ComboBox.Option = Option;

export default createComboBox(ComboBox)
