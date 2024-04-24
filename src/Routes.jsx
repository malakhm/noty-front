
import React from 'react';
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx';
import Button from './components/Button.jsx';
import Note from './components/Note.jsx';
import { Route, Routes } from "react-router-dom";
import AddNote from './pages/Add.jsx';
import EditNote from './pages/Edit.jsx';



const AppRoutes = () => {
    return (
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/add-note" element={<AddNote/>} />
        <Route path="/edit-note" element={<EditNote />} />
      </Routes>
    );
  };
  
  export default AppRoutes;