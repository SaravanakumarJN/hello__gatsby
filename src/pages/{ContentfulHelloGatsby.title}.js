import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"

const BookTemplate = ({ data }) => {
  const {
    bookCover,
    title,
    author,
    description: { description },
  } = data.contentfulHelloGatsby
  const image = getImage(bookCover)
  return (
    <Layout>
      <div>
        <div>
          {title} {author}
        </div>
        <div>
          <GatsbyImage image={image} alt={title} />
        </div>
        <div>{description}</div>
      </div>
    </Layout>
  )
}

export const gqlquery = graphql`
  query getIndividualBook($title: String) {
    contentfulHelloGatsby(title: { eq: $title }) {
      id
      title
      author
      bookCover {
        gatsbyImageData(
          height: 200
          width: 200
          layout: FIXED
          placeholder: BLURRED
        )
      }
      description {
        description
      }
    }
  }
`

export default BookTemplate
