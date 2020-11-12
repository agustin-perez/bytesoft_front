import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import MediCare from './Pages/MediCare/MediCare';
import Contact from './Pages/Contact/Contact';
import './App.css';

class App extends Component {
  render(){
    return(
      <Router>
        <div className="App">
        <Navbar root="/" about="/about" medicare="/MediCare" contacto="/contact"/>
          <div className="router">
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/MediCare' component={MediCare}/>
                <Route path='/contact' component={Contact}/>
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
} 

export default App;