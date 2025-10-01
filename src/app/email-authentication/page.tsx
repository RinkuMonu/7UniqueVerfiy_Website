import type React from "react";
import { Link } from "react-router-dom";
import SEO from "../Helmet/helment";
import { useContext } from "react";
import { ContextData } from "../../config/context";
import { SEOData } from "../../type";
import KnowMore from "../../components/KnowMore";
import benefitImg from "../../../public/img/Email Authentication/Email2.png";
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
                Real-Time Email Verification API – Powered by 7UniqueVerify
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
                Accurate & Secure Email Verification by 7UniqueVerify
              </h2>
              <p className="mb-4 text-white">
                Validate email addresses instantly to stop fake signups, improve
                KYC accuracy, and boost deliverability.
              </p>
              <p className="text-lg mb-4 text-white">
                Detect invalid, disposable, and unreachable emails with
                real-time syntax, domain, and mailbox checks.
              </p>
              {/* <p className="mb-6 text-white">
                A must-have for marketers, developers, and businesses that rely
                on clean and verified email lists to ensure effective
                communication and fraud prevention.
              </p> */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to={"/contact-us"}
                  className="inline-block bg-[#b7603d] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#d19983] transition-colors text-center"
                >
                  Get Started
                </Link>
                <Link
                  to="https://7uniqueverify-njzw.readme.io/reference/post_api-verify-bankverify#/"
                  className="inline-block bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded hover:bg-white hover:text-[#b7603d] transition-colors text-center"
                >
                  View API Docs
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="../img/Email Authentication/Email1.png"
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
                Key Features of Email Verification API
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
                  Syntax & Format Check
                </h3>
                <p className="text-gray-600">
                  Validate email structure and format following RFC standards to
                  catch typos and incorrect entries.
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
                  Domain & MX/DNS Verification
                </h3>
                <p className="text-gray-600">
                  Confirm that email domains are live and properly configured
                  for mail delivery.
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
                  SMTP Mailbox Ping
                </h3>
                <p className="text-gray-600">
                  Perform live checks to verify mailbox existence—no more
                  bounces or fake inboxes.
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
                Simple 4-Step Email Authentication
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
                  Submit Email Address
                </h3>
                <p className="text-gray-600">
                  Enter the email to be validated via secure API
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#b7603d]   text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Syntax & Domain Check
                </h3>
                <p className="text-gray-600">
                  System verifies format and MX/DNS records
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#b7603d]   text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  SMTP Ping & Disposable Check
                </h3>
                <p className="text-gray-600">
                  Confirms mailbox existence and flags throwaway domains
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#b7603d]   text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  nstant Result Delivery
                </h3>
                <p className="text-gray-600">
                  Get validation status and detailed analysis in real-time
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-[#f7f1ef]">
          <div className="container mx-auto px-16">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Benefits of Using
                  <span className="text-[#b7603d]">
                    {" "}
                    Email Verification{" "}
                  </span>{" "}
                  API
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
                        Improved Deliverability :
                      </strong>{" "}
                      Reduce bounce rates and increase inbox reach with verified
                      emails.
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
                        Higher Data Quality:
                      </strong>{" "}
                      Ensure accurate, trustworthy user data across marketing
                      and KYC workflows.
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
                        Fraud & Spam Prevention:
                      </strong>{" "}
                      Prevent bots, fake accounts, and spam during signups.
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
                        Compliance & Trustworthy Onboarding:
                      </strong>{" "}
                      Strengthen platform credibility with clean email data.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <img
                  src={benefitImg}
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
                Where Email Verification API Is Used
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
                <h3 className="text-xl font-semibold mb-2">
                  User Signups & Registrations
                </h3>
                <p className="text-gray-600">
                  Prevent fake or mistyped emails at the point of account
                  creation by validating in real-time.
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
                <h3 className="text-xl font-semibold mb-2">
                  Email Marketing & Outreach Campaigns
                </h3>
                <p className="text-gray-600">
                  Ensure campaigns reach real inboxes by cleaning email lists
                  and reducing bounce rates.
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
                <h3 className="text-xl font-semibold mb-2">
                  CRM & Lead Management Systems
                </h3>
                <p className="text-gray-600">
                  Maintain high-quality lead databases by verifying email
                  addresses during capture or import.
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
                  Financial & KYC Applications
                </h3>
                <p className="text-gray-600">
                  Support fraud prevention by validating emails used during
                  onboarding or identity verification.
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
                <h3 className="text-xl font-semibold mb-2">
                  SaaS Platforms & Subscription Services
                </h3>
                <p className="text-gray-600">
                  Authenticate users signing up for free trials or paid plans,
                  reducing churn and spam accounts.
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
                <h3 className="text-xl font-semibold mb-2">
                  {" "}
                  E-commerce Checkout & Order Confirmation
                </h3>
                <p className="text-gray-600">
                  Avoid order delays and reduce failed delivery communication by
                  verifying customer emails during checkout.
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
                  Simple API Integration for Email Verification
                </h2>
                <p className="text-gray-600 mb-8">
                  Easily integrate 7UniqueVerify’s Email Authentication API into
                  your application with minimal development effort. Designed for
                  developers, startups, and enterprises looking for fast,
                  scalable email verification solutions.
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
                    <span>RESTful API with secure and structured JSON responses</span>
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
                    <span>Detailed API documentation with step-by-step guides and usage examples
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
                      SDKs available for popular languages like Python, Node.js, PHP, and Java

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

        {/* seo content */}
        <section className="py-10 px-5 bg-gradient-to-br from-[#b7603d] via-[#c87a5d] to-[#9f4a2a] text-white relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-white"></div>
            <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-white"></div>
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
                Trust & Security
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">

                Why We Are Your Trusted Partner for Email Verification API

              </h2>
              <p className="max-w-2xl mx-auto text-lg text-white/80">
                Secure, reliable, and lightning-fast verification solutions built for modern businesses
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:shadow-xl">
                  <div className="flex items-start mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 mr-4 group-hover:bg-white/30 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed text-white/90">
                    7uniqueverify offers a secure and reliable Email Verification API in India to help businesses validate email addresses in real time. Our solutions protect communications, reduce bounce rates, and improve the trust of digital platforms and enterprises.                    </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:shadow-xl">
                  <div className="flex items-start mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 mr-4 group-hover:bg-white/30 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed text-white/90">

                    With our Email Address Verification API in India, businesses can check the authenticity of email addresses, detect invalid email address formats, and prevent fraudulent input. These controls help improve the efficiency of marketing, onboarding customers, and communicating business transactions.                    </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:shadow-xl">
                  <div className="flex items-start mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 mr-4 group-hover:bg-white/30 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed text-white/90">

                    Regarded as the best email verification API in India, <a href="https://www.7uniqueverfiy.com" className="font-bold  underline"> 7uniqueverify </a>  offers scalable solutions for all types of businesses, from startups and enterprises to fintechs and e-commerce. Our APIs allow your business to validate customer information quickly, in real time, with the data security expected from regulated industries.   </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:shadow-xl">
                  <div className="flex items-start mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 mr-4 group-hover:bg-white/30 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed text-white/90">
                    The Real Time Email Verification API India makes it easy for companies to integrate email validation into their existing workflows. Reducing operational risk and ensuring reliable communications creates a seamless digital experience for your customers.                       </p>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <a href="/contact-us">
                <button className="px-8 py-3 bg-white text-[#b7603d] font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl">
                  Get Started Today
                </button>
              </a>
            </div>

          </div>
        </section>
      </main>
    </>
  );
};

export default EmailAuthenticationPage;
