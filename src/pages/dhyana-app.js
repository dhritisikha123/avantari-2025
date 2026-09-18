import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import seoImg from "../images/og-images/dhyanaAppOG.png"

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
  // background-color: #d9d9d9;

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

const TagRow = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: ${({ $color }) => $color || "#547300"};
  margin: 24px 0 0 0;
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
  { label: "Discipline", value: "Software" },
  { label: "Platforms", value: "iOS, Android" },
  {
    label: "Services",
    value: "Product strategy, UX/UI, iOS + Android development, wearable data",
  },
]

/* ------------------------------------------------------------------ */
/* Divided-column grid (Sense / Interpret / Respond / Learn)            */
/* ------------------------------------------------------------------ */

const LoopGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 40px;
  margin-top: 40px;

  @media only screen and (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 30px;
  }

  @media only screen and (max-width: 567px) {
    grid-template-columns: 1fr;
  }
`

const LoopColumn = styled.div`
  padding-top: 18px;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
`

const LoopLabel = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #547300;
  margin: 0 0 10px 0;
`

const LoopText = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 1.5;
  color: #4d4d4d;
  margin: 0;
`

const loopSteps = [
  {
    label: "01 / Sense",
    text: "Continuous HRV, sleep, activity, SpO2, and skin temperature.",
  },
  {
    label: "02 / Interpret",
    text: "Patterns become calmness, stress, readiness and recovery.",
  },
  {
    label: "03 / Respond",
    text: "A workout, meditation, sleep cue or quick reset—right when it matters.",
  },
  {
    label: "04 / Learn",
    text: "Session reports and the journal preserve context, not just totals.",
  },
]

/* ------------------------------------------------------------------ */
/* Pillar cards (Sleep / Activity / Vitals / Practice)                  */
/* ------------------------------------------------------------------ */

const PillarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 40px;

  @media only screen and (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 567px) {
    grid-template-columns: 1fr;
  }
`

const PillarCard = styled.div`
  background-color: #ffffff;
  padding: 22px 20px;
`

const PillarLabel = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #0e0e0e;
  margin: 0 0 10px 0;
`

const PillarText = styled.p`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  color: #0e0e0e;
  margin: 0;
`

const pillars = [
  {
    label: "Sleep",
    text: "Stages, circadian schedules and overnight vitals.",
  },
  {
    label: "Activity",
    text: "Workout mode, beat-by-beat heart rate and recovery.",
  },
  {
    label: "Vitals",
    text: "HRV, SpO2, skin temperature and useful trends.",
  },
  {
    label: "Practice",
    text: "Guided sessions, quick calmness and tailored recommendations.",
  },
]

/* ------------------------------------------------------------------ */
/* Reviews + store stats                                                */
/* ------------------------------------------------------------------ */

const ReviewSection = styled(Section)`
  background-color: #000000;
`

const ReviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 40px;

  @media only screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`

const ReviewCard = styled.div`
  background-color: #ffffff;
  padding: 24px 22px;
`

const ReviewQuote = styled.p`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 42px;
  color: #0E0E0E;
  margin: 0 0 14px 0;
`

const ReviewAttribution = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: #8C8C8C;
  margin: 0;
`

const reviews = [
  {
    quote:
      "Its user interface is super intuitive, making it easy for even beginners to use.",
    attribution: "— GJSingh  /  APP STORE  /  14 DEC 2024",
  },
  {
    quote: "It helped me in calming my nerves.",
    attribution: "— shubhamnagori98  /  APP STORE  /  25 JUN 2020",
  },
]

const StoreStatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 40px;
  row-gap: 24px;
  margin-top: 40px;

  @media only screen and (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const StoreStatValue = styled.p`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  color: #ffffff;
  margin: 0 0 8px 0;
`

const StoreStatLabel = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #c3ff00;
  margin: 0;
`

const storeStats = [
  { value: "4.6 / 5", label: "App Store" },
  { value: "142", label: "App Store ratings" },
  { value: "4.2", label: "Google Play" },
  { value: "100K+", label: "Android downloads" },
]

const Footnote = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  color: #777777;
  margin: 28px 0 0 0;
`

/* ------------------------------------------------------------------ */
/* What happened (lime)                                                 */
/* ------------------------------------------------------------------ */

const RecordSection = styled(Section)`
  background-color: #c3ff00;
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
/* Assets — placeholders, no real app-screenshot assets exist yet       */
/* ------------------------------------------------------------------ */

const ASSET_BASE = "https://darkslategray-salmon-190399.hostingersite.com"

const assets = {
  heroCollage: `${ASSET_BASE}/dhyanaApp1.png`,
  homeScreen: `${ASSET_BASE}/dhyanaApp2.png`,
  biofeedback: `${ASSET_BASE}/dhyanaApp3.png`,
  insightsChat: `${ASSET_BASE}/dhyanaApp4.png`,
}

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

const DhyanaApp = () => {
  return (
    <Layout footerVariant="dark">
      <PageWrapper>
        <HeroSection>
          <HeroGrid>
            <HeroContent>
              <Eyebrow style={{ color: `#547300` }}>
                Software / Avantari
              </Eyebrow>
              <HeroTitle>Dhyana App</HeroTitle>
              <CommonSubtitle>
                The ring captured the signal. The app made it useful.
              </CommonSubtitle>
              <HeroBodyPara>
                We designed and built the iOS and Android companion to Dhyana's
                smart ring—turning HRV, sleep, stress, activity and mindfulness
                into guidance people can read, act on, and return to.
              </HeroBodyPara>
            </HeroContent>
            <HeroImages>
              <img src={assets.heroCollage} alt="Dhyana app screens" />
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
                Turn a stream of biometrics into one useful daily read.
              </CommonTitle>
              <BodyPara style={{ color: `#000` }}>
                Dhyana captures HRV, sleep, activity, SpO2, temperature and
                mindfulness signals. The app had to turn that stream into
                guidance people could understand and act on.
              </BodyPara>
            </ContentBox>
            <ContentBox $bg="#000000">
              <Eyebrow style={{ color: `#c3ff00` }}>The constraint</Eyebrow>
              <CommonTitle style={{ color: `#fff` }} $maxWidth="420px">
                No one needs another health dashboard.
              </CommonTitle>
              <BodyPara style={{ color: `#8C8C8C` }}>
                The experience had to interpret the data in plain language,
                surface one useful next action and still support live
                biofeedback — without making people study charts.
              </BodyPara>
            </ContentBox>
          </SplitGrid>
        </Section>

        <div style={{ backgroundColor: `#fff` }}>
          <Section $bg="#ffffff">
            <SplitGrid>
              <ContentBox>
                <Eyebrow>One daily read</Eyebrow>
                <CommonTitle>
                  One glance. Then one thing worth doing.
                </CommonTitle>
                <BodyPara style={{ color: `#4D4D4D` }}>
                  Calmness and readiness meet on one home view, with workouts,
                  meditation, quick calmness and journaling close at hand. The
                  loop begins with context—not charts.
                </BodyPara>
                <Tag $bg="#c3ff00" $color="#000000">
                  <TagTitle>Mind + Body</TagTitle>
                  <TagText style={{ opacity: 0.75 }}>
                    Calmness and readiness, read together.
                  </TagText>
                </Tag>
              </ContentBox>
              <ImageBox style={{ backgroundColor: `#fff` }}>
                <img src={assets.homeScreen} alt="Dhyana app home screen" />
              </ImageBox>
            </SplitGrid>
          </Section>

          <Section $bg="#ffffff">
            <Padded style={{ backgroundColor: `transparent` }}>
              <Eyebrow>The product loop</Eyebrow>
              <CommonTitle1 $maxWidth="620px">
                The system behind the screen.
              </CommonTitle1>
              <BodyPara $maxWidth="620px" style={{ color: `#8C8C8C` }}>
                Dhyana follows a closed loop: sense the body, interpret the
                signal, suggest a response, then learn from what happened next.
              </BodyPara>
              <LoopGrid>
                {loopSteps.map(step => (
                  <LoopColumn key={step.label}>
                    <LoopLabel>{step.label}</LoopLabel>
                    <LoopText>{step.text}</LoopText>
                  </LoopColumn>
                ))}
              </LoopGrid>
            </Padded>
          </Section>
        </div>
        <div style={{ backgroundColor: `#000` }}>
          <Section $bg="#000000">
            <SplitGrid>
              <ImageBox>
                <img
                  src={assets.biofeedback}
                  alt="Live breathing biofeedback session"
                />
              </ImageBox>
              <ContentBox>
                <Eyebrow style={{ color: `#c3ff00` }}>Live biofeedback</Eyebrow>
                <CommonTitle style={{ color: `#fff` }}>
                  Meditation that answers back.
                </CommonTitle>
                <BodyPara style={{ color: `#8C8C8C` }}>
                  Instead of waiting until the session ends, Dhyana tracks
                  focus, breathing and relaxation as they happen. The user can
                  adjust in the moment, then see the session explained in
                  mindful minutes.
                </BodyPara>
                <TagRow $color="#c3ff00">
                  Real-time feedback / Session breakdown / Mindful minutes
                </TagRow>
              </ContentBox>
            </SplitGrid>
          </Section>
        </div>

        <Section $bg="#eeeeee">
          <Padded style={{ backgroundColor: `transparent` }}>
            <Eyebrow>More than meditation</Eyebrow>
            <CommonTitle1 $maxWidth="620px">
              The rest of the day counts too.
            </CommonTitle1>
            <BodyPara $maxWidth="620px" style={{ color: `#8C8C8C` }}>
              The same product language carries across sleep, workouts, vitals
              and guided practice—so the app feels like one system, not four
              trackers in a trench coat.
            </BodyPara>
            <PillarGrid>
              {pillars.map(pillar => (
                <PillarCard key={pillar.label}>
                  <PillarLabel>{pillar.label}</PillarLabel>
                  <PillarText>{pillar.text}</PillarText>
                </PillarCard>
              ))}
            </PillarGrid>
          </Padded>
        </Section>

        <div style={{ backgroundColor: `#fff` }}>
          <Section $bg="#ffffff">
            <SplitGrid>
              <ContentBox>
                <Eyebrow>Conversational insights</Eyebrow>
                <CommonTitle>The numbers finally learned to speak.</CommonTitle>
                <BodyPara style={{ color: `#8C8C8C` }}>
                  AI-powered insights read across activity, sleep, stress and
                  mindfulness. The journal adds moods, meals and personal
                  context—so the guidance belongs to a life, not just a stream
                  of sensor data.
                </BodyPara>
                <TagRow>AI insights / Journal / Apple Health</TagRow>
              </ContentBox>
              <ImageBox>
                <img
                  src={assets.insightsChat}
                  alt="Conversational AI insights in the Dhyana app"
                />
              </ImageBox>
            </SplitGrid>
          </Section>
        </div>
        <div style={{ backgroundColor: `#000` }}>
          <ReviewSection>
            <Padded style={{ backgroundColor: `transparent` }}>
              <Eyebrow style={{ color: `#c3ff00` }}>In people's words</Eyebrow>
              <CommonTitle1 style={{ color: `#fff` }} $maxWidth="500px">
                Useful beats impressive.
              </CommonTitle1>
              <ReviewGrid>
                {reviews.map(review => (
                  <ReviewCard key={review.attribution}>
                    <ReviewQuote>"{review.quote}"</ReviewQuote>
                    <ReviewAttribution>{review.attribution}</ReviewAttribution>
                  </ReviewCard>
                ))}
              </ReviewGrid>
              <StoreStatGrid>
                {storeStats.map(stat => (
                  <div key={stat.label}>
                    <StoreStatValue>{stat.value}</StoreStatValue>
                    <StoreStatLabel>{stat.label}</StoreStatLabel>
                  </div>
                ))}
              </StoreStatGrid>
              <ReviewAttribution style={{color:`#8C8C8C`,   margin: `45px 0 0 0`}}>
                Store figures checked 18 Aug 2025 · App Store India + Google
                Play
              </ReviewAttribution>
            </Padded>
          </ReviewSection>
        </div>

        <div style={{ backgroundColor: `#C3FF00` }}>
          <RecordSection>
            <Padded style={{ backgroundColor: `transparent` }}>
              <Eyebrow style={{ color: `#1f1f1f` }}>What happened</Eyebrow>
              <CommonTitle1 $maxWidth="680px">
                A full wellness system people kept coming back to.
              </CommonTitle1>
              <BodyPara style={{ color: `#0E0E0E` }} $maxWidth="820px">
                Across iOS and Android, Dhyana grew beyond meditation into
                sleep, activity, vitals, live biofeedback and AI-guided recovery
                — with 100K+ Android downloads and strong store ratings.
              </BodyPara>
              <TagRow $color="#1f1f1f">
                Product strategy / UX + UI / Mobile development / Data
                experience / AI
              </TagRow>
            </Padded>
          </RecordSection>
        </div>

        <div style={{ backgroundColor: `#000` }}>
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
            <NavLabel>Previous</NavLabel>
            <NavLink to="/dhyana-v2">← Dhyana 2</NavLink>
          </NavBlock>
          <NavBlock>
            <NavLabel>Index</NavLabel>
            <NavLink to="/work">All Work</NavLink>
          </NavBlock>
          <NavBlock $right>
            <NavLabel>Next</NavLabel>
            <NavLink to="/dhun">Dhün →</NavLink>
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

const canonicalUrl = "https://www.avantari.org/work/dhyana-app"

export const Head = () => (
  <>
    <Seo
      title="Dhyana Mindfulness & Wearable Health App | Avantari"
      description="How Avantari designed and developed Dhyana's iOS and Android app, turning HRV, sleep, stress and activity data into useful daily guidance."
      image={seoImg}
      url={canonicalUrl}
    />
    <meta name="robots" content="index, follow" />
    <meta
      name="keywords"
      content="wearable health app development, mindfulness app, HRV app, iOS and Android development, digital health UX, biometric data visualisation"
    />
  </>
)

export default DhyanaApp
