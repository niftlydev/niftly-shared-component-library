module.exports = {
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
          `gatsby-plugin-netlify-cms`
    ]
}