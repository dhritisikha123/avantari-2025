import React from "react"
import styled from "styled-components"
import DeskTopSwPage5 from "./desktopswpage5"
import MobileSwPage5 from "./mobileswpage5"

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

const SoftwarePage5 = () => {
  return (
    <div>
      <DesktopDiv>
        <DeskTopSwPage5 />
      </DesktopDiv>
      <MobDiv>
        <MobileSwPage5 />
      </MobDiv>
    </div>
  )
}

export default SoftwarePage5
