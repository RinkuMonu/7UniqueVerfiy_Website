import React from "react";
import { motion } from "framer-motion";
import {
  FaMoneyCheckAlt,
  FaMobileAlt,
  FaGlobeAmericas,
  FaCheckDouble,
} from "react-icons/fa";

const UtilitiesAPISection: React.FC = () => {
  const utilitiesAPIs = [
    {
      name: "Currency Exchange API",
      icon: <FaMoneyCheckAlt />,
      description:
        "Fetch real-time currency conversion rates to enable global pricing, financial reporting, and forex transactions with precision.",
    },
    {
      name: "IMEI Validator API",
      icon: <FaMobileAlt />,
      description:
        "Verify the authenticity of mobile devices by checking their IMEI numbers — essential for telecom, security, and inventory systems.",
    },
    {
      name: "IEC Verification API",
      icon: <FaGlobeAmericas />,
      description:
        "Instantly validate Importer Exporter Codes (IEC) to ensure regulatory compliance and trust in cross-border business operations.",
    },
    {
      name: "LEI Verification API",
      icon: <FaCheckDouble />,
      description:
        "Authenticate Legal Entity Identifiers (LEIs) to ensure business legitimacy and enhance due diligence across financial networks.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-6xl space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="bg-gradient-to-r from-orange-50 to-red-50 px-6 py-4">
            <h2 className="flex items-center gap-3 text-2xl font-semibold">
              <div className="rounded-full bg-[#b7603d]/10 p-2">
                  <svg
                    className="h-6 w-6 text-[#b7603d]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              Empower Your Business with Next-Gen Utilities APIs
            </h2>
          </div>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#b7603d] to-[#d88a6e] mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {utilitiesAPIs.map((api, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -10,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              transition={{ duration: 0.3 }}
              className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f7f1ef] to-[#f0e4df] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

              {/* Icon with animation */}
              <motion.div
                className="flex justify-center mb-6 text-[#b7603d] text-4xl"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {api.icon}
              </motion.div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#b7603d] transition-colors duration-300">
                {api.name}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                {api.description}
              </p>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-[#b7603d]/10 group-hover:bg-[#b7603d]/20 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default UtilitiesAPISection;