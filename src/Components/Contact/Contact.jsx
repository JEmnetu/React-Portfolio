import React from 'react';
import './Contact.css';

const Contact = (props) => {
    return ( 
    // <div id="target">
    // <div className="jumbotron" id="main-text">Contact Me
    
    // <p>Phone, Email</p></div>
    // </div> );
    <div className="container-fluid" id="target">
            
           <div className="row">
               <div className="jumbotron mx-auto" id="main-text">
                   <h1>Let's Connect!</h1>
    
                   <div className="row mt-5" id="contactDiv">
                   <a href={props.github} target="_blank" rel="noopener noreferrer"> <i class="fab fa-github fa-4x"></i></a>  <a href={props.linkedin} target="_blank" rel="noopener noreferrer" ><i class="fab fa-linkedin fa-4x"></i></a>
                   </div>
                   
               </div>
           </div>
        

        </div>)
}
 
export default Contact;