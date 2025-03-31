import { useState } from "react";
import "./App.css";
import OpenBox from "./components/OpenBox";
import Main from "./components/Main";
import BoardingPass from "./components/BoardingPass";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <>
      <OpenBox />
      {/* <BoardingPass /> */}
      <Resume />
      <Experience />
      <Projects />
      <AboutMe />
      {/* <Main /> */}
      <Footer />
    </>
  );
}

export default App;
