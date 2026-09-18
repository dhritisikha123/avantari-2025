import React from "react"
import styled from "styled-components"
import DesktopAiPage3 from "./desktopaipage3"
import MobileAiPage3 from "./mobileaipage3"

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

const AiPage3 = () => {
  return (
    <div>
      <DesktopDiv>
        <DesktopAiPage3 />
      </DesktopDiv>
      <MobDiv>
        <MobileAiPage3 />
      </MobDiv>
    </div>
  )
}

export default AiPage3
