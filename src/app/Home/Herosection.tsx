"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import logo from "../../assets/LOGO.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const HypermindsHero = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative h-screen overflow-hidden">
      <nav className="absolute z-30 w-full px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <div className="relative w-48 h-12">
              <Image
                src={logo}
                alt="Hyperminds Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {["What we do", "What we think", "Who we are", "Careers"].map(
              (item, index) => (
                <div key={index} className="relative group">
                  <button className="text-white/90 hover:text-white cursor-pointer transition-colors duration-200 flex items-center space-x-1 text-sm font-medium bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/20">
                    <span>{item}</span>
                    <ChevronDown className="w-3 h-3" />
                  </button>
                </div>
              )
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-purple-400 transition-colors duration-200 bg-white/10 backdrop-blur-sm p-2 rounded-full border border-white/20"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex flex-col space-y-4">
              {["What we do", "What we think", "Who we are", "Careers"].map(
                (item, index) => (
                  <button
                    key={index}
                    className="text-white/90 hover:text-white transition-colors duration-200 text-left flex items-center justify-between py-2 px-3 rounded-lg hover:bg-white/10"
                  >
                    <span className="font-medium">{item}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={6000}
        allowTouchMove={false}
        className="h-screen"
      >
        <SwiperSlide>
          <div className="absolute inset-0">
            <Image
              src={banner2}
              alt="Hero Background 1"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="relative z-20 flex flex-col items-end justify-center h-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl text-right mr-0 ml-auto">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
                INNOVATION FIRST.
                <br />
                VALUE ALWAYS.
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed">
                Delivering intelligent, cost-effective IT solutions that evolve
                <br />
                with your business.
              </p>
              <button className="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 hover:from-purple-700 hover:via-purple-800 hover:to-indigo-700 text-white px-7 py-2 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 border border-purple-500/30">
                Get In Touch
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="absolute inset-0">
            <Image
              src={banner3}
              alt="Hero Background 2"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="relative z-20 flex flex-col items-start justify-center h-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl text-left ml-0 mr-auto">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
                RELIABLE TECH.
                <br />
                REAL-WORLD RESULTS.
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed">
                Transforming operations with agile teams, automation-first
                mindset,
                <br />
                and minimal overhead.
              </p>
              <button className="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 hover:from-purple-700 hover:via-purple-800 hover:to-indigo-700 text-white px-7 py-2 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 border border-purple-500/30">
                Get In Touch
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="absolute inset-0">
            <Image
              src={banner1}
              alt="Hero Background 3"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="relative z-20 flex flex-col justify-center h-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl text-left ml-0 mr-auto">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
                <div>OUT THINK .</div>
                <div>OUT DO .</div>
                <div>OUT DELIVER .</div>
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed max-w-lg">
                Empowering digital transformation through innovative, scalable,
                <br />
                and intelligent technology solutions.
              </p>
              <button className="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 hover:from-purple-700 hover:via-purple-800 hover:to-indigo-700 text-white px-7 py-2 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 border border-purple-500/30">
                Get In Touch
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HypermindsHero;
