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
  FaFileAlt,
  FaMoneyBillWave,
  FaCheckCircle,
  FaBuilding,
  FaShoppingCart,
  FaGraduationCap
} from "react-icons/fa";

const BankAccountVerificationPage: React.FC = () => {
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

<section
  className="w-full bg-cover bg-center min-h-screen flex items-center px-16"
  style={{ backgroundImage: "url('/img/bg (2).png')" }}
>
  <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
    <div className="w-full md:w-2/3 text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">7Unique Verify – Bank Account Verification API</h1>
      <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
        Secure & Instant Bank Account Validation
      </h2>
      <p className="text-lg mb-4 text-white">
        Validate bank account details in real time using the trusted 7Unique Verify Bank Account Verification API. Ensure error-free transactions, compliance, and fraud prevention with our advanced verification engine.
      </p>
      <p className="mb-4 text-white">
        Our system confirms account number validity, verifies IFSC codes, and cross-checks account holder names across all major Indian banks, offering seamless API integration for your business.
      </p>
      <p className="mb-6 text-white">
        Ideal for payment gateways, lending platforms, e-commerce stores, salary disbursals, and any process where reliable bank verification is crucial.
      </p>
      <Link
        to="/api-catalog"
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

      {/* <section className="min-h-screen bg-gradient-to-b from-[#f7f1ef] to-white">
        <div className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-6xl space-y-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 px-6 py-4">
                <h2 className="flex items-center gap-3 text-2xl font-semibold">
                  <div className="rounded-full bg-[#b7603d]/10 p-2">
                    <FaMoneyBillWave className="h-6 w-6 text-[#b7603d]" />
                  </div>
                  7Unique Verify – Bank Account Verification API
                </h2>
              </div>
              <div className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="w-full md:w-1/2">
                    <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Secure & Instant Bank Account Validation</h1>
                    <p className="text-lg mb-4 text-gray-600">
                      Validate bank account details in real time using the trusted 7Unique Verify Bank Account Verification API.
                      Ensure error-free transactions, compliance, and fraud prevention with our advanced verification engine.
                    </p>
                    <p className="mb-6 text-gray-600">
                      Our system confirms account number validity, verifies IFSC codes, and cross-checks account holder names
                      across all major Indian banks, offering seamless API integration for your business.
                    </p>
                    <Link
                      to="/api-catalog"
                      className="inline-block bg-[#b7603d] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#d19983] transition-colors"
                    >
                      Get Started
                    </Link>
                  </div>
                  <div className="w-full md:w-1/2">
                    <img
                      src="../img/images/4.png"
                      alt="7Unique Verify – Bank Account Verification"
                      className="w-full h-auto rounded-lg shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

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
                  Features of Bank Account Verification
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
                        alt="Bank Verification Illustration"
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
                          icon: <FaSearch className="text-[#b7603d] text-2xl" />,
                          title: "Real-time Account Validation",
                          description: "Instantly verify bank account numbers and IFSC codes across all major Indian banks with real-time validation and accurate results."
                        },
                        {
                          icon: <FaUserTie className="text-[#b7603d] text-2xl" />,
                          title: "Account Holder Name Verification",
                          description: "Verify account holder names to ensure transactions are processed to the correct beneficiary, reducing errors and fraud risks."
                        },
                        {
                          icon: <FaBuilding className="text-[#b7603d] text-2xl" />,
                          title: "Multi-bank Coverage",
                          description: "Support for all major banks and financial institutions in India, ensuring comprehensive coverage for your verification needs."
                        }
                      ].map((feature, index) => (
                        <motion.div
                          key={index}
                          variants={item}
                          whileHover={{
                            y: -5,
                            transition: { duration: 0.2 }
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
                How Bank Verification Works
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
                description: "Provide bank account number, IFSC code, and account holder name for verification.",
                icon: <FaFileAlt className="text-[#b7603d] text-4xl" />
              },
              {
                step: "2",
                title: "Real-time Processing",
                description: "Our system connects to bank databases and processes verification in real-time.",
                icon: <FaClock className="text-[#b7603d] text-4xl" />
              },
              {
                step: "3",
                title: "Validation Check",
                description: "Account details are validated against official bank records for accuracy.",
                icon: <FaCheckCircle className="text-[#b7603d] text-4xl" />
              },
              {
                step: "4",
                title: "Instant Results",
                description: "Receive comprehensive verification results with account status and holder information.",
                icon: <FaDatabase className="text-[#b7603d] text-4xl" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                // variants={item}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#f7f1ef] to-[#f0e4df] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                <div className="absolute top-4 left-4 bg-[#b7603d] text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">
                  {item.step}
                </div>

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
                Benefits of Bank Account Verification
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
                <div className="space-y-6">
                  {[
                    {
                      title: "Reduce Payment Failures",
                      description: "Verify account details before processing payments to minimize failed transactions."
                    },
                    {
                      title: "Prevent Fraud",
                      description: "Detect fraudulent accounts and protect your business from financial losses."
                    },
                    {
                      title: "Improve Customer Experience",
                      description: "Ensure smooth payment processing and reduce customer friction during transactions."
                    },
                    {
                      title: "Regulatory Compliance",
                      description: "Meet KYC and AML requirements with verified bank account information."
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 bg-[#b7603d] rounded-full flex items-center justify-center text-white">
                          ✓
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{benefit.title}</h3>
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
                  src="../img/images/5.png"
                  alt="Bank Verification Benefits"
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
                Industry Applications
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
                name: "Banking & Finance",
                icon: <FaUniversity className="text-[#b7603d] text-4xl" />,
                description: "Verify customer bank accounts for loan processing, account opening, and financial services."
              },
              {
                name: "E-commerce",
                icon: <FaShoppingCart className="text-[#b7603d] text-4xl" />,
                description: "Validate seller and buyer bank accounts for secure marketplace transactions."
              },
              {
                name: "Fintech",
                icon: <FaMoneyBillWave className="text-[#b7603d] text-4xl" />,
                description: "Integrate bank verification into digital wallets, payment apps, and financial platforms."
              },
              {
                name: "Corporate",
                icon: <FaBuilding className="text-[#b7603d] text-4xl" />,
                description: "Verify vendor and employee bank accounts for payroll and payment processing."
              },
              {
                name: "Insurance",
                icon: <FaBriefcaseMedical className="text-[#b7603d] text-4xl" />,
                description: "Validate policyholder bank accounts for premium collection and claim settlements."
              },
              {
                name: "Education",
                icon: <FaGraduationCap className="text-[#b7603d] text-4xl" />,
                description: "Verify student and parent bank accounts for fee collection and scholarship disbursements."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
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
                Simple API Integration
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
                    Get started with our Bank Account Verification API in minutes. Our comprehensive documentation and SDKs make integration seamless across all platforms.
                  </p>
                  <div className="mt-4 space-y-2">
                    {[
                      "RESTful API with JSON responses",
                      "SDKs for popular programming languages",
                      "Comprehensive documentation and examples",
                      "Sandbox environment for testing"
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
                          POST /api/v1/bank-verification {"{"}
                        </div>
                        <div className="ml-4">"account_number": "1234567890",</div>
                        <div className="ml-4">"ifsc_code": "SBIN0001234",</div>
                        <div className="ml-4">"account_holder_name": "John Doe"</div>
                        <div className="mb-2">{"}"}</div>
                        <div className="mt-4 text-gray-500">
                          // Response
                        </div>
                        <div>{"{"}</div>
                        <div className="ml-4">"status": "verified",</div>
                        <div className="ml-4">"account_exists": true,</div>
                        <div className="ml-4">"name_match": "exact"</div>
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
  );
};

export default BankAccountVerificationPage;







