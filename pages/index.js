import Image from 'next/image'

export default function Page() {
  return (
    <div>
     
     <div className="px-3 flex flex-wrap-reverse w-full justify-evenly items-center h-screen">
     <div className="flex flex-col sm:w-full md:w-3/12 justify-start items-center sm:h-96">
     <h2 className = "text-5xl">Lavita Ventspils</h2>
     <br/>
      <h2 className = "text-5xl">Aizkaru veikals</h2>
     </div>
     <div className = "opacity-80 ">
      <Image
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