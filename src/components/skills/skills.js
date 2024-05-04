import React, { useEffect } from 'react'
import SkillItem from './Skillitem';
import './skills.scss';
import { motion,useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { fadeIn } from '../../utils/motion';

const Skills = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const boxVariant = {
    visible: { opacity: 1, scale: 1,x:0, transition: { duration: 1,delay:0.5 } },
    hidden: { opacity: 0, x:'-100vw' }
  };
  const boxVariant2 = {
    visible: { opacity: 1, scale: 1,x:0, transition: { duration: 1,delay:1.5 } },
    hidden: { opacity: 0, x:'-100vw' }
  };
  

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);


  return (
    <motion.div className='skills' id='skills'
    initial={"hidden"}
    animate={control}
    whileInView="show"
   
    ref={ref}
    variants={fadeIn("right", "tween", "0.2", 1)}

    >

    <h2>Skills</h2>

    <motion.div className='skillContainer'
      initial={"hidden"}
      animate={control}
      whileInView="show"
    
      ref={ref}
      variants={fadeIn("right", "tween", "0.6", 1.7)}>

        <SkillItem src='https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg' title='HTML'/>
        <SkillItem src='https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg' title='CSS'/>
        <SkillItem src='https://github.com/geoffgeorgein/rportfolio/blob/main/public/assets/JavaScript-logo.png?raw=true' title='JavaScript'/>
        <SkillItem src='https://github.com/geoffgeorgein/rportfolio/blob/main/public/assets/React-icon.svg.png?raw=true' title='ReactJs'/>
        <SkillItem src='https://github.com/geoffgeorgein/rportfolio/blob/main/public/assets/redux.png?raw=true' title='Redux'/>
        <SkillItem src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/C_Sharp_Logo_2023.svg/192px-C_Sharp_Logo_2023.svg.png" title='C#'/>
        <SkillItem src='https://github.com/geoffgeorgein/rportfolio/blob/main/public/assets/Git-Icon.png?raw=true' title='Git'/>
        <SkillItem src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" title='Tailwind'/>

        <SkillItem src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" title='MySQL'/>
        <SkillItem src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png' title='Nodejs'/>
        <SkillItem src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"title='Express'/>
        <SkillItem src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" title='MongodB'/>
        <SkillItem src='https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg' title='C++'/>
        <SkillItem src='https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' title='Python'/>
    </motion.div>
    <p></p>
    <p></p>
    
    </motion.div>
  )
}

export default Skills;