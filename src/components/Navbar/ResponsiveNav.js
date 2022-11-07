
import {useState, useEffect} from 'react'
import StdNav from "./StdNav";
import MiniNav from "./MiniNav";
import React from "react";



function ResponsiveNav() {
    const [size, setSize] = useState({
        width: window.innerWidth
    });

    useEffect(() => {
        function handleResize() {
            setSize({
                width: window.innerWidth
            })
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    });

    return size.width > 640 ? <StdNav/> : <MiniNav/>
  }
  
  export default ResponsiveNav;