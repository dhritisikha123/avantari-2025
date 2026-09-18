import React from "react"
import styled from "styled-components"
import DesktopHardwarepage4 from "./desktophardwarepage4"
import MobileHardwarepage4 from "./mobilehardwarepage4"

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

const HardWarePage4 = () => {
  return (
    <div>
      <DesktopDiv>
        <DesktopHardwarepage4 />
      </DesktopDiv>
      <MobDiv>
        <MobileHardwarepage4 />
      </MobDiv>
    </div>
  )
}

export default HardWarePage4
