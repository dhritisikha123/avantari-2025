import React, { useState, useRef } from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import seoImg from "../images/og-images/hipposOG.png"
import hippos1 from "../images/videos/hippos1.mp4"
import hipposHero from "../images/newWeb/hippos/hipposHero.png"
import hipposBulletGeometry from "../images/newWeb/hippos/hipposBulletGeometry.png"
import hipposPyroIterations from "../images/newWeb/hippos/hipposPyroIterations.png"
import hipposCustomAirbag from "../images/newWeb/hippos/hipposCustomAirbag.png"
import hipposDeploymentRig from "../images/newWeb/hippos/hipposDeploymentRig.png"
import hipposVideoPoster from "../images/newWeb/hippos/hipposVideoPoster.png"

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
  color: ${({ $color }) => $color || "#4d4d4d"};
  margin: 0;
  padding-bottom: 16px;
`

const Eyebrow1 = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  @media only screen and (max-width: 567px) {
    font-size: 24px;
    padding-bottom: 24px;
  }
  line-height: 100%;
  text-transform: uppercase;
  color: #c3ff00;
  margin: 0;
  padding-bottom: 28px;
`

const CommonTitle = styled.h2`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 42px;
  color: #000000;
  margin: 0 0 0 0;
  // max-width: ${({ $maxWidth }) => $maxWidth || "460px"};

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
  // max-width: ${({ $maxWidth }) => $maxWidth || "460px"};
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
  width: 70%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
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

const EngineeringGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 40px;

  @media only screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`

const EngineeringCard = styled.div`
  background-color: #f2f2f2;
  padding: 32px;
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
  width: 64px;
  height: 64px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &::after {
    content: "";
    border-style: solid;
    border-width: 10px 0 10px 16px;
    border-color: transparent transparent transparent #000000;
    margin-left: 4px;
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
  grid-template-columns: repeat(3, 1fr);
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
const TrialGallery = styled.div`
  display: flex;
  align-items: stretch;
  gap: 16px;
  margin-top: 30px;

  @media only screen and (max-width: 1023px) {
    flex-direction: column;
  }
`

const TrialImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 25px;
  row-gap: 16px;
  flex: 1;
  min-width: 0;

  @media only screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`

const TrialCell = styled.div`
  position: relative;
  width: 360px;
  flex-shrink: 0;
  background-color: #d9d9d9;
  cursor: ${({ $video }) => ($video ? "pointer" : "default")};

  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media only screen and (max-width: 1023px) {
    height: 400px;
    width: 100%;
  }
`

const TrialImageCard = styled.div`
  background-color: #edeeee;
  padding: 36px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media only screen and (max-width: 1023px) {
    padding: 16px;
    gap: 8px;
  }
`

const TrialImageTitle = styled.p`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  color: #000000;
  margin: 0;

  @media only screen and (max-width: 1023px) {
    font-size: 22px;
    line-height: 28px;
  }
`

const TrialImageFrame = styled.div`
  height: 196px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media only screen and (max-width: 1023px) {
    height: 100px;
  }
`

const TrialLabel = styled.p`
  position: absolute;
  top: 14px;
  left: 14px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #000000;
  margin: 0;
  background-color: rgba(255, 255, 255, 0.85);
  padding: 5px 9px;
`

const TrialVideoCaption = styled.div`
  position: absolute;
  left: 16px;
  bottom: 16px;
  color: #ffffff;
`

const TrialVideoTitle = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  margin: 0;
`

const TrialVideoTime = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  margin: 0;
  opacity: 0.85;
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

const meta = [
  { label: "Client", value: "Hippos Exoskeleton" },
  { label: "Year", value: "2025" },
  { label: "Discipline", value: "Hardware" },
  { label: "Deployment time", value: "5 months" },
  { label: "Services", value: "Product design, Mechanical, Deployment" },
]

const recordStats = [
  {
    label: "33 ms",
    text: "Measured deployment after pyro and puncture-geometry iteration.",
  },
  {
    label: "Standard CO₂",
    text: "Moved away from large custom helium canisters to a compact architecture around standard cartridges.",
  },
  {
    label: "5 Months",
    text: "From concept to a finished, wearable device.",
  },
]

const engineeringCards = [
  {
    title: "Pyro deployment architecture",
    text: "We designed the actuation and puncture path so the system could trigger quickly, repeatably and in a package small enough to wear.",
  },
  {
    title: "Bullet geometry iterations",
    text: "We tested different puncture profiles against standard CO₂ canisters, iterating the bullet shape until the protection system could deploy in 33 ms.",
  },
  {
    title: "Design around the mechanism",
    text: "Once the deployment stack was locked, we designed the complete product — compact, beautiful and made to live inside the legging.",
  },
]

const ASSET_BASE = "https://darkslategray-salmon-190399.hostingersite.com"

const assets = {
  heroImage: `${ASSET_BASE}/hipposHeroImage.png`,
  bulletGeometry: hipposBulletGeometry,
  pyroIterations: hipposPyroIterations,
  customAirbag: hipposCustomAirbag,
  deploymentRig: hipposDeploymentRig,
  trialVideo: `${ASSET_BASE}/hipposTrialVideoThumb.png`,
  constructionParts: `${ASSET_BASE}/hipposConstructionParts.png`,
  exploded: `${ASSET_BASE}/hipposExploded.png`,
  product: `${ASSET_BASE}/hipposProduct.png`,
  gallery1: `${ASSET_BASE}/hipposGallery1.png`,
  gallery2: `${ASSET_BASE}/hipposGallery2.png`,
  gallery3: `${ASSET_BASE}/hipposGallery3.png`,
}

const Hippos = () => {
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
              <Eyebrow $color="#547300">HARDWARE / HIPPOS</Eyebrow>
              <HeroTitle>Hippos</HeroTitle>
              <CommonSubtitle>
                An active knee-protection system engineered to disappear inside
                a legging.
              </CommonSubtitle>
              <HeroBodyPara>
                Avantari engineered Hippos: a body-worn system combining
                movement sensing, mechanical actuation and an airbag inside a
                single wearable device. The challenge was fitting that mechanism
                inside a legging — so we solved deployment first, then designed
                the device around it.
              </HeroBodyPara>
            </HeroContent>
            <HeroImages>
              <img
                src={hipposHero}
                alt="Close-up of the Hippos device against the legging fabric"
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
              <Eyebrow $color="#000000">The brief</Eyebrow>
              <CommonTitle $maxWidth="420px">
                Build a wearable system around real-time movement sensing.
              </CommonTitle>
              <BodyPara>
                Hippos combines movement sensing, mechanical actuation and an
                airbag into a single body-worn system, engineered to fit inside
                a legging.
              </BodyPara>
            </ContentBox>
            <ContentBox $bg="#0e0e0e">
              <Eyebrow style={{ color: `#c3ff00` }}>The constraint</Eyebrow>
              <CommonTitle style={{ color: `#fff` }} $maxWidth="420px">
                The first system was too big.
              </CommonTitle>
              <BodyPara style={{ color: `#8C8C8C` }}>
                They were considering large custom helium canisters, but
                wearables need a much smaller architecture that could work with
                standard cartridges and still deploy extremely fast.
              </BodyPara>
            </ContentBox>
          </SplitGrid>
        </Section>

        <div style={{ backgroundColor: `#0c0c0c` }}>
          <Section>
            <ContentBox>
              <Eyebrow style={{ color: `#c3ff00` }}>WHY THE AIRBAG</Eyebrow>
              <CommonTitle style={{ color: `#ffffff` }}>
                Deployment is measured in milliseconds.
              </CommonTitle>
              <BodyPara style={{ color: `#8C8C8C` }}>
                Hippos continuously monitors knee movement. When the system
                detects a dangerous inflection pattern, it is
                <br />
                designed to trigger the airbag around the joint. The
                sense-to-deploy sequence had to complete in milliseconds,
                <br />
                not seconds — that speed requirement shaped every part of
                the mechanism.
              </BodyPara>
              <Tag
                $bg="#C3FF00"
                $color="#000"
                //   style={{ border: "1px solid #ffffff" }}
              >
                <TagTitle style={{ margin: `0px`, paddingBottom: `6px` }}>
                  SENSE → DETECT → DEPLOY
                </TagTitle>
                <TagText style={{ opacity: 0.75 }}>
                  Real-time movement sensing triggers the airbag mechanism.
                </TagText>
              </Tag>
            </ContentBox>
          </Section>
        </div>

        <div style={{ backgroundColor: `#fff` }}>
          <Section $bg="#ffffff">
            <Padded style={{ backgroundColor: `transparent` }}>
              <Eyebrow>Engineering before design</Eyebrow>
              <CommonTitle $maxWidth="620px">
                Protection only works if it gets there first.
              </CommonTitle>
              <EngineeringGrid>
                {engineeringCards.map(card => (
                  <EngineeringCard key={card.title}>
                    <CommonLabel style={{ color: `#000` }}>
                      {card.title}
                    </CommonLabel>
                    <CommonText style={{ color: `#4D4D4D` }}>
                      {card.text}
                    </CommonText>
                  </EngineeringCard>
                ))}
              </EngineeringGrid>
            </Padded>
          </Section>
        </div>

        <div style={{ backgroundColor: `#000` }}>
          <Section $bg="#000000">
            <Padded style={{ backgroundColor: `transparent` }}>
              <Eyebrow1 $color="#c3ff00">How we achieved 33 ms</Eyebrow1>
              <TrialGallery>
                <TrialImageGrid>
                  <TrialImageCard>
                    <TrialImageTitle>
                      Bullet geometry iterations
                    </TrialImageTitle>
                    <TrialImageFrame>
                      <img
                        src={assets.bulletGeometry}
                        alt="Bullet geometry iterations"
                      />
                    </TrialImageFrame>
                  </TrialImageCard>
                  <TrialImageCard>
                    <TrialImageTitle>Pyro iterations</TrialImageTitle>
                    <TrialImageFrame>
                      <img src={assets.pyroIterations} alt="Pyro iterations" />
                    </TrialImageFrame>
                  </TrialImageCard>
                  <TrialImageCard>
                    <TrialImageTitle>Custom airbag</TrialImageTitle>
                    <TrialImageFrame>
                      <img src={assets.customAirbag} alt="Custom airbag" />
                    </TrialImageFrame>
                  </TrialImageCard>
                  <TrialImageCard>
                    <TrialImageTitle>Deployment rig</TrialImageTitle>
                    <TrialImageFrame>
                      <img src={assets.deploymentRig} alt="Deployment rig" />
                    </TrialImageFrame>
                  </TrialImageCard>
                </TrialImageGrid>
                <TrialCell
                  $video
                  onClick={handlePlay}
                  style={{ border: "2px solid #c3ff00" }}
                >
                  <video
                    preload="auto"
                    controls={playing}
                    playsInline
                    poster={hipposVideoPoster}
                    ref={videoRef}
                    disablePictureInPicture
                    controlsList="nofullscreen nodownload noremoteplayback"
                  >
                    <source src={hippos1} type="video/mp4" />
                  </video>
                  {!playing && <PlayButton aria-label="Play trial" />}
                  {!playing && (
                    <TrialVideoCaption>
                      <TrialVideoTitle>Trial 1</TrialVideoTitle>
                      <TrialVideoTime>0 ms</TrialVideoTime>
                    </TrialVideoCaption>
                  )}
                </TrialCell>
              </TrialGallery>
              <Eyebrow style={{ paddingTop: `20px` }}>
                Before there was a wearable, there was a deployment problem. We
                proved the mechanism first.
              </Eyebrow>
            </Padded>
          </Section>
        </div>

        <Section>
          <SplitGrid>
            <ContentBox>
              <Eyebrow>THE CONSTRUCTION</Eyebrow>
              <CommonTitle>Make an airbag disappear into leggings.</CommonTitle>
              <BodyPara>
                We iterated the enclosure around movement, garment integration
                and the geometry of the leg. Every millimetre mattered: the
                device had to protect the mechanism while becoming visually and
                physically quiet inside the leggings.
              </BodyPara>
              <Tag style={{ backgroundColor: `#000000` }}>
                <TagTitle style={{ color: `#ffffff` }}>
                  WORN, NOT CARRIED
                </TagTitle>
                <TagText style={{ color: `#8c8c8c` }}>
                  The enclosure was shaped around the body and the garment, not
                  around a bench-top assembly.
                </TagText>
              </Tag>
            </ContentBox>
            <ImageBox style={{ backgroundColor: `#000000` }}>
              <img
                src="https://darkslategray-salmon-190399.hostingersite.com/hippos2.png"
                alt="Exploded view of the Hippos knee-brace assembly"
              />
            </ImageBox>
          </SplitGrid>
        </Section>

        <Section>
          <SplitGrid>
            <ImageBox>
              <img
                src="https://darkslategray-salmon-190399.hostingersite.com/hippos3.png"
                alt="Hippos leggings worn on the leg, showing the device module"
              />
            </ImageBox>
            <ContentBox>
              <Eyebrow>THE FORM</Eyebrow>
              <CommonTitle>
                Packing a complex mechanism into something beautiful.
              </CommonTitle>
              <BodyPara>
                The 33 ms deployment work gave us a proven mechanism. We then
                packaged the standard CO₂ cartridge, pyro actuator, puncture
                path and air path into a miniaturised architecture that could
                sit against the leg rather than beside it.
              </BodyPara>
              <Tag>
                <TagTitle>STANDARD CO₂</TagTitle>
                <TagText>
                  No bulky custom helium canister — a compact architecture
                  around an off-the-shelf cartridge.
                </TagText>
              </Tag>
            </ContentBox>
          </SplitGrid>
        </Section>

        <div style={{ backgroundColor: `#000000` }}>
          <Section>
            <SplitGrid>
              <ContentBox>
                <Eyebrow $color="#c3ff00">THE PRODUCT</Eyebrow>
                <CommonTitle style={{ color: `#fff` }}>
                  The mechanism became a product.
                </CommonTitle>
                <BodyPara style={{ color: `#8C8C8C` }}>
                  Once the internals were locked, we resolved the final housing,
                  interfaces and finish as one object — a compact deployment
                  module that looked intentional enough to belong in a
                  performance garment.
                </BodyPara>
                <Tag>
                  <TagTitle>2-MONTH BUILD</TagTitle>
                  <TagText style={{ color: `#4d4d4d` }}>
                    From a validated deployment system to the finished wearable
                    device.
                  </TagText>
                </Tag>
              </ContentBox>
              <ImageBox>
                <img
                  src="https://darkslategray-salmon-190399.hostingersite.com/hippos4.png"
                  alt="Exploded view of the Hippos device housing showing the internal PCB"
                />
              </ImageBox>
            </SplitGrid>
          </Section>
        </div>

        <div style={{ backgroundColor: `#fff` }}>
          <Section $bg="#eeeeee">
            <Gallery>
              <GalleryImage>
                <img
                  src="https://darkslategray-salmon-190399.hostingersite.com/hipposgallery1.png"
                  alt="Hippos device module, studio render"
                />
              </GalleryImage>
              <GalleryImage>
                <img
                  src="https://darkslategray-salmon-190399.hostingersite.com/hipposgallery2.png"
                  alt="Hippos device module mounted on the legging fabric"
                />
              </GalleryImage>
              <GalleryImage>
                <img
                  src="https://darkslategray-salmon-190399.hostingersite.com/hipposgallery3.png"
                  alt="Hippos leggings worn on the legs"
                />
              </GalleryImage>
            </Gallery>
          </Section>
        </div>

        <div style={{ backgroundColor: `#C3FF00` }}>
          <RecordSection style={{ backgroundColor: `#C3FF00` }}>
            <Padded style={{ backgroundColor: `#C3FF00` }}>
              <Eyebrow $color="#000000">WHAT HAPPENED</Eyebrow>
              <CommonTitle1>33 ms. Inside a legging. In 5 months.</CommonTitle1>
              <RecordStatGrid>
                {recordStats.map(stat => (
                  <div key={stat.label}>
                    <CommonLabel style={{ color: `#000000` }}>
                      {stat.label}
                    </CommonLabel>
                    <CommonText style={{ color: `#000000` }}>
                      {stat.text}
                    </CommonText>
                  </div>
                ))}
              </RecordStatGrid>
            </Padded>
          </RecordSection>
        </div>

        <QuoteSection style={{ backgroundColor: `transparent` }}>
          <Padded style={{ backgroundColor: `transparent` }}>
            <QuoteGrid>
              <div>
                <Eyebrow $color="#4d4d4d">Client words</Eyebrow>
                <QuoteDivider />
                <CommonSubtitle style={{ paddingBottom: `16px` }}>
                  Kylin Shaw
                </CommonSubtitle>
                <Eyebrow>Founder & CEO, Hippos</Eyebrow>
              </div>
              <QuoteText>
                “Avantari took a deployment concept, engineered it around
                standard CO₂, iterated the puncture mechanism until we reached
                33 ms, and then turned that engineering into a product we were
                proud to own. They operated like an extension of our founding
                team—fast, rigorous and deeply invested in getting it right.”
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
            <NavLabel>PREVIOUS</NavLabel>
            <NavLink to="/evolve-or-fossilise">← EVOLVE OR FOSSILISE</NavLink>
          </NavBlock>
          <NavBlock $right>
            <NavLabel>INDEX</NavLabel>
            <NavLink to="/work">ALL WORK</NavLink>
          </NavBlock>
          <NavBlock $right>
            <NavLabel>Next</NavLabel>
            <NavLink to="/darwinbot">DARWINBOT →</NavLink>
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

const canonicalUrl = "https://www.avantari.org/hippos"

export const Head = () => (
  <>
    <Seo
      title="Hippos Wearable Knee-Protection System | Avantari"
      description="How Avantari engineered Hippos — a body-worn system combining sensing, mechanics and an airbag inside a garment."
      image={seoImg}
      url={canonicalUrl}
    />
    <meta name="robots" content="index, follow" />
    <meta
      name="keywords"
      content="wearable knee protection development, body-worn airbag system, sports wearable engineering"
    />
  </>
)

export default Hippos
