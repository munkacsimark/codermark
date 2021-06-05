import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const PostPage = ({ data: { mdx: post } }) => {
	return (
		<div>
			<GatsbyImage
				image={getImage(post.frontmatter.image)}
				alt={post.frontmatter.imageAlt}
			/>
			<h1>{post.frontmatter.title}</h1>
			<div>
				<time>{post.frontmatter.date}</time>
			</div>
			<p>Time to read: {post.timeToRead} mins</p>
			<MDXRenderer title='My Stuff!'>{post.body}</MDXRenderer>
		</div>
	)
}

export default PostPage

export const pageQuery = graphql`
	query Post($id: String!) {
		mdx(id: { eq: $id }) {
			frontmatter {
				title
				image {
					childImageSharp {
						gatsbyImageData(
							width: 200
							placeholder: BLURRED
							formats: [AUTO, WEBP, AVIF]
						)
					}
				}
				imageAlt
				date(formatString: "MMMM Do, YYYY")
				tags
			}
			body
			timeToRead
		}
	}
`
