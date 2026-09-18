import React from "react"
import styled from "styled-components"
import DesktopHardwarepage2 from "./desktophardwarepage2"
import MobileHardwarepage2 from "./mobilehardwarepage2"

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

const HardWarePage2 = () => {
  return (
    <div>
      <DesktopDiv>
        <DesktopHardwarepage2 />
      </DesktopDiv>
      <MobDiv>
        <MobileHardwarepage2 />
      </MobDiv>
    </div>
  )
}

export default HardWarePage2
