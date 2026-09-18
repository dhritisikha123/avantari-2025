import React from "react"
import styled from "styled-components"
import DesktopHardwarepage5 from "./desktophardwarepage5"
import MobileHardwarepage5 from "./mobilehardwarepage5"

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

const HardWarePage5 = () => {
  return (
    <div>
      <DesktopDiv>
        <DesktopHardwarepage5 />
      </DesktopDiv>
      <MobDiv>
        <MobileHardwarepage5 />
      </MobDiv>
    </div>
  )
}

export default HardWarePage5
