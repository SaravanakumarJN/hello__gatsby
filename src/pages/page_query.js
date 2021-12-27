import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export const gqlquery = graphql`
  {
    site {
      info: siteMetadata {
        author
        complexData {
          name
        }
        description
        person {
          name
          age
        }
        simpleData
        title
      }
    }
  }
`

const Testing = ({ data }) => {
  let { info } = data.site
  return (
    <Layout>
      <div>{info.author}</div>
    </Layout>
  )
}

export default Testing
