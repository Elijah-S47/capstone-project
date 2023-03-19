import React from 'react';

import './App.css';
import { Nav, Footer, Hero, Highlights, Testimonials, About } from './Components';


function App() {
  return (
    <>
      <Nav />
      <Hero/>
      <Highlights/>
      <Testimonials/>
      <About/>
      <Footer/>
    </>
  );
}

export default App;
