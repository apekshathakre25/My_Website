"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  Sparkles,
  Smile,
  Repeat,
  Clock,
  Calendar,
  MessageSquare,
  LucideIcon,
} from "lucide-react";
import Innovation_first from "../../assets/Innovation_first.png";
import Client_centric_approach from "../../assets/Client_centric_approach.png";
import Cost_efficient_delivery from "../../assets/Cost_efficient_delivery.png";
import Ideas_generated from "../../assets/Ideas_Generated.png";
import Project_funding from "../../assets/Project_funding_rate.png";
import Patent_generation from "../../assets/Patent_generation.png";
import Collaboration_index from "../../assets/Collaboration_index.png";
import Optimized_team from "../../assets/optimized_team_structure.png";
import Faster_time from "../../assets/Faster_time_market.png";
import Cloud_optimized from "../../assets/Cloud_optimized_deployments.png";
import minimal_toil from "../../assets/Minimal_toil.png";
import Value_driven from "../../assets/Value_driven_delivery.png";

type StatIcon = StaticImageData | LucideIcon;

interface Stat {
  icon: StatIcon;
  title: string;
  description: string;
}

interface Belief {
  image: StaticImageData;
  title: string;
  subtitle: string;
  stats: Stat[];
}

const beliefs: Belief[] = [
  {
    image: Innovation_first,
    title: "Innovation First",
    subtitle: "Cutting-edge solutions powered by modern tech and AI/ML.",
    stats: [
      {
        icon: Ideas_generated,
        title: "Ideas Generated",
        description:
          "Over 200 new ideas submitted annually to spark continuous creativity.",
      },
      {
        icon: Project_funding,
        title: "Project Funding Rate",
        description:
          "95% of validated ideas receive funding to drive scalable growth.",
      },
      {
        icon: Patent_generation,
        title: "Patent Generation",
        description:
          "10 patents filed or awarded yearly, showcasing tech leadership",
      },
      {
        icon: Collaboration_index,
        title: "Collaboration Index",
        description:
          "80% growth in cross-functional and external innovation partnerships.",
      },
      {
        icon: Value_driven,
        title: "Innovation Adoption Rate",
        description:
          "60% of projects integrated into long-term roadmaps and scaled.",
      },
    ],
  },
  {
    image: Cost_efficient_delivery,
    title: "Cost-Effective Delivery",
    subtitle: "Maximize business value with lean, smart IT practices.",
    stats: [
      {
        icon: Optimized_team,
        title: "Optimized Team Structures",
        description: "Lean teams deliver maximum value with minimal overhead.",
      },
      {
        icon: Faster_time,
        title: "Faster Time to Market",
        description:
          "Accelerated release cycles improve delivery speed and client responsiveness",
      },
      {
        icon: Cloud_optimized,
        title: "Cloud-Optimized Deployments",
        description:
          "Cost savings achieved through scalable cloud-native infrastructure",
      },
      {
        icon: minimal_toil,
        title: "Minimal Toil, Maximum Output",
        description:
          "Engineering practices reduce repetitive work while maximizing impact.",
      },
      {
        icon: Value_driven,
        title: "Value-Driven Delivery",
        description:
          "Every project aligned to deliver measurable business and cost value.",
      },
    ],
  },
  {
    image: Client_centric_approach,
    title: "Client-Centric Approach",
    subtitle: "Tailored strategies that align with your success goals.",
    stats: [
      {
        icon: Smile,
        title: "Client Satisfaction Score",
        description:
          "96% average satisfaction rating reflects consistently positive project outcomes.",
      },
      {
        icon: Repeat,
        title: "Repeat Business Rate",
        description:
          "82% of clients return for new projects, showcasing long-term trust.",
      },
      {
        icon: Clock,
        title: "Response Time to Client Queries",
        description:
          "First-response time under 2 hours builds confidence and responsiveness",
      },
      {
        icon: Calendar,
        title: "On-Time Delivery Rate",
        description:
          "97.5% of projects are delivered on or before deadlines, reinforcing reliability.",
      },
      {
        icon: MessageSquare,
        title: "Client Input on Roadmap",
        description:
          "60% of product roadmap features shaped directly by client feedback.",
      },
    ],
  },
];

const CoreBeliefs = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-200 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-200 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-200 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-1/3 w-16 h-16 bg-orange-200 rounded-full blur-xl"></div>
      </div>
      <div className="relative mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 mb-6">
            <Sparkles className="w-8 h-8 text-purple-600 animate-pulse" />
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Our Core Beliefs
            </h2>
            <Sparkles className="w-8 h-8 text-blue-600 animate-pulse" />
          </div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At Hyperminds, we combine innovation, engineering excellence, and a
            client-first approach to deliver scalable, high-impact digital
            solutions. With decades of experience, we serve industries like
            healthcare, insurance, logistics, and data services.
          </p>
        </div>
        {/* Marquee Slider */}
        <div className="relative z-10 mx-auto">
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
            slidesPerView={1}
            spaceBetween={40}
            allowTouchMove={false}
            centeredSlides={false}
            className="w-full"
          >
            {beliefs.concat(beliefs).map((belief, idx) => (
              <SwiperSlide key={idx}>
                <div className="grid lg:grid-cols-2 gap-12 items-center p-8 shadow-2xl">
                  <div className="relative group">
                    <div className="relative rounded-3xl p-8 border border-white/20 overflow-hidden flex flex-col items-center justify-center">
                      <div className="relative w-[500px] rounded-2xl overflow-hidden flex items-center justify-center">
                        <Image
                          src={belief.image}
                          alt={belief.title}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {belief.stats.map((stat, i) => (
                      <div
                        key={i}
                        className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20"
                      >
                        <div className="flex-shrink-0 p-2 bg-gradient-to-br from-purple-400 to-blue-400 rounded-xl shadow-lg flex items-center justify-center">
                          {typeof stat.icon === "string" ||
                          "src" in stat.icon ? (
                            <Image
                              src={stat.icon as StaticImageData}
                              alt={stat.title}
                              width={40}
                              height={40}
                              className="object-contain"
                            />
                          ) : (
                            <stat.icon className="w-10 h-10 text-white" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-lg font-bold text-gray-900 mb-1">
                            {stat.title}
                          </h4>
                          <p className="text-gray-600 leading-relaxed text-base">
                            {stat.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex justify-center mt-12 space-x-3">
          <div className="group cursor-pointer">
            <div className="w-4 h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg group-hover:scale-110 transition-transform"></div>
          </div>
          <div className="group cursor-pointer">
            <div className="w-4 h-4 bg-gray-300 rounded-full shadow-lg group-hover:scale-110 group-hover:bg-gray-400 transition-all"></div>
          </div>
          <div className="group cursor-pointer">
            <div className="w-4 h-4 bg-gray-300 rounded-full shadow-lg group-hover:scale-110 group-hover:bg-gray-400 transition-all"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreBeliefs;
