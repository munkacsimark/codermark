import React from 'react'
import { Helmet } from 'react-helmet'
import { socialItems } from './navbar'

const BASE_URL = 'https://codermark.dev'
const AUTHOR = 'Mark Munkacsi'

const SchemaOrg = React.memo(
	({ datePublished, description, image, isBlogPost, title, url }) => {
		const baseSchema = [
			{
				'@context': 'http://schema.org',
				'@type': 'WebSite',
				url,
				name: title,
			},
		]

		const schema = isBlogPost
			? [
					...baseSchema,
					{
						'@context': 'http://schema.org',
						'@type': 'BreadcrumbList',
						itemListElement: [
							{
								'@type': 'ListItem',
								position: 1,
								item: {
									'@id': url,
									name: title,
									...(image ? { image } : {}),
								},
							},
						],
					},
					{
						'@context': 'http://schema.org',
						'@type': 'BlogPosting',
						url,
						name: title,
						headline: title,
						...(image
							? {
									image: {
										'@type': 'ImageObject',
										url: image,
									},
							  }
							: {}),
						description,
						author: {
							'@type': 'Person',
							name: AUTHOR,
						},
						datePublished,
					},
			  ]
			: baseSchema

		return (
			<Helmet>
				{/* Schema.org tags */}
				<script type='application/ld+json'>{JSON.stringify(schema)}</script>
			</Helmet>
		)
	}
)

const Seo = ({ title, description, url, image, isBlogPost, datePublished }) => {
	return (
		<>
			<Helmet>
				{/* General tags */}
				<title>{`CoderMark | ${title}`}</title>
				<meta name='description' content={description} />
				{image ? <meta name='image' content={`${BASE_URL}${image}`} /> : null}

				{/* OpenGraph tags */}
				<meta property='og:url' content={`${BASE_URL}${url}`} />
				{isBlogPost ? <meta property='og:type' content='article' /> : null}
				<meta property='og:title' content={title} />
				<meta property='og:description' content={description} />
				{image ? (
					<meta property='og:image' content={`${BASE_URL}${image}`} />
				) : null}

				{/* Twitter Card tags */}
				<meta name='twitter:card' content='summary_large_image' />
				<meta
					name='twitter:creator'
					content={socialItems.find(item => item.title === 'Twitter').url}
				/>
				<meta name='twitter:title' content={title} />
				<meta name='twitter:description' content={description} />
				{image ? (
					<meta name='twitter:image' content={`${BASE_URL}${image}`} />
				) : null}
			</Helmet>
			<SchemaOrg
				isBlogPost={isBlogPost}
				url={`${BASE_URL}${url}`}
				title={title}
				image={`${BASE_URL}${image}`}
				description={description}
				datePublished={datePublished}
			/>
		</>
	)
}

export default Seo
