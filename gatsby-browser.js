import "./src/style/global.css"
import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

/* A14: the route transition must not hide article content. The page is painted
   at full opacity straight away; the fade is short enough to read as immediate. */
export const wrapPageElement = ({ element, props }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={props.location.pathname}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {element}
    </motion.div>
  </AnimatePresence>
)
