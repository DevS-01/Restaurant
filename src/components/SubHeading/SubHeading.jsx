import React from 'react';
import images from '../../constants/images';

function SubHeading({title}) {

  return(
  <div style={{marginBottom: '1em'}}>
    <p className='p__cormorant'>{title}</p>
    <img src={images.spoon} alt='spoon' className='spoon-img'/>
  </div>
)}

export default SubHeading;
