import React from "react"
import styled from "styled-components"
import DesktopFourthSection from "./desktop-fourth-section"
import MobileFourthSection from "./mobile-fourth-section"

const DesktopDiv = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`

const MobDiv = styled.div`
  @media only screen and (min-width: 769px) {
    display: none;
  }
`

const FourthSection = () => {
  return (
    <div>
      <DesktopDiv>
        <DesktopFourthSection />
      </DesktopDiv>
      <MobDiv>
        <MobileFourthSection />
      </MobDiv>
    </div>
  )
}

export default FourthSection
