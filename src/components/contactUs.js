import React, { forwardRef } from 'react';
import '../styles/ContactUs.css'
const ContactUs = forwardRef((props, ref) => {
  return (
    <div ref={ref} className='aboutSection'>
      About
    </div>
  );
});

export default ContactUs;
