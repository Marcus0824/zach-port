
import React, { useState, useEffect } from 'react'
import { motion, useMotionValue } from "framer-motion"
import './style/FrontPage.scss'
import { Link } from "react-router-dom";



/*
  I changed the way the animation is handled just so that I could test trigger animations on objects
  that aren't within the same motion.div

  The Enter button animates with the Zach Hussein text even though they are separate
  Just wanted to experiment

*/
const FrontPage = () => {
  const [transitionColor, setTransitionColor] = useState(0);
  const colors = ["#000000", "#ef4824"];
  return (
      <div className="page">
        <motion.div 
          animate={{opacity: [0, 1], color: colors[+transitionColor]}} 
          onHoverStart={() => {setTransitionColor(!transitionColor)}}
          onHoverEnd={() => {setTransitionColor(!transitionColor)}}
          //whileHover={{color: ["#000000","#ef4824"]}}
        >
          <div className="text">
            زاك
          </div>
          <div className="text">
            ZACH HUSSEIN
          </div>
        </motion.div>

        <Link to="home" className='EnterButton'>
          <motion.div  animate={{opacity: [0, 1], color: colors[+(!transitionColor)]}}>
            ENTER
          </motion.div>
        </Link>
        
      </div>
  )
}

export default FrontPage



