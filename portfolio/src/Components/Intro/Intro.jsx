import React, { Component } from 'react';
import 'react-bootstrap';
import './Intro.css';

class IntroBox extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="container-fluid">
            <div className="row">
                <div id="introP">
                    <p >My name is Jacob Habtemariam and I am a Full Stack Web Developer
                        from Reisterstown, Maryland.
                    </p>
                </div>
                
            </div>
           
        

        </div> );
    }
}
 
export default IntroBox;