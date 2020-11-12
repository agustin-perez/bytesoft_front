import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component{
    render(){
        return(
            <div className="contact">
                <h1 className="contactTitle">Teléfono</h1>
                <hr className="contactSeparator"/>
                <p className="contactText">+598 99 611 135</p>
                <br/>
                <h1 className="contactTitle">Mail</h1>
                <hr className="contactSeparator"/>
                <p className="contactText">bytesoftuy@gmail.com</p>
                <br/>
                <h1 className="contactTitle">Ubicación</h1>
                <hr className="contactSeparator"/>
                <p className="contactText">Luis A De Herrera 1145 Buceo, Montevideo, Uruguay</p>
                <iframe className="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.9797183613755!2d-56.138847984763075!3d-34.906958481112866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f81155fb8a3cd%3A0xc32b617379790298!2sAv.%20Dr.%20Luis%20Alberto%20de%20Herrera%201145%2C%2011300%20Montevideo%2C%20Departamento%20de%20Montevideo!5e0!3m2!1ses!2suy!4v1605196789094!5m2!1ses!2suy" width="1000px" height="600px"></iframe>
            </div>
        )
    }
}



export default Contact;
