import Link from 'next/link'
import Image from 'next/image'
import { getSession, signIn, signOut } from "next-auth/react"
import { useSelector } from 'react-redux'
import Hamburger from 'hamburger-react'
import {useState} from 'react'

const Nav = ({session}) => {
    const [isOpen, setOpen] = useState(false)
    const counter = useSelector((state) => state.counter)
    // const [session, loading] = useSession()
    return (
        <div>
      

        <div className="mx-4 mb-2 py-4 flex justify-center lg:justify-between lg:items-center overflow-hidden">
        <div className="z-50 fixed left-4">
        <Hamburger 
            toggled={isOpen} 
            toggle={setOpen} 
            size={24} 
            easing="ease-in" 
            duration={0.2} 
            color="#4c473b"
            onToggle={toggled => {
                if (toggled) {
                   <div className="z-50 absolute w-screen h-screen" ><h1>Hello World</h1></div>
                } else {
                    <div className="z-50 absolute">Hello World</div>
                }
              }}
        />
        </div>
        <div className="w-2/3 md:w-1/2 flex justify-end lg:w-32">
        <h2 className = "text-5xl tracking-wider">LA</h2>
        </div>
       
        <div className="hidden lg:flex">
                <Link href ="/"><a className='pr-8 text-xs'>SĀKUMS</a></Link>
                <Link href ="/products"><a className='pr-8 text-xs'>PRECES</a></Link>
                <Link href ="/contactus"><a className='pr-8 text-xs'>SAZINĀTIES AR MUMS</a></Link>
                <Link href ="/location"><a className='pr-8 text-xs'>ATRAŠANĀS VIETA</a></Link>
                {session
                ? <Link href ="/api/auth/signout"><a className='pr-8 text-xs'>IZIET</a></Link>
                : <Link href ="/api/auth/signin"><a className='pr-8 text-xs'>IELOGOTIES</a></Link>
                }
                
        </div>
        



        <div className='flex pr-2 pt-1 justify-end items-center w-1/2 lg:w-1/12'>

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
            {
                counter.length > 0 
                ? <div className="absolute top-7 text-xs px-1.5 rounded-full bg-brand-900 text-brand-50 right-3">{counter.length}</div>
                : null
            }
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