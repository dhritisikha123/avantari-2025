import "./src/style/global.css"
import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export const wrapPageElement = ({ element, props }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={props.location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {element}
    </motion.div>
  </AnimatePresence>
)
