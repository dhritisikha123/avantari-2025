import React, { useState, useRef } from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import seoImg from "../images/og-images/itcOG.png"

import itcLanding from "../images/newWeb/itc/itcLanding.png"
import itcLanding3 from "../images/newWeb/itc/itcLanding3.png"
import itcLanding4 from "../images/newWeb/itc/itcLanding4.png"
import itcPlay1 from "../images/newWeb/itc/itcPlay1.png"
import itcPlay2 from "../images/itc2.png"
import itcvid1 from "../images/newWeb/itc/itcvid1.mp4"

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

/* Full-width, natural-aspect-ratio image — no fixed/min height, so there's
   never empty letterboxed space below it (unlike ImageBox, which is sized
   for cropped object-fit:cover photos). */
const GalleryCollageImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  background-color: #eeeeee;
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
  { label: "Client", value: "ITC" },
  { label: "Year", value: "2024" },
  { label: "Discipline", value: "Software" },
  { label: "Build time", value: "1 month" },
  { label: "Services", value: "AR, 3D, iOS, iPadOS" },
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
    label: "ONE MONTH",
    text: "The entire application, start to delivery.",
  },
  {
    label: "iOS + iPADOS",
    text: "Shipped on both, from one build.",
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
const ReverseSplitGrid = styled(SplitGrid)`
  @media only screen and (max-width: 1023px) {
    ${ImageBox} {
      order: 2;
    }

    ${ContentBox} {
      order: 1;
    }
  }
`
/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

const ItcmastARchef = () => {
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
              <Eyebrow style={{ color: `#547300` }}>SOFTWARE / ITC</Eyebrow>
              <HeroTitle>ITC MastAR Chef</HeroTitle>
              <CommonSubtitle>
                A tiny chef who cooks on your counter.
              </CommonSubtitle>
              <HeroBodyPara>
                An augmented reality mini chef that guides you through ITC
                recipes in your own kitchen, with 3D food appearing on your own
                plates.
              </HeroBodyPara>
            </HeroContent>
            <HeroImages>
              <img
                src={itcLanding}
                alt="Miniature ITC MastAR Chef standing between two plates"
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
                Put a chef inside the home kitchen.
              </CommonTitle>
              <BodyPara style={{ color: `#1f1f1f` }}>
                ITC wanted its culinary expertise working beside people as they
                cooked, rather than sitting on a recipe page. The experience
                needed to teach by showing.
              </BodyPara>
            </ContentBox>
            <ContentBox $bg="#0e0e0e">
              <Eyebrow style={{ color: `#c3ff00` }}>The constraint</Eyebrow>
              <CommonTitle style={{ color: `#fff` }} $maxWidth="420px">
                If the food looked rendered, the illusion was gone.
              </CommonTitle>
              <BodyPara style={{ color: `#8C8C8C` }}>
                The miniature chef could be playful, but every ingredient, plate
                and finished dish still had to look edible and believable on a
                real kitchen counter.
              </BodyPara>
            </ContentBox>
          </SplitGrid>
        </Section>

        <div style={{ backgroundColor: `#000` }}>
          <FilmSection>
            <Padded>
              <Eyebrow style={{ color: `#c3ff00` }}>Film / MastAR Chef</Eyebrow>
              <VideoFrame onClick={handlePlay1}>
                {!playing1 && (
                  <img src={itcPlay1} alt="MastAR Chef launch film" />
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
                  <source src={itcvid1} type="video/mp4" />
                </video>
                {!playing1 && <PlayButton aria-label="Play film" />}
              </VideoFrame>
              <FilmCaption style={{ color: `#8C8C8C` }}>
                The chef, on a kitchen counter.
              </FilmCaption>
            </Padded>
          </FilmSection>
        </div>

        <div style={{ backgroundColor: `#fff` }}>
          <Section>
            <SplitGrid>
              <ContentBox>
                <Eyebrow>THE FOOD</Eyebrow>
                <CommonTitle>Photographed, then mapped.</CommonTitle>
                <BodyPara>
                  Charred mushroom edges, the colour of microgreens — every dish
                  was shot in detail and mapped onto 3D models, so what appears
                  on your plate reads as food rather than as rendering.
                </BodyPara>
                <Tag style={{ backgroundColor: `#000` }}>
                  <TagTitle style={{ color: `#fff` }}>Real food</TagTitle>
                  <TagText style={{ color: `#fff` }}>
                    Photographed, then mapped onto models.
                  </TagText>
                </Tag>
              </ContentBox>
              <ImageBox>
                <img
                  src={itcLanding3}
                  alt="Overhead photograph of a plated dish, mapped onto a 3D model"
                />
              </ImageBox>
            </SplitGrid>
          </Section>
        </div>

        <div style={{ backgroundColor: `#0e0e0e` }}>
          <Section>
            <ReverseSplitGrid>
              <ImageBox>
                <img
                  src={itcPlay2}
                  alt="Disembodied hands demonstrating knife technique on finely chopped onion"
                />
              </ImageBox>

              <ContentBox>
                <Eyebrow style={{ color: `#c3ff00` }}>THE TECHNIQUE</Eyebrow>

                <CommonTitle style={{ color: `#fff` }}>
                  Magical hands hold the knife.
                </CommonTitle>

                <BodyPara style={{ color: `#8C8C8C` }}>
                  To teach knife skills without the knife, technique is
                  demonstrated by disembodied hands, visible from every angle,
                  with nothing to cut yourself on. Plating works the same way —
                  food appears on your own crockery.
                </BodyPara>
              </ContentBox>
            </ReverseSplitGrid>
          </Section>
        </div>

        <div style={{ backgroundColor: `#C3FF00` }}>
          <RecordSection style={{ backgroundColor: `#C3FF00` }}>
            <Padded style={{ backgroundColor: `#C3FF00` }}>
              <Eyebrow style={{ color: `#1f1f1f` }}>WHAT HAPPENED</Eyebrow>
              <CommonTitle1 $maxWidth="680px">
                Built for iPhone and iPad in one month.
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
        </div>

        <Section $bg="#eeeeee">
          <GalleryCollageImage
            src={itcLanding4}
            alt="Collage of ITC MastAR Chef app screens — ingredients, cooking, plating and nutrition facts"
          />
        </Section>

        <QuoteSection>
          <Padded style={{ backgroundColor: `transparent` }}>
            <QuoteGrid>
              <div>
                <Eyebrow $color="#4d4d4d">Client words</Eyebrow>
                <QuoteDivider />
                <CommonSubtitle style={{ paddingBottom: `16px` }}>
                  Chef Paul Noronha
                </CommonSubtitle>
                <Eyebrow>Executive Chef, ITC Maratha</Eyebrow>
              </div>
              <QuoteText>
                “MastAR Chef turned a recipe into something people could follow
                on their own counter. The miniature chef and realistic food made
                culinary guidance feel present, playful and practical.”
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
            <NavLink to="/neosapian">← NEO 1</NavLink>
          </NavBlock>
          <NavBlock $right>
            <NavLabel>INDEX</NavLabel>
            <NavLink to="/work">ALL WORK</NavLink>
          </NavBlock>
          <NavBlock $right>
            <NavLabel>Next</NavLabel>
            <NavLink to="/dhyana-v2">DHYANA 2 →</NavLink>
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

const canonicalUrl = "https://www.avantari.org/itc-mastAR-chef"

export const Head = () => (
  <>
    <Seo
      title="ITC MastAR Chef Augmented Reality App | Avantari"
      description="How Avantari built ITC MastAR Chef, an iPhone and iPad AR experience with a miniature chef, realistic 3D food and interactive cooking guidance."
      image={seoImg}
      url={canonicalUrl}
    />
    <meta name="robots" content="index, follow" />
    <meta
      name="keywords"
      content="augmented reality cooking app, AR app development, 3D food visualisation, iOS app, iPad app, interactive recipe experience"
    />
  </>
)

export default ItcmastARchef
