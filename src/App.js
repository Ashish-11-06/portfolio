import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
import Preloader from './components/Pre';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from './components/Resume/ResumeNew';
import ScrollToTop from "./components/ScrollToTop";
import './style/style.css';
import './style/App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, updateLoad] = useState(true);
  const location = useLocation(); // Correct usage within Router context

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const handleScrollToAbout = () => {
    const aboutElement = document.getElementById('about-section');
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App" id={load ? "no-scroll" : "scroll"}>
      <Preloader load={load} />
      <Navbar onAboutClick={handleScrollToAbout} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
      {/* Conditionally render the About component */}
      {location.pathname !== '/resume' && <About id='about-section' />}
      <Footer />
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
