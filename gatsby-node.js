/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
//
const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
        parent {
          ... on File {
            name
            relativePath
            sourceInstanceName
          }
        }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (!node.frontmatter.path) {
      node.frontmatter.path = '/draft/' + node.parent.name;
      console.error(node.parent.name + ".md doesn't have a frontmatter.path -> "+node.frontmatter.path);
      return;
      //node.frontmatter.path = "/" + node.parent.sourceInstanceName + '/' + node.parent.name;
    }
    if (!node.frontmatter.title) {
      node.frontmatter.title="DRAFT " + node.parent.name;
    }
    try {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    })
    } catch (e) {
      console.log(e);
    }
  })
}
