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
        <SkillItem src='https://github.com/geoffgeorgein/rportfolio/blob/main/public/assets/JavaScript-logo.png?raw=true' title='JavaScript'/>
        <SkillItem src='https://github.com/geoffgeorgein/rportfolio/blob/main/public/assets/React-icon.svg.png?raw=true' title='ReactJs'/>
        <SkillItem src='https://github.com/geoffgeorgein/rportfolio/blob/main/public/assets/redux.png?raw=true' title='Redux'/>
        <SkillItem src='https://github.com/geoffgeorgein/rportfolio/blob/main/public/assets/next-js-logo-7929BCD36F-seeklogo.com.png?raw=true' title='NextJs'/>
        <SkillItem src='https://github.com/geoffgeorgein/rportfolio/blob/main/public/assets/Git-logo.svg.png?raw=true' title='Git'/>

        <SkillItem src='https://github.com/geoffgeorgein/rportfolio/blob/main/public/assets/firebase.png?raw=true' title='Firebase'/>
        
    </div>
    <p></p>
    <p></p>
    
    </div>
  )
}

export default Skills;