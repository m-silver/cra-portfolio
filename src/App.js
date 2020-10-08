import React, { useState } from 'react'
import './App.css'

import Nav from './Nav'
import NavLinks from './NavLinks'

function App() {


  return (
    <div className="App">
      <h1 className='hero'>Matt Silver</h1>
        <Nav />
        <video playsInline autoPlay muted loop id="myVideo">
          <source src="/Smoke2.webm" type="video/webm" />
          <source src="/Smoke2.mp4" type="video/mp4" />
        </video>  
    </div>
  )
}

export default App
