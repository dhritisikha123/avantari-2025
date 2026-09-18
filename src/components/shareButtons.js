// src/components/ShareButtons.js
import React from "react"
import twitter from "../images/newWeb/blogsvg/twitter.svg"
import linkedin from "../images/newWeb/blogsvg/linkedin.svg"
import copylink from "../images/newWeb/blogsvg/copylink.svg"
import email from "../images/newWeb/blogsvg/email.svg"

const ShareButtons = () => {
  const pageUrl = typeof window !== "undefined" ? window.location.href : ""

  const handleCopyLink = () => {
    navigator.clipboard.writeText(pageUrl).then(() => {
      alert("Link copied to clipboard!")
    })
  }

  const handleShareTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      pageUrl
    )}`
    window.open(twitterUrl, "_blank")
  }

  const handleShareLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      pageUrl
    )}`
    window.open(linkedInUrl, "_blank")
  }

  const handleShareEmail = () => {
    const mailtoLink = `mailto:?subject=Check this out&body=Here is the link: ${encodeURIComponent(
      pageUrl
    )}`
    window.location.href = mailtoLink
  }

  return (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <img
        src={twitter}
        alt="Share on Twitter"
        onClick={handleShareTwitter}
        style={{ cursor: "pointer", width: "42px", height: "42px" }}
      />
      <img
        src={linkedin}
        alt="Share on LinkedIn"
        onClick={handleShareLinkedIn}
        style={{ cursor: "pointer", width: "42px", height: "42px" }}
      />
      <img
        src={copylink}
        alt="Copy Link"
        onClick={handleCopyLink}
        style={{ cursor: "pointer", width: "42px", height: "42px" }}
      />
      <img
        src={email}
        alt="Share via Email"
        onClick={handleShareEmail}
        style={{ cursor: "pointer", width: "42px", height: "42px" }}
      />
    </div>
  )
}

export default ShareButtons
