import React, { useContext } from 'react'
import { Link, animateScroll as scroll} from 'react-scroll'

import './styles/nav.css'

import GitHubLogo from './assets/githubwhite.png'
import LinkedInLogo from './assets/linkedin.png'

import { NavToggleContext } from './NavToggleContext'

export default function NavLinks () {
  const [navToggle, setNavToggle] = useContext(NavToggleContext)
  const style = navToggle ? 'flyoutMenu show' : 'flyoutMenu'

  return(
    <div className={style}>
      <div className='flyoutMenuLinks'>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      ><h1>About</h1></Link>

      <Link
        activeClass="active"
        to="services"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      ><h1>Services</h1></Link>

      <Link
        activeClass="active"
        to="work"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      ><h1>Work</h1></Link>

      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      ><h1>Contact</h1></Link>

        <div className='social-links'>
          <img src={GitHubLogo} height='25px'></img>
          <img src={LinkedInLogo} height='25px'></img>
        </div>
      </div>
    </div>
  )
}

// export default function NavLinks () {
//   const [navToggle, setNavToggle] = useContext(NavToggleContext)
  
//   if (navToggle) { 
//     return(
//       <div className='flyoutMenu show'>
//         <div className='flyoutMenuLinks'>
//           <h1>About</h1>
//           <h1>Services</h1>
//           <h1>Work</h1>
//           <h1>Contact</h1>
//         </div>
//       </div>
//     )
//   } return(null)
// }