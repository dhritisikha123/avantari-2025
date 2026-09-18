import React, { useState, useRef } from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import seoImg from "../images/og-images/sOG.png"
import playButtonIcon from "../images/newWeb/saffola/sPlay.png"
import saffola1 from "../images/saffola1.png"

import sVid from "../images/newWeb/saffola/sVid.mp4"

const PageWrapper = styled.div`
  margin-top: 64px;

  @media only screen and (min-width: 769px) and (max-width: 1023px) {
    margin-top: 70px;
  }

  @media only screen and (min-width: 1024px) {
    margin-top: 88px;
  }
`

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
  background-color: #000;
  padding: 70px 60px;
  // padding-bottom: 0px;

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
  font-size: 22px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin: 0 0 6px 0;

  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 567px) {
    font-size: 18px;
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

/* Grid items default to min-width: auto, which lets the label/paragraph's
   content size push the column wider than its 1fr track instead of
   wrapping — min-width: 0 forces it to respect the track width. */
const DecsPillar = styled.div`
  min-width: 0;
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

const HowItWentSection = styled(Section)`
  background-color: #ffffff;
`

const HowItWentInner = styled.div`
  padding: 88px 120px;

  @media only screen and (max-width: 1023px) {
    padding: 48px 20px;
  }
`

const HowItWentHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;

  @media only screen and (max-width: 1023px) {
    margin-bottom: 32px;
  }
`

const HowItWentEyebrow = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.52px;
  text-transform: uppercase;
  color: #4d4d4d;
  margin: 0;

  @media only screen and (max-width: 1023px) {
    line-height: 18px;
  }
`

const HowItWentTitle = styled.h2`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  color: #000000;
  margin: 0;
  max-width: 1000px;

  @media only screen and (max-width: 1023px) {
    font-size: 32px;
    line-height: 40px;
    max-width: none;
  }
`

const StepDivider = styled.div`
  height: 1px;
  background-color: #d5d6d6;
`

const StepRow = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 22px 0;

  @media only screen and (max-width: 1023px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    padding: 20px 0;
  }
`

const StepLabel = styled.p`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  color: #000000;
  margin: 0;
  flex: 0 0 220px;

  @media only screen and (max-width: 1023px) {
    font-size: 22px;
    line-height: 28px;
    flex: none;
    width: 100%;
  }
`

const StepText = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #4d4d4d;
  margin: 0;
  flex: 1;

  @media only screen and (max-width: 1023px) {
    font-size: 14px;
    line-height: 22px;
    width: 100%;
  }
`

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
  font-size: 20px;
  line-height: 26px;
  color: #000000;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: 567px) {
    font-size: 26px;
    line-height: 32px;
  }
`

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

const DesktopS = styled.div`
  @media only screen and (max-width: 567px) {
    display: none;
  }

  @media only screen and (min-width: 568px) {
    display: block;
  }
`

const MobileS = styled.div`
  @media only screen and (max-width: 567px) {
    display: block;
  }

  @media only screen and (min-width: 568px) {
    display: none;
  }
`

const decsPillars = [
  {
    label: "Knowledge",
    text: "Dr. Raghu Ram’s breast-health expertise became the knowledge layer behind NARI.",
  },
  {
    label: "Language",
    text: "The same experience could communicate naturally across regional Indian languages, widening access beyond English.",
  },
  {
    label: "Presence",
    text: "The intelligence could move between the digital service, a life-size hologram and HoloBot without breaking the experience.",
  },
]

const meta = [
  { label: "Client", value: "Marico" },
  { label: "Year", value: "2017" },
  { label: "Discipline", value: "Software" },
  { label: "Stores", value: "15" },
  {
    label: "Services",
    value: "Mixed reality, Retail, Content",
  },
]

const recordStats = [
  {
    label: "15 STORES",
    text: "Installed across Mumbai.",
  },
  {
    label: "2017",
    text: "Mixed reality, before the term was mainstream.",
  },
]

const howItWentSteps = [
  {
    label: "The problem",
    text: "Marico needed shoppers to understand a new oil’s benefits and taste, standing in a supermarket.",
  },
  {
    label: "The rig",
    text: "Samsung S7 Edge phones and modified VR Gear headsets, turned into a working mixed reality setup.",
  },
  {
    label: "The aisle",
    text: "Shoppers put on the headset and watched Chef Shipra Khanna cook at life size, in front of them.",
  },
  {
    label: "The finish",
    text: "Freshly made falafel — the dish they had just watched being cooked.",
  },
]

const recordStats1 = [
  {
    label:
      "“AR Rahman launched AR app where fans can take pictures with him as if he was actually present in person”",
    text: "Hindustan Times",
  },

  {
    label:
      "“The music maestro is experimenting with AR to connect with his fans”",
    text: "Deccan Chronicle",
  },
]

const ASSET_BASE = "https://darkslategray-salmon-190399.hostingersite.com"

const assets = {
  heroImage: `${ASSET_BASE}/nariHeroImage.png`,
  platform: `${ASSET_BASE}/nariPlatform1.png`,
  platform1: `${ASSET_BASE}/nariPlatform.png`,
  hologramStage: `https://darkslategray-salmon-190399.hostingersite.com/nari-hologram-stage.png`,
  transitionLeft: `${ASSET_BASE}/nari-kims.png`,
  transitionRight: `${ASSET_BASE}/nari-hologram-2.png`,
  filmThumb: `${ASSET_BASE}/nariVid.png`,
  gallery1: `${ASSET_BASE}/nari-gallery-1.png`,
  gallery2: `${ASSET_BASE}/nari-gallery-2.png`,
  gallery3: `${ASSET_BASE}/nari-gallery-3.png`,
}

const SaffolaAuraLaunch = () => {
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
              <Eyebrow $color="#547300">SOFTWARE / MARICO</Eyebrow>
              <HeroTitle>Saffola Aura Launch</HeroTitle>
              <CommonSubtitle>
                A chef cooking in the supermarket aisle. Built from modified
                phones — the hardware didn't exist yet.
              </CommonSubtitle>
              <HeroBodyPara>
                A mixed-reality in-store launch for Saffola Aura, where shoppers
                watched a life-size hologram of Chef Shipra Khanna cook — then
                tasted the dish for real.
              </HeroBodyPara>
            </HeroContent>
            <HeroImages>
              <img src="https://darkslategray-salmon-190399.hostingersite.com/s1.png" />
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
                Make a new cooking oil demonstrable in the aisle.
              </CommonTitle>
              <BodyPara>
                Saffola Aura’s nutritional benefit and flavour could not be
                communicated by a shelf label alone. Marico wanted shoppers to
                experience the product while deciding what to buy.
              </BodyPara>
            </ContentBox>
            <ContentBox $bg="#000000">
              <Eyebrow style={{ color: `#c3ff00` }}>The constraint</Eyebrow>
              <CommonTitle style={{ color: `#fff` }} $maxWidth="420px">
                The hardware we needed did not exist.
              </CommonTitle>
              <BodyPara style={{ color: `#8C8C8C` }}>
                This was 2017. Consumer mixed-reality hardware was not ready, so
                the experience had to be engineered from modified phones and VR
                headsets before it could be installed in stores.
              </BodyPara>
            </ContentBox>
          </SplitGrid>
        </Section>

        <div style={{ backgroundColor: `#fff` }}>
          <HowItWentSection>
            <HowItWentInner>
              <HowItWentHeader>
                <HowItWentEyebrow>How it went</HowItWentEyebrow>
                <HowItWentTitle>Improvised, then installed.</HowItWentTitle>
              </HowItWentHeader>
              <StepDivider />
              {howItWentSteps.map(step => (
                <React.Fragment key={step.label}>
                  <StepRow>
                    <StepLabel>{step.label}</StepLabel>
                    <StepText>{step.text}</StepText>
                  </StepRow>
                  <StepDivider />
                </React.Fragment>
              ))}
            </HowItWentInner>
          </HowItWentSection>
        </div>

        <div style={{ backgroundColor: `#000` }}>
          <FilmSection>
            <Padded>
              <Eyebrow style={{ color: `#C3FF00` }}>FILM / IN STORE</Eyebrow>
              <VideoFrame onClick={handlePlay}>
                {!playing && (
                  <img src={playButtonIcon} alt="Darwinbot launch film" />
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
                  <source src={sVid} type="video/mp4" />
                </video>
                {!playing && <PlayButton aria-label="Play film">▶</PlayButton>}
              </VideoFrame>
              <FilmCaption style={{ color: `#8C8C8C` }}>
                The experience, as shoppers met it.
              </FilmCaption>
            </Padded>
          </FilmSection>
        </div>

        <Section>
          <SplitGrid>
            <ContentBox>
              <Eyebrow>THE EXPERIENCE</Eyebrow>
              <CommonTitle>A celebrity chef, at full scale.</CommonTitle>
              <BodyPara>
                Life-size presence is what separated this from a video on a
                screen. The chef stood in the aisle, cooking, at the moment the
                shopper was deciding what to buy.
              </BodyPara>
            </ContentBox>
            <ImageBox>
              <img src="https://darkslategray-salmon-190399.hostingersite.com/s2.png" />
            </ImageBox>
          </SplitGrid>
        </Section>

        <div style={{ backgroundColor: `#C3FF00` }}>
          <RecordSection style={{ backgroundColor: `#C3FF00` }}>
            <Padded style={{ backgroundColor: `#C3FF00` }}>
              <Eyebrow $color="#1f1f1f">WHAT HAPPENED</Eyebrow>
              <CommonTitle1 style={{ color: `#000` }}>
                Fifteen supermarkets across Mumbai, over a month.
              </CommonTitle1>
              <RecordStatGrid>
                {recordStats.map(stat => (
                  <div key={stat.label}>
                    <CommonLabel style={{ color: `#000` }}>
                      {stat.label}
                    </CommonLabel>
                    <CommonText style={{ color: `#000` }}>
                      {stat.text}
                    </CommonText>
                  </div>
                ))}
              </RecordStatGrid>
            </Padded>
          </RecordSection>
        </div>

        <Section>
          <DesktopS>
            <img
              src="https://darkslategray-salmon-190399.hostingersite.com/s3.png"
              alt=""
              style={{ width: `100%`, margin: `auto, 0`, textAlign: `center` }}
            />
          </DesktopS>
          <MobileS>
            <img
              src={saffola1}
              alt=""
              style={{ width: `100%`, margin: `auto, 0`, textAlign: `center` }}
            />
          </MobileS>
        </Section>

        <QuoteSection style={{ backgroundColor: `transparent` }}>
          <Padded style={{ backgroundColor: `transparent` }}>
            <QuoteGrid>
              <div>
                <Eyebrow $color="#4d4d4d">Client words</Eyebrow>
                <QuoteDivider />
                <CommonSubtitle style={{ paddingBottom: `16px` }}>
                  Anuradha Aggarwal
                </CommonSubtitle>
                <Eyebrow>Chief Marketing Officer, Marico (at launch) </Eyebrow>
              </div>
              <QuoteText>
                “Saffola Aura needed more than a message on a shelf. The
                mixed-reality experience let shoppers see the product in use,
                taste the result and understand the launch in one encounter.”
              </QuoteText>
            </QuoteGrid>
          </Padded>
        </QuoteSection>

        <div style={{ backgroundColor: `#000000` }}>
          <CTASection>
            <CTAWrap>
              <Eyebrow style={{ color: `#C3FF00` }}>Work with us</Eyebrow>
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
            <NavLink to="/mo-naveen-mo-ghare">← MO NAVEEN, MO GHARE</NavLink>
          </NavBlock>
          <NavBlock>
            <NavLabel>INDEX</NavLabel>
            <NavLink to="/work">ALL WORK</NavLink>
          </NavBlock>
          <NavBlock>
            <NavLabel>NEXT</NavLabel>
            <NavLink to="/appstar">APPSTAR →</NavLink>
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

const canonicalUrl = "https://www.avantari.org/saffola-aura-launch"

export const Head = () => (
  <>
    <Seo
      title="Saffola Aura Mixed-Reality Retail Launch | Avantari"
      description="How Avantari engineered a mixed-reality retail launch where shoppers watched Chef Shipra Khanna cook at life size, then tasted the dish."
      image={seoImg}
      url={canonicalUrl}
    />
    <meta name="robots" content="index, follow" />
    <meta
      name="keywords"
      content="mixed reality retail experience, experiential product launch, holographic chef, in-store activation, custom mixed-reality hardware"
    />
  </>
)

export default SaffolaAuraLaunch
