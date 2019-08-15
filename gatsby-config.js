/* eslint-disable comma-dangle */
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-140855676-2',
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Lexend Exa',
            variants: [
              '400',
              '400i',
              '700',
              '700i'
            ],
          },
          {
            family: 'Open Sans',
          },
          {
            family: 'Montserrat',
            variants: [
              '400',
              '400i',
              '600',
              '700',
              '700i'
            ],
          },
        ]
      }
    }
  ]
};
