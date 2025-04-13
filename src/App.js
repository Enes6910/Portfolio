import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Projects />
      <About />
    </div>
  );
}

export default App;
