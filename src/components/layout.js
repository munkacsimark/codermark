import React, { useState } from 'react'
import Navbar from './navbar'
import BackgroundImage from './backgroundImage'
import { rhythm, scale } from '../typography'
import '../vars.css'
import '../global.css'
import * as style from './layout.module.css'
import views from '../views'

const UNSLPASH_APP_NAME = 'codermark.dev'

const Layout = ({ children, view, disableBackground }) => {
	const [backgroundImageData, setBackgroundImageData] = useState()

	const UNSPLASH_CREDIT_LINK = `https://unsplash.com/@${backgroundImageData?.username}?utm_source=${UNSLPASH_APP_NAME}&utm_medium=referral`
	const UNSPLASH_CREDIT_NAME = backgroundImageData?.name
	const UNSPLASH_LINK = `https://unsplash.com/?utm_source=${UNSLPASH_APP_NAME}&utm_medium=referral`
	const GATSBY_LINK = 'https://www.gatsbyjs.com'

	return (
		<>
			<Navbar />
			{!disableBackground && (
				<BackgroundImage onLoad={setBackgroundImageData} />
			)}
			{/* 26px is the navbar social icon which is the biggest element in it */}
			<main
				style={{
					padding: `calc(26px + 2 * ${rhythm(0.5)}) ${
						view === views.MOBILE ? rhythm(0.5) : rhythm(1)
					}`,
					minHeight: `calc(100vh - (26px + ${rhythm(0.5)}))`,
				}}
				className={style.main}>
				{children}
			</main>
			<footer
				className={style.footer}
				style={{ ...scale(-1 / 5), padding: rhythm(0.25) }}>
				<span>
					Created with <a href={GATSBY_LINK}>Gatsby</a>
				</span>
				{!disableBackground && (
					<>
						<span> | </span>
						<span>
							Background image by{' '}
							<a
								href={UNSPLASH_CREDIT_LINK}
								rel='noreferrer noopener'
								target='_blank'>
								{UNSPLASH_CREDIT_NAME}
							</a>{' '}
							on{' '}
							<a href={UNSPLASH_LINK} rel='noreferrer noopener' target='_blank'>
								Unsplash
							</a>
						</span>
					</>
				)}
			</footer>
		</>
	)
}

export default Layout
