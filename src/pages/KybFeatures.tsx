import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaCheckCircle, FaLaptop } from "react-icons/fa";

const KybFeatures: React.FC = () => {
  const features = [
    {
      title: "Safeguard Your Business from Risk",
      description:
        "Verify the legal standing and authenticity of any business before onboarding. 7uniqueverify’s KYB API flags fraudulent registrations early—protecting you from financial loss and regulatory violations.",
      icon: <FaShieldAlt className="text-white text-2xl" />,
      bgColor: "bg-[#b7603d]",
    },
    {
      title: "Compliance & Transparency, Built-In",
      description:
        "Seamlessly validate GST, MCA, and Udyam data, ownership details, and legal records. Ensure every partner or vendor meets both Indian and global compliance standards—with audit-ready results.",
      icon: <FaCheckCircle className="text-white text-2xl" />,
      bgColor: "bg-[#b3755c]",
    },
    {
      title: "Digital-First KYB for Instant Onboarding",
      description:
        "Our API-first platform integrates easily with your workflows. Automate document checks, run real-time risk scoring, and onboard credible businesses faster—without manual delays or friction.",
      icon: <FaLaptop className="text-white text-2xl" />,
      bgColor: "bg-[#d69074]",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-white py-20 px-4 md:px-8 lg:px-20">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="max-w-7xl mx-auto">
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
                Choose Excellence: Business Identity API Suite
              </h2>
            </div>
            <p className="text-xl text-gray-600 mt-5">
              Trusted by growing startups and global enterprises to streamline KYB compliance, prevent risk, and accelerate verified onboarding in India and beyond.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className={`relative overflow-hidden rounded-xl shadow-lg group ${feature.bgColor} text-white`}
              >
                <div className="p-8 h-full flex flex-col">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-white/90 mb-8">{feature.description}</p>
                  <div className="mt-auto">
                    {/* <button className="px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300">
                      Learn More
                    </button> */}
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-500"></div>
                <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-500"></div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-gray-100 rounded-full">
              <span className="text-gray-700 font-medium">
                Trusted by 1,000+ businesses worldwide
              </span>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="w-10 h-10 rounded-full bg-[#b7603d] border-2 border-white"
                  ></div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KybFeatures;
