import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import AiPage from "../components/aipage"
import seoImg from "../images/seo.jpg"
// import FifthSectionOtherPage from "../components/homepage/fifth-section-other-page"
const AiProject = () => {
  return (
    <>
      <Layout>
        <AiPage />
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

const canonicalUrl = "https://www.avantari.org/ai-project"

export const Head = () => (
  <Seo
    title="Avantari | AI Projects, Embedded AI & Custom Model Development"
    description="Avantari builds AI solutions with custom models, embedded AI, and UX/UI, integrating hardware and software for market-ready innovation."
    image={seoImg}
    rel="canonical"
    href={canonicalUrl}
  />
)

export default AiProject
