const slugify = require("slugify")
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    {
      allContentfulHelloGatsby {
        nodes {
          author
        }
      }
    }
  `)

  data?.allContentfulHelloGatsby?.nodes?.forEach(ele => {
    let { author } = ele
    slugified_path = slugify(author, { lower: true })

    const component_path = path.resolve(`./src/templates/book-template.js`)
    createPage({
      path: `/author/${slugified_path}`,
      component: component_path,
      context: {
        author: author,
      },
    })
  })
}
