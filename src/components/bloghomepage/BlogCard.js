import { navigate } from "gatsby"
import React from "react"

const BlogCard = ({ image, title, docs, url }) => {
  const handleOpenBlog = () => {
    navigate(`/${url}`)
  }

  return (
    <div className="blog-card" onClick={handleOpenBlog}>
      <div className="blog-image-div">
        <img src={image} alt={title} />
      </div>
      <div className="blog-para-div">
        <p className="blog-title">{title}</p>
        <p className="blog-para">{docs}</p>
      </div>
    </div>
  )
}

export default BlogCard
