import React from "react"
import { navigate } from "gatsby"
import "./card.css" // Fix import name
import blogData from "../../bloghomepage/blogs.json"

const FEATURED_URLS = [
  "wearable-app-development-healthcare",
  "hipaa-healthcare-laws-canada-uk-australia-mena",
  "iot-testing-guide",
]

const DEFAULT_CATEGORY = "HARDWARE"

const cardsData = FEATURED_URLS.map(url => {
  const post = blogData.find(p => p.url === url)
  return {
    title: post.title,
    content: (post.filter || DEFAULT_CATEGORY).toUpperCase(),
    url: post.url,
  }
})

const Card = ({ title, content, url }) => {
  const handleClickBlog = () => {
    navigate(`/${url}`)
  }
  return (
    <div className="card" onClick={handleClickBlog}>
      <p className="contentBlog">{content}</p>
      <h3 className="titleBlog">{title}</h3>
    </div>
  )
}

const SixthHomeBlog = () => {
  return (
    <div style={{maxWidth:`1440px`, margin:`auto`}}>
      <div className="cards-desktop">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>

      <div className="cards-mobile">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  )
}

export default SixthHomeBlog
