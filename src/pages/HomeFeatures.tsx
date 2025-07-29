import type React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const HomeFeatures: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-[#faf8f8] to-[#fcf8f7] py-20 section our-process overflow-hidden">
      <div className="container mx-auto px-5 max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.span
            className="inline-block px-4 py-1 mb-4 text-xs font-semibold tracking-wider text-[#b7603d] uppercase bg-[#b7603d]/10 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            ABOUT US
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            At <span className="text-[#b7603d]">7uniqueverify</span> we focus on
            doing{" "}
            <span className="relative inline-block">
              <span className="relative z-10">one thing very well</span>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-3 bg-[#b7603d]/20 -rotate-1"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </span>
          </h2>
          <motion.p
            className="text-xl text-gray-600 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Providing fast, safe, and scalable API-based checking for truth
            solutions.{" "}
            <strong className="text-gray-800">
              PAN, Aadhaar, bank, GST, EPFO, and UPI from matches and documents
              to face OCR, our APIs power very smooth onboarding, compliance,
            </strong>{" "}
            <strong className="text-gray-800">
              and identification verification
            </strong>{" "}
            for{" "}
            <strong className="text-gray-800">businesses across India.</strong>
          </motion.p>
        </motion.div>

        {/* Features Section */}
        <motion.div
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row">
            {/* Left Column - Sticky Header */}
            <div className="lg:w-1/3 p-10 bg-gradient-to-br from-[#ac7c6a] to-[#be7256] text-white lg:sticky lg:top-0  lg:min-h-[600px] flex flex-col justify-center relative overflow-hidden">
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={staggerContainer}
                viewport={{ once: true }}
              >
                <motion.span
                  variants={fadeIn}
                  className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-[#b7603d] uppercase bg-white/80 rounded-full"
                >
                  OUR FEATURES
                </motion.span>
                <motion.h2
                  variants={fadeIn}
                  className="text-4xl md:text-5xl font-bold leading-tight mb-6"
                >
                  Make Verification Easy for Every Business
                </motion.h2>
                <motion.p
                  variants={fadeIn}
                  className="text-lg  opacity-90 mb-8"
                >
                  See how our ready-to-use API solutions help different
                  industries work faster, safer, and smarter.
                </motion.p>
                <motion.button
                  variants={fadeIn}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-2 bg-white text-[#b7603d] font-semibold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  <Link
                    to={"/about-us"}
                    className="flex items-center gap-2 px-8 py-3"
                  >
                    Explore More{" "}
                    <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.button>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-white/5"></div>
              <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-white/10"></div>
            </div>

            {/* Right Column - Scrollable Cards */}
            <div className="lg:w-2/3 p-10">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                initial="hidden"
                whileInView="visible"
                variants={staggerContainer}
                viewport={{ once: true, margin: "-100px" }}
              >
                {[
                  {
                    icon: "bi bi-cash-coin",
                    title: "Lending",
                    desc: " Speed up loan approvals with fast and secure APIs for PAN, Aadhaar, bank account, and income verification",
                  },
                  {
                    icon: "bi bi-bank",
                    title: "Banking",
                    desc: " Stay compliant and reduce fraud using KYC APIs, bank account checks, face match, and document verification.",
                  },
                  {
                    icon: "bi bi-emoji-laughing",
                    title: "Staffing & Recruitment",
                    desc: " Make hiring smooth and reliable with employee background verification (BGV), UAN, EPFO, and ID checks.",
                  },
                  {
                    icon: "bi bi-bounding-box",
                    title: "Logistics",
                    desc: " Verify delivery agents or field staff using real-time ID and location APIs to keep your operations safe and trusted.",
                  },
                  {
                    icon: "bi bi-cart-check",
                    title: "FMCG / FMCD",
                    desc: " Onboard contractors, sales teams, and field workers are quickly using mobile, PAN, Aadhaar, and face match APIs.",
                  },
                  {
                    icon: "bi bi-shield-check",
                    title: "Security",
                    desc: "Use smart verification tools like face match, liveness detection, and IP check to protect your platform from fraud.",
                  },
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeIn}
                    className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#b7603d]/20 relative"
                    whileHover={{ y: -5 }}
                  >
                    <div className="p-8">
                      <div
                        className={`text-4xl mb-6  text-[#b7603d] group-hover:text-[#b7603d] transition-colors duration-300`}
                      >
                        <i
                          className={`${feature.icon} bg-[#f1dad0] p-2 rounded-full`}
                        ></i>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#b7603d] transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {feature.desc}
                      </p>
                      <ul className="space-y-2"></ul>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#b7603d] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeFeatures;
