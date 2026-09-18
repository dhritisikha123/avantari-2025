import React from "react"
import styled from "styled-components"
import DesktopAiPage2 from "./desktopaipage2"
import MobileAiPage2 from "./mobileaipage2"

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

const AiPage2 = () => {
  return (
    <div>
      <DesktopDiv>
        <DesktopAiPage2 />
      </DesktopDiv>
      <MobDiv>
        <MobileAiPage2 />
      </MobDiv>
    </div>
  )
}

export default AiPage2
