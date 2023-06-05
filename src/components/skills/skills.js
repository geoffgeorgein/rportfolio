import React from 'react'
import SkillItem from './Skillitem';
import './skills.scss';

const Skills = () => {
  return (
    <div className='skills' id='skills'>

    <h2>Skills</h2>

    <div className='skillContainer'>

        <SkillItem src='https://github.com/geoffgeorgein/rportfolio/blob/main/public/assets/html5.png?raw=true' title='HTML'/>
        <SkillItem src='https://github.com/geoffgeorgein/rportfolio/blob/main/public/assets/css.png?raw=true' title='CSS'/>
        <SkillItem src='' title='JavaScript'/>
        <SkillItem src='' title='ReactJs'/>
        <SkillItem src='' title='Redux'/>
        <SkillItem src='' title='NextJs'/>
        <SkillItem src='' title='NextJs'/>

        <SkillItem src='' title='NextJs'/>
        <SkillItem src='' title='NextJs'/>
    </div>
    <p></p>
    <p></p>
    
    </div>
  )
}

export default Skills;