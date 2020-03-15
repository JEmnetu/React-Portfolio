import React, { Component } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Intro from '../../Components/Intro/Intro';
import Title from '../../Components/Title/Title';
import Footer from '../../Components/Footer/Footer';
import './About.css'

class About extends Component {
    state = {  }
    render() { 
        return ( <div>
            {/* <Navbar />
            <Title/> */}
            <Intro />
        </div> );
    }
}
 
export default About;