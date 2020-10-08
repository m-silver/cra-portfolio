import React, { useState, useContext} from 'react'

import { NavToggleContext } from './NavToggleContext'

import './styles/hamburger.css'

export default function Hamburger () {
  const [navToggle, setNavToggle] = useContext(NavToggleContext)
  const [toggleClass, setToggleClass] = useState('hamburger hamburger--spring')

  const clickHandler = () => {
    navToggle ? setNavToggle(false) : setNavToggle(true)
    toggleClass === 'hamburger hamburger--spring' ? setToggleClass('hamburger hamburger--spring is-active') : setToggleClass('hamburger hamburger--spring')
  }

  return(
    <div className={toggleClass} onClick={clickHandler}>
      <div className='hamburger-box'>
        <div className='hamburger-inner'></div>
      </div>
    </div>
  )
}