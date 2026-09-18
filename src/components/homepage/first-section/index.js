import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const ParaDiv = styled.div`
  text-align: center;
  width: 45em;
  margin: 0 auto;
  @media only screen and (max-width: 991px) {
    width: 30em;
  }
`

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const Para1 = styled.h1`
  font-family: "Corben", serif;
  font-weight: 400;
  width: 750px;
  margin: 0 auto;

  @media only screen and (min-width: 1440px) {
    font-size: 56px;
    line-height: 64px
  }
  @media only screen and (max-width: 1439px) {
    font-size: 48px;
    line-height: 56px
  }
  @media only screen and (max-width: 567px) {
    font-size: 36px;
    line-height: 44px;
    width: 350px;
    word-break: break-word;
  }
  color: #000000;
`

const PrimaryCta = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  text-decoration: none;
  color: #000000;
  background-color: #c3ff00;
  padding: 15px 37px;
  white-space: nowrap;
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    background-color: #aee600;
    transform: translateY(-2px);
  }
`

const MoreText = styled.span`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #4d4d4d;
  text-align: center;
  position: absolute;
  left: 50%;
  bottom: 5%;
  transform: translateX(-50%);
  &:hover {
    color: #000;
  }
  @media only screen and (max-width: 567px) {
    font-size: 14px;
    bottom: 5%;
  }
`

const FirstDiv = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FirstSection = ({ scrollToNext }) => {
  return (
    <FirstDiv>
      <HeroContent>
        <ParaDiv>
          <Para1>
            An award-winning product design and engineering lab for ideas that won’t leave you alone.
          </Para1>
        </ParaDiv>
        {/* <PrimaryCta to="/contact">Book a Build Risk Review</PrimaryCta> */}
      </HeroContent>
      {/* <MoreText>more</MoreText> */}
    </FirstDiv>
  )
}

export default FirstSection
