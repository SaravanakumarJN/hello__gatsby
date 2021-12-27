import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const gqlquery = graphql`
  query getAuthorBooks($author: String) {
    allContentfulHelloGatsby(filter: { author: { eq: $author } }) {
      nodes {
        id
        title
        author
        bookCover {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            width: 200
            height: 200
          )
        }
        description {
          description
        }
      }
    }
  }
`

const BookTemplate = ({ data }) => {
  const { nodes } = data.allContentfulHelloGatsby

  return (
    <Layout>
      <div>
        {nodes?.map((book, i) => {
          let image = getImage(book.bookCover)

          return (
            <div key={i}>
              <div>
                {book.title} - {book.author}
              </div>
              <div>
                <GatsbyImage image={image} alt={book.title} />
              </div>
              <div>{book.description.description}</div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default BookTemplate
