import React, { useEffect } from 'react'
import './About.scss';
import { motion,useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { fadeIn, staggerContainer } from "../../utils/motion";

const About = () => {

  const control = useAnimation();
  const [ref, inView] = useInView();

  const boxVariant = {
    visible: { opacity: 1, scale: 1,x:0, transition: { duration: 2,delay:1 } },
    hidden: { opacity: 0, x:'-100w' }
  };
  

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <motion.div className='about' id='about'
    initial={"hidden"}
    animate={control}
    
    whileInView="show"
   
    ref={ref}
    
    variants={fadeIn("up", "tween", "0.3", 1.4)}
    
    >
    
    <h2 className='session_title'>About Me</h2>

    <div className='content'>

        <p>Hello, I am Geoff George a tech agnostic programmer who likes building products from scratch. I have taught myself the necessary skills and technologies to excel in the field of Software Engineering, including HTML, CSS, JavaScript, React, Nodejs, Express  and various other frameworks and libraries. I am passionate about staying up-to-date with the latest tools and technologies, and I am always keen to learn new skills and take on new challenges. In my free time you can find me doing Competitive Programming and OpenSource.</p>
    </div>
    </motion.div>
  )
}

export default About
