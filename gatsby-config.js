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
