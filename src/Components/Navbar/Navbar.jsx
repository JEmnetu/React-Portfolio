import React, { Component } from 'react';
import './Navbar.css';


class Navbar extends Component {
    state = {  }
    render() { 
        return ( <div className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/">My Portfolio</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">

            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://drive.google.com/file/d/1uLKSLwVakkulZ8MMoII3wGHhIdUx3_FL/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
            </li>

          </ul>
          
        </div>
      </div> );
    }
}
 
export default Navbar;