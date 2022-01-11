import gsap from 'https://cdn.skypack.dev/gsap';
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from "https://cdn.skypack.dev/gsap/ScrollTrigger";
import { Pagination, A11y, Lazy, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

export const Slider = () => {
    const swiperRef = useRef(null);
    const addToRefs = useRef(null);

    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {
             
            gsap.fromTo(addToRefs.current, {
                autoAlpha: 0
            }, {
                duration: 2.5,
                autoAlpha: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: addToRefs.current,
                    start: 'top bottom',
                    toggleActions: 'play none none reverse',
                }
            });;
     
    }, []);


return (
    
    <div className="App ">
        <div className="h-screen flex flex-col justify-center" ref={addToRefs}>
            <div className="text-6xl mb-12 flex justify-center">JAUNUMS</div>
            <div className="px-5 ">
            <div className="flex">
            <div className=" w-full flex lg:justify-end lg:pr-4 justify-between">
            <div className="previousButton after:hidden pr-5 cursor-pointer" onClick={() => swiperRef.current.swiper.slidePrev()}>
            <Image
               src="https://res.cloudinary.com/dyvgcv5se/image/upload/v1641645262/lavita/arrowleft_scctkj.svg"
               alt="prev-arrow"
               width={50}
               height={37}
            />
            </div>
            <div className="nextButton after:hidden cursor-pointer" onClick={() => swiperRef.current.swiper.slideNext()}>
            <Image
               src="https://res.cloudinary.com/dyvgcv5se/image/upload/v1641645262/lavita/arrowright_qbeotc.svg"
               alt="arrow-next"
               width={50}
               height={37}
            />
            </div>
            </div>
            </div>
            <Swiper className = "sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg h-100"
                modules={[Pagination, A11y, Lazy, Autoplay]}
                pagination={{ clickable: true, dynamicBullets: true }}
                ref={swiperRef}
                autoplay={{
                    "delay": 5000,
                    "disableOnInteraction": false
                  }}
                lazy={true}
                loop={true}
                speed={1500}
                preloadImages = {false}
                breakpoints={{
                    768: {
                        width: 640,
                        slidesPerView: 1,
                        },
                    1024: {
                        width: 1024,
                        spaceBetween: 20,
                        slidesPerView: 2
                        }
                }}
                >
                <SwiperSlide className="w-2/12 h-screen bg-orange-50">Slide 1</SwiperSlide>
                <SwiperSlide className="w-2/12 h-screen bg-orange-50">Slide 2</SwiperSlide>
                <SwiperSlide className="w-2/12 h-screen bg-orange-50">Slide 3</SwiperSlide>
                <SwiperSlide className="w-2/12 h-screen bg-orange-50">Slide 4</SwiperSlide>
                <SwiperSlide className="w-2/12 h-screen bg-orange-50">Slide 5</SwiperSlide>
                <SwiperSlide className="w-2/12 h-screen bg-orange-50">Slide 6</SwiperSlide>
            </Swiper>
            </div>
        </div>
    </div>
);
}

export default Slider


