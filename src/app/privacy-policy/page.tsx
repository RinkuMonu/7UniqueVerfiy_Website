import type React from "react";
import { motion } from "framer-motion";

const PrivacyPolicyPage: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative overflow-hidden bg-gray-50 min-h-screen">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#b7603d] mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-1/4 right-20 w-72 h-72 rounded-full bg-[#b7603d] mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-3000"></div>
        <div className="absolute top-1/3 left-1/2 w-60 h-60 rounded-full bg-[#b7603d] mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-6000"></div>
      </div>

      {/* Diagonal accent shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 -mr-32 -mt-32 bg-[#b7603d]/10 transform rotate-45 rounded-lg"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 -ml-32 -mb-32 bg-[#b7603d]/10 transform rotate-45 rounded-lg"></div>

      <main className="relative max-w-5xl mx-auto px-4 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-10 md:pb-24 pt-16">
        {/* Animated header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Privacy Policy</h1>
          <div className="w-32 h-1.5 bg-[#b7603d] mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </motion.div>

        {/* Policy content with staggered animations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="prose prose-lg max-w-none bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 sm:p-10 border border-gray-100"
        >
          <div className="space-y-8 text-gray-700">
            <motion.section variants={itemVariants}>
              <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3 py-1">
                1. Introduction
              </h2>
              <p>
                This Privacy Policy outlines how <strong className="text-[#b7603d]">7Unique Verify</strong> ("we", "our", or "us") collects, uses, and protects
                your personal data when you access or use our identity verification services and website. By using our platform,
                you agree to the practices described in this policy.
              </p>
            </motion.section>

            <motion.section variants={itemVariants}>
              <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3 py-1">
                2. Information We Collect
              </h2>
              <p>
                We collect the following types of information:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2 mr-2"></span>
                  <span><strong>Personal Information:</strong> Full name, contact number, email address, government-issued IDs (such as Aadhaar, PAN, etc.).</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2 mr-2"></span>
                  <span><strong>Business Details:</strong> Company name, industry, business address, and user role.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2 mr-2"></span>
                  <span><strong>Technical Data:</strong> IP address, browser type, usage logs, and device data collected automatically when you use our services.</span>
                </li>
              </ul>
            </motion.section>

            <motion.section variants={itemVariants}>
              <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3 py-1">
                3. How We Use Your Information
              </h2>
              <p>
                Your data helps us to:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2 mr-2"></span>
                  <span>Verify identities through APIs such as Aadhaar, PAN, CKYC, etc.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2 mr-2"></span>
                  <span>Operate, maintain, and enhance our platform and services.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2 mr-2"></span>
                  <span>Communicate with you regarding support, updates, and service-related information.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2 mr-2"></span>
                  <span>Comply with regulatory and legal obligations.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2 mr-2"></span>
                  <span>Detect, prevent, and address security and fraud risks.</span>
                </li>
              </ul>
            </motion.section>

            <motion.section variants={itemVariants}>
              <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3 py-1">
                4. Sharing of Information
              </h2>
              <p>
                We do <strong>not</strong> sell your personal data. We may share your information with:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2 mr-2"></span>
                  <span>Trusted service providers under strict confidentiality agreements.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2 mr-2"></span>
                  <span>Regulatory or legal authorities as required by law.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2 mr-2"></span>
                  <span>In the event of a business merger, acquisition, or transfer.</span>
                </li>
              </ul>
            </motion.section>

            {/* Continue with the same pattern for other sections */}

            <motion.section variants={itemVariants}>
              <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3 py-1">
                11. Contact Us
              </h2>
              <p>
                If you have any questions, concerns, or requests regarding this privacy policy, you can reach out to our
                support team via email at <a href="mailto:support@7uniqueverify.com" className="text-[#b7603d] font-medium hover:underline">support@7uniqueverify.com</a> or through the contact page on our website.
              </p>
            </motion.section>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;