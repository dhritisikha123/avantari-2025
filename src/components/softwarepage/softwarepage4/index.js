import React from "react"
import styled from "styled-components"
import DesktopSoftwarePage4 from "./desktopswpage4"
import MobileSoftwarePage4 from "./mobileswpage4"

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

const SoftwarePage4 = () => {
  return (
    <div>
      <DesktopDiv>
        <DesktopSoftwarePage4 />
      </DesktopDiv>
      <MobDiv>
        <MobileSoftwarePage4 />
      </MobDiv>
    </div>
  )
}

export default SoftwarePage4
