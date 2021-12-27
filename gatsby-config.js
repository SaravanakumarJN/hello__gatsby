/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Title 1",
    description: "Description 1",
    author: "Author 1",
    person: {
      name: "person1",
      age: 00,
    },
    simpleData: ["data1", "data2"],
    complexData: [
      {
        name: "Name1",
        age: 00,
      },
      {
        name: "Name2",
        age: 01,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`, // can be any name
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `sh5pkv1n6mjy`,
        accessToken: process.env.CONTENTFULL_API_KEY,
      },
    },
  ],
}
