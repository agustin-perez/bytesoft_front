import React, { Component } from 'react';
import logo from './Media/homeLogo.png';
import './Home.css';

class Home extends Component{
    state = {
        titulo: "Somos Bytesoft",
        lema: "Nuestro Software, tu solución"
    }
    
    render(){
        return(
            <div className="homeWrapper">
                <div className="main">
                    <h1>{this.state.titulo}</h1>      
                    <h2>{this.state.lema}</h2>
                </div>
            </div>
        )
    }
}

export default Home;
