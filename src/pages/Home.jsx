import React, { useEffect } from 'react';
import './Styles/Home.css';
import Note from '../components/Note.jsx';
import Button from '../components/Button.jsx';
import { getAllNotes } from '../redux/apiCalls.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
function Home() {

  const dispatch = useDispatch();
  const {notes} = useSelector(state => state.note);
  useEffect(() => {
    dispatch(getAllNotes());
  }, [dispatch]);
  return (
    <div className='Home-main-component d-flex flex-column  '>
        <div className='Home-sub-header d-flex justify-content-between align-items-center'>
        <div className='Home-title-main d-flex align-items-center justify-content-center'>
            <h2>All Notes</h2>
        </div>
     <Link to='/add-note'><Button>Add note</Button></Link>
        </div>
        <div className='Home-notes-main d-flex align-self-center align-items-center justify-content-between gap-5 mt-2'>
          {notes.map((item)=>{
            return <Note item={item}/>
          })}
         
        </div>
      
    </div>
  )
}

export default Home

