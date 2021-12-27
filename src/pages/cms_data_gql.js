import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import slugify from "slugify"

export const gqlquery = graphql`
  {
    allContentfulHelloGatsby {
      totalCount
      nodes {
        id
        title
        author
        description {
          description
        }
        publishYear
        bookCover {
          gatsbyImageData(
            layout: FULL_WIDTH
            height: 200
            placeholder: BLURRED
            width: 200
          )
        }
      }
    }
  }
`

const Books = props => {
  let { nodes } = props.data.allContentfulHelloGatsby

  return (
    <Layout>
      <div>Books</div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {nodes?.map((book, i) => {
          // let { description } = book.description
          let image = getImage(book.bookCover)

          let slugified_route = slugify(book.title, { lower: true })
          return (
            <Link key={i} to={`/${slugified_route}`}>
              <Book>
                <div>
                  {book.title} - {book.author}
                </div>
                <div>
                  <GatsbyImage image={image} alt="book cover image" />
                </div>
              </Book>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

const Book = styled.div`
  width: 350px;
  padding: 10px;
  border: 1px solid red;
  text-align: center;
  margin: 10px;
`

export default Books
