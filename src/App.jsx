import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom"
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Projects />
    </>
  );
}

export default App;
