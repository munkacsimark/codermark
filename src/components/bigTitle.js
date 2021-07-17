import React from 'react'
import { scale } from '../typography'
import views from '../views'
import * as style from './bigTitle.module.css'

const BigTitle = ({ className, style: styleProp, showSubtitle, view }) => {
	return (
		<div className={`${style.bigTitle} ${className}`} style={{ ...styleProp }}>
			<h1
				className={style.mainTitle}
				style={{ ...(view === views.MOBILE ? scale(6 / 5) : scale(12 / 5)) }}>
				CoderMark
			</h1>
			{showSubtitle && (
				<h2
					className={style.subTitle}
					style={{ ...(view === views.MOBILE ? scale(2 / 5) : scale(3 / 5)) }}>
					thoughts of Mark Munkacsi
				</h2>
			)}
		</div>
	)
}

export default BigTitle
