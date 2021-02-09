import {useStaticQuery, graphql} from 'gatsby';

export const useListingData = () => {
    const {allMarkdownRemark} = useStaticQuery(
        graphql`
        query Listings {
            allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/listings.md/"}}) {
              edges {
                node {
                  fileAbsolutePath
                  frontmatter {
                    listing {
                      description
                      photo
                      price
                    }
                  }
                }
              }
            }
          }
          
        `
    );

    return {...allMarkdownRemark.edges[0].node.frontmatter, ...allMarkdownRemark.edges[0].node};
}
