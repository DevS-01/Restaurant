import React , {useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import images from '../../constants/images';

import './Navbar.css';

function Navbar(){

  const [menu , setMenu] = useState(false)
  return(
    <nav className='navbar'>

      <div className='navbar-logo'>
        <img src={images.gericht} alt='app logo' />
      </div>

      <ul className='navbar-links'>
        <li className='p__opensans'><a href='#home'>Home</a></li>    
        <li className='p__opensans'><a href='#about'>About</a></li>    
        <li className='p__opensans'><a href='#menu'>Menu</a></li>    
        <li className='p__opensans'><a href='#awards'>Awards</a></li>    
        <li className='p__opensans'><a href='#contact'>Contact</a></li>    
      </ul>

      <div className='navbar-login'>
        <a href='#login' className='p__opensans'>Log In / Register</a>
        <div />
        <a href='/' className='p__opensans'>Book Table</a>
      </div>

      <div className='navbar-small'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setMenu(true)}/>

        {menu && (
          <div className='navbar-small-overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu className='overlay-close' onClick={() => setMenu(false)}/>
            <ul className='navbar-small-links'>
              <li className='p__opensans'><a href='#home'>Home</a></li>    
              <li className='p__opensans'><a href='#about'>About</a></li>    
              <li className='p__opensans'><a href='#menu'>Menu</a></li>    
              <li className='p__opensans'><a href='#awards'>Awards</a></li>    
              <li className='p__opensans'><a href='#contact'>Contact</a></li>    
            </ul>
          </div>
        )}

      </div>
    </nav>
  )

}

export default Navbar;
