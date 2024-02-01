import React from 'react';
import styles from "./App.module.css"
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'
import Skills from './components/Skills/Skills'
// import Hero1 from './components/Hero/Hero1'


const App = () => {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
      <Contact/>
    </div>
  )
}

export default App