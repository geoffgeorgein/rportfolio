import React from 'react'
import './skillitem.scss';

const SkillItem = ({src,title}) => {
  return (
    <div className='skill_item'>

        <img src={src} alt='img'></img>
        <h4>{title}</h4>
    </div>
  )
}

export default SkillItem;