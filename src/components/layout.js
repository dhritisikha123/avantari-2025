import React, { useEffect, useState } from "react"
import "./layout.css"
import Header from "./header"
import PageFooter from "./pageFooter"
import CookieConsent from "./cookieConsent"
import { useStaticQuery, graphql } from "gatsby"
import AnimatedCursor from "react-animated-cursor"
import loadingGif from "../images/loader.gif"
import { motion, AnimatePresence } from "framer-motion"
import styled from "styled-components"

// Styled Loader Wrapper (Full Screen)
const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  // background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`

// Styled Loader Image (Centered)
const LoaderImage = styled(motion.img)`
  width: 250px;
  height: 250px;
  @media only screen and (max-width: 567px) {
    width: 200px;
    height: 200px;
  }
`

const CursorDiv = styled.div`
  @media only screen and (max-width: 567px) {
    display: none;
  }
`

const Layout = ({ children, footerVariant = "dark", loaderDuration = 800 }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setIsLoaded(true), loaderDuration)
    }

    if (document.readyState === "complete") {
      handleLoad()
    } else {
      window.addEventListener("load", handleLoad)
      return () => window.removeEventListener("load", handleLoad)
    }
  }, [loaderDuration])

  useEffect(() => {
    document.body.style.overflow = isLoaded ? "auto" : "hidden"
  }, [isLoaded])

  return (
    <div style={{ position: `relative` }}>
      {/* Loader Component */}
      <AnimatePresence>
        {!isLoaded && (
          <LoaderWrapper>
            <LoaderImage
              src={loadingGif}
              alt="Loading..."
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                scale: 0.9,
                transition: { duration: 1, ease: "easeInOut" },
              }}
            />
          </LoaderWrapper>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence mode="wait">
        {isLoaded && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
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
                  {...(window.innerWidth <= 567
                    ? { showSystemCursor: true }
                    : {})}
                />
              </CursorDiv>
              <main>{children}</main>
            </div>
            <PageFooter variant={footerVariant} />
            <CookieConsent />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Layout
