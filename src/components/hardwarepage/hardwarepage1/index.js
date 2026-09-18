import React from "react"
import styled from "styled-components"

const ParaDiv = styled.div`
  text-align: center;
  width: 45em;
  margin: 0 auto;
  @media only screen and (max-width: 991px) {
    width: 30em;
  }
`

const Para1 = styled.h1`
  font-family: "Corben", serif;
  font-size: 2.8em;
  font-weight: 400;
  line-height: 120%;
  width: 750px;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  @media only screen and (max-width: 991px) {
    font-size: 2em;
    width: 550px;
  }
  @media only screen and (max-width: 567px) {
    font-size: 20px;
    line-height: 1.4;
    max-width: 330px;
    word-break: break-word;
  }
  color: #000000;
`

const MoreText = styled.span`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #685762;
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

const HardWarePage1 = ({ scrollToNextHardware }) => {
  return (
    <FirstDiv>
      <ParaDiv>
        <Para1>
          Beautifully designed, highly functional & cost-effective solutions
          built with our partners across the Indian manufacturing ecosystem
        </Para1>
      </ParaDiv>
      <MoreText className="hover-target" onClick={scrollToNextHardware}>
        more
      </MoreText>
    </FirstDiv>
  )
}

export default HardWarePage1
