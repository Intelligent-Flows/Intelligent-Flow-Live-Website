import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Pricing from './Pricing';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
