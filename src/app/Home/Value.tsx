"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import value1 from "../../assets/Value1.png";
import value2 from "../../assets/Value2.png";
import value3 from "../../assets/Value3.png";
import value4 from "../../assets/Value4.png";
import value5 from "../../assets/Value5.png";
import hexagon from "../../assets/hexgon.png";
import Image from "next/image";

const cards = [value1, value2, value3, value4, value5];

export default function Value() {
  return (
    <div className="relative py-16 overflow-hidden">
      {/* Hexagon background */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
        <Image
          src={hexagon}
          alt="background"
          className="w-auto h-full opacity-100"
        />
      </div>
      {/* Title */}
      <div className="relative z-10 flex flex-col items-center">
        <h2 className="text-5xl font-extrabold text-purple-700 mb-6 text-center">
          Where We Create Value
        </h2>
        <p className="text-xl text-gray-500 tracking-widest mb-12 text-center max-w-4xl">
          Empowering businesses with smart, scalable, and secure digital
          solutions.
        </p>
      </div>
      {/* Marquee Slider */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <Swiper
          modules={[Autoplay, FreeMode]}
          loop={true}
          freeMode={true}
          speed={6000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2.5 },
            1280: { slidesPerView: 3.5 },
          }}
          allowTouchMove={false}
          centeredSlides={false}
        >
          {cards.concat(cards).map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="rounded-xl shadow-xl overflow-hidden h-[320px] flex items-center justify-center">
                <Image
                  src={img}
                  alt={`Value card ${idx + 1}`}
                  className="object-contain w-full h-full"
                  draggable={false}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
