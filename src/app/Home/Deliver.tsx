"use client"
import Image from "next/image";
import avg_schedule_variance from "../../assets/avg_schedule_variance.png";
import code_quality_score from "../../assets/code_quality_score.png";
import milestone_acheivment from "../../assets/milestone_acheivment.png";
import on_time_delivery from "../../assets/on_time_delivery.png";
import risk_migration from "../../assets/risk_migration.png";
import with_in_budget from "../../assets/with_in_budget.png";
import code_reusability from "../../assets/code_reusability.png";
import mean_time_resolution from "../../assets/mean_time_resolution.png";
import automated_test_courage from "../../assets/automated_test_courage.png";
import proloyment_success from "../../assets/proloyment_success.png";
import detect_density from "../../assets/detect_density.png";
import code_quality_score2 from "../../assets/code_quality_score2.png";
import risk_migration_efficiency from "../../assets/risk_migration.png";
import reduced_deployment_time from "../../assets/reduced_deployment_time.png";
import less_manual_coding from "../../assets/less_manual_coding.png";
import enhance_experience from "../../assets/enhance_experience.png";
import faster_development from "../../assets/faster_development.png";
import increase_efficiency from "../../assets/increase_efficiency.png";

import hexagon from "../../assets/hexgon.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import React, { useState, useRef } from "react";
import type { Swiper as SwiperClass } from 'swiper';

const slides = [
  {
    heading: "Project Management",
    subheading: "Delivering Projects with Precision and Performance",
    cards: [
      { icon: on_time_delivery, value: "97%", label: "On-Time Delivery" },
      { icon: with_in_budget, value: "94%", label: "With In Budget" },
      { icon: code_quality_score, value: "9.2", label: "Code Quality Score" },
      { icon: avg_schedule_variance, value: "<3%", label: "Avg. Schedule\nVariance" },
      { icon: milestone_acheivment, value: "98.5", label: "Milestone\nAchievements" },
      { icon: risk_migration, value: "92%", label: "Risk Mitigation\nEfficiency" },
    ],
  },
  {
    heading: "AI Integration",
    subheading: "Accelerating Development with AI Integration",
    cards: [
      { icon: increase_efficiency, value: "9.2%", label: "Increase In Efficiency" },
      { icon: faster_development, value: "<0.4", label: "Faster Development" },
      { icon: enhance_experience, value: "99.2%", label: "Enhanced Experience" },
      { icon: less_manual_coding, value: "85% +", label: "Less Manual Coding" },
      { icon: reduced_deployment_time, value: "<2hrs", label: "Reduced In Deployment Time" },
      { icon: risk_migration_efficiency, value: "92%", label: "Risk Mitigation Efficiency" },
    ],
  },
  {
    heading: "Engineering Practice",
    subheading: "Delivering Projects with Precision and Performance",
    cards: [
      { icon: code_quality_score2, value: "9.2", label: "Code Quality Score" },
      { icon: detect_density, value: "<0.4", label: "Defect Density" },
      { icon: proloyment_success, value: "99.2", label: "Prroloyment Success" },
      { icon: automated_test_courage, value: "85% +", label: "Automated Test Coverage" },
      { icon: mean_time_resolution, value: "<2hrs", label: "Mean Time to Resolution" },
      { icon: code_reusability, value: "40%", label: "Code Reusability" },
    ],
  },
];

export default function Deliver() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden py-24">
      <div className="absolute -left-78 top-12 w-auto h-full opacity-80">
        <Image src={hexagon} alt="hexagon bg" />
      </div>

      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-purple-600 mb-16">
        How We Deliver
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={false}
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full max-w-6xl mx-auto z-10"
        allowTouchMove={true}
        loop={true}
        speed={600}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="px-4">
              <h3 className="text-3xl md:text-4xl font-bold text-center text-purple-600 mb-4">
                {slide.heading}
              </h3>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
                {slide.subheading}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
                {slide.cards.map((card, cidx) => (
                  <div
                    key={cidx}
                    className="flex items-start bg-white rounded-2xl shadow-lg border border-purple-100 p-6 transition-all duration-300 hover:shadow-xl hover:border-purple-200 gap-5 w-full h-auto min-w-[320px]"
                  >
                    <div className="bg-purple-50 p-3 rounded-xl">
                      <Image
                        src={card.icon}
                        alt={card.label}
                        width={48}
                        height={48}
                        className="mt-1"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-3xl font-extrabold text-purple-600 mb-2">
                        {card.value}
                      </span>
                      <span className="text-gray-700 whitespace-pre-line text-lg">
                        {card.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex items-center justify-center gap-6 mt-12">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`flex items-center justify-center font-bold border-2 rounded-full transition-all duration-300 ${
              activeIndex === idx
                ? "w-8 h-8 border-purple-500 text-purple-600 bg-purple-50"
                : "w-6 h-6 border-gray-300 text-gray-400 hover:border-purple-300"
            }`}
            onClick={() => {
              if (swiperRef.current) {
                swiperRef.current.slideTo(idx);
              }
            }}
            aria-label={`Go to slide ${idx + 1}`}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </section>
  );
}
