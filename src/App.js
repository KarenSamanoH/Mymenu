import React from 'react';
import logo from './logo.svg';
import './App.css';

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
    </div>
  );
}

export default App;
