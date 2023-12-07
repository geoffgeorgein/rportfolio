import React from 'react' 
import './menu.scss';
import { motion } from "framer-motion"

const Menu = ({menuOpen,setmenuOpen}) => {
  const trans={scale: 1.2,
    transition: { duration: 1 },}
  return (
    <motion.div className={'menu '+ (menuOpen && "active")}>


    <motion.ul
      
    >
      <motion.li 
      whileHover={{
        scale: 1.2,
        transition: { duration: 1 },
        }}
      whileTap={{ scale: 0.9 }}
      >
        <motion.a href='#intro'>Intro </motion.a>

      </motion.li>

      <motion.li onClick={()=>setmenuOpen(false)}
      whileHover={trans}
      >
      <motion.a href='#about'> About</motion.a>
      </motion.li>

      <motion.li onClick={()=>setmenuOpen(false)}
      whileHover={trans}>
      <motion.a href='#skills'> Skills</motion.a>
      </motion.li>

      <motion.li onClick={()=>setmenuOpen(false)}
      whileHover={trans}>
      <motion.a href='#projects'>Projects </motion.a>
      </motion.li>

      <motion.li onClick={()=>setmenuOpen(false)}
      whileHover={trans}>
      <a href='#contact'>Contact </a>
      </motion.li>
    </motion.ul>
        
    </motion.div>
  )
}

export default Menu