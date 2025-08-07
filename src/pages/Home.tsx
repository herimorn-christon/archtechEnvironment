import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import DesignProcess from '../components/home/DesignProcess';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      <Hero />
      <Features />
      <DesignProcess />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Home;