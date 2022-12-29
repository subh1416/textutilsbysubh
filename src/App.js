import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
// import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const removeBodyClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-danger");
  };

  const toggleMode = (cls) => {
    console.log(cls);
    removeBodyClasses();
    document.body.classList.add("bg-" + cls);
    // if (mode === "dark" ) {
    //   setMode("light");
    //   showAlert("Light Mode has been enabled", "success");
    //   document.body.style.backgroundColor = "white";
    // } else {
    //   setMode("dark" || mode===cls);
    //   showAlert("Dark Mode has been enabled", "danger");
    //   document.body.style.backgroundColor = "#636e72";
    // }
  };

  const thememode = () => {
    if (mode === "dark") {
      setMode("light");
      showAlert("Light Mode has been enabled", "success");
      document.body.style.backgroundColor = "white";
      document.title = "Textutils-LightMode";
    } else {
      setMode("dark");
      showAlert("Dark Mode has been enabled", "danger");
      document.body.style.backgroundColor = "#636e72";
      document.title = "Textutils-DarkMode";
    }
  };

  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar
          title="Textutils"
          mode={mode}
          toggleMode={toggleMode}
          thememode={thememode}
          about="About us"
        />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>
            <Route exact
              path="/"
              element={ */}
                <Textform
                  showAlert={showAlert}
                  heading="Enter Your Text"
                  mode={mode}
                />
              {/* } */}
            {/* /> */}
            {/* <Route exact path="/about" element={<About />} />
          </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;

// <Textform
// showAlert={showAlert}
// heading="Enter your text"
// mode={mode}
// />
