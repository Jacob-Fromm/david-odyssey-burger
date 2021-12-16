require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const clientConfig = require('./client-config')
const token = process.env.SANITY_READ_TOKEN

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  siteMetadata: {
    title: `David Odyssey`,
    description: `enter the angel dimension`,
    author: `Jacob Fromm`,
    image: `https://davidodyssey.com/static/DAVID_SPLASH_PAGE_2-b5a4d9efca674b257511929c2bcd3967.jpg`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  //   {
  //   resolve: 'gatsby-plugin-og-images',
  //   options: {
  //     template: 'og',
  //     domain: `https://davidodyssey.com`,
  //     debug: true
  //   }
  // },
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
        icon: `src/images/DAVID_SPLASH_PAGE_2.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        projectId: 'tnd2c0o9',
        dataset: 'production',
        overlayDrafts: true,
        watchMode: true,
        token: 'skCpnXZUax9LyYZob4EaM7MeJp7d2dXzvx9WTCo92DUyBgjHnWqyoDWDbsnUd7Y7P935wQv7c35p7dqkMwxieBMMzSbvhpg2mbrF7THWYZ4wwAE45GC6A5p2kg7dClAAfwMiSJLu6225ynG82eKHuANdozTd5MpoxiDUfL68W4r0yjICSuQm',
        // a token with read permissions is required
        // if you have a private dataset
        // token: process.env.MY_SANITY_TOKEN,
        // watchMode: !isProd,
        // overlayDrafts: !isProd && token
      }
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
