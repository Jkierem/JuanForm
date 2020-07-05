import React from 'react'
import Styled from '../Styled'
import { createField } from '../Utils'
import { identity } from '../Utils/toolbox'

const StyledArticle = Styled.Defaults.Field

const Field = (props) => {
	const transformChildren = (props) => {
		const { transform = identity } = props
		return React.Children.map(props.children, (child) => {
			return transform(child)
		})
	}

	const { as: StyledComponent = StyledArticle, ...rest } = props;
	return (
		<StyledComponent {...rest}>
			{transformChildren(props)}
		</StyledComponent>
	)
}

export default createField(Field);
