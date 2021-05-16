import React from 'react'
import { graphql } from 'gatsby'

const Tags = ({
	data: {
		allMdx: { nodes: posts },
	},
	pageContext: { tag },
}) => {
	return (
		<>
			<h1>TAG: {tag}</h1>
			{posts.map(post => (
				<div key={post.id}>
					<h2>{post.frontmatter.title}</h2>
					<ul>
						{post.frontmatter.tags.map(tag => (
							<li key={tag}>{tag}</li>
						))}
					</ul>
				</div>
			))}
		</>
	)
}

export default Tags

export const pageQuery = graphql`
	query Tags($tag: String) {
		allMdx(
			sort: { order: DESC, fields: frontmatter___date }
			filter: { frontmatter: { tags: { in: [$tag] }, published: { eq: true } } }
		) {
			nodes {
				id
				frontmatter {
					tags
					title
				}
			}
		}
	}
`
