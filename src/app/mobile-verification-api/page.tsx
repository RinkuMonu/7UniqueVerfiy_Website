import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaDatabase,
  FaLock,
  FaUserTie,
  FaMobileAlt,
  FaSms,
  FaUserCheck,
  FaGlobe,
  FaChartLine,
  FaClock,
  FaServer,
  FaIdCard,
  FaShoppingCart,
  FaUniversity,
  FaBriefcaseMedical,
  FaCar,
  FaUsers,
} from "react-icons/fa";

const MobileVerificationAPIPage: React.FC = () => {
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
    <main className="w-full pb-24">
      {/* Hero Section */}
      <section
        className="w-full bg-cover bg-center min-h-screen flex items-center px-16"
        style={{ backgroundImage: "url('/img/bg (2).png')" }}
      >
        <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-2/3 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              7Unique Verify – Mobile Verification API
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
              Instant & Reliable Mobile Number Authentication
            </h2>
            <p className="text-lg mb-4 text-white">
              Secure your platforms with real-time mobile number verification through our robust API. Whether you're onboarding users or implementing 2FA, our system ensures legitimate mobile access with minimal friction.
            </p>
            <p className="mb-4 text-white">
              Gain access to accurate telecom data, carrier detection, OTP generation & verification, and fraud prevention tools—all in one unified mobile verification service.
            </p>
            <p className="mb-6 text-white">
              Ideal for financial apps, eCommerce platforms, KYC processes, and login verifications. Power your trust layer with <strong>7Unique Verify</strong>.
            </p>
            <Link
              to="/mobile-verification-page-api"
              className="inline-block bg-[#b7603d] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#d19983] transition-colors"
            >
              Get Started
            </Link>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="../img/Mobile Verification API/Mobile1.png"
              alt="Mobile Verification API"
              className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-4 md:px-8 lg:px-20 overflow-hidden">
        <div className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-7xl space-y-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 px-6 py-4">
                <h2 className="flex items-center gap-3 text-2xl font-semibold">
                  <div className="rounded-full bg-[#b7603d]/10 p-2">
                    <FaMobileAlt className="h-6 w-6 text-[#b7603d]" />
                  </div>
                 7UniqueVerify – Mobile Verification API Features
                </h2>
              </div>
              <div className="p-8">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={container}
                  className="w-full flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16"
                >
                  <motion.div
                    variants={item}
                    className="w-full lg:w-1/2 relative"
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <motion.img
                        src="../img/Blog2.png"
                        alt="Mobile Verification Illustration"
                        className="w-full h-auto object-contain"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#b7603d]/10 to-transparent pointer-events-none" />
                    </div>
                    <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 rounded-full bg-[#b7603d]/10 blur-3xl" />
                  </motion.div>

                  <motion.div
                    variants={item}
                    className="w-full lg:w-1/2 space-y-10"
                  >
                    <motion.div variants={item}>
                      <motion.div
                        className="w-32 h-1.5 bg-gradient-to-r from-[#b7603d] to-[#d88a6e] mt-6 mb-8 rounded-full"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      />
                    </motion.div>

                    <motion.div className="space-y-8" variants={container}>
                      {[
                        {
                          icon: (
                            <FaSms className="text-[#b7603d] text-2xl" />
                          ),
                          title: "OTP Generation & Verification",
                          description:
                            "Generate and validate secure OTPs for mobile number verification. Ensure user authenticity with seamless integration and real-time response.",
                        },
                        {
                          icon: (
                            <FaDatabase className="text-[#b7603d] text-2xl" />
                          ),
                          title: "Carrier & Network Intelligence",
                          description:
                            "Instantly fetch telecom insights such as operator name, network circle, SIM type, and connectivity status to aid in verification and fraud analysis.",
                        },
                        {
                          icon: <FaLock className="text-[#b7603d] text-2xl" />,
                          title: "Fraud Prevention & Risk Assessment",
                          description:
                            "Identify suspicious activity and prevent fake registrations using advanced mobile validation and telecom-level risk scoring techniques.",
                        },
                      ].map((feature, index) => (
                        <motion.div
                          key={index}
                          variants={item}
                          whileHover={{
                            y: -5,
                            transition: { duration: 0.2 },
                          }}
                          className="group flex gap-5 p-5 rounded-xl bg-white hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                          <div className="flex-shrink-0 mt-1">
                            <div className="p-3 rounded-lg bg-[#b7603d]/10 group-hover:bg-[#b7603d]/20 transition-colors duration-300">
                              {feature.icon}
                            </div>
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                              {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl space-y-8">
             <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="bg-gradient-to-r from-orange-50 to-red-50 px-6 py-4">
              <h2 className="flex items-center gap-3 text-2xl font-semibold">

               How 7UniqueVerify Mobile Verification Works
              </h2>
            </div>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#b7603d] to-[#d88a6e] mx-auto rounded-full" />
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-5"
          >
            {[
              {
                step: "1",
                title: "Input Mobile Number",
                description:
                  "The user submits their mobile number. Our API checks format accuracy and identifies carrier metadata.",
                icon: <FaMobileAlt className="text-[#b7603d] text-4xl" />,
              },
              {
                step: "2",
                title: "OTP Triggered Instantly",
                description:
                  "A secure, time-sensitive OTP is generated and sent to the user's number via SMS or preferred route.",
                icon: <FaSms className="text-[#b7603d] text-4xl" />,
              },
              {
                step: "3",
                title: "User Submits OTP",
                description:
                  "The user inputs the received OTP into your application. It's validated instantly on our secure backend.",
                icon: <FaUserCheck className="text-[#b7603d] text-4xl" />,
              },
              {
                step: "4",
                title: "Verification Status",
                description:
                  "7Unique Verify confirms successful verification and shares detailed mobile and risk insights in the API response.",
                icon: <FaShieldAlt className="text-[#b7603d] text-4xl" />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#f7f1ef] to-[#f0e4df] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                <motion.div
                  className="flex justify-center mb-6 text-[#b7603d] text-4xl"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {item.icon}
                </motion.div>

                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#b7603d] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  {item.description}
                </p>

                <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-[#b7603d]/10 group-hover:bg-[#b7603d]/20 transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 px-6 py-4">
              <h2 className="flex items-center gap-3 text-2xl font-semibold">
                <div className="rounded-full bg-[#b7603d]/10 p-2">
                  <FaGlobe className="h-6 w-6 text-[#b7603d]" />
                </div>
              Why Choose 7UniqueVerify Mobile Verification
              </h2>
            </div>
            <div className="flex items-center gap-3 text-2xl font-semibold p-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2 space-y-8"
              >
                <div className="space-y-8">
                  {[
                    {
                      title: "99.9% OTP Delivery Success",
                      description:
                        "Partnered with top-tier global telecom carriers to ensure real-time and dependable OTP delivery worldwide.",
                    },
                    {
                      title: "Global Reach, Local Precision",
                      description:
                        "Seamless mobile number verification in over 200+ countries with intelligent routing for optimized delivery.",
                    },
                    {
                      title: "Enterprise-Grade Security",
                      description:
                        "Fully encrypted data pipelines, dynamic fraud protection, and compliance with global data regulations.",
                    },
                    {
                      title: "Real-Time Analytics Dashboard",
                      description:
                        "Access detailed delivery insights, verification logs, and analytics to optimize user flows and KPIs.",
                    },
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 bg-[#b7603d] rounded-full flex items-center justify-center text-white">
                          ✓
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
              >
                <img
                  src="../img/Mobile Verification API/Mobile12png"
                  alt="Mobile Verification Benefits"
                  className="w-full h-auto rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
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
                    <FaServer className="h-6 w-6 text-[#b7603d]" />
                  </div>
               Use Cases Across Industries
                </h2>
              </div>
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#b7603d] to-[#d88a6e] mx-auto rounded-full" />
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5"
            >
              {[
                {
                  name: "E-commerce & Retail",
                  icon: <FaShoppingCart className="text-[#b7603d] text-4xl" />,
                  description:
                    "Secure customer registration, order confirmations, and account recovery for online shopping platforms.",
                },
                {
                  name: "Financial Services",
                  icon: <FaUniversity className="text-[#b7603d] text-4xl" />,
                  description:
                    "Two-factor authentication for banking apps, payment verification, and secure transaction confirmations.",
                },
                {
                  name: "Healthcare",
                  icon: (
                    <FaBriefcaseMedical className="text-[#b7603d] text-4xl" />
                  ),
                  description:
                    "Patient registration, appointment confirmations, and secure access to medical records and telemedicine platforms.",
                },
                {
                  name: "Food Delivery",
                  icon: <FaCar className="text-[#b7603d] text-4xl" />,
                  description:
                    "Order confirmations, delivery updates, and customer verification for food delivery and restaurant apps.",
                },
                {
                  name: "Education",
                  icon: <FaUsers className="text-[#b7603d] text-4xl" />,
                  description:
                    "Student registration, exam notifications, and secure access to online learning platforms and educational resources.",
                },
                {
                  name: "Travel & Hospitality",
                  icon: <FaGlobe className="text-[#b7603d] text-4xl" />,
                  description:
                    "Booking confirmations, check-in notifications, and customer verification for hotels and travel booking platforms.",
                },
              ].map((service, index) => (
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
                  <div className="absolute inset-0 bg-gradient-to-br from-[#f7f1ef] to-[#f0e4df] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

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

                  <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-[#b7603d]/10 group-hover:bg-[#b7603d]/20 transition-all duration-500" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 px-6 py-4">
              <h2 className="flex items-center gap-3 text-2xl font-semibold">
                <div className="rounded-full bg-[#b7603d]/10 p-2">
                  <FaServer className="h-6 w-6 text-[#b7603d]" />
                </div>
                Easy API Integration
              </h2>
            </div>
            <div className="p-8">
              <div className="grid gap-10 grid-cols-1 md:grid-cols-2 text-left">
                <div className="bg-white p-6 rounded-lg shadow-xl transition duration-300 hover:shadow-2xl border border-gray-100 hover:border-[#b7603d]/30">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <FaServer className="h-5 w-5 text-[#b7603d]" />
                    Simple Integration
                  </h3>
                  <p className="text-gray-600">
                   Get started with our mobile verification API in minutes. Simple REST endpoints, comprehensive documentation, and multiple SDK options.
                  </p>
                  <div className="mt-4 space-y-2">
                    {[
                      "RESTful API with secure JSON responses",
                      "Supports custom webhooks & multiple output formats",
                      "Complete SDKs and API documentation",
                      "Dedicated sandbox environment",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-4 h-4 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xs">
                            ✓
                          </div>
                        </div>
                        <p className="text-gray-600 ml-2 text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/mobile-verification-page-api"
                    className="inline-block bg-[#b7603d] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#d19983] transition-colors mt-5"
                  >
                    View API Documentation
                  </Link>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-xl transition duration-300 hover:shadow-2xl border border-gray-100 hover:border-[#b7603d]/30">
                  <div className="relative h-full">
                    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl h-full">
                      <div className="px-6 py-4 bg-gray-800 flex items-center">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="ml-4 text-gray-400 text-sm">
                          api-integration.js
                        </div>
                      </div>
                      <div className="p-6 font-mono text-sm text-green-400 overflow-x-auto">
                        <div className="text-gray-500">
                          // Sample API Request
                        </div>
                        <div className="mb-2">
                          fetch('https://api.7uniqueverify.com/mobile/send-otp', {"{"}
                        </div>
                        <div className="ml-4">method: 'POST',</div>
                        <div className="ml-4">headers: {"{"}</div>
                        <div className="ml-8">
                          'Authorization': 'Bearer YOUR_API_KEY',
                        </div>
                        <div className="ml-8">
                          'Content-Type': 'application/json'
                        </div>
                        <div className="ml-4">{"}"},</div>
                        <div className="ml-4">body: JSON.stringify({"{"}</div>
                        <div className="ml-8">mobile_number: '+1234567890',</div>
                        <div className="ml-8">country_code: 'US'</div>
                        <div className="ml-4">{"}"})</div>
                        <div className="mt-4 text-gray-500">
                          // Sample Verify Request
                        </div>
                        <div className="mb-2">
                          fetch('https://api.7uniqueverify.com/mobile/verify-otp', {"{"}
                        </div>
                        <div className="ml-4">method: 'POST',</div>
                        <div className="ml-4">headers: {"{"}</div>
                        <div className="ml-8">
                          'Authorization': 'Bearer YOUR_API_KEY',
                        </div>
                        <div className="ml-8">
                          'Content-Type': 'application/json'
                        </div>
                        <div className="ml-4">{"}"},</div>
                        <div className="ml-4">body: JSON.stringify({"{"}</div>
                        <div className="ml-8">mobile_number: '+1234567890',</div>
                        <div className="ml-8">otp: '123456'</div>
                        <div className="ml-4">{"}"})</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MobileVerificationAPIPage;