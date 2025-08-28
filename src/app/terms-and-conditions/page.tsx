import type React from "react";
import { motion } from "framer-motion";
import { ContextData } from "../../config/context";
import { SEOData } from "../../type";
import SEO from "../Helmet/helment";
import { useContext } from "react";

const TermsConditionsPage: React.FC = () => {
  const { seo } = useContext(ContextData) as { seo: SEOData };

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
      <SEO seo={seo} />

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
            <p className="text-gray-600 mb-2">Last Updated: August 4, 2025</p>
            <div className="w-24 h-1 bg-[#b7603d] mx-auto"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="prose prose-lg max-w-none bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 sm:p-10"
          >
            <div className="space-y-8 text-gray-700">
              <motion.section variants={itemVariants} className="mb-8">
                <p className="mb-6">
                  Welcome to <strong>7UniqueVerify</strong>, a service offered by <strong> Sevenunique Tech Solutions Pvt. Ltd.</strong>, headquartered in <strong>Jaipur</strong>, India. This <strong>Terms and Conditions</strong> document (referred to as "Terms") governs your access to and use of our <strong> API-based verification services</strong> and associated platforms. These services may include, but are not limited to, digital identity verification APIs, secure access through dashboards, and related tools provided for businesses and developers. By registering with us, signing up, or using any part of our services—including but not limited to the API integration or dashboard access—you confirm that you have read, understood, and agreed to be legally bound by these Terms. These Terms form a binding agreement between you (the user, client, or business entity) and Sevenunique Tech Solutions Pvt. Ltd. If you do not agree to these Terms, you must not access or use our services in any manner.
                </p>
                <p>
                  Your continued use of the platform signifies your acceptance and understanding of the policies, responsibilities, and obligations outlined in this agreement. These Terms apply to all users, whether accessing the services through direct integration or through our secure web-based interface. Please ensure that you read them carefully. If at any point you disagree with any part of the Terms, or are not authorized to accept them on behalf of your organization, you should immediately cease usage and inform our support team.
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3">
                  1. Introduction
                </h2>
                <p>
                  <strong>7UniqueVerify</strong> is the flagship verification platform developed and maintained by<strong> Sevenunique Tech Solutions Pvt. Ltd.</strong>, a registered Indian private limited company headquartered in Jaipur, Rajasthan. Our company specializes in developing robust, scalable, and secure API-based solutions that simplify identity verification and document validation for businesses, developers, and institutions across India and beyond.
                </p>
                <p>
                  The 7UniqueVerify platform is designed to streamline and automate the process of identity and data verification by offering more than <strong>80 advanced APIs</strong> that can be directly integrated into websites, mobile apps, and enterprise systems. These APIs serve as critical infrastructure for businesses involved in fintech, e-commerce, lending, human resources, logistics, insurance, banking, and other domains that require accurate, real-time verification of individuals and entities.
                </p>
                <p>
                  Our services are crafted with a focus on <strong> data integrity, compliance with Indian regulatory frameworks</strong>, and ease of use. Whether you are a developer seeking seamless API integration or a business user needing quick access via a dashboard, 7UniqueVerify provides flexible tools to suit your operational and compliance needs.
                </p>
                <h3 className="text-lg font-medium mt-6 mb-3 text-gray-800">Services We Offer (Including but Not Limited To):</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Aadhaar Verification:</strong> Supports multiple modes such as Offline XML, eKYC, Virtual ID (VID)-based Aadhaar verification, and Masked Aadhaar validation. These methods ensure secure identity checks as per UIDAI guidelines.</li>
                  <li><strong>PAN Verification:</strong> Enables verification of Permanent Account Number details using both NSDL-based lookups and instant PAN services.</li>
                  <li><strong>Bank Account Verification:</strong> Offered in three variants — Penny Drop (Rs. 1 credit check), Hybrid (combination of penny drop and IFSC validation), and Pennyless (real-time account matching without monetary transactions).</li>
                  <li><strong>Driving License (DL) & Vehicle Registration Certificate (RC):</strong> Access vehicle and license records using government-backed data sources for regulatory checks and onboarding processes.</li>
                  <li><strong>GSTIN, Passport, and Voter ID Verification:</strong> Validate the authenticity of individual and organizational identities via integration with official databases.</li>
                  <li><strong>CKYC & EPFO Verification:</strong> Leverage Central KYC Registry and EPFO data to streamline onboarding, KYC processes, and employee verification.</li>
                  <li><strong>Email and Mobile Number Checkers:</strong> Use intelligent tools to detect disposable, blacklisted, or invalid email addresses and phone numbers in real time.</li>
                  <li><strong>UPI ID Verification:</strong> Confirm the existence and ownership of UPI IDs with bank-level accuracy.</li>
                  <li><strong>DigiLocker Integration:</strong> Enable users to fetch and submit government-issued documents such as Aadhaar, Driving License, and educational certificates using authorized DigiLocker access.</li>
                </ul>
                <p className="mt-4">
                  These services allow your platform or business to significantly reduce manual processes, eliminate fraud, and comply with legal requirements—while offering a better onboarding experience for end users.
                </p>
                <h3 className="text-lg font-medium mt-6 mb-3 text-gray-800">How We Deliver These Services:</h3>
                <p>
                  7UniqueVerify offers its APIs and tools through two secure channels, depending on the technical readiness and business needs of the client:
                </p>
                <ol className="list-decimal pl-6 space-y-2 mt-3">
                  <li><strong>Direct API Integration</strong><br />
                    For developers and organizations with internal tech teams, we provide <strong>RESTful APIs</strong> along with comprehensive technical documentation, access keys, SDKs, and sandbox environments. These APIs can be integrated into your platforms, mobile applications, CRMs, or ERPs with minimal setup time. Clients are assigned unique API keys and can configure rate limits, IP restrictions, and callback URLs as per their workflow requirements.</li>
                  <li><strong>Secure Web Dashboard</strong><br />
                    For clients without in-house developers or IT teams, we offer a user-friendly <strong> web-based dashboard</strong>. This dashboard allows authorized users to manually perform identity and document verifications using a secure login. The dashboard includes features such as upload options, live reports, audit trails, downloadable results, and activity logs.</li>
                </ol>
                <p className="mt-4">
                  Whether you are a startup, enterprise, government agency, or third-party service provider, 7UniqueVerify delivers a seamless verification infrastructure that scales with your growth, enhances compliance, and supports your business objectives.
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3">
                  2. Eligibility & User Registration
                </h2>
                <p>
                  To ensure the safe, compliant, and responsible use of 7UniqueVerify's verification services, we have established specific eligibility criteria and mandatory registration requirements. These conditions are essential to protect the integrity of our platform, ensure lawful usage, and align with Indian regulatory frameworks.
                </p>
                <h3 className="text-lg font-medium mt-6 mb-3 text-gray-800">2.1 Eligibility Criteria</h3>
                <p>
                  To access and use 7UniqueVerify's API-based services or dashboard, the following eligibility conditions must be met:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Legal Entity or Authorized Representative:</strong> You must be either a legally registered business (such as a company, LLP, partnership firm, NGO, etc.) or an individual who is duly authorized to act on behalf of such an entity. We accept users from both India and abroad, provided all regulatory conditions are met.</li>
                  <li><strong>Minimum Age Requirement:</strong> You must be at least <strong> 18 years of age</strong> at the time of registration. By creating an account, you confirm that you meet this age requirement and have the legal capacity to enter into a binding agreement.</li>
                  <li><strong>Regulatory Compliance:</strong> You must ensure that your intended use of our services complies with all applicable <strong>Indian laws and regulations</strong>, including but not limited to the <strong>Information Technology Act, 2000, Aadhaar Act, 2016, RBI KYC Master Directions </strong>, and data protection norms. Misuse or unlawful use of our platform is strictly prohibited and may lead to legal consequences.</li>
                </ul>
                <h3 className="text-lg font-medium mt-6 mb-3 text-gray-800">2.2 Registration Requirements</h3>
                <p>
                  To gain access to our platform—whether through API integration or dashboard login—you are required to complete a one-time registration and account verification process:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>KYC and Business Details:</strong> During signup, you must provide <strong>accurate and verifiable information </strong>, including your organization's PAN, GSTIN (if applicable), registered business name, address, contact number, and a valid government-issued ID for the authorized signatory. Incomplete or misleading information will delay or deny access.</li>
                  <li><strong>Compliance Review & Approval:</strong> All accounts are subject to a <strong>compliance verification process</strong>. Access to APIs and live data will only be granted after your application has been reviewed and formally approved by our internal compliance team.</li>
                  <li><strong>Credential Security:</strong> You are solely responsible for maintaining the confidentiality of your account credentials, including passwords and API keys. Any unauthorized use of your account must be reported to us immediately.</li>
                </ul>
                <p className="mt-4">
                  Failure to meet these eligibility or registration conditions may result in denied access or termination of your account.
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3">
                  3. API Usage Policy
                </h2>
                <p>
                  At 7UniqueVerify, we are committed to providing secure, reliable, and high-performance API services for identity and document verification. To ensure fair and lawful usage of our platform, all users are required to adhere strictly to our API usage policies as described below.
                </p>
                <h3 className="text-lg font-medium mt-6 mb-3 text-gray-800">3.1 Fair Use & Rate Limiting</h3>
                <p>
                  Every user account is issued unique <strong> API keys </strong> with defined<strong> rate limits</strong> and <strong>monthly usage quotas</strong>, depending on the selected subscription plan. These rate limits are designed to ensure equitable access to our infrastructure and to prevent system overloads or service degradation.
                </p>
                <p>
                  To maintain service quality for all clients:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Users must <strong>not exceed the allocated rate limits</strong> without prior approval.</li>
                  <li>Excessive or abusive API calls, such as repeated requests for the same data without proper caching or high-frequency requests that resemble scraping behavior, are not allowed.</li>
                  <li>Integration should follow industry best practices such as using <strong>caching mechanisms, back-off strategies</strong>, and respecting <strong>HTTP response codes</strong>.</li>
                </ul>
                <p className="mt-4">
                  Any attempt to manipulate usage limits or system behavior, such as:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Using <strong>rotating IPs or proxy servers</strong> to hide origin</li>
                  <li>Injecting false headers or spoofed requests</li>
                  <li>Attempting to bypass request throttling</li>
                </ul>
                <p className="mt-4">
                  is considered a breach of our usage policy and will result in<strong> temporary or permanent suspension</strong> of API access.
                </p>
                <h3 className="text-lg font-medium mt-6 mb-3 text-gray-800">3.2 Abuse Prevention</h3>
                <p>
                  We actively monitor API traffic and usage logs to detect, prevent, and act upon misuse or abuse of the platform.
                </p>
                <p>
                  Abusive or unauthorized behaviors include (but are not limited to):
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Accessing data </strong>beyond the scope allowed by your plan or authorization level</li>
                  <li><strong>Bypassing or tampering</strong> with built-in verification workflows or consent capture requirements</li>
                  <li><strong>Sharing your API keys</strong> or credentials with unapproved third parties or external platforms</li>
                  <li><strong>Using false, forged, or unauthorized data</strong> to generate or test API requests</li>
                </ul>
                <p className="mt-4">
                  Any such activity is a<strong> violation of Indian data protection and cyber security laws </strong>and may lead to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Immediate suspension or revocation</strong> of your API key(s)</li>
                  <li><strong>Account termination</strong></li>
                  <li><strong>Legal action </strong>under relevant sections of the Information Technology Act, 2000 or other applicable statutes</li>
                </ul>
                <p className="mt-4">
                  By using our services, you agree to these restrictions and confirm that your usage will be in full compliance with these guidelines.
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3">
                  4. Integration Rules
                </h2>
                <p>
                  To ensure seamless, secure, and compliant usage of 7UniqueVerify services, all users must adhere to the following integration rules. These guidelines apply whether you are integrating our APIs directly into your platform or using our secure web dashboard.
                </p>
                <h3 className="text-lg font-medium mt-6 mb-3 text-gray-800">4.1 Allowed Integration Methods</h3>
                <p>
                  7UniqueVerify offers two primary modes of service access:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Direct API Integration:</strong> Designed for businesses and developers with technical teams, our RESTful APIs can be integrated into websites, mobile applications, CRMs, or internal tools. All API endpoints are served over <strong>HTTPS </strong>and come with detailed documentation, sandbox environments, and access keys for smooth implementation.</li>
                  <li><strong>Web Dashboard Access:</strong> For clients without in-house development capabilities, we provide a<strong> secure, login-based dashboard</strong>. This interface allows manual verification of documents and identities, download of reports, and access to usage analytics. It is designed to serve non-technical business users in sectors such as HR, finance, compliance, and customer onboarding.</li>
                </ul>
                <h3 className="text-lg font-medium mt-6 mb-3 text-gray-800">4.2 Integration Guidelines</h3>
                <p>
                  To maintain data security, API performance, and regulatory compliance, the following integration practices are mandatory:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Do not embed sensitive personal or financial information </strong>(e.g., Aadhaar numbers, PAN, bank account details) directly into URL parameters. All such data should be passed through secure, encrypted POST requests.</li>
                  <li>All data transmission must occur over<strong> TLS/SSL-encrypted channels</strong> to protect confidentiality and integrity.</li>
                  <li>Where supported, clients must configure <strong>IP whitelisting </strong>to restrict access to trusted sources only. This helps prevent misuse and adds an additional layer of security to your API usage.</li>
                  <li>Users must follow our<strong> sandbox-to-live promotion policy</strong>. All API integrations should be thoroughly tested in the sandbox environment and approved by our team before being moved to the live (production) environment.</li>
                </ul>
                <h3 className="text-lg font-medium mt-6 mb-3 text-gray-800">4.3 Branding and Attribution</h3>
                <p>
                  To maintain transparency and trust with end users:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>If you are using 7UniqueVerify's APIs or dashboard in any <strong>customer-facing product</strong>, you must not misrepresent the origin, ownership, or functioning of the service.</li>
                  <li>We encourage clients to include a <strong>"Powered by 7UniqueVerify" </strong>attribution where feasible. This acknowledgment supports ethical use and builds trust across the verification ecosystem.</li>
                </ul>
                <p className="mt-4">
                  Failure to follow these integration rules may result in delayed access, feature restrictions, or suspension of services.
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3">
                  5. Subscription Plans, Billing & Refund Policy
                </h2>
                <h3 className="text-lg font-medium mt-6 mb-3 text-gray-800">5.1 Pricing</h3>
                <p>
                  7UniqueVerify offers flexible and transparent pricing plans based on the type of verification API and the volume of usage. All prices are listed in <strong>Indian Rupees (INR)</strong> and are subject to applicable taxes as per Indian laws. API pricing varies depending on the <strong>data source, verification complexity, and frequency of usage</strong>.
                </p>
                <p>
                  We offer:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Standard Plans</strong> for startups, small businesses, and developers</li>
                  <li><strong>Custom Enterprise Plans</strong> for large organizations, aggregators, and businesses with high-volume or custom integration needs</li>
                </ul>
                <p className="mt-4">
                  Custom quotes, tiered pricing, and negotiated contracts are available upon request and subject to approval.
                </p>
                <h3 className="text-lg font-medium mt-6 mb-3 text-gray-800">5.2 Billing</h3>
                <p>
                  All services offered by 7UniqueVerify are<strong> prepaid by default</strong>, unless explicitly agreed otherwise through a written and signed agreement.
                </p>
                <p>
                  Accepted payment modes include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>NEFT / IMPS / UPI Transfers</strong></li>
                  <li><strong>Online Payment Gateways</strong> (e.g., Razorpay)</li>
                  <li><strong>Invoice-based Billing</strong> (for enterprise clients, subject to approval)</li>
                </ul>
                <p className="mt-4">
                  Upon successful payment, clients will receive API credits or account balance in their dashboard, which can then be used to initiate verification requests. Invoices and GST-compliant receipts are automatically generated and shared via email and dashboard.
                </p>
                <h3 className="text-lg font-medium mt-6 mb-3 text-gray-800">5.3 Refund Policy</h3>
                <p>
                  We follow a strict no-refund policy for any API credits that have been<strong> consumed or activated</strong>, regardless of the outcome of the verification.
                </p>
                <p>
                  However, in cases where credits have<strong> not been used</strong>, a <strong>refund request can be made within 7 working days </strong>from the date of purchase. All such requests will be subject to internal review, and approval will be granted solely at the discretion of the company.
                </p>
                <p>
                  Refunds will <strong>not be granted</strong> under the following conditions:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>If the client has<strong> incorrectly implemented or integrated </strong>the API</li>
                  <li>If the issue or failure is due to <strong>external causes</strong>, such as third-party service disruptions (e.g., UIDAI, NSDL server downtime)</li>
                  <li>If there has been a <strong>violation of fair usage policies</strong>, misuse of credentials, or any breach of our Terms & Conditions</li>
                </ul>
                <p className="mt-4">
                  To submit a refund request, clients must email the support team at <a href="mailto:support@7unique.in" className="text-[#b7603d] font-medium  hover:text-[#9a4f32] transition-colors">✉️ support@7unique.in </a>
                  with transaction details, reason for the request, and proof of unused credits.
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3">
                  6. User Responsibilities and Obligations
                </h2>
                <p>
                  As a registered user of <strong>7UniqueVerify</strong>, you are expected to use our services responsibly, lawfully, and in accordance with applicable regulations and these Terms. By accessing or integrating our API services or dashboard, you agree to the following obligations:
                </p>
                <p>
                  You shall <strong>use the APIs strictly for lawful, ethical, and business-related purposes</strong>. Under no circumstances may the services be used for fraudulent activities, identity theft, unauthorized surveillance, or the collection of personal data without proper consent. All data processed through the platform must be obtained and used in accordance with applicable Indian data protection laws and industry regulations.
                </p>
                <p>
                  You agree to <strong>avoid any action that could harm, disable, overburden, or impair the performance or availability</strong> of the 7UniqueVerify platform. This includes, but is not limited to, abusive API usage, attempts to reverse-engineer or tamper with the service, or disrupting access for other users.
                </p>
                <p>
                  You must<strong> implement appropriate security controls</strong>, including access control, data encryption, and secure data storage protocols. All usage must be logged responsibly, and sensitive information must be protected in compliance with industry standards.
                </p>
                <p>
                  You are solely responsible for the <strong>confidentiality and integrity of your login credentials and API keys</strong>. If you suspect that your account or API key has been compromised or accessed by an unauthorized party, you must <strong>notify us immediately</strong> at <a href="mailto:support@7unique.in" className="text-[#b7603d] font-medium  hover:text-[#9a4f32] transition-colors">✉️ support@7unique.in </a>. Prompt reporting helps prevent misuse and limits liability.
                </p>
                <p>
                  Failure to comply with these responsibilities may result in<strong> account suspension, permanent deactivation, or legal action</strong>, including but not limited to claims under the Information Technology Act, 2000 or other applicable Indian laws.
                </p>
                <p>
                  By using our services, you acknowledge and accept these responsibilities as essential conditions of continued access.
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3">
                  7. Data Privacy, Security, and Compliance
                </h2>
                <p>
                  7UniqueVerify is committed to protecting the privacy, security, and lawful use of all personal and business data processed through its verification services. We adhere strictly to the<strong> regulatory frameworks of India</strong>, including laws related to Aadhaar, KYC, data protection, and financial compliance.
                </p>
                <h3 className="text-lg font-medium mt-6 mb-3 text-gray-800">7.1 Compliance with Indian Laws</h3>
                <p>
                  All Aadhaar-based verifications conducted via 7UniqueVerify strictly follow the guidelines and protocols defined by the <strong>Unique Identification Authority of India (UIDAI)</strong>. This includes adherence to<strong> Section 29 of the Aadhaar Act, 2016</strong>, which governs the storage, use, and access of Aadhaar data. No biometric data is collected or stored by our platform.
                </p>
                <p>
                  Similarly, Know Your Customer (KYC) processes available through our APIs (such as CKYC, PAN, Aadhaar, and Bank Account Verification) are compliant with:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>RBI Master Directions on KYC (2016 & subsequent updates)</strong></li>
                  <li><strong>SEBI regulations</strong> wherever applicable</li>
                  <li><strong>Information Technology Act, 2000</strong>, with respect to data access and transmission</li>
                </ul>
                <p className="mt-4">
                  Users are expected to use the verification services<strong> only in contexts where legal and regulatory compliance is required</strong>, such as onboarding, financial verification, or statutory due diligence.
                </p>
                <h3 className="text-lg font-medium mt-6 mb-3 text-gray-800">7.2 Data Handling</h3>
                <p>
                  7UniqueVerify takes a <strong>minimal data retention approach</strong>. We do not store sensitive personal information (SPI) such as Aadhaar numbers, PAN, bank account details, or biometric identifiers beyond the duration required to complete the verification.
                </p>
                <p>
                  All data transmitted through our APIs or dashboard is<strong> encrypted both in transit (using HTTPS/TLS) and at rest</strong>. We employ secure cloud infrastructure, access control policies, and real-time monitoring systems to safeguard your data.
                </p>
                <p>
                  For dashboard users, we provide<strong> detailed logs, timestamps, and audit trails</strong> for each verification action, enabling full traceability and supporting regulatory audits.
                </p>
                <h3 className="text-lg font-medium mt-6 mb-3 text-gray-800">7.3 Consent & Authorization</h3>
                <p>
                  It is the sole responsibility of the client or user to ensure that informed consent is obtained from the individual or entity whose data is being verified. This includes providing clarity to the end-user about the purpose, duration, and legal basis of the verification.
                </p>
                <p>
                  7UniqueVerify reserves the right to audit API usage logs, request documentation, and take corrective action if any misuse, unauthorized access, or non-compliance is detected.
                </p>
                <p>
                  For further details, please review our complete - <a href="/privacy-policy" className="text-[#b7603d] font-medium  hover:text-[#9a4f32] transition-colors">Privacy Policy</a>.
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3">
                  8. Confidentiality and Non-Disclosure
                </h2>
                <p>
                  As a user, client, or integration partner of <strong>7UniqueVerify</strong>, you acknowledge that during the course of your engagement with our platform, you may gain access to certain proprietary, confidential, or sensitive information belonging to <strong>Sevenunique Tech Solutions Pvt. Ltd.</strong>, including but not limited to technical documentation, pricing models, source code, platform architecture, APIs, algorithms, business processes, and operational details.
                </p>
                <p>
                  You hereby agree and undertake not to<strong> disclose, copy, transmit, reverse-engineer, replicate, or misuse </strong>any such proprietary or confidential information that is shared, made available, or otherwise obtained during your relationship with 7UniqueVerify. This applies to both verbal and written communication, system access, technical materials, and documentation.
                </p>
                <p>
                  Specifically, you agree that you will:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Not share internal technical documents, pricing plans, authentication keys, SDKs, or sandbox/test tools with any third party unless you have received <strong>explicit written permission</strong> from 7UniqueVerify</li>
                  <li>Not use any confidential material to build or support a competing service, product, or platform</li>
                  <li>Ensure that any employees, subcontractors, or representatives who have access to our materials are also bound by similar confidentiality obligations</li>
                </ul>
                <p className="mt-4">
                  This confidentiality clause remains in effect<strong> both during and after the termination</strong> of your account or services. Even if you stop using our platform, you are still legally bound to protect and not disclose any confidential information you accessed during the course of engagement.
                </p>
                <p>
                  Breach of this clause may result in immediate suspension of services, legal action, or claim for damages as permitted under applicable Indian laws, including the Information Technology Act, 2000 and the Indian Contract Act, 1872.
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3">
                  9. Intellectual Property Rights & Branding Guidelines
                </h2>
                <h3 className="text-lg font-medium mt-6 mb-3 text-gray-800">9.1 Ownership</h3>
                <p>
                  All intellectual property rights in and to the <strong>7UniqueVerify platform</strong>, including but not limited to the<strong> source code, API endpoints, SDKs, developer tools, web dashboards, brand assets, technical documentation, visual interface designs, algorithms</strong>, and <strong>logos</strong>, are and shall remain the sole and exclusive property of <strong>Sevenunique Tech Solutions Pvt. Ltd.</strong>
                </p>
                <p>
                  By registering and subscribing to 7UniqueVerify's services, you are granted a <strong>limited, non-exclusive, non-transferable, and revocable license</strong> to access and use the APIs and platform features, strictly in accordance with the permitted usage outlined in your subscription plan and these Terms. This license is granted only for the <strong>duration of your active subscription</strong> and may be revoked at any time if you are found in violation of the Terms.
                </p>
                <p>
                  Nothing in this agreement shall be construed as transferring or assigning any ownership, trademark rights, design rights, or software rights to you or any third party.
                </p>
                <h3 className="text-lg font-medium mt-6 mb-3 text-gray-800">9.2 Restrictions</h3>
                <p>
                  As a user, you must <strong>not engage in any activity </strong>that infringes on the intellectual property rights of Sevenunique Tech Solutions Pvt. Ltd. The following actions are expressly prohibited:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Reverse-engineering, decompiling, or attempting to reconstruct </strong>any part of our platform, API logic, codebase, or data processing flow.</li>
                  <li><strong>Claiming ownership</strong>, sublicensing, copying, or creating derivative works based on our platform, documentation, or verification engine.</li>
                  <li><strong>Rebranding, white-labelling</strong>, or disguising our services or APIs as your own or as part of another product offering, without written permission.</li>
                  <li><strong>Using our name, logo, trademarks, or taglines </strong>in any misleading, deceptive, or unauthorized manner — including but not limited to advertisements, third-party websites, or partner listings.</li>
                </ul>
                <p className="mt-4">
                  Any violation of this section may lead to <strong>termination of service, legal action</strong>, and/or <strong>intellectual property claims</strong>, as per applicable Indian IP laws, including but not limited to the <strong>Copyright Act, 1957</strong>, and <strong>Trade Marks Act, 1999</strong>.
                </p>
                <p>
                  We reserve the right to monitor your usage and marketing materials to ensure compliance with our branding and IP guidelines.
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3">
                  10. Content Ownership and Restrictions
                </h2>
                <p>
                  At <strong>7UniqueVerify</strong>, we respect the ownership and confidentiality of all data and documents uploaded or processed through our platform. The content you submit during the course of verification—whether through API integration or the secure dashboard—remains the <strong>exclusive property of you or your end users (clients, customers, or individuals being verified)</strong>.
                </p>
                <p>
                  We do <strong>not claim ownership</strong> over any personally identifiable information (PII), documents, identifiers, or verification inputs submitted by your business during service usage. Our role is solely to process the data for validation against authorized and regulatory-compliant data sources and to return results as per the API or dashboard functionality.
                </p>
                <p>
                  However, while you retain ownership of your content, you are solely responsible for ensuring that:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The data provided is <strong>authentic, lawful, and collected with proper consent</strong></li>
                  <li>The content is <strong>not misleading, stolen, or malicious</strong></li>
                  <li>The verification process is conducted in compliance with applicable <strong>data protection, consent, and regulatory laws</strong></li>
                </ul>
                <h3 className="text-lg font-medium mt-6 mb-3 text-gray-800">Prohibited Use of Platform</h3>
                <p>
                  You may not use 7UniqueVerify for any of the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Validating stolen or fraudulent identities</strong>: Any attempt to verify unauthorized documents or identities without legal justification and consent is strictly prohibited.</li>
                  <li><strong>Uploading obscene, harmful, illegal, or defamatory content</strong>: This includes, but is not limited to, sexually explicit content, hate speech, or content that violates any applicable law in India or internationally.</li>
                  <li><strong>Engaging in political profiling, surveillance, or intelligence gathering without consent</strong>: Our platform must not be used for tracking political activity, targeting individuals based on affiliations, or conducting background checks that violate privacy rights.</li>
                </ul>
                <p className="mt-4">
                  Violation of this section may result in <strong>immediate termination of access, account suspension</strong>, and, where applicable, <strong>legal consequences</strong>                                     under the Information Technology Act, 2000, and other Indian laws.
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3">
                  11. Limitation of Liability
                </h2>
                <p>
                  To the <strong>maximum extent permitted under applicable Indian laws</strong>, you agree that 7UniqueVerify, a product of <strong>Sevenunique Tech Solutions Pvt. Ltd.</strong>, and its directors, officers, employees, partners, and affiliates shall not be held liable for any <strong>indirect, incidental, special, consequential, or exemplary damages </strong>arising out of or related to the use of our API services, dashboard, or any other platform features.
                </p>
                <p>
                  This includes, but is not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Loss of data</strong></li>
                  <li><strong>Loss of revenue or anticipated profits</strong></li>
                  <li><strong>Business interruption</strong></li>
                  <li><strong>Failure of third-party data sources</strong></li>
                  <li><strong>Inaccurate or incomplete verification results</strong></li>
                  <li><strong>Delays or downtime due to infrastructure issues or external dependencies</strong></li>
                </ul>
                <p className="mt-4">
                  While we strive to maintain high service quality, uptime, and accuracy, <strong>7UniqueVerify does not guarantee 100% reliability or accuracy </strong>of responses returned by integrations involving <strong>third-party or government data sources</strong>, including but not limited to <strong>UIDAI (Aadhaar), NSDL (PAN), NPCI (UPI/Bank Verify), CKYC, GSTN, DigiLocker</strong>, and others.
                </p>
                <p>
                  We rely on authorized channels to fetch and verify data, and discrepancies or delays originating from these providers are <strong>beyond our control</strong>. You acknowledge that use of these services is at your discretion and risk.
                </p>
                <h3 className="text-lg font-medium mt-6 mb-3 text-gray-800">Maximum Liability Cap</h3>
                <p>
                  In any case of dispute, your sole and exclusive remedy, and our entire liability (if any), shall be limited to an <strong>amount not exceeding the total fees paid by you to 7UniqueVerify in the preceding 90 (ninety) days</strong> from the date of the incident giving rise to the claim.
                </p>
                <p>
                  This limitation applies regardless of the legal theory under which the claim is brought—whether in contract, tort, negligence, or otherwise—and shall remain enforceable even if 7UniqueVerify was advised of the possibility of such damages.
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3">
                  12. Indemnification Clause
                </h2>
                <p>
                  By accessing or using any part of the <strong>7UniqueVerify </strong>platform, you expressly agree to indemnify, defend, and hold harmless <strong>Sevenunique Tech Solutions Pvt. Ltd.</strong>, including its <strong>directors, officers, employees, affiliates, agents, service providers, and partners</strong>, from and against any and all<strong> claims, damages, liabilities, losses, penalties, judgments, costs, or expenses</strong> (including reasonable legal fees) that arise directly or indirectly from your use or misuse of our services.
                </p>
                <p>
                  This indemnification obligation applies, but is not limited to, the following situations:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Unauthorized or unlawful use of APIs</strong>: Including attempts to bypass authentication, manipulate response data, or use the service for unapproved or malicious purposes.</li>
                  <li><strong>Breach of Terms & Conditions</strong>: Any violation of the Terms outlined in this agreement, including failure to comply with integration policies, data privacy regulations, or payment obligations.</li>
                  <li><strong>Violation of applicable laws or regulations</strong>: Including but not limited to the Aadhaar Act, 2016, the Information Technology Act, 2000, the Indian Contract Act, 1872, and data protection or KYC laws relevant to your business operations.</li>
                  <li><strong>Misuse of personal or verified data</strong>: Including data submitted without proper user consent, unauthorized storage or sharing of sensitive information, or the use of our services for identity fraud, illegal surveillance, or unauthorized profiling.</li>
                </ul>
                <p className="mt-4">
                  You are solely responsible for ensuring that all actions taken using your account and API keys are lawful and compliant. If a third party initiates legal action or claim due to your activities on the platform, <strong>you shall bear full responsibility for defending and settling</strong> such claims and for compensating 7UniqueVerify for any damages or losses incurred.
                </p>
                <p>
                  This clause survives the termination of your access to the platform and remains enforceable even after cessation of services.
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3">
                  13. Termination of Access or API Keys
                </h2>
                <p>
                  <strong>Sevenunique Tech Solutions Pvt. Ltd.</strong> reserves the right to<strong> suspend, restrict, or terminate</strong> your access to the <strong>7UniqueVerify</strong> platform, including API keys, dashboard credentials, and related services, at any time and without prior notice, under the following circumstances:
                </p>
                <h3 className="text-lg font-medium mt-6 mb-3 text-gray-800">13.1 Grounds for Immediate Termination or Suspension</h3>
                <p>
                  We may take action to <strong>revoke API access, block your account, or suspend services </strong>if any of the following conditions occur:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Breach of these Terms</strong>: Any violation of the terms outlined in this agreement, including unauthorized API usage, rate limit abuse, or integration misconduct.</li>
                  <li><strong>Misuse, fraudulent, or suspicious activity</strong>: If we detect the use of fake or tampered documents, identity spoofing, bypassing system controls, use of the service for illegitimate purposes, or any other suspicious behavior that compromises the platform's integrity.</li>
                  <li><strong>Non-payment of dues</strong>: Failure to make the required payments within <strong>15 calendar days</strong> of the due date as mentioned on the invoice will lead to automatic suspension until the dues are cleared.</li>
                  <li><strong>Non-compliance with regulatory documentation</strong>: If you fail to provide necessary <strong>KYC, compliance, or authorization documents</strong> required under Indian law or company policy, we may revoke access until such compliance is achieved.</li>
                  <li><strong>Legal requirement or enforcement action </strong>: We may suspend your access if compelled by legal authority, court order, government directive, or regulatory requirement.</li>
                </ul>
                <h3 className="text-lg font-medium mt-6 mb-3 text-gray-800">13.2 Temporary Suspension</h3>
                <p>
                  In addition to the above, we may <strong>temporarily suspend access to APIs or dashboard </strong>for any of the following reasons:
                </p>
                <p>
                  <strong> Scheduled maintenance</strong> or system upgrades, which may affect the availability of certain services temporarily. We will attempt to notify you in advance wherever possible.
                  <strong>Emergency downtime or technical incidents</strong> requiring immediate intervention for security or performance reasons.
                </p>
                <h3 className="text-lg font-medium mt-6 mb-3 text-gray-800">13.3 Post-Termination</h3>
                <p>
                  Upon termination:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your API keys will be deactivated permanently.</li>
                  <li>You must immediately cease use of all services and delete any API-related integrations.</li>
                  <li>Any outstanding payments remain due and payable.</li>
                </ul>
                <p className="mt-4">
                  Termination of access does not relieve you of your responsibilities under clauses such as <strong>Confidentiality, Indemnification, and Compliance</strong>, which survive even after the termination of this agreement.
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3">
                  14. Dispute Resolution & Governing Law
                </h2>
                <p>
                  At <strong>7UniqueVerify</strong>, we are committed to resolving any disputes or concerns in a professional, fair, and timely manner. This section outlines the legal framework and process to be followed in case of any disagreement, claim, or dispute arising from or related to your use of our services.
                </p>
                <h3 className="text-lg font-medium mt-6 mb-3 text-gray-800">14.1 Governing Law & Jurisdiction</h3>
                <p>
                  These Terms & Conditions shall be <strong>governed by and construed in accordance with the laws of the Republic of India</strong>, without regard to conflict of law principles. You agree that any disputes arising under or in connection with these Terms shall be subject to the <strong>exclusive jurisdiction of the competent courts located in Jaipur, Rajasthan</strong>, India.
                </p>
                <p>
                  By accepting these Terms, you waive any objections to the venue or jurisdiction of these courts on the grounds of inconvenient forum or any similar basis.
                </p>
                <h3 className="text-lg font-medium mt-6 mb-3 text-gray-800">14.2 Arbitration Clause</h3>
                <p>
                  In the event of any dispute, controversy, or claim arising out of or in connection with these Terms or the breach, termination, or validity thereof, and if such dispute cannot be settled amicably within 30 (thirty) days of written notice by one party to the other, it shall be <strong>finally resolved by arbitration</strong>.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The arbitration shall be conducted in accordance with the provisions of the <strong>Arbitration and Conciliation Act, 1996</strong>, as amended from time to time.</li>
                  <li>The arbitration proceedings shall be conducted in the <strong>English language.</strong></li>
                  <li>The seat and venue of arbitration shall be <strong>Jaipur, Rajasthan</strong>, and the proceedings shall be presided over by a <strong>sole arbitrator mutually appointed by both parties </strong>. If the parties fail to mutually agree upon an arbitrator, the appointment shall be made in accordance with the Arbitration and Conciliation Act, 1996.</li>
                  <li>The decision of the arbitrator shall be <strong>final and binding</strong> on both parties.</li>
                  <li>Each party shall bear its own costs related to the arbitration proceedings, unless otherwise directed by the arbitrator.</li>
                </ul>
                <p className="mt-4">
                  This clause shall survive the termination, expiration, or invalidity of your relationship with 7UniqueVerify.
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3">
                  15. Service Availability, Downtime & SLA
                </h2>
                <p>
                  At <strong>7UniqueVerify</strong>, we strive to provide high availability, consistent performance, and reliable uptime across all our API and dashboard services. We understand that our services play a critical role in your business operations and therefore commit to maintaining optimal service levels wherever possible.
                </p>
                <h3 className="text-lg font-medium mt-6 mb-3 text-gray-800">15.1 Uptime Commitment</h3>
                <p>
                  We aim to maintain a minimum <strong>Service Level Availability (SLA) of 99.5%</strong> on a monthly basis for our API infrastructure and dashboard access. This includes system availability, API endpoint uptime, and accessibility to our developer and client platforms. This uptime percentage does not include periods of scheduled maintenance or factors outside of our control (as defined below).
                </p>
                <h3 className="text-lg font-medium mt-6 mb-3 text-gray-800">15.2 Scheduled Maintenance</h3>
                <p>
                  To ensure platform security, stability, and performance, routine <strong>maintenance or updates</strong> may be required. These maintenance windows are usually scheduled during<strong> non-peak hours (late nights or weekends)</strong> and will be <strong>notified in advance via email or dashboard alert</strong>.
                </p>
                <p>
                  During such times, you may experience temporary slowdowns, restricted access to certain APIs, or full system unavailability. We make every effort to minimize the duration and impact of these maintenance activities.
                </p>
                <h3 className="text-lg font-medium mt-6 mb-3 text-gray-800">15.3 Unscheduled Downtime & Third-Party Outages</h3>
                <p>
                  While we take all necessary precautions to prevent service interruptions, there may be circumstances where <strong>unscheduled downtime occurs</strong> due to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Infrastructure failures</li>
                  <li>Security threats or DDoS mitigation</li>
                  <li>Emergency patches</li>
                  <li>Force majeure events (natural disasters, cyber attacks, etc.)</li>
                </ul>
                <p className="mt-4">
                  In addition, many of our APIs depend on <strong>third-party data providers</strong> such as UIDAI, NSDL, NPCI, GSTN, DigiLocker, etc. In the event these external services experience disruptions, latency, or outages, <strong>7UniqueVerify shall not be held liable </strong>for delays or failed verifications caused as a result.
                </p>
                <h3 className="text-lg font-medium mt-6 mb-3 text-gray-800">15.4 No SLA Guarantee on Free Plans</h3>
                <p>
                  Please note that no <strong>uptime guarantee applies to trial or free-tier accounts</strong>. SLA commitments are applicable only to paid plans as per the selected subscription tier.
                </p>
                <p>
                  For SLA breaches caused solely due to our platform (excluding third-party providers), eligible customers may request account credit, subject to internal validation and approval.
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3">
                  16. Changes to Terms and Conditions
                </h2>
                <p>
                  <strong>7UniqueVerify</strong>, a service operated by <strong>Sevenunique Tech Solutions Pvt. Ltd.</strong>, reserves the full right to modify, amend, or update these <strong>Terms and Conditions</strong> at any time, in whole or in part, without prior individual notice, except as stated below.
                </p>
                <p>
                  We encourage all users to review this page regularly to stay informed of any changes. The <strong>latest version of the Terms</strong> will always be available on our official website at <a href="https://www.7uniqueverfiy.com" className="text-[#b7603d] font-medium  hover:text-[#9a4f32] transition-colors underline">https://www.7uniqueverfiy.com</a> or within the user dashboard.
                </p>
                <h3 className="text-lg font-medium mt-6 mb-3 text-gray-800">16.1 Notification of Changes</h3>
                <p>
                  If we make <strong>material or significant changes</strong> to these Terms — such as modifications affecting your rights, obligations, pricing, or access to services — we will make reasonable efforts to notify you through:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Email notifications to your registered address</li>
                  <li>Pop-up or banner notifications on your dashboard</li>
                  <li>Public announcement on our official website</li>
                </ul>
                <p className="mt-4">
                  Such notifications will be provided at least <strong>7 calendar days</strong> in advance of the effective date of the revised Terms, unless the changes are required by law or for urgent security or compliance reasons.
                </p>
                <h3 className="text-lg font-medium mt-6 mb-3 text-gray-800">16.2 Continued Use as Acceptance</h3>
                <p>
                  Your continued use of the 7UniqueVerify platform, APIs, or any of its services after the updated Terms take effect constitutes your binding acceptance of the new version.
                </p>
                <p>
                  If you do not agree with the updated Terms, your sole recourse is to discontinue using the services and request account termination in accordance with Clause 13.
                </p>
                <p>
                  We are not obligated to individually notify users of minor or administrative edits that do not materially affect rights or obligations.
                </p>
                <h3 className="text-lg font-medium mt-6 mb-3 text-gray-800">16.3 Version Control</h3>
                <p>
                  Each version of the Terms will carry a <strong>"Last Revised"</strong> date at the top of the document. For reference, the current version was last updated on <strong>August 4, 2025</strong>.
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3">
                  17. Third-Party Services & Integrations Disclaimer
                </h2>
                <p>
                  The services offered by <strong>7UniqueVerify</strong>, including but not limited to Aadhaar, PAN, Bank Account, GSTIN, CKYC, EPFO, UPI, Passport, and Driving License verifications, often <strong>interface with third-party data sources and external government platforms such as UIDAI, NSDL, NPCI, SEBI, RBI, DigiLocker</strong>, and other regulated repositories.
                </p>
                <h3 className="text-lg font-medium mt-6 mb-3 text-gray-800">17.1 External Dependencies</h3>
                <p>
                  While we make every effort to ensure seamless integration and real-time performance, it is important to note that these third-party services are not owned, operated, or controlled by <strong>Sevenunique Tech Solutions Pvt. Ltd.</strong> As such, we cannot:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Guarantee the uptime, performance, or response times of third-party APIs.</li>
                  <li>Ensure that data fetched from these services is always accurate, complete, or up to date.</li>
                  <li>Modify or influence the behavior, structure, or availability of their systems.</li>
                </ul>
                <h3 className="text-lg font-medium mt-6 mb-3 text-gray-800">17.2 Limitations of Liability</h3>
                <p>
                  We explicitly disclaim any liability arising from:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Outages</strong>, latency, or downtime of third-party services.</li>
                  <li><strong>Incorrect, outdated</strong>, or missing data originating from external sources.</li>
                  <li><strong>Changes in third-party APIs or protocols</strong>, which may affect the performance of our own services.</li>
                  <li><strong>Legal or policy restrictions</strong> placed by the government or regulatory authorities that may impact API access, features, or data types.</li>
                </ul>
                <p className="mt-4">
                  These external factors are beyond our operational control and do not constitute grounds for refund, compensation, or service-level breach on our part.
                </p>
                <h3 className="text-lg font-medium mt-6 mb-3 text-gray-800">17.3 User Acknowledgment</h3>
                <p>
                  By using our platform, you <strong>acknowledge and accept</strong> that certain verifications rely on third-party systems and that <strong>7UniqueVerify acts as a facilitator</strong> of data access and integration. While we implement fallbacks, retries, and error-handling protocols to reduce impact, we cannot prevent or resolve issues originating from upstream sources.
                </p>
                <p>
                  We recommend users to <strong>regularly review documentation and system status</strong> for each data provider and subscribe to alerts for planned maintenance or downtime where available.
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold mb-4 text-[#b7603d] border-l-4 border-[#b7603d] pl-3">
                  18. Contact Details
                </h2>
                <p>
                  We're here to help. For any questions regarding our services, API integration, billing, or compliance, please feel free to reach out to us at  <a href="/contact-us" className="text-[#b7603d] font-medium underline hover:text-[#9a4f32] transition-colors">Contact Us</a>.
                </p>
              </motion.section>
            </div>
          </motion.div>
        </main>
      </div >
    </>
  );
};

export default TermsConditionsPage;