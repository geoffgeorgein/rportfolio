import React, { useState } from 'react'
import './projects.scss';

const Projects = () => {

    const [currentslide,setcurrentslide]=useState(0);

    const data = [
        {
          id: "1",
          icon: "./assets/mobile.png",
          title: "Web Design",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          img:
            "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
        },
        {
          id: "2",
          icon: "./assets/globe.png",
          title: "Mobile Application",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img:
            "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
        },
        {
          id: "3",
          icon: "./assets/writing.png",
          title: "Branding",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img:
            "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
        },
      ];

      const handleclick=(way)=>{

        way==='left'?setcurrentslide(currentslide > 0 ? currentslide - 1 : data.length - 1):setcurrentslide(currentslide < data.length - 1?currentslide + 1:0);

      };

  return (
    <div className='projects ' id='projects'>

    <div className='slider' style={{ transform: `translateX(-${currentslide * 100}vw)` }}>

    {
        data.map((d)=>(

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
                        <span>Projects</span>
                    </div>
                </div>

                <div className='right'>

                <div className='rightContainer'>

                    <div className='imgContainer'>
                        <img src='https://github.com/geoffgeorgein/Netflix-clone/blob/master/Screenshot%202023-04-18%20125556.png?raw=true' alt='netflix clone'>

                        </img>
                    </div>

                    

                    </div>
                </div>
            </div>
        </div>


        ))
    }

        

    </div>

    <img className='arrow left' src='assets/arrow.png' alt='arrow' onClick={()=>handleclick('left')} /> 

    <img className='arrow right' src='assets/arrow.png' alt='arrow' onClick={()=>handleclick('right')} / >
    
    </div>
  )
}

export default Projects