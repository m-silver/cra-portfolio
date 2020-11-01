import React, { useContext, useState, useEffect } from 'react'
import ReactRotatingText from 'react-rotating-text'
import { Link, animateScroll as scroll } from 'react-scroll'

import { NavToggleContext } from './NavToggleContext'

const TEXTS = ['Developer', 'Creator', 'Designer', 'Collaborator', 'Innovator', 'Ninja'] /*'dreamer', 'father', 'musician', 'Programmer' */

export default function Hero () {
  const [navToggle, setNavToggle] = useContext(NavToggleContext)

  return(
    <>
        <div className='heroImage'>
            <div className='seperator'></div>
            <div className='side-hero-text'>
                {/* <h1 className={navToggle ? 'right-arrow show' : 'right-arrow'}>&rarr;</h1> */}
                <h1 className={navToggle ? 'hero' : 'hero show'}>Matt Silver</h1>
                <h1 className={navToggle ? 'hero' : 'hero show'}>
                    <ReactRotatingText 
                    items={TEXTS} 
                    typingInterval='75'
                    deletingInterval='50'
                    />
                </h1>
            </div>

            <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            ><div className={navToggle ? 'down-arrow' : 'down-arrow show'}>&#x2193;</div></Link>
        </div>
    </>
  )
}