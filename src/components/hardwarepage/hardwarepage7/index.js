import React from "react"
import "./hw7.css"
import styled from "styled-components"
import { navigate } from "gatsby"
import hw1 from "../../../images/newWeb/svg/hw1.svg"
import hw2 from "../../../images/newWeb/svg/hw2.svg"
import hw3 from "../../../images/newWeb/svg/hw3.svg"

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

const HardWarePage7 = () => {
  return (
    <FirstDiv>
      <SecondDiv>
        <SecondTitle1>Services</SecondTitle1>
        <div className="grid-containerA" style={{ marginBottom: `30px` }}>
          <div className="grid-itemA" style={{ marginBottom: `20px` }  }>
            <div className="div12 hover-target">
              <div id="hwDivDesktop">
                <img src={hw1} className="hwImg" />
                <SecondTitle>PCB Expertise</SecondTitle>
                <SecondText2A>
                  High-speed, multi-layer PCBs for defence, medical, IoT, AI, optimised for battery, signal integrity, thermal stability
                </SecondText2A>
              </div>
              <div id="hwDivMob">
                <div style={{ display: `flex`, flexDirection: `row`, alignItems: `center`, gap: `20px` }}>
                  <div>
                    <img src={hw1} className="hwImg" />
                  </div>
                  <div style={{ width: `70%` }}>
                    <SecondTitle style={{ textAlign: `left` }}>PCB Expertise</SecondTitle>
                    <SecondText2Amob style={{ textAlign: `left`, width: `100%` }}>
                      Multi-layer & high-speed PCBs for defence, medical, IoT, AI, with signal integrity, thermal stability
                    </SecondText2Amob>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-itemA" style={{ marginBottom: `20px` }  }>
            <div className="div12 hover-target">
              <div id="hwDivDesktop">
                <img src={hw2} className="hwImg" />
                <SecondTitle>Design Precision</SecondTitle>
                <SecondText2A>
                  Award-winning hardware with CAD, DFM/DFA, 3D rendering, simulations for cost-effective, reliable prototyping                </SecondText2A>
              </div>
              <div id="hwDivMob">
                <div style={{ display: `flex`, flexDirection: `row`, alignItems: `center`, gap: `20px` }}>
                  <div>
                    <img src={hw2} className="hwImg" />
                  </div>
                  <div style={{ width: `70%` }}>
                    <SecondTitle style={{ textAlign: `left` }}>Design Precision</SecondTitle>
                    <SecondText2Amob style={{ textAlign: `left`, width: `100%` }}>
                      Award-winning product design with CAD, DFM/DFA, 3D rendering and cost-effective prototyping                    </SecondText2Amob>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-itemA">
            <div className="div12 hover-target">
              <div id="hwDivDesktop">
                <img src={hw3} className="hwImg" />
                <SecondTitle>Code Craft</SecondTitle>
                <SecondText2A>
                  Embedded software for low-power devices, with firmware, AI automation, algorithm design, and system integration                </SecondText2A>
              </div>
              <div id="hwDivMob">
                <div style={{ display: `flex`, flexDirection: `row`, alignItems: `center`, gap: `20px` }}>
                  <div>
                    <img src={hw3} className="hwImg" />
                  </div>
                  <div style={{ width: `70%` }}>
                    <SecondTitle style={{ textAlign: `left` }}>Code Craft</SecondTitle>
                    <SecondText2Amob style={{ textAlign: `left`, width: `100%` }}>
                      Efficient embedded software, firmware, algorithm design for low-power device intelligence                    </SecondText2Amob>
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

export default HardWarePage7
