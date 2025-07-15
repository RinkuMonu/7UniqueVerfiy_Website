import React from "react";
import {
  FaPassport,
  FaBroadcastTower,
  FaWallet,
  FaUserCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";

const LookupAPIs: React.FC = () => {
  const apiServices = [
    {
      name: "Passport Verification",
      icon: <FaPassport className="w-8 h-8" />,
      description:
        "Cross-check passport details using mobile linkage—ideal for identity validation during onboarding.",
    },
    {
      name: "Telecom Details",
      icon: <FaBroadcastTower className="w-8 h-8" />,
      description:
        "Instantly retrieve SIM circle, operator type, and provider information linked to a number.",
    },
    {
      name: "Mobile to UPI/VPA",
      icon: <FaWallet className="w-8 h-8" />,
      description:
        "Fetch the UPI ID (VPA) tied to a mobile number—perfect for verifying transaction identities.",
    },
    {
      name: "Mobile to UAN",
      icon: <FaUserCircle className="w-8 h-8" />,
      description:
        "Identify the Universal Account Number (UAN) mapped with a mobile—useful in employee and PF-related verifications.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
           <div className="bg-gradient-to-r from-orange-50 to-red-50 px-6 py-4">
            <h2 className="flex items-center gap-3 text-2xl font-semibold">
              <div className="rounded-full bg-[#b7603d]/10 p-2">
                  <svg className="h-6 w-6 text-[#b7603d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.25-4.5a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 7.5v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H12"
                    />
                  </svg>
                </div>
              Lookup with Confidence via 7Unique Verify
            </h2>
          </div>

          <p className="text-lg text-gray-600 max-w-2xl mt-5">

            Powerful verification APIs to enhance your onboarding and KYC processes
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {apiServices.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col items-center text-center border border-[#f0e6e1] group-hover:border-[#d48b6a]/30">
                <div className="mb-6 p-4 rounded-full bg-gradient-to-br from-[#f9f5f3] to-[#f0e6e1] text-[#b7603d] group-hover:from-[#f0e6e1] group-hover:to-[#d48b6a] group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>
               
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LookupAPIs;