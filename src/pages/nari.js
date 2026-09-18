import React, { useState, useRef } from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import seoImg from "../images/og-images/nariOG.png"
import playButtonIcon from "../images/newWeb/icons/play.svg"

import nariVid from "../images/videos/nariVid.mp4"

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

const DecsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 50px;
  row-gap: 30px;
  margin-top: 30px;

  @media only screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
    row-gap: 18px;
  }
`

/* Grid items default to min-width: auto, which lets the label/paragraph's
   content size push the column wider than its 1fr track instead of
   wrapping — min-width: 0 forces it to respect the track width. A top
   border (not a trailing <hr>) is what separates each pillar, per Figma. */
const DecsPillar = styled.div`
  min-width: 0;
  border-top: 1px solid #383838;
  padding-top: 18px;
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
  { label: "Client", value: "Ushalakshmi Breast Cancer Foundation" },
  { label: "Year", value: "2026" },
  { label: "Discipline", value: "AI" },
  { label: "Outcome", value: "Guinness World Record" },
  {
    label: "Services",
    value: "DECS, Multilingual AI, Hologram, HoloBot",
  },
]

const recordStats = [
  {
    label: "391 QUALIFYING",
    text: "Official qualifying audience for the record attempt.",
  },
  {
    label: "30 + 30 MIN",
    text: "A 30-minute holographic lecture followed by a 30-minute interactive Q&A.",
  },
  {
    label: "GUINNESS WORLD RECORD",
    text: "Largest audience for an interactive AI-enabled holographic health awareness lecture.",
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

const Nari = () => {
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
              <Eyebrow $color="#547300">AI / USHALAKSHMI FOUNDATION</Eyebrow>
              <HeroTitle>NARI</HeroTitle>
              <CommonSubtitle>
                A doctor, available beyond the consulting room.
              </CommonSubtitle>
              <HeroBodyPara>
                Dr. Raghu Ram wanted people across India to have access to
                trustworthy breast-health information in their own language. We
                built the National Awareness & Resource Initiative (NARI) on
                DECS, then launched it with a life-size holographic lecture that
                became a live multilingual HoloBot Q&A.
              </HeroBodyPara>
            </HeroContent>
            <HeroImages>
              <img
                src="https://darkslategray-salmon-190399.hostingersite.com/nariHeroImage.png"
                alt="Dr. Raghu Ram"
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
                Take one doctor’s knowledge across India.
              </CommonTitle>
              <BodyPara>
                Dr. Raghu Ram wanted NARI to give people across the country
                access to trustworthy breast-health information in regional
                languages, beyond the limits of a clinic or city.
              </BodyPara>
            </ContentBox>
            <ContentBox $bg="#000000">
              <Eyebrow style={{ color: `#c3ff00` }}>The constraint</Eyebrow>
              <CommonTitle style={{ color: `#fff` }} $maxWidth="420px">
                It still had to feel like him.
              </CommonTitle>
              <BodyPara style={{ color: `#8C8C8C` }}>
                The service could not become a generic chatbot. His knowledge,
                authority and manner needed to carry across digital
                conversations, a life-size hologram and live HoloBot Q&A.
              </BodyPara>
            </ContentBox>
          </SplitGrid>
        </Section>

        <div style={{ backgroundColor: `#fff` }}>
          <Section>
            <SplitGrid>
              <ContentBox>
                <Eyebrow>THE PLATFORM</Eyebrow>
                <CommonTitle>
                  One doctor’s knowledge, built to travel.
                </CommonTitle>
                <BodyPara>
                  NARI was built on Avantari’s DECS platform so Dr. Raghu Ram
                  could share breast-health information with people across India
                  in regional languages — extending his knowledge beyond the
                  consulting room.
                </BodyPara>
                <Tag>
                  <TagTitle>NARI</TagTitle>
                  <TagText>
                    National Awareness & Resource Initiative for breast health,
                    built on DECS.
                  </TagText>
                </Tag>
              </ContentBox>
              <ImageBox>
                <img
                  src="https://darkslategray-salmon-190399.hostingersite.com/nariPlatform1.png"
                  alt="NARI video-call interface"
                />
              </ImageBox>
            </SplitGrid>
          </Section>

          <Section>
            <SplitGrid>
              <ImageBox style={{ backgroundColor: `#000000` }}>
                <img
                  src="https://darkslategray-salmon-190399.hostingersite.com/nariPlatform.png"
                  alt="NARI video-call interface"
                />
              </ImageBox>
              <ContentBox>
                <Eyebrow>THE HOLOGRAM</Eyebrow>
                <CommonTitle>
                  To launch a digital doctor, we made him physically present.
                </CommonTitle>
                <BodyPara>
                  For the launch, we built a life-size holographic Dr. Raghu
                  Ram. He delivered a 30-minute breast-health lecture to a live
                  audience — combining the authority of a real physician with
                  the reach of a digital service.
                </BodyPara>
                <Tag style={{ backgroundColor: `#000000` }}>
                  <TagTitle style={{ color: `#ffffff` }}>
                    30-MINUTE LECTURE
                  </TagTitle>
                  <TagText style={{ color: `#ffffff` }}>
                    A life-size holographic keynote for the NARI launch.
                  </TagText>
                </Tag>
              </ContentBox>
            </SplitGrid>
          </Section>
        </div>

        <div style={{ backgroundColor: `#000` }}>
          <Section>
            <SplitGrid>
              <ContentBox>
                <Eyebrow style={{ color: `#C3FF00` }}>THE TRANSITION</Eyebrow>
                <CommonTitle style={{ color: `#FFFFFF` }}>
                  Then the lecture stopped being a lecture.
                </CommonTitle>
                <BodyPara style={{ color: `#8C8C8C` }}>
                  After the prepared talk, the session shifted into HoloBot.
                  Students and attendees asked breast-health questions live, and
                  the digital Dr. Raghu Ram answered in multiple Indian
                  languages — in real time.{" "}
                </BodyPara>
                <Tag style={{ backgroundColor: `#C3FF00` }}>
                  <TagTitle style={{ color: `#000000` }}>
                    LIVE MULTILINGUAL Q&A
                  </TagTitle>
                  <TagText style={{ color: `#4D4D4D` }}>
                    Prepared lecture → live HoloBot conversation.
                  </TagText>
                </Tag>
              </ContentBox>
              <ImageBox style={{ backgroundColor: `#000000` }}>
                <img
                  src="https://darkslategray-salmon-190399.hostingersite.com/nari-hologram-stage.png"
                  alt="NARI video-call interface"
                />
              </ImageBox>
            </SplitGrid>
          </Section>

          <FilmSection>
            <Padded>
              <Eyebrow style={{ color: `#C3FF00` }}>
                FILM / FROM LECTURE TO LIVE Q&A
              </Eyebrow>
              <VideoFrame onClick={handlePlay}>
                {!playing && (
                  <img
                    src="https://darkslategray-salmon-190399.hostingersite.com/nariVid.png"
                    alt="NARI launch film"
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
                  <source src={nariVid} type="video/mp4" />
                </video>
                {!playing && (
                  <PlayButton aria-label="Play film">
                    <PlayButton src={playButtonIcon} alt="" />
                  </PlayButton>
                )}
              </VideoFrame>
              <FilmCaption style={{ color: `#8C8C8C` }}>
                Show the defining moment: a 30-minute life-size holographic
                lecture seamlessly becoming a live multilingual HoloBot Q&A.
              </FilmCaption>
            </Padded>
          </FilmSection>

          <DecsSection>
            <Padded>
              <Eyebrow style={{ color: `#c3ff00` }}>POWERED BY DECS</Eyebrow>
              <CommonTitle1 style={{ color: `#fff` }} $maxWidth="1440px">
                The same mind, wherever it needs to be.
              </CommonTitle1>
              <DecsGrid>
                {decsPillars.map(pillar => (
                  <DecsPillar key={pillar.label}>
                    <CommonLabel>{pillar.label}</CommonLabel>
                    <CommonText>{pillar.text}</CommonText>
                  </DecsPillar>
                ))}
              </DecsGrid>
            </Padded>
          </DecsSection>
        </div>

        <Section>
          <Gallery>
            <GalleryImage>
              <img src={assets.gallery1} alt="NARI launch event" />
            </GalleryImage>
            <GalleryImage>
              <img src={assets.gallery2} alt="NARI launch event" />
            </GalleryImage>
            <GalleryImage>
              <img src={assets.gallery3} alt="NARI launch event" />
            </GalleryImage>
          </Gallery>
        </Section>

        <div style={{ backgroundColor: `#C3FF00` }}>
          <RecordSection style={{ backgroundColor: `#C3FF00` }}>
            <Padded style={{ backgroundColor: `#C3FF00` }}>
              <Eyebrow $color="#1f1f1f">WHAT HAPPENED</Eyebrow>
              <CommonTitle1>
                A public-health launch became a Guinness World Record.
              </CommonTitle1>
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
                  Dr. P. Raghu Ram
                </CommonSubtitle>
                <Eyebrow>Breast Surgeon · Founder, NARI</Eyebrow>
              </div>
              <QuoteText>
                “Avantari transformed an ambitious vision into something deeply
                human. They brought my digital presence to life across languages
                and formats, and the result was powerful enough to earn a
                Guinness World Record. Their imagination, technical depth and
                commitment were exceptional.”
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
          <NavBlock></NavBlock>
          <NavBlock $right>
            <NavLabel>INDEX</NavLabel>
            <NavLink to="/work">ALL WORK</NavLink>
          </NavBlock>
          <NavBlock $right>
            <NavLabel>Next</NavLabel>
            <NavLink to="/evolve-or-fossilise">EVOLVE OR FOSSILISE →</NavLink>
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

const canonicalUrl = "https://www.avantari.org/nari"

export const Head = () => (
  <>
    <Seo
      title="NARI Conversational Health Guide | Avantari"
      description="How Avantari built NARI — a multilingual digital-human and holographic experience that extends a clinician's public education beyond the room."
      image={seoImg}
      url={canonicalUrl}
    />
    <meta name="robots" content="index, follow" />
    <meta
      name="keywords"
      content="digital human health education, multilingual conversational experience, holographic product development"
    />
  </>
)

export default Nari
