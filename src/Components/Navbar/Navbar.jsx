import React, { Component } from 'react';
import{Navbar, Button, FormControl, Form, Nav } from 'react-bootstrap';
import './Navigation.css';


class Navigation extends Component {
    
    render() { 
      //   return ( <div className="navbar navbar-expand-lg">
      //   <a className="navbar-brand" href="/">My Portfolio</a>
      //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      //     <span className="navbar-toggler-icon"></span>
      //   </button>
      
      //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
      //     <ul className="navbar-nav mr-auto">

      //       <li className="nav-item">
      //         <a className="nav-link" href="/">Home</a>
      //       </li>
      //       <li className="nav-item">
      //         <a className="nav-link" href="/Projects">Projects</a>
      //       </li>
      //       <li className="nav-item">
      //         <a className="nav-link" href="/Contact">Contact</a>
      //       </li>
      //       <li className="nav-item">
      //         <a className="nav-link" href={this.props.resume} target="_blank" rel="noopener noreferrer">Resume</a>
      //       </li>

      //     </ul>
          
      //   </div>
      // </div> );
      return (
        <div>
          <Navbar collapseOnSelect expand="sm" variant="dark"
            style={{
              backgroundColor: "rgb(100, 0, 0)",
              color: "white",
              borderBottom: "black solid 6px",
              
            }}
            
          >
            <Navbar.Brand href="/">My Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" id="toggle"/>
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Projects">Projects</Nav.Link>
              
              <Nav.Link href={this.props.resume} target="_blank">
                Resume
              </Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      );
    }
}
 
export default Navigation;