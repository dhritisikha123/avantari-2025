import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import capabilitiesOG from "../images/og-images/capabilitiesOG.png"


const canonicalUrl = "https://www.avantari.org/capabilities"

export const Head = () => (
  <>
    <Seo
      title="Hardware, Firmware, AI & Manufacturing Support | Avantari"
      description="One team across industrial design, electronics, firmware, AI, software, validation, and manufacturing support. No vendor handoffs in the middle of the product."
      url={canonicalUrl}
      image={capabilitiesOG}
    />
    <meta name="robots" content="index, follow" />
  </>
)

const PageWrapper = styled.div`
  margin-top: 64px;

  @media only screen and (min-width: 769px) and (max-width: 1023px) {
    margin-top: 70px;
  }

  @media only screen and (min-width: 1024px) {
    margin-top: 88px;
  }
`

/* ------------------------------------------------------------------ */
/* Hero                                                                 */
/* ------------------------------------------------------------------ */

const HeroSection = styled.section`
  box-sizing: border-box;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  padding: 70px 60px 60px;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  @media only screen and (min-width: 1440px) {
    padding: 68px 120px;
  }

  @media only screen and (max-width: 1023px) {
    padding: 50px 40px;
  }

  @media only screen and (max-width: 768px) {
    padding: 48px 20px;
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
  color: ${({ $color }) => $color || "#000000"};
  margin: 0;
  padding-bottom: 20px;
  @media only screen and (max-width: 567px) {
    line-height: 18px;
    padding-bottom: 16px;
  }
`

const HeroTitle = styled.h1`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 68px;
  line-height: 76px;
  color: #000000;
  margin: 0;
  max-width: 1100px;
  padding-bottom: 40px;

  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    font-size: 56px;
    line-height: 64px;
  }

  @media only screen and (max-width: 1023px) {
    font-size: 40px;
    line-height: 48px;
  }
`

const StrategyRow = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #383838;
  margin: 28px 0 0 0;

  @media only screen and (max-width: 567px) {
    line-height: 18px;
  }

  span.dot {
    margin: 0 10px;
  }
`

/* ------------------------------------------------------------------ */
/* Support band (green)                                                */
/* ------------------------------------------------------------------ */

const SupportBand = styled.section`
  box-sizing: border-box;
  width: 100%;
  background-color: #c3ff00;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 60px;
  padding: 60px;

  @media only screen and (min-width: 1440px) {
    padding: 56px 120px;
  }

  @media only screen and (max-width: 1023px) {
    flex-direction: column;
    gap: 24px;
    padding: 45px 40px;
  }

  @media only screen and (max-width: 768px) {
    padding: 35px 20px;
  }
`

const SupportTitle = styled.h2`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #000000;
  margin: 0;
  max-width: 620px;

  @media only screen and (max-width: 1023px) {
    font-size: 28px;
    line-height: 36px;
  }
`

const SupportText = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #141414;
  margin: 6px 0 0 0;
  max-width: 530px;

  @media only screen and (max-width: 1023px) {
    font-size: 14px;
    line-height: 22px;
  }
`

/* ------------------------------------------------------------------ */
/* Stage rows                                                          */
/* ------------------------------------------------------------------ */

const StageWrapper = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr;
  // padding: 0 60px;

  @media only screen and (min-width: 1440px) {
    padding: 0 100px;
  }

  @media only screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
    // padding: 0 40px;
  }

  @media only screen and (max-width: 768px) {
    // padding: 0 20px;
  }
`

const StageImage = styled.div`
  order: ${({ $imageLeft }) => ($imageLeft ? 0 : 1)};
  aspect-ratio: 1 / 1;
  background-color: #dbdbd4;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media only screen and (max-width: 1023px) {
    order: 0;
  }
`

const StageContent = styled.div`
  order: ${({ $imageLeft }) => ($imageLeft ? 1 : 0)};
  background-color: #000000;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 72px;

  @media only screen and (min-width: 1440px) {
    padding: 90px 100px;
  }

  @media only screen and (max-width: 1023px) {
    order: 1;
    padding: 45px 40px;
  }

  @media only screen and (max-width: 768px) {
    padding: 40px 20px;
  }
`

const StageLabel = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #c3ff00;
  margin: 0 0 20px 0;

  @media only screen and (max-width: 768px) {
    line-height: 18px;
  }
`

const StageTitle = styled.h3`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  margin: 0 0 18px 0;
  max-width: 576px;

  @media only screen and (max-width: 1023px) {
    font-size: 28px;
    line-height: 36px;
  }
`

const StageBody = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${({ $dark }) => ($dark ? "#d6d6d6" : "#ffffff")};
  margin: 0 0 28px 0;
  max-width: 576px;

  @media only screen and (max-width: 1023px) {
    font-size: 14px;
    line-height: 22px;
  }
`

const StageList = styled.ul`
  list-style: none;
  margin: 0 0 32px 0;
  padding: 0;
`

const StageListItem = styled.li`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ $dark }) => ($dark ? "#ebebeb" : "#ffffff")};
  padding: 0;

  @media only screen and (max-width: 768px) {
    line-height: 18px;
  }
`

const OutcomeTag = styled.a`
  display: flex;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #000000;
  background-color: #c3ff00;
  height: 52px;
  padding: 0 16px;
  margin: 0;

  text-decoration: none;
  transition: 0.2s ease;

    @media only screen and (min-width: 769px) {
      width: 100%;
}
  @media only screen and (max-width: 768px) {
    height: auto;
    padding: 10px 12px;
  }

  &:hover {
    background-color: #d8ff4d;
  }
`

const stages = [
  {
    id: "define",
    number: "01",
    name: "Define",
    dark: false,
    imageLeft: true,
    title: "Get brutally clear.",
    body: "Define the problem, the people, the product requirements and the technical architecture before committing to the build.",
    list: [
      "RESEARCH, CONTEXT & OPPORTUNITY",
      "PRODUCT REQUIREMENTS & SUCCESS CRITERIA",
      "SYSTEM ARCHITECTURE & TECHNICAL FEASIBILITY",
      "DEVELOPMENT ROADMAP & RISK PLAN",
    ],
    outcome: "Product brief & development roadmap",
    link: "/product-brief-development-roadmap",
    image:
      "https://darkslategray-salmon-190399.hostingersite.com/capabilities1.png",
  },
  {
    id: "prove",
    number: "02",
    name: "Prove",
    dark: true,
    /* dimmed near-white body/services text per design */
    imageLeft: false,
    title: "Test the biggest unknown first.",
    body: "Build focused proofs of concept to establish technical feasibility before committing to the full product.",
    list: [
      "Proofs of concept",
      "Breadboards, sensor rigs & rapid code",
      "Model & algorithm feasibility",
      "Early user & technical testing",
    ],
    outcome: "Proof of concept",
    link: "/proof-of-concept",
    image:
      "https://darkslategray-salmon-190399.hostingersite.com/capabilities2.png",
  },
  {
    id: "design-engineer",
    number: "03",
    name: "Design + Engineer",
    dark: false,
    imageLeft: true,
    title: "Make every layer work together.",
    body: "Develop the physical product, electronics, intelligence and software as one integrated system.",
    list: [
      "Industrial & interaction design",
      "Mechanical, electronics & firmware",
      "AI, data & product integration",
      "Mobile, web & connected platforms",
      "Looks-like & works-like prototypes",
    ],
    outcome: "An integrated working prototype",
    link: "/integrated-prototype",
    image:
      "https://darkslategray-salmon-190399.hostingersite.com/capabilities3.png",
  },
  {
    id: "validate",
    number: "04",
    name: "Validate",
    dark: true,
    imageLeft: false,
    title: "Test it until it earns trust.",
    body: "Test performance, usability, reliability, safety and manufacturing readiness against the original requirements.",
    list: [
      "Performance & reliability testing",
      "Usability & experience validation",
      "Safety, compliance & edge cases",
      "Manufacturing readiness",
    ],
    outcome: "A validated, production-ready design",
    link: "/product-validation",
    image:
      "https://darkslategray-salmon-190399.hostingersite.com/capabilities4.png",
  },
  {
    id: "make-launch",
    number: "05",
    name: "Make + Launch",
    dark: false,
    imageLeft: true,
    title: "Get it out of the lab.",
    body: "Complete tooling, supplier coordination, production validation, software deployment and launch preparation.",
    list: [
      "DFM, tooling & supplier coordination",
      "Pilot builds & production validation",
      "Software deployment & launch readiness",
      "Quality control, handover & iteration",
    ],
    outcome: "A product ready to ship, scale & improve",
    link: "/launch-readiness",
    image:
      "https://darkslategray-salmon-190399.hostingersite.com/capabilities5.png",
  },
]

const StageRow = ({ stage }) => (
  <StageWrapper>
    <StageImage $imageLeft={stage.imageLeft}>
      <img src={stage.image} alt={`${stage.name} stage`} />
    </StageImage>
    <StageContent $imageLeft={stage.imageLeft}>
      <StageLabel>{stage.name}</StageLabel>
      {stage.title && <StageTitle>{stage.title}</StageTitle>}
      <StageBody $dark={stage.dark}>{stage.body}</StageBody>
      <StageList>
        {stage.list.map(item => (
          <StageListItem key={item} $dark={stage.dark}>
            {item}
          </StageListItem>
        ))}
      </StageList>
      <OutcomeTag href={stage.link}>Outcome / {stage.outcome} →</OutcomeTag>
    </StageContent>
  </StageWrapper>
)

/* ------------------------------------------------------------------ */
/* Quality gates                                                       */
/* ------------------------------------------------------------------ */

const GatesSection = styled.section`
  box-sizing: border-box;
  width: 100%;
  padding: 80px 60px 90px;

  @media only screen and (min-width: 1440px) {
    padding: 72px 120px;
  }

  @media only screen and (max-width: 1023px) {
    padding: 55px 40px 60px;
  }

  @media only screen and (max-width: 768px) {
    padding: 40px 20px 45px;
  }
`

const GatesHeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 60px;
  padding-bottom: 40px;
  border-bottom: 1px solid #1f1f1f;

  @media only screen and (max-width: 1023px) {
    flex-direction: column;
    gap: 20px;
    border-bottom: none;
    padding-bottom: 0;
  }
`

const GatesTitle = styled.h2`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #000000;
  margin: 0;
  max-width: 680px;

  @media only screen and (max-width: 1023px) {
    font-size: 28px;
    line-height: 36px;
  }
`

const GatesText = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #262626;
  margin: 8px 0 0 0;
  max-width: 430px;

  @media only screen and (max-width: 1023px) {
    font-size: 14px;
    line-height: 22px;
  }
`

const GatesGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
  padding-top: 40px;

  @media only screen and (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 60px;
  }

  @media only screen and (max-width: 567px) {
    grid-template-columns: 1fr;
    row-gap: 36px;
  }
`

/* Architectural gate motif: left/right piers, a lintel across the top and
   small foot stubs at the bottom — matches Figma's gate frame exactly,
   scaled with the card's natural height instead of a fixed pixel height. */
const GateCard = styled.div`
  position: relative;
  background-color: #ffffff;
  padding: 30px 20px;
  text-align: left;

  @media only screen and (max-width: 567px) {
    padding: 24px 18px;
  }
`

const GatePier = styled.div`
  position: absolute;
  top: 0;
  ${({ $right }) => ($right ? "right: 0;" : "left: 0;")}
  width: 8px;
  height: 94%;
  background-color: #1f1f1f;
`

const GateLintel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 8px;
  background-color: #1f1f1f;
`

const GateFoot = styled.div`
  position: absolute;
  bottom: 0;
  ${({ $right }) => ($right ? "right: 0;" : "left: 0;")}
  width: 28px;
  height: 4px;
  // background-color: #1f1f1f;
`

const GateDot = styled.div`
  position: absolute;
  left: 50%;
  bottom: 5%;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: #547300;
  transform: translateX(-50%);

  @media only screen and (max-width: 1023px) {
    display: none;
  }
`

/* line connecting dot-to-dot only — inset by half a card width on each side
   so it starts at the first card's dot and ends at the last card's dot,
   not the outer edges of the grid (5 columns, 40px gaps). Uses the same
   bottom: 5% as GateDot so it sits at the same height — GatesTrack's height
   matches the cards' height, so the same percentage lands at the same level. */
const GatesLine = styled.div`
  position: absolute;
  left: calc((100% - 160px) / 10);
  right: calc((100% - 160px) / 10);
  bottom: 5%;
  height: 1px;
  background-color: rgba(31, 31, 31, 0.24);

  @media only screen and (max-width: 1023px) {
    display: none;
  }
`

const GatesTrack = styled.div`
  position: relative;
`

/* Mobile-only vertical line joining one gate card to the next, replacing
   the desktop GatesLine/GateDot horizontal journey path (both hidden below
   1024px). Sits in the grid's row-gap between stacked cards. */
const GateConnector = styled.div`
  display: none;

  @media only screen and (max-width: 567px) {
    display: block;
    position: absolute;
    left: 50%;
    bottom: -36px;
    width: 2px;
    height: 36px;
    background-color: rgba(31, 31, 31, 0.24);
    transform: translateX(-50%);
  }
`

const GateLabel = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #739e00;
  margin: 0 0 16px 0;

  @media only screen and (max-width: 768px) {
    line-height: 18px;
    color: #597500;
  }
`

const GateTitle = styled.h4`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  color: #000000;
  margin: 0 0 12px 0;

  @media only screen and (max-width: 768px) {
    font-size: 22px;
    line-height: 28px;
  }
`

const GateText = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  color: #333333;
  margin: 0;
`

const gates = [
  {
    id: "feasibility",
    number: "01",
    tag: "Feasibility",
    title: "Can the core idea work?",
    text: "Focused proofs resolve the riskiest technical and product assumptions.",
  },
  {
    id: "evt",
    number: "02",
    tag: "EVT",
    title: "Does the engineering work?",
    text: "Engineering validation confirms the integrated system performs as intended.",
  },
  {
    id: "dvt",
    number: "03",
    tag: "DVT",
    title: "Does the final design meet requirements?",
    text: "Design validation checks performance, usability, reliability and compliance.",
  },
  {
    id: "pvt",
    number: "04",
    tag: "PVT",
    title: "Can it be made reliably?",
    text: "Production validation proves the tooling, process and quality controls.",
  },
  {
    id: "launch",
    number: "05",
    tag: "Launch",
    title: "Does it survive reality?",
    text: "Field use, deployment and early production reveal what improves next.",
  },
]

/* ------------------------------------------------------------------ */
/* CTA                                                                  */
/* ------------------------------------------------------------------ */

const CTASection = styled.section`
  box-sizing: border-box;
  width: 100%;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  padding: 100px 60px 100px;

  @media only screen and (min-width: 1440px) {
    padding: 96px 120px 96px;
  }

  @media only screen and (max-width: 1023px) {
    padding: 80px 40px 80px;
  }

  @media only screen and (max-width: 768px) {
    padding: 60px 20px 60px;
  }
`

const CTAEyebrow = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #c3ff00;
  margin: 0;
`

const CTATitle = styled.h2`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  color: #ffffff;
  margin: 28px 0 0 0;
  max-width: 900px;

  @media only screen and (max-width: 1023px) {
    font-size: 36px;
    line-height: 44px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 32px;
    line-height: 40px;
  }
`

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #c3ff00;
  color: #000000;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 18px 28px;
  margin-top: 28px;
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: #aee600;
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid #ffffff;
    outline-offset: 4px;
  }
`

/* ------------------------------------------------------------------ */
/* Footer bar                                                          */
/* ------------------------------------------------------------------ */


/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

const Capabilities = () => {
  return (
    <Layout footerVariant="dark">
      <PageWrapper>
        <div style={{ backgroundColor: `#edeeee` }}>
          <HeroSection style={{ maxWidth: `1440px`, margin: `auto` }}>
            <Eyebrow style={{ marginTop: `30px` }}>
              Capabilities / Strategy to production
            </Eyebrow>
            <HeroTitle>
              End-to-end product development. No handoffs. No lost intent.
            </HeroTitle>
            <StrategyRow>
              Strategy <span className="dot">·</span> Design{" "}
              <span className="dot">·</span> Engineering{" "}
              <span className="dot">·</span> Production{" "}
              <span className="dot">·</span> Launch
            </StrategyRow>
          </HeroSection>
        </div>

        <div style={{ backgroundColor: `#c3ff00` }}>
          <SupportBand style={{ maxWidth: `1440px`, margin: `auto` }}>
            <SupportTitle>
              One team, from product strategy to production.
            </SupportTitle>
            <SupportText>
              Industrial design, electronics, embedded systems, AI, software and
              manufacturing stay involved from definition through launch—whether
              you’re proving a new idea or preparing an existing product for
              production.
            </SupportText>
          </SupportBand>
        </div>
        <div style={{ backgroundColor: `#000000` }}>
          <div style={{ maxWidth: `1440px`, margin: `auto` }}>
            {stages.map(stage => (
              <StageRow key={stage.id} stage={stage} />
            ))}
          </div>
        </div>

        <div style={{ backgroundColor: `#ffffff` }}>
          <GatesSection style={{ maxWidth: `1440px`, margin: `auto` }}>
            <GatesHeaderRow>
              <div>
                <Eyebrow $color="#2e2e2e" style={{ marginBottom: 16 }}>
                  Quality gates / Ready means proven
                </Eyebrow>
                <GatesTitle>
                  Your product's readiness is a journey through many
                  checkpoints.
                </GatesTitle>
              </div>
              <GatesText>
                Each gate answers a harder question before the next investment
                is made. Quality is demonstrated, not declared.
              </GatesText>
            </GatesHeaderRow>

            <GatesTrack>
              <GatesGrid>
                {gates.map((gate, index) => (
                  <GateCard key={gate.id}>
                    <GatePier />
                    <GatePier $right />
                    <GateLintel />
                    <GateFoot />
                    <GateFoot $right />
                    <GateLabel>
                      Gate {gate.number} / {gate.tag}
                    </GateLabel>
                    <GateTitle>{gate.title}</GateTitle>
                    <GateText>{gate.text}</GateText>
                    <GateDot />
                    {index < gates.length - 1 && <GateConnector />}
                  </GateCard>
                ))}
              </GatesGrid>
              <GatesLine />
            </GatesTrack>
          </GatesSection>
        </div>

        <CTASection>
          <CTAEyebrow>Put it to work</CTAEyebrow>
          <CTATitle>
            Bring us the problem that doesn’t have a blueprint yet.
          </CTATitle>
          <CTAButton to="/contact">Talk to us →</CTAButton>
        </CTASection>

      </PageWrapper>
    </Layout>
  )
}

export default Capabilities
