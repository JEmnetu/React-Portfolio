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
               </div>
           </div>
        

        </div> );
    }
}
 
export default IntroBox;