import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import fallbackImage from "../../images/blogHome1.png"

const Section = styled.section`
  box-sizing: border-box;
  width: 100%;
  background: #edeeee;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: clamp(20px, calc(-17.143px + 9.5238vw), 120px);
  padding-right: clamp(20px, calc(-17.143px + 9.5238vw), 120px);

  @media only screen and (min-width: 769px) {
    padding-top: 88px;
    padding-bottom: 88px;
    gap: 44px;
  }

  @media only screen and (min-width: 1440px) {
    padding-left: clamp(120px, calc(-240px + 25vw), 400px);
    padding-right: clamp(120px, calc(-240px + 25vw), 400px);
    padding-top: 104px;
    padding-bottom: 104px;
    gap: clamp(44px, calc(33.714px + 0.7143vw), 52px);
  }
`

const Label = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.52px;
  color: #4d4d4d;
  margin: 0;
`

/* auto-fit lets the column count grow organically with available space —
   no hard breakpoint jump between 3 and 4 columns. minmax(350px, 1fr) is
   tuned so a 1440px-wide row naturally fits 3 columns (~379px each) and a
   2560px-wide row naturally fits 4 (~416px each, matching the design). */
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  width: 100%;

  @media only screen and (min-width: 769px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    column-gap: 24px;
    row-gap: 48px;
  }

  @media only screen and (min-width: 1440px) {
    column-gap: clamp(24px, calc(13.714px + 0.7143vw), 32px);
    row-gap: clamp(48px, calc(37.714px + 0.7143vw), 56px);
  }
`

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  min-width: 0;

  @media only screen and (min-width: 769px) {
    gap: 14px;
  }

  @media only screen and (min-width: 1440px) {
    gap: clamp(14px, calc(11.429px + 0.1786vw), 16px);
  }

  &:hover img {
    transform: scale(1.02);
  }

  &:focus-visible {
    outline: 2px solid #000000;
    outline-offset: 6px;
  }
`

const CardImageWrap = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  @media only screen and (min-width: 769px) {
    height: 240px;
  }

  @media only screen and (min-width: 1440px) {
    height: clamp(240px, calc(214.286px + 1.7857vw), 260px);
  }
`

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
`

const Rule = styled.div`
  width: 100%;
  height: 1px;
  background: #d5d6d6;
`

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 10px;
  text-align: left;

  @media only screen and (min-width: 769px) {
    gap: 10px;
    padding-top: 12px;
  }

  @media only screen and (min-width: 1440px) {
    padding-top: clamp(12px, calc(9.429px + 0.1786vw), 14px);
  }
`

const CardCategory = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.52px;
  color: #4d4d4d;
  margin: 0;

  @media only screen and (min-width: 769px) {
    line-height: 20px;
  }
`

const CardTitle = styled.h3`
  font-family: "Corben", serif;
  font-weight: 400;
  color: #000000;
  margin: 0;
  font-size: clamp(18px, calc(17.257px + 0.1905vw), 20px);
  line-height: clamp(24px, calc(23.257px + 0.1905vw), 26px);
`

const CardDescription = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  color: #4d4d4d;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const ArticleGrid = ({ posts }) => (
  <Section>
    <Label>LATEST</Label>
    <Grid>
      {posts.map(post => (
        <Card key={post.url} to={`/${post.url}`}>
          <CardImageWrap>
            <CardImage src={post.image || fallbackImage} alt={post.title} />
          </CardImageWrap>
          <Rule />
          <Meta>
            <CardCategory>{post.category}</CardCategory>
            <CardTitle>{post.title}</CardTitle>
            <CardDescription>{post.docs}</CardDescription>
          </Meta>
        </Card>
      ))}
    </Grid>
  </Section>
)

export default ArticleGrid
