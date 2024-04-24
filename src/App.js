
import React from 'react';
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx';
import Button from './components/Button.jsx';
import Note from './components/Note.jsx';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes.jsx';
function App() {  
  return (
    <BrowserRouter>
    <Header/>
      <div className="App  d-flex flex-column">
        <AppRoutes />
      </div>
      </BrowserRouter>
  );
}

export default App;
