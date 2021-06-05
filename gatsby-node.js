const path = require('path')

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
	reporter.info(`Your Gatsby site has been built!`)
}

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	const result = await graphql(`
		query MyQuery {
			allMdx(sort: { order: DESC, fields: frontmatter___date }) {
				nodes {
					id
					frontmatter {
						slug
						category
						tags
					}
				}
			}
		}
	`)
	if (result.errors) {
		reporter.panic(
			'Failed to create pages for the posts/tag/category',
			result.errors
		)
	}
	const posts = result.data.allMdx.nodes

	const existingCategories = [
		...new Set(posts.map(post => post.frontmatter.category)),
	]

	const existingTags = [
		...new Set(
			posts.reduce((acc, post) => acc.concat(post.frontmatter.tags), [])
		),
	]

	posts.forEach(post => {
		createPage({
			path: post.frontmatter.slug,
			component: path.resolve(`./src/templates/postPage.jsx`),
			context: {
				id: post.id,
			},
		})
	})

	existingCategories.forEach(category => {
		createPage({
			path: `/category/${category}`,
			component: path.resolve('./src/templates/categoryPage.jsx'),
			context: {
				category,
			},
		})
	})

	existingTags.forEach(tag => {
		createPage({
			path: `/tag/${tag}`,
			component: path.resolve('./src/templates/tagPage.jsx'),
			context: {
				tag,
			},
		})
	})
}
