import { useEffect } from "react";
import { useState } from "react";


export default function useWindowResize () {
    const [windowSize,setWindowSize] = useState({
        width:0,
        height:0
    })

    function windowReSize () {
        setWindowSize({
            width:window.innerWidth,
            height:window.innerHeight
        })
    }

    useEffect(()=>{
        windowReSize()

        window.addEventListener('resize',windowReSize)

        return ()=>{
            window.removeEventListener('resize',windowReSize)
        }
    },[])

    return windowSize
}