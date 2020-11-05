import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import logo from '../../Assets/Media/logo white.png'
import styled from 'styled-components';


const Ul = styled.ul`
  list-style: none;
  z-index: 0;
  display: flex;
  left: -100%;
  flex-flow: row nowrap;
  justify-content: center; 
  align-items: center;
  overflow: hidden;
  margin: auto;
  
  li {
    margin: 10px;
    display: inline-block;
  }

  li, .link {
    font-weight: 400;
    font-size: 20px;
    text-decoration: none;
    list-style: none;
    color: gainsboro;
    padding: 10px;
    transition: all 0.3s ease 0s;
    display:inline-block;
    position:relative;
  }

  li .link::after {
    content:'';
    position:absolute;
    width:100%;
    height:2px;
    transform:scaleX(0);
    bottom:0;
    left:0;
    background-color: black;
    transform-origin:bottom right;
    transition:transform 0.7s ease-out;
  }

  li .link:hover {
    color: #7403be;
  }

  li .link:hover::after {
    transform:scaleX(1);
    transform-origin: bottom left;
  }

  .mainLogo{
    padding-top: 1px;
    height: 80px;
  }

  @media (max-width: 1000px) {
    flex-flow: column nowrap;
    background-color: rgba(115, 3, 190, 0.99);;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(149vh)' : 'translateX(-100%)'};
    top: 0;
    left: -150vh;
    margin: auto;
    height: 100%;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    align-items: stretch;
    justify-content: flex-start;

    li {
      padding: 10px 10px;
    }

    li .link:hover {
      color: gainsboro;
    }
    
    .mainLogo{
      display: none;
    }
  }
`;

const LeftNav = ({open}, props ) => {

  if(open){
    return (
      <Ul open={open}>
          <li><Link className="link" to={'/'}>Inicio</Link></li>
          <li><Link className="link" to={'/about'}>Sobre nosotros</Link></li>	
          <li><Link className="link" to={'/MediCare'}>MediCare™</Link></li>	
          <li><Link className="link" to={'/contacto'}>Contacto</Link></li>	
      </Ul>
    )
  }

  return (
      <Ul>
        <Link className="link" to={'/'}><img className="mainLogo" src={logo} alt="Logo"/></Link>
        <li><Link className="link" to={'/'}>Inicio</Link></li>
        <li><Link className="link" to={'/about'}>Sobre nosotros</Link></li>	
        <li><Link className="link" to={'/MediCare'}>MediCare™</Link></li>	
        <li><Link className="link" to={'/contacto'}>Contacto</Link></li>	
      </Ul>
  );
}

export default LeftNav;