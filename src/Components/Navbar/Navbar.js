import React from 'react';
import logo from '../../Assets/Media/logo white.png'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';
import Responsive from './Responsive';

const Nav = styled.nav`
  width: 100%;
  height: 100px;
  display: flex;
  z-index: 0;
  
  .logo {
    padding: 15px 0;
  }

  @media (max-width: 1000px){
    height: 55px;
  }
`;


const Navbar = ( props ) => {
    return (
          <div className="navBar">
    {/*<button className="responsiveButton">&#9776;</button>
            <Link className="link" to={props.root}><img className="mainLogo" src={logo} alt="Logo"/></Link>*/}
            <Nav>
              <Responsive props/>
            </Nav>
          </div>
    );
}

export default Navbar;
