import React , {useRef, useState} from 'react';

import { BsFillPlayFill  , BsPauseFill} from "react-icons/bs"
import {meal} from '../../constants'

import './Intro.css';

function Intro() {
  const [play , setPlay] = useState(false)
  const vidRef = useRef()

  function handleVid(){
      setPlay((prev) => !prev)
  
      if(play) {
        vidRef.current.pause()
      }
      
      else{
        vidRef.current.play()
      }

  }
  return(
    <div className='video'>
      <video 
        src={meal}
        ref={vidRef}
        typeof='video/mp4'
        loop
        controls={false}
        muted/>

        <div className='video-overlay flex__center'>
          <div className='video-overlay-circle flex__center' onClick={handleVid}>
            {play ? (<BsPauseFill color='#fff' fontSize={30}/>) : (<BsFillPlayFill color='#fff' fontSize={30}/>)}
          </div>
        </div>
  </div>
  )
} 

export default Intro;
