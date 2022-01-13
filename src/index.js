import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//component file
import TodoContainer from "./functionBased/components/TodoContainer";
import About from "./functionBased/pages/About";
import NotMatch from "./functionBased/pages/NotMatch";
//stylesheet
import "./functionBased/App.css";

import NavBar from "./functionBased/components/NavBar";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<TodoContainer />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
