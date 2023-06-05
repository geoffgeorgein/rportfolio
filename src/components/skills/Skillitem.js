import React from 'react'

const SkillItem = ({href,title}) => {
  return (
    <div className='skill_item'>

        <img href={href} alt='img'></img>
        <h4>{}</h4>
    </div>
  )
}

export default SkillItem;