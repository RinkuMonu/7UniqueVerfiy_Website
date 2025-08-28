import React, { useContext } from "react";
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
  FaFileAlt,
  FaCreditCard,
  FaHome,
  FaBalanceScale,
} from "react-icons/fa";
import SEO from "../Helmet/helment";
import { ContextData } from "../../config/context";
import { SEOData } from "../../type";
import KnowMore from "../../components/KnowMore";

export const CreditScoreAPI: React.FC = () => {
  const { seo } = useContext(ContextData) as { seo: SEOData };
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
    <>
      <SEO seo={seo} />
      <main className="w-full pb-24">
        {/* Hero Section */}
        <section
          className="w-full bg-cover bg-center min-h-screen flex items-center px-16"
          style={{ backgroundImage: "url('/img/bg (2).png')" }}
        >
          <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-2/3 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                7Unique Verify – Credit Score API
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
                Instant & Reliable Mobile Number Authentication
              </h2>
              <p className="text-lg mb-4 text-white">
                Secure your platforms with real-time mobile number verification
                through our robust API. Whether you're onboarding users or
                implementing 2FA, our system ensures legitimate mobile access
                with minimal friction.
              </p>
              <p className="mb-4 text-white">
                Gain access to accurate telecom data, carrier detection, OTP
                generation & verification, and fraud prevention tools—all in one
                unified mobile verification service.
              </p>
              <p className="mb-6 text-white">
                Ideal for financial apps, eCommerce platforms, KYC processes,
                and login verifications. Power your trust layer with{" "}
                <strong>7Unique Verify</strong>.
              </p>
              <Link
                to="/contact-us"
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
                    7UniqueVerify – Credit Score API Features
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
                            icon: <FaSms className="text-[#b7603d] text-2xl" />,
                            title: "Real-Time Credit Score Retrieval",
                            description:
                              "Instantly access up-to-date credit scores from major bureaus like CIBIL to assess customer eligibility and creditworthiness.",
                          },
                          {
                            icon: (
                              <FaDatabase className="text-[#b7603d] text-2xl" />
                            ),
                            title: "Comprehensive Credit Report Data",
                            description:
                              "Fetch detailed credit summaries including account history, defaults, loan types, and credit inquiries for in-depth evaluation.",
                          },
                          {
                            icon: (
                              <FaLock className="text-[#b7603d] text-2xl" />
                            ),
                            title: "Secure & Compliant Access",
                            description:
                              "All data retrieval follows RBI and bureau regulations with encrypted, token-based secure authentication and audit logging.",
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
                    How 7UniqueVerify Credit Score Check Works
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
                    title: "Enter PAN Number",
                    description:
                      "User inputs their valid PAN number. Our system validates the format and initiates the score check request.",
                    icon: <FaIdCard className="text-[#b7603d] text-4xl" />,
                  },
                  {
                    step: "2",
                    title: "Identity Verification",
                    description:
                      "We verify the PAN with the credit bureau's records to ensure the identity matches before fetching the score.",
                    icon: <FaUserCheck className="text-[#b7603d] text-4xl" />,
                  },
                  {
                    step: "3",
                    title: "Fetch Credit Score",
                    description:
                      "The API fetches the latest credit score along with credit-related details from trusted credit bureaus.",
                    icon: <FaChartLine className="text-[#b7603d] text-4xl" />,
                  },
                  {
                    step: "4",
                    title: "Deliver Insights",
                    description:
                      "Receive a detailed report including credit score, credit utilization, active accounts, and more.",
                    icon: <FaFileAlt className="text-[#b7603d] text-4xl" />,
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
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
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

        <section className="bg-[#f7f1ef] py-16 px-4 md:px-8 lg:px-20">
          <div className="w-full mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              Choose Your{" "}
              <span className="text-[#b7603d]">Verification Method</span>
            </h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef] rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   font-bold">🏅</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      E-credit Score
                    </h3>
                    <span className="text-sm text-[#b7603d]   font-medium">
                      Comprehensive Check
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Provides complete cibil Score, Credit score and credit report
                  check .
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">2-3 seconds</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Cost:</span>
                    <span className="font-medium">
                      ₹1-1.50 per verification
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">Detailed analysis</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef] rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   font-bold">🏅</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Cibil Score
                    </h3>
                    <span className="text-sm text-[#b7603d]   font-medium">
                      Comprehensive Check
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Provides complete cibil Score, Credit score and credit report
                  check .
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">2-3 seconds</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Cost:</span>
                    <span className="font-medium">
                      ₹1-1.50 per verification
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">Detailed analysis</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef] rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   font-bold">🏅</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Credit report check
                    </h3>
                    <span className="text-sm text-[#b7603d]   font-medium">
                      Comprehensive Check
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Provides complete cibil Score, Credit score and credit report
                  check .
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">2-3 seconds</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Cost:</span>
                    <span className="font-medium">
                      ₹1-1.50 per verification
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">Detailed analysis</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-lg font-semibold mb-4 text-gray-800">
                What You Get:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">
                    Basic Insights:
                  </h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ Credit score (Equifax/CIBIL)</li>
                    <li>✓ Credit score band (Excellent, Good, Fair, Poor)</li>
                    <li>✓ PAN-based verification</li>
                    <li>✓ Score update timestamp</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">
                    Detailed Report:
                  </h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ Credit account summaries (loans, credit cards)</li>
                    <li>✓ Payment history and delinquencies</li>
                    <li>✓ Enquiry history from lenders</li>
                    <li>✓ Credit utilization and limits</li>
                    <li>✓ Risk factors affecting score</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <KnowMore />

        {/* Benefits Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-6xl space-y-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 px-6 py-4">
                <h2 className="flex items-center gap-3 text-2xl font-semibold">
                  <div className="rounded-full bg-[#b7603d]/10 p-2">
                    <FaGlobe className="h-6 w-6 text-[#b7603d]" />
                  </div>
                  Why Choose 7UniqueVerify Credit Score API
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
                    src="../img/Mobile Verification API/Mobile2.png"
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
                    name: "Lending Platforms",
                    icon: (
                      <FaBalanceScale className="text-[#b7603d] text-4xl" />
                    ),
                    description:
                      "Evaluate borrower creditworthiness in real-time to make informed lending decisions and reduce loan default risks.",
                  },
                  {
                    name: "Fintech Applications",
                    icon: <FaChartLine className="text-[#b7603d] text-4xl" />,
                    description:
                      "Integrate credit score insights into personal finance tools, credit advisory services, and loan eligibility checks.",
                  },
                  {
                    name: "Credit Card Issuers",
                    icon: <FaCreditCard className="text-[#b7603d] text-4xl" />,
                    description:
                      "Automate user verification, assess credit limits, and offer pre-approved cards based on credit history.",
                  },
                  {
                    name: "Buy Now Pay Later (BNPL)",
                    icon: <FaClock className="text-[#b7603d] text-4xl" />,
                    description:
                      "Instantly determine installment eligibility and reduce fraud by checking user credit health before approval.",
                  },
                  {
                    name: "Real Estate & Rentals",
                    icon: <FaHome className="text-[#b7603d] text-4xl" />,
                    description:
                      "Evaluate tenant credibility and payment reliability for landlords and property managers using credit scores.",
                  },
                  {
                    name: "Insurance Providers",
                    icon: <FaShieldAlt className="text-[#b7603d] text-4xl" />,
                    description:
                      "Assess policy applicant risk levels and personalize premium pricing based on financial behavior.",
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
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
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
                      Get started with our mobile verification API in minutes.
                      Simple REST endpoints, comprehensive documentation, and
                      multiple SDK options.
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
                      to="https://7uniqueverify-njzw.readme.io/reference/post_api-verify-bankverify#/"
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
                            fetch('https://api.7uniqueverify.com/verify/e-credit-score',{" "}
                            {"{"}
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
                          <div className="ml-8">
                            firstName: 'john',
                            <br /> LastName: 'vich',
                            <br /> mobile_number: '+1234567890', <br />
                            pancardnumber: 'KVSPK7878Q', <br />
                            DOB: '26-8-2001',
                          </div>
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
    </>
  );
};
