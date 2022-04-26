import React from 'react'
import {Link } from 'react-router-dom';

const Error = () => {
    const navStyle ={
        color: "white",
        fontSize:"25px",
        textDecoration:"none",
    
    }

  return (
      
     <>
     <nav>

    <div>
        
        <h1> 404 Error page</h1>
        <Link style={navStyle} to="/home"> Go Back </Link>
        </div>
     </nav>
</>
    
  )
}

export default Error;