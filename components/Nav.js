import Link from 'next/link'
import Image from 'next/image'

const Nav = () => {
    // const [session, loading] = useSession()
    return (
        <div>
      

        <div className="mx-28 mb-10 py-10 border-b border-yellow-700 flex justify-between items-center">
        <div>
                <Link href ="/"><a className='pr-9 text-base'>Sākums</a></Link>
                <Link href ="/products"><a className='pr-9 text-base'>Preces</a></Link>
                <Link href ="/contactus"><a className='pr-9 text-base'>Sazināties ar mums</a></Link>
                <Link href ="/location"><a className='pr-9 text-base'>Atrašanās vieta</a></Link>
                <Link href ="/api/auth/signin"><a className='pr-9 text-base'>Signin</a></Link>
                <Link href ="/api/auth/signout"><a className='pr-9 text-base'>SignOut</a></Link>
        </div>
        <div className='relative right-36'> 
        <Image
                src="https://res.cloudinary.com/dyvgcv5se/image/upload/v1636317065/first%20page/logo_copy_dqo2gr.png"
                alt="Login"
                width={110}
                height={60}
            />
        </div>



        <div className='flex'>
            <Link href = "/bag">
            <a>
            <div>
    
            

            <Image
                src="https://res.cloudinary.com/dyvgcv5se/image/upload/v1636281970/icons_3/Shopicons_Light_Cart1_invsrl.svg"
                alt="Shopping bag"
                width={28}
                height={28}
            />
           
            </div>
            </a>
            </Link>

            <div className='pl-3'>
            <Link href="/myaccount">
            <a>
            <Image
                src="https://res.cloudinary.com/dyvgcv5se/image/upload/v1636281958/icons_3/Shopicons_Light_Account_ir9uel.svg"
                alt="Login"
                width={28}
                height={28}
            />
            </a>
            </Link>
            </div>
        </div>
        </div>
           
        </div>
    )
}

export default Nav

/*  <div className='flex bg-red-200 py-1 text-gray-900 justify-center'>
        <span>Rudens izpārdošana. 20% atlaide visām precēm</span>
        </div>
*/