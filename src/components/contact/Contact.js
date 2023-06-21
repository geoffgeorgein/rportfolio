import React, { useState } from 'react'
import './contact.scss';

const Contact = () => {

  const [message, setMessage] = useState(false);

  const handlesubmit=(e)=>{

    e.preventDefault();
    setMessage(true)
  }
  return (
    <div className='contact' id='contact'>

      <div className='left'>
          <img src='assets/shake.svg' alt='img'></img>
      </div>

      <div className='right'>

        <h2> Contact</h2>

        <form onSubmit={handlesubmit} action="mailto:geoffgeorgethommana@gmail.com" method="post">

          <input type='text' placeholder='email'></input>
          <textarea placeholder='message'></textarea>
          <button type='submit' >Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}

        </form>

     

      </div>
    
    </div>
  )
}

export default Contact