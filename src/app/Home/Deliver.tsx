import avg_schedule_variance from "../../assets/avg_schedule_variance.png";
import code_quality_score from "../../assets/code_quality_score.png";
import milestone_acheivment from "../../assets/milestone_acheivment.png";
import on_time_delivery from "../../assets/on_time_delivery.png";
import risk_migration from "../../assets/risk_migration.png";
import with_in_budget from "../../assets/with_in_budget.png";
import hexagon from "../../assets/hexgon.png";

import Image from "next/image";

const cardData = [
  {
    icon: on_time_delivery,
    value: "97%",
    label: "On-Time Delivery",
  },
  {
    icon: with_in_budget,
    value: "94%",
    label: "With In Budget",
  },
  {
    icon: code_quality_score,
    value: "9.2",
    label: "Code Quality Score",
  },
  {
    icon: avg_schedule_variance,
    value: "<3%",
    label: "Avg. Schedule\nVariance",
  },
  {
    icon: milestone_acheivment,
    value: "98.5",
    label: "Milestone\nAchievements",
  },
  {
    icon: risk_migration,
    value: "92%",
    label: "Risk Mitigation\nEfficiency",
  },
];

export default function Deliver() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden py-24">
      {/* Hexagon Background */}
      <div className="absolute -left-78 top-12 w-auto h-full opacity-80">
        <Image src={hexagon} alt="hexagon bg" />
      </div>
      {/* Headings */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-purple-600 mb-16">
        How We Deliver
      </h2>
      <h3 className="text-2xl md:text-3xl font-bold text-center text-purple-500 mb-2">
        Project Management
      </h3>
      <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
        Delivering Projects with Precision and Performance
      </p>
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 w-full max-w-7xl mx-auto z-100">
        {cardData.slice(0, 4).map((card, idx) => (
          <div
            key={idx}
            className="flex items-start bg-white rounded-xl shadow-md border border-purple-200 p-5 transition hover:shadow-lg gap-4 w-full h-auto"
          >
            <Image
              src={card.icon}
              alt={card.label}
              width={48}
              height={48}
              className="mt-1"
            />
            <div className="flex flex-col justify-center">
              <span className="text-2xl font-extrabold text-purple-600 mb-1">
                {card.value}
              </span>
              <span className="text-gray-700 whitespace-pre-line">
                {card.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 w-full max-w-2xl mx-auto">
        {cardData.slice(4).map((card, idx) => (
          <div
            key={idx}
            className="flex items-start bg-white rounded-xl shadow-md border border-purple-200 p-5 transition hover:shadow-lg gap-4 w-full h-auto"
          >
            <Image
              src={card.icon}
              alt={card.label}
              width={48}
              height={48}
              className="mt-1"
            />
            <div className="flex flex-col justify-center">
              <span className="text-2xl font-extrabold text-purple-600 mb-1">
                {card.value}
              </span>
              <span className="text-gray-700 whitespace-pre-line">
                {card.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center gap-4 mt-4">
        <span className="w-6 h-6 flex items-center justify-center border-2 border-purple-400 rounded-full text-purple-600 font-bold">
          1
        </span>
        <span className="w-4 h-4 flex items-center justify-center border-2 border-gray-300 rounded-full text-gray-400 font-bold">
          2
        </span>
        <span className="w-4 h-4 flex items-center justify-center border-2 border-gray-300 rounded-full text-gray-400 font-bold">
          3
        </span>
      </div>
    </section>
  );
}
