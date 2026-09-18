import React from "react"
import "./layout.css"
import Header from "./header"
import PageFooter from "./pageFooter"
import CookieConsent from "./cookieConsent"
import { useStaticQuery, graphql } from "gatsby"
import AnimatedCursor from "react-animated-cursor"
import styled from "styled-components"

const CursorDiv = styled.div`
  @media only screen and (max-width: 567px) {
    display: none;
  }
`

const Layout = ({ children, footerVariant = "dark" }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div style={{ position: `relative` }}>
      <Header siteTitle={data.site.siteMetadata?.title || `Avantari`} />
      <div>
        <CursorDiv>
          <AnimatedCursor
            innerSize={8}
            color="0, 0, 0"
            innerScale={0}
            outerScale={8}
            clickables={[".hover-target"]}
            outerStyle={{
              border: "2px solid #000",
              backgroundColor: `transparent`,
            }}
            {...(typeof window !== "undefined" && window.innerWidth <= 567
              ? { showSystemCursor: true }
              : {})}
          />
        </CursorDiv>
        <main>{children}</main>
      </div>
      <PageFooter variant={footerVariant} />
      <CookieConsent />
    </div>
  )
}

export default Layout
