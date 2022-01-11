import Hamburger from "hamburger-react";
import { useState, useRef, useEffect } from "react";
import gsap from 'https://cdn.skypack.dev/gsap';

const HamburgerMenu_copy = () => {
    const listRef = useRef(null)
    const backgroundRef = useRef(null)
    const [isOpen, setOpen] = useState(false)
    useEffect(()=> {
        console.log(listRef.current)
        gsap.from(listRef.current, {
            opacity: 0, 
            y: 100, 
            duration: 10
          });
    },[])

    return (
        <div className="fixed left-4 top-4 pointer z-10">
        <div className="fixed z-50">
         <Hamburger 
            toggled={isOpen} 
            toggle={setOpen} 
            size={24} 
            easing="ease-in" 
            duration={0.4}
        />
        </div>
        {
            isOpen
            ? <section className="fixed left-0 top-0 w-full h-screen overflow-hidden backdrop-blur-2xl " ref={backgroundRef}>
                <div className="flex items-center justify-center h-full px-32 py-42">
                <div className="h-full w-full absolute left-0 top-0 bg-black opacity-30"></div>
                    <nav className="relative z-50 text-center">
                        <ul ref={listRef}>
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

export default HamburgerMenu_copy


// import Hamburger from "hamburger-react";
// import { useState } from "react";

// const HamburgerMenu_copy = () => {
//     const [isOpen, setOpen] = useState(false)
//     return (
//         <div>
         
//         {
//             isOpen
//             ?
//             <section className="fixed left-0 top-0 w-full h-screen">
//                 <div className="fixed top-4 pointer z-50 left-4">
//                 <Hamburger 
//                 toggled={isOpen} 
//                 toggle={setOpen} 
//                 size={24} 
//                 easing="ease-in" 
//                 color="white"
//                 duration={0.8}/>
//                 </div>
//                 <div className="flex items-center justify-center h-full px-32 py-42">
//                 <div className="h-full w-full absolute left-0 top-0 bg-black  backdrop-blur-2xl z-1"></div>
//                     <nav className="relative z-50 text-center">
//                         <ul>
//                             <li><span>SĀKUMS</span></li>
//                             <li><span>PRECES</span></li>
//                             <li><span>SAZINĀTIES AR MUMS</span></li>
//                             <li><span>ATRAŠANĀS VIETA</span></li>
//                             <li><span>IELOGOTIES</span></li>
//                         </ul>
//                     </nav>
//                 </div>
//             </section>
//             :  
//             <div className="fixed top-4 pointer z-50 left-4">
//             <Hamburger 
//             toggled={isOpen} 
//             toggle={setOpen} 
//             size={24} 
//             easing="ease-in" 
//             duration={0.8}/>
//             </div>
//         }
//         </div>
           
//     )
// }

// export default HamburgerMenu_copy
