import React, { useState } from 'react'
import './projects.scss';
import { useEffect } from 'react';

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
          title: "Events App",
          live_link:"https://events-app-iota-one.vercel.app/",
          github_link:"https://github.com/geoffgeorgein/events_app",
          desc:
            "An Events App made using React and Next Js. Client Side Rendering using React. Server Side Rendering using NextJs",
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
            "An Admin Dashboard made using React and Material UI.",
          img:
            "https://raw.githubusercontent.com/geoffgeorgein/Admin-dashboard/main/public/homepage.png",
        },
        {
          id: "4",
          icon: "./assets/writing.png",
          title: "Food Order App",
          live_link:"",
          github_link:"https://github.com/geoffgeorgein/Food-order-app",
          desc:
            "A SaaS App made using React and Context API.",
          img:
            "https://github.com/geoffgeorgein/Food-order-app/blob/main/public/Food_order_app.png?raw=true",
        },
      ];

      // const handleclick=(way)=>{

      //   way==='left'?setcurrentslide(currentslide > 0 ? currentslide - 1 : data.length - 1):setcurrentslide(currentslide < data.length - 1?currentslide + 1:0);

      // };

      useEffect(()=>{
        
        if(currentslide>data.length){
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
        },3000);

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

          
                    <div className='container' key={d.id}>

                  <div className='item'>

                      <div className='left'>

                          <div className='leftContainer'>

                              <div className='imgContainer'>
                                  <img src={d.icon} alt='img'>

                                  </img>
                              </div>

                              <h2>{d.title}</h2>
                              <p> {d.desc}</p>
                              <div className='links'>
                                  { d.live_link.length>1 && <span><a href={d.live_link}> Live Link</a> </span>}
                                  { d.github_link.length>1 && <span><a href={d.github_link}> GitHub Link</a> </span>}
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
                  </div>
              </div>
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