import React from 'react'
import Layout from '../components/layout'
import BigTitle from '../components/bigTitle'
import { rhythm, scale } from '../typography'
import { socialItems } from '../components/navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'
import * as style from './me.module.css' // using the same structure like at me page

const FourZeroFourPage = () => {
	return (
		<Layout>
			<BigTitle
				style={{
					margin: `${rhythm(2)} 0`,
				}}
			/>
			<section
				className={style.aboutBox}
				style={{ padding: `${rhythm(1)} ${rhythm(2)}` }}>
				<h3 style={{ ...scale(4 / 5) }}>Hi there! This is a 404. <span
					role='img'
					aria-label='sad'>
					😞
				</span></h3>
				<p style={{ ...scale(2 / 5) }}>
					Nice catch! This page doesn't exists. Maybe there is a typo in the
					URL. You can always <Link to='/'> start over</Link> or if you really
					need that info feel free to contact me through my social platforms.
				</p>
				<div className={style.socialBox} style={{ marginTop: rhythm(1) }}>
					{socialItems.map(({ title, url, icon }) => (
						<a
							style={{ marginLeft: rhythm(1) }}
							className={style.socialIcon}
							key={title}
							href={url}
							rel='noreferrer noopener'
							target='_blank'
							title={title}>
							<FontAwesomeIcon icon={icon} size='2x' />
						</a>
					))}
				</div>
			</section>
		</Layout>
	)
}

export default FourZeroFourPage
