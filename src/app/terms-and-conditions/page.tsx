import type React from "react";
import { motion } from "framer-motion";
import Head from "next/head";

const TermsConditionsPage: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <Head>
        <title>Terms and Conditions | 7Unique Verify</title>
      </Head>
      
      <div className="relative overflow-hidden bg-gray-50">
        {/* Background vectors */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#b7603d] mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/3 right-20 w-48 h-48 rounded-full bg-[#b7603d] mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <div className="absolute bottom-20 left-1/3 w-52 h-52 rounded-full bg-[#b7603d] mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        </div>

        {/* Diagonal decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 -mr-32 -mt-32 bg-[#b7603d]/10 transform rotate-45 rounded-lg"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 -ml-32 -mb-32 bg-[#b7603d]/10 transform rotate-45 rounded-lg"></div>

        <main className="relative max-w-5xl mx-auto px-4 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-10 md:pb-24 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h1 className="text-4xl font-bold mb-4 text-gray-900">
              Terms and Conditions
            </h1>
            <div className="w-24 h-1 bg-[#b7603d] mx-auto"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="prose prose-lg max-w-none bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 sm:p-10"
          >
            <div className="space-y-8 text-gray-700">
              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3">
                  1. Acceptance of Terms
                </h2>
                <p>
                  By accessing and using 7Unique Verify's services, you agree to comply with and be bound by the following terms and conditions. These terms apply to all users, clients, and stakeholders. If you do not accept these terms in full, you are prohibited from accessing or using our services.
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3">
                  2. Service Overview
                </h2>
                <p>
                  7Unique Verify offers digital identity verification services, document validation, CKYC integration, bank account verification, PAN/Aadhaar validation, liveness detection, facial recognition, and other related APIs. These services are tailored for fintech, government agencies, enterprises, and businesses that require secure, real-time verification solutions.
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3">
                  3. User Responsibilities
                </h2>
                <p>
                  Users must ensure the accuracy of the data submitted to our platform. Misuse of the APIs, attempts to reverse-engineer, scrape data, or use our services for unlawful purposes are strictly prohibited. You are responsible for keeping your access credentials secure and reporting any unauthorized activity promptly.
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3">
                  4. Data Privacy & Compliance
                </h2>
                <p>
                  7Unique Verify adheres to India's data protection and privacy laws. We ensure that all customer data, including personally identifiable information (PII), is stored, processed, and transmitted securely. Data collected through our APIs is encrypted and used only for the purpose intended.
                </p>
                <p>
                  We do not share user data with third parties without explicit consent, except when required by law enforcement or government authorities.
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3">
                  5. Service Reliability
                </h2>
                <p>
                  While we strive to provide uninterrupted access to our APIs and dashboard, 7Unique Verify does not guarantee constant availability. Routine updates, system upgrades, or unforeseen issues may result in temporary downtimes. Notifications for planned maintenance will be provided in advance.
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3">
                  6. Intellectual Property
                </h2>
                <p>
                  All content, design, graphics, logos, and software components on this website and platform are the intellectual property of 7Unique Verify. Unauthorized reproduction, distribution, or commercial use of our assets is prohibited without written permission.
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3">
                  7. Payment Terms
                </h2>
                <p>
                  Use of certain APIs may require prepaid credits or a subscription model. Payment details, refund policies, and usage limits are outlined in your account dashboard or agreed upon in your business contract. Non-payment may result in service suspension.
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3">
                  8. API Usage and Fair Use Policy
                </h2>
                <p>
                  Users are expected to follow the fair usage policy outlined for each API. Excessive, malicious, or automated abuse of services will result in immediate account suspension. 7Unique Verify reserves the right to monitor usage patterns and intervene where misuse is detected.
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3">
                  9. Disclaimers
                </h2>
                <p>
                  7Unique Verify does not warrant that its services will be error-free or fully accurate, particularly when dependent on third-party databases (e.g., RTO, UIDAI, CKYC, NPCI). While we take all reasonable measures to ensure data integrity, errors or delays may occur beyond our control.
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3">
                  10. Limitation of Liability
                </h2>
                <p>
                  Under no circumstances shall 7Unique Verify be liable for damages, including but not limited to, direct, indirect, special, incidental, or consequential losses resulting from the use or inability to use our services. Users are advised to perform their own due diligence in critical verification workflows.
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3">
                  11. Termination
                </h2>
                <p>
                  We reserve the right to suspend or terminate your account if you violate these terms or misuse our services. Termination may be immediate and without prior notice if malicious activity is detected.
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3">
                  12. Modifications to Terms
                </h2>
                <p>
                  These terms may be updated from time to time to reflect regulatory changes, feature updates, or security improvements. Users will be notified of significant changes through email or platform notification. Continued use of the service after changes implies acceptance of the new terms.
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3">
                  13. Governing Law
                </h2>
                <p>
                  These terms shall be governed and interpreted in accordance with the laws of India. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts in Jaipur, Rajasthan.
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3">
                  14. Contact Us
                </h2>
                <p>
                  If you have any questions, concerns, or feedback regarding these Terms and Conditions, please contact us at <a href="/contact-us" className="text-[#b7603d] font-medium underline hover:text-[#9a4f32] transition-colors">Contact Us</a>.
                </p>
              </motion.section>
            </div>
          </motion.div>
        </main>
      </div>
    </>
  );
};

export default TermsConditionsPage;