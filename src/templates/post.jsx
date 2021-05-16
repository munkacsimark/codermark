import React from "react";
import { graphql } from 'gatsby'
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {MDXRenderer} from "gatsby-plugin-mdx";

const Post = ({ data: { mdx: post } }) => {
  return<div>
      <GatsbyImage image={getImage(post.frontmatter.banner)} alt='meow' />
    <h1>{post.frontmatter.title}</h1>
      <div><time>{ post.frontmatter.date }</time></div>
    <p>Time to read: {post.timeToRead} mins</p>
    <MDXRenderer title="My Stuff!">{post.body}</MDXRenderer>
  </div>
}

export default Post

export const pageQuery = graphql`
    query Post($id: String!) {
        mdx(id: { eq: $id }) {
            frontmatter {
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
                date(formatString: "MMMM Do, YYYY")
                tags
            }
            body
            timeToRead
        }
    }
`
