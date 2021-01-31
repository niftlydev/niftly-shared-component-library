module.exports = {
    plugins: [
        `gatsby-plugin-netlify-cms`,
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
          {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `markdown-pages`,
              path: `${__dirname}/src/markdown-pages`,
            },
          },
          {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `content`,
              path: `${__dirname}/static/content`,
            },
          }
          `gatsby-transformer-remark`,
          `gatsby-plugin-typescript`,
          `gatsby-plugin-sass`
    ]
}