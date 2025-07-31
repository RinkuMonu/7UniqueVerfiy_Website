import type React from "react";
import { motion } from "framer-motion";
import { ContextData } from "../../config/context";
import { SEOData } from "../../type";
import SEO from "../Helmet/helment";
import { useContext } from "react";

const RefundCancellationPage: React.FC = () => {
  const { seo } = useContext(ContextData) as { seo: SEOData };
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
    <>
      <SEO seo={seo} />
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
            <h1 className="text-4xl font-bold mb-4 text-gray-900">Refund and Cancellation Policy</h1>
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
                  1. Cancellation Policy
                </h2>
                <p>
                  You can cancel your subscription or service at any time directly from your account dashboard. Alternatively, you can reach out to our customer support team for assistance.
                </p>
                <p>
                  Please note that any cancellation will take effect at the end of your current billing cycle. For monthly subscriptions, this means you will continue to have access to the service until the end of the current month. For annual subscriptions, cancellation will be effective at the end of the year.
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3 py-1">
                  2. Refund Eligibility
                </h2>
                <p>
                  Refunds may be provided under specific circumstances, including but not limited to:
                </p>
                <ul className="space-y-3 mt-3">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-5 h-5 mr-2 mt-0.5 bg-[#b7603d]/10 text-[#b7603d] rounded-full text-sm font-medium">1</span>
                    <span>Service outages or technical issues that prevent access to the service for an extended period.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-5 h-5 mr-2 mt-0.5 bg-[#b7603d]/10 text-[#b7603d] rounded-full text-sm font-medium">2</span>
                    <span>Billing errors such as incorrect charges or overbilling.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-5 h-5 mr-2 mt-0.5 bg-[#b7603d]/10 text-[#b7603d] rounded-full text-sm font-medium">3</span>
                    <span>Cancellation within the first 7 days of a new subscription (with no usage of the service).</span>
                  </li>
                </ul>
                <p className="mt-4">
                  Please note that API usage charges for successfully completed transactions are non-refundable, as these are processed in real-time and cannot be reversed.
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3 py-1">
                  3. Refund Process
                </h2>
                <p>
                  To initiate a refund request, please contact our customer support team and provide the following details:
                </p>
                <ul className="space-y-3 mt-3">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span>Your account information (email address, username, or account ID).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span>A detailed reason for your refund request.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span>Any supporting documents or screenshots related to your issue (if applicable).</span>
                  </li>
                </ul>
                <p className="mt-4">
                  Once your request is received, our team will review it and provide a response within 5-7 business days. If your request is approved, the refund will be processed within 10-15 business days.
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3 py-1">
                  4. Pro-rated Refunds
                </h2>
                <p>
                  In cases where a refund is applicable for part of the subscription period (e.g., if you cancel mid-month), we will calculate the refund amount on a pro-rated basis for the unused portion of your subscription. This ensures fairness for both parties.
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3 py-1">
                  5. Non-refundable Items
                </h2>
                <p>
                  The following items are typically non-refundable:
                </p>
                <ul className="space-y-3 mt-3">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-5 h-5 mr-2 mt-0.5 bg-red-100 text-red-600 rounded-full text-sm font-medium">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>Completed API transactions (once the service is used or the transaction is processed).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-5 h-5 mr-2 mt-0.5 bg-red-100 text-red-600 rounded-full text-sm font-medium">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>Setup fees and customization charges for services that require specialized work or adjustments.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-5 h-5 mr-2 mt-0.5 bg-red-100 text-red-600 rounded-full text-sm font-medium">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>Custom development work, unless agreed upon by both parties before the commencement of the work.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-5 h-5 mr-2 mt-0.5 bg-red-100 text-red-600 rounded-full text-sm font-medium">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>Services or subscriptions used beyond the trial period, unless there is a service failure or issue on our end.</span>
                  </li>
                </ul>
              </motion.section>

              {/* Continue with the same pattern for other sections */}

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3 py-1">
                  8. Contact for Refunds
                </h2>
                <p>
                  For all refund and cancellation requests, please reach out to our support team through the contact details provided on our website. Be sure to include your account information and clearly state the reason for your refund or cancellation request.
                </p>
                <p className="mt-4">
                  Our customer support team is available 24/7 and is dedicated to resolving your concerns as quickly as possible.
                </p>
                <div className="mt-6 p-4 bg-[#b7603d]/5 rounded-lg border border-[#b7603d]/20">
                  <h3 className="font-medium text-[#b7603d] mb-2">Support Contact:</h3>
                  <p className="text-gray-700">Email: <a href="mailto:info@7uniqueverfiy.com" className="text-[#b7603d] hover:underline">info@7uniqueverfiy.com</a></p>
                  <p className="text-gray-700">Phone: 0141-4511098</p>
                </div>
              </motion.section>
            </div>
          </motion.div>
        </main>
      </div>
    </>
  );
};

export default RefundCancellationPage;