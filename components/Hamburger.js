import { useState, useRef, useEffect } from "react";
import gsap from 'https://cdn.skypack.dev/gsap';

const Hamburger = () => {
    const menuToggle_1Ref = useRef(null)
    const menuToggle_2Ref = useRef(null)
    const menuToggle_3Ref = useRef(null)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(()=> {
        if (isOpen) {
        gsap.to(menuToggle_1Ref.current, 0.6,{
            attr: { d: "M8,2 L2,8" },
            x:1,
            ease: 'power2.easeInOut'
        }, 'start')
        gsap.to(menuToggle_2Ref.current, 0.6,{
            autoAlpha:0
        }, 'start')
        
        gsap.to(menuToggle_3Ref.current, 0.6,{
            attr:{d: "M8,8 L2,2"},
            x:1,
            ease: 'power2.easeInOut'
        }, 'start')

        let loader = gsap.timeline({})

    loader.to('.bluee', {
        duration: .8,
        attr: { d: 'M0 502S175 272 500 272s500 230 500 230V0H0Z'},
        ease: 'power2.in',
    })
    .to('.bluee', {
        duration: .8,
        attr: { d: 'M0 2S175 1 500 1s500 1 500 1V0H0Z'},
        ease: 'power2.out',

    })  
    } else {
        gsap.to(menuToggle_1Ref.current, 0.5,{
            attr: { d: "M10, 2 L2, 2" },
            x:1,
            ease: 'power2.easeInOut'
        }, 'start')
        gsap.to(menuToggle_2Ref.current, 0.5,{
            autoAlpha:1,
            x:1
        }, 'start')
        
        gsap.to(menuToggle_3Ref.current, 0.5,{
            attr:{d: "M10,8 L2,8"},
            x:1,
            ease: 'power2.easeInOut'
        }, 'start')
         
    }
    },[isOpen])


    return (
        <div className="fixed left-4 top-6 pointer z-10">
        <div className="fixed z-50">
            <button className="bg-transparent border-none cursor-pointer outline-0 no-underline"
                onClick={() => setIsOpen(!isOpen)}>
                <svg viewBox="0 0 10 10" className="h-7 w-9">
                    <path className="stroke-black stroke-[0.04rem]" d="M10, 2 L2, 2" ref={menuToggle_1Ref}></path>
                    <path className="stroke-black stroke-[0.04rem]" d="M2, 5 L10, 5" ref={menuToggle_2Ref}></path>
                    <path className="stroke-black stroke-[0.04rem]" d="M10,8 L2,8" ref={menuToggle_3Ref}></path>
                </svg>
            </button>
        </div>
        {
            isOpen
            ? <section className=" main-section fixed left-0 top-0 w-full h-screen overflow-hidden backdrop-blur-2xl ">
                <div className="flex items-center justify-center h-full px-32 py-42">
                <div className="h-full w-full absolute left-0 top-0 bg-black opacity-30"></div>
                    <svg className="h-full w-full absolute left-0 top-0 " viewBox="0 10 1000 1000" preserveAspectRatio="none">
                    <path className="h-full w-full bluee fill-orange-50" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
                    </svg>
                    <nav className="relative z-50 text-center">
                        <ul>
                            <li><span className="text-white">SĀKUMS</span></li>
                            <li><span className="text-white">PRECES</span></li>
                            <li><span className="text-white">SAZINĀTIES AR MUMS</span></li>
                            <li><span className="text-white">ATRAŠANĀS VIETA</span></li>
                            <li><span className="text-white">IELOGOTIES</span></li>
                        </ul>
                    </nav>
                </div>
            </section>
            : null
        }

        </div>
    )
}

export default Hamburger
