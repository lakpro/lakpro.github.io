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
import Form from "./components/form";
import Test from "./components/Greetings";

function App() {
  return (
    <>
      {/* <Test /> */}
      {/* <Form /> */}
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
