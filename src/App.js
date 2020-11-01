import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import MediCare from './Pages/MediCare/MediCare';
//import Contact from './Pages/Contact/Contact';
import logo from './Assets/Media/logo white.png'
import './App.css';

class App extends Component {
  render(){
    function responsiveButton() 
    {
      console.log("triggered");
      var menu = document.getElementById("items");
      if (menu.className === "navBar") 
      {
        menu.className += " responsive";
      } 
      else 
      {
        menu.className = "navBar";
      }
    } 

    function cerrarResponsive()
    {
      var menu = document.getElementById("responsiveStandard");
      if(menu.className !== "navBar")
      {
        menu.className="navBar";
      }
    }

    function cerrarMenus()
    {
      var busMenu = document.getElementsByClassName('contenedorBoton-content');
        for (var i = 0; i < busMenu.length; i++)
        {
          var menuAbierto = busMenu[i];
          if (menuAbierto.classList.contains('show')) 
          {
            menuAbierto.classList.remove('show');
            cerrarResponsive();
          }
        }
    }
    window.onclick = function(e) 
    {
      if (!e.target.matches('.navBar')) 
      {
        cerrarMenus();
      }
    } 
    
    return(
      <Router>
        <div className="App">
          <div className="navBar">
            <div className="items"></div>
            <button className="responsiveButton" onClick={this.responsiveButton}>&#9776;</button>
            <Link className="link" to={'/'}><img className="mainLogo" src={logo} alt="Logo"/></Link>
            <nav>
              <ul>
                  <li><Link className="link" to={'/'}>Inicio</Link></li>
                  <li><Link className="link" to={'/about'}>Sobre nosotros</Link></li>	
                  <li><Link className="link" to={'/MediCare'}>MediCare™</Link></li>	
                  <li><Link className="link" to={'/contacto'}>Contacto</Link></li>	
              </ul>
            </nav>
          </div>
          <div className="router">
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/MediCare' component={MediCare}/>
                <Route path='/contacto' component={Home}/>
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
} 

export default App;