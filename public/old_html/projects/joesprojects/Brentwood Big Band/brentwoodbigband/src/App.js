import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.css';
import Navigation from './Components/Navigation/Navigation.js';
import Hero from './Components/Hero/Hero.js';
import About from './Components/About/About.js';
import Performances from './Components/Performances/Performances.js';
import Contact from './Components/Contact/Contact.js';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Hero />
        <About />
        <Performances />
        <Contact />
      </div>
    );
  }
}

export default App;
