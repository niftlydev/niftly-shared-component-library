
const {createFilePath} = require('gatsby-source-filesystem')

exports.onCreateNode = ({node, getNode, actions}) => {
  const {createNodeField} = actions
  if(node.internal.type === `MarkdownRemark`) {
    //const slug = createFilePath({node, getNode})
    const value = createFilePath({ node, getNode, trailingSlash:false })
    createNodeField({
      node,
      name: `slug`,
      value: `${value.indexOf("/") > -1 ? value.substring(value.lastIndexOf("/")) : value}`
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
      //console.log(node.frontmatter.slug);
      createPage({
        path: node.fields.slug,
        component: listingTemplate,
        context: {
          data: node
        },
      })
    })


    const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`)
    const blogCollectionNavTemplate = require.resolve(`./src/templates/blogCollectionNavTemplate.tsx`)

    const blogResult = await graphql(`
    {
      allMarkdownRemark(
        filter: {frontmatter: {layout: {eq: "blog"}}}
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
                title
                collection
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (blogResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query for creating blogs.`)
    return
  }

  blogResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    var formatCollectionForUrl = node.frontmatter.collection.replace(/\s+/g, '-').toLowerCase();
    createPage({
      path: "/blog/" + formatCollectionForUrl + node.fields.slug,
      component: blogPostTemplate,
      context: {
        // additional data can be passed via context
        slug: node.fields.slug,
      },
    })
  })

  var collections = ["Selling Your Home", "Buying a Home", "Real Estate Tips", "Discover OKC"]

  collections.forEach( collection => {
      var formatCollectionForUrl = collection.replace(/\s+/g, '-').toLowerCase();
      createPage({
        path: "/blog/" + formatCollectionForUrl,
        component: blogCollectionNavTemplate,
        context: {
          // additional data can be passed via context
          collection: collection,
        },
      })
    })


  }



