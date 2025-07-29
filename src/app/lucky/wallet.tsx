import React from "react";
import heroimg from "../../../public/img/aiDashboard/7V4-01 (1).png";

import { motion } from "framer-motion";
import {
  FiDollarSign,
  FiPieChart,
  FiDownload,
  FiCreditCard,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";

export const LuckyWallet = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col-reverse md:flex-row items-center justify-between  rounded-2xl overflow-hidden p-6 md:p-12 max-w-7xl mx-auto my-16 border border-gray-50 "
    >
      {/* Text Content - Left Side */}
      <div className="md:w-1/2 w-full md:pr-12 mt-8 md:mt-0">
        <div className="flex items-center gap-2 mb-4">
          <FiCreditCard className="text-[#b7603d] text-xl" />
          <span className="text-sm font-medium text-gray-500">
            WALLET MANAGEMENT
          </span>
        </div>

        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          <span className="text-[#b7603d]">View All</span> API's Credential
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Track every payment, transfer, and expense across all your wallets in
          one place. Our comprehensive dashboard gives you complete financial
          visibility with intuitive categorization and powerful analytics.
        </p>

        <ul className="space-y-4 mb-10">
          {[
            "Real-time balance updates",
            "Transaction categorization",
            "Multi-wallet support",
            "Exportable transaction history",
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <FiCheckCircle className="text-[#b7603d] mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>

        {/* <div className="flex flex-col sm:flex-row gap-4">
          <Link to={"/contact-us"}>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#b7603d] hover:bg-[#9c4f30] text-white font-medium py-3 px-8 rounded-lg transition-all flex items-center justify-center gap-2 shadow-md"
            >
              Get Started <FiArrowRight />
            </motion.button>
          </Link>
        </div> */}
      </div>

      {/* Image - Right Side */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="md:w-1/2 w-full relative overflow-hidden rounded-xl mb-8 md:mb-0"
        
      >
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10 rounded-xl"></div> */}
        <img
          src={heroimg}
          // src="https://www.geckoboard.com/uploads/customer-service-dashboard-example-geckoboard.png"
          alt="Wallet Dashboard"
          className="w-full h-auto object-cover rounded-xl transform hover:scale-105 transition duration-500"
        />
        <div className="absolute bottom-4 left-4 z-20">
          <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium  flex items-center gap-1">
            <FiDollarSign className="text-[#b7603d]" />
            Live Update
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};
