import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { rhythm, scale } from '../typography'
import views from '../views'
import viewChangeHandler from '../helpers/viewChangeHandler'
import Label, { labelTypes } from '../components/label'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faHourglassHalf,
	faPen,
	faRocket,
} from '@fortawesome/free-solid-svg-icons'
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'
import * as style from './postPage.module.css'

const PostPage = ({ data: { mdx: post } }) => {
	const [view, setView] = useState(views.DESKTOP)

	useEffect(() => {
		deckDeckGoHighlightElement()
		viewChangeHandler(setView)
	}, [])

	const {
		image,
		imageAlt,
		category,
		tags,
		created,
		updated,
		language,
		title,
		description,
		slug,
	} = post.frontmatter

	return (
		<Layout view={view}>
			<Seo
				isBlogPost
				title={title}
				description={description}
				url={slug}
				image={getImage(image).images.fallback.src}
				datePublished={created}
			/>
			<GatsbyImage
				className={style.postImage}
				style={{ marginTop: rhythm(2) }}
				image={getImage(image)}
				alt={imageAlt}
			/>
			<article
				lang={language}
				className={style.article}
				style={{
					padding: `${rhythm(1)} ${rhythm(view === views.MOBILE ? 0.5 : 2)}`,
				}}>
				<header>
					<div style={{ margin: `${rhythm(0.3)} 0` }}>
						<span className={style.timeInfo}>
							<FontAwesomeIcon icon={faRocket} />{' '}
							{language === 'hu' ? `Publikálva: ` : `Published on: `}
							<time dateTime={created}>
								{new Date(created).toLocaleDateString(language)}
							</time>
						</span>
						{' ﹒ '}
						{updated && (
							<span className={style.timeInfo}>
								<FontAwesomeIcon icon={faPen} />{' '}
								{language === 'hu' ? `Frissítve: ` : `Updated on: `}
								<time dateTime={updated}>
									{new Date(updated).toLocaleDateString(language)}
								</time>
								{' ﹒ '}
							</span>
						)}
						<span className={style.timeInfo}>
							<FontAwesomeIcon icon={faHourglassHalf} />{' '}
							{language === 'hu'
								? `Olvasási idő: ${post.timeToRead} perc`
								: `Time to read: ${post.timeToRead} mins`}
						</span>
					</div>
					<div
						className={style.tagContainer}
						style={{ margin: `${rhythm(0.3)} 0` }}>
						<Label
							type={labelTypes.CATEGORY}
							textValue={category}
							style={{
								...scale(-1 / 5),
								padding: `0 ${rhythm(0.2)}`,
								margin: `0 ${rhythm(0.3)} ${rhythm(0.3)} 0`,
							}}
						/>
						{tags.map(tag => (
							<Label
								key={tag}
								type={labelTypes.TAG}
								textValue={tag}
								style={{
									...scale(-1 / 5),
									padding: `0 ${rhythm(0.2)}`,
									margin: `0 ${rhythm(0.3)} ${rhythm(0.3)} 0`,
								}}
							/>
						))}
					</div>
				</header>
				<MDXRenderer>{post.body}</MDXRenderer>
			</article>
		</Layout>
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
							width: 1200
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
				language
				slug
			}
			body
			timeToRead
		}
	}
`
