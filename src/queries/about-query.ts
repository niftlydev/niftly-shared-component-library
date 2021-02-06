import {useStaticQuery, graphql} from 'gatsby';

export const useAboutData = () => {
    const {allMarkdownRemark} = useStaticQuery(
        graphql`
            query MyQuery {
                allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/about.md/"}}) {
                    nodes {
                        frontmatter {
                        title
                        intro_list {
                            intro_item
                        }
                        team_member {
                            email
                            facebook
                            instagram
                            name
                            phone_number
                            photo
                            position
                            description
                        }
                        testimonial {
                            body
                            customer
                        }
                        jumbo_image
                        }
                        fileAbsolutePath
                    }
                }
            }
        `
    );

    return {...allMarkdownRemark.nodes[0].frontmatter, ...allMarkdownRemark.nodes[0]};
}