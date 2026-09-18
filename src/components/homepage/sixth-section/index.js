import React from "react"
import styled from "styled-components"
import DesktopSixthSection from "./desktop-sixth-section"
import MobileSixthSection from "./mobile-sixth-section"

const FirstDiv = styled.div`
  position: relative; /* Ensures the div is positioned relative to the viewport */
  height: 300px; /* 100% of the viewport height */
`

const NewDiv = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  @media only screen and (max-width: 567px) {
    top: 80%;
  }
`
const DesktopDiv = styled.div`
  @media only screen and (max-width: 567px) {
    display: none;
  }
`

const MobDiv = styled.div`
  @media only screen and (min-width: 568px) {
    display: none;
  }
`

const SixthSection = () => {
  return (
    <FirstDiv>
      <NewDiv>
        <DesktopDiv>
          <DesktopSixthSection />
        </DesktopDiv>
        <MobDiv>
          <MobileSixthSection />
        </MobDiv>
      </NewDiv>
    </FirstDiv>
  )
}

export default SixthSection
