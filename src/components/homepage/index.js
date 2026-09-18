import React, { useRef, useState, useEffect, useCallback } from "react"
import FirstSection from "./first-section/index"
import SecondSection from "./second-section/index"
import ThirdSection from "./third-section/index"
import FourthSection from "./fourth-section/index"
import SecondSectionTwo from "./second-section-two"
import FifthSection from "./fifth-section"
import SixthHomeBlog from "./sixth-home-blog"
import SeventhSection from "./seventh-section"
import Footer from "./footer"

const HomePage = () => {
  const firstSectionRef = useRef(null)
  const [firstSectionHeight, setFirstSectionHeight] = useState(0)

  const updateHeight = useCallback(() => {
    if (firstSectionRef.current) {
      setFirstSectionHeight(firstSectionRef.current.offsetHeight)
    }
  }, [])

  useEffect(() => {
    updateHeight()

    // Re-measure on resize (covers the >1440px case, where height isn't 100vh)
    window.addEventListener("resize", updateHeight)

    // Also re-measure if content inside FirstSection changes size
    // (fonts loading, images loading, etc.)
    let resizeObserver
    if (firstSectionRef.current && "ResizeObserver" in window) {
      resizeObserver = new ResizeObserver(updateHeight)
      resizeObserver.observe(firstSectionRef.current)
    }

    return () => {
      window.removeEventListener("resize", updateHeight)
      if (resizeObserver) resizeObserver.disconnect()
    }
  }, [updateHeight])

  return (
    <div style={{ position: "relative" }}>
      {/* Pinned in place — stays put while everything else scrolls over it */}
      <div
        ref={firstSectionRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 0,
        }}
      >
        <FirstSection />
      </div>

      {/* Spacer — reserves scroll space equal to FirstSection's real height */}
      <div style={{ height: firstSectionHeight }} />

      {/* Everything else scrolls on top of and covers the fixed section */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          background: "#EDEEEE", // must be opaque or FirstSection shows through
        }}
      >
        <div style={{ borderTop: `1px solid #000` }}>
          <SecondSection />
        </div>
        <div style={{ borderTop: `1px solid #000` }}>
          <SecondSectionTwo />
        </div>
        <div style={{ borderTop: `1px solid #000` }}>
          <ThirdSection />
        </div>
        <div style={{ borderTop: `1px solid #000` }}>
          <FourthSection />
        </div>
        <div style={{ position: "relative", zIndex: 1, background: "#fff" }}>
          <FifthSection />
          <SixthHomeBlog />
        </div>
        <SeventhSection />
      </div>
    </div>
  )
}

export default HomePage
