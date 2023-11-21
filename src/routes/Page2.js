import NavBar from "../components/Navbar";
import {motion} from "framer-motion"

function Page2() {
  //Content Dropping Animation
  return (
    <div 
      className="page2"
    >
      <NavBar></NavBar>
      <motion.div 
        className="page-body"
        initial={{
          y: -150,
        }}
        animate={{
          y: 0,
          transition: {
            duration: 0.95
          }
        }}
      >
        <div className="page-title">Page #2</div>
        <div className="page-description">
          This is the page number 2 of the React.js Transition demo
        </div>
      </motion.div>
    </div>
  );
}

export default Page2;

/*
This might be a little different from other animations as we are 
using <motion.div> to wrap only the content instead of wrapping 
the entire page component.
This is because the Content Drop Animation needs to be performed 
on the content itself, and not on the entire page.

Note- you can implement "Variants" also to achieve this.


 */