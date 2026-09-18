import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

/* Approved outcome Contact CTA — Figma 8888:4414/4419/4424/4429/4434 (1440),
   8889:4414… (390) and 8889:4439… (2560). The content rail is 1200px at both
   1440 (120px gutters) and 2560 (centred), so one max-width handles both. */

const Section = styled.section`
  box-sizing: border-box;
  width: 100%;
  background-color: #000000;
  padding: 48px 20px;

  @media only screen and (min-width: 1024px) {
    padding: 96px 120px;
  }
`

const Inner = styled.div`
  box-sizing: border-box;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 28px;
`

const Eyebrow = styled.p`
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #c3ff00;

  @media only screen and (min-width: 1024px) {
    line-height: 20px;
  }
`

const Headline = styled.h2`
  margin: 0;
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  color: #ffffff;
  max-width: 900px;

  @media only screen and (min-width: 1024px) {
    font-size: 48px;
    line-height: 56px;
  }
`

const Button = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: #c3ff00;
  color: #000000;
  text-decoration: none;
  padding: 18px 28px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  transition: background-color 0.2s ease, transform 0.2s ease;

  @media only screen and (min-width: 1024px) {
    line-height: 22px;
  }

  &:hover {
    background-color: #aee600;
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid #ffffff;
    outline-offset: 4px;
  }
`

const OutcomeContactCta = ({ eyebrow, headline, action }) => (
  <Section>
    <Inner>
      <Eyebrow>{eyebrow}</Eyebrow>
      <Headline>{headline}</Headline>
      <Button to="/contact">
        {action}
        <span aria-hidden="true">→</span>
      </Button>
    </Inner>
  </Section>
)

export default OutcomeContactCta
