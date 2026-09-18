import React, { useState, useRef } from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import seoImg from "../images/og-images/dhyana1OG.png"
import dhyanav1PlayThumb1 from "../images/newWeb/dhyanav1/playdhyanav1Button1.png"
import dhyanav1Vid from "../images/newWeb/dhyanav1/dhyanav1vid.mp4"

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
/* Shared primitives                                                    */
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
  min-height: 480px;
  background-color: #d9d9d9;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media only screen and (max-width: 1023px) {
    min-height: 320px;
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

const Tag = styled.div`
  display: inline-block;
  background-color: ${({ $bg }) => $bg || "#c3ff00"};
  color: ${({ $color }) => $color || "#000000"};
  padding: 20px 24px;
  margin-top: 20px;
`

const TagTitle = styled.p`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin: 0 0 6px 0;

  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    font-size: 22px;
    line-height: 28px;
  }

  @media only screen and (max-width: 567px) {
    font-size: 22px;
    line-height: 28px;
  }
`

const TagText = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 1.5;
  margin: 0;
  opacity: 0.85;
`

const DualImage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;

  @media only screen and (max-width: 567px) {
    grid-template-columns: 1fr;
  }
`

const DualImageBox = styled.div`
  min-height: 480px;
  background-color: #d9d9d9;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media only screen and (max-width: 1023px) {
    min-height: 320px;
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
  { label: "Client", value: "Avantari" },
  { label: "Year", value: "2019" },
  { label: "Discipline", value: "Hardware" },
  { label: "Partner", value: "Indian Olympic Association" },
  { label: "Services", value: "Industrial design, PCB, Sensors, App" },
]

/* ------------------------------------------------------------------ */
/* DECS pillars                                                        */
/* ------------------------------------------------------------------ */

const DecsSection = styled(Section)`
  background-color: #000000;
`

const DecsDivider = styled.div`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0 0 40px 0;
`

const DecsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 50px;
  row-gap: 30px;

  @media only screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`

const DecsLabel = styled.h4`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  color: #ffffff;
  margin: 0 0 12px 0;
`

const DecsText = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #cccccc;
  margin: 0;
`

const decsPillars = [
  {
    label: "Listen",
    text: "Live speech-to-text understood questions from attendees on a busy event floor.",
  },
  {
    label: "Reason",
    text: "Avantari’s proprietary DECS orchestration kept Darwin grounded in Darwinbox and decided what the experience should do next.",
  },
  {
    label: "Act",
    text: "Darwin could trigger the product interface, narrate a workflow, generate speech and animate in sync — as one experience.",
  },
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
/* Gallery                                                              */
/* ------------------------------------------------------------------ */

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media only screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`

const GalleryImage = styled.div`
  background-color: #d9d9d9;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media only screen and (max-width: 1023px) {
    // min-height: 220px;
  }
`

/* ------------------------------------------------------------------ */
/* Record stats                                                        */
/* ------------------------------------------------------------------ */

const RecordSection = styled(Section)`
  background-color: #c3ff00;
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
  color: #cccccc;
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
    label: "Immediate biofeedback",
    text: "The ring and app read your state as you meditate, and prompt you back with sound and visuals.",
  },
  {
    label: "Works with what you already use",
    text: "Any form of meditation and any app, including Spotify and YouTube.",
  },
]

const recordStats1 = [
  {
    label: "OLYMPICS",
    text: "Official meditation partner to the Indian Olympic Association.",
  },
  {
    label: "BIOFEEDBACK",
    text: "Real-time prompts, not after-the-fact reports.",
  },
]

const recordStats2 = [
  {
    label: "A FIRST",
    text: "A ring built specifically to measure meditation quality.",
  },
  {
    label: "IOA PARTNER",
    text: "Official meditation partner to the Indian Olympic Association.",
  },
  {
    label: "REAL-TIME",
    text: "Biofeedback during the meditation session, not after it.",
  },
]

/* ------------------------------------------------------------------ */
/* Quote                                                                */
/* ------------------------------------------------------------------ */

const QuoteSection = styled(Section)`
  background-color: #f5f5f5;
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

const QuoteName = styled.p`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  color: #000000;
  margin: 0 0 4px 0;
`

const QuoteRole = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  color: #4d4d4d;
  margin: 0;
`

const QuoteText = styled.p`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  color: #000000;
  margin: 0;

  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    font-size: 34px;
    line-height: 42px;
  }

  @media only screen and (max-width: 567px) {
    font-size: 32px;
    line-height: 40px;
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

/* ------------------------------------------------------------------ */
/* Assets — placeholders, swap for the real NARI photos/video           */
/* ------------------------------------------------------------------ */

const ASSET_BASE = "https://darkslategray-salmon-190399.hostingersite.com"

const assets = {
  heroImage: `${ASSET_BASE}/dhyana1.png`,
  platform: `https://darkslategray-salmon-190399.hostingersite.com/dhyanav12.png`,
  hologramStage: `https://darkslategray-salmon-190399.hostingersite.com/nari-hologram-stage.png`,
  transitionLeft: `${ASSET_BASE}/nari-kims.png`,
  transitionRight: `${ASSET_BASE}/nari-hologram-2.png`,
  filmThumb: `${ASSET_BASE}/dhyanav1Vid.png`,
  gallery1: `${ASSET_BASE}/nari-gallery-1.png`,
  gallery2: `${ASSET_BASE}/nari-gallery-2.png`,
  gallery3: `${ASSET_BASE}/nari-gallery-3.png`,
}

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

const DhyanaV1 = () => {
  const [playing1, setPlaying1] = useState(false)
  const videoRef1 = useRef(null)
  const handlePlay1 = () => {
    setPlaying1(true)
    if (videoRef1.current) videoRef1.current.play()
  }

  return (
    <Layout footerVariant="dark">
      <PageWrapper>
        <HeroSection>
          <HeroGrid>
            <HeroContent>
              <Eyebrow style={{ color: `#547300` }}>
                HARDWARE / AVANTARI
              </Eyebrow>
              <HeroTitle>Dhyana 1</HeroTitle>
              <CommonSubtitle>
                A ring built to measure how you meditate.
              </CommonSubtitle>
              <HeroBodyPara>
                A smart ring that uses heart rate variability to measure how
                well you are meditating. It became the official meditation
                partner of the Indian Olympic Association.
              </HeroBodyPara>
            </HeroContent>
            <HeroImages>
              <img
                src={assets.heroImage}
                alt="Dhyana ring and charging case on a monstera leaf"
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
              <Eyebrow style={{ color: `#1f1f1f` }}>The brief</Eyebrow>
              <CommonTitle $maxWidth="420px">
                Meditation had no feedback loop.
              </CommonTitle>
              <BodyPara style={{ color: `#1f1f1f` }}>
                You could practise for years without knowing whether it was
                working. Mindfulness is the ability to stay with the breath —
                and nobody was measuring that.
              </BodyPara>
            </ContentBox>
            <ContentBox $bg="#0e0e0e">
              <Eyebrow style={{ color: `#c3ff00` }}>The constraint</Eyebrow>
              <CommonTitle style={{ color: `#fff` }} $maxWidth="420px">
                Measure attention without interrupting it.
              </CommonTitle>
              <BodyPara style={{ color: `#8C8C8C` }}>
                The ring had to capture HRV at high resolution, interpret it in
                real time and give useful feedback without turning meditation
                into another screen-led experience.
              </BodyPara>
            </ContentBox>
          </SplitGrid>
        </Section>

        <div style={{ backgroundColor: `#0c0c0c` }}>
          <FilmSection>
            <Padded>
              <Eyebrow style={{ color: `#c3ff00` }}>FILM / DHYANA</Eyebrow>
              <VideoFrame onClick={handlePlay1}>
                {!playing1 && (
                  <img src={dhyanav1PlayThumb1} alt="Dhyana 1 launch film" />
                )}
                <video
                  preload="auto"
                  controls={playing1}
                  playsInline
                  ref={videoRef1}
                  style={{ display: playing1 ? "block" : "none" }}
                  disablePictureInPicture
                  controlsList="nofullscreen nodownload noremoteplayback"
                >
                  <source src={dhyanav1Vid} type="video/mp4" />
                </video>
                {!playing1 && <PlayButton aria-label="Play film" />}
              </VideoFrame>
              <FilmCaption style={{ color: `#8C8C8C` }}>
                Measuring a meditation session.
              </FilmCaption>
            </Padded>
          </FilmSection>
        </div>

        <div style={{ backgroundColor: `#fff` }}>
          <Section>
            <SplitGrid>
              <ContentBox>
                <Eyebrow>THE MEASUREMENT</Eyebrow>
                <CommonTitle>Attention, as a number.</CommonTitle>
                <BodyPara>
                 Heart rate variability is a psycho-physiological marker of wellbeing. Tracked at industry-leading resolution inside a ring, it turns attention into something you can read.
                </BodyPara>
                <Tag>
                  <TagTitle>A first</TagTitle>
                  <TagText>
                    The first smart ring to measure meditation quality.
                  </TagText>
                </Tag>
              </ContentBox>
              <ImageBox>
                <img
                  src={assets.platform}
                  alt="Dhyana ring and interchangeable bands on an orange background"
                />
              </ImageBox>
            </SplitGrid>
          </Section>
        </div>

        <RecordSection style={{ backgroundColor: `transparent` }}>
          <Padded style={{ backgroundColor: `transparent` }}>
            <Eyebrow style={{ color: `#1f1f1f` }}>IN PRACTICE</Eyebrow>
            <CommonTitle1 $maxWidth="680px">
              It corrects you while you sit.
            </CommonTitle1>
            <RecordStatGrid>
              {recordStats.map(stat => (
                <div key={stat.label}>
                  <CommonLabel style={{ color: `#000000` }}>
                    {stat.label}
                  </CommonLabel>
                  <CommonText style={{ color: `#1f1f1f` }}>
                    {stat.text}
                  </CommonText>
                </div>
              ))}
            </RecordStatGrid>
          </Padded>
        </RecordSection>

        <div style={{ backgroundColor: `#fff` }}>
          <Section>
            <SplitGrid>
              <ImageBox>
                <img
                  src="https://darkslategray-salmon-190399.hostingersite.com/dhyanv13.png"
                  alt="Pullela Gopichand holding the Dhyana ring"
                />
              </ImageBox>
              <ContentBox>
                <Eyebrow>ENDORSEMENT</Eyebrow>
                <QuoteText style={{ color: `#000` }}>
                  “Dhyana gave our athletes something they had never had — proof
                  that the mental training was working.”
                </QuoteText>
                <BodyPara style={{ color: `#4d4d4d`, paddingTop: `12px` }}>
                  Pullela Gopichand · National Badminton Coach, India
                </BodyPara>
              </ContentBox>
            </SplitGrid>
          </Section>
        </div>

        <div style={{ backgroundColor: `#0e0e0e` }}>
          <RecordSection style={{ backgroundColor: `#0e0e0e` }}>
            <Padded style={{ backgroundColor: `#0e0e0e` }}>
              <Eyebrow style={{ color: `#c3ff00` }}>THE OLYMPICS</Eyebrow>
              <CommonTitle1 $maxWidth="680px" style={{ color: `#fff` }}>
                Worn by Indian athletes preparing for the Olympic Games.
              </CommonTitle1>
              <RecordStatGrid>
                {recordStats1.map(stat => (
                  <div key={stat.label}>
                    <CommonLabel style={{ color: `#fff` }}>
                      {stat.label}
                    </CommonLabel>
                    <CommonText style={{ color: `#fff` }}>
                      {stat.text}
                    </CommonText>
                  </div>
                ))}
              </RecordStatGrid>
            </Padded>
          </RecordSection>
        </div>

        <Section>
          <img
            src="https://darkslategray-salmon-190399.hostingersite.com/dhyanav1Vid1.png"
            alt="A customer holding a Dhyana box, speaking about discovering the product"
            style={{ width: `100%`, display: `block` }}
          />
        </Section>

        <div style={{ backgroundColor: `transparent` }}>
          <Section $bg="#eeeeee">
            <Gallery>
              <GalleryImage>
                <img
                  src="https://darkslategray-salmon-190399.hostingersite.com/d1.png"
                  alt="Dhyana charging case open, showing the ring and cable"
                />
              </GalleryImage>
              <GalleryImage>
                <img
                  src="https://darkslategray-salmon-190399.hostingersite.com/d2.png"
                  alt="Dhyana ring-size fitters and retail packaging"
                />
              </GalleryImage>
              <GalleryImage>
                <img
                  src="https://darkslategray-salmon-190399.hostingersite.com/d3.png"
                  alt="Woman wearing the Dhyana ring while using her phone"
                />
              </GalleryImage>
            </Gallery>
          </Section>
        </div>

        <div style={{ backgroundColor: `#C3FF00` }}>
          <RecordSection style={{ backgroundColor: `#C3FF00` }}>
            <Padded style={{ backgroundColor: `#C3FF00` }}>
              <Eyebrow style={{ color: `#1f1f1f` }}>WHAT HAPPENED</Eyebrow>
              <CommonTitle1 $maxWidth="680px">
                Meditation became measurable — and made it to the Olympics.
              </CommonTitle1>
              <RecordStatGrid>
                {recordStats2.map(stat => (
                  <div key={stat.label}>
                    <CommonLabel style={{ color: `#000000` }}>
                      {stat.label}
                    </CommonLabel>
                    <CommonText style={{ color: `#1f1f1f` }}>
                      {stat.text}
                    </CommonText>
                  </div>
                ))}
              </RecordStatGrid>
            </Padded>
          </RecordSection>
        </div>

        <div style={{ backgroundColor: `#000000` }}>
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
            <NavLabel>PREVIOUS</NavLabel>
            <NavLink to="/ein">← EIN</NavLink>
          </NavBlock>
          <NavBlock $right>
            <NavLabel>INDEX</NavLabel>
            <NavLink to="/work">ALL WORK</NavLink>
          </NavBlock>
          <NavBlock $right>
            <NavLabel>Next</NavLabel>
            <NavLink to="/mo-naveen-mo-ghare">MO NAVEEN, MO GHARE →</NavLink>
          </NavBlock>
        </NavSection>
      </PageWrapper>
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

const canonicalUrl = "https://www.avantari.org/dhyana-v1"

export const Head = () => (
  <>
    <Seo
      title="Dhyana 1 Smart Ring Product Development | Avantari"
      description="How Avantari designed Dhyana 1, a finger-worn device and companion experience built around heart-rate variability sensing."
      image={seoImg}
      url={canonicalUrl}
    />
    <meta name="robots" content="index, follow" />
    <meta
      name="keywords"
      content="smart ring product development, HRV wearable design, mindfulness wearable engineering"
    />
  </>
)

export default DhyanaV1

// export default DhyanaV2

// export default DhyanaV2
