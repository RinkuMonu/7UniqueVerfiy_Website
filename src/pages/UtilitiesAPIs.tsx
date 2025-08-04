import React from "react";
import { motion } from "framer-motion";
import {
  FaMoneyCheckAlt,
  FaMobileAlt,
  FaGlobeAmericas,
  FaCheckDouble,
  FaMapMarkedAlt,
  FaMapPin,
  FaGasPump,
  FaCar,
  FaRoad,
  FaMapMarkerAlt,
  FaChartLine,
  FaCreditCard,
  FaUniversity,
  FaEnvelope,
  FaUpload,
  FaIdCard,
  FaTruckMoving,
  FaFileInvoiceDollar,
} from "react-icons/fa";
const UtilitiesAPISection: React.FC = () => {
  const utilitiesAPIs = [
    // {
    //   name: "Currency Exchange API",
    //   icon: <FaMoneyCheckAlt />,
    //   description:
    //     "Fetch real-time currency conversion rates for global pricing and forex operations.",
    // },
    {
      name: "IMEI Validator API",
      icon: <FaMobileAlt />,
      description:
        "Check mobile device authenticity by validating IMEI numbers.",
    },
    {
      name: "IEC Verification API",
      icon: <FaGlobeAmericas />,
      description:
        "Verify Importer Exporter Codes (IEC) for cross-border business legitimacy.",
    },
    // {
    //   name: "LEI Verification API",
    //   icon: <FaCheckDouble />,
    //   description:
    //     "Authenticate Legal Entity Identifiers (LEIs) for business due diligence.",
    // },
    {
      name: "IP LookUp",
      icon: <FaMapMarkedAlt />,
      description:
        "Retrieve geographical and network details for a given IP address.",
    },
    {
      name: "Reverse Geo Code Verification",
      icon: <FaMapPin />,
      description:
        "Convert geographic coordinates into human-readable location information.",
    },
    {
      name: "Fuel Price API",
      icon: <FaGasPump />,
      description:
        "Get daily fuel prices across cities for petrol, diesel, and LPG.",
    },
    {
      name: "RTO Information API",
      icon: <FaCar />,
      description:
        "Access detailed information for any Regional Transport Office (RTO).",
    },
    // {
    //   name: "Fastag Information API",
    //   icon: <FaRoad />,
    //   description:
    //     "Check vehicle Fastag registration and wallet status using vehicle number.",
    // },
    {
      name: "Pincode Info API",
      icon: <FaMapMarkerAlt />,
      description:
        "Get city, state, and area details from Indian postal pin codes.",
    },
    // {
    //   name: "Stock Price API",
    //   icon: <FaChartLine />,
    //   description:
    //     "Fetch live stock market prices, trends, and summaries for listed companies.",
    // },
    {
      name: "Card Validator API",
      icon: <FaCreditCard />,
      description:
        "Validate debit/credit card details and issuing bank information.",
    },
    {
      name: "IFSC Code Lookup API",
      icon: <FaUniversity />,
      description:
        "Find bank details such as branch, address, and MICR using IFSC codes.",
    },
    {
      name: "Email Authentication",
      icon: <FaEnvelope />,
      description:
        "Verify email address validity and detect temporary/disposable domains.",
    },
    // {
    //   name: "Email Bulk Upload Verification",
    //   icon: <FaUpload />,
    //   description:
    //     "Validate large lists of email addresses with bulk upload support.",
    // },
    // {
    //   name: "Pan Verification - Normal - Bulk Upload",
    //   icon: <FaIdCard />,
    //   description:
    //     "Quickly validate multiple PAN numbers using bulk CSV/XLS upload.",
    // },
    // {
    //   name: "Pan Verification - Detailed - Bulk Upload",
    //   icon: <FaIdCard />,
    //   description:
    //     "Get detailed PAN info (name, DOB, status) in batch using document upload.",
    // },
    // {
    //   name: "PAN Verification - Comprehensive - Bulk Upload",
    //   icon: <FaIdCard />,
    //   description:
    //     "Perform comprehensive PAN checks across departments via bulk upload.",
    // },
    // {
    //   name: "RC Verification - Detailed - Bulk Upload",
    //   icon: <FaTruckMoving />,
    //   description:
    //     "Extract full vehicle registration certificate details in batch mode.",
    // },
    // {
    //   name: "Bank Account Verification - Penny Drop - Bulk Upload",
    //   icon: <FaFileInvoiceDollar />,
    //   description:
    //     "Verify bank accounts via penny drop method at scale using file upload.",
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
              Empower Your Business with Next-Gen Utilities APIs
            </h2>
          </div>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#b7603d] to-[#d88a6e] mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {utilitiesAPIs.map((api, index) => (
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
                className="flex justify-center mb-6 text-[#b7603d] text-4xl"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {api.icon}
              </motion.div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#b7603d] transition-colors duration-300">
                {api.name}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                {api.description}
              </p>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-[#b7603d]/10 group-hover:bg-[#b7603d]/20 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default UtilitiesAPISection;
