import React, { useState, useRef } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import decsailanding from "../images/newWeb/decsai/decsailanding.png"
import decsaiVid1 from "../images/newWeb/decsai/decsaiVid1.mp4"
import decsaiVid2 from "../images/newWeb/decsai/decsaiVid2.mp4"
import decsaiVid3 from "../images/newWeb/decsai/decsaiVid3.mp4"
import decsailanding2 from "../images/newWeb/decsai/decsailanding2.png"
import decsailanding3 from "../images/newWeb/decsai/decsailanding3.png"
import decsailanding4 from "../images/newWeb/decsai/decsailanding4.png"

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
    max-width: 420px;
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
  @media only screen and (max-width: 991px) {
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
    font-size: 22px;
    line-height: 25px;
  }
`

const ProjectText = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #4d4d4d;
  text-align: left;
  margin: 0;
  padding-bottom: 12px;
  @media only screen and (max-width: 991px) {
    font-size: 14px;
    line-height: 23px;
  }
  @media only screen and (max-width: 567px) {
    font-size: 14px;
    line-height: 23px;
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
  height: 705px;
  object-fit: cover;
`

const Video = styled.video`
  width: 100%;
  height: 700px;
  object-fit: cover;
  outline: none;
`

const Video3 = styled.video`
  width: 100%;
  height: 400px;
  object-fit: cover;
  outline: none;
`

const Img3 = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  position: absolute;
  z-index: 40;
`

const DecsAI = () => {
  const [showImage1, setShowImage1] = useState(true)
  const [showImage2, setShowImage2] = useState(true)
  const [showImage3, setShowImage3] = useState(true)

  const vidRef1 = useRef(null)
  const vidRef2 = useRef(null)
  const vidRef3 = useRef(null)

  const handlePlayVideo1 = () => {
    vidRef1.current.play()
    setShowImage1(false)
  }

  const handlePlayVideo2 = () => {
    vidRef2.current.play()
    setShowImage2(false)
  }

  const handlePlayVideo3 = () => {
    vidRef3.current.play()
    setShowImage3(false)
  }

  return (
    <Layout>
      <FirstImg src={decsailanding} />
      <ContentWrapper>
        <MarginTopBottomFirst>
          <MarginDiv>
            <ProjectTitle>
              DECS.AI – A Deepfake Enabled Chat Service
            </ProjectTitle>
            <div>
              <ProjectText>
                What if chatbots like Siri or Alexa could look and act human? In
                2021, we launched Decs.ai, using custom NLP, STT, and Deepfake
                algorithms to create lifelike chatbots. Decs.ai transforms the
                chatbot experience, enabling businesses and institutions to use
                any screen—from phones to holograms—for immersive, real-time
                interactions.
              </ProjectText>
            </div>
          </MarginDiv>
        </MarginTopBottomFirst>
        <MarginTopBottomFirst>
          <MarginDiv>
            <GridContainer>
              <div style={{ position: "relative" }}>
                {showImage1 ? (
                  <Img src={decsailanding2} onClick={handlePlayVideo1} />
                ) : null}
                <Video
                  preload="auto"
                  controls={!showImage1}
                  playsInline
                  ref={vidRef1}
                  disablePictureInPicture
                  controlsList="nofullscreen nodownload noremoteplayback"
                >
                  <source src={decsaiVid1} type="video/mp4" />
                </Video>
              </div>
              <GridContainerDiv1>
                <GridContainerDiv2>
                  <ProjectTitleH2>
                    Premium Dataset For Realistic Interactions
                  </ProjectTitleH2>
                  <PaddingDiv>
                    <ProjectText>
                      To ensure the highest quality for both audio and video, we
                      created our own dataset using models and actors from
                      across the world. By capturing content in 4K video and
                      high-definition audio, we preserved every nuance of human
                      expression, ensuring a truly lifelike experience.
                    </ProjectText>
                  </PaddingDiv>
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
                  <ProjectTitleH2>Achieving Authenticity</ProjectTitleH2>
                  <PaddingDiv>
                    <ProjectText>
                      The outcome of the effort was an AI model which looked and
                      sounded human. Its natural facial movements and gestures
                      bridged the uncanny valley, creating a truly authentic
                      humanoid chatbot that felt entirely real
                    </ProjectText>
                  </PaddingDiv>
                </GridContainerDiv2>
              </GridContainerDiv1>
              <div style={{ position: "relative" }}>
                {showImage2 ? (
                  <Img src={decsailanding3} onClick={handlePlayVideo2} />
                ) : null}
                <Video
                  preload="auto"
                  controls={!showImage2}
                  playsInline
                  ref={vidRef2}
                  disablePictureInPicture
                  controlsList="nofullscreen nodownload noremoteplayback"
                >
                  <source src={decsaiVid2} type="video/mp4" />
                </Video>
              </div>
            </GridContainer1>
          </MarginDiv>
        </MarginTopBottomFirst>
        <MarginTopBottomFirstLast>
          <MarginDiv>
            <GridContainer>
              <div style={{ position: "relative" }}>
                {showImage3 ? (
                  <Img3 src={decsailanding4} onClick={handlePlayVideo3} />
                ) : null}
                <Video3
                  preload="auto"
                  controls={!showImage3}
                  playsInline
                  ref={vidRef3}
                  disablePictureInPicture
                  controlsList="nofullscreen nodownload noremoteplayback"
                >
                  <source src={decsaiVid3} type="video/mp4" />
                </Video3>
              </div>
              <GridContainerDiv1>
                <GridContainerDiv2>
                  <ProjectTitleH2>
                    Building Trust; Enhancing Engagement
                  </ProjectTitleH2>
                  <PaddingDiv>
                    <ProjectText>
                      The realistic nature of the chatbots fostered trust
                      between users and the AI chat service.
                    </ProjectText>
                    <ProjectText>
                      This allowed businesses to create groundbreaking
                      experiences, like simulating real-time Q&A sessions in
                      online courses, making it feel as if the interaction were
                      happening in a live classroom.
                    </ProjectText>
                  </PaddingDiv>
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

const canonicalUrl = "https://www.avantari.org/decsai"

export const Head = () => (
  <Seo
    title="DECS.AI – A Deepfake Enabled Chat Service"
    description="Avantari specializes in delivering cutting-edge digital solutions, from AI and AR/VR development to mobile apps and custom software. We help businesses innovate and transform their ideas into impactful, tech-driven experiences."
    image={decsailanding}
    rel="canonical"
    href={canonicalUrl}
  />
)

export default DecsAI
