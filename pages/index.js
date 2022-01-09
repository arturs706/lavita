import Image from 'next/image'
import { useRef, useEffect } from 'react';
import gsap from 'https://cdn.skypack.dev/gsap';
import { ScrollTrigger } from "https://cdn.skypack.dev/gsap/ScrollTrigger";
import Slider from '../components/Slider'

export default function Page() {
  let clickButton = useRef(null);
  let containerRef = useRef(null);
  const spanRef = useRef(null);
  const spanRef2 = useRef(null);
  const tl = gsap.timeline({});
  gsap.registerPlugin(ScrollTrigger);
  useEffect(()=>{
        tl.from(spanRef.current, {
            duration: 1.6,
            y: 400,
            ease: "power4.out",
            delay: 0.1,
            skewY: -24,
        })
    },[tl])
    useEffect(()=>{
      tl.from(spanRef2.current, {
          duration: 1.6,
          y: 400,
          ease: "power4.out",
          delay: 0.1,
          skewY: -24,
      })
  },[tl])
  
  useEffect(()=>{
    gsap.fromTo(containerRef.current,{
      rotation: 0
    },{
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "linear"
    })
  })
  useEffect(() => {gsap.fromTo(containerRef.current, {timeScale: 1}, {timeScale: 1, duration: 1})}, []);
  useEffect(() => {gsap.to(clickButton,5,{opacity: 1,y: -20,ease: "Power3.easeOut"})}, [])

  return (
  <div>
  <div className="overflow-hidden flex">
    <div className="w-1/12 h-screen justify-center flex-col items-center hidden lg:flex">
      <div className="h-1/4 flex flex-col justify-between absolute left-8 top-72">
          <h2 className=' skew-x-12'>FB</h2>
          <h2 className=' skew-x-12'>IG</h2>
          <h2 className=' skew-x-12'>VK</h2>
      </div>
    </div>
    <div className="px-4 flex flex-wrap-reverse w-full lg:w-11/12 justify-evenly items-center h-screen">
      
      <div className="flex flex-col sm:w-full md:w-1/3 lg:w-1/3 justify-start items-center sm:h-11/12">
        {/* <h2 className = "text-8xl lg:text-10xl">LAVITA</h2> */}
        <div className="h-44 md:h-48 lg:h-64 overflow-hidden">
          <span className="z-50">
            <div ref={spanRef}>
              <h1 className='text-9xl lg:text-10xl'>LAVITA</h1>
              <h2 className = "text-4xl lg:text-5xl text-center" ref={spanRef2}>Aizkaru veikals</h2>
            </div>
          </span>
        </div>
        <br/>
        
        <br/>
        <div className ="cursor-pointer" ref={containerRef}>
       
          <Image
            
            src = "https://res.cloudinary.com/dyvgcv5se/image/upload/v1641320331/lavita/CIRCLE_2_buldd0.svg"
            layout = "intrinsic"
            alt="main image"
            width = {120}
            height = {120}
            
          />
        </div>
      </div>

      <div className = "opacity-0 md:w-1/2 flex justify-end items-center lg: pb-10 -z-10" ref={el =>{clickButton = el}}>
        <Image
          priority
          src="https://res.cloudinary.com/dyvgcv5se/image/upload/v1639954913/Test/collov-home-design-js8AQlw71HA-unsplash_qj61bq.jpg"
          layout = "intrinsic"
          alt="main image"
          width = {600}
          height = {600}
        />
      </div>

    </div>
    
    </div>
    
    <div className = "second-div"></div>

    <Slider/>
    <div>Vairak neka 50 orderi diena</div>
    <div>Atrodamies Ventspils centraa</div>
    <div>Vairak neka 20 gadi estabilshed</div>
    <div>Labakas kvalitates produkti</div>
    </div>
  )
  }
//1425px