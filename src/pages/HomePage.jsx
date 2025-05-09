import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
};

export default HomePage;