import React from 'react'
import "./topbar.scss";
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';

const topbar = ({menuOpen,setmenuOpen}) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>

      <div className='wrapper'>

        <div className='left'>

        <a href='#intro' className='logo'>Portfolio</a>

        <div className='itemContainer'>
          <PersonIcon className='icon' />
          <span>+91 6563 89XXX</span>

        </div>
        
        <div className='itemContainer'>
        <MailIcon className='icon' />

        <span>geoffgeorgethommana@gmail.com</span>

        </div>

        </div>

        <div className='right'>
          <div className='hamburger' onClick={()=>setmenuOpen(!menuOpen)} >

            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>

         </div>

        </div>


      </div>
    
    </div>
  )
}

export default topbar