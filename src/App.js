import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './Pages/About/About';
import Contact from './Components/Contact/Contact';
import Projects from './Pages/About/Projects/Projects';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
let userInfo = {"linkedin":"https://www.linkedin.com/in/habtemariamje/", 
                "github":"https://www.github.com/Jemnetu",
                "email":"J.habtema@gmail.com"};
function App() {
  
  return (
    <Router>
      
        <Navbar />
        <Switch>
        <Route exact path="/Contact" render={(props)=><Contact {...props} github={userInfo.github} linkedin={userInfo.linkedin} email={userInfo.email} />}/>
        
        <Route exact path="/" component={About}/>
        <Route exact path="/Projects" component={Projects}/>
        </Switch>
        <Footer />
      
    </Router>
  );
}

export default App;
