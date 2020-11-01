import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.css'
import App from './App'

import { NavToggleProvider } from './NavToggleContext'

ReactDOM.render(
  <React.StrictMode>
      <NavToggleProvider>
        <App />
      </NavToggleProvider>
  </React.StrictMode>,
  document.getElementById('root')
)