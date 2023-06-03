
import './App.scss';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/Works';

import Contact from './components/contact/Contact';
import { useState } from 'react';




function App() {

  const [menuOpen,setmenuOpen]=useState(true);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
      
      <div className='sections'> 

        <Intro/>
        <Portfolio/>
        <Works/>
        <Contact/>
      
       </div>

    </div>
  );
}

export default App;
