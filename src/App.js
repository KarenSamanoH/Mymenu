import React from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from './components/slider/slider'

//Components
import Navbar from './components/navbar/navbar';

//Css
import '@fortawesome/fontawesome-free';
import './components/navbar/style/navbar.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <Slider/>
    </div>
  );
}

export default App;
