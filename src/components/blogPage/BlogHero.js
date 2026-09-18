import React from "react"
import styled from "styled-components"

const HeroSection = styled.section`
  box-sizing: border-box;
  width: 100%;
  background: #c3ff00;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: clamp(20px, calc(-17.143px + 9.5238vw), 120px);
  padding-right: clamp(20px, calc(-17.143px + 9.5238vw), 120px);

  @media only screen and (min-width: 769px) {
    padding-top: 80px;
    padding-bottom: 80px;
    gap: 20px;
  }

  @media only screen and (min-width: 1440px) {
    padding-left: clamp(120px, calc(-240px + 25vw), 400px);
    padding-right: clamp(120px, calc(-240px + 25vw), 400px);
    padding-top: 104px;
    padding-bottom: 104px;
    gap: 24px;
  }
`

const Eyebrow = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.52px;
  color: #000000;
  margin: 0;

  @media only screen and (min-width: 769px) {
    line-height: 20px;
  }
`

const Title = styled.h1`
  font-family: "Corben", serif;
  font-weight: 400;
  color: #000000;
  margin: 0;
  max-width: 100%;
  width: 350px;
  font-size: clamp(36px, calc(24.114px + 3.0476vw), 68px);
  line-height: clamp(44px, calc(32.114px + 3.0476vw), 76px);

  @media only screen and (min-width: 769px) {
    width: 1000px;
  }

  @media only screen and (min-width: 1440px) {
    width: 1500px;
    font-size: clamp(68px, calc(42.286px + 1.7857vw), 88px);
    line-height: clamp(76px, calc(50.286px + 1.7857vw), 96px);
  }
`

const Subtitle = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  color: #000000;
  margin: 0;
  max-width: 100%;
  width: 350px;
  font-size: clamp(14px, calc(12.514px + 0.381vw), 18px);
  line-height: clamp(22px, calc(19.771px + 0.5714vw), 28px);

  @media only screen and (min-width: 769px) {
    width: 780px;
  }

  @media only screen and (min-width: 1440px) {
    width: 900px;
    font-size: 18px;
    line-height: 28px;
  }
`

const BlogHero = () => (
  <HeroSection>
    <Eyebrow>BLOG</Eyebrow>
    <Title>The parts of the work that don’t fit in a case study.</Title>
    <Subtitle>
      Notes on hardware, AI and the unglamorous business of getting a product made.
    </Subtitle>
  </HeroSection>
)

export default BlogHero
