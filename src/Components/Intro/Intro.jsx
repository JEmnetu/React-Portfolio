import React, { Component } from 'react';
import 'react-bootstrap';
import './Intro.css';

class IntroBox extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="container-fluid">
            <div className="row">
        
                <img className="mx-auto d-block" id="profilePic" src={this.props.image} alt="My headshot" height={this.props.imgH} width={this.props.imgW}/>
               
            </div>
           <div className="row">
               <div className="jumbotron mx-auto" id="main-text">
                   <h2 id="name">{this.props.name}</h2>
                    <p>{this.props.children}</p>
                    
                    <ul>
                        <li><a href={this.props.github} rel="noopener noreferrer" target="_blank"><i class="fab fa-github fa-3x"></i></a></li>
                        <li><a href={this.props.linkedin} rel="noopener noreferrer" target="_blank"><i class="fab fa-linkedin fa-3x"></i></a></li>
                       
                   </ul>
               </div>
           </div>
        

        </div> );
    }
}
 
export default IntroBox;