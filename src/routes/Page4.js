import React from 'react'
import { motion } from "framer-motion";
import NavBar from '../components/Navbar';

function Page4() {
    //Flip Animation

  return (
    <motion.div
      className="page4"
      initial={{
        scaleX: 0,
      }}
      animate={{
        scaleX: 1,
      }}
      exit={{
        scale: 0,
      }}
      transition={{
        duration: 0.2,
      }}
    >
      <NavBar></NavBar>
      <motion.div
        className="page-body"
        initial={{
          y: -150,
        }}
        animate={{
          y: 0,
        }}
        transition={{
            duration: 1,
        }}
      >
        <div className="page-title">Page #1</div>
        <div className="page-description">
          This is the page number 1 of the React.js Transition demo
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Page4

/*
This one requires a bit more thinking to build than the other transitions above, 
the first obvious thing would be to create two <motion.div>’s. 

The outer one for Flip Animation and the inner <motion.div> would be responsible 
for the drop effect.
For the Flip Effect to take place, we use the ScaleX & ScaleY properties. 
ScaleX takes the element and Scales it down to the size specified. 
This distorts the element and mimics the look of a spinning element.

ScaleX can be used for flipping the page along the x-axis whereas used for
flipping the page along the y-axis.
The part for the drop-animations stays the same as before.

*/

