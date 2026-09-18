import React, { useState, useRef } from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import seoImg from "../images/seo.jpg"

import d1 from "../images/newWeb/d1.png"
import d2 from "../images/newWeb/d2.png"

import aiOne from "../images/newWeb/aiOneClean.png"
import aiTwo from "../images/newWeb/aiTwoClean.png"
import aiThree from "../images/newWeb/aiThreeClean.png"
import decsHolobotOG from "../images/og-images/aiOG.png"
import AiPlay from "../images/AiPlay.png"
import playButtonIcon from "../images/newWeb/ai/playButton.svg"
import decsConceptImage from "../images/newWeb/ai/decs.png"
import expressionVid1 from "../images/videos/vid1.mp4"
import expressionVid2 from "../images/videos/vid2.mp4"
import expressionVid3 from "../images/videos/vid3.mp4"
import expressionVid4 from "../images/videos/vid4.mp4"

/* ------------------------------------------------------------------ */
/* Shared primitives                                                    */
/* ------------------------------------------------------------------ */

const Section = styled.section`
  box-sizing: border-box;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  overflow: hidden;
  background-color: ${({ $bg }) => $bg || "transparent"};

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`

const Padded = styled.div`
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
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ $color }) => $color || "#547300"};
  margin: 0 0 20px 0;
`

const Title = styled.h2`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  color: ${({ $color }) => $color || "#000000"};
  margin: 0 0 18px 0;
  max-width: ${({ $maxWidth }) => $maxWidth || "460px"};

  @media only screen and (max-width: 1023px) {
    font-size: 32px;
    line-height: 40px;
  }
`

const Body = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${({ $color }) => $color || "#4d4d4d"};
  margin: 0;
  max-width: ${({ $maxWidth }) => $maxWidth || "460px"};

  @media only screen and (max-width: 1023px) {
    font-size: 14px;
    line-height: 22px;
  }
`

const SplitGrid = styled.div`
  display: grid;
  grid-template-columns: 40% auto;

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
  padding: 14px 20px;
  margin-top: 20px;
`

const TagText = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin: 0;
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

const HeroSubtitle = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.5;
  color: #000000;
  margin: 0 0 16px 0;
  max-width: 420px;
`

const HeroBody = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 22px;
  color: #4d4d4d;
  margin: 0;
  max-width: 400px;
`

const HeroImages = styled.div`
  min-height: 420px;
  background-color: #111111;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media only screen and (max-width: 1023px) {
    min-height: 300px;
  }
`

/* ------------------------------------------------------------------ */
/* Face + feature card                                                  */
/* ------------------------------------------------------------------ */

const IntroRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  padding: 60px 60px 40px;

  @media only screen and (min-width: 1440px) {
    padding: 70px 100px 40px;
  }

  @media only screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 45px 40px 30px;
  }

  @media only screen and (max-width: 768px) {
    padding: 35px 20px 24px;
  }
`

const IntroTitle = styled.h3`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 42px;
  color: #000000;
  margin: 0;
  @media only screen and (max-width: 768px) {
    font-size: 26px;
    line-height: 32px;
  }
`

const IntroBody = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #4d4d4d;
  margin: 0;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 22px;
  }
`

const FeatureRow = styled.div`
  padding: 28px 0;
  border-bottom: 2px solid #c3ff00;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    border-bottom: none;
  }
`

const FeatureTitle = styled.p`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0 0 16px 0;
  @media only screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`

const FeatureText = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #b8b8b8;
  margin: 0;

  /* Always reserve space for 3 lines */
  min-height: 72px;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 22px;

    /* 22px × 3 lines */
    min-height: 66px;
  }
`

// const FeatureText = styled.p`
//   font-family: "Poppins", sans-serif;
//   font-style: normal;
//   font-weight: 500;
//   font-size: 16px;
//   line-height: 24px;
//   color: #b8b8b8;
//   margin: 0;
//   @media only screen and (max-width: 768px) {
//     font-size: 14px;
//     line-height: 22px;
//   }
// `
const FilmCaption = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.04em;
  color: #4d4d4d;
  margin: 20px 0 0 0;
  max-width: 620px;
`

const FeatureCard = styled.div`
  background-color: #000000;
  padding: 30px 28px;
  @media only screen and (max-width: 567px) {
    padding: 30px 0;
  }
  @media only screen and (max-width: 1023px) {
    order: 1;
  }
`

const DeviceCollage = styled.div`
  display: grid;
  grid-template-columns: 420fr 262fr;
  grid-template-rows: 1fr 1fr;
  gap: 0 18px;
  height: 100%;

  @media only screen and (max-width: 567px) {
    grid-template-columns: 1fr;
    grid-template-rows: none;
    height: auto;
    gap: 12px;
  }
`

const DeviceCell = styled.div`
  position: relative;
  grid-row: ${({ $tall }) => ($tall ? "1 / 3" : "auto")};
  min-height: 160px;
  background-color: #d9d9d9;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media only screen and (max-width: 567px) {
    grid-row: auto;
    min-height: 220px;
  }
`

/* Live text on its own overlay bar, so the label stays crisp at any scale and
   is available to screen readers — the artwork carries no baked-in type. */
const DeviceLabel = styled.p`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 14px 16px;
  background-color: rgba(12, 12, 12, 0.94);
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #c3ff00;
`

/* Background flips from #f5f5f5 (desktop) to black (mobile) per design */
const NowWrap = styled.div`
  background-color: #f5f5f5;

  @media only screen and (max-width: 1023px) {
    background-color: #000000;
  }
`

const TechIntroRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 80px;
  padding: 90px 60px 0;

  @media only screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 45px 40px 0;
  }

  @media only screen and (max-width: 768px) {
    gap: 20px;
    padding: 35px 20px 0;
  }
`

const TechPanelsWrap = styled.div`
  padding: 88px 60px 80px;

  @media only screen and (max-width: 1023px) {
    padding: 24px 40px 45px;
  }

  @media only screen and (max-width: 768px) {
    padding: 20px 20px 35px;
  }
`

const TechSplitGrid = styled(SplitGrid)`
  gap: 32px;

  @media only screen and (max-width: 1023px) {
    gap: 20px;
  }
`

/* ------------------------------------------------------------------ */
/* Expression / video                                                   */
/* ------------------------------------------------------------------ */

const ExpressionSection = styled(Section)`
  background-color: #000000;
`

const VideoFrame = styled.div`
  position: relative;
  min-height: 460px;
  background-color: #111111;
  cursor: pointer;
  margin-top: 10px;

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
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }

  @media only screen and (min-width: 1024px) {
    width: 88px;
    height: 88px;
  }
`

const VideoTabsBar = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  height: 44px;
  background-color: rgba(0, 0, 0, 0.64);
  border: 1px solid rgba(255, 255, 255, 0.25);

  @media only screen and (min-width: 1024px) {
    left: 48px;
    right: 48px;
    bottom: 24px;
    height: 64px;
  }
`

const VideoTab = styled.button`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  background-color: ${({ $selected }) => ($selected ? "#c3ff00" : "transparent")};
  color: ${({ $selected }) => ($selected ? "#000000" : "#ffffff")};

  @media only screen and (min-width: 1024px) {
    font-size: 13px;
  }
`

const VideoCaptionRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 30px;
  margin-top: 16px;

  @media only screen and (max-width: 567px) {
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`

const VideoCaptionItem = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #999999;
  margin: 0;
`

const FootnoteRow = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #666666;
  margin: 20px 0 0 0;
`

/* ------------------------------------------------------------------ */
/* Patent                                                               */
/* ------------------------------------------------------------------ */

const PatentDivider = styled.div`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 24px 0;
`

const PatentNumber = styled.p`
  font-family: "Outfit", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 104px;
  line-height: 114px;
  color: #ffffff;
  margin: 0 0 12px 0;

  @media only screen and (max-width: 1023px) {
    font-family: "Corben", serif;
    font-size: 48px;
    line-height: 56px;
  }
`

const PatentMeta = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  color: #999999;
  margin: 0 0 6px 0;

  @media only screen and (max-width: 1023px) {
    font-size: 14px;
    line-height: 22px;
  }

  span {
    color: #cccccc;
    text-transform: none;
  }
`

/* ------------------------------------------------------------------ */
/* Origin cards (DECS / Holobot)                                        */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/* Case links (Darwinbot / NARI)                                        */
/* ------------------------------------------------------------------ */

const CaseGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 0 60px 70px;

  @media only screen and (min-width: 1440px) {
    padding: 0 100px 80px;
  }

  @media only screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
    padding: 0 40px 45px;
  }

  @media only screen and (max-width: 768px) {
    padding: 0 20px 35px;
  }
`

const CaseCard = styled.div`
  position: relative;
  background-color: #000000;
  min-height: 560px;
  overflow: hidden;

  @media only screen and (max-width: 1023px) {
    min-height: 520px;
  }
`

const CaseImage = styled.div`
  position: absolute;
  inset: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`

const CaseBody = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
`

const CaseTag = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #c3ff00;
  margin: 0;
`

const CaseTitle = styled.p`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  color: #ffffff;
  margin: 0;

  @media only screen and (max-width: 1023px) {
    font-size: 28px;
    line-height: 36px;
  }
`

const CaseText = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #bfbfbf;
  margin: 0;

  @media only screen and (max-width: 1023px) {
    font-size: 14px;
    line-height: 22px;
  }
`

const CaseLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 48px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #000000;
  background-color: #c3ff00;
  text-decoration: none;
  transition: 0.2s ease;

  &:hover {
    background-color: #d8ff4d;
  }
`

/* ------------------------------------------------------------------ */
/* How it works                                                         */
/* ------------------------------------------------------------------ */

const HowSection = styled(Section)`
  background-color: #000000;
`

/* 400 : 720 copy-to-process split with an 80px gutter, per the Figma frame. */
const HowGrid = styled.div`
  display: grid;
  grid-template-columns: 400fr 720fr;
  gap: 80px;

  @media only screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`

const StepList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const StepRow = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 248fr 368fr;
  gap: 48px;
  padding: 23px 23px 44px;
  background-color: ${({ $highlight }) => ($highlight ? "#c3ff00" : "#131313")};
  border: 1px solid ${({ $highlight }) => ($highlight ? "#c3ff00" : "#424242")};

  /* Step marker — the lime rule that ties each stage into the sequence. */
  &::after {
    content: "";
    position: absolute;
    left: 23px;
    right: 23px;
    bottom: 21px;
    height: 1px;
    background-color: ${({ $highlight }) =>
      $highlight ? "#0c0c0c" : "#c3ff00"};
  }

  @media only screen and (max-width: 567px) {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 20px 19px 40px;

    &::after {
      left: 19px;
      right: 19px;
      bottom: 19px;
    }
  }
`

const StepLabel = styled.p`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  text-transform: uppercase;
  color: ${({ $highlight }) => ($highlight ? "#000000" : "#ffffff")};
  margin: 0;

  @media only screen and (max-width: 1023px) {
    font-size: 18px;
    line-height: 24px;
  }
`

const StepText = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${({ $highlight }) => ($highlight ? "#0c0c0c" : "#b8b8b8")};
  margin: 0;

  @media only screen and (max-width: 1023px) {
    font-size: 14px;
    line-height: 22px;
  }
`

const steps = [
  {
    label: "01  /  Frame the prompt",
    text: "Define what the presence should know, say and help someone do.",
  },
  {
    label: "02  /  Build the guardrails",
    text: "Ground it in approved sources, set boundaries, escalation paths and human oversight before it meets a user.",
  },
  {
    label: "03  /  Capture you",
    text: "Film you, then train consented voice and face models so the identity can speak naturally.",
  },
  {
    label: "04  /  Test it hard",
    text: "Stress-test answers, expression, latency, languages, edge cases and failure handling.",
  },
  {
    label: "05  /  Deploy where it fits",
    text: "Web / App / Kiosk / Life-size / Holobot",
    highlight: true,
  },
]

/* ------------------------------------------------------------------ */
/* Permission split                                                     */
/* ------------------------------------------------------------------ */

const FitList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`

const FitListItem = styled.li`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  color: #ffffff;

  @media only screen and (max-width: 1023px) {
    font-size: 22px;
    line-height: 28px;
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

const CTAButton = styled(Link)`
  display: inline-block;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.04em;
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
const HeroBodyPara = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
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

const FilmSection = styled(Section)`
  background-color: #ffffff;
`

/* ------------------------------------------------------------------ */
/* Footer                                                               */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/* Assets — some real (holobot photos), some placeholders               */
/* ------------------------------------------------------------------ */

const ASSET_BASE = "https://darkslategray-salmon-190399.hostingersite.com"

const assets = {
  heroImage: `${ASSET_BASE}/ai-tech.png`,
  decsChat: `${ASSET_BASE}/aiTechDecsChat.png`,
  darwinbotThumb: `${ASSET_BASE}/aiTechDarwinbotThumb.png`,
  nariThumb: `${ASSET_BASE}/aiTechNariThumb.png`,
}

// Four response-aware expression states — each tab maps to its own video asset.
// vid1/vid2 are deliberately crossed: QA found the Reassure and Explain takes
// were cut into the opposite files.
const EXPRESSION_TABS = [
  { key: "reassure", label: "Reassure", video: expressionVid2 },
  { key: "explain", label: "Explain", video: expressionVid1 },
  { key: "warn", label: "Warn", video: expressionVid3 },
  { key: "celebrate", label: "Celebrate", video: expressionVid4 },
]

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

const DecsHolobot = () => {
  const [playing, setPlaying] = useState(false)
  const [started, setStarted] = useState(false)
  const videoRef = useRef(null)

  const [selectedExpressionTab, setSelectedExpressionTab] = useState(
    EXPRESSION_TABS[0].key
  )

  const activeExpression = EXPRESSION_TABS.find(
    tab => tab.key === selectedExpressionTab
  )

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      setStarted(true)
      video.play()
    } else {
      video.pause()
    }
  }

  const handleExpressionTabClick = key => {
    setSelectedExpressionTab(key)
    setPlaying(false)
    setStarted(false)
  }

  return (
    <Layout footerVariant="dark">
      <div style={{ marginTop: `50px` }}>
        <div style={{ backgroundColor: `#eeeeee` }}>
          <HeroSection>
            <HeroGrid>
              <HeroContent>
                <Eyebrow $color="#547300">DIGITAL PRESENCE</Eyebrow>
                <HeroTitle>AI that shows up.</HeroTitle>
                <CommonSubtitle>
                  Digital people that answer clearly, respond naturally and help
                  someone move forward.
                </CommonSubtitle>
                <HeroBodyPara>
                  Built from your approved knowledge and deployed wherever the
                  conversation needs to happen.
                </HeroBodyPara>
              </HeroContent>
              <HeroImages>
                <img src={assets.heroImage} />
              </HeroImages>
            </HeroGrid>
          </HeroSection>
        </div>

        <NowWrap>
          <Section>
            <TechIntroRow>
              <IntroTitle>
                A face you recognise. A conversation that keeps up.
              </IntroTitle>
              <IntroBody>
                DECS turns a real person's likeness and approved knowledge into
                a deployable AI presence—natural in conversation, multilingual
                and ready to work across interfaces.
              </IntroBody>
            </TechIntroRow>

            <TechPanelsWrap>
              <TechSplitGrid>
                <FeatureCard>
                  <FeatureRow>
                    <FeatureTitle>Face + Voice, Recreated</FeatureTitle>
                    <FeatureText>
                      A consented face and voice are captured and rebuilt, so
                      the presence looks and sounds like the person—not a
                      generic avatar.
                    </FeatureText>
                  </FeatureRow>
                  <FeatureRow>
                    <FeatureTitle>Ultra-low Latency</FeatureTitle>
                    <FeatureText>
                      Answers arrive quickly enough for natural turn-taking,
                      without the pauses that make a conversation feel
                      mechanical.
                    </FeatureText>
                  </FeatureRow>
                  <FeatureRow>
                    <FeatureTitle>Multilingual</FeatureTitle>
                    <FeatureText>
                      One presence can listen and respond across languages,
                      extending the same knowledge to more people.
                    </FeatureText>
                  </FeatureRow>
                </FeatureCard>

                <DeviceCollage>
                  <DeviceCell $tall>
                    <img
                      src={aiOne}
                      alt="A miniature holobot kiosk on an Etihad reception desk"
                    />
                    <DeviceLabel>Miniature holobot</DeviceLabel>
                  </DeviceCell>
                  <DeviceCell>
                    <img
                      src={aiTwo}
                      alt="A digital presence answering on a video call interface"
                    />
                    <DeviceLabel>Digital presence</DeviceLabel>
                  </DeviceCell>
                  <DeviceCell>
                    <img
                      src={aiThree}
                      alt="A life-size holobot standing in a corridor"
                    />
                    <DeviceLabel>Life-size holobot</DeviceLabel>
                  </DeviceCell>
                </DeviceCollage>
              </TechSplitGrid>
            </TechPanelsWrap>
          </Section>
        </NowWrap>

        <div style={{ backgroundColor: `#000` }}>
          <FilmSection style={{ backgroundColor: `#000` }}>
            <Padded>
              <Eyebrow style={{ color: `#C3FF00` }}>
                THEN WE PUSHED IT FURTHER / RESPONSE-AWARE EXPRESSION
              </Eyebrow>
              <IntroRow>
                <IntroTitle style={{ color: `#fff` }}>
                  A looped talking head performs every answer the same way. DECS
                  doesn’t.
                </IntroTitle>
                <IntroBody style={{ color: `#C7C7C7` }}>
                  Recreating a person is only the start. Each answer shapes the
                  voice, expression, gaze and timing—so reassurance feels calm,
                  warnings land clearly and good news feels like good news.
                </IntroBody>
              </IntroRow>
              <VideoFrame onClick={togglePlay}>
                {!started && (
                  <img
                    src={AiPlay}
                    alt={`DECS answering in a ${activeExpression.label.toLowerCase()} register`}
                  />
                )}
                <video
                  key={selectedExpressionTab}
                  preload="auto"
                  playsInline
                  ref={videoRef}
                  style={{ display: started ? "block" : "none" }}
                  disablePictureInPicture
                  onPlay={() => setPlaying(true)}
                  onPause={() => setPlaying(false)}
                  onEnded={() => {
                    setPlaying(false)
                    setStarted(false)
                  }}
                >
                  <source src={activeExpression.video} type="video/mp4" />
                </video>
                {!playing && (
                  <PlayButton
                    type="button"
                    aria-label={`Play the ${activeExpression.label} response`}
                    onClick={e => {
                      e.stopPropagation()
                      togglePlay()
                    }}
                  >
                    <img src={playButtonIcon} alt="" />
                  </PlayButton>
                )}
                <VideoTabsBar onClick={e => e.stopPropagation()}>
                  {EXPRESSION_TABS.map(tab => (
                    <VideoTab
                      key={tab.key}
                      type="button"
                      $selected={tab.key === selectedExpressionTab}
                      onClick={() => handleExpressionTabClick(tab.key)}
                    >
                      {tab.label}
                    </VideoTab>
                  ))}
                </VideoTabsBar>
              </VideoFrame>
              <FilmCaption style={{ color: `#8C8C8C` }}>
                MEANING-AWARE VOICE + FACE + TIMING / 1080P / MULTILINGUAL /
                API-CONNECTED
              </FilmCaption>
            </Padded>
          </FilmSection>
        </div>

        <div
          style={{
            background: "linear-gradient(to right, #c3ff00 50%, #000000 50%)",
          }}
        >
          <Section>
            <SplitGrid>
              <ContentBox $bg="#c3ff00">
                <Eyebrow $color="#1f1f1f">Independent R&D / Patented</Eyebrow>
                <Title $maxWidth="380px">Original work. Patented.</Title>
                <Body $color="#1f1f1f">
                  Indian Patent No. 579493 covers Avantari's method for producing
                  an audio-video response to an input—the foundational system
                  behind DECS.
                </Body>
              </ContentBox>
              <ContentBox $bg="#000000">
                <Eyebrow $color="#547300">Indian patent / Granted</Eyebrow>
                <PatentNumber>579493</PatentNumber>
                <Body $color="#c7c7c7" $maxWidth="380px">
                  System and method for producing audio-video response to an
                  input.
                </Body>
                <Tag $bg="#c3ff00" $color="#000000">
                  <TagText>Granted / 30 January 2026</TagText>
                </Tag>
                <PatentDivider />
                <PatentMeta>
                  Patentee / <span>Avantari Technologies Private Limited</span>
                </PatentMeta>
                <PatentMeta>
                  Application / <span>202143033907</span>
                </PatentMeta>
                <PatentMeta>
                  Filed / <span>23 July 2021</span>
                </PatentMeta>
              </ContentBox>
            </SplitGrid>
          </Section>
        </div>

        <div style={{ backgroundColor: `#ffffff` }}>
          <Section $bg="#ffffff">
            <IntroRow>
              <div>
                <Eyebrow style={{ color: `#4D4D4D` }}>
                  PROVEN IN THE WORLD
                </Eyebrow>
                <IntroTitle>One system. Two very different jobs.</IntroTitle>
              </div>
            </IntroRow>
            <CaseGrid>
              <CaseCard>
                <CaseImage>
                  <img src={d1} alt="Darwinbot product demo" />
                </CaseImage>
                <CaseBody style={{padding:`20px`}}>
                  <CaseTag>Darwinbot / Product guidance</CaseTag>
                  <CaseTitle>Ask Darwin. Watch the work happen.</CaseTitle>
                  <CaseText>
                    Visitors asked in their own words. Darwin opened the live
                    Darwinbox product and walked them through the right
                    workflow.
                  </CaseText>
                  <CaseLink to="/darwinbot">View Darwinbot →</CaseLink>
                </CaseBody>
              </CaseCard>
              <CaseCard>
                <CaseImage>
                  <img src={d2} alt="NARI holographic lecture" />
                </CaseImage>
                <CaseBody style={{padding:`20px`}}>
                  <CaseTag>NARI / Expert access</CaseTag>
                  <CaseTitle>One surgeon. Many languages.</CaseTitle>
                  <CaseText>
                    NARI let people ask breast-health questions in their own
                    language, extending Dr. Raghu Ram's guidance far beyond
                    the room.
                  </CaseText>
                  <CaseLink to="/nari">View NARI →</CaseLink>
                </CaseBody>
              </CaseCard>
            </CaseGrid>
          </Section>
        </div>

        <div style={{ backgroundColor: `#000` }}>
          <HowSection>
            <Padded>
              <HowGrid>
                <div>
                  <Eyebrow $color="#c3ff00">How it works</Eyebrow>
                  <Title $color="#ffffff" $maxWidth="400px">
                    From your knowledge to a presence people can use.
                  </Title>
                  <Body $color="#b8b8b8" $maxWidth="400px">
                    We define the knowledge, boundaries and behaviour first—then
                    train, test and deploy the experience in the form the job
                    needs.
                  </Body>
                </div>
                <StepList>
                  {steps.map(step => (
                    <StepRow key={step.label} $highlight={step.highlight}>
                      <StepLabel $highlight={step.highlight}>
                        {step.label}
                      </StepLabel>
                      <StepText $highlight={step.highlight}>
                        {step.text}
                      </StepText>
                    </StepRow>
                  ))}
                </StepList>
              </HowGrid>
            </Padded>
          </HowSection>
        </div>

        <div
          style={{
            background: "linear-gradient(to right, #c3ff00 50%, #000000 50%)",
          }}
        >
          <Section>
            <SplitGrid>
              <ContentBox $bg="#c3ff00">
                <Eyebrow $color="#1f1f1f">Built with permission</Eyebrow>
                <Title $maxWidth="380px">
                  A person's likeness is not raw material.
                </Title>
                <Body $color="#1f1f1f">
                  People should know who they are speaking to, what the system
                  knows and where its limits are. DECS uses consented
                  identities, approved knowledge and human oversight.
                </Body>
              </ContentBox>
              <ContentBox $bg="#000000">
                <Eyebrow $color="#547300">Where it fits</Eyebrow>
                <FitList>
                  <FitListItem>Expert guidance</FitListItem>
                  <FitListItem>Product concierge</FitListItem>
                  <FitListItem>Training</FitListItem>
                  <FitListItem>Launches &amp; events</FitListItem>
                </FitList>
              </ContentBox>
            </SplitGrid>
          </Section>
        </div>

        <div style={{ backgroundColor: `#000000` }}>
          <CTASection>
            <CTAWrap>
              <Eyebrow style={{ color: `#C3FF00` }}>Build with DECS</Eyebrow>
              <CommonTitle1 style={{ color: `#fff` }}>
                What should people be able to do after one conversation?
              </CommonTitle1>
              <CTAButton to="/contact">Talk to us →</CTAButton>
            </CTAWrap>
          </CTASection>
        </div>
      </div>
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

const canonicalUrl = "https://www.avantari.org/work/decs-holobot"

export const Head = () => (
  <>
      <Seo
        title="DECS & HoloBot On-Device Conversational Systems | Avantari"
        description="A look at Avantari’s holographic and digital-human work — proof that hardware, software, and on-device intelligence can ship as one system."
        url={canonicalUrl}
        image={decsHolobotOG}
      />
      <meta name="robots" content="index, follow" />
      <meta
      name="keywords"
      content=" holographic product development; digital human hardware; on-device conversational system — not “conversational AI platform”"
    />
    </>
)

export default DecsHolobot
