import React, { useRef } from "react"
import SoftwarePage1 from "./softwarepage1"
import SoftwarePage2 from "./softwarepage2"
import SoftwarePage3 from "./softwarepage3"
import SoftwarePage4 from "./softwarepage4"
import SoftwarePage5 from "./softwarepage5"
import SoftwarePage6 from "./softwarepage6"
import SoftWarePage7 from "./softwarepage7"

const SoftwarePage = () => {
  const secondSectionRefSw = useRef(null) // Create a ref for SecondSection

  const scrollToNextSoftwarePage1 = () => {
    if (secondSectionRefSw.current) {
      secondSectionRefSw.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div>
      <SoftwarePage1 scrollToNextAi={scrollToNextSoftwarePage1} />
      <SoftWarePage7 />
      <div ref={secondSectionRefSw}>
        <SoftwarePage2 />
        <SoftwarePage3 />
        <SoftwarePage4 />
        <SoftwarePage5 />
        <SoftwarePage6 />
      </div>
    </div>
  )
}

export default SoftwarePage
