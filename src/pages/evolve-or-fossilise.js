import React, { useState, useRef } from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import seoImg from "../images/og-images/evOG.png"
import evVid from "../images/newWeb/evVid.mp4"

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
  background-color: #000;
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
/* Showcase — header + full-width image with overlaid callouts         */
/* ------------------------------------------------------------------ */

const ShowcaseHeader = styled.div`
  padding: 70px 60px 40px;

  @media only screen and (min-width: 1440px) {
    padding: 80px 100px 40px;
  }

  @media only screen and (max-width: 1023px) {
    padding: 45px 40px 30px;
  }

  @media only screen and (max-width: 768px) {
    padding: 35px 20px 24px;
  }
`

const ShowcaseFrame = styled.div`
  position: relative;
  margin: 0 60px;

  @media only screen and (min-width: 1440px) {
    margin: 0 100px;
  }

  @media only screen and (max-width: 1023px) {
    margin: 0 40px;
  }

  @media only screen and (max-width: 768px) {
    margin: 0 20px;
  }
`

const ShowcaseImg = styled.img`
  width: 100%;
  display: block;
  background-color: #d9d9d9;
  height: 350px;
  /* Without this the browser default (fill) stretches the source; cover keeps
     the source ratio and crops intentionally instead. */
  object-fit: cover;
  object-position: center;
  @media only screen and (max-width: 1023px) {
    height: 500px;
  }
`

const ShowcaseCallouts = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  right: 30px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;

  @media only screen and (max-width: 1023px) {
    flex-direction: column;
    top: 20px;
    left: 20px;
    right: 20px;
    justify-content: flex-start;
    gap: 16px;
  }
`

const Callout = styled.div`
  flex: 1;
  background-color: rgba(15, 23, 32, 0.94);
  padding: 20px 22px;
  height: 150px;

  @media only screen and (max-width: 1023px) {
    flex: none;
    width: 100%;
    height: auto;
    min-height: 130px;
  }
`

const CalloutLabel = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #c3ff00;
  margin: 0 0 10px 0;
`

const CalloutText = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  color: #ffffff;
  margin: 0;
`

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
  row-gap: 24px;
  margin: 40px 0 0 0;

  @media only screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`

const StepLabel = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #c3ff00;
  margin: 0 0 8px 0;
`

const StepValue = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  margin: 0;
`

const MilestoneRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 40px;
  flex-wrap: wrap;
  margin-top: 28px;

  @media only screen and (max-width: 567px) {
    flex-direction: column;
    gap: 10px;
  }
`

const MilestoneItem = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: #1f1f1f;
  margin: 0;
`

const milestones = [
  { year: "2025", label: "Evolve or Fossilise" },
  { year: "2026", label: "Cortex — Signals" },
]

const steps = [
  { label: "01 / Design", value: "World + sprites." },
  { label: "02 / Build", value: "Gameplay + scoring." },
  { label: "03 / Launch", value: "Arcade + leaderboard." },
]

const showcaseCallouts = [
  {
    label: "Environment Design",
    text: "Layered parallax, clean pathing and high-contrast collectibles kept the world readable at speed.",
  },
  {
    label: "Scoring",
    text: "Coins, clean jumps and survival built score and reflex bonuses — turning every run into a leaderboard chase.",
  },
  {
    label: "New Obstacles",
    text: "Fossils and rocks forced new jump timings and reflex decisions without cluttering the path.",
  },
]

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
  { label: "Client", value: "Darwinbox" },
  { label: "Year", value: "2025 → 2026" },
  { label: "Discipline", value: "Software" },
  { label: "Stack", value: "Web game + event" },
  { label: "Services", value: "Game design, build, launch" },
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
    label: "Knowledge",
    text: "Dr. Raghu Ram's breast-health expertise became the knowledge layer behind NARI.",
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

const RecordStatLabel = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #000000;
  margin: 0 0 10px 0;
`

const RecordStatText = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #1f1f1f;
  margin: 0;
`

const recordStats = [
  {
    label: "391 Qualifying",
    text: "Official qualifying audience for the record attempt.",
  },
  {
    label: "30 + 30 Min",
    text: "A 30-minute holographic lecture followed by a 30-minute interactive Q&A.",
  },
  {
    label: "Guinness World Record",
    text: "Largest audience for an interactive AI-enabled holographic health awareness lecture.",
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

/* ------------------------------------------------------------------ */
/* Assets — placeholders, swap for the real NARI photos/video           */
/* ------------------------------------------------------------------ */

const ASSET_BASE = "https://darkslategray-salmon-190399.hostingersite.com"

const assets = {
  heroImage: `${ASSET_BASE}/evolveHero.png`,
  heroImage2: `${ASSET_BASE}/eventPhoto.png`,
  platform: `${ASSET_BASE}/nariPlatform.png`,
  evolveStage: `https://darkslategray-salmon-190399.hostingersite.com/evolveStage.png`,
  gameSystemShowcase: `https://darkslategray-salmon-190399.hostingersite.com/gameSystemShowcase.png`,
  showFloor: `https://darkslategray-salmon-190399.hostingersite.com/evolveShowFloor.jpg`,
  transitionLeft: `${ASSET_BASE}/nari-kims.png`,
  transitionRight: `${ASSET_BASE}/nari-hologram-2.png`,
  filmThumb: `${ASSET_BASE}/evolveVid.png`,
  gallery1: `${ASSET_BASE}/nari-gallery-1.png`,
  gallery2: `${ASSET_BASE}/nari-gallery-2.png`,
  gallery3: `${ASSET_BASE}/nari-gallery-3.png`,
}

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

const EvolveOrFossilise = () => {
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
              <Eyebrow style={{ color: `#547300` }}>
                SOFTWARE / DARWINBOX
              </Eyebrow>
              <HeroTitle>Evolve or Fossilise</HeroTitle>
              <CommonSubtitle>A game designed to evolve.</CommonSubtitle>
              <HeroBodyPara>
                We built Darwinbox a retro infinite runner in one month. A year
                later, Cortex changed the story — so we rebuilt the mechanic
                around signals in seven days.
              </HeroBodyPara>
            </HeroContent>
            <HeroImages>
              <img src={assets.heroImage} alt="Dr. Raghu Ram" />
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
                Make evolution playable.
              </CommonTitle>
              <BodyPara style={{ color: `#1f1f1f` }}>
                Darwinbox wanted an event game people could understand in
                seconds — playful, competitive and unmistakably on-brand.
              </BodyPara>
            </ContentBox>
            <ContentBox $bg="#000000">
              <Eyebrow style={{ color: `#c3ff00` }}>The constraint</Eyebrow>
              <CommonTitle style={{ color: `#fff` }} $maxWidth="420px">
                Playable in the time it takes to walk past.
              </CommonTitle>
              <BodyPara style={{ color: `#8C8C8C` }}>
                On a noisy show floor, the mechanic had to explain itself
                instantly and reward another run.
              </BodyPara>
            </ContentBox>
          </SplitGrid>
        </Section>

        <div style={{ backgroundColor: `#000` }}>
          <FilmSection>
            <Padded>
              <Eyebrow style={{ color: `#c3ff00` }}>FILM / GAMEPLAY</Eyebrow>
              <VideoFrame onClick={handlePlay}>
                {!playing && (
                  <img
                    src={assets.filmThumb}
                    alt="Evolve or Fossilise gameplay"
                  />
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
                  <source src={evVid} type="video/mp4" />
                </video>
                {!playing && <PlayButton aria-label="Play film" />}
              </VideoFrame>
              <FilmCaption style={{ color: `#8C8C8C` }}>
                Add a 20–30 second gameplay loop showing the evolution mechanic,
                coins, fossils, score and game-over state.
              </FilmCaption>
            </Padded>
          </FilmSection>
        </div>

        <Section>
          <SplitGrid>
            <ContentBox>
              <Eyebrow style={{ color: `#c3ff00` }}>THE MECHANIC</Eyebrow>
              <CommonTitle>Evolution became the reward.</CommonTitle>
              <BodyPara>
                Players start as a lizard and evolve through ostrich, monkey and
                human as they collect coins, clear fossils and stay alive.{" "}
              </BodyPara>
              <Tag
                $bg="#C3FF00"
                $color="#000"
                //   style={{ border: "1px solid #ffffff" }}
              >
                <TagTitle>REPTILE → BIRD → APE → HUMAN</TagTitle>
                <TagText style={{ opacity: 0.75 }}>
                  Progress was visible in the character — not buried in a score
                  screen.
                </TagText>
              </Tag>
            </ContentBox>
            <ImageBox>
              <img src={assets.evolveStage} alt="Holographic stage" />
            </ImageBox>
          </SplitGrid>
        </Section>

        <div style={{ backgroundColor: `#ffffff` }}>
          <Section>
            <ShowcaseHeader>
              <Eyebrow>Art direction &amp; game system</Eyebrow>
              <CommonTitle1 $maxWidth="1080px">
                Built like a game, not a branded microsite.
              </CommonTitle1>
              <BodyPara $maxWidth="620px">
                A 16-bit infinite runner where layered desert parallax, fossils
                and rocks, coin-driven scoring and survival worked together in a
                reflex-first loop.
              </BodyPara>
            </ShowcaseHeader>
            <ShowcaseFrame>
              <ShowcaseImg
                src={assets.evolveStage}
                alt="Evolve or Fossilise gameplay screenshot"
              />
              <ShowcaseCallouts>
                {showcaseCallouts.map(callout => (
                  <Callout key={callout.label}>
                    <CalloutLabel>{callout.label}</CalloutLabel>
                    <CalloutText>{callout.text}</CalloutText>
                  </Callout>
                ))}
              </ShowcaseCallouts>
            </ShowcaseFrame>
          </Section>
        </div>

        <div style={{ backgroundColor: `#000` }}>
          <Section>
            <SplitGrid>
              <ImageBox>
                <img
                  src={assets.showFloor}
                  alt="Arcade cabinet at the show floor"
                />
              </ImageBox>
              <ContentBox>
                <Eyebrow style={{ color: `#c3ff00` }}>
                  From screen to show floor
                </Eyebrow>
                <CommonTitle1 style={{ color: `#fff` }} $maxWidth="570px">
                  We built the whole thing in a month.
                </CommonTitle1>
                <BodyPara
                  style={{
                    color: `#8C8C8C`,
                    fontSize: `18px`,
                    lineHeight: `28px`,
                  }}
                  $maxWidth="540px"
                >
                  Game design, pixel art, character animation, score,
                  leaderboard and the physical arcade interaction came together
                  for launch.
                </BodyPara>
                <StepsGrid>
                  {steps.map(step => (
                    <div key={step.label}>
                      <StepLabel>{step.label}</StepLabel>
                      <StepValue>{step.value}</StepValue>
                    </div>
                  ))}
                </StepsGrid>
                <Tag $bg="#c3ff00" $color="#000000">
                  <TagTitle
                    style={{
                      fontFamily: `"Corben", serif`,
                      fontSize: "20px",
                      fontWeight: 400,
                      textTransform: "none",
                    }}
                  >
                    1 Month
                  </TagTitle>
                  <TagText style={{ opacity: 1 }}>
                    From concept to a live event activation.
                  </TagText>
                </Tag>
              </ContentBox>
            </SplitGrid>
          </Section>
        </div>

        <div style={{ backgroundColor: `#ffffff` }}>
          <Section $bg="#ffffff">
            <SplitGrid>
              <ContentBox>
                <Eyebrow style={{ color: `#0E0E0E` }}>
                  CHANGE CONTROL / CORTEX
                </Eyebrow>
                <CommonTitle1 style={{ color: `#0E0E0E` }} $maxWidth="560px">
                  Then Cortex changed the game.
                </CommonTitle1>
                <BodyPara
                  style={{
                    color: `#8C8C8C`,
                    fontSize: `18px`,
                    lineHeight: `28px`,
                  }}
                  $maxWidth="540px"
                >
                  For Darwinbox’s Cortex launch, coins became signals and the
                  obstacle language shifted around the new AI story. The core
                  game stayed familiar; the meaning changed.
                </BodyPara>
                <BodyPara
                  style={{ color: `#0E0E0E`, paddingTop: `20px` }}
                  $maxWidth="540px"
                >
                  7-DAY TURNAROUND / Evolve or Fossilize
                </BodyPara>
              </ContentBox>
              <ImageBox>
                <img
                  src={assets.heroImage2}
                  alt="Darwinbox Cortex event photo"
                />
              </ImageBox>
            </SplitGrid>
          </Section>
        </div>
        <div style={{ backgroundColor: `#c3ff00` }}>
          <Section $bg="#c3ff00">
            <Padded style={{ backgroundColor: `transparent` }}>
              <Eyebrow>What happened</Eyebrow>
              <CommonTitle1>
                Built for a conference, rebuilt as a product.
              </CommonTitle1>
              <BodyPara style={{ color: `#1f1f1f` }} $maxWidth="620px">
                The original shipped in one month. The Cortex version followed
                in seven days — turning a one-off activation into a reusable
                Darwinbox brand asset.
              </BodyPara>
              <MilestoneRow>
                {milestones.map(milestone => (
                  <MilestoneItem key={milestone.year}>
                    {milestone.year} / {milestone.label}
                  </MilestoneItem>
                ))}
              </MilestoneRow>
            </Padded>
          </Section>
        </div>

        <QuoteSection style={{ backgroundColor: `transparent` }}>
          <Padded style={{ backgroundColor: `transparent` }}>
            <QuoteGrid>
              <div>
                <Eyebrow $color="#4d4d4d">CLIENT WORDS</Eyebrow>
                <QuoteDivider />
                <CommonSubtitle style={{ paddingBottom: `16px` }}>
                  Unmesh Lamture
                </CommonSubtitle>
                <Eyebrow>Head of Brand & Content · Darwinbox</Eyebrow>
              </div>
              <QuoteText>
                “Avantari turned a simple event idea into something people
                genuinely wanted to play. They built Evolve or Fossilise at
                remarkable speed, then reinvented it around Cortex in just seven
                days without losing the magic. Fast, thoughtful and completely
                dependable.”
              </QuoteText>
            </QuoteGrid>
          </Padded>
        </QuoteSection>

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
            <NavLink to="/nari">← NARI</NavLink>
          </NavBlock>
          <NavBlock>
            <NavLabel>INDEX</NavLabel>
            <NavLink to="/work">ALL WORK</NavLink>
          </NavBlock>
          <NavBlock $right>
            <NavLabel>NEXT</NavLabel>
            <NavLink to="/hippos">HIPPOS →</NavLink>
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

const canonicalUrl = "https://www.avantari.org/work/evolve-or-fossilise"

export const Head = () => (
  <>
    <Seo
      title="Evolve or Fossilise: Interactive Launch Game | Avantari"
      description="How Avantari built a Darwin-themed multiplayer game for Darwinbox, combining physical interaction, software and live event deployment."
      image={seoImg}
      url={canonicalUrl}
    />
    <meta name="robots" content="index, follow" />
    <meta
      name="keywords"
      content="interactive launch experience, multiplayer event game, experiential technology, game development, Darwinbox product launch"
    />
  </>
)

export default EvolveOrFossilise
