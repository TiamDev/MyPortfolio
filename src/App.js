import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
function App() {
  return (
    <div >
    <Sidebar/>
    <main className="main">
      <Home/>
      <About/>
      <Skills/> 
      <Projects/> 
      <Contact/>
    </main>
    </div>
  );
}

export default App;
