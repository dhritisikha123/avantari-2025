import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Section = styled.section`
  box-sizing: border-box;
  width: 100%;
  padding: 0 60px;
  max-width: 1440px;
  margin: auto;
  min-height: 100vh;
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  @media only screen and (min-width: 769px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media only screen and (min-width: 1440px) {
    margin: 50px auto;
    height: 720px;
    min-height: 720px;
  }

  @media only screen and (max-width: 1023px) {
    padding: 60px 40px;
  }

  @media only screen and (max-width: 768px) {
    padding: 48px 20px;
  }
`

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 60px;
  gap: 24px;
  width: 100%;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 40px;
  }
`

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
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

const Subtext = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #1f1f1f;
  margin: 0;
  padding-top: 8px;
  @media only screen and (max-width: 567px) {
    font-size: 14px;
     line-height: 22px;
  }
`

const ExploreButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #000000;
  background-color: #c3ff00;
  border: none;
  padding: 15px 37px;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition: transform 0.2s ease, background-color 0.2s ease;
  height: 48px;
  &:hover {
    background-color: #aee600;
    transform: translateY(-2px);
  }

  @media only screen and (max-width: 768px) {
    align-self: flex-start;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media only screen and (max-width: 1023px) and (min-width: 769px) {
    gap: 20px;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  min-width: 0;
  text-decoration: none;
  color: inherit;

  &:hover img {
    transform: scale(1.03);
  }

  &:focus-visible {
    outline: 2px solid #000000;
    outline-offset: 6px;
  }
`

const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: 16px;
  background-color: #f0f0f0;
`

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
`

const CategoryLabel = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #2e2e2e;
  margin: 0 0 8px 0;
`

const ProjectTitle = styled.h3`
  font-family: "Outfit", serif;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
  color: #000000;
  margin: 0 0 8px 0;
     @media only screen and (max-width: 567px) {
      font-size: 26px;
     line-height: 32px;
}
`

const ProjectDescription = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #262626;
  margin: 0;
  @media only screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 24px;
  }
`

const projects = [
  {
    id: "neo-1",
    category: "Hardware / Neo 1",
    title: "Neo 1",
    description: "A wearable that remembers your conversations.",
    image: "https://darkslategray-salmon-190399.hostingersite.com/neo1.png",
    path: "/neosapian",
  },
  {
    id: "darwinbot",
    category: "AI / Darwinbot",
    title: "Darwinbot",
    description: "Charles Darwin, brought back as a holographic product guide.",
    image:
      "https://darkslategray-salmon-190399.hostingersite.com/darwinbot.png",
    path: "/darwinbot",
  },
  {
    id: "dhyana-app",
    category: "Software / Dhyana App",
    title: "Dhyana App",
    description: "The ring captured the signal. The app made it useful.",
    image:
      "https://darkslategray-salmon-190399.hostingersite.com/dhyanaapp.png",
    path: "/dhyana-app",
  },
]

const SecondSection = () => {
  return (
    <Section>
      <HeaderRow>
        <HeaderText>
          <Eyebrow>Selected Work</Eyebrow>
          <Title>
            Good ideas don’t <br /> belong in decks.
          </Title>

          <Subtext>Designed. Engineered. Made real.</Subtext>
        </HeaderText>
        <ExploreButton to="/work">Explore Our Projects →</ExploreButton>
      </HeaderRow>

      <Grid>
        {projects.map(project => (
          <Card key={project.id} to={project.path}>
            <ImageWrapper>
              <ProjectImage src={project.image} alt={project.title} />
            </ImageWrapper>
            {/* <CategoryLabel>{project.category}</CategoryLabel> */}
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
          </Card>
        ))}
      </Grid>
    </Section>
  )
}

export default SecondSection
