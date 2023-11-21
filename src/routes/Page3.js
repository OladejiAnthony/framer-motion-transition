import NavBar from "../components/Navbar";
import { motion } from "framer-motion";

function Page3() {
  //Slide + Drop Animation

  return (
    <motion.div 
      className="page1"
      initial={{
        width: "0%",
      }}
      animate={{
        width: "100%",
      }}
      exit={{
        width: "0%",
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
        <div className="page-title">Page #3</div>
        <div className="page-description">
          This is the page number 3 of the React.js Transition demo
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Page3;

/*
To make things interesting, this time – we will be combining 2 transitions. 

The final transition will consist of a Slide transition + Drop transition both 
happening at the same time. 
This combination will create a really exciting effect.

Note- you can implement "Variants" also to achieve this.

*/

