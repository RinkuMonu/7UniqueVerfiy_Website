import React from "react";
import { motion } from "framer-motion";

const VerificationCards: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 px-6 py-4">
            <h2 className="flex items-center gap-3 text-2xl font-semibold">
              <div className="rounded-full bg-[#b7603d]/10 p-2">
                <svg className="h-6 w-6 text-[#b7603d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.25-4.5a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 7.5v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H12"
                  />
                </svg>
              </div>
              Unlock Success with Employment Verification API

            </h2>
          </div>


          <motion.div
            className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left p-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Block 1 */}
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl border border-[#f0e4dd] overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="relative overflow-hidden rounded-lg h-48 mb-6">
                <img
                  src="/img/Employee Background Verification API/Employee2.png"
                  alt="Seamless Integration"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="px-2">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-[#b7603d] rounded-full mr-2"></span>
                  Quick, Hassle-Free Integration
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Integrate our BGV API into your HR system effortlessly. With minimal coding, you can start verifying employee backgrounds instantly—no delays, no disruption to your workflow.
                </p>
              </div>
            </motion.div>

            {/* Block 2 */}
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl border border-[#f0e4dd] overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="relative overflow-hidden rounded-lg h-48 mb-6">
                <img
                  src="/img/Employee Background Verification API/Employee3.png"
                  alt="Accurate and Trusted"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="px-2">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-[#b7603d] rounded-full mr-2"></span>
                  Reliable Data from Verified Sources
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  7uniqueverify delivers employment records from trusted, official databases. Get accurate, real-time insights to support faster, more informed hiring decisions across India.
                </p>
              </div>
            </motion.div>

            {/* Block 3 */}
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl border border-[#f0e4dd] overflow-hidden md:col-span-2 lg:col-span-1"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="relative overflow-hidden rounded-lg h-48 mb-6">
                <img
                  src="/img/Employee Background Verification API/Employee4.png"
                  alt="Fraud Prevention"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="px-2">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-[#b7603d] rounded-full mr-2"></span>
                  Protect Your Workforce from Fraud
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Spot fake resumes, altered job histories, and identity mismatches. Our advanced BGV checks help HR teams in Jaipur and beyond build a reliable, fraud-free talent pipeline.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VerificationCards;