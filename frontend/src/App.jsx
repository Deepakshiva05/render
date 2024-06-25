import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Axios from 'axios';
import Contact from './Contact';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from './Home';

function App() {
  
 

  return (
    <>
     <div>
      <Router>
      <Link to='/'>Home</Link>
      <Link to='/contact'>Contact</Link>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      </Router>
     </div>
        
    </>
  )
}

export default App
