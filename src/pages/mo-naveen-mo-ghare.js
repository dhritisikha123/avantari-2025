import React, { useState, useRef } from "react"
import styled from "styled-components"

import Layout from "../components/layout"

import ghareN from "../images/newWeb/ghare/ghareN.png"
import ghareN2 from "../images/newWeb/ghare/ghareN2.png"
import ghareN3 from "../images/newWeb/ghare/ghareN31.png"
import ghareN4 from "../images/newWeb/ghare/ghareN4.png"
import ghareN5 from "../images/newWeb/ghare/ghareN5.png"
import ghareN6 from "../images/newWeb/ghare/ghareN6.png"
import gharePlayN from "../images/newWeb/ghare/gharePlayN.png"
import ghareVid from "../images/newWeb/ghare/ghareVid.mp4"
import moOG from "../images/og-images/moOG.png"

import Seo from "../components/seo"
import { graphql, Link } from "gatsby"
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

const ProjectTextLast = styled.p`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 32px; /* Initial font size */
  line-height: 35px; /* Adjusted line-height for compact text */
  color: #000000;
  text-align: left;
  margin: 0;
  padding-bottom: 12px;
  @media only screen and (max-width: 767px) {
    padding-top: 30px;
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

const Img = styled.img`
  transform: translate(-50%, -50%);
  position: absolute;
  z-index: 40;
  left: 50%;
  top: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const MoNaveenMoGhare = () => {
  const [showImage1, setShowImage1] = useState(true)

  const vidRef1 = useRef(null)

  const handlePlayVideo1 = () => {
    console.log("play")
    vidRef1.current.play()
    setShowImage1(false)
  }

  return (
    <Layout>
      <FirstImg src={ghareN} />
      <ContentWrapper>
        <MarginTopBottomFirst>
          <MarginDiv>
            <ProjectTitle>
              Mo Naveen, Mo Ghare - CM Patnaik In Every Home
            </ProjectTitle>
            <div>
              <ProjectText>
                In 2019, with Odisha’s elections looming, the ruling Biju Janata
                Dal was facing tough competition from the BJP. To support Chief
                Minister Naveen Patnaik, beloved by the people, we created a
                groundbreaking campaign. We visited 2.5 million homes across
                Odisha, where voters experienced an AR hologram of the CM,
                followed by a memorable family selfie with him. The instant
                printouts were laminated and handed back as cherished mementos,
                leaving a lasting impression.
              </ProjectText>
            </div>
          </MarginDiv>
        </MarginTopBottomFirst>
        <MarginTopBottomFirst>
          <MarginDiv style={{ position: `relative` }}>
            {showImage1 ? (
              <Img src={gharePlayN} onClick={handlePlayVideo1} />
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
              <source src={ghareVid} type="video/mp4" />
            </video>
          </MarginDiv>
        </MarginTopBottomFirst>
        <MarginTopBottomFirst>
          <MarginDiv>
            <GridContainer>
              <div>
                <img src={ghareN2} style={{ width: `100%` }} />
              </div>
              <GridContainerDiv1>
                <GridContainerDiv2>
                  <ProjectTitleH2>A Challenge To Overcome</ProjectTitleH2>
                  <PaddingDiv>
                    <ProjectText>
                      In 2019, the ruling Biju Janata Dal (BJD) was facing
                      fierce anti-incumbency after 20 years in power. With their
                      rival BJP gaining momentum across the country, the BJD
                      needed a fresh approach to reach voters in the state’s
                      remote areas, where smartphone access was minimal.
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
                  <ProjectTitleH2> A Workforce On The Ground</ProjectTitleH2>
                  <PaddingDiv>
                    <ProjectText>
                      To cut through the noise, we built a 5,000-member
                      workforce to hit the ground running. Their mission: visit
                      2.5 million homes across Odisha.
                    </ProjectText>
                    <ProjectText>
                      Each door-to-door visit involved showing voters an AR
                      hologram of Chief Minister Naveen Patnaik, followed by a
                      memorable selfie with the CM.
                    </ProjectText>
                    <ProjectText>
                      These photos, printed and laminated on the spot, were
                      handed back as keepsakes, creating an emotional connection
                      with the voters that a traditional campaign could never
                      match.
                    </ProjectText>
                  </PaddingDiv>
                </GridContainerDiv2>
              </GridContainerDiv1>
              <div>
                <img src={ghareN3} style={{ width: `100%` }} />
              </div>
            </GridContainer1>
          </MarginDiv>
        </MarginTopBottomFirst>
        <MarginTopBottomFirst>
          <MarginDiv>
            <GridContainer>
              <div>
                <img src={ghareN4} style={{ width: `100%` }} />
              </div>
              <GridContainerDiv1>
                <GridContainerDiv2>
                  <ProjectTitleH2>A Memory Like No Other</ProjectTitleH2>
                  <PaddingDiv>
                    <ProjectText>
                      For many voters in Odisha’s tribal and remote villages,
                      this campaign marked a first in more ways than one. Many
                      had never had a photograph taken, let alone with the
                      state’s most powerful leader.
                    </ProjectText>
                    <ProjectText>
                      The instant photo, small enough to fit into a wallet,
                      became a powerful symbol of personal engagement, leaving a
                      lasting impression on those who received it.
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
                  <ProjectTitleH2>The Power Of A Smile</ProjectTitleH2>
                  <PaddingDiv>
                    <ProjectText>
                      The results were undeniable. The unique, personal campaign
                      helped BJD counter the rising anti-incumbency wave,
                      transforming it into a strength.
                    </ProjectText>
                    <ProjectText>
                      Even those who had been critical of the government now had
                      a cherished photograph with the Chief Minister; a physical
                      reminder of the campaign’s warmth and accessibility.
                    </ProjectText>
                    <ProjectText>
                      In the end, BJD won the 2019 elections with a decisive
                      majority, proving that personal connection can make all
                      the difference in a fiercely competitive political
                      environment.
                    </ProjectText>
                  </PaddingDiv>
                </GridContainerDiv2>
              </GridContainerDiv1>
              <div>
                <img src={ghareN5} style={{ width: `100%` }} />
              </div>
            </GridContainer1>
          </MarginDiv>
        </MarginTopBottomFirst>
        <MarginTopBottomFirstLast>
          <MarginDiv>
            <GridContainer>
              <div>
                <img src={ghareN6} style={{ width: `100%` }} />
              </div>
              <GridContainerDiv1>
                <GridContainerDiv2>
                  <PaddingDiv>
                    <ProjectTextLast>
                      Strengthening the CM’s brand played a pivotal role in
                      securing an unexpected, landslide victory for the party,
                      defying all predictions.
                    </ProjectTextLast>
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

// const canonicalUrl = "https://www.avantari.org/mo-naveen-mo-ghare"

// export const Head = () => (
//   <Seo
//     title="Mo Naveen, Mo Ghare - CM Patnaik In Every Home"
//     description="Avantari specializes in delivering cutting-edge digital solutions, from AI and AR/VR development to mobile apps and custom software. We help businesses innovate and transform their ideas into impactful, tech-driven experiences."
//     image={ghareN}
//     rel="canonical"
//     href={canonicalUrl}
//   />
// )

// export default MoNaveenMoGhare

/* ------------------------------------------------------------------ */
/* ==================================================================== */
/* New page build — shared component library                           */
/* ==================================================================== */
/* ------------------------------------------------------------------ */

const Section = styled.section`
  box-sizing: border-box;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  background-color: ${({ $bg }) => $bg || "transparent"};

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`

const Padded = styled.div`
  background-color: #0c0c0c;
  padding: 70px 60px;

  @media only screen and (min-width: 1440px) {
    padding: 80px 100px;
  }

  @media only screen and (max-width: 1023px) {
    padding: 45px 40px;
  }

  @media only screen and (max-width: 768px) {
    padding: 35px 20px;
  }
`

const Eyebrow = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #4d4d4d;
  margin: 0;
  padding-bottom: 16px;
`

const CommonTitle = styled.h2`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 42px;
  color: #000000;
  margin: 0 0 0 0;
  max-width: ${({ $maxWidth }) => $maxWidth || "460px"};

  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    font-size: 28px;
    line-height: 36px;
  }

  @media only screen and (max-width: 567px) {
    font-size: 26px;
    line-height: 32px;
  }
`

const CommonTitle1 = styled.h2`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  color: #000000;
  margin: 0 0 0 0;
  // max-width: ${({ $maxWidth }) => $maxWidth || "460px"};

  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    font-size: 34px;
    line-height: 42px;
  }

  @media only screen and (max-width: 567px) {
    font-size: 32px;
    line-height: 40px;
  }
`

const BodyPara = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  margin: 0;
  max-width: ${({ $maxWidth }) => $maxWidth || "460px"};
  padding-top: 20px;

  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    font-size: 14px;
    line-height: 23px;
  }

  @media only screen and (max-width: 567px) {
    font-size: 14px;
    line-height: 22px;
  }
`

const SplitGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media only screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`

const ImageBox = styled.div`
  // min-height: 480px;
  background-color: #d9d9d9;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media only screen and (max-width: 1023px) {
    // min-height: 320px;
  }
`

const ContentBox = styled.div`
  background-color: ${({ $bg }) => $bg || "transparent"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 70px 60px;

  @media only screen and (min-width: 1440px) {
    padding: 90px 100px;
  }

  @media only screen and (max-width: 1023px) {
    padding: 45px 40px;
  }

  @media only screen and (max-width: 768px) {
    padding: 35px 20px;
  }
`

/* ------------------------------------------------------------------ */
/* Hero                                                                 */
/* ------------------------------------------------------------------ */

const HeroSection = styled(Section)`
  background-color: #eeeeee;
`

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media only screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`

const HeroContent = styled.div`
  padding: 90px 60px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (min-width: 1440px) {
    padding: 90px 100px 50px;
  }

  @media only screen and (max-width: 1023px) {
    padding: 50px 40px 30px;
    order: 1;
  }

  @media only screen and (max-width: 768px) {
    padding: 40px 20px 30px;
  }
`

const HeroTitle = styled.h1`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 68px;
  line-height: 76px;
  color: #000000;
  margin: 0 0 0 0;

  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    font-size: 44px;
    line-height: 52px;
  }

  @media only screen and (max-width: 1023px) {
    font-size: 40px;
    line-height: 48px;
  }
`

const CommonSubtitle = styled.p`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  color: #000000;
  margin: 20px 0 0 0;
  max-width: 480px;

  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    font-size: 23px;
    line-height: 29px;
  }

  @media only screen and (max-width: 1023px) {
    font-size: 22px;
    line-height: 28px;
  }
`

const HeroBodyPara = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4d4d4d;
  margin: 20px 0 0 0;
  max-width: 460px;

  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    font-size: 14px;
    line-height: 23px;
  }

  @media only screen and (max-width: 567px) {
    font-size: 14px;
    line-height: 22px;
  }
`

const HeroImages = styled.div`
  min-height: 480px;
  background-color: #d9d9d9;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media only screen and (max-width: 1023px) {
    min-height: 320px;
    order: 1;
  }

  @media only screen and (max-width: 567px) {
    min-height: 220px;
  }
`

/* ------------------------------------------------------------------ */
/* Meta bar                                                             */
/* ------------------------------------------------------------------ */

const MetaBar = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  padding: 30px 60px;

  @media only screen and (min-width: 1440px) {
    padding: 30px 100px;
  }

  @media only screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
    padding: 30px 40px;
    gap: 16px;
  }

  @media only screen and (max-width: 768px) {
    padding: 25px 20px;
  }
`

const MetaLabel = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #4d4d4d;
  margin: 0 0 8px 0;
  width: 80%;
`

const MetaValue = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  margin: 0;

  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    font-size: 14px;
    line-height: 23px;
  }

  @media only screen and (max-width: 567px) {
    font-size: 14px;
    line-height: 22px;
  }
`

const meta = [
  { label: "Client", value: "Biju Janata Dal" },
  { label: "Year", value: "2019" },
  { label: "Discipline", value: "Software" },
  { label: "Homes", value: "2.5 million" },
  { label: "Services", value: "AR, Field operations, Print" },
]

/* ------------------------------------------------------------------ */
/* Film                                                                 */
/* ------------------------------------------------------------------ */

const FilmSection = styled(Section)`
  background-color: #ffffff;
`

const VideoFrame = styled.div`
  position: relative;
  min-height: 460px;
  background-color: #111111;
  cursor: pointer;

  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media only screen and (max-width: 1023px) {
    min-height: 260px;
  }
`

const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 88px;
  height: 88px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`

const FilmCaption = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #4d4d4d;
  margin: 20px 0 0 0;
  max-width: 620px;
`

/* ------------------------------------------------------------------ */
/* What happened (black, 3-up)                                          */
/* ------------------------------------------------------------------ */

const RecordSection = styled(Section)`
  background-color: #000000;
`

const RecordStatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 50px;
  row-gap: 30px;
  margin-top: 50px;

  @media only screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`

const CommonLabel = styled.h4`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  color: #ffffff;
  margin: 0 0 12px 0;

  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    font-size: 18px;
    line-height: 24px;
  }

  @media only screen and (max-width: 567px) {
    font-size: 18px;
    line-height: 24px;
  }
`

const CommonText = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #8c8c8c;
  margin: 0;

  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    font-size: 14px;
    line-height: 23px;
  }

  @media only screen and (max-width: 567px) {
    font-size: 14px;
    line-height: 22px;
  }
`

const recordStats = [
  {
    label: "2.5 Million",
    text: "Homes visited across Odisha.",
  },
  {
    label: "5,000",
    text: "Field staff trained and deployed.",
  },
  {
    label: "5 Million",
    text: "Residents photographed with the chief minister.",
  },
]

/* ------------------------------------------------------------------ */
/* Quote                                                                */
/* ------------------------------------------------------------------ */

const QuoteSection = styled(Section)`
  background-color: #edeeee;
`

const QuoteGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 60px;

  @media only screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
    row-gap: 24px;
  }
`

const QuoteDivider = styled.div`
  width: 40px;
  height: 2px;
  background-color: #c3ff00;
  margin: 8px 0 20px 0;
`

const QuoteText = styled.p`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 42px;
  color: #000000;
  margin: 0;

  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    font-size: 22px;
    line-height: 38px;
  }

  @media only screen and (max-width: 567px) {
    font-size: 26px;
    line-height: 34px;
  }
`

/* ------------------------------------------------------------------ */
/* CTA                                                                  */
/* ------------------------------------------------------------------ */

const CTASection = styled(Section)`
  background-color: #000000;
`

const CTAWrap = styled.div`
  padding: 90px 60px;

  @media only screen and (min-width: 1440px) {
    padding: 100px 100px;
  }

  @media only screen and (max-width: 1023px) {
    padding: 55px 40px;
  }

  @media only screen and (max-width: 768px) {
    padding: 40px 20px;
  }
`

const CTAButton = styled(Link)`
  display: inline-block;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #000000;
  background-color: #c3ff00;
  padding: 16px 24px;
  margin-top: 28px;
  text-decoration: none;
  transition: 0.2s ease;

  @media only screen and (max-width: 567px) {
    width: 100%;
  }

  &:hover {
    background-color: #d8ff4d;
  }
`

/* ------------------------------------------------------------------ */
/* Bottom nav + footer                                                  */
/* ------------------------------------------------------------------ */

const NavSection = styled(Section)`
  background-color: #eeeeee;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 60px;

  @media only screen and (min-width: 1440px) {
    padding: 70px 100px;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
    padding: 40px 20px;
  }
`

const NavBlock = styled.div`
  text-align: ${({ $right }) => ($right ? "right" : "left")};

  @media only screen and (max-width: 768px) {
    text-align: left;
  }
`

const NavLabel = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #4d4d4d;
  margin: 0 0 10px 0;
  text-align: left;
`

const NavLink = styled(Link)`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  color: #000000;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    font-size: 23px;
    line-height: 29px;
  }

  @media only screen and (max-width: 567px) {
    font-size: 22px;
    line-height: 28px;
  }
`


const PageWrapper = styled.div`
  margin-top: 64px;

  @media only screen and (min-width: 769px) and (max-width: 1023px) {
    margin-top: 70px;
  }

  @media only screen and (min-width: 1024px) {
    margin-top: 88px;
  }
`

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

const MoNaveenMoGhareNew = () => {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null)

  const handlePlay = () => {
    setPlaying(true)
    if (videoRef.current) videoRef.current.play()
  }

  return (
    <Layout footerVariant="dark">
      <PageWrapper>
        <HeroSection>
          <HeroGrid>
            <HeroContent>
              <Eyebrow $color="#547300">Software / Biju Janata Dal</Eyebrow>
              <HeroTitle>Mo Naveen, Mo Ghare</HeroTitle>
              <CommonSubtitle>
                A photograph with the chief minister, in 2.5 million homes.
              </CommonSubtitle>
              <HeroBodyPara>
                A door-to-door augmented reality campaign that put a
                life-size Naveen Patnaik in living rooms across Odisha, then
                left each visit with a printed photograph.
              </HeroBodyPara>
            </HeroContent>
            <HeroImages>
              <img
                src={ghareN}
                alt="Printed photograph of the chief minister held in a wallet"
              />
            </HeroImages>
          </HeroGrid>
          <MetaBar>
            {meta.map(item => (
              <div key={item.label}>
                <MetaLabel>{item.label}</MetaLabel>
                <MetaValue>{item.value}</MetaValue>
              </div>
            ))}
          </MetaBar>
        </HeroSection>

        <Section>
          <SplitGrid>
            <ContentBox $bg="#c3ff00">
              <Eyebrow $color="#1f1f1f">The brief</Eyebrow>
              <CommonTitle $maxWidth="420px">
                Take the chief minister door to door.
              </CommonTitle>
              <BodyPara style={{ color: `#1f1f1f` }}>
                The BJD needed to reach households across Odisha personally,
                including communities far beyond the reach of a conventional
                digital campaign.
              </BodyPara>
            </ContentBox>
            <ContentBox $bg="#0e0e0e">
              <Eyebrow style={{ color: `#c3ff00` }}>The constraint</Eyebrow>
              <CommonTitle style={{ color: `#fff` }} $maxWidth="420px">
                The hardest-to-reach voters had the least connectivity.
              </CommonTitle>
              <BodyPara style={{ color: `#8C8C8C` }}>
                The experience could not depend on a voter owning a
                smartphone or having reliable internet. It had to travel
                with field teams and make the encounter work inside the
                home.
              </BodyPara>
            </ContentBox>
          </SplitGrid>
        </Section>

<div style={{backgroundColor:`#000`}}>

        <FilmSection>
          <Padded>
            <Eyebrow style={{ color: `#C3FF00` }}>Film / On the ground</Eyebrow>
            <VideoFrame onClick={handlePlay}>
              {!playing && (
                <img src={gharePlayN} alt="Villager holding a printed photograph" />
              )}
              <video
                preload="auto"
                controls={playing}
                playsInline
                ref={videoRef}
                style={{ display: playing ? "block" : "none" }}
                disablePictureInPicture
                controlsList="nofullscreen nodownload noremoteplayback"
              >
                <source src={ghareVid} type="video/mp4" />
              </video>
              {!playing && <PlayButton aria-label="Play film" />}
            </VideoFrame>
            <FilmCaption style={{ color: `#8C8C8C` }}>A visit, door to door.</FilmCaption>
          </Padded>
        </FilmSection>
        </div>

        <Section $bg="#eeeeee">
          <SplitGrid>
            <ContentBox>
              <Eyebrow>The visit</Eyebrow>
              <CommonTitle>A hologram at the door.</CommonTitle>
              <BodyPara>
                Life-size, standing in the room, so the encounter felt like
                a visit rather than a leaflet. Then a photograph, printed on
                the spot, small enough for a wallet.
              </BodyPara>
            </ContentBox>
            <ImageBox>
              <img
                src={ghareN2}
                alt="News coverage of the Odisha electoral campaign"
              />
            </ImageBox>
          </SplitGrid>
        </Section>
<div style={{backgroundColor:`#c3ff00`}}>

        <RecordSection style={{ backgroundColor: `#c3ff00` }}>
          <Padded style={{ backgroundColor: `transparent` }}>
            <Eyebrow $color="#1f1f1f">The photograph</Eyebrow>
            <CommonTitle1>
              For many, it was their first photograph of any kind.
            </CommonTitle1>
            <BodyPara style={{ color: `#1f1f1f` }} $maxWidth="620px">
              In remote villages, households that had never owned a
              photograph received one — with the chief minister standing
              beside them. A digital encounter became something physical
              they could keep.
            </BodyPara>
          </Padded>
        </RecordSection>
</div>

<div style={{backgroundColor:`#000`}}>
        <RecordSection style={{ backgroundColor: `#0e0e0e` }}>
          <Padded style={{ backgroundColor: `transparent` }}>
            <Eyebrow $color="#c3ff00">What happened</Eyebrow>
            <CommonTitle1 style={{ color: `#fff` }} $maxWidth="680px">
              A state-scale campaign, delivered door to door.
            </CommonTitle1>
            <RecordStatGrid>
              {recordStats.map(stat => (
                <div key={stat.label}>
                  <CommonLabel>{stat.label}</CommonLabel>
                  <CommonText>{stat.text}</CommonText>
                </div>
              ))}
            </RecordStatGrid>
          </Padded>
        </RecordSection>
</div>
        <Section $bg="#eeeeee">
          <ImageBox style={{ minHeight: `560px` }}>
            <img
              src={ghareN3}
              alt="Field staff photographing a resident in a village"
            />
          </ImageBox>
        </Section>

        <QuoteSection>
          <Padded style={{ backgroundColor: `transparent` }}>
            <QuoteGrid>
              <div>
                <Eyebrow $color="#4d4d4d">Client words</Eyebrow>
                <QuoteDivider />
                <CommonSubtitle style={{ paddingBottom: `16px` }}>
                  Dr Amar Patnaik
                </CommonSubtitle>
                <Eyebrow>Head, IT Cell, Biju Janata Dal (campaign period)</Eyebrow>
              </div>
              <QuoteText>
                "Avantari turned a door-to-door campaign into a personal
                encounter at state scale. The hologram reached communities
                conventional media could not, and the printed photograph
                gave every visit something lasting."
              </QuoteText>
            </QuoteGrid>
          </Padded>
        </QuoteSection>

<div style={{backgroundColor:`#000`}}>

        <CTASection>
          <CTAWrap>
            <Eyebrow style={{ color: `#c3ff00` }}>Work with us</Eyebrow>
            <CommonTitle1 style={{ color: `#fff` }}>
              Tell us what you're building.
            </CommonTitle1>
            <CTAButton to="/contact">Get in touch →</CTAButton>
          </CTAWrap>
        </CTASection>
</div>

        <NavSection>
          <NavBlock>
            <NavLabel>Previous</NavLabel>
            <NavLink to="/dhyana-v1">← Dhyana 1</NavLink>
          </NavBlock>
          <NavBlock>
            <NavLabel>Index</NavLabel>
            <NavLink to="/work">All Work</NavLink>
          </NavBlock>
          <NavBlock $right>
            <NavLabel>Next</NavLabel>
            <NavLink to="/saffola-aura-launch">Saffola Aura Launch →</NavLink>
          </NavBlock>
        </NavSection>

      </PageWrapper>
    </Layout>
  )
}

const canonicalUrlNew = "https://www.avantari.org/mo-naveen-mo-ghare"

export const Head = () => (
  <>
    <Seo
      title="Mo Naveen, Mo Ghare AR Campaign | Avantari"
      description="How Avantari delivered a door-to-door augmented reality campaign that placed a life-size Naveen Patnaik in 2.5M homes across Odisha."
      image={moOG}
      url={canonicalUrlNew}
    />
    <meta name="robots" content="index, follow" />
    <meta
      name="keywords"
      content="augmented reality campaign, political campaign technology, field deployment, life-size AR, instant photo printing, Odisha"
    />
  </>
)

export default MoNaveenMoGhareNew
