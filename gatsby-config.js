const path = require('path')

const {author, description, version} = require('./package')

module.exports = {
  siteMetadata: {
    title: 'Ohar',
    description,
    author,
    version,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        logo: `src/images/logo.png`,
        icon: `src/images/adeptus-mechanicus.png`,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@': path.resolve(__dirname, 'src'),
          'root': path.resolve(__dirname),
        },
        extensions: [
          'js',
          'json',
          'jsx',
        ]
      }
    },
  ],
}
