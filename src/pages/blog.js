import React, { useMemo, useState } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import seoImg from "../images/seo.jpg"
import blogData from "../components/bloghomepage/blogs.json"
import BlogHero from "../components/blogPage/BlogHero"
import FilterBar from "../components/blogPage/FilterBar"
import FeaturedArticle from "../components/blogPage/FeaturedArticle"
import ArticleGrid from "../components/blogPage/ArticleGrid"
import LoadMore from "../components/blogPage/LoadMore"
import BlogNewsletter from "../components/blogPage/BlogNewsletter"


const PageWrapper = styled.div`
  margin-top: 64px;

  @media only screen and (min-width: 769px) and (max-width: 1023px) {
    margin-top: 70px;
  }

  @media only screen and (min-width: 1024px) {
    margin-top: 88px;
  }
`

const DEFAULT_CATEGORY = "HARDWARE"
const FEATURED_ID = 1
const PAGE_SIZE = 12

const allPosts = blogData.map(post => ({
  ...post,
  category: (post.filter || DEFAULT_CATEGORY).toUpperCase(),
}))

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("ALL")
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const featured = useMemo(
    () => allPosts.find(post => post.id === FEATURED_ID) || allPosts[0],
    []
  )

  const restPosts = useMemo(
    () =>
      allPosts
        .filter(post => post.id !== featured.id)
        .sort((a, b) => b.id - a.id),
    [featured]
  )

  const filteredPosts = useMemo(
    () =>
      activeCategory === "ALL"
        ? restPosts
        : restPosts.filter(post => post.category === activeCategory),
    [restPosts, activeCategory]
  )

  const handleSelectCategory = category => {
    setActiveCategory(category)
    setVisibleCount(PAGE_SIZE)
  }

  // The featured article is published too, so it counts towards the totals the
  // filter bar and the pagination line both report.
  const featuredInView =
    activeCategory === "ALL" || featured.category === activeCategory
  const publishedCount = filteredPosts.length + (featuredInView ? 1 : 0)
  const shownCount =
    Math.min(visibleCount, filteredPosts.length) + (featuredInView ? 1 : 0)

  return (
    <Layout footerVariant="dark">
      <PageWrapper>
        <BlogHero />
        <FilterBar
          active={activeCategory}
          onSelect={handleSelectCategory}
          total={publishedCount}
        />
        <FeaturedArticle post={featured} />
        <ArticleGrid posts={filteredPosts.slice(0, visibleCount)} />
        <LoadMore
          shown={shownCount}
          total={publishedCount}
          onClick={() => setVisibleCount(count => count + PAGE_SIZE)}
        />
        <BlogNewsletter />
      </PageWrapper>
    </Layout>
  )
}

const canonicalUrl = "https://www.avantari.org/blog"

export const Head = () => (
  <>
  <Seo
    title="Product Design, Engineering & AI Insights | Avantari"
    description="Ideas and lessons from Avantari’s work across industrial design, electronics, medtech, AI, software, manufacturing and product development."
    image={seoImg}
    url={canonicalUrl}
  />
  <meta name="robots" content="index, follow" />
  </>
)

export default Blog
