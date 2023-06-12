
import './App.scss';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';

// import Works from './components/works/Works';

import Contact from './components/contact/Contact';
import { useState } from 'react';
import Menu from './components/menu/menu';
import Skills from './components/skills/skills';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Scrollup from './components/scrollup/scrollup';





function App() {

  const [menuOpen,setmenuOpen]=useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
      <Menu menuOpen={menuOpen} setmenuOpen={setmenuOpen}  />
      
      <div className='sections'> 

        <Intro/>
        <About/>
        {/* <Works/> */}
        <Skills/>
        <Projects/>
        <Contact/>
        
      
       </div>

       <Scrollup/>

    </div>
  );
}

export default App;
