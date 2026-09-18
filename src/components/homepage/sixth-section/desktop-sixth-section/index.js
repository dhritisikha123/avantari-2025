import React from "react"
import styled from "styled-components"

const SixthText = styled.p`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 19px; /* Initial font size */
  line-height: 25px; /* Adjusted line-height for compact text */
  color: #4d4d4d;
  text-align: center;
  margin: 0 auto;
  width: 280px;
  padding-bottom: 10px;
  @media only screen and (max-width: 991px) {
    font-size: 16px; /* Further reduce font size for mobile */
    line-height: 21px; /* Slightly more line spacing for small screens */
    width: 170px;
  }
`

const SixthTextSpan = styled.span`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px; /* Initial font size */
  line-height: 17px; /* Adjusted line-height for compact text */
  color: #4d4d4d;
  text-align: center;
  margin: 0 auto;
`

const SixthTitle = styled.p`
  font-family: "Outfit", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px; /* Initial font size */
  line-height: 24px; /* Adjusted line-height for compact text */
  color: #000000;
  text-align: center;
  margin: 0 auto;
  padding-bottom: 32px;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Three equal columns */
  height: 100%;
`

const GridContainerItem = styled.div`
  text-align: center;
  position: relative;
`

const DesktopSixthSection = () => {
  return (
    <>
      <SixthTitle>Our take on the future of tech</SixthTitle>
      <GridContainer>
        <GridContainerItem>
          <div>
            <SixthText>
              Some interesting blog title about tech and stuff
            </SixthText>
            <SixthTextSpan>12/12/23</SixthTextSpan>
          </div>
        </GridContainerItem>
        <GridContainerItem>
          <div>
            <SixthText>
              Some interesting blog title about tech and stuff
            </SixthText>
            <SixthTextSpan>12/12/23</SixthTextSpan>
          </div>
        </GridContainerItem>
        <GridContainerItem>
          <div>
            <SixthText>
              Some interesting blog title about tech and stuff
            </SixthText>
            <SixthTextSpan>12/12/23</SixthTextSpan>
          </div>
        </GridContainerItem>
      </GridContainer>
    </>
  )
}

export default DesktopSixthSection
