import React, { Component } from 'react';
import laptop from './Media/laptop.jpg';
import './About.css'

class About extends Component{
    render(){
        return(
            <div className="AboutWrapper">
                <div className="uno">
                    <div className="titulo">
                        <h2>Nosotros</h2>
                    </div>	
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    <img src={laptop}></img>
                </div>
                <div className="dos">
                    <img src={laptop}></img>
                    <div className="titulo">
                        <h2>Misión</h2>
                    </div>	
                    <p>"Somos una empresa de desarrollo de software personalizado ubicada en el barrio Buceo que busca satisfacer las necesidades de nuestros clientes mediante el desarrollo de programas únicos y a medida, a gusto y necesidades de cada cliente, brindándoles un producto de una calidad única además de un debido soporte para el mismo. Nos dedicamos actualmente a empresas nacionales y a futuro planeamos dedicarnos también a empresas internacionales."</p>
                </div>
                <div className="uno">
                    <div className="titulo">
                        <h2>Visión</h2>
                    </div>	
                    <p>"Planeamos proyectarnos como la opción ideal en cuanto a empresas de desarrollo de software en Uruguay, si alguien piensa en un producto de software personalizado, buscamos que piense en ByteSoft.
                    Además, nos interesa el desarrollo paulatino de la misma empresa, para así, además de ser reconocidos por nuestros productos, que nos reconozcan por ayudar a cada vez más trabajadores a tener un crecimiento profesional en el área del desarrollo informático.
                    Tenemos pensado enfocarnos exclusivamente en el área del desarrollo informático."</p>
                    <img src={laptop}></img>
	            </div>
            </div>
        )
    }
}

export default About;
