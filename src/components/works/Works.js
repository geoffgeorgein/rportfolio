import React, { useState } from 'react'
import './works.scss';
import PortfolioList from '../portfolio/Portfoliolist';

export const Works = () => {

  const [selected, setSelected] = useState("featured");
  // const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];
  return (
    <div className='works' id='works'>

      <h1>Portfolio</h1>

      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>

      <div className='container'>
        <div className='item'>

          <img src='https://github.com/geoffgeorgein/Netflix-clone/blob/master/Screenshot%202023-04-18%20125556.png?raw=true' alt=''></img>
          <h3>Netflix Clone</h3>

        </div>

        <div className='item'>

          <img src='https://github.com/geoffgeorgein/Netflix-clone/blob/master/Screenshot%202023-04-18%20125556.png?raw=true' alt=''></img>
          <h3>Netflix Clone</h3>

        </div>

        <div className='item'>

          <img src='https://github.com/geoffgeorgein/Netflix-clone/blob/master/Screenshot%202023-04-18%20125556.png?raw=true' alt=''></img>
          <h3>Netflix Clone</h3>

        </div>


        <div className='item'>

          <img src='https://github.com/geoffgeorgein/Netflix-clone/blob/master/Screenshot%202023-04-18%20125556.png?raw=true' alt=''></img>
          <h3>Netflix Clone</h3>

        </div>

        <div className='item'>

          <img src='https://github.com/geoffgeorgein/Netflix-clone/blob/master/Screenshot%202023-04-18%20125556.png?raw=true' alt=''></img>
          <h3>Netflix Clone</h3>

        </div>

        <div className='item'>

          <img src='https://github.com/geoffgeorgein/Netflix-clone/blob/master/Screenshot%202023-04-18%20125556.png?raw=true' alt=''></img>
          <h3>Netflix Clone</h3>

        </div>
      </div>



    </div>
  )
}
export default Works;
