import React from 'react'
import SkillItem from './Skillitem';
import './skills.scss';

const Skills = () => {
  return (
    <div className='skills' id='skills'>

    <h2>Skills</h2>

    <div className='skillContainer'>

        <SkillItem src='https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg' title='HTML'/>
        <SkillItem src='https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg' title='CSS'/>
        <SkillItem src='https://github.com/geoffgeorgein/rportfolio/blob/main/public/assets/JavaScript-logo.png?raw=true' title='JavaScript'/>
        <SkillItem src='https://github.com/geoffgeorgein/rportfolio/blob/main/public/assets/React-icon.svg.png?raw=true' title='ReactJs'/>
        <SkillItem src='https://github.com/geoffgeorgein/rportfolio/blob/main/public/assets/redux.png?raw=true' title='Redux'/>
        <SkillItem src='https://github.com/geoffgeorgein/rportfolio/blob/main/public/assets/next-js-logo-7929BCD36F-seeklogo.com.png?raw=true' title='NextJs'/>
        <SkillItem src='https://github.com/geoffgeorgein/rportfolio/blob/main/public/assets/Git-Icon.png?raw=true' title='Git'/>

        <SkillItem src='https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg' title='Firebase'/>
        <SkillItem src='https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg' title='Bootstrap'/>
    </div>
    <p></p>
    <p></p>
    
    </div>
  )
}

export default Skills;