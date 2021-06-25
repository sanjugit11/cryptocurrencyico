import React from 'react'
import logo from '../static/images/capslogo.jpg'

const Logo = () => {
  return (
    <div className='navbar-brand'>
      <img className='navbar-logo' src={logo} alt='Logo AlySystem' />
    </div>
  )
}

export default Logo
