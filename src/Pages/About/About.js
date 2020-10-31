import React, { Component } from 'react';
import laptop from './Media/laptop.jpg';
import './About.css'

class About extends Component{
    render(){
        return(
            <div className="About">
                <div className="uno">
                    <div className="titulo">
                        <h2>Sample</h2>
                    </div>	
                    <p>"Mucho texto."</p>
                    <img src={laptop} alt="laptop"></img>
                </div>
                <div className="dos">
                    <img src={laptop} alt="laptop"></img>
                    <div className="titulo">
                        <h2>Text</h2>
                    </div>	
                    <p>"Texto mucho."</p>
                </div>
            </div>
        )
    }
}

export default About;
