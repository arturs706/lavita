import Image from 'next/image'

export default function Page() {
  return (
    <div>
      <div className="absolute z-20 left-1 top-24">
     <Image
      src="https://res.cloudinary.com/dyvgcv5se/image/upload/v1639051831/first_page/Untitled-2_xikwzg.svg"
      alt="main_logo"
      width={140}
      height={140}
     />
     </div>
     <div className="absolute z-10 opacity-80 top-28 right-5">
     <Image
      src="https://res.cloudinary.com/dyvgcv5se/image/upload/v1639075907/Test/rounded_nhjmx3.png"
      alt="main_logo"
      width={340}
      height={560}
     />
     </div>
    </div>
  )
  }
