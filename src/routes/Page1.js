import NavBar from "../components/Navbar";
import {motion} from "framer-motion"

function Page1() {
    //Fade In – Fade Out Transition
  return (
    <motion.div 
        className="page1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        exit={{ opacity: 0 }}
    >
      <NavBar></NavBar>
      <div className="page-body">
        <div className="page-title">Page #1</div>
        <div className="page-description">
          This is the page number 1 of the React.js Transition demo
        </div>
      </div>
    </motion.div>
  );
}

export default Page1;

/*

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

*/