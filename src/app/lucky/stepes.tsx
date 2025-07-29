import React from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaDatabase,
  FaIdCard,
  FaMobileAlt,
  FaUserShield,
  FaChartLine,
  FaClipboardCheck,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export const LuckySteps = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.5,
      },
    },
  };

  const steps = [
    {
      step: "1",
      title: "Complete Your KYC",
      description:
        "Verify your identity with our secure KYC process to get started with your dashboard access.",
      icon: <FaIdCard className="text-[#b7603d] text-4xl" />,
      color: "from-[#b7603d]/10 to-[#d88a6e]/10",
    },
    {
      step: "2",
      title: "Receive API Credentials",
      description:
        "Get your personalized login details via email and SMS for secure access.",
      icon: <FaMobileAlt className="text-[#b7603d] text-4xl" />,
      color: "from-[#b7603d]/15 to-[#d88a6e]/15",
    },
    {
      step: "3",
      title: "Connect Your Accounts",
      description:
        "Securely link your financial accounts for comprehensive data analysis.",
      icon: <FaDatabase className="text-[#b7603d] text-4xl" />,
      color: "from-[#b7603d]/20 to-[#d88a6e]/20",
    },
    {
      step: "4",
      title: "Access Your Dashboard",
      description:
        "Start exploring your personalized financial insights and analytics.",
      icon: <FaChartLine className="text-[#b7603d] text-4xl" />,
      color: "from-[#b7603d]/25 to-[#d88a6e]/25",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#b7603d]/10 to-[#d88a6e]/10 px-6 py-3 rounded-full mb-6">
            <div className="rounded-full bg-white p-2 shadow-sm">
              <svg
                className="h-5 w-5 text-[#b7603d]"
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
            <span className="text-sm font-medium text-[#b7603d]">
              GET STARTED
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How To Access Your <span className="text-[#b7603d]">Dashboard</span>
          </h2>

          <div className="w-24 h-1.5 bg-gradient-to-r from-[#b7603d] to-[#d88a6e] mx-auto rounded-full mb-8" />

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to unlock powerful financial insights and
            take control of your transactions.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(183, 96, 61, 0.1)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`group relative bg-gradient-to-br ${step.color} rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-[#b7603d]/10`}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#b7603d] to-[#d88a6e] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute top-4 right-4 bg-white text-[#b7603d] text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-sm">
                {step.step}
              </div>

              <motion.div
                className="flex justify-center mb-6 text-[#b7603d] text-4xl"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {step.icon}
              </motion.div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#b7603d] transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                {step.description}
              </p>

              <div className="mt-6">
                <div className="w-full h-0.5 bg-[#b7603d]/20 group-hover:bg-[#b7603d]/40 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-16">
          <Link to={"/contact-us"}>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-[#b7603d] to-[#d88a6e] text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
            >
              <FaUserShield className="text-lg" />
              Start Your KYC Now
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};
