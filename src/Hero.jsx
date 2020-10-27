import React, { useContext, useState, useEffect } from 'react'
import TextTransition, { presets } from 'react-text-transition'
import ReactRotatingText from 'react-rotating-text'

import { NavToggleContext } from './NavToggleContext'

const TEXTS = ['Silver', 'Developer', 'Creator', 'Designer', 'Collaborator', 'Ninja' ] /*'dreamer', 'father', 'musician', */

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
    <div className='bgHero'>
        <div className='seperator'></div>
        <div style={{display: 'flex', marginBottom: '-1rem'}}>
            <h1 className={style} style={{textAlign: 'right', width: '50vw'}}>Matt&nbsp; </h1>
            <h1 className={style} style={{textAlign: 'left', width: '50vw'}}>
            <TextTransition
                text={ TEXTS[index % TEXTS.length] }
                direction='down'
                // inline='true'
                springConfig={ presets.stiff }
            />
            {/* <ReactRotatingText 
            items={TEXTS} 
            typingInterval='100'
            deletingInterval='50'
            /> */}
      </h1>
      </div>
      <div>
          <div style={{paddingBottom: '1rem'}}>&#x2193;</div>
      </div>
    </div>
  )
}