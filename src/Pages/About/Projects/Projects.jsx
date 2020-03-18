import React, {Component} from 'react';
import {Jumbotron, CardGroup} from 'react-bootstrap'
import Card from '../../../Components/Cards/Card';
import projectData from '../../../project-data.json';
import './Project.css';
 
class Projects extends Component {
    state = { data:projectData }
    
    render() { 
        console.log(this.state.data[0].src)
        return ( <div id="target" className="container-fluid">
    
           
               <div className="row">
                    
                    {this.state.data.map((card, i)=>
                    <div className="col-lg-4 col-md-4">
                     <Card name={this.state.data[i].name}
                           image={this.state.data[i].src}
                           key={i}
                           github={this.state.data[i].github}
                           deploy={this.state.data[i].deploy}
                     />
                      </div>  
                 )}

                        
                    </div>   
                   
                   
                   
                   
               

             
         
           
             
             
             </div>  );
    }
}
 
export default Projects;