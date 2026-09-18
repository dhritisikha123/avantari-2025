import React, { useRef } from "react"
import AiPage1 from "./aipage1"
import AiPage2 from "./aipage2"
import AiPage3 from "./aipage3"
import AiPage4 from "./aipage4"
import AiPage5 from "./aipage5"

const AiPage = () => {
  const secondSectionRefAi = useRef(null) // Create a ref for SecondSection

  const scrollToSecondSectionAi = () => {
    if (secondSectionRefAi.current) {
      secondSectionRefAi.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div>
      <AiPage1 scrollToNextAi={scrollToSecondSectionAi} />
      <AiPage5 />
      <div ref={secondSectionRefAi}>
        <AiPage2 />
      </div>
      <AiPage3 />
      <AiPage4 />
    </div>
  )
}

export default AiPage
