import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Products from './Pages/Products/Products';
import Stats from './Pages/Stats/Stats';
import Contact from './Pages/Contact/Contact';
import logo from './logo.png'

import './App.css';

class App extends Component {
  render(){
    return(
      <Router>
        <div className="App">
          <div className="navBar">
            <div className="items"></div>
            <Link className="link" to={'/'}><img src={logo} alt="Logo"/></Link>
            <nav>
              <ul>
                  <li><Link className="link" to={'/'}>INICIO</Link></li>
                  <li><Link className="link" to={'/about'}>QUIÉNES SOMOS</Link></li>	
                  <li><Link className="link" to={'/stats'}>ESTADÍSTICAS</Link></li>	
                  <li><Link className="link" to={'/productos'}>PRODUCTOS</Link></li>
                  <li><Link className="link" to={'/contacto'}>CONTACTO</Link></li>	
              </ul>
            </nav>
          </div>
          <div className="router">
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/stats' component={Stats}/>
                <Route path='/productos' component={Products}/>
                <Route path='/contacto' component={Contact}/>
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;