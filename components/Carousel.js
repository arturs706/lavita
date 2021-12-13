// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import Image from 'next/image'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


export const Carousel = () => {
  const slides = [];
  for ( let i = 1; i < 7; i++ ) {
    console.log(i)
    slides.push(
      <SwiperSlide key={`slide-${i}`}>
        <Image
            src = {`https://res.cloudinary.com/dyvgcv5se/image/upload/v1639402293/curtain_show/${i}.jpg`}
            layout = "intrinsic"
            alt="Main image"
            width = {500}
            height = {500}
          />
          <div>Cena</div>
      </SwiperSlide>
    )
  }
  return (
    <div>
      <Swiper id="carousel"
     modules={[Navigation]}
     spaceBetween={50}
     slidesPerView={3}
     navigation
      >
        
        {slides}
      </Swiper>
    </div>
  )
}

export default Carousel