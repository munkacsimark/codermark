import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { rhythm, scale } from '../typography'
import views from '../views'
import { Link } from 'gatsby'
import Label, { labelTypes } from './label'
import { huFlag, usFlag } from '../helpers/flags'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faRocket } from '@fortawesome/free-solid-svg-icons'
import * as style from './postBox.module.css'

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

	return (
		<div
			lang={language}
			className={style.postBox}
			style={{
				flexBasis: `calc(${flexBasisMapForViewType[viewType]} - ${rhythm(
					viewType === views.MOBILE ? 0.5 : 1
				)})`,
				margin: viewType === views.MOBILE ? `${rhythm(0.5)} auto` : rhythm(0.5),
			}}>
			<div className={style.postHeader}>
				<Link to={slug} className={style.imageContainer}>
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
					style={{
						top: rhythm(0.5),
						right: rhythm(0.5),
						padding: rhythm(0.4),
					}}>
					{language === 'hu' ? huFlag : usFlag}
				</span>
				<div
					className={style.labelsContainer}
					style={{
						left: rhythm(0.5),
						bottom: rhythm(0.5),
					}}>
					<Label
						type={labelTypes.CATEGORY}
						textValue={category}
						style={{ padding: `${rhythm(0.1)} ${rhythm(0.3)}` }}
					/>
					<div
						className={style.tagContainer}
						style={{ marginTop: rhythm(0.5) }}>
						{tags.map(tag => (
							<Label
								key={tag}
								type={labelTypes.TAG}
								textValue={tag}
								style={{
									padding: `${rhythm(0.1)} ${rhythm(0.3)}`,
									marginRight: rhythm(0.5),
								}}
							/>
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
			<div className={style.timeHolder}>
				<time
					className={style.time}
					style={{
						...scale(-1 / 5),
						padding: `0 ${rhythm(0.5)}`,
						marginBottom: updated ? 0 : rhythm(0.5),
					}}
					dateTime={created}>
					<FontAwesomeIcon icon={faRocket} />{' '}
					{new Date(created).toLocaleDateString(language)}
				</time>
				{updated && (
					<time
						className={style.time}
						style={{
							...scale(-1 / 5),
							padding: `0 ${rhythm(0.5)}`,
							marginBottom: rhythm(0.5),
						}}
						dateTime={created}>
						<FontAwesomeIcon icon={faPen} />{' '}
						{new Date(created).toLocaleDateString(language)}
					</time>
				)}
			</div>
		</div>
	)
}

export default PostBox
