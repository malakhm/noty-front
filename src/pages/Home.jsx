import React from 'react'
import './Styles/Home.css'
import Note from '../components/Note.jsx'
import Button from '../components/Button.jsx'
function Home() {
  return (
    <div className='Home-main-component d-flex flex-column  '>
        <div className='Home-sub-header d-flex justify-content-between align-items-center'>
        <div className='Home-title-main d-flex align-items-center justify-content-center'>
            <h2>All Notes</h2>
        </div>
        <Button/>
        </div>
        <div className='Home-notes-main d-flex align-self-center align-items-center justify-content-between gap-5 mt-2'>
          <Note/>
          <Note/>
          <Note/>
          <Note/>
          <Note/><Note/>
          <Note/>
          <Note/>
        </div>
      
    </div>
  )
}

export default Home
