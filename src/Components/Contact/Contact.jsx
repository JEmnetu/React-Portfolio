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

           {/* <div className="col-xs-1 offset-2"> <a href={props.github} target="_blank" rel="noopener noreferrer"> <i class="fab fa-github fa-4x"></i></a></div>
                   <div className="col-xs-1"><a href={props.linkedin} target="_blank" rel="noopener noreferrer" ><i class="fab fa-linkedin fa-4x"></i></a></div> */}
               <div className="col-xs-1 jumbotron mx-auto" id="main-text">
                   <h1 id="mainHeader">Let's Connect!</h1>
                   <ul>
                <li><a href={props.github} rel="noopener noreferrer">Github </a></li>
                <li><a href={props.linkedin} rel="noopener noreferrer">Linkedin</a></li>
                   </ul>
                   <div className="row mt-4" id="connectDiv">
                   
                   </div>
                   
               </div>
           </div>
        

        </div>)
}
 
export default Contact;