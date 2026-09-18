import React from "react"
import blogData from "./blogs.json"
import BlogCard from "./BlogCard"
import { navigate } from "gatsby"
import latestMob from "../../images/newWeb/blog/hwpro.png"
import blogHome1 from "../../images/newWeb/blog/hwpro.png"
import "./blogs.css"

import "./blog.css" // for basic styling

const BlogHomePage = () => {
  const handleOpenBlogLates = () => {
    navigate(`/${blogData[0].url}`)
  }

  return (
    <div className="blog-container">
      <div style={{ position: `relative` }} onClick={handleOpenBlogLates}>
        <div>
          <img
            src="https://darkslategray-salmon-190399.hostingersite.com/wearable.png"
            style={{ width: `100%`, height: `500px` }}
            className="latestDesktop"
          />
          <img
            src="https://darkslategray-salmon-190399.hostingersite.com/wearable.png"
            style={{ width: `100%` , height:`300px`}}
            className="latestMob"
          />
          <div
            style={{
              position: `absolute`,
              top: 0,
              left: 0,
              width: `100%`,
              height: `100%`,
              background: `rgba(0, 0, 0, 0.45)`,
              pointerEvents: `none`,
            }}
          />
        </div>

        <div className="latestDesktopPara">
          <div
            style={{
              position: `absolute`,
              bottom: `30px`,
              left: `50%`,
              transform: `translate(-50%, 0%)`,
              width: `100%`,
              marginLeft: `40px`,
            }}
            className="latestText"
          >
            <p
              className="latest"
              style={{ textAlign: `left`, margin: `0`, color: `#fff` }}
            >
              Latest
            </p>
            <p id="latest-blog-title-desktop" style={{ color: `#fff` }}>
              {blogData[0].title}
            </p>
            <p id="latest-blog-docs-desktop" style={{ color: `#fff` }}>
              {blogData[0].docs}
            </p>
          </div>
        </div>

        <div className="latestMobPara">
          <div
            style={{
              position: `absolute`,
              bottom: `30px`,
              left: `50%`,
              transform: `translate(-50%, 0%)`,
              width: `80%`,
            }}
            className="latestText"
          >
            <p
              className="latest"
              style={{ textAlign: `left`, margin: `0`, color: `#fff` }}
            >
              Latest
            </p>
            <p
              className="blog-title1"
              style={{
                textAlign: `center`,
                margin: `0`,
                paddingTop: `10px`,
                color: `#fff`,
              }}
            >
              {blogData[0].title}
            </p>
            <p
              className="blog-para1"
              style={{
                textAlign: `center`,
                margin: `0`,
                paddingTop: `10px`,
                color: `#fff`,
              }}
            >
              {blogData[0].docs}
            </p>
          </div>
        </div>
      </div>
      <div className="mobDivBlog">
        <h2 className="section-title">Recent</h2>
        <div className="blog-grid">
          {blogData.slice(1).map(blog => (
            <BlogCard
              key={blog.id}
              image={blog.image}
              title={blog.title}
              docs={blog.docs}
              url={blog.url}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogHomePage
