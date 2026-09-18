import React, { useState, useRef } from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import seoImg from "../images/og-images/einOG.png"
import einVid from "../images/videos/einVid.mp4"
import einHero from "../images/newWeb/ein/einLanding4.png"
import einBP from "../images/newWeb/ein/einLanding5.png"
import einEcho from "../images/newWeb/ein/einLanding2.png"
import einFullbleed from "../images/newWeb/ein/einLanding.png"
import einPlayThumb from "../images/newWeb/ein/playEinButton.png"

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
  background-color: #0c0c0c;
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

const EinSection = styled(Section)`
  background-color: #0e0e0e;
`

const EinDivider = styled.div`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0 0 40px 0;
`

const EinGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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

const einPillars = [
  {
    label: "Independent connectivity",
    text: "A built-in SIM card lets Ein place a call to a saved contact without needing a phone nearby.",
  },
  {
    label: "Motion sensing",
    text: "A 6-axis gyroscope tracks fine-grained movement patterns directly from the wrist.",
  },
]

const meta = [
  { label: "Client", value: "Avantari" },
  { label: "Year", value: "2019" },
  { label: "Discipline", value: "Hardware" },
  { label: "Focus", value: "Cardiovascular sensing" },
  { label: "Services", value: "Industrial design, PCB, Sensors, Embedded" },
]

const recordStats = [
  {
    label: "MULTI-SENSOR FUSION",
    text: "An EKG lead, PPG sensor, accelerometer and microphone combined in one device.",
  },
  {
    label: "QUALCOMM",
    text: "Winner, Design in India Challenge.",
  },
]

const Ein = () => {
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
              <Eyebrow $color="#547300">HARDWARE / AVANTARI</Eyebrow>
              <HeroTitle>Ein</HeroTitle>
              <CommonSubtitle>Built to bring cardiovascular sensing to the wrist.</CommonSubtitle>
              <HeroBodyPara>
                Avantari engineered Ein's hardware and sensing stack — fusing an
                EKG lead, a PPG sensor, an accelerometer and a microphone into a
                single wrist-worn device, with its own built-in cellular
                connectivity.
              </HeroBodyPara>
            </HeroContent>
            <HeroImages>
              <img
                src={einHero}
                alt="Ein smartwatch face showing heart rate on a marble background"
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
                Wearables measure what’s easy. Hearts need what’s hard.
              </CommonTitle>
              <BodyPara>
                Step counts and resting heart rate are convenient to capture.
                Ein set out to bring multiple cardiovascular sensing methods
                into a single wearable form factor.
              </BodyPara>
            </ContentBox>
            <ContentBox $bg="#0e0e0e">
              <Eyebrow style={{ color: `#c3ff00` }}>The constraint</Eyebrow>
              <CommonTitle style={{ color: `#fff` }} $maxWidth="420px">
                Complex sensing had to disappear into the strap.
              </CommonTitle>
              <BodyPara style={{ color: `#8C8C8C` }}>
                The same watch had to combine multiple sensing methods and turn
                them into useful cardiovascular measurements without adding
                bulky hardware or changing how a person wears it.
              </BodyPara>
            </ContentBox>
          </SplitGrid>
        </Section>

        <div style={{ backgroundColor: `#0c0c0c` }}>
          <FilmSection>
            <Padded>
              <Eyebrow style={{ color: `#C3FF00` }}>
                FILM / ONE TOUCH ECG
              </Eyebrow>
              <VideoFrame onClick={handlePlay}>
                {!playing && <img src={einPlayThumb} alt="Ein one-touch ECG trace on the watch face" />}
                <video
                  preload="auto"
                  controls={playing}
                  playsInline
                  ref={videoRef}
                  style={{ display: playing ? "block" : "none" }}
                  disablePictureInPicture
                  controlsList="nofullscreen nodownload noremoteplayback"
                >
                  <source src={einVid} type="video/mp4" />
                </video>
                {!playing && <PlayButton aria-label="Play film" />}
              </VideoFrame>
              <FilmCaption style={{ color: `#8C8C8C` }}>
                A single touch captures an ECG trace from the wrist.
              </FilmCaption>
            </Padded>
          </FilmSection>
        </div>

        <Section>
          <SplitGrid>
            <ContentBox>
              <Eyebrow>THE SENSING SURFACE</Eyebrow>
              <CommonTitle>A single touch, engineered for pulse transit time.</CommonTitle>
              <BodyPara>
                Ein merges an EKG lead and a PPG sensor into a single touch
                surface, capturing pulse transit time to millisecond precision
                from a single touch of the finger.
              </BodyPara>
              <Tag>
                <TagTitle>Single surface</TagTitle>
                <TagText>
                  One touch merges two sensing methods into a single reading.
                </TagText>
              </Tag>
            </ContentBox>
            <ImageBox>
              <img
                src={einBP}
                alt="Ein watch worn on the wrist"
              />
            </ImageBox>
          </SplitGrid>
        </Section>

        <div style={{ backgroundColor: `#fff` }}>
          <Section>
            <SplitGrid>
              <ImageBox style={{ backgroundColor: `#000000` }}>
                <img
                  src={einEcho}
                  alt="Ein watch screen during a sensor reading"
                />
              </ImageBox>
              <ContentBox>
                <Eyebrow>THE SENSING METHOD</Eyebrow>
                <CommonTitle>Cardiac motion sensing, built into a wrist strap.</CommonTitle>
                <BodyPara>
                  Ein captures the mechanical activity of the heart using
                  nothing but the internal accelerometer and microphone — no
                  external hardware, just what's already inside the watch.
                </BodyPara>
                <Tag style={{ backgroundColor: `#000000` }}>
                  <TagTitle style={{ color: `#ffffff` }}>Patented</TagTitle>
                  <TagText style={{ color: `#ffffff` }}>
                    The technique is protected by patent.
                  </TagText>
                </Tag>
              </ContentBox>
            </SplitGrid>
          </Section>
        </div>

        <div style={{ backgroundColor: `#0e0e0e` }}>
          <EinSection>
            <Padded style={{ backgroundColor: `#0e0e0e` }}>
              <Eyebrow style={{ color: `#c3ff00` }}>
                BUILT-IN CONNECTIVITY
              </Eyebrow>
              <CommonTitle1 style={{ color: `#fff` }} $maxWidth="1440px">
                A SIM card, built into the watch.
              </CommonTitle1>
              <EinDivider />
              <EinGrid>
                {einPillars.map(pillar => (
                  <div key={pillar.label}>
                    <CommonLabel>{pillar.label}</CommonLabel>
                    <CommonText>{pillar.text}</CommonText>
                  </div>
                ))}
              </EinGrid>
            </Padded>
          </EinSection>
        </div>

        <Section>
          <img
            src={einFullbleed}
            alt="Ein watch worn on the wrist in daily use"
            style={{ width: `100%`, margin: `auto, 0`, textAlign: `center` }}
          />
        </Section>

        <div style={{ backgroundColor: `#C3FF00`, marginTop: `-4` }}>
          <RecordSection style={{ backgroundColor: `#C3FF00` }}>
            <Padded style={{ backgroundColor: `#C3FF00` }}>
              <Eyebrow $color="#1f1f1f">WHAT HAPPENED</Eyebrow>
              <CommonTitle1>
                Hardware, sensors and firmware, engineered as one system.
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
            <NavLink to="/welcome-kejriwal">← WELCOME KEJRIWAL</NavLink>
          </NavBlock>
          <NavBlock $right>
            <NavLabel>INDEX</NavLabel>
            <NavLink to="/work">ALL WORK</NavLink>
          </NavBlock>
          <NavBlock $right>
            <NavLabel>Next</NavLabel>
            <NavLink to="/dhyana-v1">DHYANA 1 →</NavLink>
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

const canonicalUrl = "https://www.avantari.org/ein"

export const Head = () => (
  <>
    <Seo
      title="Ein Cardiovascular Wearable Development | Avantari"
      description="How Avantari designed Ein — a wrist-worn product programme combining industrial design, electronics and embedded sensing for heart-health monitoring."
      image={seoImg}
      url={canonicalUrl}
    />
    <meta name="robots" content="index, follow" />
    <meta
      name="keywords"
      content="cardiovascular wearable development, wrist-worn hardware design, embedded sensor engineering, wearable electronics product development, hardware and firmware integration"
    />
  </>
)

export default Ein
