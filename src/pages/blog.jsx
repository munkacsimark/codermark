import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const Blog = ({
	data: {
		allMdx: { nodes: posts },
	},
}) => {
	return (
		<>
			<div>Hello blog</div>
			{posts.map(post => (
				<div key={post.id} style={{ border: '2px solid black' }}>
					<Link to={post.frontmatter.slug}>OPEN</Link>
					<h2>{post.frontmatter.title}</h2>
					<GatsbyImage image={getImage(post.frontmatter.banner)} alt='meow' />
					<p>Cat: {post.frontmatter.tags}</p>
					<time>{post.frontmatter.date}</time>
				</div>
			))}
		</>
	)
}

export default Blog

export const pageQuery = graphql`
	query LastPosts {
		allMdx(sort: { order: DESC, fields: frontmatter___date }, limit: 10) {
			nodes {
				id
				frontmatter {
					slug
					tags
					title
					banner {
						childImageSharp {
							gatsbyImageData(
								width: 200
								placeholder: BLURRED
								formats: [AUTO, WEBP, AVIF]
							)
						}
					}
					tags
					date(formatString: "YYYY - MMMM - Do", locale: "hu")
					description
					published
					updated
				}
			}
		}
	}
`
