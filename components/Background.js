import gsap from 'https://cdn.skypack.dev/gsap';
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "https://cdn.skypack.dev/gsap/ScrollTrigger";
import LocomotiveScroll from 'https://cdn.skypack.dev/locomotive-scroll'

export default function Background() {
    const backgroundRef = useRef(null)
    gsap.registerPlugin(ScrollTrigger);
    const scroll = new LocomotiveScroll({
        el: backgroundRef.current,
        smooth: true
    })
    useEffect(() =>{
        

    },[])
    return (
        <div ref={backgroundRef}>
            
        </div>
    )
}
