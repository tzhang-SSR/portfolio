import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Projects />
      <Footer />
      <Navbar />
    </div>
  );
}

export default App;
