import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faTag } from '@fortawesome/free-solid-svg-icons'
import * as localStyle from './label.module.css'

const labelTypes = {
	CATEGORY: 'category',
	TAG: 'tag',
}

const Label = ({ type, textValue, style }) => {
	return (
		<Link
			to={`/${type}/${textValue}`}
			className={
				type === labelTypes.CATEGORY ? localStyle.category : localStyle.tag
			}
			style={style}>
			<FontAwesomeIcon icon={type === labelTypes.CATEGORY ? faFolder : faTag} />{' '}
			{textValue}
		</Link>
	)
}

export default Label
export { labelTypes }
