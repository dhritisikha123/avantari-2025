import React from "react"
import styled from "styled-components"
import DesktopSwPage3 from "./desktopswipage3"
import MobileSwPage3 from "./mobileswpage3"

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

const SoftwarePage3 = () => {
  return (
    <div>
      <DesktopDiv>
        <DesktopSwPage3 />
      </DesktopDiv>
      <MobDiv>
        <MobileSwPage3 />
      </MobDiv>
    </div>
  )
}

export default SoftwarePage3
