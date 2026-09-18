import React from "react"
import styled from "styled-components"
import Hyderabad from "../../../../images/newWeb/Hyderabad.jpg"

const FirstDiv = styled.div`
  position: relative;
  // height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const GridContainerMob = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  // grid-template-rows: 60% 40%; /* Give more space to the text */
  grid-template-columns: 1fr;
`

const GridContainerMobItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const ImageContainer = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 1px solid #000000;
`

const ContentWrapper = styled.div`
  max-width: 600px;
  padding-top: 48px;
  padding-bottom: 48px;
`

const FourthText2Mob = styled.p`
  list-style: none;
  padding: 0;
  margin: 0;

  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  @media only screen and (max-width: 567px) {
    font-size: 14px;
    line-height: 22px;
  }
  color: #4d4d4d;
`

const FourthTitleMob = styled.p`
  font-family: "Corben", serif;
  @media only screen and (max-width: 567px) {
    font-size: 22px;
    width: 350px;
  }
  width: 400px;
  font-size: 24px;
  font-weight: 400;
  line-height: 140%;
  margin-bottom: 20px;
  color: #000000;
`

const MobileFourthSection = () => {
  return (
    <FirstDiv style={{ overflowX: `hidden` }}>
      <GridContainerMob>
        <GridContainerMobItem>
          <ContentWrapper>
            <FourthTitleMob>
             Based in Hyderabad. Always ready to talk products over biryani or a beer.
            </FourthTitleMob>
            <FourthText2Mob>Hyderabad, India</FourthText2Mob>
          </ContentWrapper>
        </GridContainerMobItem>
        <GridContainerMobItem>
          <ImageContainer src={Hyderabad} alt="Hyderabad, where the Avantari studio is based" />
        </GridContainerMobItem>
      </GridContainerMob>
    </FirstDiv>
  )
}

export default MobileFourthSection
