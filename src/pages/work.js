import React, { useState, useRef, useEffect } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled, { css } from "styled-components"
import seoImg from "../images/og-images/workOG.png"

/* ------------------------------------------------------------------ */
/* Layout                                                              */
/* ------------------------------------------------------------------ */

const heroHorizontalPadding = css`
  padding-left: 60px;
  padding-right: 60px;
  padding-top: 32px;
  padding-bottom: 32px;

  @media only screen and (min-width: 1440px) {
    padding-left: 120px;
    padding-right: 120px;
    padding-top: 56px;
    padding-bottom: 56px;
  }

  @media only screen and (max-width: 1023px) {
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 32px;
    padding-bottom: 32px;
  }

  @media only screen and (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 32px;
    padding-bottom: 32px;
  }
`

const Section = styled.section`
  box-sizing: border-box;
  width: 100%;
  max-width: 1440px;
  margin: auto;
  overflow-x: hidden;
  padding: 60px 60px 100px;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  @media only screen and (min-width: 1440px) {
    padding: 70px 100px 120px;
  }

  @media only screen and (max-width: 1023px) {
    padding: 45px 40px 70px;
  }

  @media only screen and (max-width: 768px) {
    padding: 35px 20px 50px;
  }
`

const Section1 = styled.section`
  box-sizing: border-box;
  width: 100%;
  max-width: 1440px;
  margin: auto;
  overflow-x: hidden;
  ${heroHorizontalPadding}
`

/* ------------------------------------------------------------------ */
/* Filter bar                                                          */
/* ------------------------------------------------------------------ */

const FilterBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 60px;

  @media only screen and (max-width: 768px) {
    padding-bottom: 40px;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`

const FilterLabel = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  color: #000000;
  margin: 0;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 22px;
  }
`

/* Dropdown */

const DropdownWrapper = styled.div`
  position: relative;
  width: 280px;
  height: 48px;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`

const DropdownButton = styled.button`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  background-color: #ffffff;
  border: none;
  padding: 0 16px;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 22px;
  }

  svg {
    transition: transform 0.2s ease;
    transform: rotate(${({ $open }) => ($open ? "180deg" : "0deg")});
    flex-shrink: 0;
    margin-left: 10px;
  }
`

const DropdownList = styled.ul`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 6px 0;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.12);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  z-index: 10;
`

const DropdownItem = styled.li`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${({ $active }) => ($active ? "#547300" : "#000000")};
  padding: 10px 18px;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 22px;
  }

  &:hover {
    background-color: #f5f5f5;
  }
`

const ChevronIcon = () => (
  <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
    <path
      d="M1 1.5L6 6.5L11 1.5"
      stroke="#000000"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const Dropdown = ({ options, value, onChange }) => {
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = event => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <DropdownWrapper ref={wrapperRef}>
      <DropdownButton
        type="button"
        $open={open}
        onClick={() => setOpen(prev => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {value}
        <ChevronIcon />
      </DropdownButton>
      {open && (
        <DropdownList role="listbox">
          {options.map(option => (
            <DropdownItem
              key={option}
              $active={option === value}
              role="option"
              aria-selected={option === value}
              onClick={() => {
                onChange(option)
                setOpen(false)
              }}
            >
              {option}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownWrapper>
  )
}

/* ------------------------------------------------------------------ */
/* Grid                                                                 */
/* ------------------------------------------------------------------ */

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 24px;
  row-gap: 32px;

  @media only screen and (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 24px;
    row-gap: 32px;
  }

  @media only screen and (max-width: 567px) {
    grid-template-columns: 1fr;
    row-gap: 32px;
  }
`

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  min-width: 0;

  &:focus-visible {
    outline: 2px solid #000000;
    outline-offset: 6px;
  }
`

const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 8 / 5;
  overflow: hidden;
  background-color: #e2e2e2;
`

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;

  ${Card}:hover & {
    transform: scale(1.04);
  }
`

const CardLabel = styled.p`
  margin: 18px 0 0 0;

  span.number {
    color: #4d4d4d;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: 0.04em;
  }

  span.divider {
    color: #4d4d4d;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: 0.04em;
    margin: 0 6px;
  }

  span.category {
    color: #4d4d4d;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }
`

const CardTitle = styled.h3`
  font-family: "Outfit", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
  color: #000000;
  margin: 8px 0 0 0;

  @media only screen and (max-width: 1023px) {
    font-size: 26px;
    line-height: 32px;
  }
`

const CardDescription = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  color: #4d4d4d;
  margin: 10px 0 0 0;
`

/* ------------------------------------------------------------------ */
/* Data                                                                 */
/* ------------------------------------------------------------------ */

const projects = [
  {
    id: "ein",
    number: "2019",
    category: "Hardware",
    title: "Ein",
    description: "A watch that watches your heart.",
    image:
      "https://darkslategray-salmon-190399.hostingersite.com/einProject.png",
    url: "/ein",
  },
  {
    id: "dhyana-1",
    number: "2019",
    category: "Hardware",
    title: "Dhyana 1",
    description: "The first ring that measured meditation.",
    image: "https://darkslategray-salmon-190399.hostingersite.com/dhyana1.png",
    url: "/dhyana-v1",
  },
  {
    id: "dhyana-2",
    number: "2023",
    category: "Hardware",
    title: "Dhyana 2",
    description: "A ring that tells you when you're stressed.",
    image:
      "https://darkslategray-salmon-190399.hostingersite.com/dhyana2Project.png",
    url: "/dhyana-v2",
  },
  {
    id: "dhyana-app",
    number: "2023",
    category: "Software",
    title: "Dhyana App",
    description: "The ring captured the signal. The app made it useful.",
    image:
      "https://darkslategray-salmon-190399.hostingersite.com/dhyanaappProject1.png",
    url: "/dhyana-app",
  },
  {
    id: "hippos",
    number: "2025",
    category: "Hardware",
    title: "Hippos",
    description:
      "An active knee-protection system engineered to disappear inside a legging.",
    image: "https://darkslategray-salmon-190399.hostingersite.com/hippos.png",
    url: "/hippos",
  },
  {
    id: "neo-1",
    number: "2024",
    category: "Hardware",
    title: "Neo 1",
    description: "A wearable that remembers your conversations.",
    image: "https://darkslategray-salmon-190399.hostingersite.com/neo1.png",
    url: "/neosapian",
  },
  {
    id: "nari",
    number: "2026",
    category: "AI",
    title: "NARI",
    description: "A doctor, available beyond the consulting room.",
    image: "https://darkslategray-salmon-190399.hostingersite.com/nari.png",
    url: "/nari",
  },
  {
    id: "evolve-fossilise",
    number: "2026",
    category: "Software",
    title: "Evolve or Fossilise",
    description: "A game designed to evolve.",
    image: "https://darkslategray-salmon-190399.hostingersite.com/evolve.png",
    url: "/evolve-or-fossilise",
  },
  {
    id: "darwinbot",
    number: "2025",
    category: "AI",
    title: "Darwinbot",
    description: "Charles Darwin, brought back as a holographic product guide.",
    image:
      "https://darkslategray-salmon-190399.hostingersite.com/darwinbotProject.png",
    url: "/darwinbot",
  },
  {
    id: "karban-airzone",
    number: "2025",
    category: "Software",
    title: "Karban Airzone",
    description: "The remote controls it. The app explains it.",
    image: "https://darkslategray-salmon-190399.hostingersite.com/karban.png",
    url: "/karban-airzone",
  },
  {
    id: "itc-mastar-chef",
    number: "2024",
    category: "Software",
    title: "ITC MastAR Chef",
    description: "A tiny chef who cooks on your counter.",
    image:
      "https://darkslategray-salmon-190399.hostingersite.com/itcProject.png",
    url: "/itc-mastAR-chef",
  },
  {
    id: "dhun",
    number: "2022",
    category: "Hardware",
    title: "dhün",
    description: "A speaker made by hand, tuned by engineers.",
    image:
      "https://darkslategray-salmon-190399.hostingersite.com/dhunProject.png",
    url: "/dhun",
  },
  {
    id: "welcome-kejriwal",
    number: "2020",
    category: "AI",
    title: "Welcome Kejriwal",
    description:
      "A chief minister who answered you personally. Face, voice and delivery, generated in the browser.",
    image:
      "https://darkslategray-salmon-190399.hostingersite.com/wkProject.png",
    url: "/welcome-kejriwal",
  },
  {
    id: "mo-naveen-mo-ghare",
    number: "2019",
    category: "Software",
    title: "Mo Naveen, Mo Ghare",
    description: "A photograph with the chief minister, in 2.5 million homes.",
    image:
      "https://darkslategray-salmon-190399.hostingersite.com/moProject.png",
    url: "/mo-naveen-mo-ghare",
  },
  {
    id: "saffola-aura-launch",
    number: "2017",
    category: "Software",
    title: "Saffola Aura Launch",
    description:
      "A chef cooking in the supermarket aisle. Built from modified phones — the hardware didn't exist yet.",
    image:
      "https://darkslategray-salmon-190399.hostingersite.com/safolaProject.png",
    url: "/saffola-aura-launch",
  },
  {
    id: "appstar",
    number: "2017",
    category: "Software",
    title: "AppStar",
    description:
      "Film stars, stepping out of the poster. Tracked live, in cinema-foyer light, with no marker.",
    image: "https://darkslategray-salmon-190399.hostingersite.com/appStar.png",
    url: "/appstar",
  },
  {
    id: "arxar",
    number: "2017",
    category: "Software",
    title: "ARxAR",
    description:
      "A life-size AR Rahman, anywhere you stand. Placed by detecting the floor with nothing to aim at.",
    image:
      "https://darkslategray-salmon-190399.hostingersite.com/arxarProject.png",
    url: "/ar-ar",
  },
]

const disciplines = ["All disciplines", "Hardware", "AI", "Software"]

/* ------------------------------------------------------------------ */
/* Component                                                            */
/* ------------------------------------------------------------------ */

const ProjectsGrid = () => {
  const [filter, setFilter] = useState("All disciplines")

  const visibleProjects = projects
    .filter(project => {
      if (filter === "All disciplines") {
        return true
      }

      return project.category.toLowerCase() === filter.toLowerCase()
    })
    .sort((a, b) => Number(b.number) - Number(a.number))

  return (
    <Section>
      <FilterBar>
        <FilterLabel>Filter Projects</FilterLabel>
        <Dropdown options={disciplines} value={filter} onChange={setFilter} />
      </FilterBar>
      <Grid>
        {visibleProjects.map(project => (
          <Card key={project.id} to={project.url}>
            <ImageWrapper>
              <CardImage src={project.image} alt={project.title} />
            </ImageWrapper>
            <CardLabel>
              <span className="number">{project.number}</span>
              <span className="divider">/</span>
              <span className="category">{project.category}</span>
            </CardLabel>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </Card>
        ))}
      </Grid>
    </Section>
  )
}

const Title = styled.h1`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 68px;
  line-height: 76px;
  color: #000000;
  margin: 0;

  // @media only screen and (min-width: 1024px) and (max-width: 1365px) {
  //   font-size: 58px;
  // }

  @media only screen and (max-width: 1023px) {
    font-size: 40px;
    line-height: 48px;
  }
`

const SubTitle = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #262626;
  padding-top: 18px;
  margin: 0px;
  @media only screen and (max-width: 567px) {
    font-size: 13px;
    line-height: 18px;
    letter-spacing: 0.04em;
  }
`

const CTASection = styled.section`
  box-sizing: border-box;
  width: 100%;
  background-color: #000000;
`

const CTAContent = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 1440px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 100px 60px 100px;

  @media only screen and (min-width: 1440px) {
    padding: 96px 120px 96px;
  }

  @media only screen and (max-width: 1023px) {
    padding: 70px 40px 70px;
  }

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
    padding: 50px 20px 50px;
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

const CTAHeadline = styled.h2`
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
    max-width: 350px;
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
`

const PageWrapper = styled.div`
  margin-top: 64px;

  @media only screen and (min-width: 769px) and (max-width: 1023px) {
    margin-top: 70px;
  }

  @media only screen and (min-width: 1024px) {
    margin-top: 88px;
  }
`

const Work = () => {
  return (
    <>
      <Layout>
        <PageWrapper>
          <div
            style={{
              background: `#C3FF00`,
            }}
          >
            <Section1>
              <Title>
                Built. Shipped.
                <br />
                Out in the world.{" "}
              </Title>
              <SubTitle>
                Product development across medtech, hardware, AI and
                software—what we built and what it took.
              </SubTitle>
            </Section1>
          </div>
          <ProjectsGrid />
          <CTASection>
            <CTAContent>
              <CTAEyebrow>Your turn</CTAEyebrow>
              <CTAHeadline>What should we build next?</CTAHeadline>
              <CTAButton to="/contact">Talk to us →</CTAButton>
            </CTAContent>
          </CTASection>
        </PageWrapper>
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "heroDesktop.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
  }
`

const canonicalUrl = "https://www.avantari.org/work"

export const Head = () => (
  <>
    <Seo
      title="Product Development Case Studies | Avantari"
      description="Product development across medtech, wearables, hardware, AI, and software — what was built, what Avantari owned, and what it took to ship."
      url={canonicalUrl}
      image={seoImg}
    />
    <meta name="robots" content="index, follow" />
  </>
)

export default Work
