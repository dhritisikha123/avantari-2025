import React from "react"
import styled from "styled-components"
import sw5 from "../../../../images/newWeb/software/sw5.png"
import { navigate } from "gatsby"

const FirstDiv = styled.div`
  position: relative;
  // height: 100vh;
  @media only screen and (max-width: 991px) {
    // height: 426px;
  }
  @media only screen and (max-width: 768px) {
    // height: 100vh;
  }
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100%; /* Ensure the grid takes the full height */
  @media (max-width: 768px) {
    grid-template-rows: auto;
    grid-template-columns: 1fr;
  }
  border: 1px solid #000000;
  border-right: none;
`

const GridContainerItem = styled.div`
  text-align: center;
  position: relative;
  div {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
  }
`

const ImageContainer = styled.img`
  width: 100%; /* Ensure image covers the width */
  height: 100%; /* Ensure image fills the container */
  object-fit: cover; /* Ensures the image covers the space without distortion */
  border-left: 1px solid #000000;
`

const FourthText2 = styled.p`
  padding: 0px;
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  padding-bottom: 5px;
  @media only screen and (max-width: 1023px) {
    font-size: 14px;
    line-height: 23px;
  }
  color: #8c8c8c;
  text-align: center;
`

const FourthTitle = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-size: 1.875em;
  font-weight: 500;
  line-height: 120%;
  margin: 0 auto;
  padding-bottom: 30px;
  @media only screen and (min-width: 1024px) and (max-width: 1365px) {
    font-size: 28px; /* Adjust font size for smaller screens */
  }
  @media only screen and (max-width: 1023px) {
    font-size: 22px;
  }
  color: #000000;
`

const DesktopSwPage6 = () => {
  const handleClickSW6desk = () => {
    navigate("/ar-ar")
  }
  return (
    <FirstDiv>
      <GridContainer>
        <GridContainerItem>
          <div className="hover-target" onClick={handleClickSW6desk}>
            <FourthTitle>ARxAR</FourthTitle>
            <FourthText2>
              We revolutionised fan interaction with AR Rahman, who appeared in
              life-size augmented reality. With 1M+ downloads and 5-star reviews
              it left a lasting mark on tech and music.
            </FourthText2>
          </div>
        </GridContainerItem>
        <GridContainerItem style={{ gridColumn: "span 2" }}>
          <ImageContainer
            src={sw5}
            alt="Descriptive Alt Text"
            className="hover-target"
            onClick={handleClickSW6desk}
          />
        </GridContainerItem>
      </GridContainer>
    </FirstDiv>
  )
}

export default DesktopSwPage6
