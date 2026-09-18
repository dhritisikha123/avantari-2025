import React from "react"
import styled from "styled-components"
import DesktopThirdSection from "./desktop-third-section"
import MobileThirdSection from "./mobile-third-section"

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

const ThirdSection = () => {
  return (
    <>
      <DesktopDiv>
        <DesktopThirdSection />
      </DesktopDiv>
      <MobDiv>
        <MobileThirdSection />
      </MobDiv>
    </>
  )
}

export default ThirdSection
