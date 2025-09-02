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
  FaMoneyBillWave,
  FaCheckCircle,
  FaBuilding,
  FaShoppingCart,
  FaGraduationCap,
} from "react-icons/fa";
import { SEOData } from "../../type";
import { ContextData } from "../../config/context";
import SEO from "../Helmet/helment";
import KnowMore from "../../components/KnowMore";

const BankAccountVerificationPage: React.FC = () => {
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
                Instant Bank Account Verification Across India
              </h1>
              <p className="text-lg mb-4 text-white">
                Use 7UniqueVerify to instantly confirm account details and
                ownership with real-time validation.
              </p>
              <p className="mb-4 text-white">
                Built for lenders, payroll systems, fintech apps, and businesses
                that demand secure, fast, and compliant payouts.
              </p>
              {/*<p className="mb-6 text-white">
                Ideal for payment gateways, lending platforms, e-commerce
                stores, salary disbursals, and any process where reliable bank
                verification is crucial.
              </p> */}
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
                src="../img/Bank1.png"
                alt="7UniqueVerify – Bank Account Verification"
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
                  7UniqueVerify – Bank Account Verification API
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
                    Features of Bank Account Verification API
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
                            icon: (
                              <FaSearch className="text-[#b7603d] text-2xl" />
                            ),
                            title: "Real-Time Bank Account Validation",
                            description:
                              "Quickly validate bank account numbers and IFSC codes with 7uniqueverify’s real-time API, trusted by platforms across Jaipur and India for accurate, instant verification.",
                          },
                          {
                            icon: (
                              <FaUserTie className="text-[#b7603d] text-2xl" />
                            ),
                            title: "Verified Account Holder Name Match",
                            description:
                              "Cross-check account holder names with bank records to ensure payments go to the correct person, reducing failed transactions and fraud risks.",
                          },
                          {
                            icon: (
                              <FaBuilding className="text-[#b7603d] text-2xl" />
                            ),
                            title: "Wide Coverage Across Indian Banks",
                            description:
                              " Supports all major Indian banks and financial institutions, providing complete coverage for businesses needing reliable bank verification across multiple use cases.",
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
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef] rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   font-bold">🏛️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Bank Verification
                    </h3>
                    <span className="text-sm text-[#b7603d]   font-medium">
                      Traditional Method
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Sends ₹1 to the account and fetches the account holder name
                  from bank statement.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">2-5 seconds</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">High-value transactions</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef] rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   font-bold">₹</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Penny Drop Verification
                    </h3>
                    <span className="text-sm text-[#b7603d]   font-medium">
                      Traditional Method
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Sends ₹1 to the account and fetches the account holder name
                  from bank statement.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">2-5 seconds</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">High-value transactions</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef] rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   font-bold">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Penny-Less Verification
                    </h3>
                    <span className="text-sm text-[#b7603d]   font-medium">
                      NSDL / Yes Bank
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Verifies account silently without any money transfer - faster
                  and more cost-effective.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">1-2 seconds</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">Bulk verifications</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef] rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d] font-bold">📥</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Bank Statement Analysis / Download
                    </h3>
                    <span className="text-sm text-[#b7603d] font-medium">
                      Digital Payment
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Analysis bank statement and Download with all details
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">1-3 seconds</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">UPI-based platforms</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef] rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d] font-bold">UPI</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      UPI/VPA Verification
                    </h3>
                    <span className="text-sm text-[#b7603d] font-medium">
                      Digital Payment
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Checks UPI ID validity and fetches the associated account
                  holder name.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">1-3 seconds</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">UPI-based platforms</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-600 font-bold">📱</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Mobile to UPI Fetch
                    </h3>
                    <span className="text-sm text-orange-600 font-medium">
                      Discovery Service
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Get all UPI IDs linked to a mobile number for comprehensive
                  verification.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">2-4 seconds</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">User onboarding</span>
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
                  {/* <h5 className="font-medium text-gray-700 mb-2">
                    Bank Verification:
                  </h5> */}
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ Complete Bank details</li>
                    <li>✓ Address information</li>
                    <li>✓ Date of birth</li>
                    <li>✓ Gender information</li>
                    <li>✓ Download bank Statement In PDF</li>
                  </ul>
                </div>
                <div>
                  {/* <h5 className="font-medium text-gray-700 mb-2">
                    Penny Drop Verification:
                  </h5> */}
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ Analysis bank statement </li>
                    <li>✓ With validation</li>
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
              How <span className="text-[#b7603d]">Bank Verification</span>{" "}
              Works
            </h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-200"></div>
              <div
                className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-[#b7603d]
 to-transparent"
              ></div>

              <div className="grid gap-8 grid-cols-1 md:grid-cols-4">
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    1
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Submit Details</h3>
                  <p className="text-gray-600 text-sm">
                    Enter the customer’s bank account number, IFSC code, and
                    account holder name into the verification API request.
                  </p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    2
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Real-Time Processing
                  </h3>
                  <p className="text-gray-600 text-sm">
                    7uniqueverify connects securely to bank systems and
                    processes the request in real time using RBI-compliant
                    protocols.
                  </p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    3
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Validation Check
                  </h3>
                  <p className="text-gray-600 text-sm">
                    The provided account details are verified against official
                    bank databases to confirm accuracy and match.
                  </p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    4
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Instant Results
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Get instant verification results, including account status,
                    name match outcome, and validation success, ready for
                    business workflows.
                  </p>
                </div>
              </div>
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
                        description:
                          " Validate account details before initiating payments to reduce errors and minimise failed      transactions across platforms in Jaipur and India.",
                      },
                      {
                        title: "Prevent Fraud & Mismatches",
                        description:
                          "Identify incorrect or suspicious accounts early and protect your business from fraud and financial loss with verified data",
                      },
                      {
                        title: " Boost Customer Experience",
                        description:
                          "Enable fast, error-free transactions and reduce delays — delivering a smoother payment experience to your customers.",
                      },
                      {
                        title: "Ensure Regulatory Compliance",
                        description:
                          "Meet KYC and AML guidelines by verifying bank account information through a secure, RBI-compliant API.",
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
                    src="../img/Bank3.png"
                    alt="Bank Verification Benefits"
                    className="w-full h-auto rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Applications Section */}
        <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
          <div className="w-full mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              Where Can You Use{" "}
              <span className="text-[#b7603d]">Bank Account Verification</span>?
            </h2>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  Banking & Finance
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Verify customer bank details during loan disbursal, account
                  opening, and other financial services to ensure safe,
                  compliant transactions.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🛒</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  E-commerce
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Authenticate seller and buyer bank accounts for secure
                  refunds, payouts, and marketplace transactions across India.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  Payroll Systems
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Verify employee bank accounts to ensure accurate salary
                  payments and avoid bounced transfers.
                </p>
                <div className="text-xs text-[#b7603d] font-medium">
                  "Avoid failed payouts in payrolls!"
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🎮</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  Fintech
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Seamlessly integrate bank verification into payment apps,
                  digital wallets, and financial platforms for fast and secure
                  onboarding.
                </p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  Corporate & Enterprises
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Verify employee and vendor bank details before salary
                  transfers, incentives, and business payouts — improving
                  accuracy and trust.
                </p>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">💳</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  Insurance
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Validate policyholder bank accounts to streamline premium
                  collection and ensure smooth claim settlements.
                </p>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🏫</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  Education
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Confirm student and parent account details for fee payments,
                  scholarship disbursement, and other financial workflows.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="bg-[#f7f1ef] py-16 px-4 md:px-8 lg:px-20"
        >
          <div className="w-full mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              Why Use Our{" "}
              <span className="text-[#b7603d]">Bank Verification API</span>?
            </h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div
                    className="w-12 h-12 bg-[#f7f1ef]








   rounded-full flex items-center justify-center mr-4"
                  >
                    <span className="text-[#b7603d]   text-xl">⚡</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Fast & Real-Time Results
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Get verification results in 1-5 seconds with our optimized API
                  infrastructure and direct bank connections.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div
                    className="w-12 h-12 bg-[#f7f1ef]








 rounded-full flex items-center justify-center mr-4"
                  >
                    <span className="text-[#b7603d]   text-xl">🔒</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    PCI-DSS Compliant & Secure
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Bank-grade security with end-to-end encryption, ensuring your
                  data and transactions are always protected.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div
                    className="w-12 h-12 bg-[#f7f1ef]








  rounded-full flex items-center justify-center mr-4"
                  >
                    <span className="text-[#b7603d] text-xl">💰</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Cost-Effective Penny-less Option
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Save up to 70% on verification costs with our penny-less
                  verification method without compromising accuracy.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-600 text-xl">👨‍💻</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Developer Friendly API Docs
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Comprehensive documentation, SDKs, and sandbox environment for
                  quick and easy integration.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-red-600 text-xl">🚫</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Reduces Failed Payouts
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Eliminate failed transactions and reduce operational costs by
                  verifying accounts before processing payments.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-teal-600 text-xl">✅</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Increases User Trust & KYC Accuracy
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Build customer confidence and ensure regulatory compliance
                  with accurate account verification.
                </p>
              </div>
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
                      Get started with our Bank Account Verification API in
                      minutes. Our comprehensive documentation and SDKs make
                      integration seamless across all platforms.
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
                            POST /api/v1/bank-verification {"{"}
                          </div>
                          <div className="ml-4">
                            "account_number": "1234567890",
                          </div>
                          <div className="ml-4">
                            "ifsc_code": "SBIN0001234",
                          </div>
                          <div className="ml-4">
                            "account_holder_name": "John Doe"
                          </div>
                          <div className="mb-2">{"}"}</div>
                          <div className="mt-4 text-gray-500">// Response</div>
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
    </>
  );
};

export default BankAccountVerificationPage;
