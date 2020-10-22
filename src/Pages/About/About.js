import React, { Component } from 'react';
import laptop from './Media/laptop.jpg';
import './About.css'

class About extends Component{
    render(){
        return(
            <div className="About">
                <div className="uno">
                    <div className="titulo">
                        <h2>Nosotros</h2>
                    </div>	
                    <p>"Nosotros somos ByteSoft, un equipo de estudiantes encargados de hacer el proyecto llamado “Sistema de consulta médica” para el pasaje de año en ESI Buceo 2020 del grupo 3°BD."</p>
                    <img src={laptop}></img>
                </div>
                <div className="dos">
                    <img src={laptop}></img>
                    <div className="titulo">
                        <h2>Misión</h2>
                    </div>	
                    <p>"Somos una empresa de desarrollo de software personalizado ubicada en el barrio Buceo que busca satisfacer las necesidades de nuestros clientes mediante el desarrollo de programas únicos y a medida, a gusto y necesidades de cada cliente, brindándoles un producto de una calidad única además de un debido soporte para el mismo. Nuestra clientela se basa en empresas nacionales o terceros que necesiten una solución personalizada en software, ese es nuestro trabajo."</p>
                </div>
                <div className="uno">
                    <div className="titulo">
                        <h2>Visión</h2>
                    </div>	
                    <p>"ByteSoft será una empresa dedicada exclusivamente al desarrollo informático. Planeamos proyectarnos como la opción ideal en cuanto a empresas de desarrollo de software en Uruguay y, a futuro, internacionalmente. Buscamos que, si alguien necesita un producto de software personalizado, piense en ByteSoft como su solución."</p>
                    <img src={laptop}></img>
	            </div>
            </div>
        )
    }
}

export default About;
