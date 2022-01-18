import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import Web from "./components/Web";
import About from "./components/About";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/web" element={<Web />} />
          </Routes>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
