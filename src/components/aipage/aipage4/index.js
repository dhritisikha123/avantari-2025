import React from "react"
import styled from "styled-components"
import DesktopAiPage4 from "./desktopaipage4"
import MobileAiPage4 from "./mobileaipage4"

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

const AiPage4 = () => {
  return (
    <div>
      <DesktopDiv>
        <DesktopAiPage4 />
      </DesktopDiv>
      <MobDiv>
        <MobileAiPage4 />
      </MobDiv>
    </div>
  )
}

export default AiPage4
