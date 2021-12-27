import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const gqlquery = graphql`
  query {
    site {
      info: siteMetadata {
        author
        complexData {
          name
          age
        }
        description
        person {
          name
        }
        simpleData
        title
      }
    }
  }
`
const FetchData = () => {
  const data = useStaticQuery(gqlquery)

  let { info } = data.site
  return <div>{info.person.name}</div>
}

export default FetchData
