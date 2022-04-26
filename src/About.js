import React from 'react';
import { Link } from 'react-router-dom';
import web from "../src/images/profile.jpg";
import Common from './Common';
const About = () => {
  return (
<>
<Common 
name="Welcome to About page" 
imgsrc={web} 
visit="/contact" 
btnname="Contact now"/>
</>
    )
}

export default About;