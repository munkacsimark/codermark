import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import BigTitle from '../components/bigTitle'
import PostBox from '../components/postBox'
import { rhythm, scale } from '../typography'
import views from '../views'
import viewChangeHandler from '../helpers/viewChangeHandler'
import Label, { labelTypes } from '../components/label'
import * as style from './tagPage.module.css'

const TagPage = ({
	data: {
		allMdx: { nodes: posts },
	},
	pageContext: { tag },
}) => {
	const [view, setView] = useState(views.DESKTOP)

	useEffect(() => viewChangeHandler(setView), [])

	return (
		<>
			<Layout view={view}>
				<Seo
					title={`CoderMark | Posts with "${tag}" tag.`}
					description={`Check the list of Mark Munkacsi's posts with "${tag}" tag.`}
					url={`/tag/${tag}`}
				/>
				<BigTitle
					view={view}
					style={{
						margin: `${rhythm(view === views.MOBILE ? 1 : 2)} 0`,
					}}
				/>
				<Label
					type={labelTypes.TAG}
					textValue={tag}
					style={{
						...scale(2 / 5),
						padding: `${rhythm(0.2)} ${rhythm(0.6)}`,
						marginBottom: rhythm(1),
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

export default TagPage

export const pageQuery = graphql`
	query PostsByTag($tag: String) {
		allMdx(
			sort: { order: DESC, fields: frontmatter___created }
			filter: { frontmatter: { tags: { in: [$tag] } } }
		) {
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
