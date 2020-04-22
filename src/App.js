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
                "resume":"https://drive.google.com/file/d/1kEAli33oP1utc5GxWInlVvhknLwgaS75/view?usp=sharing",
                "email":"J.habtema@gmail.com"};
function App() {
  
  return (
    <Router>
      
        <Navbar resume={userInfo.resume} />
        <Switch>
        
        
        <Route exact path="/" render={(props)=><About {...props} github={userInfo.github} linkedin={userInfo.linkedin} email={userInfo.email} />}/>
        <Route exact path="/Projects" component={Projects}/>
        </Switch>
        
      
    </Router>
  );
}

export default App;
