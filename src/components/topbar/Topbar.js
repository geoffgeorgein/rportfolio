import React from 'react'
import "./topbar.scss";
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';

const topbar = () => {
  return (
    <div className='topbar'>

      <div className='wrapper'>

        <div className='left'>

        <a href='#intro' className='logo'>asdf</a>

        <div className='itemContainer'>
        <PersonIcon className='icon' />

        </div>
        
        <div className='itemContainer'>
        <MailIcon className='icon' />

        <span>geoffgeorgethommana@gmail.com</span>

        </div>

        </div>

        <div className='right'>
        <div className='hamburger'>
         </div>

        </div>


      </div>
    
    </div>
  )
}

export default topbar