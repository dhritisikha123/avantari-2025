import React from "react"
import styled from "styled-components"
import DesktopHardwarepage3 from "./desktophardwarepage3"
import MobileHardwarepage3 from "./mobilehardwarepage3"

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

const HardWarePage3 = () => {
  return (
    <div>
      <DesktopDiv>
        <DesktopHardwarepage3 />
      </DesktopDiv>
      <MobDiv>
        <MobileHardwarepage3 />
      </MobDiv>
    </div>
  )
}

export default HardWarePage3
