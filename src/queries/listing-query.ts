import {useStaticQuery, graphql} from 'gatsby';

export const useListingData = () => {
    const {allMarkdownRemark} = useStaticQuery(
        graphql`
        query Listings {
					allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/content/listing//"}}) {
						edges {
							node {
								fileAbsolutePath
								frontmatter {
									address
                  bio
									price
									listing_image
								}
                fields {
                  slug
                }
							}
						}
					}
        }
        `
    );

    return {...allMarkdownRemark};
}
