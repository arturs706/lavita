import gsap from 'https://cdn.skypack.dev/gsap';
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from "https://cdn.skypack.dev/gsap/ScrollTrigger";

export const Fade = () => {
    const sections = [
        {
          title: 'Jaunums',
          data: ''
        },
        {
          title: 'Title 2',
          data: ''
        },
        {
          title: 'Title 3',
          data: ''
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
                }
            });
     
        });
     
    }, []);


return (
    <div className="App ">
        {
            sections.map(({title, data}) => (
                <div className={`h-screen flex justify-center`} key={title} ref={addToRefs}>
                    <h2 className="text-4xl">{title}</h2>
                    {data}
                </div>
            ))
        }
    </div>
);
}

export default Fade