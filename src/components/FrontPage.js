
import React, { useState, useEffect, useContext } from 'react'
import { motion, useMotionValue } from "framer-motion"
import './style/FrontPage.scss'
import { Link } from "react-router-dom";
import { GalleryContext } from "./Gallery";


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
  small: {
    scale: 1
  },
  large: {
    scale: 1.17,
  },
  blackline: {
    backgroundColor: colors.black,
  },
  orangeline: {
    backgroundColor: colors.orange,
  },
};

const Logo = ({colorTrigger, lineTrigger}) => {
  const [colorState, setColorState] = colorTrigger;
  const [lineState, setLineState] = lineTrigger;

  return (
    <motion.div 
      variants={colorShift}
      initial={["invisible"]}
      animate={["visible", colorState == true ? "orange" : "black"]}
      //animate={{opacity: [0, 1], color: colorStates[+state]}} 
      onHoverStart={() => {setColorState(!colorState); setLineState(!lineState)}}
      onHoverEnd={() => {setColorState(!colorState); setLineState(!lineState)}}
      className="logo"
    >
      <div className="text">
        زاك
      </div>

      <motion.div
        className="line"
        //animate={{opacity: [0, 1], backgroundColor: colors[+state], scale: 1+(state*0.17)}}
        variants={colorShift}
        animate={[colorState == true ? "orangeline" : "blackline", lineState == true ? "large" : "small"]}
      />

      <div className="text">
        ZACH HUSSEIN
      </div>
    </motion.div>
  );
}

const EnterButton = ({colorTrigger}) => {
  const [state, setState] = colorTrigger;

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
  const colorHover = useState(0);
  const lineHover = useState(0);
  const [images, fetchImages, loaded] = useContext(GalleryContext);

    useEffect(() => {
      fetchImages();
    }, []);

  return (
      <div className="page">
        <Logo colorTrigger={colorHover} lineTrigger={lineHover}/>
        {loaded ? <EnterButton colorTrigger={colorHover}/> : null}
      </div>
  )
}

export default FrontPage



