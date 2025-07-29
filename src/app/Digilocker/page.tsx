import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaDatabase,
  FaUserTie,
  FaUniversity,
  FaBriefcaseMedical,
  FaClock,
  FaServer,
  FaSearch,
  FaFileAlt,
  FaMoneyBillWave,
  FaCheckCircle,
  FaBuilding,
  FaShoppingCart,
  FaGraduationCap,
  FaFile,
  FaFolderOpen,
} from "react-icons/fa";
import {
  FaKey,
  FaFilePdf,
  FaFileCode,
  FaIdCard,
  FaBolt,
  FaMobileAlt,
} from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { SEOData } from "../../type";
import { ContextData } from "../../config/context";
import SEO from "../Helmet/helment";
import KnowMore from "../../components/KnowMore";

export const DigilockerApi = () => {
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
      <section
        className="w-full bg-cover bg-center min-h-screen flex items-center px-16"
        style={{ backgroundImage: "url('/img/bg (2).png')" }}
      >
        <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-2/3 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              7Unique DigiLocker API – Seamless Document Access & Verification
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
              Instant Access to Government-Issued Documents
            </h2>
            <p className="text-lg mb-4 text-white">
              Integrate DigiLocker with your application to securely fetch,
              verify, and store user documents issued by Indian government
              agencies — including Aadhaar, PAN, Driving License, and more.
            </p>
            <p className="mb-4 text-white">
              7Unique DigiLocker API offers a reliable, easy-to-integrate
              solution for accessing official documents directly from the
              DigiLocker system. Reduce paperwork, automate KYC, and stay
              compliant with digital India initiatives.
            </p>
            <p className="mb-6 text-white">
              Perfect for banks, NBFCs, fintech, ed-tech, and government-related
              apps needing verified digital documents with user consent.
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
              src="../img/Bank1.png"
              alt="7Unique Verify – Bank Account Verification"
              className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
            />
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-4 md:px-8 lg:px-20 overflow-hidden">
        <div className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-7xl space-y-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 px-6 py-4">
                <h2 className="flex items-center gap-3 text-2xl font-semibold">
                  <div className="rounded-full bg-[#b7603d]/10 p-2">
                    <FaCheckCircle className="h-6 w-6 text-[#b7603d]" />
                  </div>
                  Features of Digilocker
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
                        src="../img/Bank2.png"
                        alt="Digilocker Illustration"
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
                            <FaFileAlt className="text-[#b7603d] text-2xl" />
                          ),
                          title: "Document Fetching",
                          description:
                            "Securely fetch user documents such as Aadhaar, PAN, Driving License, and Marksheet directly from Digilocker.",
                        },
                        {
                          icon: (
                            <FaShieldAlt className="text-[#b7603d] text-2xl" />
                          ),
                          title: "Consent-based Access",
                          description:
                            "Ensure user privacy by allowing document sharing only after explicit consent using Digilocker authentication.",
                        },
                        {
                          icon: (
                            <FaCloudDownloadAlt className="text-[#b7603d] text-2xl" />
                          ),
                          title: "PDF Download & Storage",
                          description:
                            "Easily download verified documents in PDF format and integrate them with your application or onboarding system.",
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

      <section className="bg-[#f7f1ef] py-16 px-4 md:px-8 lg:px-20">
        <div className="w-full mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Choose the Right{" "}
            <span className="text-[#b7603d]">Verification Method</span>
          </h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            {/* Initiate Session */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#f7f1ef] rounded-full flex items-center justify-center mr-4">
                  <FaKey className="text-[#b7603d] text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Initiate Session
                  </h3>
                  <span className="text-sm text-[#b7603d] font-medium">
                    Digilocker OTP Auth
                  </span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Authenticate users using Aadhaar-based OTP to initiate a secure
                Digilocker session.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Response Time:</span>
                  <span className="font-medium text-gray-600">2-3 seconds</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Cost:</span>
                  <span className="font-medium text-gray-600">
                    ₹0.75 - 1.25
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Best For:</span>
                  <span className="font-medium text-gray-600">
                    Secure Aadhaar Auth
                  </span>
                </div>
              </div>
            </div>

            {/* Access Token */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#f7f1ef] rounded-full flex items-center justify-center mr-4">
                  <FaBolt className="text-[#b7603d] text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Access Token Generation
                  </h3>
                  <span className="text-sm text-[#b7603d] font-medium ">
                    Post-Authentication
                  </span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Retrieve a secure token from Digilocker to access and download
                user documents.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Response Time:</span>
                  <span className="font-medium text-gray-600">1-2 seconds</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Cost:</span>
                  <span className="font-medium text-gray-600">
                    ₹0.50 - 0.80
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Best For:</span>
                  <span className="font-medium text-gray-600">
                    Document Access Flow
                  </span>
                </div>
              </div>
            </div>

            {/* Download PDF */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <FaFilePdf className="text-orange-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Download Document (PDF)
                  </h3>
                  <span className="text-sm text-orange-600 font-medium ">
                    Digilocker Store
                  </span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Fetch digitally signed PDF documents directly from the
                Digilocker user vault.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Response Time:</span>
                  <span className="font-medium text-gray-600">2-4 seconds</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Cost:</span>
                  <span className="font-medium text-gray-600">
                    ₹1 - 2 per document
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Best For:</span>
                  <span className="font-medium text-gray-600">
                    eKYC & onboarding
                  </span>
                </div>
              </div>
            </div>

            {/* Download XML */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <FaFileCode className="text-orange-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Download Document (XML)
                  </h3>
                  <span className="text-sm text-orange-600 font-medium ">
                    Machine-Readable Format
                  </span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Download structured XML files for seamless integration and
                parsing into systems.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Response Time:</span>
                  <span className="font-medium text-gray-600">1-3 seconds</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Cost:</span>
                  <span className="font-medium text-gray-600">
                    ₹0.75 - 1.50
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Best For:</span>
                  <span className="font-medium text-gray-600">
                    Automated KYC pipelines
                  </span>
                </div>
              </div>
            </div>

            {/* Aadhaar eKYC (XML) */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                  <FaIdCard className="text-[#1f6f63] text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Get e-Aadhaar Document (XML)
                  </h3>
                  <span className="text-sm text-teal-600 font-medium ">
                    UIDAI-based Verification
                  </span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Instantly access Aadhaar KYC details in secure XML format using
                Digilocker APIs.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Response Time:</span>
                  <span className="font-medium text-gray-600">2-4 seconds</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Cost:</span>
                  <span className="font-medium text-gray-600">
                    ₹1.20 - 2.00
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Best For:</span>
                  <span className="font-medium text-gray-600">
                    Digital eKYC checks
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                  <FaFile className="text-[#1f6f63] text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Get Issued files
                  </h3>
                  <span className="text-sm text-teal-600 font-medium">
                    UIDAI-based Verification
                  </span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Instantly access Aadhaar KYC details in secure XML format using
                Digilocker APIs.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Response Time:</span>
                  <span className="font-medium text-gray-600">2-4 seconds</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Cost:</span>
                  <span className="font-medium text-gray-600">
                    ₹1.20 - 2.00
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Best For:</span>
                  <span className="font-medium text-gray-600">
                    Digital eKYC checks
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <KnowMore />

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
              <div className="bg-gradient-to-r from-orange-50 to-red-50 px-4 py-4">
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
                  How DigiLocker Verification Works
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
                  title: "User Consent",
                  description:
                    "User initiates the verification flow by authenticating via DigiLocker with Aadhaar-based OTP.",
                  icon: <FaKey className="text-[#b7603d] text-4xl" />,
                },
                {
                  step: "2",
                  title: "Session Initiation",
                  description:
                    "DigiLocker generates a session and access token upon successful OTP validation.",
                  icon: <FaBolt className="text-[#b7603d] text-4xl" />,
                },
                {
                  step: "3",
                  title: "Document Retrieval",
                  description:
                    "Requested documents like Aadhaar, PAN, DL, Marksheet are fetched securely in PDF or XML format.",
                  icon: <FaFilePdf className="text-[#b7603d] text-4xl" />,
                },
                {
                  step: "4",
                  title: "Verification Complete",
                  description:
                    "Fetched documents are digitally signed and ready for eKYC, onboarding, or storage in your system.",
                  icon: <FaCheckCircle className="text-[#b7603d] text-4xl" />,
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

                  <div className="absolute top-4 left-4 bg-[#b7603d] text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center">
                    {item.step}
                  </div>

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

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 px-6 py-4">
              <h2 className="flex items-center gap-3 text-2xl font-semibold">
                <div className="rounded-full bg-purple-600/10 p-2">
                  <FaFolderOpen className="h-6 w-6 text-[#b7603d]" />
                </div>
                Why Use Our DigiLocker Integration
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12 p-8">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2 space-y-8"
              >
                <div className="space-y-6">
                  {[
                    {
                      title: "Instant Document Fetching",
                      description:
                        "Seamlessly access verified documents like Aadhaar, PAN, Driving License, and more from DigiLocker in real-time.",
                    },
                    {
                      title: "Faster Customer Onboarding",
                      description:
                        "Reduce manual uploads and paperwork by allowing users to link their DigiLocker instantly.",
                    },
                    {
                      title: "Government-Compliant",
                      description:
                        "Built in line with MeitY guidelines, ensuring legally valid KYC and document verification.",
                    },
                    {
                      title: "Secure & Consent-Based",
                      description:
                        "Users have full control — data is shared only with their permission via DigiLocker auth flow.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 bg-[#b7603d] rounded-full flex items-center justify-center text-white">
                          ✓
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
              >
                <img
                  src="../img/images/5.png"
                  alt="DigiLocker Illustration"
                  className="w-full h-auto rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications Section */}
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
                  DigiLocker Use Cases
                </h2>
              </div>
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#b7603d] to-[#d88a6e] mx-auto rounded-full" />
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5"
            >
              {[
                {
                  name: "Banking & KYC",
                  icon: <FaUniversity className="text-[#b7603d] text-4xl" />,
                  description:
                    "Fetch Aadhaar and PAN documents for seamless KYC during account openings and financial onboarding.",
                },
                {
                  name: "Government Schemes",
                  icon: (
                    <FaBriefcaseMedical className="text-[#b7603d] text-4xl" />
                  ),
                  description:
                    "Use DigiLocker for identity and eligibility verification in public subsidy and welfare schemes.",
                },
                {
                  name: "Education Sector",
                  icon: <FaGraduationCap className="text-[#b7603d] text-4xl" />,
                  description:
                    "Access digital marksheets, degrees, and certificates for student onboarding, verification, and scholarship processing.",
                },
                {
                  name: "Healthcare",
                  icon: <FaBuilding className="text-[#b7603d] text-4xl" />,
                  description:
                    "Retrieve health ID or insurance-related documents securely for policy issuance and claims processing.",
                },
                {
                  name: "Employment Verification",
                  icon: <FaMoneyBillWave className="text-[#b7603d] text-4xl" />,
                  description:
                    "Digitally verify academic and identity credentials for background checks during hiring.",
                },
                {
                  name: "Transport & Licensing",
                  icon: <FaShoppingCart className="text-[#b7603d] text-4xl" />,
                  description:
                    "Fetch digital driving license, RC and vehicle documents for onboarding users in transport apps and logistics.",
                },
              ].map((usecase, index) => (
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
                    {usecase.icon}
                  </motion.div>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#b7603d] transition-colors duration-300">
                    {usecase.name}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    {usecase.description}
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
                Simple API Integration
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
                    Get started with our Digilocker API in minutes. Our
                    comprehensive documentation and SDKs make integration
                    seamless across all platforms.
                  </p>
                  <div className="mt-4 space-y-2">
                    {[
                      "RESTful API with JSON responses",
                      "SDKs for popular programming languages",
                      "Comprehensive documentation and examples",
                      "Sandbox environment for testing",
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
                          POST /api/v1/digilocker/initiate_session {"{"}
                        </div>
                        <div className="ml-4">"refid": "1234567890",</div>
                        <div className="ml-4">
                          "redirect_url": "exmaple.com",
                        </div>

                        <div className="mb-2">{"}"}</div>
                        {/* <div className="mt-4 text-gray-500">// Response</div>
                          <div>{"{"}</div>
                          <div className="ml-4">"status": "verified",</div>
                          <div className="ml-4">"account_exists": true,</div>
                          <div className="ml-4">"name_match": "exact"</div>
                          <div>{"}"}</div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
