import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import { HowWork } from './components/HowWork/HowWork';
import { Block3 } from './components/Block3/Block3';
import { Reviews } from './components/Reviews/Reviews';
import { Questions } from './components/Questios/Questions';
import { InfoBlock } from './components/InfoBlock/InfoBlock';
import { FormBlock } from './components/FormBlock/FormBlock';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <HowWork />
      <Block3 />
      <Reviews />
      <Questions />
      <InfoBlock />
      <FormBlock />
      <Footer />
    </>
  );
}

export default App;
