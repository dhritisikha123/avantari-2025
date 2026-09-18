import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import seoImg from "../images/og-images/proofOfConceptOG.png"
import styled from "styled-components"

/* ------------------------------------------------------------------ */
/* Hero                                                                 */
/* ------------------------------------------------------------------ */

const HeroSection = styled.section`
  box-sizing: border-box;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  overflow-x: hidden;
  background-color: #edeeee;
  display: grid;
  grid-template-columns: 190fr 170fr;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  @media only screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`

const HeroContent = styled.div`
  padding: 72px 60px 72px 120px;
  margin: auto;

  @media only screen and (max-width: 1023px) {
    padding: 50px 40px 30px;
  }

  @media only screen and (max-width: 768px) {
    padding: 40px 20px 30px;
    order: 0;
  }
`

const HeroImage = styled.div`
  min-height: 560px;
  background-color: #d9d9d9;
  border: 1px solid #3d3d3d;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    filter: grayscale(1) contrast(1.05);
  }

  @media only screen and (max-width: 1023px) {
    min-height: 380px;
  }

  @media only screen and (max-width: 768px) {
    min-height: 260px;
  }
`

const Eyebrow = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #597500;
  margin: 0 0 24px 0;
`

const HeroTitle = styled.h1`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 56px;
  line-height: 64px;
  color: #000000;
  margin: 0;
  max-width: 580px;

  @media only screen and (max-width: 1023px) {
    font-size: 36px;
    line-height: 44px;
  }
`

const HeroBody = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #1f1f1f;
  margin: 20px 0 0 0;
  max-width: 460px;

  @media only screen and (max-width: 1023px) {
    font-size: 14px;
    line-height: 22px;
  }
`

/* ------------------------------------------------------------------ */
/* What it is / Why it matters                                         */
/* ------------------------------------------------------------------ */

const InfoBand = styled.section`
  box-sizing: border-box;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;

  @media only screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`

const InfoPanel = styled.div`
  background-color: ${({ $accent }) => ($accent ? "#c3ff00" : "#edeeee")};
  border-left: ${({ $accent }) => ($accent ? "none" : "1px solid #000000")};
  padding: ${({ $accent }) =>
    $accent ? "72px 72px 72px 120px" : "72px 120px 72px 72px"};

  @media only screen and (max-width: 1023px) {
    border-left: none;
    padding: 45px 40px;
  }

  @media only screen and (max-width: 768px) {
    padding: 35px 20px;
  }
`

const InfoLabel = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #597500;
  margin: 0 0 16px 0;

  /* the lime "WHAT IT IS" panel switches this label to a darker green on
     mobile; "WHY IT MATTERS" keeps #597500 at every width */
  @media only screen and (max-width: 1023px) {
    color: ${({ $accent }) => ($accent ? "#1c2900" : "#597500")};
  }
`

const InfoTitle = styled.h2`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 42px;
  color: #000000;
  margin: 0;
  max-width: 480px;

  @media only screen and (max-width: 1023px) {
    font-size: 26px;
    line-height: 32px;
  }
`

const InfoText = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #1a1a1a;
  margin: 0;
  max-width: 480px;

  @media only screen and (max-width: 1023px) {
    font-size: 16px;
    line-height: 24px;
  }
`

/* ------------------------------------------------------------------ */
/* Services                                                             */
/* ------------------------------------------------------------------ */

const ServicesSection = styled.section`
  box-sizing: border-box;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  background-color: #f4f4f0;
  padding: 60px;

  @media only screen and (min-width: 1440px) {
    padding: 72px 120px;
  }

  @media only screen and (max-width: 1023px) {
    padding: 45px 40px;
  }

  @media only screen and (max-width: 768px) {
    padding: 35px 20px;
  }
`

const DarkEyebrow = styled(Eyebrow)`
  color: #496400;
`

const ServicesTitle = styled.h2`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #0e0e0e;
  margin: 0 0 48px 0;

  @media only screen and (max-width: 1023px) {
    font-size: 28px;
    line-height: 36px;
    margin: 0 0 35px 0;
  }
`

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 24px;

  @media only screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
    row-gap: 24px;
  }
`

const ServiceColumn = styled.div`
  background-color: #ffffff;
  border: 1px solid rgba(14, 14, 14, 0.14);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const ServiceDivider = styled.div`
  width: 64px;
  height: 4px;
  background-color: #a8ff00;
`

const ServiceLabel = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #496400;
  margin: 0;
`

const ServiceList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const ServiceListItem = styled.li`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #1f1f1f;
  margin: 0;

  @media only screen and (max-width: 1023px) {
    font-size: 16px;
    line-height: 24px;
  }

  &::before {
    content: "+ ";
    color: #1f1f1f;
  }
`

const services = [
  {
    id: "experience-proof",
    label: "EXPERIENCE PROOF",
    items: [
      "Concept development",
      "UX prototyping",
      "Interaction prototyping",
      "User testing",
      "Industrial design concept models",
    ],
  },
  {
    id: "technical-proof",
    label: "TECHNICAL PROOF",
    items: [
      "Electronics prototyping",
      "Sensor and actuator integration",
      "Embedded firmware development",
      "Mechanical proof-of-concept builds",
      "Test-rig development",
    ],
  },
  {
    id: "software-ai",
    label: "SOFTWARE + AI",
    items: [
      "Front-end prototypes",
      "Backend and API experiments",
      "AI and machine-learning experiments",
      "Computer vision",
      "Speech and conversational AI",
    ],
  },
]

/* ------------------------------------------------------------------ */
/* In practice — case study                                            */
/* ------------------------------------------------------------------ */

const CaseSection = styled.section`
  box-sizing: border-box;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  background-color: #c3ff00;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media only screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`

const CaseContent = styled.div`
  padding: 88px 72px 88px 120px;
  margin: auto 0;

  @media only screen and (max-width: 1023px) {
    padding: 50px 40px;
  }

  @media only screen and (max-width: 768px) {
    padding: 40px 20px;
  }
`

const CaseImage = styled.div`
  min-height: 802px;
  background-color: #d9d9d9;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media only screen and (max-width: 1023px) {
    min-height: 260px;
    order: -1;
  }
`

const CaseEyebrow = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #000000;
  margin: 0;
`

const CaseTitle = styled.h2`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #000000;
  margin: 16px 0 0 0;

  @media only screen and (max-width: 1023px) {
    font-size: 28px;
    line-height: 36px;
  }
`

const CaseSubtitle = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #000000;
  margin: 20px 0 0 0;
  max-width: 480px;

  @media only screen and (max-width: 1023px) {
    font-size: 14px;
    line-height: 22px;
  }
`

const CaseTags = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #7fa800;
  margin: 16px 0 0 0;
`

const CaseDivider = styled.div`
  height: 2px;
  background-color: #000000;
  margin: 22px 0;
`

const CaseQuote = styled.h3`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  color: #000000;
  margin: 0 0 8px 0;
  max-width: 620px;

  @media only screen and (max-width: 567px) {
    font-size: 22px;
    line-height: 28px;
  }
`

const CaseRow = styled.div`
  display: flex;
  gap: 24px;
  padding: 16px 0;
  border-top: 1px solid #a6d900;

  &:last-of-type {
    border-bottom: 1px solid #a6d900;
  }

  @media only screen and (max-width: 567px) {
    flex-direction: column;
    gap: 4px;
  }
`

const CaseRowLabel = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #000000;
  width: 168px;
  flex-shrink: 0;
  margin: 0;

  @media only screen and (max-width: 567px) {
    width: 100%;
    line-height: 18px;
  }
`

const CaseRowText = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  color: #000000;
  margin: 0;
`

const CaseCTA = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #000000;
  color: #c3ff00;
  text-decoration: none;
  padding: 22px 28px;
  margin-top: 22px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  transition: 0.2s ease;

  @media only screen and (max-width: 567px) {
    padding: 18px 20px;
  }

  &:hover {
    opacity: 0.85;
  }
`

const caseStudy = {
  eyebrow: "In practice",
  title: "HoloBot",
  subtitle:
    "A holographic display built to make a digital human feel present in the room.",
  tags: "Hardware + AI  ·  Proof of Concept",
  quote: "The first prototype started with an LCD we were willing to destroy.",
  rows: [
    {
      label: "Assumption",
      text: "A stripped display could be reconfigured into a convincing holographic illusion.",
    },
    {
      label: "Test",
      text: "We opened an LCD, rebuilt its optical stack and tested sightlines, scale and brightness.",
    },
    {
      label: "Evidence",
      text: "The rough rig proved the visual principle before we built the enclosure or digital human.",
    },
  ],
  ctaLabel: "Read the HoloBot story",
  ctaLink: "/holobot",
  image:
    "https://darkslategray-salmon-190399.hostingersite.com/holobotEvidence.png",
}

/* ------------------------------------------------------------------ */
/* Bottom nav                                                           */
/* ------------------------------------------------------------------ */

const NavSection = styled.section`
  box-sizing: border-box;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  background-color: #edeeee;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 60px;

  @media only screen and (min-width: 1440px) {
    padding: 70px 100px;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
    padding: 40px 20px;
  }
`

const NavBlock = styled.div`
  text-align: ${({ $right }) => ($right ? "right" : "left")};

  @media only screen and (max-width: 768px) {
    text-align: left;
  }
`

const NavLabel = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #597500;
  margin: 0 0 10px 0;
`

const NavLink = styled(Link)`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  color: #000000;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: 567px) {
    font-size: 26px;
    line-height: 32px;
  }
`

const SectionMob = styled.div`
  margin-top: 64px;

  @media only screen and (min-width: 769px) and (max-width: 1023px) {
    margin-top: 70px;
  }

  @media only screen and (min-width: 1024px) {
    margin-top: 88px;
  }
`

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

const ProofOfConcept = () => {
  return (
    <Layout>
      <SectionMob>
        <HeroSection>
          <HeroContent>
            <Eyebrow>PROOF OF CONCEPT</Eyebrow>
            <HeroTitle>
              Prove the hard part before you bet on the whole thing.
            </HeroTitle>
            <HeroBody>
              A proof of concept isolates the assumption that could make or
              break the product and tests it with the smallest honest
              experiment. It replaces enthusiasm with evidence.
            </HeroBody>
          </HeroContent>
          <HeroImage>
            <img
              src="https://darkslategray-salmon-190399.hostingersite.com/proofOfConcept.png"
              alt="Proof of concept workbench"
            />
          </HeroImage>
        </HeroSection>

        <InfoBand>
          <InfoPanel $accent>
            <InfoLabel $accent>WHAT IT IS</InfoLabel>
            <InfoTitle>
              A focused experiment—not a miniature finished product.
            </InfoTitle>
          </InfoPanel>
          <InfoPanel>
            <InfoLabel>WHY IT MATTERS</InfoLabel>
            <InfoText>
              It prevents teams from polishing the easy parts while the central
              technical or experiential risk remains unanswered. Strong evidence
              gives the next investment a reason to exist.
            </InfoText>
          </InfoPanel>
        </InfoBand>

        <div style={{ backgroundColor: `#f4f4f0` }}>
          <ServicesSection>
            <DarkEyebrow>SERVICES</DarkEyebrow>
            <ServicesTitle>Building the proof of concept.</ServicesTitle>
            <ServicesGrid>
              {services.map(group => (
                <ServiceColumn key={group.id}>
                  <ServiceDivider />
                  <ServiceLabel>{group.label}</ServiceLabel>
                  <ServiceList>
                    {group.items.map(item => (
                      <ServiceListItem key={item}>{item}</ServiceListItem>
                    ))}
                  </ServiceList>
                </ServiceColumn>
              ))}
            </ServicesGrid>
          </ServicesSection>
        </div>

        <CaseSection>
          <CaseContent>
            <CaseEyebrow>{caseStudy.eyebrow}</CaseEyebrow>
            <CaseTitle>{caseStudy.title}</CaseTitle>
            <CaseSubtitle>{caseStudy.subtitle}</CaseSubtitle>
            <CaseTags>{caseStudy.tags}</CaseTags>
            <CaseDivider />
            <CaseQuote>{caseStudy.quote}</CaseQuote>
            {caseStudy.rows.map(row => (
              <CaseRow key={row.label}>
                <CaseRowLabel>{row.label}</CaseRowLabel>
                <CaseRowText>{row.text}</CaseRowText>
              </CaseRow>
            ))}
            <CaseCTA to={caseStudy.ctaLink}>
              {caseStudy.ctaLabel}
              <span>→</span>
            </CaseCTA>
          </CaseContent>
          <CaseImage>
            <img src={caseStudy.image} alt={caseStudy.title} />
          </CaseImage>
        </CaseSection>

        <NavSection>
          <NavBlock>
            <NavLabel>Previous outcome / 01</NavLabel>
            <NavLink to="/product-brief-development-roadmap">
              Product Brief + Roadmap ←
            </NavLink>
          </NavBlock>
          <NavBlock>
            <NavLabel>Back to capabilities</NavLabel>
            <NavLink to="/capabilities">See the whole process ↑</NavLink>
          </NavBlock>
          <NavBlock $right>
            <NavLabel>Next outcome / 03</NavLabel>
            <NavLink to="/integrated-prototype">
              Integrated Working Prototype →
            </NavLink>
          </NavBlock>
        </NavSection>
      </SectionMob>
    </Layout>
  )
}

const canonicalUrl = "https://www.avantari.org/proof-of-concept"

export const Head = () => (
  <>
    <Seo
      title="Proof of Concept Development | Avantari"
      description="Avantari builds focused proofs of concept across hardware, AI and software to test the assumption that could make or break a new product."
      image={seoImg}
      url={canonicalUrl}
    />
    <meta name="robots" content="index, follow" />
  </>
)

export default ProofOfConcept
