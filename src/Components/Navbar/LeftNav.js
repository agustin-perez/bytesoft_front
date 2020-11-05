import React from 'react';
import logo from '../../Assets/Media/logo white.png'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Navbar.css';

const LeftNav = ( props ) => 
{
    return (
          <div className="LeftNav">
            <button className="LeftNav-responsive-buttons">&#9776;</button>
            <Link className="LeftNav-link" to={props.root}><img className="LeftNav-mainlogo" src={logo} alt="Logo"/></Link>
            <nav>
              <ul>
                  <li><Link className="LeftNav-link" to={props.root}>Inicio</Link></li>
                  <li><Link className="LeftNav-link" to={props.about}>Sobre nosotros</Link></li>	
                  <li><Link className="LeftNav-link" to={props.medicare}>MediCare™</Link></li>	
                  <li><Link className="LeftNav-link" to={props.contacto}>Contacto</Link></li>	
              </ul>
            </nav>
          </div>
    );
}

export default LeftNav;