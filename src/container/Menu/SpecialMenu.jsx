import React from 'react';

import images from '../../constants/images';
import data from '../../constants/data';
import { MenuItem , SubHeading } from '../../components';

import './SpecialMenu.css';

function SpecialMenu(){

  return (
    <div className='menu flex__center section__padding' id='menu'>
  
      <div className='menu-title'>
        <SubHeading title='Menu That Fits You Palatte'/>
        <h1 className='headtext__cormorant'>Today's Special</h1>
      </div>
  
      <div className='menu-item'>
  
        <div className='menu-wine flex__center'>
          <p className='menu-heading'>Wine & Beer</p>
          <div className='menu-wine-items'>
            {data.wines.map((wine , index) => (
              <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}/>
            ))}
          </div>
        </div>
        
        <div className='menu-img'>
          <img src={images.menu} alt='menu_img' />
        </div>
  
        <div className='menu-cocktails flex__center'>
          <p className='menu-heading'>Cocktails</p>
          <div className='menu-cocktail-items'>
            {data.cocktails.map((cocktail , index) => (
              <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
            ))}
          </div>
        </div>
  
      </div>

      <div style={{marginTop: '15px'}}>
        <button type='button' className='custom__button'>View More</button>
      </div>
    </div>
  )
} 

export default SpecialMenu;
