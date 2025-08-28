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
            <h1 className="text-4xl font-bold mb-4 text-gray-900">Refund & Cancellation Policy</h1>
            <div className="w-32 h-1.5 bg-[#b7603d] mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Effective Date: 3 August 2025
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Brand: 7UniqueVerify, a brand of Sevenunique Tech Solutions Pvt. Ltd.
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
                  1. Payment & Collection Policy
                </h2>
                <ul className="space-y-3 mt-3">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span>7UniqueVerify operates on a <strong>prepaid model</strong>. Full payment must be made before clients can access any API services.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span>We accept payments through <strong>bank transfers, UPI, credit/debit cards, net banking, and other digital payment methods</strong> available on our platform.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span>If your prepaid balance falls below the required minimum, access to API services may be temporarily suspended until payment is completed.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span>Late payments may incur penalties or late fees as per the service agreement.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span>7UniqueVerify reserves the right to modify pricing or payment terms with prior notice to clients.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span>Clients are responsible for providing and maintaining accurate billing information to avoid service disruptions.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span>Any payment processing delays caused by third-party banks or payment gateways are beyond our control and not the responsibility of 7UniqueVerify.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span>All applicable taxes, levies, and government fees must be borne by the client. 7UniqueVerify reserves the right to recover unpaid taxes.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span>Accounts with overdue payments may be suspended or terminated. Reactivation after suspension may require an additional fee.</span>
                  </li>
                </ul>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3 py-1">
                  2. Refund Policy
                </h2>

                <h3 className="font-medium text-lg mt-6 mb-3 text-gray-800">2.1 Non-Refundable Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span>All API services, once <strong>approved, activated, and used</strong>, are non-refundable.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span>One-time setup fees, onboarding charges, or integration fees are non-refundable.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span>Refund requests due to changes in business operations or client preferences after payment will not be entertained.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span>Partial usage of API credits does not qualify for a refund.</span>
                  </li>
                </ul>

                <h3 className="font-medium text-lg mt-6 mb-3 text-gray-800">2.2 Refund Eligibility</h3>
                <p className="mb-3">Refunds will only be processed in these cases:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span><strong>Incorrect Payment Deduction:</strong> If a client is wrongly charged due to a system error, 7UniqueVerify will verify and refund the amount.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span><strong>Duplicate Payments:</strong> If a duplicate payment for the same service is detected, the extra amount will be refunded after verification.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span><strong>Service Non-Approval:</strong> If 7UniqueVerify, or any regulatory body involved, does not approve the requested service, a refund will be initiated.</span>
                  </li>
                </ul>

                <h3 className="font-medium text-lg mt-6 mb-3 text-gray-800">2.3 Refund Exemptions</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span><strong>Client Errors:</strong> Refunds are not issued for incorrect payments caused by client errors like wrong account details or API misconfiguration.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span><strong>Third-Party Failures:</strong> We are not responsible for service interruptions or failures caused by third-party providers, including banks or payment gateways.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span><strong>Unauthorized Usage:</strong> If your account is accessed fraudulently, 7UniqueVerify will not be liable for unauthorized transactions.</span>
                  </li>
                </ul>

                <h3 className="font-medium text-lg mt-6 mb-3 text-gray-800">2.4 How to Request a Refund</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span>Clients should send an email to their <strong>Relationship Manager</strong> and copy <a href="mailto:support@7unique.in" className="text-[#b7603d] font-medium  hover:text-[#9a4f32] transition-colors">✉️ support@7unique.in </a>with transaction details and refund reasons.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span>Refund requests will be reviewed and verified.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span>Approved refunds will be processed within <strong>90 business days</strong> and credited to the original payment method.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span>Refunds are not issued in cash or to third-party accounts.</span>
                  </li>
                </ul>

                <h3 className="font-medium text-lg mt-6 mb-3 text-gray-800">2.5 Chargeback Policy</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span>Clients must contact 7UniqueVerify <strong>support team before initiating any chargebacks</strong> with banks or payment processors.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span>Unauthorized chargebacks may lead to immediate suspension of services.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span>7UniqueVerify reserves the right to pursue legal action against fraudulent chargeback claims.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span>Any chargeback fees levied by financial institutions will be charged back to the client.</span>
                  </li>
                </ul>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3 py-1">
                  3. Cancellation Policy
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span>Once an API service is activated, <strong>cancellations are not permitted</strong>.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span>Clients should thoroughly review service requirements before making payments.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span>Contract-based cancellations are subject to the terms specified in the signed service agreement.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span>7UniqueVerify reserves the right to terminate services if a client:
                      <ul className="mt-2 ml-4 space-y-2">
                        <li>- Violates terms of service</li>
                        <li>- Engages in fraudulent or illegal activity</li>
                        <li>- Misuses the API services</li>
                      </ul>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span>Early termination fees may apply as per contract terms.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span>Refunds due to termination for policy violations are at the sole discretion of 7UniqueVerify.</span>
                  </li>
                </ul>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3 py-1">
                  4. Liability Disclaimer
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span>7UniqueVerify provides API services <strong>"as is"</strong> without warranties regarding uninterrupted or error-free service.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span>Total liability for claims shall not exceed the fees paid by the client in the last <strong>three months</strong>.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span>7UniqueVerify is not liable for indirect or consequential damages, including loss of business, profits, or data.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span>Clients are responsible for complying with applicable laws regarding API usage, data privacy, and financial transactions.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span>Any legal or regulatory penalties arising from misuse of APIs are the client's responsibility.</span>
                  </li>
                </ul>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3 py-1">
                  5. Dispute Resolution
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span>Payment or refund disputes must be reported within <strong>7 days</strong> of the transaction date.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span>Clients can raise disputes by contacting <a href="mailto:support@7unique.in" className="text-[#b7603d] font-medium  hover:text-[#9a4f32] transition-colors">✉️ support@7unique.in </a>.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span>7UniqueVerify will investigate and respond within <strong>10 business days.</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span>Unresolved disputes will be addressed according to the legal procedures specified in the service agreement.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span><strong>Governing Law:</strong> This policy is governed by the laws of <strong>India</strong>, with jurisdiction in <strong>Jaipur, Rajasthan</strong>.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#b7603d] mt-2.5 mr-2"></span>
                    <span><strong>Arbitration:</strong> Both parties agree to resolve disputes via arbitration in Jaipur under the Arbitration and Conciliation Act, 1996, before pursuing legal action. The arbitrator's decision shall be final and binding.</span>
                  </li>
                </ul>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3 py-1">
                  6. Contact Us
                </h2>
                <p>For any questions regarding this Refund & Cancellation Policy, please  <a href="/contact-us" className="text-[#b7603d] font-medium underline hover:text-[#9a4f32] transition-colors">Contact</a>.</p>

                <p className="mt-4 text-sm italic font-bold">
                  By using 7UniqueVerify's API services, you agree to the terms outlined in this Refund & Cancellation Policy. 7UniqueVerify reserves the right to modify this policy with prior notice.
                </p>
              </motion.section>
            </div>
          </motion.div >
        </main >
      </div >
    </>
  );
};

export default RefundCancellationPage;