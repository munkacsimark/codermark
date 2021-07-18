const a11yEmoji = require('@fec/remark-a11y-emoji')

const BASE_URL = 'https://codermark.dev'

module.exports = {
	siteMetadata: {
		siteUrl: BASE_URL,
	},
	plugins: [
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-fontawesome-css',
		'gatsby-plugin-sitemap',
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: BASE_URL,
				sitemap: `${BASE_URL}/sitemap/sitemap-index.xml`,
				policy: [{ userAgent: '*', allow: '/' }],
			},
		},
		{
			resolve: `gatsby-plugin-feed-mdx`,
			options: {
				feeds: [
					{
						serialize: ({ query: { allMdx } }) =>
							allMdx.edges.map(edge =>
								Object.assign({}, edge.node.frontmatter, {
									description: edge.node.frontmatter.description,
									date: edge.node.frontmatter.created,
									url: `${BASE_URL}${edge.node.slug}`,
									guid: `${BASE_URL}${edge.node.slug}`,
									custom_elements: [{ 'content:encoded': edge.node.html }],
								})
							),
						query: `
							{
								allMdx(
									sort: { order: DESC, fields: frontmatter___created },
								) {
									edges {
										node {
											excerpt
											html
											slug
											frontmatter {
												title
												created
												description
											}
										}
									}
								}
							}
						`,
						output: './rss.xml',
						title: 'CoderMark Blog',
					},
				],
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/images/icon.png',
			},
		},
		{
			resolve: 'gatsby-plugin-mdx',
			options: {
				remarkPlugins: [a11yEmoji],
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: './src/pages/',
			},
			__key: 'pages',
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'posts',
				path: './src/content/',
			},
			__key: 'posts',
		},
		{
			resolve: 'gatsby-plugin-typography',
			options: {
				pathToConfigModule: 'src/typography',
				omitGoogleFont: true,
			},
		},
	],
}
