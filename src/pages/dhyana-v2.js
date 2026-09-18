import React, { useState, useRef } from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import seoImg from "../images/og-images/dhyana2OG.png"

import dhyanav2Hero from "../images/newWeb/dhyanav2/dhyana2One.png"
import dhyanav2Mechanic from "../images/newWeb/dhyanav2/dhyanav2TwoM.png"
import dhyanav2Gallery1 from "../images/newWeb/dhyanav2/dhyanav2Gallery1.png"
import dhyanav2Gallery2 from "../images/newWeb/dhyanav2/dhyanav2Gallery2.png"
import dhyanav2Gallery3 from "../images/newWeb/dhyanav2/dhyanav2Gallery3.png"
import dhyanav2Spec from "../images/newWeb/dhyanav2/dhyanav2pecN.png"
import dhyanav2PlayThumb1 from "../images/newWeb/dhyanav2/playVid1.png"
import dhyanav2PlayThumb2 from "../images/newWeb/dhyanav2/playVid2.png"
import dhyanav2Vid from "../images/newWeb/dhyanav2/dhyanav2vid.mp4"
import dhyanav2Vid2 from "../images/newWeb/dhyanav2/dhyanav2vid2.mp4"

import dhyanav2Play1 from "../images/dhyana2Play1.png"
import dhyanav2Play2 from "../images/dhyana2Play2.png"


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

const DisplayLTitle = styled.h2`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 56px;
  line-height: 64px;
  color: #000000;
  margin: 0 0 0 0;
  max-width: ${({ $maxWidth }) => $maxWidth || "none"};

  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    font-size: 40px;
    line-height: 48px;
  }

  @media only screen and (max-width: 567px) {
    font-size: 36px;
    line-height: 44px;
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
  { label: "Year", value: "2023" },
  { label: "Discipline", value: "Hardware" },
  { label: "Award", value: "Red Dot" },
  { label: "Services", value: "Industrial design, PCB, Sensors" },
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
/* The form — feature columns + spec card                              */
/* ------------------------------------------------------------------ */

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 50px;
  row-gap: 24px;
  margin-top: 40px;

  @media only screen and (max-width: 567px) {
    grid-template-columns: 1fr;
  }
`

const FeatureColumn = styled.div`
  padding-top: 18px;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
`

const FeatureLabel = styled.h4`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  margin: 0 0 10px 0;
`

const FeatureText = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #4d4d4d;
  margin: 0;
`

const SpecCard = styled.div`
  margin-top: 40px;
  border-radius: 4px;
  overflow: hidden;

  img {
    width: 100%;
    display: block;
  }
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
`

/* ------------------------------------------------------------------ */
/* Record stats                                                        */
/* ------------------------------------------------------------------ */

const RecordSection = styled(Section)`
  background-color: #c3ff00;
`

const RecordStatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
    label: "RED DOT",
    text: "Product Design award.",
  },
  {
    label: "ALL THREE, ALWAYS ON",
    text: "Sleep, fitness and mindfulness, continuously.",
  },
]

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
/* Page                                                                 */
/* ------------------------------------------------------------------ */

const DhyanaV2 = () => {
  const [playing1, setPlaying1] = useState(false)
  const videoRef1 = useRef(null)
  const handlePlay1 = () => {
    setPlaying1(true)
    if (videoRef1.current) videoRef1.current.play()
  }

  const [playing2, setPlaying2] = useState(false)
  const videoRef2 = useRef(null)
  const handlePlay2 = () => {
    setPlaying2(true)
    if (videoRef2.current) videoRef2.current.play()
  }

  return (
    <Layout footerVariant="dark">
      <PageWrapper>
        <HeroSection>
          <HeroGrid>
            <HeroContent>
              <Eyebrow style={{ color: `#547300` }}>HARDWARE / AVANTARI</Eyebrow>
              <HeroTitle>Dhyana 2</HeroTitle>
              <CommonSubtitle>
                A ring that tells you when you’re stressed.
              </CommonSubtitle>
              <HeroBodyPara>
                The first smart ring to track sleep, fitness and mindfulness
                at once. A patented LED alerts you to stress as it happens,
                rather than reporting it the next morning.
              </HeroBodyPara>
            </HeroContent>
            <HeroImages>
              <img src={dhyanav2Hero} alt="Dhyana 2 app shown on a phone held outdoors" />
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
                Tracking tells you about yesterday.
              </CommonTitle>
              <BodyPara style={{ color: `#1f1f1f` }}>
                Dhyana 1 tracked mindfulness only while it was worn. Dhyana 2
                had to be worn continuously—and interrupt while stress was
                still happening, when there was still time to act.
              </BodyPara>
            </ContentBox>
            <ContentBox $bg="#0e0e0e">
              <Eyebrow style={{ color: `#c3ff00` }}>The constraint</Eyebrow>
              <CommonTitle style={{ color: `#fff` }} $maxWidth="420px">
                No screen. It still had to get your attention.
              </CommonTitle>
              <BodyPara style={{ color: `#8C8C8C` }}>
                Smart sensing existed, and smart rings were on the rise. But
                Dhyana had a new challenge: get the user's attention without
                a screen.
              </BodyPara>
            </ContentBox>
          </SplitGrid>
        </Section>

        <div style={{ backgroundColor: `#0c0c0c` }}>
          <FilmSection>
            <Padded>
              <Eyebrow style={{ color: `#c3ff00` }}>Film / Dhyana 2</Eyebrow>
              <VideoFrame onClick={handlePlay1}>
                {!playing1 && (
                  <img src={dhyanav2Play1} alt="Dhyana 2 ring film" />
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
                  <source src={dhyanav2Vid2} type="video/mp4" />
                </video>
                {!playing1 && <PlayButton aria-label="Play film" />}
              </VideoFrame>
              <FilmCaption style={{ color: `#8C8C8C` }}>The ring, and what it reads.</FilmCaption>
            </Padded>
          </FilmSection>
        </div>

        <div style={{ backgroundColor: `#0e0e0e` }}>
          <Section>
            <SplitGrid>
              <ContentBox>
                <Eyebrow style={{ color: `#c3ff00` }}>The mechanic</Eyebrow>
                <CommonTitle style={{ color: `#fff` }}>
                  HRV as an emotional seismograph.
                </CommonTitle>
                <BodyPara style={{ color: `#8C8C8C` }}>
                  A sensitive heart rate variability sensor reads
                  sympathovagal balance continuously. When the balance tips,
                  the ring says so.
                </BodyPara>
                <Tag>
                  <TagTitle>Patented LED</TagTitle>
                  <TagText>A real-time stress alert, on the finger.</TagText>
                </Tag>
              </ContentBox>
              <ImageBox style={{ backgroundColor: `#ffffff` }}>
                <img src={dhyanav2Mechanic} alt="Dhyana 2 ring product render" style={{ objectFit: `contain` }} />
              </ImageBox>
            </SplitGrid>
          </Section>
        </div>

        <Section $bg="#eeeeee">
          <Padded style={{ backgroundColor: `transparent` }}>
            <Eyebrow>The form</Eyebrow>
            <CommonTitle1>Light enough to forget.</CommonTitle1>
            <FeatureGrid>
              <FeatureColumn>
                <FeatureLabel>A split ring, not a band</FeatureLabel>
                <FeatureText>
                  It wraps the finger rather than encircling it, so it feels
                  weightless and fits more hands.
                </FeatureText>
              </FeatureColumn>
              <FeatureColumn>
                <FeatureLabel>Three measures, one device</FeatureLabel>
                <FeatureText>
                  Sleep, fitness and mindfulness usually need three
                  products. This reads all three continuously.
                </FeatureText>
              </FeatureColumn>
            </FeatureGrid>
            <SpecCard>
              <img
                src={dhyanav2Spec}
                alt="Dhyana 2 specifications — HRV sensor, blood oxygen monitor, Bluetooth 5.0, five-day ring battery, twenty-day dock battery, one-hour charging time"
              />
            </SpecCard>
          </Padded>
        </Section>

        <div style={{ backgroundColor: `#0c0c0c` }}>
          <FilmSection>
            <Padded>
              <Eyebrow style={{ color: `#c3ff00` }}>Promoted by the best</Eyebrow>
              <VideoFrame onClick={handlePlay2}>
                {!playing2 && (
                  <img src={dhyanav2Play2} alt="Athlete wearing Dhyana 2 during training" />
                )}
                <video
                  preload="auto"
                  controls={playing2}
                  playsInline
                  ref={videoRef2}
                  style={{ display: playing2 ? "block" : "none" }}
                  disablePictureInPicture
                  controlsList="nofullscreen nodownload noremoteplayback"
                >
                  <source src={dhyanav2Vid} type="video/mp4" />
                </video>
                {!playing2 && <PlayButton aria-label="Play film" />}
              </VideoFrame>
              <FilmCaption style={{ color: `#8C8C8C` }}>A session, start to finish.</FilmCaption>
            </Padded>
          </FilmSection>
        </div>

        <Section $bg="#eeeeee">
          <Gallery>
            <GalleryImage>
              <img src={dhyanav2Gallery1} alt="Dhyana 2 ring and charging dock components" />
            </GalleryImage>
            <GalleryImage>
              <img src={dhyanav2Gallery2} alt="Dhyana 2 ring on stone" />
            </GalleryImage>
            <GalleryImage>
              <img src={dhyanav2Gallery3} alt="Dhyana 2 ring worn on a hand" />
            </GalleryImage>
          </Gallery>
        </Section>

        <div style={{ backgroundColor: `#C3FF00` }}>
          <RecordSection style={{ backgroundColor: `#C3FF00` }}>
            <Padded style={{ backgroundColor: `#C3FF00` }}>
              <Eyebrow style={{ color: `#1f1f1f` }}>What happened</Eyebrow>
              <DisplayLTitle $maxWidth="680px">
                A stress alert that arrives in time to matter.
              </DisplayLTitle>
              <RecordStatGrid>
                {recordStats.map(stat => (
                  <div key={stat.label}>
                    <CommonLabel style={{ color: `#000000` }}>{stat.label}</CommonLabel>
                    <CommonText style={{ color: `#1f1f1f` }}>{stat.text}</CommonText>
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
            <NavLink to="/itc-mastAR-chef">← ITC MasterChef</NavLink>
          </NavBlock>
          <NavBlock $right>
            <NavLabel>INDEX</NavLabel>
            <NavLink to="/work">ALL WORK</NavLink>
          </NavBlock>
          <NavBlock $right>
            <NavLabel>Next</NavLabel>
            <NavLink to="/dhyana-app">DHYANA APP →</NavLink>
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

const canonicalUrl = "https://www.avantari.org/work/dhyana-v2"

export const Head = () => (
  <>
    <Seo
      title="Dhyana 2 Stress-Tracking Smart Ring | Avantari"
      description="How Avantari designed and engineered Dhyana 2, a smart ring for sleep, fitness and mindfulness with a patented real-time stress-alert LED."
      image={seoImg}
      url={canonicalUrl}
    />
    <meta name="robots" content="index, follow" />
    <meta
      name="keywords"
      content="stress-tracking smart ring, wearable product design, HRV sensor, mindfulness wearable, sleep and fitness ring, electronics engineering"
    />
  </>
)

export default DhyanaV2
