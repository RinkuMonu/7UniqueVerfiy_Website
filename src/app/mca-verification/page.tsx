import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaShieldAlt,
  FaDatabase,
  FaLock,
  FaUserTie,
  FaHome,
  FaUniversity,
  FaBriefcaseMedical,
  FaUsers,
  FaHandshake,
  FaChartLine,
  FaBalanceScale,
  FaServer,
  FaFileAlt,
  FaSearch,
  FaLandmark,
  FaFileContract,
  FaChartBar
} from "react-icons/fa";

const MCAVerificationPage: React.FC = () => {
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
        className="w-full bg-cover bg-center min-h-screen flex items-center p-16"
        style={{ backgroundImage: "url('/img/bg (2).png')" }}
      >
        <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-2/3 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">MCA Verification API by 7Unique Verify</h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
              Ministry of Corporate Affairs Verification – Instantly Reliable
            </h2>
            <p className="text-lg mb-4 text-white">
              Seamlessly verify company credentials with our MCA Verification API, powered by 7Unique Verify. Gain real-time access to official corporate data from the Ministry of Corporate Affairs (MCA) database.
            </p>
            <p className="mb-4 text-white">
              Instantly retrieve verified company CIN numbers, director and ROC details, incorporation status, and key compliance insights—all in one secure API.
            </p>
            <p className="mb-6 text-white">
              Ideal for B2B onboarding, vendor validation, KYC automation, fintech applications, and legal due diligence.
            </p>
            <Link
              to="/mca-verification-api"
              className="inline-block bg-[#b7603d] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#d19983] transition-colors"
            >
              Start Verifying with 7Unique
            </Link>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="../img/PAN1.png"
              alt="MCA Verification Illustration"
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
                 7UniqueVerify MCA API Features
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
                        alt="MCA Verification Illustration"
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
                          icon: <FaBuilding className="text-[#b7603d] text-2xl" />,
                          title: "Complete Company Information",
                          description:
                            "Access CIN, incorporation date, capital structure, business classification, and more directly from MCA records.",
                        },
                        {
                          icon: <FaUserTie className="text-[#b7603d] text-2xl" />,
                          title: "Director & Management Insights",
                          description:
                            "Get verified director identities, shareholder structure, and key personnel data for business clarity and compliance.",
                        },
                        {
                          icon: <FaShieldAlt className="text-[#b7603d] text-2xl" />,
                          title: "Compliance & Legal Standing",
                          description:
                            "Instantly check compliance history, annual filing status, and active/inactive status for accurate decision-making.",
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
                            <h3 className="font-semibold mb-1">{feature.title}</h3>
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
                How 7Unique Verify MCA Verification Works
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
                title: "Input Company Identifiers",
                description:
                  "Submit company CIN, name, or registration number securely through our API.",
                icon: <FaFileContract className="text-[#b7603d] text-4xl" />,
              },
              {
                step: "2",
                title: "Connect to MCA Database",
                description:
                  "Our engine queries MCA servers in real-time for official and verified information.",
                icon: <FaDatabase className="text-[#b7603d] text-4xl" />,
              },
              {
                step: "3",
                title: "Data Validation",
                description:
                  "The data is validated, formatted, and enriched before sharing in the response.",
                icon: <FaSearch className="text-[#b7603d] text-4xl" />,
              },
              {
                step: "4",
                title: "Get Complete Report",
                description:
                  "Receive a structured company report including registration, directors, and compliance records.",
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
               Benefits of MCA Verification
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
                      title: "Enhanced Due Diligence",
                      description:
                        "Conduct thorough company verification for partnerships, investments, and business transactions.",
                    },
                    {
                      title: "Risk Mitigation",
                      description:
                        "Identify potential risks by verifying company status, compliance history, and financial standing.",
                    },
                    {
                      title: "Vendor Verification",
                      description:
                        "Verify vendor credentials and corporate information before establishing business relationships.",
                    },
                    {
                      title: "Regulatory Compliance",
                      description:
                        "Ensure compliance with KYB (Know Your Business) requirements and anti-money laundering regulations.",
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
                  src="../img/Aadhaar5.png"
                  alt="MCA Verification Benefits"
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
                    <FaBuilding className="h-6 w-6 text-[#b7603d]" />
                  </div>
                  MCA Verification Use Cases
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
                    "Verify company details for corporate account opening, loan processing, and financial services.",
                },
                {
                  name: "B2B Partnerships",
                  icon: <FaHandshake className="text-[#b7603d] text-4xl" />,
                  description:
                    "Validate potential business partners and verify corporate credentials before collaboration.",
                },
                {
                  name: "Vendor Management",
                  icon: <FaUsers className="text-[#b7603d] text-4xl" />,
                  description:
                    "Verify vendor company information for procurement processes and supply chain management.",
                },
                {
                  name: "Investment Due Diligence",
                  icon: <FaChartBar className="text-[#b7603d] text-4xl" />,
                  description:
                    "Conduct thorough company verification before making investment decisions and acquisitions.",
                },
                {
                  name: "Legal & Compliance",
                  icon: <FaLandmark className="text-[#b7603d] text-4xl" />,
                  description:
                    "Verify company status and compliance history for legal proceedings and regulatory requirements.",
                },
                {
                  name: "Market Research",
                  icon: <FaSearch className="text-[#b7603d] text-4xl" />,
                  description:
                    "Access company information for market analysis, competitor research, and industry insights.",
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
                    Integrate our MCA Verification API seamlessly into your applications with comprehensive documentation and developer-friendly tools.
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
                    to="/mca-verification-api"
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
                        <div className="text-gray-500">// Sample API Request</div>
                        <div>POST /api/v1/mca-verification</div>
                        <div className="text-yellow-400 mt-2">{"{"}</div>
                        <div className="ml-4">"cin": "U72200MH2010PTC123456"</div>
                        <div className="text-yellow-400">{"}"}</div>
                        <div className="mt-4 text-gray-400">// Response</div>
                        <div className="text-yellow-400">{"{"}</div>
                        <div className="ml-4">"status": "verified",</div>
                        <div className="ml-4">"company_details": {"{"}</div>
                        <div className="ml-8">"name": "ABC Technologies Private Limited",</div>
                        <div className="ml-8">"registration_date": "2010-05-15",</div>
                        <div className="ml-8">"status": "Active",</div>
                        <div className="ml-8">"company_type": "Private Limited Company",</div>
                        <div className="ml-8">"authorized_capital": "10000000",</div>
                        <div className="ml-8">"paid_up_capital": "1000000"</div>
                        <div className="ml-4">{"}"},</div>
                        <div className="ml-4">"directors": [</div>
                        <div className="ml-8">{"{"}</div>
                        <div className="ml-12">"name": "John Doe",</div>
                        <div className="ml-12">"din": "12345678",</div>
                        <div className="ml-12">"designation": "Director"</div>
                        <div className="ml-8">{"}"}</div>
                        <div className="ml-4">]</div>
                        <div className="text-yellow-400">{"}"}</div>
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

export default MCAVerificationPage;