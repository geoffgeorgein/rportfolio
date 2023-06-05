import React from 'react' 
import './menu.scss';

const Menu = ({menuOpen,setmenuOpen}) => {
  return (
    <div className={'menu '+ (menuOpen && "active")}>

    <ul>
      <li onClick={()=>setmenuOpen(false)}>
        <a href='#intro'>Intro </a>

      </li>

      <li onClick={()=>setmenuOpen(false)}>
      <a href='#works'> Works</a>
      </li>

      <li onClick={()=>setmenuOpen(false)}>
      <a href='#skills'> Skills</a>
      </li>

      <li onClick={()=>setmenuOpen(false)}>
      <a href='#projects'>Projects </a>
      </li>

      <li onClick={()=>setmenuOpen(false)}>
      <a href='#contact'>Contact </a>
      </li>
    </ul>
        
    </div>
  )
}

export default Menu