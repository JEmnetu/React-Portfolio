import React, { Component } from 'react';

class Card extends Component {
    state = {  }
    render() { 
        return ( 
    <div className="card mb-3" style={{border:"solid 4px black"}}>
          <img src={this.props.image} className="card-img-top" alt="Project"></img>
            <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
        </div>  
    </div>);
    }
}
 
export default Card;