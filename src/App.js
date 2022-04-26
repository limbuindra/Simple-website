import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
// import Search from './Search';
import Nav from './Nav';
import Home from './Home';
import About from './About';
// import Error from './Error';
import Contact from './Contact';
import Services from './Services';
import Footer from './Footer';

function App() {
  return (
    <>
    <Router>

    <div className='App'>
      <Nav/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/about'  element={<About/>}/>
      
      <Route exact path='/services'  element={<Services/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      {/* <Route path='*' element={<Error/>}/> */}
    </Routes>
    <br/>
    {/* <div className='text-center'>
      <button className='btn btn-success'>Welcome</button>
    </div> */}
    </div>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
