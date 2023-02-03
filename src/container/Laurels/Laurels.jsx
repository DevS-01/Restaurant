import React from 'react';

import { images , data } from '../../constants';
import { SubHeading } from '../../components';
import './Laurels.css';


function AwardCard({award}){
  return(
    <div className='awards-card'>
      <img src={award.imgUrl} />
      <div className='award-content'>
        <p className='p__cormorant' style={{color: '#dcca87'}}>{award.title}</p>
        <p className='p__cormorant'>{award.subtitle}</p>
      </div>
    </div>
  )
}

function Laurels(){
  return(
    <div className='app__bg app__wrapper section__padding' id='awards'>

      <div className='app__wrapper_info'>
        <SubHeading title='Awards & recognition'/>
        <h1 className='headtext__cormorant'>Our Laurels</h1>

        <div className='awards'>
          {data.awards.map((award) => <AwardCard award={award} key={award.title}/>)}
        </div>
      </div>

      <div className='app__wrapper_img'>
        <img src={images.laurels} alt='laurels'/>
      </div>
    </div>
  )
}

export default Laurels;
