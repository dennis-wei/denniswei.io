import React from "react"
import { graphql } from "gatsby"

import LayoutFull from "../components/full-layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function BoardPage2021({data}) {
  return (
    <LayoutFull>
      <SEO title="2021 mood" keywords={[`2021`, `moodboard`]} />
      <h1>2021 moods</h1>
      <Carousel
        infiniteLoop={true}
        showStatus={false}
        showIndicators={true}
        autoPlay={false}
        showArrows={false}
        selectedItem={1}
      >
        <div style={{ maxHeight: "100%" }}>
          <Img
            style={{ maxHeight: "600px" }}
            imgStyle={{ objectFit: "contain" }}
            fluid={data.jan.childImageSharp.fluid}
          />
        </div>
        <div style={{ maxHeight: "100%" }}>
          <Img
            style={{ maxHeight: "600px" }}
            imgStyle={{ objectFit: "contain" }}
            fluid={data.feb.childImageSharp.fluid}
          />
        </div>
      </Carousel>
    </LayoutFull>
  )
}

export const query = graphql`
  query {
    jan: file(relativePath: { eq: "jan-2021.png" }) {
      childImageSharp {
        fluid(maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    feb: file(relativePath: { eq: "feb-2021.png" }) {
      childImageSharp {
        fluid(maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`

export default BoardPage2021
