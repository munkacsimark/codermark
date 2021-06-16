import React, { useEffect, useState } from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'
import { rhythm, scale } from '../typography'
import * as style from './postPage.module.css'
import views from '../views'

const PostPage = ({ data: { mdx: post } }) => {
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

	const { image, imageAlt, category, tags, created, updated, language } =
		post.frontmatter

	return (
		<Layout>
			<GatsbyImage
				className={style.postImage}
				style={{ marginTop: rhythm(2) }}
				image={getImage(image)}
				alt={imageAlt}
			/>
			<article
				className={style.article}
				style={{
					padding: `${rhythm(1)} ${rhythm(view === views.MOBILE ? 1 : 3)}`,
				}}>
				<header>
					<div style={{ margin: `${rhythm(0.3)} 0` }}>
						<span className={style.timeInfo}>
							<span role='img' aria-label='rocket'>
								🚀
							</span>{' '}
							{language === 'hu' ? `Publikálva: ` : `Published on: `}
							<time dateTime={created}>
								{new Date(created).toLocaleDateString(language)}
							</time>
						</span>
						{' ﹒ '}
						{updated && (
							<span className={style.timeInfo}>
								<span role='img' aria-label='thinking face'>
									🤔
								</span>{' '}
								{language === 'hu' ? `Frissítve: ` : `Updated on: `}
								<time dateTime={updated}>
									{new Date(updated).toLocaleDateString(language)}
								</time>
								{' ﹒ '}
							</span>
						)}
						<span className={style.timeInfo}>
							<span role='img' aria-label='books'>
								📚
							</span>{' '}
							{language === 'hu'
								? `Olvasási idő: ${post.timeToRead} perc`
								: `Time to read: ${post.timeToRead} mins`}
						</span>
					</div>
					<div
						className={style.tagContainer}
						style={{ margin: `${rhythm(0.3)} 0` }}>
						<Link
							to={`/category/${category}`}
							className={style.category}
							style={{
								...scale(-1 / 5),
								padding: `0 ${rhythm(0.2)}`,
							}}>
							<span role='img' aria-label='folder'>
								📂
							</span>{' '}
							{category}
						</Link>
						{tags.map(tag => (
							<Link
								key={tag}
								to={`/tag/${tag}`}
								className={style.tag}
								style={{
									...scale(-1 / 5),
									padding: `0 ${rhythm(0.2)}`,
									marginLeft: rhythm(0.3),
								}}>
								<span role='img' aria-label='tag'>
									🏷
								</span>{' '}
								{tag}
							</Link>
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
				published
				language
			}
			body
			timeToRead
		}
	}
`
