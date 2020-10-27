import React, { useContext, useState, useEffect } from 'react'

import { NavToggleContext } from './NavToggleContext'

export default function Hero () {
  const [navToggle, setNavToggle] = useContext(NavToggleContext)
  const [style, setStyle] = useState('hero')

  useEffect(() => {
    navToggle ? setStyle('hero') : setStyle('hero show')
  }, [navToggle])

  return(
    <div className='bgHero'> 
      <h1 className={style}>Matt Silver</h1>
    </div>
  )
}