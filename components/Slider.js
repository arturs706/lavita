import gsap from 'https://cdn.skypack.dev/gsap';
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from "https://cdn.skypack.dev/gsap/ScrollTrigger";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Slider = () => {
    
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
                    <Swiper className = "sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg h-100"
                        breakpoints={{
                            // when window width is >= 640px
                            768: {
                              width: 640,
                              slidesPerView: 1,
                            },
                            // when window width is >= 768px

                            1024: {
                                width: 1024,
                                spaceBetween: 20,
                                slidesPerView: 2
                            }
                          }}
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        
                        navigation
                        
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        
                        
            >
                        <SwiperSlide className="w-2/12 h-24 bg-orange-50">Slide 1</SwiperSlide>
                        <SwiperSlide className="w-2/12 h-24 bg-orange-50">Slide 2</SwiperSlide>
                        <SwiperSlide className="w-2/12 h-24 bg-orange-50">Slide 3</SwiperSlide>
                        <SwiperSlide className="w-2/12 h-24 bg-orange-50">Slide 4</SwiperSlide>
                        <SwiperSlide className="w-2/12 h-24 bg-orange-50">Slide 5</SwiperSlide>
                        <SwiperSlide className="w-2/12 h-24 bg-orange-50">Slide 6</SwiperSlide>
            </Swiper>
            </div>
        </div>
            
    </div>
);
}

export default Slider