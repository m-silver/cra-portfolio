import React, { useState } from 'react'
// import './App.css'

import Nav from './Nav'
import VideoHero from './VideoHero'
import About from './About'
import Services from './Services'
import Work from './Work'
import Contact from './Contact'

function App() {


  return (
    <div className="App">
      <Nav />
      <VideoHero />
      <About />
      <Services />    
      <Work />  
      <Contact />
    </div>
  )
}

export default App
