import React from "react"
import styled from "styled-components"
import DesktopHardwarepage6 from "./desktophardwarepage6"
import MobileHardwarepage6 from "./mobilehardwarepage6"

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

const HardWarePage6 = () => {
  return (
    <div>
      <DesktopDiv>
        <DesktopHardwarepage6 />
      </DesktopDiv>
      <MobDiv>
        <MobileHardwarepage6 />
      </MobDiv>
    </div>
  )
}

export default HardWarePage6
