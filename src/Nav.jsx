import React, { useState } from 'react'

import Hamburger from './Hamburger'

export default function Nav () {
  const [navToggle, setNavToggle] = useState(false)

  return (
    <div className='nav'>
      <h1>Si</h1>
      <Hamburger />
    </div>
  )
}