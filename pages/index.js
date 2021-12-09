import Image from 'next/image'

export default function Page() {
  return (
    <div>
      <div className="absolute z-20 left-4 top-20">
     <Image
      src="https://res.cloudinary.com/dyvgcv5se/image/upload/v1639051831/first_page/Untitled-2_xikwzg.svg"
      alt="main_logo"
      width={140}
      height={140}
     />
     </div>
     <div className="absolute z-10 top-28 right-5">
     <Image
      src="https://res.cloudinary.com/dyvgcv5se/image/upload/v1639082406/Test/Untitled-1_ksrmre.png"
      alt="main_logo"
      width={340}
      height={500}
     />
     </div>
     <div className='absolute z-50 top-full'>     
       <h1>LIELĀKAIS - AIZKARU - PIEDĀVĀJUMS - VENTSPILĪ - UN -  VISĀ - KURZEMĒ</h1>
     </div>

    </div>
  )
  }
