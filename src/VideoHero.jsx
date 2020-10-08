import React, { useContext } from 'react'

import { NavToggleContext } from './NavToggleContext'

export default function VideoHero () {
  const [navToggle, setNavToggle] = useContext(NavToggleContext)

  return(
    <div className='videoHero'> 
      {navToggle ? null : <h1 className='hero'>Matt Silver</h1>}
      <video playsInline autoPlay muted loop id="myVideo">
        <source src="/Smoke2.webm" type="video/webm" />
        <source src="/Smoke2.mp4" type="video/mp4" />
      </video> 
    </div>
  )
}