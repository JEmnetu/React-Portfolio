import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    state = {  }
    render() { 
        return ( 
    <div className="card mb-5" style={{border:"solid 4px black"}}>
          <img src={this.props.image} className="card-img-top" alt="Project"></img>
            <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            
            <div className="row">
            <a href={this.props.github} target="_blank" rel="noopener noreferrer" className="btn btn-danger mb-1" >Github Repo </a>
            <a href={this.props.deploy} target="_blank" rel="noopener noreferrer" className="btn btn-danger" >Deployed Application </a>
            </div>
          
        </div>  
    </div>);
    }
}
 
export default Card;