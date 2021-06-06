import React from 'react'
import Navbar from './navbar'
import BackgroundImage from './backgroundImage'
import { rhythm } from '../typography'

import '../vars.css'

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<BackgroundImage />
			{/* 26px is the navbar social icon which is the biggest element in it */}
			<main style={{ paddingTop: `calc(26px + 2 * ${rhythm(0.5)})` }}>
				{children}
			</main>
		</>
	)
}

export default Layout
