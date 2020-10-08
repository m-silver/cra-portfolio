import React, { useContext, useState, useEffect } from 'react'

import { NavToggleContext } from './NavToggleContext'

export default function VideoHero () {
  const [navToggle, setNavToggle] = useContext(NavToggleContext)
  const [style, setStyle] = useState('hero')

  useEffect(() => {
    navToggle ? setStyle('hero') : setStyle('hero show')
  }, [navToggle])

  return(
    <div className='videoHero'> 
      {/* {navToggle ? null : <h1 className='hero'>Matt Silver</h1>} */}
      <h1 className={style}>Matt Silver</h1>
      <video playsInline autoPlay muted loop id="myVideo">
        <source src="/Smoke2.webm" type="video/webm" />
        <source src="/Smoke2.mp4" type="video/mp4" />
      </video> 
    </div>
  )
}