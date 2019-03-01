import React, { Component } from 'react';
import Header from './components/Home/Header';
import Album from './components/Home/Album';
import Footer from './components/Home/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Album />
        <Footer />
      </div>
    );
  }
}

export default App;
