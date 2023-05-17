import React from 'react';


import { Footer, Blog, Possibility, WhatGPT3, Features, Header } from './containers'; // from containers folder
import { Navbar, Brand, CTA } from './components'; // from components folder
import './App.css';

const App = () => {
  return (
      <div className='App'>
      <div className='gradient_bg'>
        <Navbar />
        <Header />
      </div>
        <Brand /> 
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App