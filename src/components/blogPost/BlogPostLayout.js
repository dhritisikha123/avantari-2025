import React, { useState } from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import blogData from "../bloghomepage/blogs.json"
import fallbackImage from "../../images/blogHome1.png"
import BlogNewsletter from "../blogPage/BlogNewsletter"

export const PageWrapper = styled.div`
  margin-top: 64px;

  @media only screen and (min-width: 769px) and (max-width: 1023px) {
    margin-top: 70px;
  }

  @media only screen and (min-width: 1024px) {
    margin-top: 88px;
  }
`

/* ---------------------------------------------------------------- Hero -- */

const HeroSection = styled.section`
  box-sizing: border-box;
  width: 100%;
  background: #edeeee;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 36px 20px 28px;

  @media only screen and (min-width: 769px) {
    gap: 22px;
    padding: 80px 120px 56px;
  }
`

const MetaLine = styled.p`
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.52px;
  color: #4d4d4d;

  @media only screen and (min-width: 769px) {
    line-height: 20px;
  }
`

const HeroTitle = styled.h1`
  margin: 0;
  font-family: "Corben", serif;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  color: #0e0e0e;
  max-width: 100%;

  @media only screen and (min-width: 769px) {
    font-size: 48px;
    line-height: 56px;
    width: 1000px;
  }
`

const Standfirst = styled.p`
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #4d4d4d;
  max-width: 100%;

  @media only screen and (min-width: 769px) {
    font-size: 18px;
    line-height: 28px;
    width: 860px;
  }
`

const Byline = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media only screen and (min-width: 769px) {
    gap: 14px;
  }
`

const Author = styled.span`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.52px;
  color: #0e0e0e;

  @media only screen and (min-width: 769px) {
    line-height: 20px;
  }
`

const BylineRule = styled.span`
  display: block;
  width: 20px;
  height: 1px;
  background: #d5d6d6;

  @media only screen and (min-width: 769px) {
    width: 28px;
  }
`

const Role = styled.span`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.52px;
  color: #8c8c8c;

  @media only screen and (min-width: 769px) {
    line-height: 20px;
  }
`

export const ArticleHero = ({
  category,
  date,
  readTime,
  title,
  standfirst,
  author = "AVANTARI STUDIO",
  role,
}) => (
  <HeroSection>
    <MetaLine>
      {[category, date, readTime].filter(Boolean).join("  ·  ")}
    </MetaLine>
    <HeroTitle>{title}</HeroTitle>
    {standfirst && <Standfirst>{standfirst}</Standfirst>}
    <Byline>
      <Author>{author}</Author>
      {role && (
        <>
          <BylineRule />
          <Role>{role}</Role>
        </>
      )}
    </Byline>
  </HeroSection>
)

/* ---------------------------------------------------------- Hero Image -- */

const HeroImageWrap = styled.div`
  width: 100%;
  height: 300px;

  @media only screen and (min-width: 769px) {
    height: 620px;
  }
`

const HeroImageEl = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`

export const HeroImage = ({ src, alt }) => (
  <HeroImageWrap>
    <HeroImageEl src={src} alt={alt || ""} />
  </HeroImageWrap>
)

/* ---------------------------------------------------------------- Body -- */

export const ArticleBodyGrid = styled.div`
  box-sizing: border-box;
  width: 100%;
  background: #edeeee;
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 8px 20px 48px;

  @media only screen and (min-width: 769px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 80px;
    padding: 88px 120px;
  }
`

const RailWrap = styled.div`
  display: none;

  @media only screen and (min-width: 769px) {
    display: flex;
    flex-direction: column;
    gap: 18px;
    width: 240px;
    flex-shrink: 0;
    position: sticky;
    top: 120px;
  }
`

const RailLabel = styled.p`
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.52px;
  color: #8c8c8c;
`

const ShareRow = styled.div`
  display: flex;
  gap: 16px;
`

const ShareLink = styled.a`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.52px;
  color: #0e0e0e;
  text-decoration: none;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;

  &:hover {
    text-decoration: underline;
  }
`

export const ShareRail = ({ title }) => {
  const [copied, setCopied] = useState(false)
  const shareUrl =
    typeof window !== "undefined" ? window.location.href : ""

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (e) {
      // clipboard blocked — ignore silently
    }
  }

  return (
    <RailWrap>
      <RailLabel>SHARE</RailLabel>
      <ShareRow>
        <ShareLink
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            shareUrl
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          LINKEDIN
        </ShareLink>
        <ShareLink
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
            shareUrl
          )}&text=${encodeURIComponent(title || "")}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          X
        </ShareLink>
        <ShareLink as="button" type="button" onClick={handleCopy}>
          {copied ? "COPIED" : "COPY LINK"}
        </ShareLink>
      </ShareRow>
    </RailWrap>
  )
}

export const BodyColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  width: 100%;
  min-width: 0;

  @media only screen and (min-width: 769px) {
    gap: 28px;
    width: 760px;
  }
`

export const Lede = styled.p`
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #0e0e0e;

  @media only screen and (min-width: 769px) {
    font-size: 18px;
    line-height: 28px;
  }
`

export const Body = styled.p`
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #0e0e0e;

  @media only screen and (min-width: 769px) {
    font-size: 16px;
    line-height: 24px;
  }
`

export const Subhead = styled.h2`
  margin: 0;
  font-family: "Corben", serif;
  font-weight: 400;
  font-size: 26px;
  line-height: 32px;
  color: #0e0e0e;

  @media only screen and (min-width: 769px) {
    font-size: 34px;
    line-height: 42px;
    padding-top: 20px;
  }
`

export const PullQuote = styled.blockquote`
  margin: 0;
  background: #c3ff00;
  padding: 24px 22px;
  font-family: "Corben", serif;
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  color: #0e0e0e;
  width: 100%;
  box-sizing: border-box;

  @media only screen and (min-width: 769px) {
    padding: 36px 40px;
    font-size: 24px;
    line-height: 30px;
  }
`

const FigureWrap = styled.figure`
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  @media only screen and (min-width: 769px) {
    gap: 12px;
  }
`

const FigureImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  display: block;
  background: #dddede;

  @media only screen and (min-width: 769px) {
    height: 420px;
  }
`

const FigureCaption = styled.figcaption`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  color: #8c8c8c;
`

export const InlineFigure = ({ src, caption }) => (
  <FigureWrap>
    <FigureImage src={src} alt={caption || ""} />
    {caption && <FigureCaption>{caption}</FigureCaption>}
  </FigureWrap>
)

export const BulletList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  @media only screen and (min-width: 769px) {
    gap: 16px;
  }
`

const ListItemRow = styled.li`
  display: flex;
  gap: 12px;
  padding-top: 4px;

  @media only screen and (min-width: 769px) {
    gap: 16px;
    padding-top: 6px;
  }
`

const Bullet = styled.span`
  flex-shrink: 0;
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #c3ff00;
  margin-top: 7px;

  @media only screen and (min-width: 769px) {
    width: 10px;
    height: 10px;
    border-radius: 5px;
    margin-top: 8px;
  }
`

const ListItemText = styled.p`
  margin: 0;
  flex: 1;
  min-width: 0;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #0e0e0e;

  @media only screen and (min-width: 769px) {
    font-size: 16px;
    line-height: 24px;
  }
`

export const BulletItem = ({ children }) => (
  <ListItemRow>
    <Bullet />
    <ListItemText>{children}</ListItemText>
  </ListItemRow>
)

/* ------------------------------------------------------ Related Articles */

const RelatedSection = styled.section`
  box-sizing: border-box;
  width: 100%;
  background: #edeeee;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 8px 20px 48px;

  @media only screen and (min-width: 769px) {
    gap: 32px;
    padding: 16px 120px 88px;
  }
`

const RelatedHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const RelatedLabel = styled.p`
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.52px;
  color: #8c8c8c;

  @media only screen and (min-width: 769px) {
    line-height: 20px;
  }
`

const AllLink = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.52px;
  color: #0e0e0e;

  @media only screen and (min-width: 769px) {
    line-height: 20px;
  }
`

const RelatedCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  @media only screen and (min-width: 769px) {
    flex-direction: row;
    gap: 24px;
  }
`

const RelatedCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  cursor: pointer;
  width: 100%;

  @media only screen and (min-width: 769px) {
    gap: 14px;
    flex: 1;
    min-width: 0;
  }

  &:hover img {
    transform: scale(1.02);
  }
`

const RelatedImageWrap = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  @media only screen and (min-width: 769px) {
    height: 240px;
  }
`

const RelatedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
`

const RelatedRule = styled.div`
  width: 100%;
  height: 1px;
  background: #d5d6d6;
`

const RelatedMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 10px;

  @media only screen and (min-width: 769px) {
    gap: 10px;
    padding-top: 12px;
  }
`

const RelatedCategory = styled.p`
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.52px;
  color: #4d4d4d;

  @media only screen and (min-width: 769px) {
    line-height: 20px;
  }
`

const RelatedTitle = styled.h3`
  margin: 0;
  font-family: "Corben", serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #000000;

  @media only screen and (min-width: 769px) {
    font-size: 20px;
    line-height: 26px;
  }
`

const RelatedDescription = styled.p`
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  color: #4d4d4d;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const DEFAULT_CATEGORY = "HARDWARE"

export const RelatedArticles = ({ currentUrl }) => {
  const posts = blogData.map(post => ({
    ...post,
    category: (post.filter || DEFAULT_CATEGORY).toUpperCase(),
  }))
  const current = posts.find(post => post.url === currentUrl)
  const others = posts.filter(post => post.url !== currentUrl)
  const sameCategory = current
    ? others.filter(post => post.category === current.category)
    : []
  const rest = others.filter(post => !sameCategory.includes(post))
  const related = [...sameCategory, ...rest].slice(0, 3)

  if (related.length === 0) return null

  return (
    <RelatedSection>
      <RelatedHead>
        <RelatedLabel>KEEP READING</RelatedLabel>
        <AllLink onClick={() => navigate("/blog")}>ALL ARTICLES →</AllLink>
      </RelatedHead>
      <RelatedCards>
        {related.map(post => (
          <RelatedCard key={post.url} onClick={() => navigate(`/${post.url}`)}>
            <RelatedImageWrap>
              <RelatedImage
                src={post.image || fallbackImage}
                alt={post.title}
              />
            </RelatedImageWrap>
            <RelatedRule />
            <RelatedMeta>
              <RelatedCategory>{post.category}</RelatedCategory>
              <RelatedTitle>{post.title}</RelatedTitle>
              <RelatedDescription>{post.docs}</RelatedDescription>
            </RelatedMeta>
          </RelatedCard>
        ))}
      </RelatedCards>
    </RelatedSection>
  )
}

export { BlogNewsletter }
