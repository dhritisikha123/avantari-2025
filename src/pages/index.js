import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HomePage from "../components/homepage"
import seoImg from "../images/og-images/Homepage.jpg"

const IndexPage = () => {
  return (
    <>
      <Layout footerVariant="responsive">
        <HomePage />
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

const canonicalUrl = "https://www.avantari.org/"

export const Head = () => (
  <>
    <Seo
      title="Connected Product Development & External R&D | Avantari"
      description="A Hyderabad product lab that keeps industrial design, hardware, embedded AI, and software together — from the riskiest assumption to something that can ship."
      image={seoImg}
      url={canonicalUrl}
    />
    <meta name="robots" content="index, follow" />
  </>
)

export default IndexPage
