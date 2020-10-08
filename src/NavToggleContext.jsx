import React, { useState, createContext } from 'react'

export const NavToggleContext = createContext()

export const NavToggleProvider = ({ children }) => {
  const [navToggle, setNavToggle] = useState(false)

  return (
    <NavToggleContext.Provider value={[navToggle, setNavToggle]}>
      {children}
    </NavToggleContext.Provider>
  )
}
