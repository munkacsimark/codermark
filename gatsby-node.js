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
						tags
					}
				}
			}
		}
	`)
	if (result.errors) {
		reporter.panic('Failed to create pages for the posts/tags', result.errors)
	}
	const posts = result.data.allMdx.nodes
	const tags = [
		...new Set(
			posts.reduce((acc, post) => {
				return acc.concat(post.frontmatter.tags)
			}, [])
		),
	]

	posts.forEach(post => {
		createPage({
			path: post.frontmatter.slug,
			component: path.resolve(`./src/templates/post.jsx`),
			context: {
				id: post.id,
			},
		})
	})
	tags.forEach(tag => {
		createPage({
			path: `/tags/${tag}`,
			component: path.resolve(`./src/templates/tags.jsx`),
			context: {
				tag,
			},
		})
	})
}
