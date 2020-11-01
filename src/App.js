import React, { useState } from 'react'
// import './App.css'

import Nav from './Nav'
import VideoHero from './VideoHero'
import Hero from './Hero'
import HeroImage from './HeroImage'
import About from './About'
import Services from './Services'
import Work from './Work'
import Contact from './Contact'
import ShapeBg from './ShapeBg'

function App() {


  return (
    <div className="App">
      <Nav />
      {/* <VideoHero /> */}
      <HeroImage />
      <About />
      <Services />    
      <Work />  
      <Contact />
      {/* <ShapeBg /> */}
    </div>
  )
}

export default App
