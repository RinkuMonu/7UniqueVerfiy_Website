import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaPassport,
  FaIdCard,
  FaCar,
  FaUniversity,
  FaMapMarkerAlt,
  FaQrcode,
  FaFingerprint,
  FaSearch,
  FaRegCreditCard,
  FaDownload,
  FaMapSigns,
  FaInfoCircle,
} from "react-icons/fa";

const APIsUnderKyc: React.FC = () => {
  const apiServices = [
    {
      name: "Passport Verification",
      icon: <FaPassport />,
      description: (
        <>Instantly validate <Link className="cursor-pointer font-bold text-black" to="/passport-verification">passports for identity</Link> checks.</>
      ),
    },
    {
      name: "PAN Verification",
      icon: <FaIdCard />,
      description:(
        <>
        <Link className="cursor-pointer font-bold text-black" to={"/pan-verification"}>Verify PAN details</Link> in real-time to ensure legal and tax compliance.
        </>
      ),
    },
    {
      name: "Driving Licence Verification",
      icon: <FaCar />,
      description:(
        <>
          <Link className="cursor-pointer font-bold text-black" to='/driving-license-verification'>Authenticate DL records</Link> via government databases for secure user validation.
        </>
      ),
    },
    {
      name: "Bank Account Verification",
      icon: <FaUniversity />,
      description:(
        <>
         <Link  className="cursor-pointer font-bold text-black"  to={"/bank-account-verification"}> Confirm beneficiary</Link> bank accounts using penny-drop or penny-less methods.
        </>
      ),
    },
    {
      name: "Aadhaar Verification",
      icon: <FaMapMarkerAlt />,
      description:(
        <>
          <Link className="cursor-pointer font-bold text-black"  to="/aadhaar-verification">Verify Aadhaar number </Link>with consent-based checks through UIDAI gateway.
        </>
      ),
    },
    {
      name: "Aadhaar QR Search",
      icon: <FaQrcode />,
      description:
        "Scan Aadhaar QR codes and extract demographic info for fast onboarding.",
    },
    {
      name: "Aadhaar Without OTP",
      icon: <FaFingerprint />,
      description:
        "Enable biometric or offline Aadhaar verification without user OTP.",
    },
    // {
    //   name: "EKYC Search",
    //   icon: <FaSearch />,
    //   description:
    //     "Fetch electronic KYC data using Digilocker consent and secure APIs.",
    // },
    {
      name: "UPI / VPA Verification",
      icon: <FaRegCreditCard />,
      description:
        "Validate UPI IDs and VPA handles to ensure ownership and accuracy.",
    },
    // {
    //   name: "CKYC Download",
    //   icon: <FaDownload />,
    //   description:
    //     "Download Central KYC (CKYC) data from the registry for due diligence.",
    // },
    {
      name: "RC Verification",
      icon: <FaMapSigns />,
      description:(
        <>Check <Link className="cursor-pointer font-bold text-black"  to='/rc-verification'>vehicle ownership and RC status</Link>  with RTO-integrated APIs.</>
      ),
    },
    // {
    //   name: "UPI Info API",
    //   icon: <FaInfoCircle />,
    //   description:
    //     "Access UPI-linked details including bank names and VPA meta info.",
    // },
  ];

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
                APIs Under KYC Verification
              </h2>
            </div>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#b7603d] to-[#d88a6e] mx-auto rounded-full" />
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {apiServices.map((service, index) => (
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
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#f7f1ef] to-[#f0e4df] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                {/* Icon with animation */}
                <motion.div
                  className="flex justify-center mb-6 text-[#b7603d]  text-4xl"
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

                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-[#b7603d]/10 group-hover:bg-[#b7603d]/20 transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default APIsUnderKyc;
