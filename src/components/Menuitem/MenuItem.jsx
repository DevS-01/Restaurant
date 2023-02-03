import React from 'react';

import './MenuItem.css';

function MenuItem({ title , price , tags}) {

  return (
    <div className='menuItem'>
      <div className='menuItem-head'>

        <div className='menuItem-name'>
          <p className='p__cormorant' style={{color: '#dcca87'}}>{title}</p>
        </div>

        <div className='menuItem-dash'/>

        <div className='menuItem-price'>
          <p className='p__cormorant'>{price}</p>
        </div>
      </div>

      <div className='menuItem-tags'>
        <p className='p__opensans' style={{color: '#aaa'}}>{tags}</p>
      </div>
    </div>
  )
} 

export default MenuItem;
