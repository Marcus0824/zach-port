
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

const colors = {
  black: "#000000",
  orange: "#ef4824"
};


// This can definitely can be more efficient linewise, just experimenting for future, more complex animations
const colorShift = {
  invisible: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      opacity: {
        duration: 1
      }
    }
  },
  black: {
    color: colors.black,
    transition: {
      color: {
        type: "tween",
        duration: 0.35
      }
    }
  },
  orange: {
    color: colors.orange,
    transition: {
      color: {
        type: "tween",
        duration: 0.35
      }
    }
  },
  blackline: {
    scale: 1,
    backgroundColor: colors.black,
    transition: {
      type: "tween",
      duration: 0.35
    }
  },
  orangeline: {
    scale: 1.17,
    backgroundColor: colors.orange,
    transition: {
      type: "tween",
      duration: 0.35
    }
  }

}


const Logo = ({reactTo}) => {
  const [state, setState] = reactTo;
  
  return (
    <motion.div 
      variants={colorShift}
      initial={["invisible"]}
      animate={["visible", state == true ? "orange" : "black"]}
      //animate={{opacity: [0, 1], color: colorStates[+state]}} 
      onHoverStart={() => {setState(!state)}}
      onHoverEnd={() => {setState(!state)}}
      className="logo"
    >
      <div className="text">
        زاك
      </div>

      <motion.div
        className="line"
        //animate={{opacity: [0, 1], backgroundColor: colors[+state], scale: 1+(state*0.17)}}
        variants={colorShift}
        animate={[state == true ? "orangeline" : "blackline"]}
      />

      <div className="text">
        ZACH HUSSEIN
      </div>
    </motion.div>
  );
}

const EnterButton = ({reactTo}) => {
  const [state, setState] = reactTo;

  return (
    <Link to="home" className='EnterButton'>
      <motion.div
        variants={colorShift}
        initial={"invisible"}
        animate={["visible", state == true ? "black" : "orange"]}
        onHoverStart={() => {setState(!state)}}
        onHoverEnd={() => {setState(!state)}}
      >
        ENTER
      </motion.div>
    </Link>
  );
}

const FrontPage = () => {
  const hover = useState(0);
  
  return (
      <div className="page">
        <Logo reactTo={hover} />
        <EnterButton reactTo={hover}/>
      </div>
  )
}

export default FrontPage



