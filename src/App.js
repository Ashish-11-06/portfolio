import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
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
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  const handleScrollToAbout = () => {
    const aboutElement = document.getElementById('about-section');
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App" id={load ? "no-scroll" : "scroll"}>
      <Analytics />
      <Preloader load={load} />
      <Navbar onAboutClick={handleScrollToAbout} onScrollToTop={handleScrollToTop} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {/* Conditionally render the About section */}
      {location.pathname === '/' && <About id='about-section' />}
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
