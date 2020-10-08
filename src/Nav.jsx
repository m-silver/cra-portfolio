import React, { useState } from 'react'

import './styles/nav.css'

import Hamburger from './Hamburger'
import NavLinks from './NavLinks'

export default function Nav () {
  return (
    <>
      <div className='nav'>
        <h1>Si</h1>
        <Hamburger />
      </div>
      <NavLinks />
    </>
  )
}