import React from "react"
import styled from "styled-components"
import DesktopSwPage2 from "./desktopswpage2"
import MobileSwPage2 from "./mobileswpage2"

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

const SoftwarePage2 = () => {
  return (
    <div>
      <DesktopDiv>
        <DesktopSwPage2 />
      </DesktopDiv>
      <MobDiv>
        <MobileSwPage2 />
      </MobDiv>
    </div>
  )
}

export default SoftwarePage2
