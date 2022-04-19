import React from 'react'
import { motion, useMotionValue } from "framer-motion"
import './style/Gallery.scss'

const ImagePanel = (props) => {
  return (
      <>
        <motion.div className="Image-panel" 
            whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
            }}
        >
            <img  key={props.ID} height={"450rem"} src={props.link} />
        </motion.div>
      </>
    
  )
}

export default ImagePanel