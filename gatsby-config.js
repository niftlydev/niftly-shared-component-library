module.exports = {
    plugins: [
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
              path: `${__dirname}/static/images/uploads`
            },
          },
          {
            resolve: `gatsby-source-filesystem`,
            options: {
              path: `${__dirname}/static/content`,
            },
          },
					{
            resolve: `gatsby-source-filesystem`,
            options: {
										path: `${__dirname}/static/content/listing`,
            },
          },
					{
            resolve: `gatsby-transformer-remark`,
            options: {
              plugins: [
                // gatsby-remark-relative-images must go before gatsby-remark-images
                {
                  resolve: `gatsby-remark-relative-images`,
                  options: {
                    // [Optional] The root of "media_folder" in your config.yml
                    // Defaults to "static"
                    staticFolderName: 'static/images/uploads',
                    // [Optional] Include the following fields, use dot notation for nested fields
                    // All fields are included by default
                    include: ['featured'],
                    // [Optional] Exclude the following fields, use dot notation for nested fields
                    // No fields are excluded by default
                    exclude: ['featured.skip'],
                  },
                },
                {
                  resolve: `gatsby-remark-images`,
                  options: { maxWidth: 1024 },
                },
              ],
            },
					},
          `gatsby-plugin-typescript`,
          `gatsby-plugin-sass`,
          `gatsby-plugin-netlify-cms`
    ]
}
