import React from 'react';
import { Link } from 'react-router-dom';
import web from "../src/images/image.jpg";
import Common from './Common';
const Home = () => {
  return (
<>
<Common 
 name="Welcome to Home page" 
 imgsrc={web} 
 visit="/services" 
 btnname="Get started"/>
</>
    )
}

export default Home;