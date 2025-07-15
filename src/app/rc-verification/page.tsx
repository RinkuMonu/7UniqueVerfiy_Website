import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaCar,
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
  FaClock,
  FaBalanceScale,
  FaServer,
  FaIdCard,
  FaFingerprint,
  FaMapMarkerAlt,
  FaPassport,
  FaSearch,
  FaFileAlt,
  FaTruck,
  FaBuilding
} from "react-icons/fa";

const RCVerificationPage: React.FC = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">RC Verification API – by 7Unique Verify</h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
              Real-Time Vehicle Registration Certificate Validation
            </h2>
            <p className="text-lg mb-4 text-white">
              Instantly verify vehicle registration details with 7Unique Verify's RC Verification API. Get access to
              real-time data directly from RTO databases for reliable and official vehicle authentication.
            </p>
            <p className="mb-4 text-white">
              This API delivers accurate vehicle information including owner name, registration status, fuel type,
              vehicle class, insurance validity, and more — directly sourced from regional transport offices.
            </p>
            <p className="mb-6 text-white">
              Trusted by insurance providers, used car platforms, banks, and fleet operators for fraud prevention,
              compliance checks, and transparent transactions.
            </p>
            <Link
              to="/rc-verification-page-api"
              className="inline-block bg-[#b7603d] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#d19983] transition-colors"
            >
              Get Started
            </Link>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="../img/RC1.png"
              alt="RC Verification"
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
                 RC Verification Features

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
                        src="../img/images/26.png"
                        alt="RC Verification Illustration"
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
                          icon: <FaCar className="text-[#b7603d] text-2xl" />,
                          title: "Complete Vehicle Information",
                          description:
                            "Access comprehensive vehicle details including registration number, chassis number, engine number, and vehicle specifications from official RTO records.",
                        },
                        {
                          icon: <FaUserTie className="text-[#b7603d] text-2xl" />,
                          title: "Owner & Registration Details",
                          description:
                            "Verify owner information, registration date, validity period, and tax payment status for comprehensive vehicle due diligence.",
                        },
                        {
                          icon: <FaShieldAlt className="text-[#b7603d] text-2xl" />,
                          title: "Compliance & Status Check",
                          description:
                            "Monitor vehicle compliance status, insurance validity, pollution certificate status, and current standing with regulatory authorities.",
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
                How RC Verification Works
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
                title: "Submit RC Details",
                description:
                  "Provide the vehicle registration number through our secure API interface.",
                icon: <FaIdCard className="text-[#b7603d] text-4xl" />,
              },
              {
                step: "2",
                title: "RTO Database Query",
                description:
                  "Our system connects to official RTO databases and retrieves vehicle information.",
                icon: <FaDatabase className="text-[#b7603d] text-4xl" />,
              },
              {
                step: "3",
                title: "Data Verification",
                description:
                  "Vehicle details are validated and cross-referenced for accuracy and completeness.",
                icon: <FaSearch className="text-[#b7603d] text-4xl" />,
              },
              {
                step: "4",
                title: "Detailed Report",
                description:
                  "Receive comprehensive vehicle information with registration status and owner details.",
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
                Benefits of RC Verification
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
                      title: "Prevent Fraud",
                      description:
                        "Identify stolen or illegally modified vehicles before purchase or insurance.",
                    },
                    {
                      title: "Risk Assessment",
                      description:
                        "Evaluate vehicle history and status for insurance and loan processing.",
                    },
                    {
                      title: "Regulatory Compliance",
                      description:
                        "Ensure vehicles meet all regulatory requirements and tax obligations.",
                    },
                    {
                      title: "Streamlined Processes",
                      description:
                        "Automate vehicle verification for faster service delivery and customer onboarding.",
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
                  src="../img/RC4.png"
                  alt="RC Verification Benefits"
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
                    <FaCar className="h-6 w-6 text-[#b7603d]" />
                  </div>
                  RC Verification Use Cases
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
                  name: "Used Car Marketplaces",
                  icon: <FaCar className="text-[#b7603d] text-4xl" />,
                  description:
                    "Verify vehicle details and ownership history for used car listings and transactions.",
                },
                {
                  name: "Vehicle Financing",
                  icon: <FaUniversity className="text-[#b7603d] text-4xl" />,
                  description:
                    "Validate vehicle information for loan processing and collateral verification.",
                },
                {
                  name: "Insurance Companies",
                  icon: <FaBriefcaseMedical className="text-[#b7603d] text-4xl" />,
                  description:
                    "Verify vehicle details for policy issuance and claim processing.",
                },
                {
                  name: "Fleet Management",
                  icon: <FaTruck className="text-[#b7603d] text-4xl" />,
                  description:
                    "Monitor compliance status and registration validity for fleet vehicles.",
                },
                {
                  name: "Corporate Transportation",
                  icon: <FaBuilding className="text-[#b7603d] text-4xl" />,
                  description:
                    "Verify vehicles used for employee transportation and corporate services.",
                },
                {
                  name: "Law Enforcement",
                  icon: <FaShieldAlt className="text-[#b7603d] text-4xl" />,
                  description:
                    "Quickly access vehicle information for traffic management and investigations.",
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


                  <p className="text-gray-600">
                   Integrate our RC Verification API seamlessly into your applications with comprehensive documentation and developer-friendly tools.
                  </p>
                  <div className="mt-5 space-y-2">
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
                                to="/driving-license-verification-api"
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
                        <div>POST /api/v1/rc-verification</div>
                        <div className="text-yellow-400 mt-2">{"{"}</div>
                        <div className="ml-4">"registration_number": "MH01AB1234"</div>
                        <div className="text-yellow-400">{"}"}</div>
                        <div className="mt-4 text-gray-400">// Response</div>
                        <div className="text-yellow-400">{"{"}</div>
                        <div className="ml-4">"status": "verified",</div>
                        <div className="ml-4">"vehicle_details": {"{"}</div>
                        <div className="ml-8">"owner_name": "John Doe",</div>
                        <div className="ml-8">"registration_date": "2020-01-15",</div>
                        <div className="ml-8">"vehicle_class": "LMV",</div>
                        <div className="ml-8">"fuel_type": "Petrol"</div>
                        <div className="ml-4">{"}"},</div>
                        <div className="ml-4">"validity": {"{"}</div>
                        <div className="ml-8">"registration": "2035-01-14",</div>
                        <div className="ml-8">"fitness": "2025-01-14",</div>
                        <div className="ml-8">"insurance": "2023-12-31"</div>
                        <div className="ml-4">{"}"}</div>
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

export default RCVerificationPage;