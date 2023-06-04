import React from 'react' 
import './menu.scss';

const Menu = ({menuOpen,setmenuOpen}) => {
  return (
    <div className={'menu '+ (menuOpen && "active")}>

    <ul>
      <li>
        <a href='#intro'>Intro </a>

      </li>

      <li>
      <a href='#works'> Works</a>
      </li>

      <li>
      <a href='#home'> Home</a>
      </li>

      <li>
      <a href='#projects'>projects </a>
      </li>

      <li>
      <a href='#contact'>Contact </a>
      </li>
    </ul>
        
    </div>
  )
}

export default Menu