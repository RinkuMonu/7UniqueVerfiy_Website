import React, { useContext } from "react";
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
  FaFileAlt,
  FaMobileAlt,
  FaCheckCircle,
  FaBuilding,
  FaHospital,
  FaSchool,
} from "react-icons/fa";
import { SEOData } from "../../type";
import { ContextData } from "../../config/context";
import SEO from "../Helmet/helment";
import KnowMore from "../../components/KnowMore";

const AadhaarVerificationPage: React.FC = () => {
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
        <section
          className="w-full bg-cover bg-center min-h-screen flex items-center px-16"
          style={{ backgroundImage: "url('/img/bg (2).png')" }}
        >
          <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-2/3 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Instant Aadhaar Verification Made Easy
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
                Real-time Aadhaar Validation by 7UniqueVerify
              </h2>
              <p className="text-lg mb-4 text-white">
                Verify Aadhaar numbers in real-time using 7UniqueVerify’s
                secure, UIDAI-compliant API. Enable fast eKYC with OTP-based
                authentication, masked Aadhaar access, and demographic detail
                checks — all without manual effort.
              </p>
              <p className="mb-4 text-white">
                Perfect for banks, fintech apps, telecom providers, and
                platforms that need reliable identity verification at scale.
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
                src="../img/Aadhaar1.png"
                alt="Aadhaar Verification"
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
                      <FaCheckCircle className="h-6 w-6 text-[#b7603d]" />
                    </div>
                    Features of Aadhaar Verification API
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
                          src="https://img.freepik.com/free-vector/two-factor-authentication-concept-illustration_114360-5488.jpg"
                          alt="Aadhaar Verification Illustration"
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
                              <FaMobileAlt className="text-[#b7603d] text-2xl" />
                            ),
                            title: "OTP-based Verification",
                            description:
                              " Verify Aadhaar numbers instantly using secure OTP authentication. Backed by UIDAI infrastructure, this method ensures fast and trusted identity validation in real time.",
                          },
                          {
                            icon: (
                              <FaUserTie className="text-[#b7603d] text-2xl" />
                            ),
                            title: "Demographic Verification",
                            description:
                              " Authenticate personal Aadhaar data—name, date of birth, gender, and address—against official UIDAI records to ensure accurate and fraud-free verification.",
                          },
                          {
                            icon: (
                              <FaLock className="text-[#b7603d] text-2xl" />
                            ),
                            title: "Privacy & Compliance",
                            description:
                              " The API strictly follows UIDAI and data protection regulations. All Aadhaar data is encrypted, securely processed, and audit-ready for regulatory compliance.",
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
              Choose Your{" "}
              <span className="text-[#b7603d]">Verification Method</span>
            </h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef] rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   font-bold">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Aadhaar Verification - Consented
                    </h3>
                    <span className="text-sm text-[#b7603d]   font-medium">
                      UIDAI Authorized
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Secure OTP-based verification with complete demographic
                  information and UIDAI compliance.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">3-5 seconds</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Cost:</span>
                    <span className="font-medium">₹3.5 per verification</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">
                      High-security applications
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef]  rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   font-bold">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Aadhaar Verification without OTP
                    </h3>
                    <span className="text-sm text-[#b7603d]   font-medium">
                      Demographic Verification
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Quick demographic verification without OTP for faster
                  processing and better user experience.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">2-5 seconds</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Cost:</span>
                    <span className="font-medium">₹4.5 per verification</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">
                      Quick verification needs
                    </span>
                  </div>
                </div>
              </div>
              {/* <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef]  rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   font-bold">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Aadhaar Masking
                    </h3>
                    <span className="text-sm text-[#b7603d]   font-medium">
                      Demographic Verification
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Aadhaar Masking refers to the process of hiding the first 8
                  digits of an Aadhaar number and showing only the last 4 digits
                  for privacy and security purposes.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">2-5 seconds</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Cost:</span>
                    <span className="font-medium">₹1-2 per verification</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">
                      Quick verification needs
                    </span>
                  </div>
                </div>
              </div> */}
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef]  rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   font-bold">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Aadhaar QR Search
                    </h3>
                    <span className="text-sm text-[#b7603d]   font-medium">
                      Demographic Verification
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Quick demographic verification without OTP for faster
                  processing and better user experience.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">2-5 seconds</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Cost:</span>
                    <span className="font-medium">₹4 per verification</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">
                      Quick verification needs
                    </span>
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
                    With OTP Verification:
                  </h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ Complete demographic data</li>
                    <li>✓ Address information</li>
                    <li>✓ Date of birth</li>
                    <li>✓ Gender information</li>
                    <li>✓ UIDAI authentication</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">
                    Without OTP Verification:
                  </h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ Name verification</li>
                    <li>✓ Aadhaar number validation</li>
                    <li>✓ Basic demographic match</li>
                    <li>✓ Faster processing</li>
                    <li>✓ Cost-effective solution</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <KnowMore />

        {/* How It Works Section */}
        <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
          <div className="w-full mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              How <span className="text-[#b7603d]">Aadhaar Verification</span>{" "}
              Works
            </h2>
            <div className="relative">
              <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-200"></div>
              <div
                className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-[#b7603d]
 to-transparent"
              ></div>

              <div className="grid gap-8 grid-cols-1 md:grid-cols-5">
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    1
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Enter Aadhaar Number
                  </h3>
                  <p className="text-gray-600 text-sm">
                    User submits the 12-digit Aadhaar number via our secure
                    Aadhaar Verification API for identity validation.
                  </p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    2
                  </div>
                  <h3 className="text-lg font-semibold mb-2">OTP Generation</h3>
                  <p className="text-gray-600 text-sm">
                    An OTP is instantly sent to the Aadhaar-linked mobile number
                    to initiate UIDAI-based authentication.
                  </p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    3
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    UIDAI Verification
                  </h3>
                  <p className="text-gray-600 text-sm">
                    The submitted details are securely verified in real-time
                    against the UIDAI database, ensuring full privacy and
                    regulatory compliance.
                  </p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    4
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Data Validation
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Demographic information validated and processed
                  </p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    5
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Instant Results
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Get immediate results with verified demographic data like
                    name, DOB, gender, and Aadhaar authentication status.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="mt-12 bg-[#f7f1ef]








 p-6 rounded-lg"
            >
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-[#d38769] rounded-full"></span>
                  <span>UIDAI Authorized</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  <span>Privacy Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                  <span>Encrypted Data</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                  <span>No Data Storage</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance & Security Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-6xl space-y-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 px-6 py-4">
                <h2 className="flex items-center gap-3 text-2xl font-semibold">
                  <div className="rounded-full bg-[#b7603d]/10 p-2">
                    <FaShieldAlt className="h-6 w-6 text-[#b7603d]" />
                  </div>
                  UIDAI Compliant & Secure
                </h2>
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-12 p-8">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2 space-y-8"
                >
                  <p className="text-gray-600">
                    Our Aadhaar verification service is fully compliant with
                    UIDAI guidelines and maintains the highest standards of data
                    security and privacy protection.
                  </p>
                  <div className="space-y-6">
                    {[
                      {
                        title: "UIDAI Authorized",
                        description:
                          " We are a certified Authentication User Agency (AUA) approved by UIDAI for Aadhaar-based verifications.",
                      },
                      {
                        title: "Data Privacy",
                        description:
                          " We do not store Aadhaar numbers or personal data, ensuring complete user privacy and compliance with Indian data laws.",
                      },
                      {
                        title: "Encrypted Transmission",
                        description:
                          " All Aadhaar data is transmitted securely using industry-standard encryption protocols.",
                      },
                      {
                        title: "Audit Trail",
                        description:
                          " Maintain full audit logs and tracking for every verification—ideal for enterprise-level compliance and security monitoring.",
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
                    src="../img/Aadhaar4.png"
                    alt="UIDAI Compliance"
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
                    Aadhaar Verification Use Cases
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
                    name: "Banking & Finance",
                    icon: <FaUniversity className="text-[#b7603d] text-4xl" />,
                    description:
                      " Ensure RBI-compliant KYC for account opening, loan disbursal, and secure financial operations.",
                  },
                  {
                    name: "Telecom",
                    icon: <FaMobileAlt className="text-[#b7603d] text-4xl" />,
                    description:
                      " Enable real-time Aadhaar-based mobile SIM activation and reduce identity fraud in telecom services.",
                  },
                  {
                    name: "Healthcare",
                    icon: <FaHospital className="text-[#b7603d] text-4xl" />,
                    description:
                      "  Streamline patient onboarding and verify identities for insurance claims and medical records.",
                  },
                  {
                    name: "Government",
                    icon: <FaBuilding className="text-[#b7603d] text-4xl" />,
                    description:
                      "  Authenticate citizens for government welfare schemes, subsidies, and digital governance services.",
                  },
                  {
                    name: "Corporate",
                    icon: <FaUserTie className="text-[#b7603d] text-4xl" />,
                    description:
                      " Simplify employee verification, background checks, and HR onboarding using Aadhaar authentication.",
                  },
                  {
                    name: "Education",
                    icon: <FaSchool className="text-[#b7603d] text-4xl" />,
                    description:
                      " Verify student identity for secure admissions, scholarships, and academic record validation.",
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

        {/* API Integration Section */}
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
                      Integrate Aadhaar verification seamlessly into your
                      applications with our developer-friendly API and
                      comprehensive documentation.
                    </p>
                    <div className="mt-4 space-y-2">
                      {[
                        "Simple REST API with JSON responses",
                        "Multiple authentication methods",
                        "Real-time webhook notifications",
                        "Comprehensive error handling",
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
                            // Aadhaar OTP Generation
                          </div>
                          <div className="mb-2">
                            POST /api/v1/aadhaar/generate-otp {"{"}
                          </div>
                          <div className="ml-4">
                            "aadhaar_number": "123456789012"
                          </div>
                          <div className="mb-2">{"}"}</div>
                          <div className="mt-4 text-gray-500">
                            // OTP Verification
                          </div>
                          <div>POST /api/v1/aadhaar/verify-otp {"{"}</div>
                          <div className="ml-4">
                            "transaction_id": "abc123",
                          </div>
                          <div className="ml-4">"otp": "123456"</div>
                          <div>{"}"}</div>
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

export default AadhaarVerificationPage;
