import React from 'react';

import { SubHeading } from '../../components';
import './Newsletter.css';

function Newsletter(){

  return(
    <div className='newsletter'>

      <div className='newsletter-heading'>
        <SubHeading title='Newsletter' />
        <h1 className='headtext__cormorant'>Subscribe to our newsletter</h1>
        <p className='p__opensans'>And never miss latest updates</p>
      </div>

      <div className='newsletter-input flex__center'>
        <input type='email' placeholder='Enter your e-mail address'/>
        <button className='custom__button'>Subscribe</button>
      </div>
    </div>
  )
} 

export default Newsletter;
