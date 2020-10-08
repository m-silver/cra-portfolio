import React, { useContext } from 'react'

import { NavToggleContext } from './NavToggleContext'

export default function NavLinks () {
  const [navToggle, setNavToggle] = useContext(NavToggleContext)
  
  if (navToggle) { 
    return(
      <div className='navLinks'>
        <h1>About</h1>
        <h1>Work</h1>
        <h1>Contact</h1>
      </div>
    )
  } return(null)
}