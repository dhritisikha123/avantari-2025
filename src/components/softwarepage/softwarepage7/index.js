import React from "react"
import "./sw7.css"
import styled from "styled-components"
import { navigate } from "gatsby"
import sw1 from "../../../images/newWeb/svg/sw1.svg"
import sw2 from "../../../images/newWeb/svg/sw2.svg"
import sw3 from "../../../images/newWeb/svg/sw3.svg"

const FirstDiv = styled.div`
  position: relative; /* Ensures the div is positioned relative to the viewport */
  height: 100vh; /* 100% of the viewport height */
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;
`
const SecondDiv = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  @media only screen and (max-width: 567px) {
    position: relative;
  }
  width: 100%;
  margin: 0 auto;
  text-align: center;
`

const SecondTitle1 = styled.h2`
  font-family: "Outfit", serif;
  font-style: normal;
  font-weight: 500;
  font-size: 32px; /* Initial font size */
  color: #000000;
  text-align: center;
  margin: 0;
  @media only screen and (max-width: 991) {
    font-size: 24px; /* Reduce font size for smaller devices */
  }
  @media only screen and (max-width: 567px) {
    font-size: 22px; /* Further reduce font size for mobile */
    font-weight: 700;
  }
  margin-bottom: 40px;
`

const SecondTitle = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px; /* Initial font size */
  color: #000000;
  text-align: center;
  margin: 0;
  margin-bottom: 10px;
`
const LastText = styled.span`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px; /* Initial font size */
  color: #4d4d4d;
  text-align: center;
  margin: 0;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0%);
  @media only screen and (max-width: 567px) {
    display: none;
  }
  @media only screen and (min-width: 568px) {
    display: block;
  }
`

const SecondText2A = styled.p`
  list-style: none; /* Removes bullets */
  padding: 0px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  width: 80%;
  @media only screen and (max-width: 1023px) {
    font-size: 14px;
    line-height: 22px;
    padding-bottom: 30px;
  }
  @media only screen and (max-width: 567px) {
    display: none;
  }
  @media only screen and (min-width: 568px) {
    display: block;
  }
  margin: 0 auto;
  color: #8c8c8c;
  text-align: center;
`

const SecondText2Amob = styled.p`
  list-style: none; /* Removes bullets */
  padding: 0px;
  @media only screen and (max-width: 567px) {
    display: block;
  }
  @media only screen and (min-width: 568px) {
    display: none;
  }
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  width: 90%;
  margin: 0 auto;
  color: #8c8c8c;
  text-align: center;
`

const SoftWarePage7 = () => {
  return (
    <FirstDiv>
      <SecondDiv>
        <SecondTitle1>Services</SecondTitle1>
        <div className="grid-containerA" style={{ marginBottom: `30px` }}>
          <div className="grid-itemA" style={{ marginBottom: `20px` }}>
            <div className="div12 hover-target">
              <div id="hwDivDesktop">
                <img src={sw1} className="hwImg" />
                <SecondTitle>User Flow</SecondTitle>
                <SecondText2A>
                  Intuitive UX via research, wireframing, interface design, usability tests for user-friendly and delightful software
                </SecondText2A>
              </div>
              <div id="hwDivMob">
                <div style={{ display: `flex`, flexDirection: `row`, alignItems: `center`, gap: `20px` }}>
                  <div>
                    <img src={sw1} className="hwImg" />
                  </div>
                  <div style={{ width: `70%` }}>
                    <SecondTitle style={{ textAlign: `left` }}>User Flow</SecondTitle>
                    <SecondText2Amob style={{ textAlign: `left`, width: `100%` }}>
                      Intuitive UX via research, wireframing, interface design, testing for user-friendly software
                    </SecondText2Amob>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-itemA" style={{ marginBottom: `20px` }}>
            <div className="div12 hover-target">
              <div id="hwDivDesktop">
                <img src={sw2} className="hwImg" />
                <SecondTitle>App Pulse</SecondTitle>
                <SecondText2A>
                  Fast native apps with Kotlin/Swift, goal planning, performance tuning, deployment for efficient mobile solutions
                  </SecondText2A>
              </div>
              <div id="hwDivMob">
                <div style={{ display: `flex`, flexDirection: `row`, alignItems: `center`, gap: `20px` }}>
                  <div>
                    <img src={sw2} className="hwImg" />
                  </div>
                  <div style={{ width: `70%` }}>
                    <SecondTitle style={{ textAlign: `left` }}>App Pulse</SecondTitle>
                    <SecondText2Amob style={{ textAlign: `left`, width: `100%` }}>
                      Fast native apps with Kotlin/Swift coding, tuning, deployment for high-quality mobile goals
                      </SecondText2Amob>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-itemA">
            <div className="div12 hover-target">
              <div id="hwDivDesktop">
                <img src={sw3} className="hwImg" />
                <SecondTitle>Web Forge</SecondTitle>
                <SecondText2A>
                  Robust web solutions with React, API development, server management for scalable, reliable digital platforms
                </SecondText2A>
              </div>
              <div id="hwDivMob">
                <div style={{ display: `flex`, flexDirection: `row`, alignItems: `center`, gap: `20px` }}>
                  <div>
                    <img src={sw3} className="hwImg" />
                  </div>
                  <div style={{ width: `70%` }}>
                    <SecondTitle style={{ textAlign: `left` }}>Web Forge</SecondTitle>
                    <SecondText2Amob style={{ textAlign: `left`, width: `100%` }}>
                      Robust web solutions with React, API design, server management for scalable, efficient sites
                    </SecondText2Amob>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SecondDiv>
      <LastText>explore our work</LastText>
    </FirstDiv>
  )
}

export default SoftWarePage7
