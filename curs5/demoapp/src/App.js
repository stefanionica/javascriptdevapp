import './App.css';
import React, { Component } from 'react';

import SalutComponent from './components/SalutComponent';
import Clicker from './components/Clicker';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
class App extends Component {

  constructor(props) {
    super(props);
    console.log('Sunt in constructor');
  }
  componentDidMount() {
    console.log('Sunt in componentDidMount');
  }

  render() {
    return (
      <div className="App">
         <nav>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          
        </ul>
      </nav>
        <BrowserRouter>
          <Routes>
           <Route path="/home" element={<Home />} />
           <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
        <h1> Salut React!</h1>
        <SalutComponent name='Ion' />
        <SalutComponent name='Vasile' />
        <Clicker />
      </div>
    );
  }

}

export default App;
