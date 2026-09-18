import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import seoImg from "../images/og-images/lrOG.png"
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
    id: "manufacture-launch",
    label: "MANUFACTURE + LAUNCH",
    items: [
      "Manufacturing partner sourcing",
      "Tooling and NPI management",
      "Pilot production and PVT",
      "Production quality control",
      "End-of-line testing",
      "Packaging development",
    ],
  },
  {
    id: "software-deployment",
    label: "SOFTWARE DEPLOYMENT",
    items: [
      "App and web deployment",
      "Cloud infrastructure",
      "DevOps and release management",
      "MLOps and model deployment",
      "Device provisioning",
      "Monitoring and incident support",
    ],
  },
  {
    id: "growth-improvement",
    label: "GROWTH + IMPROVEMENT",
    items: [
      "Product analytics and telemetry",
      "Post-launch user research",
      "Support-feedback integration",
      "Product iteration",
      "Value engineering and cost reduction",
      "Production scaling",
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
  title: "Neo 1",
  subtitle:
    "A neck-worn AI wearable engineered and manufactured entirely in India.",
  tags: "Hardware + AI  ·  Manufacturing  ·  India",
  quote: "Designed here. Tooled here. Built here.",
  rows: [
    {
      label: "Manufacturing",
      text: "Neo 1 moved through tooling, electronics, enclosure and assembly with Indian partners.",
    },
    {
      label: "Supply Chain",
      text: "Vendors, quality checks and build dependencies were coordinated as one production system.",
    },
    {
      label: "Production",
      text: "The result was a complex connected product manufactured entirely in India and ready to ship.",
    },
  ],
  ctaLabel: "Read the Neo 1 story",
  ctaLink: "/neosapian",
  image:
    "https://darkslategray-salmon-190399.hostingersite.com/neoEvidence.png",
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
  font-size: 24px;
  line-height: 30px;
  color: #000000;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: 567px) {
    font-size: 20px;
    line-height: 26px;
  }
`

/* Last outcome in the sequence: no "next outcome" link, just a terminal CTA */
const NavCTABlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;

  @media only screen and (max-width: 768px) {
    align-items: flex-start;
  }
`

const NavCTABar = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background-color: #000000;
  color: #c3ff00;
  text-decoration: none;
  padding: 18px 24px;
  width: 100%;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  transition: 0.2s ease;

  &:hover {
    opacity: 0.85;
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

const LaunchReadiness = () => {
  return (
    <Layout>
      <SectionMob>
        <HeroSection>
          <HeroContent>
            <Eyebrow>READY TO SHIP, SCALE + IMPROVE</Eyebrow>
            <HeroTitle>
              Make it ready to ship and ready for what comes next.
            </HeroTitle>
            <HeroBody>
              A launch-ready product joins the final build, production,
              deployment, content, quality assurance, support and measurement
              into one repeatable operation.
            </HeroBody>
          </HeroContent>
          <HeroImage>
            <img
              src="https://darkslategray-salmon-190399.hostingersite.com/launchReadiness.png"
              alt="Finished product ready for launch"
            />
          </HeroImage>
        </HeroSection>

        <InfoBand>
          <InfoPanel $accent>
            <InfoLabel $accent>WHAT IT IS</InfoLabel>
            <InfoTitle>
              The product and the operation that keeps it alive.
            </InfoTitle>
          </InfoPanel>
          <InfoPanel>
            <InfoLabel>WHY IT MATTERS</InfoLabel>
            <InfoText>
              Shipping once proves little. Readiness means the experience can
              be deployed consistently, supported in the real world and
              improved with evidence after launch.
            </InfoText>
          </InfoPanel>
        </InfoBand>

        <div style={{ backgroundColor: `#f4f4f0` }}>
          <ServicesSection>
            <DarkEyebrow>SERVICES</DarkEyebrow>
            <ServicesTitle>Turning the product into a repeatable operation.</ServicesTitle>
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
            <NavLabel>Previous outcome / 04</NavLabel>
            <NavLink to="/product-validation">
              Validated Production-Ready Design ←
            </NavLink>
          </NavBlock>
          <NavBlock>
            <NavLabel>Back to capabilities</NavLabel>
            <NavLink to="/capabilities">See the whole process ↑</NavLink>
          </NavBlock>
          <NavCTABlock>
            <NavLabel>Ready to build yours?</NavLabel>
            <NavCTABar to="/contact">
              Start a product
              <span>→</span>
            </NavCTABar>
          </NavCTABlock>
        </NavSection>
      </SectionMob>
    </Layout>
  )
}

const canonicalUrl = "https://www.avantari.org/launch-readiness"

export const Head = () => (
  <>
    <Seo
      title="Product Manufacturing & Launch Readiness | Avantari"
      description="Move from validated design to launch with manufacturing partners, tooling, pilot production, software deployment, quality control and scaling."
      image={seoImg}
      url={canonicalUrl}
    />
    <meta name="robots" content="index, follow" />
  </>
)

export default LaunchReadiness
