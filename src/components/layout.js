import React from 'react'
import Navbar from './navbar'
import Particles from 'react-tsparticles'
import particlesConfig from '../../particles.json'
import { rhythm } from '../typography'
import views from '../views'
import '../vars.css'
import '../global.css'
import * as style from './layout.module.css'

const Layout = ({ children, view }) => {
	return (
		<>
			<Navbar />
			<Particles id='tsparticles' options={particlesConfig} />
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
		</>
	)
}

export default Layout
