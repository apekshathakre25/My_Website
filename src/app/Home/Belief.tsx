import React from "react";
import Image from "next/image";
import {
  Lightbulb,
  TrendingUp,
  Award,
  Users,
  BarChart3,
  Sparkles,
} from "lucide-react";
import belief from "../../assets/Belief1.png";

const CoreBeliefs = () => {
  const stats = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Ideas Generated",
      description:
        "Over 200 new ideas submitted annually to spark continuous creativity.",
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-50",
      iconBg: "bg-gradient-to-br from-orange-400 to-orange-600",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Project Funding Rate",
      description:
        "95% of validated ideas receive funding to drive scalable growth.",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50",
      iconBg: "bg-gradient-to-br from-green-400 to-green-600",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Patent Generation",
      description:
        "10 patents filed or awarded yearly, showcasing tech leadership.",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50",
      iconBg: "bg-gradient-to-br from-blue-400 to-blue-600",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration Index",
      description:
        "80% growth in cross-functional and external innovation partnerships.",
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50",
      iconBg: "bg-gradient-to-br from-purple-400 to-purple-600",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Innovation Adoption Rate",
      description:
        "60% of projects integrated into long-term roadmaps and scaled.",
      color: "from-indigo-400 to-indigo-600",
      bgColor: "bg-indigo-50",
      iconBg: "bg-gradient-to-br from-indigo-400 to-indigo-600",
    },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-200 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-200 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-200 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-1/3 w-16 h-16 bg-orange-200 rounded-full blur-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
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

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Belief Image */}
          <div className="relative group">
            <div className="relative backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 overflow-hidden">
              {/* Image Container */}
              <div className="relative w-full h-auto sm:h-96 lg:h-[28rem] rounded-2xl overflow-hidden">
                <Image
                  src={belief}
                  alt="Hyperminds Core Beliefs"
                  fill
                  className="object-contain object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Statistics */}
          <div className="space-y-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-white/30 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative flex items-center space-x-4 p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  <div
                    className={`flex-shrink-0 p-3 ${stat.iconBg} rounded-xl shadow-lg`}
                  >
                    <div className="text-white">{stat.icon}</div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {stat.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Pagination Dots */}
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
