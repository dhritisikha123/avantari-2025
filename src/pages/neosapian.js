import React, { useState, useRef } from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import seoImg from "../images/og-images/neoOG.png"

import neosapianHero from "../images/newWeb/neosapian/neoOne.png"
import neoTwo from "../images/newWeb/neosapian/neoTwo.png"
import neoThree from "../images/newWeb/neosapian/neoThree1.png"
import neoFour from "../images/newWeb/neosapian/neoFour.png"

import neosapianGallery1 from "../images/newWeb/neosapian/neosapianGallery1.png"
import neosapianGallery3 from "../images/newWeb/neosapian/neosapianGallery3.png"
import neosapianGallery2 from "../images/newWeb/neosapian/neosapianGallery2.png"

import neosapianPlayThumb from "../images/newWeb/neosapian/playVid1Neo.png"
import neosapianVid from "../images/videos/neo.mp4"

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
  { label: "Client", value: "Zenithzephyr Wellness" },
  { label: "Year", value: "2024" },
  { label: "Discipline", value: "Hardware" },
  { label: "Time to market", value: "3 months" },
  { label: "Services", value: "Industrial design, PCB, Embedded" },
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
    label: "3 MONTHS",
    text: "Concept to market, with engineering, design and manufacturing working as one team.",
  },
  {
    label: "ONE PIECE",
    text: "The shell is a single machined body, sealed without visible fasteners.",
  },
  {
    label: "IN MARKET",
    text: "Shipping internationally within months of launch.",
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


/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

const NeoSapian = () => {
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
              <Eyebrow>HARDWARE / NEOSAPIEN</Eyebrow>
              <HeroTitle>Neo 1</HeroTitle>
              <CommonSubtitle>
                A wearable that remembers your conversations.
              </CommonSubtitle>
              <HeroBodyPara>
                Neo 1 listens and turns what it hears into a searchable record.
                It hangs from a necklace in a shell machined from a single piece
                of aluminium. The mark on the front lights when the device is
                recording.
              </HeroBodyPara>
            </HeroContent>
            <HeroImages>
              <img src={neosapianHero} alt="Neo 1 pendant worn on a necklace" />
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
                The software was ready. The hardware wasn’t.
              </CommonTitle>
              <BodyPara style={{ color: `#1f1f1f` }}>
                NeoSapien had built the AI. They came to us because the device
                around it didn’t match. They needed it in the market at record
                time.
              </BodyPara>
            </ContentBox>
            <ContentBox $bg="#0e0e0e">
              <Eyebrow style={{ color: `#c3ff00` }}>The constraint</Eyebrow>
              <CommonTitle style={{ color: `#fff` }} $maxWidth="420px">
                A device that had to disappear and announce itself.
              </CommonTitle>
              <BodyPara style={{ color: `#8C8C8C` }}>
                It had to come off the necklace easily enough to charge every
                day. It had to carry the brand, as the company’s first product.
                And it had to show when it was listening, without anyone having
                to ask.
              </BodyPara>
            </ContentBox>
          </SplitGrid>
        </Section>

        <FilmSection>
          <Padded>
            <Eyebrow style={{ color: `#c3ff00` }}>Film / Powered by Neo OS</Eyebrow>
            <VideoFrame onClick={handlePlay}>
              {!playing && (
                <img src={neosapianPlayThumb} alt="Neo 1 launch film" />
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
                <source src={neosapianVid} type="video/mp4" />
              </video>
              {!playing && <PlayButton aria-label="Play film" />}
            </VideoFrame>
            <FilmCaption style={{ color: `#8C8C8C` }}>Your personal AI companion.</FilmCaption>
          </Padded>
        </FilmSection>

        <Section>
          <SplitGrid>
            <ContentBox>
              <Eyebrow>The form</Eyebrow>
              <CommonTitle>A wearable that had to come off every night.</CommonTitle>
              <BodyPara>
                Neo 1 lives on a necklace, but charging means removing it daily.
                We designed a detachable hook-and-strap system that could be
                taken off in one movement without making the product feel
                temporary.
              </BodyPara>
              <Tag>
                <TagTitle>DETACH. CHARGE. RETURN.</TagTitle>
                <TagText>
                  A simple mechanical interaction, resolved into the body of the
                  product.
                </TagText>
              </Tag>
            </ContentBox>
            <ImageBox style={{ backgroundColor: `#ffffff` }}>
              <img src={neoTwo} alt="Neo 1 detachable hook mechanism" style={{ objectFit: `contain` }} />
            </ImageBox>
          </SplitGrid>
        </Section>

        <div style={{ backgroundColor: `#fff` }}>
          <Section>
            <SplitGrid>
              <ImageBox style={{ backgroundColor: `#ffffff` }}>
                <img src={neoThree} alt="Two Neo 1 devices side by side" style={{ objectFit: `contain` }} />
              </ImageBox>
              <ContentBox>
                <Eyebrow>The signal</Eyebrow>
                <CommonTitle>
                  Recording needed to be obvious without becoming loud.
                </CommonTitle>
                <BodyPara>
                  A front light turns the device’s state into a glanceable
                  signal. When Neo 1 is listening, the product tells you —
                  before anyone has to ask.{" "}
                </BodyPara>
                <Tag style={{ backgroundColor: `#000` }}>
                  <TagTitle style={{ color: `#fff` }}>ONE CLEAR STATE</TagTitle>
                  <TagText style={{ color: `#fff` }}>
                    A single illuminated mark communicates recording at a
                    glance.{" "}
                  </TagText>
                </Tag>
              </ContentBox>
            </SplitGrid>
          </Section>
        </div>

        <div style={{ backgroundColor: `#0e0e0e` }}>
          <Section>
            <SplitGrid>
              <ContentBox>
                <Eyebrow style={{ color: `#c3ff00` }}>The finish</Eyebrow>
                <CommonTitle style={{ color: `#fff` }}>
                  A finish you feel before you notice.
                </CommonTitle>
                <BodyPara style={{ color: `#8C8C8C` }}>
                  We explored multiple anodised colourways, then refined the
                  surface with an ultrafine bead blast that gave the aluminium a
                  soft, plush tactility. The final anodising was tuned for
                  depth, consistency and richness — a finish designed to stand
                  comfortably beside the best global consumer hardware.{" "}
                </BodyPara>
                <Tag>
                  <TagTitle>ULTRAFINE BEAD BLAST</TagTitle>
                  <TagText>
                    Plush matte tactility, premium anodising and carefully
                    developed colour options.
                  </TagText>
                </Tag>
              </ContentBox>
              <ImageBox style={{ backgroundColor: `#ffffff` }}>
                <img src={neoFour} alt="Neo 1 in three colourways" style={{ objectFit: `contain` }} />
              </ImageBox>
            </SplitGrid>
          </Section>
        </div>

        <div style={{ backgroundColor: `#fff` }}>
          <Section $bg="#eeeeee">
            <Gallery>
              <GalleryImage>
                <img src={neosapianGallery1} alt="Neo 1 shell and hook components" />
              </GalleryImage>
              <GalleryImage>
                <img src={neosapianGallery2} alt="Neo 1 device detail" />
              </GalleryImage>
              <GalleryImage>
                <img
                  src={neosapianGallery3}
                  alt="Neo 1 worn on a necklace"
                />
              </GalleryImage>
            </Gallery>
          </Section>
        </div>

        <div style={{ backgroundColor: `#C3FF00` }}>
          <RecordSection style={{ backgroundColor: `#C3FF00` }}>
            <Padded style={{ backgroundColor: `#C3FF00` }}>
              <Eyebrow style={{ color: `#1f1f1f` }}>What happened</Eyebrow>
              <CommonTitle1 $maxWidth="680px">
               Three months from first sketch to shelf.
              </CommonTitle1>
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

        <QuoteSection>
          <Padded style={{ backgroundColor: `transparent` }}>
            <QuoteGrid>
              <div>
                <Eyebrow $color="#4d4d4d">Client words</Eyebrow>
                <QuoteDivider />
                <CommonSubtitle style={{ paddingBottom: `16px` }}>
                  Dhananjay Yadav
                </CommonSubtitle>
                <Eyebrow>CEO, NeoSapien</Eyebrow>
              </div>
              <QuoteText>
               “Avantari understood Neo 1 at a level we rarely see from an external team. They challenged the brief, solved the hard engineering details and moved with extraordinary speed — without losing the craft. The product we launched was materially better because they were part of it.”
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
            <NavLink to="/karban-airzone">← KARBAN AIRZONE</NavLink>
          </NavBlock>
          <NavBlock $right>
            <NavLabel>INDEX</NavLabel>
            <NavLink to="/work">ALL WORK</NavLink>
          </NavBlock>
          <NavBlock $right>
            <NavLabel>Next</NavLabel>
            <NavLink to="/itc-mastAR-chef">ITC MASTERCHEF →</NavLink>
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

const canonicalUrl = "https://www.avantari.org/neosapian"

export const Head = () => (
  <>
    <Seo
      title="Neo 1 AI Wearable Product Development | Avantari"
      description="How Avantari designed and engineered Neo 1, a machined-aluminium AI wearable that records conversations, charges daily and makes listening visible."
      image={seoImg}
      url={canonicalUrl}
    />
    <meta name="robots" content="index, follow" />
    <meta
      name="keywords"
      content="AI wearable design, wearable product development, embedded electronics, industrial design, aluminium enclosure, personal AI device"
    />
  </>
)

export default NeoSapian
