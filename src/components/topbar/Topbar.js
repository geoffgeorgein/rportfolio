import React from 'react'
import "./topbar.scss";
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import { motion } from "framer-motion"


const topbar = ({menuOpen,setmenuOpen,vcount}) => {

  console.log("vcount ",vcount);

  const trans={scale: 1.2,
    transition: { duration: 0.4 },}
  return (
    <div className={"topbar " + (menuOpen && "active")}>

      <div className='wrapper'>

        <div className='left'>

        <a href='#intro' className='logo'>Portfolio</a>

        <div className='itemContainer'>
          <PersonIcon className='icon' />
          <span>+91 6563 89XXX</span>
          <span className='visitor'> visitors :{vcount}</span>

        </div>

        
        
        <div className='itemContainer'>
        <MailIcon className='icon' />

        <span>geoffgeorgethommana@gmail.com</span>

        </div>

        <motion.div className='itemContainer'
        whileHover={trans}>
        <a href='https://github.com/geoffgeorgein' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>
        

        </motion.div>

        <motion.div className='itemContainer'
        whileHover={trans}>
        <a href='https://www.linkedin.com/in/geoffgeorge45/' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i></a>
        

        </motion.div>

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