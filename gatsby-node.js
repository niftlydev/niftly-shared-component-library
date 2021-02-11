exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions

    const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`)
  
    const result = await graphql(`
    {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/blog/"}}, sort: {order: DESC, fields: [frontmatter___date]}, limit: 1000) {
        edges {
          node {
            frontmatter {
              slug
              title
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
      console.log(node.frontmatter.slug);
      createPage({
        path: "blog/" + node.frontmatter.slug,
        component: blogPostTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      })
    })
  }



