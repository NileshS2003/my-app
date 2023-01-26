import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Form from "./Components/form";
import Alert from "./Components/Alert";
// import About from "./About";
// import { createRoot } from "react-dom/client";
// import {
//   BrowserRouter as Router,
//   // RouterProvider,
//   Route,
//   Routes,
//   // Link,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);

  const toggleMode = (props) => {
    if (mode === "light") {
      setMode("dark");
      setAlert("Dark Mode has been enabled");
      setTimeout(() => {
        setAlert(null);
      }, 1300);
    } else {
      setMode("light");
      setAlert("Light Mode has been enabled");
      setTimeout(() => {
        setAlert(null);
      }, 1300);
    }
  };
  return (
    <>
      <Navbar title="Nilesh" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* <div className="container my-3"><About /></div> */}
      <Form heading="Enter the text to analyze" />
    </>
  );
}

export default App;


  /* <Router>
  <Navbar title="Nilesh" mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert} />
  <Routes>
    <Route
      exact
      path="/about"
      element={
        <div className="container my-3">
          <About />
        </div>
      }
    />
    <Route path="/" element={<Form heading="Enter the text to analyze" />} />
  </Routes>
</Router>; */

