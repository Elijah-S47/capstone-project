import React from 'react';

import { Nav, Footer, Hero, Highlights, Testimonials, About } from '../components';


function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <Highlights/>
      <Testimonials/>
      <About/>
      <Footer/>
    </>
  );
}

export default HomePage;