import React from 'react'
import { Link } from '@reach/router'
// import DropDown from './DropDown'

const Nav = ({ handlerActive }) => {
  return (
    <nav className={`${handlerActive ? 'navbar-content navbar-open' : 'navbar-content'}`}>
      <ul className='navbar-list'>
        <li onClick={handlerActive} className='navbar-item'><Link to='/' className='navbar-link'>Home</Link></li>
        <li onClick={handlerActive} className='navbar-item'><Link to='/about' className='navbar-link'>whitepaper</Link></li>
        <li onClick={handlerActive} className='navbar-item'><Link to='/about' className='navbar-link'>f&Q</Link></li>
        <li onClick={handlerActive} className='navbar-item'><Link to='/about' className='navbar-link'>white</Link></li>
        <li onClick={handlerActive} className='navbar-item'><Link to='/about' className='navbar-link'>contact</Link></li>
        {/* <li className='navbar-item'>
          <a href='#' className='navbar-link position'>Productos
            <DropDown />
          </a></li> */}
          <div className="navBtn">
          <button style={{width:"60px" ,height:"40px",justifyContent:"center", marginTop:'17px',fontSize:'15px', }}>BUY    </button>
          </div>
      </ul>
    </nav>
  )
}

export default Nav
