import React from "react"
import styled from "styled-components"

const FirstDiv = styled.div`
  position: relative;
  height: 100vh;
  background-color: #c3ff00;
  border-top: 1px solid #000;
  @media only screen and (max-width: 768px) {
    height: auto;
    padding-top: 60px;
    padding-bottom: 60px;
  }
  border-bottom: 1px solid #000000;
  @media only screen and (min-width: 1440px) {
    height: 606px;
    padding: 0 100px;
  }
`

const ChildDiv = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  text-align: center;
  width: 100%;

  @media only screen and (max-width: 768px) {
    position: static;
    transform: none;
    // padding: 0 20px;
  }
`

const Text1 = styled.p`
  font-family: "Outfit", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  text-align: center;
  margin: 0;
  padding-bottom: 7px;
  @media only screen and (max-width: 768px) {
    padding-bottom: 24px;
  }
  @media only screen and (max-width: 567px) {
    font-size: 10px;
    line-height: 15px;
  }
`

const Text2 = styled.a`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  @media only screen and (max-width: 567px) {
    font-size: 13px;
    line-height: 20px;
  }
  color: #4d4d4d;
  text-align: center;
  margin: 0;
  text-decoration: none;
  &:hover {
    color: #000000;
  }
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: center; /* Centers items horizontally */
  align-items: center; /* Centers items vertically */
  gap: 30px; /* Adds space between items */
  flex-wrap: wrap; /* Allows wrapping of flex items */

  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    column-gap: 20px;
    row-gap: 40px;
  }
`

const FlexContainer2 = styled.div`
  display: flex;
  justify-content: center; /* Centers items horizontally */
  align-items: center; /* Centers items vertically */
  gap: 30px; /* Adds space between items */
  flex-wrap: wrap; /* Allows wrapping of flex items */

  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    column-gap: 20px;
    row-gap: 40px;

    /* Odd item count — center the trailing one across both columns */
    > *:last-child:nth-child(odd) {
      grid-column: 1 / -1;
    }
  }
`

const ParaDiv = styled.div`
  margin-top: 30px;
  @media only screen and (max-width: 768px) {
    margin-top: 60px;
  }
`

const FifthSection = () => {
  return (
    <FirstDiv>
      <ChildDiv>
        <>
          <Text1>Let’s start building</Text1>
          <Text2 href="mailto:comms@avantari.org" className="hover-target">
            comms@avantari.org
          </Text2>
        </>
        <ParaDiv>
          <Text1>Follow us</Text1>
          <FlexContainer>
            <Text2
              href="https://www.youtube.com/@avantaritechnologies4510"
              target="_blank"
              className="hover-target"
            >
              Youtube
            </Text2>
            <Text2
              href="https://www.linkedin.com/company/avantari"
              target="_blank"
              className="hover-target"
            >
              LinkedIn
            </Text2>
            <Text2
              href="https://www.instagram.com/avantari"
              target="_blank"
              className="hover-target"
            >
              Instagram
            </Text2>
            <Text2
              href="https://x.com/avantarihealth?s=11"
              target="_blank"
              className="hover-target"
            >
              Twitter
            </Text2>
          </FlexContainer>
        </ParaDiv>
        <ParaDiv>
          <Text1>Read about us</Text1>
          <FlexContainer2>
            <Text2
              href="https://www.indiatoday.in/magazine/supplement/story/20160307-bhairav-shankar-flip-health-heart-fitness-monitor-avantari-technologies-733502-2016-02-23"
              target="_blank"
              className="hover-target"
            >
              India Today
            </Text2>
            <Text2
              href="https://economictimes.indiatimes.com/magazines/panache/how-this-ar-driven-project-helped-naveen-patnaik-win-odisha-assembly-polls/articleshow/69968686.cms"
              target="_blank"
              className="hover-target"
            >
              Economic Times
            </Text2>
            <Text2
              href="https://www.thehindu.com/sci-tech/technology/ar-x-ar-now-an-augmented-reality-app-for-ar-rahman/article22668397.ece"
              target="_blank"
              className="hover-target"
            >
              The Hindu
            </Text2>
            <Text2
              href="https://timesofindia.indiatimes.com/city/hyderabad/start-ups-come-up-with-innovative-solutions-to-meet-covid-challenge/articleshow/75018141.cms"
              target="_blank"
              className="hover-target"
            >
              Times of India
            </Text2>
            <Text2
              href="https://www.financialexpress.com/life/technology-dhyana-new-age-meditation-tracking-device-that-guides-you-through-effective-meditation-sessions-2104676/"
              target="_blank"
              className="hover-target"
            >
              Financial Express
            </Text2>
          </FlexContainer2>
        </ParaDiv>
      </ChildDiv>
    </FirstDiv>
  )
}

export default FifthSection
