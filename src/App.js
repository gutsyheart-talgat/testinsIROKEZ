import React from 'react';
import './App.css';
import Header from './components/Header/index'
import Headline from './components/Headline/index'
import Menu from './components/Menu'
import Blocks from './components/Blocks'
import Events from './components/Events'


function App() {
  return (
    <div className="back">
      <Header/>
      <div className="container">
        <main className="main">
          <Menu className="menu"/>
          <div className="content">
            <Headline/>
            <Blocks />
            <Events />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
