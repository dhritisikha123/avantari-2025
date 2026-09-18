import React from "react"
import "./aipage5.css"
import styled from "styled-components"
import { navigate } from "gatsby"
import aiIcon1 from "../../../images/newWeb/svg/aiIcon12.svg"
import aiIcon2 from "../../../images/newWeb/svg/aiIcon2.svg"
import aiIcon3 from "../../../images/newWeb/svg/aiIcon3.svg"

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

const AiPage5 = () => {
  return (
    <FirstDiv>
      <SecondDiv>
        <SecondTitle1>Services</SecondTitle1>
        <div className="grid-containerA" style={{ marginBottom: `30px` }}>
          <div className="grid-itemA" style={{ marginBottom: `20px` }}>
            <div className="div12 hover-target">
              <div id="hwDivDesktop">
                <img src={aiIcon1} className="hwImg" />
                <SecondTitle>Data Core</SecondTitle>
                <SecondText2A>
                  Data insights via collection, cleaning, feature engineering and augmentation for precise, scalable AI datasets with high quality
                </SecondText2A>
              </div>
              <div id="hwDivMob">
                <div style={{ display: `flex`, flexDirection: `row`, alignItems: `center`, gap: `20px` }}>
                  <div>
                    <img src={aiIcon1} className="hwImg" />
                  </div>
                  <div style={{ width: `70%` }}>
                    <SecondTitle style={{ textAlign: `left` }}>Data Core</SecondTitle>
                    <SecondText2Amob style={{ textAlign: `left`, width: `100%` }}>
                      Data to insights via collection, cleaning, feature engineering for precise, scalable AI
                    </SecondText2Amob>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-itemA" style={{ marginBottom: `20px` }}>
            <div className="div12 hover-target">
              <div id="hwDivDesktop">
                <img src={aiIcon2} className="hwImg" />
                <SecondTitle>Model Craft</SecondTitle>
                <SecondText2A>
                  ML models with algorithm selection, hyper-parameter tuning, training for optimised, high-performance AI solutions
                </SecondText2A>
              </div>
              <div id="hwDivMob">
                <div style={{ display: `flex`, flexDirection: `row`, alignItems: `center`, gap: `20px` }}>
                  <div>
                    <img src={aiIcon2} className="hwImg" />
                  </div>
                  <div style={{ width: `70%` }}>
                    <SecondTitle style={{ textAlign: `left` }}>Model Craft</SecondTitle>
                    <SecondText2Amob style={{ textAlign: `left`, width: `100%` }}>
                      ML models with algorithm selection, tuning, training for optimised, high-performance AI
                    </SecondText2Amob>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-itemA">
            <div className="div12 hover-target">
              <div id="hwDivDesktop">
                <img src={aiIcon3} className="hwImg" />
                <SecondTitle>Proof Drive</SecondTitle>
                <SecondText2A>
                  AI validation with cross-validation, performance metrics, fairness tests for robust, unbiased models meeting standards
                </SecondText2A>
              </div>
              <div id="hwDivMob">
                <div style={{ display: `flex`, flexDirection: `row`, alignItems: `center`, gap: `20px` }}>
                  <div>
                    <img src={aiIcon3} className="hwImg" />
                  </div>
                  <div style={{ width: `70%` }}>
                    <SecondTitle style={{ textAlign: `left` }}>Proof Drive</SecondTitle>
                    <SecondText2Amob style={{ textAlign: `left`, width: `100%` }}>
                      AI validation with metrics, fairness testing, ensuring robust, unbiased model standards                    </SecondText2Amob>
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

export default AiPage5
