import React from "react";
import Home from "./pages/Home";
import Services from "./components/Services.js"
import Testimonials from "./components/Testimonials.js"
import "./styles/styles.css";
import BackgroundCp from "./components/BackgroundCp";
import Header from "./components/Header.js";

function App() {
  return(
    <div>
     <BackgroundCp/>
     <Services/>
    </div>
  )
}

export default App;
