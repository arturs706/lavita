import Image from 'next/image'

export default function Page() {
  return (
    <div>
      <div className="absolute z-20 left-32 top-28">
     <Image
      src="https://res.cloudinary.com/dyvgcv5se/image/upload/v1639051831/first_page/Untitled-2_xikwzg.svg"
      alt="main_logo"
      width={100}
      height={100}
     />
     </div>
     <div className="absolute z-10 top-28 -right-1">
     <Image
      src="https://res.cloudinary.com/dyvgcv5se/image/upload/v1639075907/Test/rounded_nhjmx3.png"
      alt="main_logo"
      width={260}
      height={400}
     />
     </div>
    </div>
  )
  }
