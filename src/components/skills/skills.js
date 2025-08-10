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
        <SkillItem src='https://1000logos.net/wp-content/uploads/2024/08/Azure-DevOps-Logo.png' />
        <SkillItem src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/C_Sharp_Logo_2023.svg/192px-C_Sharp_Logo_2023.svg.png"/>
        <SkillItem src='https://github.com/geoffgeorgein/rportfolio/blob/main/public/assets/Git-Icon.png?raw=true' title='Git'/>
        <SkillItem src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" title='Tailwind'/>

        <SkillItem src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Microsoft_SQL_Server_2025_icon.svg/800px-Microsoft_SQL_Server_2025_icon.svg.png" title='SQLServer'/>
        <SkillItem src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png' />
        <SkillItem src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"/>
        <SkillItem src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" />
        <SkillItem src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/800px-Microsoft_.NET_logo.svg.png' title='.'/>
        <SkillItem src='https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' />
    </motion.div>
    <p></p>
    <p></p>
    
    </motion.div>
  )
}

export default Skills;