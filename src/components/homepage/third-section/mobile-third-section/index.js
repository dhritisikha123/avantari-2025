import React from "react"
import styled from "styled-components"
import Team from "../../../../images/newWeb/TeamMobile.png"

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
  // grid-template-rows: 40% 60%; /* Give more space to the text */
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
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;
`

const ContentWrapper = styled.div`
  max-width: 600px;
  padding-top: 48px;
  padding-bottom: 48px;
`

const FourthText2Mob = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    @media only screen and (max-width: 567px) {
      font-size: 14px;
      line-height: 22px;
    }
    color: #4d4d4d;
  }
`

const FourthTitleMob = styled.p`
  font-family: "Corben", serif;
  @media only screen and (max-width: 567px) {
    font-size: 22px;
    width: 350px;
    margin-top:0px;
  }
  width: 400px;
  font-size: 24px;
  font-weight: 400;
  line-height: 140%;
  margin-bottom: 20px;
  color: #000000;
`

const MobileThirdSection = () => {
  return (
    <FirstDiv>
      <GridContainerMob>
        <GridContainerMobItem>
          <ImageContainer src={Team} alt="The Avantari team of designers, engineers and AI scientists" />
        </GridContainerMobItem>
        <GridContainerMobItem>
          <ContentWrapper>
            <FourthTitleMob>
             Designers, engineers and AI scientists. Different disciplines, same obsession.
            </FourthTitleMob>
            <FourthText2Mob>
              <li>12 Global Patents</li>
              <li>Red Dot Winner</li>
              <li>WT World Cup Winner</li>
              <li>Indian Olympic Association Partner</li>
            </FourthText2Mob>
          </ContentWrapper>
        </GridContainerMobItem>
        
      </GridContainerMob>
    </FirstDiv>
  )
}

export default MobileThirdSection
