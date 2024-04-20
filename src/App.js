import React from "react";
import"./index.css"
import Home from "./routes/Home"
import Dance1 from "./routes/Dance1"
import Dance2 from "./routes/Dance2"
import Dance3 from "./routes/Dance3"
import{Route,Routes} from "react-router-dom"
function App() {
  return (
     <>
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Dance1" element={<Dance1 />}/>
      <Route path="/Dance2" element={<Dance2 />}/>
      <Route path="/Dance3" element={<Dance3 />}/>
      </Routes>
     </>
  );
}

export default App;
