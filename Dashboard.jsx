import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Grade from "./Grade";
import Question from "./Question";
import "./index.css";

const App = () => {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/g3" element={<Grade grade="3" />} />
              <Route path="/g4" element={<Grade grade="4" />} />
              <Route path="/g5" element={<Grade grade="5" />} />
              <Route path="/g6" element={<Grade grade="6" />} />
              {console.log(window.location.pathname)}
              <Route path="g/:grade/:quizId" element={<Question />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
