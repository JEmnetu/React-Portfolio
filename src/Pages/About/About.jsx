import React, { Component } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Intro from '../../Components/Intro/Intro';
import Title from '../../Components/Title/Title';
import Footer from '../../Components/Footer/Footer';
import imag from '../../images/Profile_Pic.png';
import './About.css'


class About extends Component {
    state = {  }
    render() { 
        return ( <div id="target">
            {/* <Navbar />
            <Title/> */}
            <Intro 
            name="Jacob Habtemariam"
            town="Reisterstown, Maryland"
            job="Full Stack Developer"
            image={imag}
            imgH="250px"
            imgW="250px"
            >
                Full Stack Web Developer from Reisterstown, Maryland. 
            </Intro>

        </div> );
    }
}
 
export default About;