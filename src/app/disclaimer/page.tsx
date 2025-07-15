import type React from "react";
import { motion } from "framer-motion";

const DisclaimerPage: React.FC = () => {
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

      <main className="relative max-w-5xl mx-auto px-4 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-10 sm:pb-24 pt-16">
        {/* Animated header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Disclaimer</h1>
          <div className="w-24 h-1.5 bg-[#b7603d] mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </motion.div>

       
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="prose prose-lg max-w-none bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 sm:p-10 border border-gray-100"
        >
          <div className="space-y-8 text-gray-700">
            <motion.section variants={itemVariants}>
              <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3 py-1">
                General Information
              </h2>
              <p>
                The content on this website is provided for general informational purposes only. While every effort is made to keep the information accurate and current, <strong className="text-[#b7603d]">7Unique Verify</strong> makes no warranties—express or implied—regarding completeness, reliability, suitability, or availability of the content, services, products, or related graphics on this site.
              </p>
            </motion.section>

            <motion.section variants={itemVariants}>
              <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3 py-1">
                Service Limitations
              </h2>
              <p>
                Use of any information or services provided is strictly at your own risk. Under no circumstances shall <strong className="text-[#b7603d]">7Unique Verify</strong> be held liable for any direct, indirect, incidental, or consequential loss or damage, including but not limited to loss of data or business profits, arising from the use of this website.
              </p>
            </motion.section>

            <motion.section variants={itemVariants}>
              <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3 py-1">
                External Links
              </h2>
              <p>
                This website may contain links to third-party websites that are not under the control of <strong className="text-[#b7603d]">7Unique Verify</strong>. We are not responsible for the nature, accuracy, or content of those external sites. Inclusion of such links does not imply endorsement or recommendation of the views expressed therein.
              </p>
            </motion.section>

            <motion.section variants={itemVariants}>
              <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3 py-1">
                Data Accuracy
              </h2>
              <p>
                While our APIs aim to deliver high-accuracy verification results, we do not guarantee the absolute accuracy of third-party data sources. Users are encouraged to independently verify any critical data before taking business or legal decisions.
              </p>
            </motion.section>

            <motion.section variants={itemVariants}>
              <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3 py-1">
                Service Availability
              </h2>
              <p>
                We strive to ensure uninterrupted access to our website and APIs. However, <strong className="text-[#b7603d]">7Unique Verify</strong> is not liable for temporary unavailability caused by technical issues beyond our control, including system downtime or external disruptions.
              </p>
            </motion.section>

            <motion.section variants={itemVariants}>
              <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3 py-1">
                Contact Information
              </h2>
              <p>
                For questions or concerns regarding this disclaimer, please contact our support team via the details available on the <a href="/contact-us" className="text-[#b7603d] font-medium hover:underline">Contact Us</a> page.
              </p>
              <div className="mt-6 p-4 bg-[#b7603d]/5 rounded-lg border border-[#b7603d]/20">
                <h3 className="font-medium text-[#b7603d] mb-2">Important Notice:</h3>
                <p className="text-gray-700">This disclaimer may be updated periodically. Please review this page regularly to stay informed about any changes.</p>
              </div>
            </motion.section>
          </div>
        </motion.div>
      </main>
    </div>
  );
};
export default DisclaimerPage;