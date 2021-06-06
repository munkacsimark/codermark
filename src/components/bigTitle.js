import React from 'react'
import { scale } from '../typography'
import * as style from './bigTitle.module.css'

const BigTitle = ({ className, style: styleProp, showSubtitle }) => {
	return (
		<div className={`${style.bigTitle} ${className}`} style={{ ...styleProp }}>
			<h1 className={style.mainTitle} style={{ ...scale(12 / 5) }}>
				CoderMark
			</h1>
			{showSubtitle && (
				<h2 className={style.subTitle} style={{ ...scale(3 / 5) }}>
					thoughts of Mark Munkacsi
				</h2>
			)}
		</div>
	)
}

export default BigTitle
