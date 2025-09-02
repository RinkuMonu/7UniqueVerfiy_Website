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
} from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import SEO from "../Helmet/helment";
import { ContextData } from "../../config/context";
import { SEOData } from "../../type";
import KnowMore from "../../components/KnowMore";

const CrimeCheckAPIPage: React.FC = () => {
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
                Instant Criminal Background Check API for Smarter Onboarding
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
                Secure & Instant Criminal Background Verification
              </h2>
              <p className="text-lg mb-4 text-white">
                Verify criminal history in real time with our trusted Crime
                Check API. Reduce onboarding risk, prevent fraud, and ensure
                compliance with fast, reliable checks against national crime
                databases and official records.
              </p>
              <div className="flex gap-3">
                <Link
                  to="/contact-us"
                  className="inline-block bg-[#b7603d] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#d19983] transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  to="https://7uniqueverify-njzw.readme.io/reference/post_api-verify-bankverify#/"
                  className="inline-block bg-gray-100/30 text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#d19983] transition-colors"
                >
                  View Document
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="../img/crime-check-api/img1_Artboard 1.png"
                alt="7Unique Verify – Bank Account Verification"
                className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
              />
            </div>
          </div>
        </section>

        {/* Features Section (KycFeatures inspired) */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-4 md:px-8 lg:px-20 overflow-hidden">
          <div className="container mx-auto px-4 py-12">
            <div className="mx-auto max-w-7xl space-y-12">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-orange-50 to-red-50 px-6 py-4">
                  <h2 className="flex items-center gap-3 text-2xl font-semibold">
                    <div className="rounded-full bg-[#b7603d]/10 p-2">
                      <FaDatabase className="h-6 w-6 text-[#b7603d]" />
                    </div>
                    Features of Crime Check Verification API
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
                          src="/img/crime-check-api/img2_Artboard 1.png"
                          alt="Crime Check Illustration"
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
                            title: "Real-Time Criminal Record Verification",
                            description:
                              " Verify individuals instantly through live access to national and state-level criminal databases. Get actionable insights within seconds to reduce risk and enable safe onboarding.",
                          },
                          {
                            icon: (
                              <FaDatabase className="text-[#b7603d] text-2xl" />
                            ),
                            title: "Nationwide Court & Police Data Coverage",
                            description:
                              " Access records from FIRs, police databases, charge sheets, court proceedings, and public legal notices — all in one comprehensive verification system.",
                          },
                          {
                            icon: (
                              <FaLock className="text-[#b7603d] text-2xl" />
                            ),
                            title: "Compliant, Secure & Audit-Ready",
                            description:
                              "Built to meet legal standards with strong encryption and privacy controls. Ideal for businesses needing compliance-ready, tamper-proof criminal background checks.",
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
                    <span className="text-[#b7603d]   font-bold">🕵️‍♂️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Crime Check Individual
                    </h3>
                    <span className="text-sm text-[#b7603d]   font-medium">
                      Background verification
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Performs a detailed background verification of an individual
                  by checking for any criminal records using government and law
                  enforcement databases.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">2-3 seconds</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">Basic identity checks</span>
                  </div>
                </div>
              </div>

              {/* <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef] rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   font-bold">🕵️‍♂️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Crime check Corporate
                    </h3>
                    <span className="text-sm text-[#b7603d]   font-medium">
                      Organization Background check
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Verifies the criminal history of a registered business entity,
                  identifying any legal or fraudulent activities linked to the
                  organization.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">3-5 seconds</span>
                  </div>
                                     <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">Basic identity checks</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef] rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   font-bold">🕵️‍♂️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Crime check Through Mobile Number
                    </h3>
                    <span className="text-sm text-[#b7603d]   font-medium">
                      Organization Background check
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Crime check through a mobile number refers to the process of
                  verifying if a mobile number is linked to any suspicious.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">3-5 seconds</span>
                  </div>
                                     <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">Basic identity checks</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef] rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   font-bold">📂</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Crime Report Download (JSON)
                    </h3>
                    <span className="text-sm text-[#b7603d]   font-medium">
                      Download (JSON)
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Allows users to download the structured crime report of an
                  individual or company in JSON format, suitable for API
                  integrations and automated systems.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">3-5 seconds</span>
                  </div>
                                     <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">Basic identity checks</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef] rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   font-bold">📄</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Crime Report Download (PDF)
                    </h3>
                    <span className="text-sm text-[#b7603d]   font-medium">
                      Download (PDF)
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Generates a formatted PDF report of the crime background
                  check, ideal for printing, documentation, or sharing with
                  clients or authorities.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">3-5 seconds</span>
                  </div>
                                     <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">Basic identity checks</span>
                  </div>
                </div>
              </div> */}
            </div>

            <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-lg font-semibold mb-4 text-gray-800">
                What You Get:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">
                    🕵️‍♂️ Crime Check (Individual):
                  </h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>
                      ✓ Verification against global criminal and fraud databases
                    </li>
                    <li>✓ Identity match and criminal history screening</li>
                    <li>
                      ✓ Ideal for personal KYC and background verification
                    </li>
                  </ul>
                </div>
                {/* <div>
                  <h5 className="font-medium text-gray-700 mb-2">
                    🕵️‍♂️ Crime Check (Corporate):
                  </h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>
                      ✓ Checks for fraudulent activity, blacklists, and
                      sanctions
                    </li>
                    <li>✓ Scans linked directors and company structure</li>
                    <li>
                      ✓ Ideal for vendor onboarding and business due diligence
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">
                    🕵️‍♂️ Crime Check Through Mobile Number:
                  </h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>
                      ✓ Checks for Crime Through mobile number with details
                    </li>
                    <li>✓ Scans linked directors and company structure</li>
                    <li>
                      ✓ Ideal for vendor onboarding and business due diligence
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">
                    📂 Crime Report Download (JSON):
                  </h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>
                      ✓ Structured crime report in machine-readable JSON format
                    </li>
                    <li>✓ Suitable for API use and automated workflows</li>
                    <li>✓ Issuing country information</li>
                    <li>
                      ✓ Ideal for platforms requiring fast, integrated checks
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">
                    📄 Crime Report Download (PDF):
                  </h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ Professionally formatted crime report in PDF</li>
                    <li>
                      ✓ Suitable for sharing with clients, documentation, or
                      printing
                    </li>
                    <li>✓ Issuing country information</li>
                    <li>✓ Ideal for audits, legal use, or manual review</li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </section>
        <KnowMore />

        <section className="container mx-auto px-4 py-12 ">
          <div className="mx-auto max-w-6xl space-y-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
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
                    How Crime Check Works
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
                    title: "Submit Details",
                    description:
                      "Enter personal information like full name, date of birth, and identification details (such as Aadhaar or PAN) for background verification.",
                    icon: <FaUserTie className="text-[#b7603d] text-4xl" />,
                  },
                  {
                    step: "2",
                    title: "Database Search",
                    description:
                      " The system runs a real-time search across national and regional criminal databases, police records, and court filings.",
                    icon: <FaSearch className="text-[#b7603d] text-4xl" />,
                  },
                  {
                    step: "3",
                    title: "Record Analysis",
                    description:
                      " Smart algorithms cross-check and validate results to eliminate false positives and ensure accurate, trustworthy matches.",
                    icon: <FaDatabase className="text-[#b7603d] text-4xl" />,
                  },
                  {
                    step: "4",
                    title: "Detailed Report",
                    description:
                      " Get a structured report containing criminal history (if any), record summaries, and risk-level indicators for informed decision-making.",
                    icon: <FaFileAlt className="text-[#b7603d] text-4xl" />,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    // variants={item}
                    whileHover={{
                      y: -10,
                      boxShadow:
                        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                    transition={{ duration: 0.3 }}
                    className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    {/* Gradient background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f7f1ef] to-[#f0e4df] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                    {/* Step number */}
                    {/* <div className="absolute top-4 left-4 bg-[#b7603d] text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">
                  {item.step}
                </div> */}

                    {/* Icon with animation */}
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

                    {/* Decorative elements */}
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-[#b7603d]/10 group-hover:bg-[#b7603d]/20 transition-all duration-500" />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-6xl space-y-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 px-6 py-4">
                <h2 className="flex items-center gap-3 text-2xl font-semibold">
                  <div className="rounded-full bg-[#b7603d]/10 p-2">
                    <FaServer className="h-6 w-6 text-[#b7603d]" />
                  </div>
                  Benefits of Crime Check Verification API
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
                        title: "Accurate & Trusted Results",
                        description:
                          " 7uniqueverify uses verified law enforcement and legal data sources to deliver high-accuracy criminal background checks for confident, risk-free decisions.",
                      },
                      {
                        title: "Fast, Real-Time Insights",
                        description:
                          " Designed for instant verifications — get complete crime check results within seconds, ideal for hiring, lending, and user onboarding.",
                      },
                      {
                        title: "Compliance-First Architecture",
                        description:
                          " Built to meet DPDP, GDPR, and regulatory standards — fully audit-ready for sectors like HR, NBFCs, and digital platforms.",
                      },
                      {
                        title: "Enterprise-Grade Data Security",
                        description:
                          " All data is encrypted end-to-end, ensuring your criminal verification process remains private, safe, and legally protected.",
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
                    src="/img/crime4.png"
                    alt="Crime Check Benefits"
                    className="w-full h-auto rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* API Services Section (APIsUnderKyc inspired) */}
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
                    Where Crime Check Verification API Is Used
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
                    name: "Employee Screening",
                    icon: <FaUserTie className="text-[#b7603d] text-4xl" />,
                    description:
                      "Conduct background checks on job applicants to ensure workplace safety and reduce hiring risks.",
                  },
                  {
                    name: "Tenant Verification",
                    icon: <FaHome className="text-[#b7603d] text-4xl" />,
                    description:
                      " Screen tenants before lease agreements to avoid risky occupants and protect property.",
                  },
                  {
                    name: "Financial Services",
                    icon: <FaUniversity className="text-[#b7603d] text-4xl" />,
                    description:
                      " Perform due diligence for loan applicants, investors, and customers to reduce fraud and non-compliance.",
                  },
                  {
                    name: "Educational Institutions",
                    icon: <FaUsers className="text-[#b7603d] text-4xl" />,
                    description:
                      " Verify teachers, staff, and volunteers to maintain a secure and trustworthy learning environment.",
                  },
                  {
                    name: "Healthcare Screening",
                    icon: (
                      <FaBriefcaseMedical className="text-[#b7603d] text-4xl" />
                    ),
                    description:
                      "Ensure the credibility of healthcare professionals and support staff to meet compliance and patient safety standards.",
                  },
                  {
                    name: "Transportation Checks",
                    icon: <FaCar className="text-[#b7603d] text-4xl" />,
                    description:
                      " Check criminal records of drivers, delivery personnel, and field staff to ensure passenger and goods safety.",
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

        {/* Integration Section (KycCards inspired) */}
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
                      Seamlessly integrate the 7Unique Verify Crime Check API
                      into your platform with clear documentation and
                      developer-first tools. Designed for scalability and ease
                      of use.
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
                            fetch('https://api.7uniqueverify.com/crime-check',{" "}
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
                          <div className="ml-8">name: 'John Doe',</div>
                          <div className="ml-8">dob: '1990-01-01'</div>
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

export default CrimeCheckAPIPage;
