/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config()

const queries = require('./src/utils/algolia_queries')

module.exports = {
  siteMetadata: {
    title: `Danilo Sales`,
    position: 'Senior Software Enginner',
    description: `Um blog sobre diversas tecnologias de desenvolvimento`,
    author: `@danilosalesinfo`,
    siteUrl: `https://danilosales.dev`
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    // needs to be the first to work with gatsby-remark-image
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images-v2`,
            options: {
              name: 'uploads'
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false
            }
          },
          `gatsby-remark-lazy-load`,
          `gatsby-remark-prismjs`
        ]
      }
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000,
        enablePartialUpdates: true
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          'G-TV6YS3K932' // Google Analytics / GA
        ],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0
        },
        pluginConfig: {
          head: false,
          respectDNT: true
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Danilo Sales Blog`,
        short_name: `Danilo Sales`,
        start_url: `/`,
        background_color: `#16202c`,
        theme_color: `#16202c`,
        display: `minimal-ui`,
        icon: `src/images/icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.description,
                  date: edge.node.frontmatter.date,
                  tags: edge.node.frontmatter.tags.join(','),
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  link: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }]
                })
              })
            },
            query: `
              {
                allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
                  edges {
                    node {
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        description
                        date
                        tags
                      }
                      excerpt
                      html
                    }
                  }
                }
              }
            `,
            output: '/feed.xml',
            title: 'Danilo Sales Blog - RSS Feed'
          }
        ]
      }
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`
  ]
}
