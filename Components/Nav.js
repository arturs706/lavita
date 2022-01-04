import { useEffect, useState } from 'react';
import { gsap  } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from 'next/link'
import Image from 'next/image'
import { getSession, signIn, signOut } from "next-auth/react"

// import { useSelector } from 'react-redux'

const Nav = ({ session }) => {
    // const counter = useSelector((state) => state.counter)
    // const [session, loading] = useSession()
    gsap.registerPlugin(ScrollTrigger);
  
    useEffect (()=>{
    ScrollTrigger.create({
    start: 'top -50',
    end: 99999,
    toggleClass: {className: 'jwpnavbar--scrolled', targets: '.jwpnavbar'}
});

gsap.to(".jwpnavbar", {
  yPercent: -100,
  ease: "none",
  scrollTrigger: {
    start: 'top -300',
    end: 99999,
    toggleActions: "play none none reverse"
  }
}) 
    },[])



    return (
      <div className="jwpnavbar h-20 text-center fixed w-full duration-75 z-50 shadow-sm shadow-orange-100/50">
    

      <div className="mx-4 mb-2 py-3 flex justify-between items-center overflow-hidden ">
      <div>
      <h2 className = "text-5xl tracking-widest pl-20">LA</h2>
      </div>
     
      <div>
              <Link href ="/"><a className='pr-8 text-xss'>SĀKUMS</a></Link>
              <Link href ="/products"><a className='pr-8 text-xss'>PRECES</a></Link>
              <Link href ="/contactus"><a className='pr-8 text-xss'>SAZINĀTIES AR MUMS</a></Link>
              <Link href ="/location"><a className='pr-8 text-xss'>ATRAŠANĀS VIETA</a></Link>
              {session
              ? <Link href ="/api/auth/signout"><a className='pr-8 text-xss'>IZIET</a></Link>
              : <Link href ="/api/auth/signin"><a className='pr-8 text-xss'>IELOGOTIES</a></Link>
              }
              
      </div>
      



      <div className='flex pr-2 pt-1'>

      <div className="pr-2">
          <Link href="/myaccount">
          <a>
          <Image
              src="https://res.cloudinary.com/dyvgcv5se/image/upload/v1636281958/icons_3/Shopicons_Light_Account_ir9uel.svg"
              alt="Login"
              layout="fixed"
              width={20}
              height={20}
          />
          </a>
          </Link>
          </div>
          <div className="pr-2">
          <Link href="/myaccount">
          <a>
          <Image
              src="https://res.cloudinary.com/dyvgcv5se/image/upload/v1638744273/icons/Shopicons_Light_Heart_pgaryx.svg"
              alt="Login"
              layout="fixed"
              width={20}
              height={20}
          />
          </a>
          </Link>
          </div>
          <Link href = "/bag">
          <a>
          <div>
          <Image
              src="https://res.cloudinary.com/dyvgcv5se/image/upload/v1636281970/icons_3/Shopicons_Light_Cart1_invsrl.svg"
              alt="Shopping bag"
              layout="fixed"
              width={20}
              height={20}
          />
          {/* {
              counter.length > 0 
              ? <div className="absolute top-7 text-xs px-1.5 rounded-full bg-brand-900 text-brand-50 right-3">{counter.length}</div>
              : null
          } */}
          </div>
          </a>
          </Link>

          
      </div>
      </div>
         
      </div>
  )
}

export default Nav

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  return {
    props: {
      data: session
    },
  }
}