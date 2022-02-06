import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchingState: false,
    };
  }

  render() {
    return (
      <>
        <div>
          <nav>
            <div id="allButtons">
              <Link to="/" class="LinkButton">
                Home
              </Link>
              <Link to="/about" class="LinkButton">
                About
              </Link>
              <Link to="/projects" class="LinkButton">
                Projects
              </Link>
              <Link to="/contact" class="LinkButton">
                Contact
              </Link>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </>
    );
  }
}

export default App;
