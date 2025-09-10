import React from "react";
import { FaRegSmileWink } from "react-icons/fa";
import { MdIntegrationInstructions } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const OCRFeatures: React.FC = () => {
  const features = [
    {
      title: "Effortless to Use, Built for India’s Digital Needs",
      description: (
        <>
        <Link to='/'>7uniqueverify’s</Link>   AI OCR is simple to deploy. Whether you're automating KYC, onboarding users, or verifying documents, it fits into your workflow without extra complexity.
        </>
      ),
      icon: <FaRegSmileWink className="text-[#b7603d] text-2xl" />,
    },
    {
      title: "Seamless Integration, Faster Results",
      description:
        "Plug into your app or backend in minutes. Our OCR API helps Jaipur startups and Indian enterprises reduce manual tasks and speed up operations with real-time accuracy.",
      icon: <MdIntegrationInstructions className="text-[#b7603d] text-2xl" />,
    },
    {
      title: "Real-Time Document Automation",
      description:
        "Upload and process documents instantly. 7uniqueverify extracts and verifies critical data in seconds — combining precision, speed, and industry-grade reliability.",
      icon: <AiOutlineThunderbolt className="text-[#b7603d] text-2xl" />,
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
                Unlocking the Power of AI-Driven OCR with 7uniqueverify
              </h2>
            </div>
            <motion.div
              className="w-full flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 p-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <motion.div className="w-full lg:w-1/2" variants={itemVariants}>
                <div className="relative">
                  <img
                    src="/img/AI-Driven OCR/AI-Driven5.png"
                    alt="AI OCR Document Automation"
                    className="w-full h-auto object-contain rounded-xl"
                  />
                  <div className="absolute -inset-4 -z-10 bg-gradient-to-r from-[#b7603d] to-amber-200 rounded-xl blur-md opacity-20"></div>
                </div>
              </motion.div>

              <motion.div
                className="w-full lg:w-1/2 space-y-10"
                variants={itemVariants}
              >
                <div className="space-y-8">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="group flex gap-4 p-4 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300"
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="p-3 bg-amber-50 rounded-full group-hover:bg-[#b7603d] group-hover:text-white transition-colors duration-300">
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
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OCRFeatures;