import React, { useState, useRef } from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import seoImg from "../images/og-images/kBOG.png"
import playButtonIcon from "../images/newWeb/icons/play.svg"

import arVid from "../images/videos/arVid.mp4"
import arLanding from "../images/newWeb/ar/arLanding.png"
import arLanding3 from "../images/newWeb/ar/arLanding3.png"
import arPlayButton from "../images/newWeb/ar/filmPlaceAR.png"

import kHero from "../images/newWeb/kHero.png"
import karbane1 from "../images/newWeb/karbane1.png"
import karbane2 from "../images/newWeb/karbane2.png"
import karbane3 from "../images/newWeb/karbane3.png"

import dhunLanding3 from "../images/newWeb/dhun/dhunLanding32.png"
import dhunLanding5 from "../images/newWeb/dhun/dhunLanding51.png"

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
const DualImage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;

  @media only screen and (max-width: 567px) {
    grid-template-columns: 1fr;
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
  margin: 0;

  padding-top: 24px;

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
  grid-template-columns: repeat(4, 1fr);
  column-gap: 50px;
  row-gap: 30px;
  margin-top: 50px;

  @media only screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`

const RecordStatGridNow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 50px;
  row-gap: 30px;
  margin-top: 50px;

  @media only screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`

const StackSubhead = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #8c8c8c;
  margin: 24px 0 0 0;

  @media only screen and (max-width: 1023px) {
    font-size: 14px;
    line-height: 22px;
  }
`

const StackGrid = styled.div`
  display: flex;
  margin-top: 24px;

  @media only screen and (max-width: 1023px) {
    flex-direction: column;
  }
`

const StackItem = styled.div`
  flex: 1;
  padding: 24px;
  border-left: 1px solid #c7c7c7;

  &:first-child {
    padding-left: 0;
    border-left: none;
  }

  @media only screen and (max-width: 1023px) {
    padding: 24px 0;
    border-left: none;
    border-top: 1px solid #c7c7c7;

    &:first-child {
      padding-top: 0;
      border-top: none;
    }
  }
`

const StackLabel = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.52px;
  text-transform: uppercase;
  color: #0e0e0e;
  margin: 0 0 14px 0;

  @media only screen and (max-width: 1023px) {
    font-size: 14px;
    margin-bottom: 8px;
  }
`

const StackText = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #0e0e0e;
  margin: 0;

  @media only screen and (max-width: 1023px) {
    font-size: 14px;
    line-height: 22px;
  }
`

const PairingHeading = styled.h2`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 56px;
  line-height: 64px;
  color: #ffffff;
  margin: 0;

  @media only screen and (max-width: 1023px) {
    font-size: 32px;
    line-height: 40px;
  }
`

const PairingBody = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #8c8c8c;
  margin: 20px 0 0 0;

  @media only screen and (max-width: 1023px) {
    font-size: 14px;
    line-height: 22px;
  }
`

const StepsRow = styled.div`
  display: flex;
  margin-top: 28px;

  @media only screen and (max-width: 1023px) {
    flex-direction: column;
    gap: 16px;
  }
`

const StepItem = styled.div`
  flex: 1;
  padding: 0 24px;
  border-left: 1px solid rgba(255, 255, 255, 0.2);

  &:first-child {
    padding-left: 0;
    border-left: none;
  }

  @media only screen and (max-width: 1023px) {
    padding: 0;
    border-left: none;
  }
`

const StepLabel = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  color: #c3ff00;
  margin: 0 0 6px 0;

  @media only screen and (max-width: 1023px) {
    letter-spacing: 0.52px;
  }
`

const StepSub = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  color: #ffffff;
  margin: 0;
`

const RecordStatGrid1 = styled.div`
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
const ImageFirstSplitGrid = styled(SplitGrid)`
  @media only screen and (max-width: 1023px) {
    ${ImageBox} {
      order: 1;
    }

    ${ContentBox} {
      order: 2;
    }
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
  { label: "Client", value: "Karban Envirotech" },
  { label: "Year", value: "2025" },
  { label: "Discipline", value: "Software" },
  { label: "Stack", value: "AWS IoT + MQTT" },
  { label: "Services", value: "Mobile UX/UI, Backend, IoT" },
]

const recordStats = [
  {
    label: "01  /  MOBILE APP",
    text: "Controls, onboarding, device state.",
  },
  {
    label: "02  /  BACKEND",
    text: "Connected infrastructure.",
  },
  {
    label: "03  /  AWS IOT",
    text: "Cloud connection layer.",
  },
  {
    label: "04  /  MQTT",
    text: "Device messaging.",
  },
]

const recordStats1 = [
  {
    label: "ONE OF ONE",
    text: "Expert craftsmen across India make every shell unique.",
  },

  {
    label: "60W",
    text: "Audio quality that stands against the best.",
  },
]

const pairingSteps = [
  { label: "01 / HOLD", text: "Hold power." },
  { label: "02 / SEE YELLOW", text: "Wait for yellow." },
  { label: "03 / CONNECT", text: "The app connects." },
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

const KarbanAirzone = () => {
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
              <Eyebrow $color="#547300">SOFTWARE / KARBAN</Eyebrow>
              <HeroTitle>Karban Airzone</HeroTitle>
              <CommonSubtitle>
                The remote controls it. The app explains it.
              </CommonSubtitle>
              <HeroBodyPara>
                We rebuilt Airzone from cloud to hand — app, backend, AWS IoT
                and MQTT — adding AQI, energy, savings and environmental impact
                the remote could never show.
              </HeroBodyPara>
            </HeroContent>
            <HeroImages>
              <img src={kHero} alt="ARXAR" />
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
                Upgrade the app without making Airzone feel unfamiliar.
              </CommonTitle>
              <BodyPara>
                Karban needed a richer app on a stronger connected stack —
                without making Airzone feel unfamiliar.
              </BodyPara>
            </ContentBox>
            <ContentBox $bg="#000000">
              <Eyebrow style={{ color: `#c3ff00` }}>The constraint</Eyebrow>
              <CommonTitle style={{ color: `#fff` }} $maxWidth="420px">
                The interface could change. The mental model could not.
              </CommonTitle>
              <BodyPara style={{ color: `#8C8C8C` }}>
                Controls and feedback still had to map cleanly to the physical
                remote.
              </BodyPara>
            </ContentBox>
          </SplitGrid>
        </Section>

        <div style={{ backgroundColor: `#fff` }}>
          <Section>
            <SplitGrid>
              <ContentBox>
                <Eyebrow>THE EXPERIENCE</Eyebrow>
                <CommonTitle>
                  The phone could show what the remote never could.
                </CommonTitle>
                <BodyPara>
                  Beyond controls, the app surfaced AQI, pollution timing,
                  weather, energy use, runtime, CO₂ saved and estimated money
                  saved.
                </BodyPara>
                <Tag>
                  <TagTitle>CONTROL → CONTEXT</TagTitle>
                  <TagText>
                    See the room, cost and environmental impact — not just the
                    controls.
                  </TagText>
                </Tag>
              </ContentBox>
              <ImageBox>
                <img src={karbane1} />
              </ImageBox>
            </SplitGrid>
          </Section>

          <RecordSection style={{ backgroundColor: `#fff` }}>
            <Padded style={{ backgroundColor: `#fff` }}>
              <Eyebrow style={{ color: `#0E0E0E` }}>
                THE CONNECTED STACK
              </Eyebrow>
              <CommonTitle1 style={{ color: `#0E0E0E` }}>
                A cleaner app needed a cleaner path to the device.
              </CommonTitle1>
              <StackSubhead>
                Backend, AWS IoT and MQTT gave the app a reliable path to
                Airzone.
              </StackSubhead>
              <StackGrid>
                {recordStats.map(stat => (
                  <StackItem key={stat.label}>
                    <StackLabel>{stat.label}</StackLabel>
                    <StackText>{stat.text}</StackText>
                  </StackItem>
                ))}
              </StackGrid>
            </Padded>
          </RecordSection>
        </div>

        <div style={{ backgroundColor: `#000000` }}>
          <Section>
            <SplitGrid>
              <ImageBox>
                <img src={karbane2} alt="Karban Airzone pairing flow" />
              </ImageBox>
              <ContentBox>
                <Eyebrow style={{ color: `#c3ff00` }}>
                  PAIRING / PRODUCT BEHAVIOUR
                </Eyebrow>
                <CommonTitle style={{ color: `#fff` }}>
                  Pairing starts with the product, not a settings menu.
                </CommonTitle>
                <BodyPara style={{ color: `#8C8C8C` }}>
                  Hold power until Airzone flashes yellow. The app detects the
                  cue and takes over.
                </BodyPara>
                <RecordStatGridNow>
                  <div>
                    <Eyebrow style={{ color: `#C3FF00`, fontSize: `12px` }}>
                      01 / HOLD
                    </Eyebrow>
                    <Eyebrow style={{ color: `#FFFFFF`, fontSize: `12px` }}>
                      Hold power.
                    </Eyebrow>
                  </div>

                  <div>
                    <Eyebrow style={{ color: `#C3FF00`, fontSize: `12px` }}>
                      02 / SEE YELLOW
                    </Eyebrow>
                    <Eyebrow style={{ color: `#FFFFFF`, fontSize: `12px` }}>
                      Wait for yellow.
                    </Eyebrow>
                  </div>

                  <div>
                    <Eyebrow style={{ color: `#C3FF00`, fontSize: `12px` }}>
                      03 / CONNECT
                    </Eyebrow>
                    <Eyebrow style={{ color: `#FFFFFF`, fontSize: `12px` }}>
                      The app connects.
                    </Eyebrow>
                  </div>
                </RecordStatGridNow>
                <Tag
                  $bg="#C3FF00"
                  $color="#000"
                  //   style={{ border: "1px solid #ffffff" }}
                >
                  <TagTitle>ONE PHYSICAL CUE</TagTitle>
                  <TagText style={{ opacity: 0.75 }}>
                    One familiar action bridges hardware and software.
                  </TagText>
                </Tag>
              </ContentBox>
            </SplitGrid>
          </Section>
        </div>

        <div style={{ backgroundColor: `#fff` }}>
         <ImageFirstSplitGrid>
  <ContentBox>
    <Eyebrow style={{ color: `#0E0E0E` }}>
      ONE CONTROL LANGUAGE
    </Eyebrow>

    <CommonTitle style={{ color: `#0E0E0E` }}>
      The best interface was already in their hand.
    </CommonTitle>

    <CommonLabel style={{ color: `#8C8C8C` }}>
      We kept the remote’s familiar controls and states, while the
      backend handled the complexity.
    </CommonLabel>

    <BodyPara style={{ color: `#0E0E0E` }}>
      PHYSICAL REMOTE / MOBILE UI / SHARED MENTAL MODEL
    </BodyPara>
  </ContentBox>

  <ImageBox>
    <img src={karbane3} alt="Karban Airzone pairing flow" />
  </ImageBox>
</ImageFirstSplitGrid>
        </div>

        <div style={{ backgroundColor: `#C3FF00` }}>
          <RecordSection style={{ backgroundColor: `#C3FF00` }}>
            <Padded style={{ backgroundColor: `#C3FF00` }}>
              <Eyebrow style={{ color: `#0E0E0E` }}>WHAT HAPPENED</Eyebrow>
              <CommonTitle1 $maxWidth="680px" style={{ color: `#0E0E0E` }}>
                From the cloud to the button in your hand.
              </CommonTitle1>
              <CommonLabel style={{ color: `#0E0E0E` }}>
                App, backend, AWS IoT and MQTT shipped as one connected Airzone
                experience.
              </CommonLabel>
              <BodyPara $color="#1f1f1f" style={{ color: `#0E0E0E` }}>
                BACKEND INFRASTRUCTURE / AWS IOT / MQTT / MOBILE UX + UI
              </BodyPara>
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
                  Tanya Goyal
                </CommonSubtitle>
                <Eyebrow>Co-founder, Karban Envirotech</Eyebrow>
              </div>
              <QuoteText>
               “Avantari rebuilt Airzone around the way the product is actually used. The app, pairing flow, live device state and connected stack now feel like one experience rather than separate layers.”
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
            <NavLink to="/darwinbot">←  DARWINBOT</NavLink>
          </NavBlock>
          <NavBlock>
            <NavLabel>INDEX</NavLabel>
            <NavLink to="/work">ALL WORK</NavLink>
          </NavBlock>
          <NavBlock>
            <NavLabel>Next</NavLabel>
            <NavLink to="/neosapian">NEO 1  →</NavLink>
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

const canonicalUrl = "https://www.avantari.org/work/karban-airzone"

export const Head = () => (
  <>
    <Seo
      title="Karban Airzone Smart Air Purifier App | Avantari"
      description="How Avantari rebuilt Karban Airzone across mobile UX, backend, AWS IoT, and MQTT to reveal air quality, energy use, savings, and environmental impact."
      image={seoImg}
      url={canonicalUrl}
    />
    <meta name="robots" content="index, follow" />
    <meta
      name="keywords"
      content="smart air purifier app, IoT app development, AWS IoT, MQTT development, connected product UX, backend engineering"
    />
  </>
)

export default KarbanAirzone
