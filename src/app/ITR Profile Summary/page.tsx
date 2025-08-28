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
  FaHome,
  FaHandshake,
  FaBalanceScale,
} from "react-icons/fa";
import SEO from "../Helmet/helment";
import { ContextData } from "../../config/context";
import { SEOData } from "../../type";
import KnowMore from "../../components/KnowMore";

export const ITRProfileSummary: React.FC = () => {
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
                Instant ITR Profile Summary API for Smart Financial Decisions

              </h1>

              <p className="text-lg mb-4 text-white">
                Access verified income tax data including filed returns, income breakdowns, and tax status in real-time.

              </p>
              <p className="mb-4 text-white">
                Use 7UniqueVerify’s secure API to power credit risk assessments, KYC, and onboarding — trusted by NBFCs, lenders, and fintechs across India.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to={"/contact-us"}
                  className="inline-block bg-[#b7603d] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#d19983] transition-colors text-center"
                >
                  Get Started
                </Link>
                <Link
                  to="https://7uniqueverify-njzw.readme.io/reference/post_api-verify-bankverify#/"
                  className="inline-block bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded hover:bg-white hover:text-[#b7603d] transition-colors text-center"
                >
                  View API Docs
                </Link>
              </div>
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
                      <FaFileAlt className="h-6 w-6 text-[#b7603d]" />
                    </div>
                    7UniqueVerify – ITR Profile Summary API Features
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
                          alt="ITR Profile Illustration"
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
                              <FaChartLine className="text-[#b7603d] text-2xl" />
                            ),
                            title: "Verified ITR Summary Data",
                            description:
                              "Access PAN-linked Income Tax Return summaries with verified income details, gross total income, and filing status for the last assessment years.",
                          },
                          {
                            icon: (
                              <FaUserCheck className="text-[#b7603d] text-2xl" />
                            ),
                            title: "Profile Enrichment",
                            description:
                              "Enhance user KYC with government-verified income information, enabling better decision-making for credit, loans, and risk evaluation.",
                          },
                          {
                            icon: (
                              <FaLock className="text-[#b7603d] text-2xl" />
                            ),
                            title: "Secure & Authorized Access",
                            description:
                              "Completely consent-based retrieval, using secure tokenized authentication that complies with IT department and RBI guidelines.",
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
                  <h2 className="flex items-center gap-3 text-2xl font-semibold ">
                    How 7UniqueVerify ITR Verification API Works
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
                      "User provides their PAN number to initiate the Income Tax Return (ITR) verification process.",
                    icon: <FaIdCard className="text-[#b7603d] text-4xl" />,
                  },
                  {
                    step: "2",
                    title: "Verify Consent & Identity",
                    description:
                      "System verifies user's consent and validates identity against PAN and government tax records.",
                    icon: <FaUserCheck className="text-[#b7603d] text-4xl" />,
                  },
                  {
                    step: "3",
                    title: "Fetch ITR Details",
                    description:
                      "We retrieve the latest filed ITR details including income summary, tax paid, and financial disclosures from authorized sources.",
                    icon: <FaChartLine className="text-[#b7603d] text-4xl" />,
                  },
                  {
                    step: "4",
                    title: "Access ITR Report",
                    description:
                      "A structured ITR report is generated for verification and assessment, which can be used for loans, KYB, and compliance.",
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
                    <span className="text-[#b7603d]   font-bold">⚖️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      ITR Create
                    </h3>
                    <span className="text-sm text-[#b7603d]   font-medium">
                      Comprehensive Check
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Provides complete ITR Compliance Report.
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
                    <span className="text-[#b7603d]   font-bold">⚖️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      ITR Compliance Check
                    </h3>
                    <span className="text-sm text-[#b7603d]   font-medium">
                      Comprehensive Check
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Provides complete ITR Compliance Report.
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
                    <span className="text-[#b7603d]   font-bold">⚖️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      ITR Forget Password & Submit OTP
                    </h3>
                    <span className="text-sm text-[#b7603d]   font-medium">
                      Comprehensive Check
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Provides complete ITR Compliance Report.
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
                    <span className="text-[#b7603d]   font-bold">⚖️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      ITR Details Get - Single & Bulk
                    </h3>
                    <span className="text-sm text-[#b7603d]   font-medium">
                      Comprehensive Check
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Get ITR Details with complete ITR Report.
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
                    <span className="text-[#b7603d]   font-bold">⚖️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      ITR Profile Get
                    </h3>
                    <span className="text-sm text-[#b7603d]   font-medium">
                      Comprehensive Check
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Get ITR Profile with complete Details.
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
                    <span className="text-[#b7603d]   font-bold">⚖️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      26AS Detail Fetch - Consented
                    </h3>
                    <span className="text-sm text-[#b7603d]   font-medium">
                      Comprehensive Check
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Fetch detailed 26AS tax credit statement using user consent,
                  including TDS
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
                    <li>✓ PAN-based ITR profile access</li>
                    <li>✓ Return filing status (Filed/Not Filed)</li>
                    <li>✓ Assessment year coverage</li>
                    <li>✓ Filing date and mode (Online/Offline)</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">
                    Detailed Report:
                  </h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ Declared income and sources</li>
                    <li>✓ Tax paid and refund status</li>
                    <li>✓ Employer and salary information</li>
                    <li>✓ Investment and deduction claims</li>
                    <li>✓ Annual financial summary for credit profiling</li>
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
                  Why Choose 7UniqueVerify ITR Profile API
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
                    RTR Profile Summary Use Cases
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
                    name: "ITR Profile",
                    icon: <FaUniversity className="text-[#1f78b4] text-4xl" />,
                    description:
                      "Retrieves official ITR profile information including PAN linkage, ITR filing status, last filed assessment year, and registered email/mobile. Useful for financial risk assessment, loan underwriting, and income verification.",
                  },
                  {
                    name: "Loan Underwriting",
                    icon: (
                      <FaBalanceScale className="text-[#1f78b4] text-4xl" />
                    ),
                    description:
                      "Used by lenders to evaluate borrower’s declared income and financial stability. Helps reduce credit risk by validating self-reported financials against filed ITR data.",
                  },
                  {
                    name: "Credit Risk Analysis",
                    icon: <FaChartLine className="text-[#1f78b4] text-4xl" />,
                    description:
                      "Helps financial institutions assess a customer’s repayment ability and creditworthiness by analyzing annual income trends and filing consistency.",
                  },
                  {
                    name: "Visa & Immigration",
                    icon: <FaIdCard className="text-[#1f78b4] text-4xl" />,
                    description:
                      "ITR documents serve as proof of stable income and financial standing when applying for visas, especially for countries that require income validation.",
                  },
                  {
                    name: "Insurance Profiling",
                    icon: (
                      <FaBriefcaseMedical className="text-[#1f78b4] text-4xl" />
                    ),
                    description:
                      "Used by insurers to determine applicant risk category and suitable premium based on declared income and ITR consistency.",
                  },
                  {
                    name: "Wealth & Tax Planning",
                    icon: <FaUsers className="text-[#1f78b4] text-4xl" />,
                    description:
                      "Financial advisors use ITR data to recommend investment strategies, optimize tax planning, and assess client income for personalized financial guidance.",
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
                            fetch('https://api.7uniqueverify.com/verification/itr_create_client',{" "}
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
                            username: 'john', <br />
                            Password: 'abc121@',
                          </div>
                          <div className="ml-4">{"}"})</div>
                          <div className="mt-4 text-gray-500">
                            // Sample Verify Request
                          </div>
                          <div className="mb-2">
                            fetch('https://api.7uniqueverify.com/verification/itr_list',{" "}
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
                            client_id: 'itr_dufWlgrDwZhffGbtBReI',
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
