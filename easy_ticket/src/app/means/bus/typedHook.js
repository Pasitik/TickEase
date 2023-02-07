"use client"
import React, {useEffect, useRef} from 'react'
import Typed from 'typed.js';


const TypedHook = () => {
  
    const el=useRef(null);
    

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: [ " ",'Travel','Explore', 'Work'],
        startDelay:500, 
        typeSpeed:300, 
        backDelay:300, 
        backSpeed:400,  
        smartBackspace:true,
        showCursor:false,
        loop:true
      });
      
    }, [])
  
  
  return (
    <div>
        <p>Join us <span ref={el}></span></p>
    </div>
  )
}

export default TypedHook
