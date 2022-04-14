
import React from 'react'
import { motion } from "framer-motion"
import './style/FrontPage.scss'



const FrontPage = () => {
  return (
    <>
      <div className = "page">
        <motion.div 
          animate={{opacity: [0, 1]}} 
          whileHover={{color: ["rgb(0, 0, 0)","#ef4824"]}}
        >
          <div className="text">
            زاك
          </div>

          <div classname="text">
            ZACH HUSSEIN
          </div>
        </motion.div>
      </div>

      
    </>
  )
}

export default FrontPage



