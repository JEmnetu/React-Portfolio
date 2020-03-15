import React, { Component } from 'react';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( <div className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Jacob Habtemariam</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">

            <li class="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Resume</a>
            </li>

          </ul>
          
        </div>
      </div> );
    }
}
 
export default Navbar;