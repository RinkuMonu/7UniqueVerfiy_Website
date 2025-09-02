import type React from "react";
import { Link } from "react-router-dom";
import { ContextData } from "../../config/context";
import { SEOData } from "../../type";
import SEO from "../Helmet/helment";
import { useContext } from "react";
import KnowMore from "../../components/KnowMore";

const WhatsappVerificationPage: React.FC = () => {
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
          <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-2/3 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                WhatsApp Number Verification API – By 7UniqueVerify

              </h1>
              {/* <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
                Secure and Instant WhatsApp Verification for Your Business
              </h2> */}
              <p className="text-lg mb-4 text-white">
                Check if a number is active on WhatsApp in real-time and enable secure OTP delivery.
              </p>
              <p className="mb-4 text-white">
                Verify personal or business WhatsApp accounts instantly — perfect for onboarding, KYC, and fraud prevention.
              </p>
              <p className="mb-6 text-white">
                Trusted by fintechs, e-commerce, and digital platforms across India.

              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/whatsapp-verification-page-api"
                  className="inline-block bg-[#b7603d] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#d19983] transition-colors text-center"
                >
                  Get Started
                </Link>
                <Link
                  to={
                    "https://7uniqueverify-njzw.readme.io/reference/post_api-verify-bankverify#/"
                  }
                  className="inline-block border border-white text-white font-semibold px-6 py-3 rounded hover:bg-white hover:text-[#b7603d] transition-colors text-center"
                >
                  View API Documentation
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="/img/image/enter-otp-concept-illustration.png"
                alt="7Unique Verify WhatsApp Verification"
                className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px] rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          className="p-16 bg-[#f7f1ef]








"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                WhatsApp Verification Features
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our WhatsApp Verification API provides comprehensive
                verification capabilities through the world's most trusted
                messaging platform.
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
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">OTP via WhatsApp</h3>
                <p className="text-gray-600">
                  Send secure one-time passwords directly to users' WhatsApp
                  accounts for reliable two-factor authentication.
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Number Validation
                </h3>
                <p className="text-gray-600">
                  Verify WhatsApp number existence and validity in real-time to
                  ensure successful message delivery.
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
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Business Account Verification
                </h3>
                <p className="text-gray-600">
                  Verify WhatsApp Business accounts and access business profile
                  information for enhanced verification.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#f7f1ef] py-16 px-4 md:px-8 lg:px-20">
          <div className="w-full mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              Choose Your{" "}
              <span className="text-[#b7603d]">Verification Method</span>
            </h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef]   rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Basic OTP Verification
                    </h3>
                    <span className="text-sm text-[#b7603d]   font-medium">
                      Standard Verification
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Send and verify one-time passwords via WhatsApp for simple
                  authentication.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Delivery Time:</span>
                    <span className="font-medium">2-5 seconds</span>
                  </div>
                 
                  <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">
                      Login flows, simple auth
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef] rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   font-bold">🔍</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Bulk Meassage
                    </h3>
                    <span className="text-sm text-[#b7603d]   font-medium">
                      AI-Powered
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Send Bulk Message in One Click" means you can send a single
                  message to hundreds or thousands of contacts at once—just by
                  clicking one button.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">5-10 seconds</span>
                  </div>
                 
                  <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">High-risk transactions</span>
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
                    Basic Verification:
                  </h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ OTP generation and validation</li>
                    <li>✓ Multiple language support</li>
                    <li>✓ Customizable templates</li>
                    <li>✓ Basic analytics</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">
                    key features:
                  </h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ Marketing (promotions, offers)</li>
                    <li>✓ Customer support</li>
                    <li>✓ Reminders/notifications</li>
                    <li>✓ WhatsApp campaigns </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <KnowMore />
        {/* How It Works Section */}
        <section className="p-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How WhatsApp Verification Works
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our WhatsApp verification process ensures secure and reliable
                user authentication through multiple verification methods.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-[#b7603d]   text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Number Validation
                </h3>
                <p className="text-gray-600">
                  Validate the WhatsApp number format and check if it's
                  registered on the WhatsApp platform.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#b7603d]   text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">OTP Generation</h3>
                <p className="text-gray-600">
                  Generate a secure one-time password and prepare it for
                  delivery via WhatsApp message.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#b7603d]   text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Message Delivery</h3>
                <p className="text-gray-600">
                  Send the OTP via WhatsApp message with delivery confirmation
                  and read receipts.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#b7603d]   text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Verification Complete
                </h3>
                <p className="text-gray-600">
                  Verify the entered OTP and confirm successful authentication
                  with detailed response.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section
          className="p-16 bg-[#f7f1ef]








"
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Benefits of WhatsApp Verification
                </h2>
                <p className="text-gray-600 mb-8">
                  Leverage the trust and ubiquity of WhatsApp to provide secure
                  and user-friendly verification experiences.
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
                        High Delivery Rates:
                      </strong>{" "}
                      WhatsApp has excellent message delivery rates globally.
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
                      <strong className="font-medium">User Familiarity:</strong>{" "}
                      Users are comfortable with WhatsApp for receiving
                      verification codes.
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
                      <strong className="font-medium">Global Reach:</strong>{" "}
                      WhatsApp is available in over 180 countries worldwide.
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
                      <strong className="font-medium">Cost Effective:</strong>{" "}
                      More affordable than traditional SMS in many regions.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <img
                  src="/img/image/social-media-whatsapp-app-smartphone.png"
                  alt="WhatsApp Verification Benefits"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="p-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Industry Use Cases
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                WhatsApp verification is trusted across various industries for
                secure and reliable user authentication.
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
                  Verify customer phone numbers during checkout and account
                  registration for secure transactions.
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
                  Secure banking transactions and account access with
                  WhatsApp-based two-factor authentication.
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
                <h3 className="text-xl font-semibold mb-2">Social Platforms</h3>
                <p className="text-gray-600">
                  Verify new user registrations and prevent fake accounts on
                  social media platforms.
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
                      d="M8 7V3a4 4 0 118 0v4m-4 12v-2m-6 6h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Delivery Services
                </h3>
                <p className="text-gray-600">
                  Verify delivery addresses and customer contact information for
                  reliable service.
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
                  Verify patient contact information for appointment
                  confirmations and health updates.
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
                  Verify student and parent contact information for academic
                  communications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* API Integration Section */}
        <section
          className="p-16 bg-[#f7f1ef]








"
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Simple API Integration
                </h2>
                <p className="text-gray-600 mb-8">
                  Integrate WhatsApp verification into your application with our
                  easy-to-use API. Start verifying users in minutes.
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
                    <span>RESTful API with webhook support</span>
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
                    <span>Real-time delivery status and read receipts</span>
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
                    <span>Customizable message templates and branding</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
                  <div className="text-gray-500 mb-2">
                    // WhatsApp Verification API Example
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
                  <span className="text-yellow-300">-d</span>{" "}
                  <span className="text-green-300">
                    '{'phone": "+1234567890'}'
                  </span>{" "}
                  \<br />
                  <span className="text-blue-400">
                    https://api.example.com/v1/whatsapp/verify
                  </span>
                  <br />
                  <br />
                  <div className="text-gray-500">// Response</div>
                  <div className="text-white">{"{"}</div>
                  <div className="ml-4 text-blue-300">"message_id"</div>:{" "}
                  <span className="text-green-300">"msg_12345"</span>,<br />
                  <div className="ml-4 text-blue-300">"status"</div>:{" "}
                  <span className="text-green-300">"sent"</span>,
                  <br />
                  <div className="ml-4 text-blue-300">"expires_at"</div>:{" "}
                  <span className="text-yellow-300">1640995200</span>,<br />
                  <div className="ml-4 text-blue-300">
                    "delivery_status"
                  </div>: <span className="text-green-300">"delivered"</span>
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

export default WhatsappVerificationPage;
