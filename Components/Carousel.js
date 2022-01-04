// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import Image from 'next/image'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { EffectFade } from 'swiper';


export const Carousel = () => {
  const slides = [];
  for ( let i = 1; i < 7; i++ ) {
    slides.push(
      <SwiperSlide key={`slide-${i}`}>
        <Image
            src = {`https://res.cloudinary.com/dyvgcv5se/image/upload/v1639402293/curtain_show/${i}.jpg`}
            layout = "intrinsic"
            alt="Main image"
            width = {566}
            height = {566}
          />
          <div>Cena</div>
      </SwiperSlide>
    )
  }
  return (
    <div>
      <Swiper id="carousel"
     breakpoints={{
      // when window width is >= 640px
      640: {
        width: 640,
        slidesPerView: 1,
      },
      // when window width is >= 768px
      768: {
        width: 768,
        slidesPerView: 2,
        spaceBetween: 10
      },
      1024: {
        width: 1024,
        slidesPerView: 3,
        spaceBetween: 20
      }
    }}
     modules={[Navigation]}
     navigation
     
      >
        
        {slides}
      </Swiper>
    </div>
  )
}

export default Carousel