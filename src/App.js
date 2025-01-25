

// Functional based component
import "./App.css";
import React, { useState } from "react";
import NavBar from "./Component/NavBar.js";
import Shopping from "./Component/Shopping.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pagesize = 6;

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <LoadingBar height="3px" color="#f11946" progress={progress} />
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Shopping
                setProgress={setProgress}
                key="general"
                pageSize={pagesize}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <Shopping
                setProgress={setProgress}
                key="business"
                pageSize={pagesize}
                country="in"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <Shopping
                setProgress={setProgress}
                key="entertainment"
                pageSize={pagesize}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <Shopping
                setProgress={setProgress}
                key="general"
                pageSize={pagesize}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <Shopping
                setProgress={setProgress}
                key="health"
                pageSize={pagesize}
                country="in"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <Shopping
                setProgress={setProgress}
                key="science"
                pageSize={pagesize}
                country="in"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <Shopping
                setProgress={setProgress}
                key="sports"
                pageSize={pagesize}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <Shopping
                setProgress={setProgress}
                key="technology"
                pageSize={pagesize}
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
