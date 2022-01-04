import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import Hamburger from 'hamburger-react'
import Image from 'next/image'

const Lavitamain = () => {    
    const [isOpen, setOpen] = useState(false)
    const el = useRef();
    const q = gsap.utils.selector(el);
    useEffect(() => {
        gsap.from(q("span"), {
            opacity: 0,
            y: -40,
            stagger: 0.17,
            ease: "power3.inOut"
          },
          0.5);
    }, [q]);
  
    return (
      <div>
        <div className="z-50 fixed left-8 top-3">
      <Hamburger 
          toggled={isOpen} 
          toggle={setOpen} 
          size={24} 
          easing="ease-in" 
          duration={0.2} 
          color="#4c473b"
          onToggle={toggled => {
              if (toggled) {
                 <div className="z-50 absolute w-screen h-screen bg-red-500" ><h1>Hello World</h1></div>
              } else {
                  <div className="z-50 absolute">Hello World</div>
              }
            }}
      />
      </div>
      <div className="h-screen">
      <div className="h-screen flex justify-center items-center	anim1" ref={el}>
      <div className=" w-1/12 h-screen flex justify-center items-center">
        <div className="h-1/4 flex flex-col justify-between items-center">
          <h2 className=' skew-x-12'>FB</h2>
          <h2 className=' skew-x-12'>IG</h2>
          <h2 className=' skew-x-12'>VK</h2>
        </div>
   
      </div>
      <div className="w-5/12">
        <span className="text-7xl sm:text-8xl lg:text-10xl">L</span>
        <span className="text-7xl sm:text-8xl lg:text-10xl">A</span>
        <span className="text-7xl sm:text-8xl lg:text-10xl">V</span>
        <span className="text-7xl sm:text-8xl lg:text-10xl">I</span>
        <span className="text-7xl sm:text-8xl lg:text-10xl">T</span>
        <span className="text-7xl sm:text-8xl lg:text-10xl">A</span>
      </div>
      <div className="relative top-4 right-20 -z-10">
      <Image
      src="https://res.cloudinary.com/dyvgcv5se/image/upload/v1639954913/Test/collov-home-design-js8AQlw71HA-unsplash_qj61bq.jpg"
      alt="mainpic"
      height={480}
      width={640}
      layout={"intrinsic"}
      />
      </div>
      <div className="h-1/4 flex flex-col justify-between items-center">
      <Image
        src="https://res.cloudinary.com/dyvgcv5se/image/upload/v1641139948/lavita/circle-dot_jveaba.svg"
        alt="circle-dot"
        width={50}
        height={50}
      />
       <Image
        src="https://res.cloudinary.com/dyvgcv5se/image/upload/v1641139948/lavita/circle-dot_jveaba.svg"
        alt="circle-dot"
        width={50}
        height={50}
      />
       <Image
        src="https://res.cloudinary.com/dyvgcv5se/image/upload/v1641139948/lavita/circle-dot_jveaba.svg"
        alt="circle-dot"
        width={50}
        height={50}
      />
       <Image
        src="https://res.cloudinary.com/dyvgcv5se/image/upload/v1641139948/lavita/circle-dot_jveaba.svg"
        alt="circle-dot"
        width={50}
        height={50}
      />
      </div>

      </div>
     
      </div>
      
      </div>
  
    )
}

export default Lavitamain