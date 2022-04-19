import React from 'react'
import { motion, useMotionValue } from "framer-motion"
import './style/Gallery.scss'

const ImagePanel = (props) => {
  return (
      <>
        <motion.div className="Image-panel" 
            whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
            }}
        >
            <img key={props.ID} width={300} src={props.link} />
        </motion.div>
      </>
    
  )
}

export default ImagePanel