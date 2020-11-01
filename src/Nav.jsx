import React, { useState } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'

import './styles/nav.css'

import Hamburger from './Hamburger'
import NavLinks from './NavLinks'

export default function Nav () {
  return (
    <>
      <div className='nav'>
        <div className='nav-logo-container' onClick={() => scroll.scrollToTop()}>
          <div className='nav-logo'>
            Si
          </div>
        </div>
        <Hamburger />
      </div>
      <NavLinks />
    </>
  )
}