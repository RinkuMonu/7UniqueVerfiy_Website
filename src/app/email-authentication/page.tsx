import type React from "react";
import { Link } from "react-router-dom";
import SEO from "../Helmet/helment";
import { useContext } from "react";
import { ContextData } from "../../config/context";
import { SEOData } from "../../type";
import KnowMore from "../../components/KnowMore";
const EmailAuthenticationPage: React.FC = () => {
  const { seo } = useContext(ContextData) as { seo: SEOData };
  return (
    <>
      <SEO seo={seo} />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section
          className="w-full bg-cover bg-center min-h-screen flex items-center"
          style={{ backgroundImage: "url('/img/bg (2).png')" }}
        >
          <div className="container mx-auto px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-2/3 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Email Authentication API
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
                Accurate & Secure Email Verification by 7Unique Verify
              </h2>
              <p className="text-lg mb-4 text-white">
                Eliminate invalid, fake, or disposable email addresses with
                7Unique Verify's Email Authentication API. Optimize
                deliverability, reduce spam risks, and protect your digital
                onboarding process.
              </p>
              <p className="mb-4 text-white">
                Get real-time results through email syntax validation, domain &
                DNS checks, mailbox ping verification, and disposable email
                detection—ideal for signup forms, CRMs, and campaigns.
              </p>
              <p className="mb-6 text-white">
                A must-have for marketers, developers, and businesses that rely
                on clean and verified email lists to ensure effective
                communication and fraud prevention.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/email-authentication-page-api"
                  className="inline-block bg-[#b7603d] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#d19983] transition-colors text-center"
                >
                  Get Started
                </Link>
                <a
                  href="https://7uniqueverify-njzw.readme.io/reference/post_api-verify-bankverify#/"
                  className="inline-block border border-white text-white font-semibold px-6 py-3 rounded hover:bg-white hover:text-[#b7603d] transition-colors text-center"
                >
                  View Documentation
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="../img/images/3.png"
                alt="Email Authentication - 7Unique Verify"
                className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px] rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          className="py-16 bg-[#f7f1ef]








"
        >
          <div className="container mx-auto px-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Email Verification Features by{" "}
                <span className="text-[#b7603d]">7Unique Verify</span>
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Ensure accuracy, reduce bounce rates, and protect your email
                communication pipeline with our advanced API capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div
                  className="bg-[#f7f1ef]








 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-[#b7603d]  "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Real-time Validation
                </h3>
                <p className="text-gray-600">
                  Validate email addresses instantly with syntax, domain, and
                  mailbox existence checks for maximum accuracy.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div
                  className="bg-[#f7f1ef]








 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-[#b7603d]  "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Disposable Email Detection
                </h3>
                <p className="text-gray-600">
                  Filter out temporary, fake, or single-use emails to maintain
                  data quality and reduce fraud.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div
                  className="bg-[#f7f1ef]








 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-[#b7603d]  "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Bulk Verification
                </h3>
                <p className="text-gray-600">
                  Verify large batches of emails in one go—ideal for campaigns
                  and database cleanup.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="bg-[#f7f1ef]








 py-16 px-4 md:px-8 lg:px-20"
        >
          <div className="w-full mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              Choose Your{" "}
              <span className="text-[#b7603d]">Verification Level</span>
            </h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <div
                    className="w-12 h-12 bg-[#f7f1ef]








 rounded-full flex items-center justify-center mr-4"
                  >
                    <span className="text-[#b7603d]   font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Basic Email Check
                    </h3>
                    <span className="text-sm text-[#b7603d]   font-medium">
                      Syntax Validation
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Verify if an email follows the correct format and has a valid
                  domain structure.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">Instant</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Cost:</span>
                    <span className="font-medium">₹0.5-1 per verification</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">Initial screening</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div
                    className="w-12 h-12 bg-[#f7f1ef]








   rounded-full flex items-center justify-center mr-4"
                  >
                    <span className="text-[#b7603d]   font-bold">🔍</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Advanced Verification
                    </h3>
                    <span className="text-sm text-[#b7603d]   font-medium">
                      Mailbox Check
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Provides complete email verification including domain
                  validation and mailbox existence check.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">2-5 seconds</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Cost:</span>
                    <span className="font-medium">₹1.5-3 per verification</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">Critical communications</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-lg font-semibold mb-4 text-gray-800">
                What You Get:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">
                    Basic Check:
                  </h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ Syntax validation</li>
                    <li>✓ Domain format check</li>
                    <li>✓ Disposable email detection</li>
                    <li>✓ Free email provider check</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">
                    Advanced Report:
                  </h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ MX record verification</li>
                    <li>✓ SMTP validation</li>
                    <li>✓ Mailbox existence check</li>
                    <li>✓ Catch-all domain detection</li>
                    <li>✓ Role-based account detection</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <KnowMore />

        {/* How It Works Section */}
        <section className="py-16">
          <div className="container mx-auto px-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How 7Unique Verify Email Authentication Works
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our multi-layered process ensures high-quality leads and minimal
                bounce rates for your campaigns.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-[#b7603d]   text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Syntax Validation
                </h3>
                <p className="text-gray-600">
                  RFC-based format validation to confirm correct email structure
                  before further steps.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#b7603d]   text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">Domain Check</h3>
                <p className="text-gray-600">
                  Validate domain's MX records and DNS setup to ensure it's
                  capable of receiving emails.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#b7603d]   text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Mailbox Ping</h3>
                <p className="text-gray-600">
                  Perform a non-intrusive SMTP check to confirm if the email
                  address exists without sending a message.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#b7603d]   text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Reputation Scoring
                </h3>
                <p className="text-gray-600">
                  Check blacklist status, domain age, and usage pattern to rate
                  the email's risk level.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section
          className="py-16 bg-[#f7f1ef]








"
        >
          <div className="container mx-auto px-16">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Benefits of{" "}
                  <span className="text-[#b7603d]">7Unique Verify</span> Email
                  Authentication
                </h2>
                <p className="text-gray-600 mb-8">
                  Drive better campaign performance, cut costs, and build trust
                  with a cleaner email database.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#b7603d]   mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      <strong className="font-medium">
                        Reduce Bounce Rates:
                      </strong>{" "}
                      Only engage with real users by filtering out fake IDs.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#b7603d]   mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      <strong className="font-medium">Inbox Placement:</strong>{" "}
                      Enhance sender score and improve email deliverability.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#b7603d]   mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      <strong className="font-medium">Lower Costs:</strong> Save
                      on email tools by cleaning your database beforehand.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#b7603d]   mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      <strong className="font-medium">
                        Better Engagement:
                      </strong>{" "}
                      Work with high-intent users and valid prospects only.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <img
                  src="/img/image/email-benefits-secure.png"
                  alt="Email Verification Benefits - 7Unique Verify"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16">
          <div className="container mx-auto px-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Industry Use Cases
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Email authentication is essential across various industries for
                maintaining communication quality and security.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div
                  className="bg-[#f7f1ef]








 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-[#b7603d]  "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">E-commerce</h3>
                <p className="text-gray-600">
                  Verify customer emails during registration and checkout to
                  ensure order confirmations reach customers.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div
                  className="bg-[#f7f1ef]








 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-[#b7603d]  "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Marketing</h3>
                <p className="text-gray-600">
                  Clean email lists before campaigns to improve deliverability
                  and engagement rates.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div
                  className="bg-[#f7f1ef]








 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-[#b7603d]  "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">SaaS Platforms</h3>
                <p className="text-gray-600">
                  Validate user emails during signup to ensure legitimate users
                  and reduce fraud.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div
                  className="bg-[#f7f1ef]








 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-[#b7603d]  "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Financial Services
                </h3>
                <p className="text-gray-600">
                  Ensure secure communication channels for sensitive financial
                  information and notifications.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div
                  className="bg-[#f7f1ef]








 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-[#b7603d]  "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
                <p className="text-gray-600">
                  Verify patient contact information for appointment reminders
                  and health communications.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div
                  className="bg-[#f7f1ef]








 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-[#b7603d]  "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-gray-600">
                  Validate student and parent email addresses for academic
                  communications and notifications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* API Integration Section */}
        <section
          className="py-16 bg-[#f7f1ef]








"
        >
          <div className="container mx-auto px-16">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Simple API Integration
                </h2>
                <p className="text-gray-600 mb-8">
                  Integrate email authentication into your application with just
                  a few lines of code. Our RESTful API is designed for
                  developers.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#b7603d]   mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>RESTful API with JSON responses</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#b7603d]   mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Comprehensive documentation and examples</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#b7603d]   mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      SDKs available for popular programming languages
                    </span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
                  <div className="text-gray-500 mb-2">
                    // Email Authentication API Example
                  </div>
                  <div className="text-blue-400">curl</div>{" "}
                  <span className="text-yellow-300">-X POST</span> \<br />
                  <span className="text-yellow-300">-H</span>{" "}
                  <span className="text-green-300">
                    "Authorization: Bearer YOUR_API_KEY"
                  </span>{" "}
                  \<br />
                  <span className="text-yellow-300">-H</span>{" "}
                  <span className="text-green-300">
                    "Content-Type: application/json"
                  </span>{" "}
                  \<br />
                  {/* <span className="text-yellow-300">-d</span> <span className="text-green-300">'{"email": "user@example.com"}'</span> \<br /> */}
                  <span className="text-blue-400">
                    https://api.example.com/v1/email/verify
                  </span>
                  <br />
                  <br />
                  <div className="text-gray-500">// Response</div>
                  <div className="text-white">{"{"}</div>
                  <div className="ml-4 text-blue-300">"valid"</div>:{" "}
                  <span className="text-green-300">true</span>,<br />
                  <div className="ml-4 text-blue-300">"deliverable"</div>:{" "}
                  <span className="text-green-300">true</span>,<br />
                  <div className="ml-4 text-blue-300">"disposable"</div>:{" "}
                  <span className="text-red-300">false</span>,<br />
                  <div className="ml-4 text-blue-300">"risk_score"</div>:{" "}
                  <span className="text-yellow-300">0.1</span>
                  <br />
                  <div className="text-white">{"}"}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default EmailAuthenticationPage;
