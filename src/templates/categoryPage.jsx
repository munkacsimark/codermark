import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import BigTitle from '../components/bigTitle'
import PostBox from '../components/postBox'
import { rhythm, scale } from '../typography'
import views from '../views'
import viewChangeHandler from '../helpers/viewChangeHandler'
import Label, { labelTypes } from '../components/label'
import * as style from './categoryPage.module.css'

const CategoryPage = ({
	data: {
		allMdx: { nodes: posts },
	},
	pageContext: { category },
}) => {
	const [view, setView] = useState(views.DESKTOP)

	useEffect(() => viewChangeHandler(setView), [])

	return (
		<>
			<Layout view={view}>
				<Seo
					title={`Posts in "${category}" category`}
					description={`Check the list of Mark Munkacsi's posts in "${category}" category.`}
					url={`/category/${category}`}
				/>
				<BigTitle
					view={view}
					style={{
						margin: `${rhythm(view === views.MOBILE ? 1 : 2)} 0`,
					}}
				/>
				<Label
					type={labelTypes.CATEGORY}
					textValue={category}
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

export default CategoryPage

export const pageQuery = graphql`
	query PostsByCategory($category: String) {
		allMdx(
			sort: { order: DESC, fields: frontmatter___created }
			filter: { frontmatter: { category: { eq: $category } } }
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
