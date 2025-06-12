"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import Gmail from "../../assets/Gmail.png";
import Whatsapp from "../../assets/Whatsapp.png";
import Linkdin from "../../assets/Linkdin.png";
import hexagon from "../../assets/hexgon.png";

interface FormData {
  fullName: string;
  phoneNo: string;
  emailId: string;
  vision: string;
}

export default function GetInTouch() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phoneNo: "",
    emailId: "",
    vision: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form handling logic here (API call, validation, etc.)
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #020202 0%, #2A0A4E 100%)",
      }}
    >
      {/* Hexagon background */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
        <Image
          src={hexagon}
          alt="Hexagon background"
          className="w-auto h-full opacity-100"
        />
      </div>

      <div className="relative z-10 flex min-h-screen">
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-center pl-16 pr-8">
          <div className="max-w-md">
            <h2 className="text-4xl font-light text-white mb-2">
              Get In Touch With
            </h2>
            <h1 className="text-4xl font-bold text-white mb-8">
              HYPERMINDS TECH
            </h1>
            <p className="text-lg text-white/80 italic mb-12 font-light">
              Let's Innovate together
            </p>

            <div className="mb-8">
              <p className="text-white mb-4 text-sm">Connect quickly with :</p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                  <Image src={Gmail} alt="Gmail" className="w-5 h-5" />
                </div>
                <div className="w-8 h-8 bg-green-500 rounded-sm flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors">
                  <Image src={Whatsapp} alt="WhatsApp" className="w-5 h-5" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                  <Image src={Linkdin} alt="LinkedIn" className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="flex items-center justify-center pr-16 pl-8">
          <div className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                You bring the vision. We{" "}
                <span className="font-bold">bring the Expertise</span>.
              </h3>
              <p className="text-sm text-gray-600">
                Tell us more about yourself and what you've got in mind.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="fullName"
                placeholder="Your full name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-0 py-3 border-0 border-b border-gray-200 bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
              />

              <input
                type="tel"
                name="phoneNo"
                placeholder="Phone No"
                value={formData.phoneNo}
                onChange={handleInputChange}
                className="w-full px-0 py-3 border-0 border-b border-gray-200 bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
              />

              <input
                type="email"
                name="emailId"
                placeholder="Email-ID"
                value={formData.emailId}
                onChange={handleInputChange}
                className="w-full px-0 py-3 border-0 border-b border-gray-200 bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
              />

              <textarea
                name="vision"
                placeholder="Tell us little about your vision ...."
                value={formData.vision}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-0 py-3 border-0 border-b border-gray-200 bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors resize-none"
              />

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, #8B5CF6 0%, #A855F7 50%, #C084FC 100%)",
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
