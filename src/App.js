// App.js
import React from 'react';
import Intro from './components/Intro';
import Work from './components/Work';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './index.css'; // Import the CSS file

function App() {
  return (
    <div className="app">
      <header className="header">
        <nav className="simon-nav">
          <a href="#intro" className="simon-button green" aria-label="Intro section"></a>
          <a href="#work" className="simon-button red" aria-label="Education & Work section"></a>
          <a href="#skills" className="simon-button yellow" aria-label="Skills section"></a>
          <a href="#contact" className="simon-button blue" aria-label="Contact section"></a>
        </nav>
      </header>

      <main className="main-content">
        <Intro />
        <Work />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;