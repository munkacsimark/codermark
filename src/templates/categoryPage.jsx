import React from 'react'
import { graphql } from 'gatsby'

const CategoryPage = ({
	data: {
		allMdx: { nodes: posts },
	},
	pageContext: { category },
}) => {
	return (
		<>
			<h1>CATEGORY: {category}</h1>
			{posts.map(post => (
				<div key={post.id}>
					<h2>{post.frontmatter.title}</h2>
					<h3>cat.: {category}</h3>
				</div>
			))}
		</>
	)
}

export default CategoryPage

export const pageQuery = graphql`
	query PostsByCategory($category: String) {
		allMdx(
			sort: { order: DESC, fields: frontmatter___created }
			filter: {
				frontmatter: { category: { eq: $category }, published: { eq: true } }
			}
		) {
			nodes {
				id
				frontmatter {
					category
					title
				}
			}
		}
	}
`
