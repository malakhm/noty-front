import React from 'react'
import './Styles/Button.css'
function Button({ children, ...props }) {
  return (
    <button className='Button-main-class'{...props} >
   { children }
    </button>
  )
}

export default Button
