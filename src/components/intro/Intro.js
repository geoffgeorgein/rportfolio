import React, { useEffect, useRef } from 'react'
import './intro.scss';
import { init } from 'ityped';

const Intro = () => {

  const textref=useRef();

  useEffect(()=>{

    init(textref.current,{
      showCursor:true,
      backSpeed:  100,
      backDelay:1500,
      strings:["Developer","Problem Solver","Freelancer"]
    });

  },[])


  return (
    <div className='intro' id='intro'>

    <div className='left'>
      <div className='imgContainer'>
        <img src='assets/man.png' alt='man'></img>

      </div>

    </div>

    <div className='right'>

      <div className='wrapper'>
        <h2>Hi there</h2>
        <h1>Im Geoff</h1>
        <h3>Im a <span ref={textref} > </span> </h3>

        <a href='#projects'>
          <img src='/assets/down.png' alt='down'></img>
        </a>
      </div>

    </div>

    </div>
  )
}

export default Intro