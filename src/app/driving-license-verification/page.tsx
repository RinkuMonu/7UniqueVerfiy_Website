import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
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
  FaTruck,
} from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { ContextData } from "../../config/context";
import SEO from "../Helmet/helment";
import { SEOData } from "../../type";
import KnowMore from "../../components/KnowMore";

// Define types for your data structures
interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface StepItem {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface BenefitItem {
  title: string;
  description: string;
}

interface ServiceItem {
  name: string;
  icon: React.ReactNode;
  description: string;
}

const DrivingLicenseVerificationPage: React.FC = () => {
  const { seo } = useContext(ContextData) as { seo: SEOData };

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const features: FeatureItem[] = [
    {
      icon: <FaSearch className="text-[#b7603d] text-2xl" />,
      title: "Real-Time DL Verification",
      description:
        "Quickly verify Indian Driving License numbers across all states by connecting directly with authorized RTO databases. Ensure the license is active, valid, and authentic.",
    },
    {
      icon: <FaDatabase className="text-[#b7603d] text-2xl" />,
      title: "Complete Driver Information",
      description:
        "Retrieve verified driver details like name, date of birth, license type, issue/expiry dates, and any remarks such as suspensions or disqualifications.",
    },
    {
      icon: <FaLock className="text-[#b7603d] text-2xl" />,
      title: "RTO & Transport Compliance",
      description:
        "Ensure compliance with Indian transport laws. Ideal for logistics, fleet services, car rentals, insurance, and any industry that requires verified driver identity.",
    },
  ];

  const steps: StepItem[] = [
    {
      step: "1",
      title: "Enter DL Information",
      description:
        "Input the driving license number, along with name and date of birth on the 7UniqueVerify DL Verification API.",
      icon: <FaIdCard className="text-[#b7603d] text-4xl" />,
    },
    {
      step: "2",
      title: "Connect to RTO Databases",
      description:
        "Our system securely checks official RTO records across India to authenticate the license data.",
      icon: <FaDatabase className="text-[#b7603d] text-4xl" />,
    },
    {
      step: "3",
      title: "Verify Status & Details",
      description:
        "The API validates license status, type, issuance & expiry dates, and detects any disqualifications or flags.",
      icon: <FaSearch className="text-[#b7603d] text-4xl" />,
    },
    {
      step: "4",
      title: " Instant DL Verification Report",
      description:
        "Get a real-time, structured report from 7UniqueVerify with verified driver details and active license information.",
      icon: <FaFileAlt className="text-[#b7603d] text-4xl" />,
    },
  ];

  const benefits: BenefitItem[] = [
    {
      title: "Real-Time DL Verification",
      description:
        "nstantly check Driving License validity across India with direct RTO integration.",
    },
    {
      title: "Prevent Fake Licenses",
      description:
        "Stop fraud by detecting expired, blocked, or invalid DLs in seconds.",
    },
    {
      title: "Fast & Secure Checks",
      description:
        "Quick verification with bank-grade security using 7UniqueVerify’s DL API.",
    },
    {
      title: "Transport Compliance",
      description:
        "Meet regulatory standards with verified driver license data.",
    },
  ];

  const services: ServiceItem[] = [
    {
      name: "Ride-sharing Platforms",
      icon: <FaCar className="text-[#b7603d] text-4xl" />,
      description:
        "Onboard and verify drivers for services like Ola, Uber, and Rapido with real-time Driving  License API checks.",
    },
    {
      name: "Vehicle Rental Services",
      icon: <FaHandshake className="text-[#b7603d] text-4xl" />,
      description:
        "Validate customer DLs for car, bike, and commercial vehicle rentals to prevent fraud.",
    },
    {
      name: "Insurance Companies",
      icon: <FaBriefcaseMedical className="text-[#b7603d] text-4xl" />,
      description:
        "Ensure valid DL data for policy issuance, risk evaluation, and smooth claims processing.",
    },
    {
      name: "Logistics & Delivery",
      icon: <FaTruck className="text-[#b7603d] text-4xl" />,
      description:
        "Verify drivers' licenses for last-mile delivery, courier, and interstate logistics operations.",
    },
    {
      name: "Fleet Management",
      icon: <FaUsers className="text-[#b7603d] text-4xl" />,
      description:
        " Monitor and verify corporate drivers’ licenses for compliance and safety management.",
    },
    {
      name: "Employment Verification",
      icon: <FaUserTie className="text-[#b7603d] text-4xl" />,
      description:
        "Verify DLs during hiring for driving roles in transport, delivery, and service-based jobs.",
    },
  ];

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
                Driving License Verification API for Fast & Compliant Checks
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
                Real-time DL Authentication by 7Unique Verify
              </h2>
              <p className="text-lg mb-4 text-white">
                Verify Indian driving license details instantly with
                7UniqueVerify’s secure, RTO-compliant API. Validate DL number,
                holder name, issue/expiry date, and license class — directly
                matched against official RTO records.
              </p>
              <p className="mb-4 text-white">
                Ideal for fleet operators, rentals, logistics, insurance &
                ride-hailing platforms across India.
              </p>
              {/* <p className="mb-6 text-white">
                Ideal for fleet operators, ride-hailing apps, logistics, vehicle
                rentals, and any business needing trusted driver identity
                verification.
              </p> */}
              <div className="flex  gap-4">
                <Link
                  to="/contact-us"
                  className="inline-block bg-[#b7603d] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#d19983] transition-colors"
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
                src="../img/driving-license-verification/img1_Artboard 1.png"
                alt="Driving License Verification"
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
                    Features of Driving License Verification API
                  </h2>
                </div>
                <p className="p-4">
                  Comprehensive solutions to verify driving licenses with
                  accuracy and speed
                </p>
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
                          src="../img/driving-license-verification/img2_Artboard 1.png"
                          alt="Driving License Verification Illustration"
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
                        {features.map((feature, index) => (
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
                              <h3 className="font-semibold mb-1">
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
        {/* Verification Types Section */}
        <section
          className="bg-[#f7f1ef]








 py-16 px-4 md:px-8 lg:px-20"
        >
          <div className="w-full mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              Choose Your{" "}
              <span className="text-[#b7603d]">Verification Method</span>
            </h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <div
                    className="w-12 h-12 bg-[#f7f1ef]








 rounded-full flex items-center justify-center mr-4"
                  >
                    <span className="text-[#b7603d]   font-bold">🚗</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Basic License Verification
                    </h3>
                    <span className="text-sm text-[#b7603d]   font-medium">
                      License Validation
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Validates driving license number format and checks if the
                  license exists in the RTO database.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">2-3 seconds</span>
                  </div>
                
                  <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">Basic license checks</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div
                    className="w-12 h-12 bg-[#f7f1ef]








   rounded-full flex items-center justify-center mr-4"
                  >
                    <span className="text-[#b7603d]   font-bold">📊</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Detailed License Verification
                    </h3>
                    <span className="text-sm text-[#b7603d]   font-medium">
                      Comprehensive Check
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Provides complete license details including driver
                  information, vehicle classes, and validity dates.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">3-4 seconds</span>
                  </div>
                
                  <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">
                      Complete driver verification
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
                    Basic Verification:
                  </h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ License validity status</li>
                    <li>✓ Basic format validation</li>
                    <li>✓ Active/Suspended status</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">
                    Detailed Verification:
                  </h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ Complete driver name</li>
                    <li>✓ License class and validity</li>
                    <li>✓ Issue and expiry dates</li>
                    <li>✓ RTO office details</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <KnowMore />

        {/* How It Works Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-6xl space-y-8">
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
                  How 7UniqueVerify's License Verification Works
                </h2>
              </div>
              <p className="p-4 text-start">
                Simple steps to verify driving licenses with our robust API
              </p>
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#b7603d] to-[#d88a6e] mx-auto rounded-full" />
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-5"
            >
              {steps.map((step, index) => (
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
                    {step.icon}
                  </motion.div>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#b7603d] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    {step.description}
                  </p>

                  <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-[#b7603d]/10 group-hover:bg-[#b7603d]/20 transition-all duration-500" />
                </motion.div>
              ))}
            </motion.div>
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
                  Benefits of Using 7UniqueVerify for License Verification
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
                    {benefits.map((benefit, index) => (
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
                    src="../img/driving-license-verification/img3_Artboard 1.png"
                    alt="Driving License Verification Benefits"
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
                      <FaCar className="h-6 w-6 text-[#b7603d]" />
                    </div>
                    Industry Applications
                  </h2>
                </div>
                <p className="p-4 text-start">
                  Discover how different industries leverage our driving license
                  verification API
                </p>
                <div className="w-24 h-1.5 bg-gradient-to-r from-[#b7603d] to-[#d88a6e] mx-auto rounded-full" />
              </motion.div>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5"
              >
                {services.map((service, index) => (
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
                  Seamless 7UniqueVerify API Integration
                </h2>
              </div>
              <div className="p-8">
                <div className="grid gap-10 grid-cols-1 md:grid-cols-2 text-left">
                  <div className="bg-white p-6 rounded-lg shadow-xl transition duration-300 hover:shadow-2xl border border-gray-100 hover:border-[#b7603d]/30">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <FaServer className="h-5 w-5 text-[#b7603d]" />
                      Simple Integration
                    </h3>
                    <p className="text-gray-600 mt-5">
                      Integrate 7UniqueVerify's Driving License Verification API
                      into your platform effortlessly. Our solution supports
                      license checks across all Indian states with rich and
                      real-time driver data.
                    </p>
                    <div className="mt-5 space-y-2 ">
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
                          <pre>{`curl -X POST https://api.7uniqueverify.com/v1/dl/verify \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "license_number": "DL1420110012345",
    "date_of_birth": "1990-01-01"
  }'

Response:
{
  "status": "success",
  "data": {
    "license_number": "DL1420110012345",
    "name": "John Doe",
    "is_valid": true,
    "expiry_date": "2025-12-31",
    "license_class": "LMV",
    "issuing_rto": "Delhi"
  }
}`}</pre>
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

export default DrivingLicenseVerificationPage;
