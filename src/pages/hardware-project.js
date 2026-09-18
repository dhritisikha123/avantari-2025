import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HardWarePage from "../components/hardwarepage"
import seoImg from "../images/seo.jpg"
// import FifthSectionOtherPage from "../components/homepage/fifth-section-other-page"
const HardWareProject = () => {
  return (
    <>
      <Layout>
        <HardWarePage />
        {/* <FifthSectionOtherPage /> */}
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "heroDesktop.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
  }
`

const canonicalUrl = "https://www.avantari.org/hardware-project"

export const Head = () => (
  <Seo
    title="Avantari | Hardware, Embedded Dev & PCB Design Solutions"
    description="Avantari excels in hardware, embedded systems, PCB design, and AI solutions, delivering innovative tech with UX/UI and manufacturing support."
    image={seoImg}
    rel="canonical"
    href={canonicalUrl}
  />
)

export default HardWareProject
