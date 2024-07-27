import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
   <Router>
      <div className = "app">
      <Header />
        <Home />
     
      <Routes>
        {/* <Route path='/' exact Component={About} /> */}
        {/* <Route path='/projects' exact Component={Projects} />
        <Route path='/contact' exact Component={Contact} /> */}
        {/* <Route path='/resume' exact Component={resume} /> */}
      </Routes>
      <About />
      <Projects />
      <Contact />
     
      </div>
      <Footer className="footerr"/>
   </Router>
   
  );
}

export default App;
