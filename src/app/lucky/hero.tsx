import React from "react";
import heroimg from "../../../public/ddddddd.png";
import { motion } from "framer-motion";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

export const LuckyHeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-white to-gray-50 shadow-xl rounded-2xl overflow-hidden p-6 md:p-12 max-w-7xl mx-auto my-16 border border-gray-100"
    >
      {/* Left Side Image */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="md:w-1/2 w-full relative overflow-hidden rounded-xl shadow-md"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10 rounded-xl"></div>
        <img
          src={heroimg}
          alt="Dashboard"
          className="w-full h-auto object-cover rounded-xl transform hover:scale-105 transition duration-500"
        />
      </motion.div>

      {/* Right Side Text */}
      <div className="md:w-1/2 w-full md:pl-12 mt-8 md:mt-0">
        <span className="inline-block bg-[#b7603d]/10 text-[#b7603d] px-3 py-1 rounded-full text-sm font-medium mb-4">
          Premium Features
        </span>

        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          <span className="text-[#b7603d]">Powerful</span> Dashboard Insights
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Our dashboard provides real-time insights into your activities,
          performance stats, and business growth. Stay informed with beautifully
          visualized data and easy-to-use navigation.
        </p>

        <ul className="space-y-4 mb-10">
          {[
            "Real-time analytics and updates",
            "Seamless user experience",
            "Mobile & desktop responsive layout",
            "Customizable widgets and reports",
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <FiCheckCircle className="text-[#b7603d] mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link to={"/contact-us"}>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#b7603d] hover:bg-[#9c4f30] text-white font-medium py-3 px-8 rounded-lg transition-all flex items-center justify-center gap-2 shadow-md"
            >
              Get Started <FiArrowRight />
            </motion.button>
          </Link>
          <Link to={"/contact-us"}>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 px-8 rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              Know More
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
