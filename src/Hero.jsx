import React, { useContext, useState, useEffect } from 'react'
import TextTransition, { presets } from 'react-text-transition'
import ReactRotatingText from 'react-rotating-text'
import { Link, animateScroll as scroll } from 'react-scroll'

import { NavToggleContext } from './NavToggleContext'

const TEXTS = ['Developer', 'Creator', 'Designer', 'Collaborator', 'Innovator', 'Ninja'] /*'dreamer', 'father', 'musician', 'Programmer' */

export default function Hero () {
  const [navToggle, setNavToggle] = useContext(NavToggleContext)
  const [style, setStyle] = useState('hero')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    navToggle ? setStyle('hero') : setStyle('hero show')
  }, [navToggle])

  useEffect(() => {
    const intervalId = setInterval(() => 
        setIndex(index => index + 1),
        2500
    )    
  }, [])

  return(
    <>
        <div className='bgHero'>
            <div className='seperator'></div>
            <div className='side-hero-text'>
                <h1 className={style}>Matt Silver</h1>
                <h1 className={style}>
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
            ><div style={{fontSize: '5rem', fontWeight: 'bold', paddingBottom: '3rem', paddingLeft: '10vw'}}>&#x2193;</div></Link>
        </div>
    </>
  )
}

{/* <div style={{display: 'flex', marginBottom: '-3rem'}}>
<h1 className={style} style={{textAlign: 'right', width: '50vw'}}>Matt&nbsp; </h1>
<h1 className={style} style={{textAlign: 'left', width: '50vw'}}>
<TextTransition
    text={ TEXTS[index % TEXTS.length] }
    direction='down'
    // inline='true'
    springConfig={ presets.stiff }
/>
<ReactRotatingText 
items={TEXTS} 
typingInterval='75'
deletingInterval='50'
/>
</h1>
</div> */}