import React from 'react';
import './Header.css';

import images from '../../constants/images';
import { SubHeading } from '../../components';

function Header() {
  return (
    <div className='header app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>

        <SubHeading title='Chase the new flavour'/>
        <h1 className='header-h1'>The Key to Fine Dining</h1>

        <p className='p__opensans' style={{margin: '2em 0'}}>
          Sit tellus lobortis sed senectus vivamus molestie. 
          Condimentum volutpat morbi facilisis quam scelerisque sapien. 
          Et, penatibus aliquam amet tellus
        </p>
        <button type='button' className='custom__button'>Explore Menu</button>
      </div>

      <div className='app__wrapper_img'>
        <img src={images.welcome} alt='header img'  />
      </div>
    </div>
)
}

export default Header;
