module.exports = {
    siteMetadata: {
      title: "Kashani Real Estate",
      titleTemplate: "Kashani Real Estate",
      description:
        "The best real estate website ever",
      url: "https://kashani-re-dev.netlify.app", // No trailing slash allowed!
      image: "/static/images/artboard-1.jpg", // Path to your image you placed in the 'static' folder
      twitterUsername: "@jd21daugherty",
    },
    plugins: [
          {
            resolve: `gatsby-source-filesystem`,
            options: {
              path: `${__dirname}/static/images`
            },
          },
          {
            resolve: `gatsby-source-filesystem`,
            options: {
              path: `${__dirname}/static/content`,
            },
          },
          `gatsby-transformer-sharp`,
          `gatsby-plugin-sharp`,
          `gatsby-plugin-netlify-cms-paths`,
          {
            resolve: `gatsby-transformer-remark`,
            options: {
              plugins: [
                `gatsby-plugin-netlify-cms-paths`,
              ],
            },
          },
          {
            resolve: "@chakra-ui/gatsby-plugin",
            options: {
              /**
               * @property {boolean} [isResettingCSS=true]
               * if `false`, this plugin will not use `<CSSReset />
               */
              isResettingCSS: true,
              /**
               * @property {boolean} [isUsingColorMode=true]
               * if `false`, this plugin will not use <ColorModeProvider />
               */
              isUsingColorMode: true,
              /**
               * @property {number} [portalZIndex=40]
               * The z-index to apply to all portal nodes. This is useful
               * if your app uses a lot z-index to position elements.
               */
              portalZIndex: 40,
            },
          },
          `gatsby-plugin-typescript`,
          `gatsby-plugin-sass`,
          `gatsby-plugin-netlify-cms`,
          `gatsby-plugin-react-helmet`,
          {
            resolve: 'gatsby-plugin-mailchimp',
            options: {
                endpoint: 'https://gmail.us1.list-manage.com/subscribe/post?u=f3480738c6947a2ad39014435&amp;id=6a28bfa605', // string; add your MC list endpoint here; see instructions below
                timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
            }
          }
    ]
}
