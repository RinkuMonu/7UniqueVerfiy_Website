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
        "Instantly validate Indian driving license numbers by connecting with authorized RTO databases. Prevent fraud and ensure active, up-to-date license status.",
    },
    {
      icon: <FaDatabase className="text-[#b7603d] text-2xl" />,
      title: "Detailed Driver Profile",
      description:
        "Fetch complete driver information including name, date of birth, license type, issue/expiry dates, and any RTO remarks or restrictions.",
    },
    {
      icon: <FaLock className="text-[#b7603d] text-2xl" />,
      title: "Compliance & Safety Check",
      description:
        "Ensure your business is aligned with transport regulatory standards. Ideal for companies in logistics, mobility, insurance, and financial services.",
    },
  ];

  const steps: StepItem[] = [
    {
      step: "1",
      title: "Submit DL Details",
      description:
        "Enter the driving license number along with name and date of birth on the 7Unique Verify platform.",
      icon: <FaIdCard className="text-[#b7603d] text-4xl" />,
    },
    {
      step: "2",
      title: "Verify via RTO Databases",
      description:
        "7Unique Verify connects securely with authorized RTO sources to validate the submitted license details.",
      icon: <FaDatabase className="text-[#b7603d] text-4xl" />,
    },
    {
      step: "3",
      title: "Status Check & Validation",
      description:
        "Automatically checks the license's validity, issuance data, and any existing endorsements or blocks.",
      icon: <FaSearch className="text-[#b7603d] text-4xl" />,
    },
    {
      step: "4",
      title: "Get Real-Time Report",
      description:
        "Instantly receive a verified status report from 7Unique Verify with complete driver and license details.",
      icon: <FaFileAlt className="text-[#b7603d] text-4xl" />,
    },
  ];

  const benefits: BenefitItem[] = [
    {
      title: "Enhanced Road Safety",
      description:
        "7Unique Verify helps ensure that only certified drivers are allowed, reducing accidents and liabilities.",
    },
    {
      title: "Regulatory Compliance",
      description:
        "Stay compliant with transport and insurance rules using verified license data through 7Unique Verify.",
    },
    {
      title: "Fraud Prevention",
      description:
        "Avoid fraudulent or expired licenses by verifying every detail via 7Unique Verify's secure system.",
    },
    {
      title: "Real-time Validation",
      description:
        "Instantly fetch valid status, expiry, and issuance details for faster onboarding and verification.",
    },
  ];

  const services: ServiceItem[] = [
    {
      name: "Ride-sharing Platforms",
      icon: <FaCar className="text-[#b7603d] text-4xl" />,
      description:
        "Driver onboarding and continuous verification for Uber, Ola, and other ride-sharing services.",
    },
    {
      name: "Vehicle Rental Services",
      icon: <FaHandshake className="text-[#b7603d] text-4xl" />,
      description:
        "Customer verification for car rentals, bike rentals, and commercial vehicle leasing.",
    },
    {
      name: "Insurance Companies",
      icon: <FaBriefcaseMedical className="text-[#b7603d] text-4xl" />,
      description:
        "Policy underwriting and claims processing with verified driver credentials.",
    },
    {
      name: "Logistics & Delivery",
      icon: <FaTruck className="text-[#b7603d] text-4xl" />,
      description:
        "Driver verification for delivery services, trucking companies, and logistics providers.",
    },
    {
      name: "Fleet Management",
      icon: <FaUsers className="text-[#b7603d] text-4xl" />,
      description:
        "Corporate fleet driver verification and compliance monitoring for businesses.",
    },
    {
      name: "Employment Verification",
      icon: <FaUserTie className="text-[#b7603d] text-4xl" />,
      description:
        "Background checks for jobs requiring driving, including delivery and transportation roles.",
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
                Driving License Verification API
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
                Real-time DL Authentication by 7Unique Verify
              </h2>
              <p className="text-lg mb-4 text-white">
                Instantly verify driving license details across India with
                7Unique Verify's secure and scalable API. Validate genuine
                drivers and stay compliant with transport norms effortlessly.
              </p>
              <p className="mb-4 text-white">
                Our DL API cross-verifies license numbers with official RTO
                data, checks license validity, class, holder info, and flags any
                disqualifications or restrictions.
              </p>
              <p className="mb-6 text-white">
                Ideal for fleet operators, ride-hailing apps, logistics, vehicle
                rentals, and any business needing trusted driver identity
                verification.
              </p>
              <Link
                to="/driving-license-verification-api"
                className="inline-block bg-[#b7603d] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#d19983] transition-colors"
              >
                Get Started
              </Link>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="../img/Driving5.png"
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
                    Powerful Driving License Verification Features
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
                          src="../img/images/21.png"
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
                    src="../img/Driving3.png"
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