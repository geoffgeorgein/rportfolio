import React, { useState } from 'react'
import './projects.scss';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {

    const [currentslide,setcurrentslide]=useState(0);

    const data = [
        {
          id: "1",
          icon: "./assets/mobile.png",
          title: "Netflix Clone",
          live_link:"https://netflic-clone-yt-965a2.web.app/",
          github_link:"https://github.com/geoffgeorgein/Netflix-clone/tree/master",
          desc:
            `A Netflix Clone made using React frontend and firebase Backend.Uses React Core features such as
            useState,useEffect,useReducer `,
          img:
            "https://github.com/geoffgeorgein/Netflix-clone/blob/master/Screenshot%202023-04-18%20125556.png?raw=true",
        },
        {
          id: "2",
          icon: "./assets/globe.png",
          title: "Metaversus App",
          live_link:"https://metaverse-theta-three.vercel.app/",
          github_link:"",
          desc:
            "An interactive metaverseapplication using NextJs and framer motion",
          img:
            "https://github.com/geoffgeorgein/events_app/blob/main/home.png?raw=true",
        },
        {
          id: "3",
          icon: "./assets/writing.png",
          title: "Admin Dashboard",
          live_link:"",
          github_link:"https://github.com/geoffgeorgein/Admin-dashboard",
          desc:
            "An Admin Dashboard made using React and Material UI. Dark Mode using Context API",
          img:
            "https://raw.githubusercontent.com/geoffgeorgein/Admin-dashboard/main/public/homepage.png",
        },
        {
          id: "4",
          icon: "./assets/writing.png",
          title: "Food Order App",
          live_link:"",
          github_link:"https://github.com/geoffgeorgein/food_order.png",
          live_link:"https://food-order-app-rust.vercel.app/",
          desc:
            "A SaaS App made using React and Context API.User  authentication using Google OAuth",
          img:
            "https://github.com/geoffgeorgein/rportfolio/blob/main/public/assets/food_order.png?raw=true",
        },
        {
          id: "5",
          icon: "./assets/writing.png",
          title: "Blog App",
          live_link:"",
          github_link:"https://github.com/geoffgeorgein/Blog-app",
          desc:
            "Full Stack MERN App.User authentication using JSON Web tokens",
          img:
            "https://github.com/geoffgeorgein/Blog-app/blob/main/blog-1.png?raw=true",
        },
        {
          id: "6",
          icon: "./assets/globe.png",
          title: "Stack Overflow Clone",
          live_link:"https://stack-overflow-clone-zeta.vercel.app/",
          github_link:"https://github.com/geoffgeorgein/stack-overflow-clone",
          desc:
            "Full Stack stack Overflow clone USing MERN Stack",
          img:
            "./assets/st-c.png",
        },
      ];

      // const handleclick=(way)=>{

      //   way==='left'?setcurrentslide(currentslide > 0 ? currentslide - 1 : data.length - 1):setcurrentslide(currentslide < data.length - 1?currentslide + 1:0);

      // };

      useEffect(()=>{
        
        if(currentslide>=data.length){
          setcurrentslide(0);
        }
        if(currentslide<0){
          setcurrentslide(data.length-1)
        }

      },[currentslide])

      useEffect(()=>{
        console.info("curr",currentslide);
        let slider=setInterval(()=>{
          setcurrentslide(currentslide+1);
        },4000);

        return ()=>clearInterval(slider);

      },[currentslide]);

  return (
    <div className='projects ' id='projects'>

{
        data.map((d,index)=>{

            let position='nextSlide';

            if(currentslide===index){
              position='activeSlide';
            }

            if (
            currentslide === index - 1 ||
            (index === 0 && currentslide === data.length - 1)
          ) {
            position = 'lastSlide';
          }
            return (

          <article className={position} >

          
                    <motion.div className='container' key={d.id}
                    
                    >

                  <motion.div className='item'
                  transition={{delay:0.5,duration:1}}>

                      <div className='left'>

                          <div className='leftContainer'>

                              {/* <div className='imgContainer'>
                                  <img src={d.icon} alt='img'>

                                  </img>
                              </div> */}

                              <h2>{d.title}</h2>
                              <p> {d.desc}</p>
                              <div className='links'>
                                  { d.live_link.length>1 && <span><a href={d.live_link} target="_blank" rel="noopener noreferrer"> Live Link</a> </span>}
                                  { d.github_link.length>1 && <span><a href={d.github_link} target="_blank" rel="noopener noreferrer"> GitHub Link</a> </span>}
                              </div>
                              
                          </div>
                      </div>

                      <div className='right'>

                      <div className='rightContainer'>

                          <div className='imgContainer'>
                              <img src={d.img} alt='img'>

                              </img>
                          </div>

                          

                          </div>
                      </div>
                  </motion.div>
              </motion.div>
      {/* //slider */}
              </article>
            )
            


        })
    }

        



    <img className='arrow left' src='assets/arrow.png' alt='arrow' onClick={()=>setcurrentslide(currentslide-1)} /> 

    <img className='arrow right' src='assets/arrow.png' alt='arrow' onClick={()=>setcurrentslide(currentslide+1)} / >
    
    </div>
  )
}

export default Projects