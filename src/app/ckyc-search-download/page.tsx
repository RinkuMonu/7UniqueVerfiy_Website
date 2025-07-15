import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaDatabase,
  FaLock,
  FaUserTie,
  FaHome,
  FaUniversity,
  FaBriefcaseMedical,
  FaCar,
  FaUsers,
  FaHandshake,
  FaChartLine,
  FaClock,
  FaBalanceScale,
  FaServer,
  FaIdCard,
  FaFingerprint,
  FaMapMarkerAlt,
  FaPassport,
  FaSearch,
  FaFileDownload,
  FaFileAlt
} from "react-icons/fa";

const CKYCSearchPage: React.FC = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">CKYC Search & Download API</h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
              Central KYC Registry with 7Unique Verify
            </h2>
            <p className="text-lg mb-4 text-white">
              Access and retrieve CKYC records in real-time using 7Unique Verify's secure API. Streamline KYC operations by integrating verified data from India's centralized KYC registry.
            </p>
            <p className="mb-4 text-white">
              Built for speed and compliance, our CKYC API empowers banks, NBFCs, and fintechs to verify, download, and store customer KYC records efficiently—minimizing duplication and fraud.
            </p>
            <p className="mb-6 text-white">
              Join 7Unique Verify in modernizing onboarding and compliance with scalable, RBI-compliant solutions.
            </p>
            <Link
              to="/ckyc-search-download-page-api"
              className="inline-block bg-[#b7603d] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#d19983] transition-colors"
            >
              Get Started
            </Link>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="../img/CKYC1.png"
              alt="CKYC Search & Download with 7Unique Verify"
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
                    <FaDatabase className="h-6 w-6 text-[#b7603d]" />
                  </div>
                  7UniqueVerify CKYC API Features
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
                        src="../img/images/14.png"
                        alt="CKYC Search Illustration"
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
                            <FaSearch className="text-[#b7603d] text-2xl" />
                          ),
                          title: "Smart CKYC Search",
                          description:
                            "Query CKYC data using Aadhaar, PAN, or mobile number. Find verified records instantly from the central registry for seamless customer onboarding.",
                        },
                        {
                          icon: (
                            <FaFileDownload className="text-[#b7603d] text-2xl" />
                          ),
                          title: "Instant Record Download",
                          description:
                            "Download complete CKYC documents and metadata, including customer details, photograph, and KYC verification status—ready for backend use.",
                        },
                        {
                          icon: <FaLock className="text-[#b7603d] text-2xl" />,
                          title: "RBI Compliant Architecture",
                          description:
                            "Fully aligned with RBI and CKYC norms. Enjoy secure, encrypted access with full audit logging to ensure transparency and compliance.",
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
      <section className="container mx-auto px-4 py-12 ">
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
                How CKYC Search Works
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
                title: "Search Parameters",
                description:
                  "Enter customer identifiers like PAN, Aadhaar, or mobile number for CKYC search.",
                icon: <FaSearch className="text-[#b7603d] text-4xl" />,
              },
              {
                step: "2",
                title: "Registry Search",
                description:
                  "Our system searches the Central KYC Registry for matching customer records.",
                icon: <FaDatabase className="text-[#b7603d] text-4xl" />,
              },
              {
                step: "3",
                title: "Record Retrieval",
                description:
                  "Retrieve complete CKYC records with all customer information and documents.",
                icon: <FaFileAlt className="text-[#b7603d] text-4xl" />,
              },
              {
                step: "4",
                title: "Secure Download",
                description:
                  "Download records securely with full compliance and audit trail maintenance.",
                icon: <FaLock className="text-[#b7603d] text-4xl" />,
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
                      <FaShieldAlt className="h-6 w-6 text-[#b7603d]" />
                    </div>
                    Benefits of CKYC Integration
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
                      title: "Reduced KYC Time",
                      description:
                        "Eliminate duplicate KYC processes and reduce onboarding time by 80%.",
                    },
                    {
                      title: "Cost Efficiency",
                      description: "Reduce operational costs with automated CKYC record retrieval.",
                    },
                    {
                      title: "RBI Compliance",
                      description: "Ensure full compliance with RBI CKYC guidelines and regulations.",
                    },
                    {
                      title: "Enhanced Customer Experience",
                      description: "Provide seamless onboarding with pre-verified customer information.",
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
                  src="../img/CKYC5.png"
                  alt="CKYC Benefits"
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
                    <FaUsers className="h-6 w-6 text-[#b7603d]" />
                  </div>
                  CKYC Use Cases
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
                  name: "Banking Sector",
                  icon: <FaUniversity className="text-[#b7603d] text-4xl" />,
                  description:
                    "Account opening, loan processing, and customer onboarding for banks and NBFCs.",
                },
                {
                  name: "Insurance Companies",
                  icon: <FaBriefcaseMedical className="text-[#b7603d] text-4xl" />,
                  description: "Policy issuance and claims processing with pre-verified customer data.",
                },
                {
                  name: "Mutual Funds",
                  icon: <FaChartLine className="text-[#b7603d] text-4xl" />,
                  description: "Investor onboarding and portfolio management with CKYC records.",
                },
                {
                  name: "Fintech Platforms",
                  icon: <FaHandshake className="text-[#b7603d] text-4xl" />,
                  description: "Digital lending and payment services with streamlined KYC processes.",
                },
                {
                  name: "Wealth Management",
                  icon: <FaBalanceScale className="text-[#b7603d] text-4xl" />,
                  description: "High-net-worth client onboarding with comprehensive KYC data.",
                },
                {
                  name: "Credit Bureaus",
                  icon: <FaFileAlt className="text-[#b7603d] text-4xl" />,
                  description: "Credit assessment and risk evaluation with verified customer information.",
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

      {/* API Integration Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 px-6 py-4">
              <h2 className="flex items-center gap-3 text-2xl font-semibold">
                <div className="rounded-full bg-[#b7603d]/10 p-2">
                  <FaServer className="h-6 w-6 text-[#b7603d]" />
                </div>
                Simple CKYC API Integration
              </h2>
            </div>
            <div className="p-8">
              <div className="grid gap-10 grid-cols-1 md:grid-cols-2 text-left">
                <div className="bg-white p-6 rounded-lg shadow-xl transition duration-300 hover:shadow-2xl border border-gray-100 hover:border-[#b7603d]/30">
                  {/* <div className="mb-2 text-sm font-semibold text-[#b7603d] flex items-center gap-2">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                      />
                    </svg>
                    01
                  </div> */}
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <FaServer className="h-5 w-5 text-[#b7603d]" />
                    Simple Integration
                  </h3>
                  <p className="text-gray-600">
                    Seamlessly integrate the 7Unique Verify CKYC API into
                    your platform with clear documentation and developer-first
                    tools. Designed for scalability and ease of use.
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
                          fetch('https://api.7uniqueverify.com/ckyc/search',{" "}
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
                        <div className="ml-8">search_type: 'pan',</div>
                        <div className="ml-8">search_value: 'ABCDE1234F'</div>
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

export default CKYCSearchPage;