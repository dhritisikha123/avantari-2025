import React, { useRef } from "react"
import HardWarePage1 from "./hardwarepage1"
import SeventhSection from "../homepage/seventh-section"
import HardWarePage2 from "./hardwarepage2"
import HardWarePage3 from "./hardwarepage3"
import HardWarePage4 from "./hardwarepage4"
import HardWarePage5 from "./hardwarepage5"
import HardWarePage6 from "./hardwarepage6"
import HardWarePage7 from "./hardwarepage7"

const HardWarePage = () => {
  const secondSectionRefHardware = useRef(null) // Create a ref for SecondSection

  const scrollToSecondSectionHardware = () => {
    if (secondSectionRefHardware.current) {
      secondSectionRefHardware.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div>
      <HardWarePage1 scrollToNextHardware={scrollToSecondSectionHardware} />
      <HardWarePage7 />
      <div ref={secondSectionRefHardware}>
        <HardWarePage2 />
        <HardWarePage3 />
      </div>
      <HardWarePage4 />
      <HardWarePage5 />
      <HardWarePage6 />
    </div>
  )
}

export default HardWarePage
