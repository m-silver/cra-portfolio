import React, { useState } from 'react'
// import './App.css'

import Nav from './Nav'
import VideoHero from './VideoHero'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Work from './Work'
import Contact from './Contact'

function App() {


  return (
    <div className="App">
      <Nav />
      {/* <VideoHero /> */}
      <Hero />
      <About />
      <Services />    
      <Work />  
      <Contact />
    </div>
  )
}

export default App
