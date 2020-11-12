import React, { Component } from 'react';
import laptop from './Media/laptop.jpg';
import './About.css'

class About extends Component{
    state = {
        about: [
        ],
        isloading: false
    }
  
    async componentDidMount() {
        let response = await fetch('https://statsapi.bytesoft.com.uy/backend/about');
        let body = await response.json();
        //this.setState({ about: body, isLoading: false });
        document.title="Sobre nosotros";
    }
  
    render() {
        return (
            <div>
                <div className="about">
                    <h1 className="aboutTitle">Nuestra misión como empresa de software</h1>
                    <p className="aboutText">ByteSoft será una empresa dedicada exclusivamente al desarrollo informático. Planeamos proyectarnos como la opción ideal en cuanto a empresas de desarrollo de software en Uruguay y, a futuro, internacionalmente. Buscamos que si alguien necesita un producto de software personalizado, piense en ByteSoft como su solución.</p>
                </div>
                <div className="aboutMid">
                    <h1 className="aboutTitle">Visión de ByteSoft</h1>
                    <p className="aboutText">Somos una empresa de desarrollo de software personalizado ubicada en el barrio Buceo que busca satisfacer las necesidades de nuestros clientes mediante el desarrollo de programas únicos y a medida, a gusto y necesidades de cada cliente, brindándoles un producto de una calidad única además de un debido soporte para el mismo. <br/>Nuestra clientela se basa en empresas nacionales o terceros que necesiten una solución personalizada en software, ese es nuestro trabajo.</p>
                </div>
                <div className="about">
                    <h1 className="aboutTitle">Los valores que nos representan</h1>
                    <p className="aboutText">En ByteSoft nos comprometemos a generar productos de excelente calidad con un respaldo y soporte adecuado al mismo, siempre de la forma más eficiente posible y brindándole a nuestros clientes las opciones suficientes como para que puedan ser libres de decidir el costo y su gamma. <br/>Pensamos cumplir estos valores siempre respetando las normas legales y sociales, promoviendo la gran responsabilidad que acarreamos con nuestros clientes y empleados, fomentando y respetando la diversidad y el trato justo con el público y los empleados y por último, mantener siempre una transparencia y diversidad en nuestros catálogos y/o soluciones para nuestros clientes. <br/>Buscamos siempre avanzar hacia un futuro mejor donde todos puedan estar conectados y actualizados, donde seamos reconocidos no solo por nuestro servicio a los clientes, sino por aportar y ayudar a crecer profesionalmente a nuestros empleados. <br/>Promovemos siempre nuestra producción y desarrollo en un ámbito sano y responsable para con el medioambiente, tenemos un fuerte compromiso con este mismo.</p>
                </div>
            </div>
        );
    }
}

export default About;
