import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './Pages/About/About';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/Contact" component={Contact}/>
        <Route exact path="/" component={About}/>
        <Route exact path="/Projects" component={Projects}/>
      
      </div>
    </Router>
  );
}

export default App;
