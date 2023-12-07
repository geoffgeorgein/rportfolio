import React, { useState } from 'react'
import './contact.scss';

const Contact = () => {

  const [clicked, setclicked] = useState(false);
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const handlesubmit=(e)=>{

    e.preventDefault();
    setclicked(true);
    // window.open('mailto:geoffgeorgethommana@gmail.com');
    window.open(`mailto:geoffgeorgethommana@gmail.com?subject=${subject}&body=${message}`);
  }
  return (
    <div className='contact' id='contact'>

      <div className='left'>
          <img src='assets/shake.svg' alt='img'></img>
      </div>

      <div className='right'>

        <h2 className='title'> Contact</h2>

        <form onSubmit={handlesubmit} action="mailto:geoffgeorgethommana@gmail.com" method="post">

          <input type='text' placeholder='subject' value={subject} onChange={e=>setSubject(e.target.value)}></input>
          <textarea placeholder='message' value={message} onChange={e=>setMessage(e.target.value)}></textarea>
          <button type='submit' >Send</button>
          {clicked && <span>Thanks, I'll reply ASAP :)</span>}

        </form>

     

      </div>
    
    </div>
  )
}

export default Contact