import React from "react"
import styled from "styled-components"
import sw2 from "../../../../images/newWeb/software/sw2.png"
import { navigate } from "gatsby"

const FirstDiv = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const GridContainerMob = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-rows: 60% 40%; /* Give more space to the text */
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
`

const ContentWrapper = styled.div`
  max-width: 600px;
`

const HardWarePojectTextMob = styled.p`
  list-style: none; /* Removes bullets */
  padding: 0px;
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 25px;
  padding-bottom: 5px;
  color: #8c8c8c;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
`

const HardWarePojectTitleMob = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-size: 22px;
  font-weight: 500;
  line-height: 120%;
  margin: 0 auto;
  padding-bottom: 30px;
  color: #000000;
`

const MobileSwPage3 = () => {
  const handleClickSw2Mob = () => {
    navigate("/mo-naveen-mo-ghare")
  }
  return (
    <FirstDiv style={{ overflowX: `hidden` }}>
      <GridContainerMob>
        <GridContainerMobItem
          style={{
            borderTop: `1px solid #000000`,
            borderBottom: `1px solid #000000`,
          }}
        >
          <ImageContainer
            src={sw2}
            alt="Descriptive Alt Text"
            onClick={handleClickSw2Mob}
          />
        </GridContainerMobItem>
        <GridContainerMobItem>
          <ContentWrapper onClick={handleClickSw2Mob}>
            <HardWarePojectTitleMob>Mo Naveen, Mo Ghare</HardWarePojectTitleMob>
            <HardWarePojectTextMob>
              We helped Odisha CM Naveen Patnaik connect with voters through AR
              holograms, by visiting 2.5M homes, and giving them an autographed
              selfie of the family with the CM.
            </HardWarePojectTextMob>
          </ContentWrapper>
        </GridContainerMobItem>
      </GridContainerMob>
    </FirstDiv>
  )
}

export default MobileSwPage3
