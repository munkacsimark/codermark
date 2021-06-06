import React from 'react'
import Navbar from './navbar'
import BackgroundImage from './backgroundImage'
import { rhythm } from '../typography'
import * as style from './layout.module.css'
import '../vars.css'
import '../global.css'

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<BackgroundImage />
			{/* 26px is the navbar social icon which is the biggest element in it */}
			<main
				style={{ padding: `calc(26px + 2 * ${rhythm(0.5)}) ${rhythm(1)}` }}
				className={style.main}>
				{children}
			</main>
		</>
	)
}

export default Layout
