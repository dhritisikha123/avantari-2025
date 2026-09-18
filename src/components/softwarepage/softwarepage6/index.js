import React from "react"
import styled from "styled-components"
import DesktopSwPage6 from "./desktopswpage6"
import MobileSwPage6 from "./mobileswpage6"

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

const SoftwarePage6 = () => {
  return (
    <div>
      <DesktopDiv>
        <DesktopSwPage6 />
      </DesktopDiv>
      <MobDiv>
        <MobileSwPage6 />
      </MobDiv>
    </div>
  )
}

export default SoftwarePage6
