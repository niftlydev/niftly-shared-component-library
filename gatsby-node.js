
const {createFilePath} = require('gatsby-source-filesystem')

exports.onCreateNode = ({node, getNode, actions}) => {
  const {createNodeField} = actions
  if(node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({node, getNode, basePath: `pages`})
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
  
    const listingTemplate = require.resolve(`./src/templates/listingTemplate.tsx`)
  
    const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000,
        filter: {fileAbsolutePath: {regex: "/listing//"}}
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              address
              bio
              price
              listing_image {
                childImageSharp {
                  fluid {
                    base64
                    aspectRatio
                    src
                    srcSet
                    sizes
                  }
                }
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
      console.log(node.frontmatter.slug);
      createPage({
        path: node.fields.slug,
        component: listingTemplate,
        context: {
          data: node
        },
      })
    })
  }



