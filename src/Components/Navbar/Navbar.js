import React from 'react';
import logo from '../../Assets/Media/logo white.png'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ( props ) => 
{
    return (
          <div className="navBar">
            <div className="items"></div>
            <button className="responsiveButton">&#9776;</button>
            <Link className="link" to={props.root}><img className="mainLogo" src={logo} alt="Logo"/></Link>
            <nav>
              <ul>
                  <li><Link className="link" to={props.root}>Inicio</Link></li>
                  <li><Link className="link" to={props.about}>Sobre nosotros</Link></li>	
                  <li><Link className="link" to={props.medicare}>MediCare™</Link></li>	
                  <li><Link className="link" to={props.contacto}>Contacto</Link></li>	
              </ul>
            </nav>
          </div>
    );
}

export default Navbar;
