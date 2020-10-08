import React, {useState} from 'react'

import './hamburger.css'

export default function Hamburger () {
  const [toggleClass, setToggleClass] = useState('hamburger hamburger--spring')

  const clickHandler = () => {
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