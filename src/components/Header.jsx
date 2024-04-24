import React from 'react'
import logo from '../assets/logo.png'
function Header() {
  return (
   <>
    <div className='d-flex justify-content-center align-items-center'>
      <img src={logo} width={148} height={148}/>
    </div>
    <hr></hr>
   </>
  )
}

export default Header
