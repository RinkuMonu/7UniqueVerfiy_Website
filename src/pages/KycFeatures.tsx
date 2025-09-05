import React from "react";
import { FaIdCard, FaFingerprint, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const KycFeatures: React.FC = () => {
  const features = [
    {
      title: "Secure Document Verification",
      description:
        "Authenticate customer identity documents like Aadhaar, PAN, passports, and driving licenses through automated, real-time checks. Ensure regulatory compliance with minimal manual review.",
      icon: <FaIdCard className="text-[#b7603d] text-2xl" />,
    },
    {
      title: "Biometric Authentication with Precision",
      description:
        "Verify users using facial recognition, fingerprint scans, or iris data. Our biometric KYC solutions deliver unmatched accuracy—reducing fraud and enabling seamless onboarding.",
      icon: <FaFingerprint className="text-[#b7603d] text-2xl" />,
    },
    {
      title: "Accurate Address Validation",
      description:
        "Match user addresses against verified government and financial databases. Ideal for digital KYC, credit checks, and last-mile delivery where address precision matters most.",
      icon: <FaMapMarkerAlt className="text-[#b7603d] text-2xl" />,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-4 md:px-8 lg:px-20 overflow-hidden">
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-7xl space-y-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
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
                Choose Excellence: KYC API Suite
              </h2>
            </div>

            <div className="p-8">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={container}
                className="w-full flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16"
              >
                {/* Image Section */}
                <motion.div
                  variants={item}
                  className="w-full lg:w-1/2 relative"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <motion.img
                      src="/ui/KYC/IMG4_Artboard 1.png"
                      alt="KYC Verification Illustration"
                      className="w-full h-auto object-contain"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#b7603d]/10 to-transparent pointer-events-none" />
                  </div>
                  <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 rounded-full bg-[#b7603d]/10 blur-3xl" />
                </motion.div>

                {/* Content Section */}
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
  );
};

export default KycFeatures;
