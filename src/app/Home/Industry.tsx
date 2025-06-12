"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

import data_engineering from "../../assets/data_engineering.jpg";
import cloud_devops from "../../assets/cloud_devops.jpg";
import e_commerce from "../../assets/e_commerce.png";
import insurance from "../../assets/insurance.png";
import health_care from "../../assets/health_care.jpg";
import logistics from "../../assets/logistics.jpg";
import enterprise_software from "../../assets/enterprise_software.png";

type IndustryItem = {
  id: string;
  title: string;
  image: StaticImageData | string;
  position: {
    top: string;
    left: string;
  };
};

const industryImages = {
  dataEngineering: data_engineering,
  cloudDevops: cloud_devops,
  eCommerce: e_commerce,
  insurance: insurance,
  healthCare: health_care,
  logistics: logistics,
  enterpriseSoftware: enterprise_software,
};

const industryData: IndustryItem[] = [
  {
    id: "dataEngineering",
    title: "Data Engineering",
    image: industryImages.dataEngineering,
    position: { top: "20%", left: "12%" },
  },
  {
    id: "cloudDevops",
    title: "Cloud & DevOps",
    image: industryImages.cloudDevops,
    position: { top: "20%", left: "28%" },
  },
  {
    id: "eCommerce",
    title: "E-commerce",
    image: industryImages.eCommerce,
    position: { top: "20%", left: "44%" },
  },
  {
    id: "insurance",
    title: "Insurance",
    image: industryImages.insurance,
    position: { top: "20%", left: "60%" },
  },
  {
    id: "healthCare",
    title: "Health Care",
    image: industryImages.healthCare,
    position: { top: "55%", left: "20%" },
  },
  {
    id: "logistics",
    title: "Logistics",
    image: industryImages.logistics,
    position: { top: "55%", left: "36%" },
  },
  {
    id: "enterpriseSoftware",
    title: "Enterprise Software",
    image: industryImages.enterpriseSoftware,
    position: { top: "55%", left: "52%" },
  },
 
];

type HexagonShapeProps = {
  title: string;
  image: StaticImageData | string;
  isHovered?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

const HexagonShape: React.FC<HexagonShapeProps> = ({
  title,
  image,
  isHovered = false,
  onMouseEnter,
  onMouseLeave,
}) => (
  <div
    className={`relative w-40 h-36 cursor-pointer transition-all duration-300 transform ${
      isHovered ? "scale-110 z-20" : "hover:scale-105 z-10"
    }`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {/* Burning border animation */}
    <div
      className={`absolute inset-0 pointer-events-none transition-all duration-500 ${
        isHovered ? "burning-border" : "border-2 border-[#902FA1]"
      }`}
      style={{
        clipPath:
          "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
        zIndex: 2,
      }}
    ></div>
    {/* Image background, only visible on hover */}
    <div
      className={`absolute w-full h-full transition-opacity duration-500 ${
        isHovered ? "opacity-100" : "opacity-0"
      }`}
      style={{
        clipPath:
          "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
        zIndex: 1,
      }}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 400px"
        draggable={false}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent"></div>
    </div>
    {/* Hexagon content */}
    <div
      className={`w-full h-full flex items-center justify-center text-center transition-all duration-500 ${
        isHovered ? "bg-transparent" : "bg-[#250035]"
      }`}
      style={{
        clipPath:
          "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
        zIndex: 3,
        position: "relative",
      }}
    >
      <span
        className={`text-base font-bold px-2 transition-all duration-300 ${
          isHovered ? "text-white text-shadow-lg" : "text-purple-100"
        }`}
        style={{
          textShadow: isHovered
            ? "0 4px 8px rgba(0,0,0,0.5)"
            : undefined,
        }}
      >
        {title}
      </span>
    </div>
  </div>
);

const Industry: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden py-24"
      style={{
        background:
          "linear-gradient(135deg, #7211B9 0%, #250035 50%, #902FA1 100%)",
      }}
    >
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(114, 17, 185, 0.3) 0%, transparent 50%),\n              radial-gradient(circle at 75% 75%, rgba(144, 47, 161, 0.3) 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      <div className="text-center mb-16 z-10">
        <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-300 mb-6">
          Our Industry Expertise
        </h2>
        <p className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
          We have excelled our experience in a wide range of industries to bring
          valuable insights and provide our clients with truly beneficial
          solutions.
        </p>
      </div>

      <div className="relative w-full max-w-6xl h-96 space-x-28">
        {industryData.map((item) => (
          <div
            key={item.id}
            className="absolute transition-all duration-300"
            style={{
              top: item.position.top,
              left: item.position.left,
              transform: "translate(-50%, -50%)",
            }}
          >
            <HexagonShape
              title={item.title}
              image={item.image}
              isHovered={hoveredId === item.id}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            />
          </div>
        ))}

        {/* <div
          className="absolute transition-all duration-300"
          style={{
            top: "55%",
            left: "68%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <HexagonShape
            title="And still counting..."
            image=""
            isHovered={false}
          />
        </div> */}
      </div>

      <style jsx>{`
        @keyframes burning {
          0% {
            box-shadow: 0 0 8px 2px #ffb347, 0 0 16px 4px #ffcc33, 0 0 0 0 #fff0;
            border-color: #ffb347;
          }
          40% {
            box-shadow: 0 0 16px 4px #ffcc33, 0 0 32px 8px #ffb347, 0 0 0 0 #fff0;
            border-color: #ffcc33;
          }
          60% {
            box-shadow: 0 0 24px 8px #ffb347, 0 0 48px 12px #ffcc33, 0 0 0 0 #fff0;
            border-color: #ffb347;
          }
          100% {
            box-shadow: 0 0 8px 2px #ffb347, 0 0 16px 4px #ffcc33, 0 0 0 0 #fff0;
            border-color: #ffb347;
          }
        }
        .burning-border {
          border: 2px solid #ffb347 !important;
          animation: burning 1.2s infinite linear;
        }
        .text-shadow-lg {
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </section>
  );
};

export default Industry;
