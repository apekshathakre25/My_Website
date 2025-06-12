"use client";

import Image, { StaticImageData } from "next/image";
import mytra from "../../assets/Mytra.jpg";
import JandJ from "../../assets/JandJ.png";
import SWR from "../../assets/SWR.png";
import Ornate from "../../assets/Ornate.png";

type Client = {
  name: string;
  logo: StaticImageData | null;
};

const clients: Client[] = [
  {
    name: "MYTRA",
    logo: mytra,
  },
  {
    name: "J&J",
    logo: JandJ,
  },
  {
    name: "SWR",
    logo: SWR,
  },
  {
    name: "SM",
    logo: null,
  },
  {
    name: "ORNATE HR",
    logo: Ornate,
  },
];

export default function OurClient() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-purple-700 mb-6">
            Our Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We collaborate with visionary businesses to build impactful,
            scalable, and intelligent solutions. From healthcare to e-commerce,
            our clients trust us for our deep tech expertise, agile execution,
            and innovation-first mindset.
          </p>
        </div>

        {/* Client Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {clients.map((client) => (
            <div key={client.name} className="group perspective-1000 h-48">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front Face */}
                <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-2xl border-2 border-purple-200 shadow-lg flex items-center justify-center p-6 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-purple-700 text-center">
                    {client.name}
                  </h3>
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-white rounded-2xl border-2 border-purple-200 shadow-lg flex items-center justify-center p-6 hover:shadow-xl transition-shadow duration-300">
                  {client.logo ? (
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  ) : (
                    <div className="text-4xl font-bold text-purple-700">
                      {client.name}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center">
          <p className="text-gray-500 text-lg">
            Stay tuned — more joining in!...
          </p>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        .group:hover .group-hover\\:rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
