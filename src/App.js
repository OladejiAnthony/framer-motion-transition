import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../src/routes/HomePage";
import Page1 from "../src/routes/Page1";
import Page2 from "../src/routes/Page2";
import Page3 from "../src/routes/Page3";
import "./App.css"
import Page4 from "./routes/Page4";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Page1" element={<Page1 />}></Route>
        <Route path="/Page2" element={<Page2 />}></Route>
        <Route path="/Page3" element={<Page3 />}></Route>
        <Route path="/Page4" element={<Page4 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*
To perform animation in a <motion.div> we need to add three properties:
-"Initial" – Initial look of the page as soon as it is loaded
-"Animate" – The animation that takes place after the initial property is loaded
-"Exit" – The animation that takes place when the Page is switched or is not being displayed anymore 

*/

