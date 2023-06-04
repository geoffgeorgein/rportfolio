import React from 'react'
import './intro.scss';

const Intro = () => {
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
        <h3>Im a Developer</h3>

        <a href='#projects'>
          <img src='/assets/down.png' alt='down'></img>
        </a>
      </div>

    </div>

    </div>
  )
}

export default Intro