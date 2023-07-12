import React, { useEffect, useState } from 'react'
import './scrollup.scss';

const Scrollup = () => {

    const [arrow,setarrow]=useState(false);

    useEffect(()=>(
        window.addEventListener("scroll",function(){
            if(this.scrollY>=1780){
                // console.log(this.scrollY);
                setarrow(true);
            }
            else{
                setarrow(false);
            }
        })

    ))

    

  return (
    <div className={'scrollup ' + (arrow && "active")}>
    <a href='#intro'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>


    </a>

    </div>
  )
}

export default Scrollup