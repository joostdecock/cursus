require('dotenv').config()
const jargon = require('./jargon.js')

const plugins = [
  `gatsby-plugin-sass`,
  // Automatically restores your cache and caches new files within the Netlify cache folder.
  //   To reset the cache, hit the Clear build cache checkbox in the Netlify app.
  'gatsby-plugin-netlify-cache',
  {
    resolve: 'gatsby-plugin-nprogress',
    options: {
      color: '#f783ac'
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/mdx`,
      name: 'markdown',
    }
  },
  {
    resolve: 'gatsby-plugin-mdx',
    options: {
      extensions: ['.md'],
      // Plugins workaround. See: https://github.com/gatsbyjs/gatsby/issues/15486
      plugins: [
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 800,
            showCaptions: ['title', 'alt'],
            markdownCaptions: true,
          }
        }
      ],
      gatsbyRemarkPlugins: [
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 800,
            showCaptions: ['title', 'alt'],
          }
        },
        {
          resolve: 'gatsby-remark-prismjs',
          options: {
            classPrefix: 'language-',
            inlineCodeMarker: null,
            aliases: {}
          }
        },
        'gatsby-remark-copy-linked-files',
        'gatsby-remark-autolink-headers',
        'gatsby-remark-smartypants',
        {
          resolve: 'gatsby-remark-jargon',
          options: { jargon }
        }
      ]
    }
  },
  'gatsby-plugin-sharp',
  'gatsby-transformer-sharp',
  'gatsby-plugin-catch-links',
  'gatsby-plugin-react-helmet',
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Cursus`,
      short_name: `Cursus`,
      start_url: `/`,
      background_color: `f8f9fa`,
      theme_color: `#212529`,
      display: `standalone`,
      icon: `static/logo.svg`
    }
  },
  'gatsby-plugin-netlify',
]

module.exports = {
  plugins: plugins,
  siteMetadata: {
    title: 'Cursus',
    titleTemplate: 'Cursus',
    description: 'Informatica lesses voor volwassenen',
    url: `https://cursus.decock.org`,
    siteUrl: `https://cursus.decock.org`,
    image: `https://cursus.decock.org/cursus.jpg`,
  }
}
