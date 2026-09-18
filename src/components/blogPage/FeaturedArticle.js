import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import wearable from "../../images/newWeb/blog/wearable.png"

const Section = styled.section`
  box-sizing: border-box;
  width: 100%;
  background: #ffffff;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 769px) {
    flex-direction: row;
    // height: 560px;
  }

  @media only screen and (min-width: 1440px) {
    // height: clamp(560px, calc(457.143px + 7.1429vw), 640px);
  }
`

const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  flex-shrink: 0;
  order: 0;

  /* The image is absolutely positioned, so the wrapper needs its own box or it
     collapses to zero height and the featured image disappears on mobile. */
  aspect-ratio: 3 / 2;

  @media only screen and (min-width: 769px) {
    width: 680px;
    aspect-ratio: auto;
    min-width: 0;
    flex-shrink: 1;
    order: 2;
  }

  @media only screen and (min-width: 1440px) {
    // width: clamp(680px, calc(525.714px + 10.7143vw), 800px);
    // height: clamp(560px, calc(457.143px + 7.1429vw), 640px);
  }
`

const FeaturedImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Copy = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
  order: 1;
  /* Same responsive gutter the rest of the blog uses, so the copy stays on the
     shared grid instead of drifting on its own inset. */
  padding: 32px clamp(20px, calc(-17.143px + 9.5238vw), 120px);

  @media only screen and (min-width: 769px) {
    width: 760px;
    min-width: 0;
    gap: 22px;
    padding: 80px 72px 80px clamp(20px, calc(-17.143px + 9.5238vw), 120px);
  }

  @media only screen and (min-width: 1440px) {
    width: clamp(760px, calc(-11.429px + 53.5714vw), 1360px);
    gap: clamp(22px, calc(16.857px + 0.3571vw), 26px);
    padding-top: clamp(80px, calc(69.714px + 0.7143vw), 88px);
    padding-bottom: clamp(80px, calc(69.714px + 0.7143vw), 88px);
    padding-right: clamp(72px, calc(41.143px + 2.1429vw), 96px);
    padding-left: clamp(120px, calc(-240px + 25vw), 400px);
  }
`

const Eyebrow = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.52px;
  color: #4d4d4d;
  margin: 0;
  text-transform: uppercase;
`

const Title = styled.h2`
  font-family: "Corben", serif;
  font-weight: 400;
  color: #000000;
  margin: 0;
  max-width: 100%;
  width: 350px;
  font-size: clamp(28px, calc(20.571px + 1.9048vw), 48px);
  line-height: clamp(36px, calc(28.571px + 1.9048vw), 56px);

  @media only screen and (min-width: 769px) {
    width: 568px;
  }

  @media only screen and (min-width: 1440px) {
    width: clamp(568px, calc(187.429px + 26.4286vw), 864px);
    font-size: clamp(48px, calc(37.714px + 0.7143vw), 56px);
    line-height: clamp(56px, calc(45.714px + 0.7143vw), 64px);
  }
`

const Description = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  color: #4d4d4d;
  margin: 0;
  max-width: 100%;
  width: 350px;
  font-size: clamp(14px, calc(12.514px + 0.381vw), 18px);
  line-height: clamp(22px, calc(19.771px + 0.5714vw), 28px);

  @media only screen and (min-width: 769px) {
    width: 568px;
  }

  @media only screen and (min-width: 1440px) {
    width: 820px;
    font-size: 18px;
    line-height: 28px;
  }
`

const ReadLink = styled(Link)`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #000000;
  border: none;
  cursor: pointer;
  color: #c3ff00;
  text-decoration: none;
  width: 350px;
  padding: 16px 20px;

  @media only screen and (min-width: 769px) {
    width: 420px;
    padding: 20px 28px;
  }

  @media only screen and (min-width: 1440px) {
    width: clamp(420px, calc(368.571px + 3.5714vw), 460px);
    padding: clamp(20px, calc(17.429px + 0.1786vw), 22px)
      clamp(28px, calc(22.857px + 0.3571vw), 32px);
  }

  &:hover {
    opacity: 0.85;
  }

  &:focus-visible {
    outline: 2px solid #000000;
    outline-offset: 4px;
  }
`

const ReadLinkLabel = styled.span`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.56px;
`

const ReadLinkArrow = styled.span`
  font-family: "Corben", serif;
  font-size: 18px;

  @media only screen and (min-width: 769px) {
    font-size: 20px;
  }
`

const FeaturedArticle = ({ post }) => {
  return (
    <Section>
      <ImageWrap>
        <FeaturedImage src={wearable} alt={post.title} />
      </ImageWrap>
      <Copy>
        <Eyebrow>{`FEATURED  ·  ${post.category}`}</Eyebrow>
        <Title>{post.title}</Title>
        <Description>{post.docs}</Description>
        <ReadLink to={`/${post.url}`}>
          <ReadLinkLabel>READ THE ARTICLE</ReadLinkLabel>
          <ReadLinkArrow>→</ReadLinkArrow>
        </ReadLink>
      </Copy>
    </Section>
  )
}

export default FeaturedArticle
