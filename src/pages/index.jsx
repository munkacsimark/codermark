import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import Layout from '../components/layout'
import { rhythm } from '../typography'
import BigTitle from '../components/bigTitle'
import PostBox from '../components/postBox'
import views from '../views'
import viewChangeHandler from '../helpers/viewChangeHandler'
import * as style from './index.module.css'

const Index = ({
	data: {
		allMdx: { nodes: posts },
	},
}) => {
	const [view, setView] = useState(views.DESKTOP)

	useEffect(() => viewChangeHandler(setView), [])

	return (
		<>
			<Layout view={view}>
				<Seo
					title='CoderMark | Blog home'
					description="Check Mark Munkacsi's posts about frontend, coding, tech and everyday stuff."
					url=''
				/>
				<BigTitle
					view={view}
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
					created
					updated
					description
					language
				}
			}
		}
	}
`
