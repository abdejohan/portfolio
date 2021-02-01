import React from "react";
import "./styles/App.css";
import "./styles/Typography.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Header />
      <About />
      <Projects />
    </>
  );
}

export default App;
