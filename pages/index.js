import Image from 'next/image'
import { useRef, useEffect } from 'react';
import { TweenMax, Power3 } from "gsap";

export default function Page() {
  let clickButton = useRef(null);

  useEffect(()=>{
    console.log(clickButton)
  }, [])

  return (
  <div>
     
    <div className="px-3 flex flex-wrap-reverse w-full justify-evenly items-center h-screen">
      <div className="flex flex-col sm:w-full md:w-1/3 justify-start items-center sm:h-11/12 ">
        <h2 className = "text-5xl">Lavita Ventspils</h2>
        <br/>
        <h2 className = "text-5xl">Aizkaru veikals</h2>
        <br/>
        <div className ="cursor-pointer" ref={el =>{clickButton = el}}>
       
          <Image
            
            src = "https://res.cloudinary.com/dyvgcv5se/image/upload/v1639213224/lavita/Untitled-8_gdmwjl.svg"
            layout = "intrinsic"
            alt="main image"
            width = {100}
            height = {100}
          />
        </div>
      </div>

      <div className = "opacity-80 md:w-2/3 flex justify-end">
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
     

  </div>
  )
  }
//1425px