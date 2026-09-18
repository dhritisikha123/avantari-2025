import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import seoImg from "../images/seo.jpg"
import SoftwarePage from "../components/softwarepage"
// import FifthSectionOtherPage from "../components/homepage/fifth-section-other-page"
const SoftwareProject = () => {
  return (
    <>
      <Layout>
        <SoftwarePage />
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

const canonicalUrl = "https://www.avantari.org/software-project"

export const Head = () => (
  <Seo
    title="Avantari | Software, UX/UI & Mobile App Development"
    description="Avantari develops custom software, mobile apps, and UX/UI, integrating embedded AI, PCB design, and hardware for high-performance solutions."
    image={seoImg}
    rel="canonical"
    href={canonicalUrl}
  />
)

export default SoftwareProject
