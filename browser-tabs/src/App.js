import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import RoutePaths from "./RoutePaths";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="browser">
          <Header />
          <div className="viewport">
            <RoutePaths />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
