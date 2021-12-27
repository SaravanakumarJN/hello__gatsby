import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const SImage = () => {
  return (
    <Wrapper>
      <div>Fixed Blurred</div>
      <StaticImage
        src="../assets/images/test_image1.jpeg"
        alt="test image"
        layout="fixed"
        width={600}
        placeholder="blurred"
      />
      <div>Constrained tracedSVG</div>
      <StaticImage
        src="../assets/images/test_image1.jpeg"
        alt="test image"
        layout="constrained"
        width={600}
        placeholder="tracedSVG"
      />
      <div>Full width None</div>
      <StaticImage
        src="../assets/images/test_image1.jpeg"
        alt="test image"
        layout="fullWidth"
        placeholder="none"
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border: 1px solid red;
  div {
    margin-top: 20px;
  }
`

export default SImage
