import React from "react";
import {
  FaFileInvoiceDollar,
  FaRegFileAlt,
  FaUserCheck,
  FaChartLine,
  FaQuestionCircle,
} from "react-icons/fa";
import { MdOutlineAnalytics } from "react-icons/md";
import { motion } from "framer-motion";
import SEO from "../app/Helmet/helment";
import { useContext } from "react";
import { ContextData } from "../config/context";
import { SEOData } from "../type";

const FinancialChecksAPIs: React.FC = () => {
  const { seo } = useContext(ContextData) as { seo: SEOData };
  const financialAPIs = [
    {
      name: "ITR Compliance Check",
      icon: <FaUserCheck className="text-3xl" />,
      description: "Verify ITR filing compliance for individuals or businesses via PAN-based lookups.",
    },
    {
      name: "ITR Details Retrieval",
      icon: <FaRegFileAlt className="text-3xl" />,
      description: "Fetch complete ITR documents to assess income trends and historical filings.",
    },
    {
      name: "ITR Profile Summary",
      icon: <MdOutlineAnalytics className="text-3xl" />,
      description: "Access structured financial summaries from ITR data to support credit decisions.",
    },
    {
      name: "Credit Report (Equifax)",
      icon: <FaFileInvoiceDollar className="text-3xl" />,
      description: "Get detailed credit bureau reports from Equifax for lending and underwriting workflows.",
    },
    {
      name: "Credit Score API",
      icon: <FaChartLine className="text-3xl" />,
      description: "Retrieve real-time credit scores to evaluate financial reliability and eligibility.",
    },
    {
      name: "FAQs & API Guidance",
      icon: <FaQuestionCircle className="text-3xl" />,
      description: "Browse frequently asked questions and integration support for all financial APIs.",
    },
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
    <>
      <SEO seo={seo} />
      <section className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl space-y-8">
          <span className="text-sm font-semibold text-[#b7603d] uppercase tracking-wider">
            Financial Services
          </span>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
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
                  APIs Under Financial Checks
                </h2>
              </div>



              <div className="mx-auto mt-4 h-1 w-24 bg-[#b7603d] rounded-full"></div>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-5"
            >
              {financialAPIs.map((api, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className="h-full bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-[#b7603d]/20 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#b7603d] to-[#fcd3c2]"></div>
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-amber-50 rounded-full text-[#b7603d] group-hover:bg-[#b7603d] group-hover:text-white transition-colors duration-300">
                        {api.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                      {api.name}
                    </h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                      {api.description}
                    </p>
                    <div className="mt-6 flex justify-center">

                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FinancialChecksAPIs;