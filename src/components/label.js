import React from 'react'
import { Link } from 'gatsby'
import * as localStyle from './label.module.css'

const labelTypes = {
	CATEGORY: 'category',
	TAG: 'tag',
}

const Label = ({ type, textValue, style }) => {
	return (
		<Link
			to={`/${type === labelTypes.CATEGORY ? 'category' : 'tag'}/${textValue}`}
			className={
				type === labelTypes.CATEGORY ? localStyle.category : localStyle.tag
			}
			style={style}>
			<span
				role='img'
				aria-label={type === labelTypes.CATEGORY ? 'folder' : 'tag'}>
				{type === labelTypes.CATEGORY ? '📂' : '🏷'}
			</span>{' '}
			{textValue}
		</Link>
	)
}

export default Label
export { labelTypes }
