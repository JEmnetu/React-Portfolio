import React, { Component } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Intro from '../../Components/Intro/Intro';
import Title from '../../Components/Title/Title';
import Footer from '../../Components/Footer/Footer';



import './About.css'


class About extends Component {
    state = { headshot:"./images/Profile_Pic.png" }
    render() { 
        
        return ( <div id="target">
            {/* <Navbar />
            <Title/> */}
            <Intro 
            name="Jacob Habtemariam"
            town="Reisterstown, Maryland"
            job="Full Stack Developer"
            image={this.state.headshot}
            
            imgH="250px"
            imgW="250px"
            github={this.props.github}
            linkedin={this.props.linkedin}
            >
                Full Stack Web Developer from Reisterstown, Maryland. Recently completed the Full
                Stack Web Development Bootcamp at Johns Hopkins University, studying the MERN Stack.
               
            </Intro>

        </div> );
    }
}
 
export default About;