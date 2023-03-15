import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import './App.css';
import { Nav, Footer, Hero, Highlights, Testimonials, About } from './Components';


function App() {
  return (
    <ChakraProvider>
      <Nav/>
      <Hero/>
      <Highlights/>
      <Testimonials/>
      <About/>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
