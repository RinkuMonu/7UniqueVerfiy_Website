import React from "react";
import { motion } from "framer-motion";
import {
  FaUserSecret,
  FaMobileAlt,
  FaBalanceScale,
  FaTicketAlt,
} from "react-icons/fa";

const FraudIndicatorsAPIs: React.FC = () => {
  const apiServices = [
    {
      name: "Crime Check – Individual (Real-Time)",
      icon: <FaUserSecret />,
      description:
        "Instantly verify if a person has any criminal history by scanning official databases—ideal for onboarding, finance, or hiring processes.",
    },
    {
      name: "Mobile Number Crime Check",
      icon: <FaMobileAlt />,
      description:
        "Identify fraud risks linked to a mobile number, including SIM misuse or suspicious registrations—perfect for fintech and telecom checks.",
    },
    {
      name: "Court Case Lookup",
      icon: <FaBalanceScale />,
      description:
        "Check whether an individual or business is involved in pending or past civil/criminal litigation before extending credit or service.",
    },
    {
      name: "Challan & Violation Scan",
      icon: <FaTicketAlt />,
      description:
        "Detect unpaid challans or traffic violations tied to users or vehicles—used by insurers, NBFCs, and background check platforms.",
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
   <div className="bg-white rounded-lg shadow-lg overflow-hidden">
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
                <svg className="h-6 w-6 text-[#b7603d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              APIs Under Fraud Indicators
            </h2>
          </div>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#b7603d] to-[#d88a6e] mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {apiServices.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
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
                {service.icon}
              </motion.div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#b7603d] transition-colors duration-300">
                {service.name}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                {service.description}
              </p>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-[#b7603d]/10 group-hover:bg-[#b7603d]/20 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
   </div>
    </section>
  );
};

export default FraudIndicatorsAPIs;