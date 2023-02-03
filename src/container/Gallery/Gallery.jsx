import React, { useRef } from 'react';

import { images } from '../../constants';
import { SubHeading } from '../../components';
import { BsInstagram , BsArrowLeftShort , BsArrowRightShort } from "react-icons/bs";
import './Gallery.css';

const galleryImages = [images.gallery01 , images.gallery02 , images.gallery03 , images.gallery04]

function Gallery(){
  
  const scrollRef = useRef(null)

  function scroll(direction){
    const {current} = scrollRef

    if(direction === 'left')
    {
      current.scrollLeft -= 300  
    }
    
    else{
      current.scrollLeft += 300  
    }
  }
  return(
    <div className='gallery flex__center'>

      <div className='gallery-content'>
        <SubHeading title='Instagram' />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{color: '#aaa' , marginTop: '2em'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type='button' className='custom__button' style={{marginTop: '1em'}}>View More</button>
      </div>

      <div className='gallery-img'>

        <div className='gallery-img-container' ref={scrollRef}>
          {galleryImages.map((image , index) => (
            <div className='gallery-img-card flex__center' key={`gallery-img-${index + 1}`}>
              <img src={image} alt='gallery images' />
              <BsInstagram className='gallery-img-icon'/>
            </div>
          ))}
        </div>

        <div className='gallery-img-arrows'>
          <BsArrowLeftShort className='arrow-icon' onClick={() => scroll('left')} /> 
          <BsArrowRightShort className='arrow-icon' onClick={() => scroll('right')} /> 
        </div>

      </div>

    </div>
  )
} 

export default Gallery;
