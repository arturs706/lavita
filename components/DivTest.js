import {gsap} from 'gsap'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export const Fade = () => {
    const sections = [
        {
          title: 'Title 1',
          subtitle: 'Subtitle 1',
          color: 'bg-red-100'
        },
        {
          title: 'Title 2',
          subtitle: 'Subtitle 2 Subtitle 2 Subtitle 2 Subtitle 2 Subtitle 2 Subtitle 2',
          color: 'bg-red-200'
        },
        {
          title: 'Title 3',
          subtitle: 'Subtitle 3',
          color: 'bg-red-300'
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
            gsap.to(el, {
                y: 40,
                scrollTrigger: {
                    id: `section-${index}`,
                    trigger: el,
                    start: 'top',
                    end: `${el.offsetWidth} bottom`,
                    toggleActions: 'play none none reverse',
                    markers: true,
                    pin: true,
                    
                    scrub: 1,
                },
                autoAlpha: 1,
            });
     
        });
     
    }, []);


return (
    <div className="App overflow-hidden ">
        
        {
            sections.map(({title, subtitle, color}) => (
                <div className={`h-screen`} key={title}>
                    
                    <div className="opacity-0 text-center" ref={addToRefs}>
                        <h2>{title}</h2>
                        <p>{subtitle}</p>
                        <h2>{color}</h2>
                    </div> 
                </div>
            ))
        }
    </div>
);
}

export default Fade