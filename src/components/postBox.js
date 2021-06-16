import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { rhythm, scale } from '../typography'
import views from '../views'
import * as style from './postBox.module.css'
import { Link } from 'gatsby'

const PostBox = ({ postData, viewType }) => {
	const {
		slug,
		title,
		description,
		image,
		imageAlt,
		category,
		tags,
		created,
		updated,
		language,
	} = postData

	const flexBasisMapForViewType = {
		[views.DESKTOP]: '33.33%',
		[views.TABLET]: '50%',
		[views.MOBILE]: '100%',
	}

	console.log(image)

	return (
		<div
			lang={language}
			className={style.postBox}
			style={{
				flexBasis: `calc(${flexBasisMapForViewType[viewType]} - ${rhythm(
					viewType === views.MOBILE ? 0.5 : 1
				)})`,
				margin: rhythm(0.5),
			}}>
			<div className={style.imageContainer}>
				<Link to={slug}>
					<GatsbyImage
						className={style.image}
						image={getImage(image)}
						alt={imageAlt}
					/>
				</Link>
				<span
					role='img'
					aria-label={language === 'hu' ? 'hungarian' : 'english'}
					title={language === 'hu' ? 'hungarian' : 'english'}
					className={style.language}
					style={{ ...scale(3 / 5), top: rhythm(0.5), right: rhythm(0.5) }}>
					{language === 'hu' ? '🇭🇺' : '🇺🇸'}
				</span>
				<div
					className={style.labelsContainer}
					style={{
						left: rhythm(0.5),
						bottom: rhythm(0.5),
					}}>
					<Link
						to={`/category/${category}`}
						className={style.category}
						style={{
							padding: `${rhythm(0.1)} ${rhythm(0.3)}`,
						}}>
						<span role='img' aria-label='folder'>
							📂
						</span>{' '}
						{category}
					</Link>
					<div
						className={style.tagContainer}
						style={{ marginTop: rhythm(0.5) }}>
						{tags.map(tag => (
							<Link
								key={tag}
								to={`/tag/${tag}`}
								className={style.tag}
								style={{
									padding: `${rhythm(0.1)} ${rhythm(0.3)}`,
									marginRight: rhythm(0.5),
								}}>
								<span role='img' aria-label='tag'>
									🏷
								</span>{' '}
								{tag}
							</Link>
						))}
					</div>
				</div>
			</div>
			<h3 className={style.title} style={{ padding: `0 ${rhythm(1)}` }}>
				<Link to={slug}>{title}</Link>
			</h3>
			<hr className={style.hr} />
			<p style={{ padding: `0 ${rhythm(1)}` }}>{description}</p>
			<hr className={style.hr} />
			<time
				className={style.time}
				style={{
					padding: `0 ${rhythm(1)}`,
					marginBottom: updated ? 0 : rhythm(0.5),
				}}
				dateTime={created}>
				<span role='img' aria-label='clock'>
					🕓
				</span>{' '}
				{new Date(created).toLocaleDateString(language)}
			</time>
			{updated && (
				<time
					className={style.time}
					style={{ padding: `0 ${rhythm(1)}`, marginBottom: rhythm(0.5) }}
					dateTime={created}>
					Updated: {new Date(created).toLocaleDateString(language)}
				</time>
			)}
		</div>
	)
}

export default PostBox
