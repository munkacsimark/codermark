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

const IndexPage = () => {
	const [view, setView] = useState(views.DESKTOP)

	useEffect(() => viewChangeHandler(setView), [])

	return (
		<Layout view={view}>
			<Seo
				title='CoderMark | About'
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
				<h3 style={{ ...scale(4 / 5) }}>Hi there! My name is Mark Munkacsi.</h3>
				<p style={{ ...scale(2 / 5) }}>
					I'm a passionate developer, who is always learning and looking for new
					challenges. I started my career as a UI designer & sitebuilder so I
					have good design sense and I can understand and collaborate easily
					with designers. Currently I'm working as a frontend developer with
					more than 6 years of experience. My strengths are plain
					JavaScript(ES6+) and client side apps(SPAs) written in frameworks like
					React or Vue. When it's reasonable I like to work with TypeScript. I
					have experience with WebExtensions as well.
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
