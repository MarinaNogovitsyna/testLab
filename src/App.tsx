import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import { HowWork } from './components/HowWork/HowWork';
import { Block3 } from './components/Block3/Block3';
import { Reviews } from './components/Reviews/Reviews';
import { Questions } from './components/Questios/Questions';

function App() {
  return (
    <>
      <Header />
      <HowWork />
      <Block3 />
      <Reviews />
      <Questions />
      <div id='form' style={{height: 300}}>section4</div>
    </>
  );
}

export default App;
