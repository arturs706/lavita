import {gsap} from 'gsap'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Fade = () => {
    const sections = [
        {
          title: 'Title 1',
          subtitle: 'Subtitle 1',
          color: "bg-red-100"
        },
        {
          title: 'Title 2',
          subtitle: 'Subtitle 2',
          color: "bg-red-200"
        },
        {
          title: 'Title 3',
          subtitle: 'Subtitle 3',
          color: "bg-red-300"
        }
      ];
    const revealRefs = useRef([]);
    revealRefs.current = [];

    gsap.registerPlugin(ScrollTrigger)
    const addToRefs = el => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };
    
    useEffect(() => {
        revealRefs.current.forEach((el, index) => {
             
            gsap.fromTo(el, {
                autoAlpha: 0
            }, {
                duration: 2,
                autoAlpha: 1,
                ease: 'none',
                scrollTrigger: {
                    id: `section-${index+1}`,
                    trigger: el,
                    start: 'top bottom',
                    toggleActions: 'play none none reverse',
                    markers: true
                }
            });
     
        });
     
    }, []);


return (
    <div className="App ">
        {
            sections.map(({title, subtitle, color}) => (
                <div className={`h-screen flex justify-center`} key={title} ref={addToRefs}>
                    <h2>{title}</h2>
                    <p>{subtitle}</p>
                    <h2>{color}</h2>
                </div>
            ))
        }
    </div>
);
}

export default Fade