import { AnimatePresence } from "framer-motion";
import { useLocation, Routes, Route } from "react-router-dom";
import HomePage from "../routes/HomePage";
import Page1 from "../routes/Page1";
import Page2 from "../routes/Page2";
import Page3 from "../routes/Page3";
import Page4 from "../routes/Page4";

export default function RoutesWithAnimation() {
  let location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/page1" element={<Page1 />}></Route>
        <Route path="/page2" element={<Page2 />}></Route>
        <Route path="/page3" element={<Page3 />}></Route>
        <Route path="/page4" element={<Page4 />}></Route>
        exit={{ opacity: 0 }}
      </Routes>
    </AnimatePresence>
  );
}

