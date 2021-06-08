import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { rhythm } from '../typography'
import BigTitle from '../components/bigTitle'
import PostBox from '../components/postBox'
import views from '../views'
import * as style from './index.module.css'

const Index = ({
	data: {
		allMdx: { nodes: posts },
	},
}) => {
	const [view, setView] = useState(views.DESKTOP)

	useEffect(() => {
		const mediaQueryDesktop = window.matchMedia('(min-width: 1025px)')
		const mediaQueryTablet = window.matchMedia(
			'(min-width: 769px) and (max-width: 1024px)'
		)
		const mediaQueryMobile = window.matchMedia('(max-width: 768px)')

		const handleDesktopChange = event => {
			if (event.target.matches) setView(views.DESKTOP)
		}
		const handleTabletChange = event => {
			if (event.target.matches) setView(views.TABLET)
		}
		const handleMobileChange = event => {
			if (event.target.matches) setView(views.MOBILE)
		}

		mediaQueryDesktop.addEventListener('change', handleDesktopChange)
		mediaQueryTablet.addEventListener('change', handleTabletChange)
		mediaQueryMobile.addEventListener('change', handleMobileChange)
		return () => {
			mediaQueryDesktop.removeEventListener('change', handleDesktopChange)
			mediaQueryTablet.removeEventListener('change', handleTabletChange)
			mediaQueryMobile.removeEventListener('change', handleMobileChange)
		}
	}, [])

	return (
		<>
			<Layout>
				<BigTitle
					showSubtitle
					style={{
						margin: `${rhythm(view === views.MOBILE ? 1 : 2)} 0`,
					}}
				/>
				<div className={style.postContainer}>
					{posts.map(post => (
						<PostBox
							key={post.id}
							postData={post.frontmatter}
							viewType={view}
						/>
					))}
				</div>
			</Layout>
		</>
	)
}

export default Index

export const pageQuery = graphql`
	query LastPosts {
		allMdx(sort: { order: DESC, fields: frontmatter___created }, limit: 12) {
			nodes {
				id
				frontmatter {
					slug
					tags
					title
					image {
						childImageSharp {
							gatsbyImageData(
								width: 400
								placeholder: BLURRED
								formats: [AUTO, WEBP, AVIF]
							)
						}
					}
					imageAlt
					category
					tags
					created
					updated
					description
					published
					language
				}
			}
		}
	}
`
