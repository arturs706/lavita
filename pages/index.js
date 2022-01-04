import Image from 'next/image'
import { useRef, useEffect } from 'react';
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Fade from '../components/Fade'

export default function Page() {
  let clickButton = useRef(null);
  gsap.registerPlugin(ScrollTrigger);


  useEffect(() => {gsap.to(clickButton,5,{opacity: 1,y: -20,ease: Power3.easeOut})}, [])

  return (
  <div className="overflow-hidden">
    <div className="px-4 flex flex-wrap-reverse w-full justify-evenly items-center h-screen ">
      <div className="flex flex-col sm:w-full md:w-1/3 lg:w-1/2 justify-start items-center sm:h-11/12">
        <h2 className = "text-4xl lg:text-9xl">Lavita</h2>
        <br/>
        <h2 className = "text-4xl lg:text-6xl">Aizkaru veikals</h2>
        <br/>
        <div className ="cursor-pointer" >
       
          <Image
            
            src = "https://res.cloudinary.com/dyvgcv5se/image/upload/v1639213224/lavita/Untitled-8_gdmwjl.svg"
            layout = "intrinsic"
            alt="main image"
            width = {100}
            height = {100}
          />
        </div>
      </div>

      <div className = "opacity-0 md:w-1/2 flex justify-end items-center " ref={el =>{clickButton = el}}>
        <Image
          priority
          src = "https://res.cloudinary.com/dyvgcv5se/image/upload/v1639180455/lavita/unspalsh_hexc2b.jpg"
          layout = "intrinsic"
          alt="main image"
          width = {620}
          height = {700}
        />
      </div>

    </div>
    <div className = "second-div"></div>
    <Fade/>
    </div>
  )
  }
//1425px