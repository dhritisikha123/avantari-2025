import React, { useState, useRef } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import holobotLanding from "../images/newWeb/holobot/holobotLanding.png"
import holobotVid from "../images/newWeb/holobot/holobotVid.mp4"
import holobotLanding2 from "../images/newWeb/holobot/holobotLanding2.png"
import holobotLanding3 from "../images/newWeb/holobot/holobotLanding3.png"
import holobotLanding4 from "../images/newWeb/holobot/holobotLanding4.png"
import playVid1HolobotButton from "../images/newWeb/holobot/playVid1HolobotButton.png"
import icons1 from "../images/newWeb/holobot/icons11.svg"
import icons2 from "../images/newWeb/holobot/icons12.svg"

import Seo from "../components/seo"
// import FifthSectionOtherPage from "../components/homepage/fifth-section-other-page"
const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  overflow: hidden;
`

const MarginDiv = styled.div`
  margin-left: 5vw;
  margin-right: 5vw;
`

const PaddingDiv = styled.div`
  @media only screen and (min-width: 768px) {
    max-width: 420px; /* Adjust width as needed */
  }
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 55% auto;
  column-gap: 50px;
  @media only screen and (min-width: 568px) and (max-width: 1023px) {
    column-gap: 20px;
  }
  @media only screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`

const GridContainer1 = styled.div`
  display: grid;
  grid-template-columns: auto 55%;
  column-gap: 50px;
  @media only screen and (min-width: 568px) and (max-width: 1023px) {
    column-gap: 20px;
  }
  @media only screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    & > div:first-child {
      order: 2; /* Move text to the bottom */
    }

    & > div:last-child {
      order: 1; /* Move image to the top */
    }
  }
`

const MarginTopBottomFirst = styled.div`
  margin-top: 50px;
  @media only screen and (max-width: 767px) {
    margin-top: 30px;
  }
`

const MarginTopBottomFirstLast = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  @media only screen and (max-width: 767px) {
    margin-top: 30px;
    margin-bottom: 30px;
  }
`

const ProjectTitle = styled.h1`
  font-family: "Outfit", serif;
  font-style: normal;
  font-weight: 500;
  font-size: 32px; /* Initial font size */
  line-height: 35px; /* Adjusted line-height for compact text */
  color: #000000;
  text-align: left;
  margin: 0;
  padding-bottom: 30px;
  @media only screen and (max-width: 767px) {
    padding-bottom: 15px;
  }
  @media only screen and (max-width: 991) {
    font-size: 24px; /* Reduce font size for smaller devices */
  }
  @media only screen and (max-width: 567px) {
    font-size: 22px; /* Further reduce font size for mobile */
    font-weight: 700;
  }
`

const ProjectTitleH2 = styled.h2`
  font-family: "Outfit", serif;
  font-style: normal;
  font-weight: 500;
  font-size: 32px; /* Initial font size */
  line-height: 35px; /* Adjusted line-height for compact text */
  color: #000000;
  text-align: left;
  margin: 0;
  padding-bottom: 30px;
  @media only screen and (max-width: 767px) {
    padding-top: 30px;
    padding-bottom: 15px;
  }
  @media only screen and (max-width: 991px) {
    font-size: 24px; /* Reduce font size for smaller devices */
    line-height: 27px; /* Adjusted line-height for compact text */
  }
  @media only screen and (max-width: 567px) {
    font-size: 22px; /* Further reduce font size for mobile */
    line-height: 25px; /* Adjusted line-height for compact text */
  }
`

const ProjectText = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px; /* Initial font size */
  line-height: 27px; /* Adjusted line-height for compact text */
  color: #4d4d4d;
  text-align: left;
  margin: 0;
  padding-bottom: 12px;
  @media only screen and (max-width: 991px) {
    font-size: 14px; /* Reduce font size for smaller devices */
    line-height: 23px; /* Adjusted line-height for compact text */
  }
  @media only screen and (max-width: 567px) {
    font-size: 14px; /* Further reduce font size for mobile */
    line-height: 23px; /* Adjusted line-height for compact text */
  }
`

const FirstImg = styled.img`
  width: 100%;
`

const GridContainerDiv1 = styled.div`
  position: relative;
`

const GridContainerDiv2 = styled.div`
  @media only screen and (min-width: 768px) {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }
`

const Img = styled.img`
  transform: translate(-50%, -50%);
  position: absolute;
  z-index: 40;
  left: 50%;
  top: 50%;
  width: 100%;
  height: 100%;
`

const Holobot = () => {
  const [showImage1, setShowImage1] = useState(true)

  const vidRef1 = useRef(null)

  const handlePlayVideo1 = () => {
    console.log("play")
    vidRef1.current.play()
    setShowImage1(false)
  }

  return (
    <Layout>
      <FirstImg src={holobotLanding} />
      <ContentWrapper>
        <MarginTopBottomFirst>
          <MarginDiv>
            <ProjectTitle>
              Holobot – A Lifelike, Interactive Hologram
            </ProjectTitle>
            <div>
              <ProjectText>
                We set out to make interactions seamless by integrating our
                internally developed deepfake chat service (DECS) with
                holograms, enabling lifelike digital humans to assist, teach,
                recommend, and even sell products and services, revolutionising
                how we connect with AI. This breakthrough has the potential to
                make AI-driven communication more natural, accessible and
                impactful worldwide.
              </ProjectText>
            </div>
          </MarginDiv>
        </MarginTopBottomFirst>
        <MarginTopBottomFirst>
          <MarginDiv style={{ position: `relative` }}>
            {showImage1 ? (
              <Img src={playVid1HolobotButton} onClick={handlePlayVideo1} />
            ) : (
              <></>
            )}
            <video
              preload="auto"
              controls={!showImage1}
              playsInline
              ref={vidRef1}
              style={{
                width: "100%",
                outline: "none",
              }}
              disablePictureInPicture
              controlsList="nofullscreen nodownload noremoteplayback"
            >
              <source src={holobotVid} type="video/mp4" />
            </video>
          </MarginDiv>
        </MarginTopBottomFirst>
        <MarginTopBottomFirst>
          <MarginDiv>
            <GridContainer>
              <div>
                <img src={holobotLanding2} style={{ width: `100%` }} />
              </div>
              <GridContainerDiv1>
                <GridContainerDiv2>
                  <ProjectTitleH2>Adding A Human Face To AI</ProjectTitleH2>
                  <PaddingDiv>
                    <ProjectText>
                      The HoloBot houses a projector, a high-end computing unit
                      and multiple microphones & speakers to create a realistic
                      looking hologram. This effectively bridges the gap between
                      digital and human interaction, making the AI more
                      intuitive.
                    </ProjectText>
                  </PaddingDiv>
                  <img
                    src={icons1}
                    style={{ marginTop: `18px`, width: `100%` }}
                  />
                </GridContainerDiv2>
              </GridContainerDiv1>
            </GridContainer>
          </MarginDiv>
        </MarginTopBottomFirst>
        <MarginTopBottomFirst>
          <MarginDiv>
            <GridContainer1>
              <GridContainerDiv1>
                <GridContainerDiv2>
                  <ProjectTitleH2>
                    The Digital Ecosystem In The Real World
                  </ProjectTitleH2>
                  <PaddingDiv>
                    <ProjectText>
                      By bringing the digital technologies into real-world
                      environments, we create more personalised, immersive, and
                      efficient experiences. As a result, businesses can provide
                      better customer service, while customers can enjoy faster,
                      seamlelss experiences that improve their daily life.
                    </ProjectText>
                  </PaddingDiv>
                </GridContainerDiv2>
              </GridContainerDiv1>
              <div>
                <img src={holobotLanding3} style={{ width: `100%` }} />
              </div>
            </GridContainer1>
          </MarginDiv>
        </MarginTopBottomFirst>
        <MarginTopBottomFirstLast>
          <MarginDiv>
            <GridContainer>
              <div>
                <img src={holobotLanding4} style={{ width: `100%` }} />
              </div>
              <GridContainerDiv1>
                <GridContainerDiv2>
                  <ProjectTitleH2>
                    Holobot 2.0: A Compact
                    <br />
                    Design For Seamless Integration
                  </ProjectTitleH2>
                  <PaddingDiv>
                    <ProjectText>
                      Using the latest cutting edge technology of transparent
                      OLEDs, the Holobot will not occupy lesser floor space and
                      will have more sensors enabling greater interaction
                      between the Holobot and people.
                    </ProjectText>
                  </PaddingDiv>
                  <img
                    src={icons2}
                    style={{ marginTop: `18px`, width: `100%` }}
                  />
                </GridContainerDiv2>
              </GridContainerDiv1>
            </GridContainer>
          </MarginDiv>
        </MarginTopBottomFirstLast>
      </ContentWrapper>
      {/* <FifthSectionOtherPage /> */}
    </Layout>
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

const canonicalUrl = "https://www.avantari.org/holobot"

export const Head = () => (
  <Seo
    title="Holobot – A Lifelike, Interactive Hologram"
    description="Avantari specializes in delivering cutting-edge digital solutions, from AI and AR/VR development to mobile apps and custom software. We help businesses innovate and transform their ideas into impactful, tech-driven experiences."
    image={holobotLanding}
    rel="canonical"
    href={canonicalUrl}
  />
)

export default Holobot
