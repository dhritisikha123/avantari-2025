import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Section = styled.section`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;

  display: flex;
  align-items: center;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Large desktops */
  @media (min-width: 1440px) {
    height: 720px;
  }

  /* Mobile */
  @media (max-width: 768px) {
    height: auto;
    padding: 48px 0;
    align-items: flex-start;
  }
`

const SubSection = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 50px;

  @media (max-width: 1200px) {
    padding: 0 80px;
  }

  @media (max-width: 992px) {
    padding: 0 50px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`

const Grid = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;

  @media (max-width: 1200px) {
    gap: 60px;
  }

  @media (max-width: 992px) {
    gap: 40px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 50px;
    align-items: flex-start;
  }
`

/* Left Column */

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`

const Eyebrow = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #000000;
  margin: 0;
  @media only screen and (min-width: 1440px) {
    font-size: 13px;
  }
    @media only screen and (max-width: 567px) {
    font-size: 13px;
  }
`

const Title = styled.h2`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  color: #000000;
  margin: 0;
  padding-top: 8px;

  @media only screen and (max-width: 1023px) {
    font-size: 30px;
    line-height: 38px;
  }

  @media only screen and (max-width: 567px) {
    font-size: 32px;
     line-height: 40px;
  }
`

const Description = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #1f1f1f;
  margin: 0;
  padding-top: 16px;
  padding-bottom: 16px;
   @media only screen and (max-width: 567px) {
    font-size: 14px;
     line-height: 22px;
  }
`

const ExploreButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: 48px;
  padding: 0 36px;
  border: none;
  background: #c3ff00;
  cursor: pointer;
  text-decoration: none;

  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #000;

  transition: all 0.2s ease;

  &:hover {
    background: #aee600;
    transform: translateY(-2px);
  }
`

/* Right Column */

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`

const CapabilityItem = styled.div`
  padding: 22px 0;
  border-bottom: 1px solid #d9d9d9;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    border-bottom: none;
  }
`

const CapabilityLabel = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: 0.5px;
  margin: 0 0 12px;

  .category {
    color: #547300;
    font-size: 13px;
    line-height: 20px;
    text-transform: uppercase;
  }
`

const CapabilityText = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #000;
  margin: 0;
  max-width: 80%;
  @media only screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 28px;
  }

  @media (max-width: 768px) {
    max-width: 100%;

  }
     @media only screen and (max-width: 567px) {
    font-size: 16px;
     line-height: 24px;
  }
`

const capabilities = [
  {
    id: "hardware",
    number: "01",
    category: "Hardware",
    text: "We design the product’s physical form, engineer its electronics and take it into production",
  },
  {
    id: "intelligence",
    number: "02",
    category: "Intelligence",
    text: "We develop and integrate the AI systems that enable the product to understand, decide and respond.",
  },
  {
    id: "software",
    number: "03",
    category: "Software",
    text: "We build the apps, platforms and interfaces that connect the product with its users",
  },
]

const SecondSectionTwo = () => {
  return (
    <Section>
      <SubSection>
        <Grid>
          <LeftColumn>
            <Eyebrow>Capabilities</Eyebrow>

            <Title>Everything the product needs, in the same room.</Title>

            <Description>
              Industrial design, electronics, AI and software stay together from
              the first product decision through production. No relay race. No
              lost intent.
            </Description>

            <ExploreButton to="/capabilities">
              Explore Our Capabilities →
            </ExploreButton>
          </LeftColumn>

          <RightColumn>
            {capabilities.map(item => (
              <CapabilityItem key={item.id}>
                <CapabilityLabel>
                  <span className="category">{item.category}</span>
                </CapabilityLabel>

                <CapabilityText>{item.text}</CapabilityText>
              </CapabilityItem>
            ))}
          </RightColumn>
        </Grid>

        {/*  */}
      </SubSection>
    </Section>
  )
}

export default SecondSectionTwo
