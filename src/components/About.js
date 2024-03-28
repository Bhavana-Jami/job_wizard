import React, { forwardRef } from 'react';
import '../styles/About.css'
const About = forwardRef((props, ref) => {
  return (
    <div ref={ref} className='aboutSection'>
      About
    </div>
  );
});

export default About;
