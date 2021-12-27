import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../components/Layout"

const gqlquery = graphql`
  query AllFile {
    data: allFile {
      totalCount
      image_info: nodes {
        name
        size
        relativePath
        childImageSharp {
          gatsbyImageData(layout: FIXED, placeholder: BLURRED, width: 200)
        }
      }
    }
  }
`

const Dynamic_image = () => {
  const { image_info } = useStaticQuery(gqlquery).data

  return (
    <Layout>
      <div>Dynamic Images</div>
      <Wrapper>
        {image_info?.map(({ childImageSharp, name }, i) => {
          let { gatsbyImageData } = childImageSharp
          gatsbyImageData.height = 200
          return <GatsbyImage key={i} image={gatsbyImageData} alt={name} />
        })}
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px;
`

export default Dynamic_image
