import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1 className='hero'>Matt Silver</h1>
      <video playsInline autoPlay loop id="myVideo">
        <source src="/Smoke2.webm" type="video/webm" />
        <source src="/Smoke2.mp4" type="video/mp4" />
      </video>  
      {/* <img src='/car.jpg'></img> */}
    </div>
  )
}

export default App
