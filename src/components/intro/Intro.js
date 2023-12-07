import React, { useEffect, useRef } from 'react'
import './intro.scss';
import { init } from 'ityped';
import { motion } from "framer-motion"

const Intro = () => {

  const trans={scale: 1.2,
    transition: { duration: 0.4 },}

  // const textref=useRef();

  // useEffect(()=>{

  //   init(textref.current,{
  //     showCursor:true,
  //     backSpeed:  100,
  //     backDelay:1500,
  //     strings:["Developer","Problem Solver","Freelancer"]
  //   });

  // },[])


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
        <div className='links'>
        <motion.a href='https://github.com/geoffgeorgein' target="_blank" rel="noopener noreferrer"  whileHover={trans}><i class="fa-brands fa-github fa-xl"></i></motion.a>
        <motion.a href='https://www.linkedin.com/in/geoffgeorge45/' target="_blank" rel="noopener noreferrer" whileHover={trans}><i class="fa-brands fa-linkedin fa-xl"></i></motion.a>
        </div>

        

        <a href='#projects' className='down'>
          <img src='/assets/down.png' alt='down'></img>
        </a>
      </div>

    </div>

    </div>
  )
}

export default Intro