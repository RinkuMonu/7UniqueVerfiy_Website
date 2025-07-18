import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaUserCheck, FaShoppingCart, FaChartLine } from "react-icons/fa";
import SEO from "../app/Helmet/helment";
import { useContext } from "react";
import { ContextData } from "../config/context";
import { SEOData } from "../type";

const CandyUseCases: React.FC = () => {
  const { seo } = useContext(ContextData) as { seo: SEOData };
  const useCases = [
    {
      icon: <FaShieldAlt className="text-2xl text-[#b7603d]" />,
      title: "Banking & Finance",
      description: "Simplify KYC, reduce fraud risk, and speed up regulatory checks."
    },
    {
      icon: <FaUserCheck className="text-2xl text-[#b7603d]" />,
      title: "HR & Staffing",
      description: "Digitize background verification and accelerate candidate onboarding."
    },
    {
      icon: <FaShoppingCart className="text-2xl text-[#b7603d]" />,
      title: "E-Commerce",
      description: "Protect accounts and verify customers during sign-up and payment flows."
    },
    {
      icon: <FaChartLine className="text-2xl text-[#b7603d]" />,
      title: "Fintech & Startups",
      description: "Scalable verification solutions for fast-growing digital businesses."
    }
  ];

  return (
    <>
      <SEO seo={seo} />
      <section className="bg-gradient-to-b from-[#f9f9f9] to-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="inline-block bg-[#f3e8e3] text-[#b7603d] px-3 py-1 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              INDUSTRY SOLUTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
              Transforming Verification <br className="hidden sm:block" />
              <span className="text-[#b7603d]">Across Industries</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              CANDY, a smart solution by 7Unique Verify, helps streamline identity verification for diverse business needs—whether it's user onboarding, workforce validation, or secure customer engagement.
            </p>
          </motion.div>

          {/* Content Section */}
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12">
            {/* Use Cases Grid - Now comes first on mobile */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {useCases.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-xs sm:shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                  >
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="bg-[#f9f0eb] p-2 sm:p-3 rounded-lg">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">{item.title}</h3>
                        <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Image Section - Now comes second on mobile */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 order-1 lg:order-2 relative"
            >
              <div className="relative">
                <img
                  src="/img/CANDY/CANDY2.png"
                  alt="CANDY Use Cases"
                  className="w-full h-auto rounded-lg sm:rounded-xl shadow-md sm:shadow-lg"
                />
                {/* Benefits Box - Adjusted for mobile */}
                <div className="absolute -bottom-4 sm:-bottom-6 -left-2 sm:-left-6 bg-[#b7603d] p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg">
                  <h4 className="text-white font-bold text-sm sm:text-base md:text-xl mb-1 sm:mb-2">Why CANDY?</h4>
                  <ul className="text-white space-y-1 text-xs sm:text-sm">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mr-1 sm:mr-2"></span>
                      Fastest verification in India
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mr-1 sm:mr-2"></span>
                      99.9% API uptime
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mr-1 sm:mr-2"></span>
                      Built-in compliance
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CandyUseCases;