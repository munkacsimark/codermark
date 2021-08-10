import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import BigTitle from '../components/bigTitle'
import { rhythm, scale } from '../typography'
import { socialItems } from '../components/navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import viewChangeHandler from '../helpers/viewChangeHandler'
import views from '../views'
import * as style from './me.module.css'

import resumeSrc from '../munkacsi_mark_resume_2021.pdf'

const IndexPage = () => {
	const [view, setView] = useState(views.DESKTOP)

	useEffect(() => viewChangeHandler(setView), [])

	return (
		<Layout view={view}>
			<Seo
				title='About'
				description="Hey there! I'm Mark Munkacsi. Briefly about myself."
				url='/me'
			/>
			<BigTitle
				view={view}
				style={{
					margin: `${view === views.MOBILE ? rhythm(1) : rhythm(2)} 0`,
				}}
			/>
			<section
				className={style.aboutBox}
				style={{
					padding: `${view === views.MOBILE ? rhythm(0.5) : rhythm(1)} ${
						view === views.MOBILE ? rhythm(1) : rhythm(2)
					}`,
				}}>
				<h3 style={{ ...scale(4 / 5) }}>
					Hi there!{' '}
					<span role='img' aria-label='waving hand'>
						👋
					</span>{' '}
					My name is Mark.
				</h3>
				<p style={{ ...scale(2 / 5) }}>
					I am an experienced{' '}
					<span className={style.purple}>frontend developer</span> building
					performant client side apps designed for humans. I'm mostly working
					with modern JavaScript tools like{' '}
					<span className={style.blue}>React</span>,{' '}
					<span className={style.blue}>Vue</span> and{' '}
					<span className={style.blue}>Svelte</span>. Or just write plain
					JavaScript code like an animal.{' '}
					<span role='img' aria-label='cat'>
						🐈
					</span>
					<a
						style={{
							...scale(1 / 8),
							margin: `${rhythm(1)} auto`,
							padding: `${rhythm(0.25)} ${rhythm(1)}`,
						}}
						href={resumeSrc}
						rel='noreferrer noopener'
						target='_blank'
						className={style.resumeButton}>
						Check my resume
					</a>
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

export default IndexPage
