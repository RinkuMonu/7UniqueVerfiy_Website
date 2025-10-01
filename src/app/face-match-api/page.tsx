import type React from "react";
import { Link } from "react-router-dom";
import SEO from "../Helmet/helment";
import { useContext } from "react";
import { ContextData } from "../../config/context";
import { SEOData } from "../../type";
import KnowMore from "../../components/KnowMore";

const FaceMatchAPIPage: React.FC = () => {
  const { seo } = useContext(ContextData) as { seo: SEOData };
  return (
    <>
      <SEO seo={seo} />
      <main className="w-full pb-24">
        {/* Hero Section */}
        <section
          className="w-full bg-cover bg-center min-h-screen flex items-center px-4 py-10"
          style={{ backgroundImage: "url('/img/bg (2).png')" }}
        >
          <div className="container mx-auto  flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-2/3 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                AI-Based Face Match API for Real-Time Identity Verification

              </h1>

              <p className="text-lg mb-4 text-white">
                Match selfies with ID photos using advanced facial recognition and similarity scoring.
                Ensure secure, contactless KYC and onboarding with liveness detection and accurate face comparison.

              </p>
              <p className="mb-4 text-white">
                Ideal for fintech, HR tech, and digital access control systems.

              </p>

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
                src="/ui/Face-match-API/img1_Artboard 1.png"
                alt="7Unique Verify Face Match API"
                className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
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
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Powerful Face Matching Features
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our Face Match API offers cutting-edge facial recognition
                technology with enterprise-grade security and accuracy
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div
                  className="w-12 h-12 bg-[#f7f1ef]








 rounded-lg flex items-center justify-center mb-4"
                >
                  <svg
                    className="w-6 h-6 text-[#b7603d]  "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  High Accuracy Recognition
                </h3>
                <p className="text-gray-600">
                  99.7% accuracy rate with advanced deep learning algorithms for
                  precise facial feature detection and matching
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div
                  className="w-12 h-12 bg-[#f7f1ef]








   rounded-lg flex items-center justify-center mb-4"
                >
                  <svg
                    className="w-6 h-6 text-[#b7603d]  "
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
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Real-time Processing
                </h3>
                <p className="text-gray-600">
                  Lightning-fast face matching with response times under 500ms
                  for instant verification results
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div
                  className="w-12 h-12 bg-[#f7f1ef]








  rounded-lg flex items-center justify-center mb-4"
                >
                  <svg
                    className="w-6 h-6 text-[#b7603d]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Secure & Compliant
                </h3>
                <p className="text-gray-600">
                  GDPR compliant with end-to-end encryption and secure data
                  handling for maximum privacy protection
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24">
          <div className="w-full mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Choose Your <span className="text-[#b7603d]">Face Match</span>{" "}
                Verification Type
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Select the verification method that best fits your security
                requirements and user experience needs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Basic Face Match */}
              <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-6">
                  <div
                    className="w-12 h-12 bg-[#f7f1ef]
        
        
        
        
        
        
        
        
         rounded-lg flex items-center justify-center mr-4"
                  >
                    <svg
                      className="w-6 h-6 text-[#b7603d]  "
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Basic Face Match
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Quick facial comparison for standard verification needs with
                  essential security features.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-[#b7603d]   mr-3">✓</span>
                    <span>1:1 Face Comparison</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#b7603d]   mr-3">✓</span>
                    <span>Similarity Score</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#b7603d]   mr-3">✓</span>
                    <span>Basic Quality Checks</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#b7603d]   mr-3">✓</span>
                    <span>Fast Processing</span>
                  </li>
                </ul>

                <Link to={"/contact-us"}>
                  <button className="w-full bg-[#b7603d] text-white py-3 rounded-lg font-semibold hover:bg-[#d19983] transition-colors">
                    Get API's
                  </button>
                </Link>
              </div>

              {/* Advanced Face Match */}
              <div className="bg-gradient-to-br from-[#b7603d] to-[#79d9ef] text-white rounded-lg p-8 transform hover:scale-105 transition-transform">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">Advanced Face Match</h3>
                </div>
                <p className="text-blue-100 mb-6">
                  Comprehensive facial verification with advanced security
                  features and detailed analysis.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-300 mr-3">✓</span>
                    <span>1:1 Face Comparison</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-300 mr-3">✓</span>
                    <span>Liveness Detection</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-300 mr-3">✓</span>
                    <span>Anti-Spoofing Protection</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-300 mr-3">✓</span>
                    <span>Detailed Quality Analysis</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-300 mr-3">✓</span>
                    <span>Fraud Risk Assessment</span>
                  </li>
                </ul>
                {/* <div className="text-2xl font-bold mb-4">
                  ₹5 per verification
                </div> */}
                <Link to={"/contact-us"}>
                  <button className="w-full bg-white text-[#b7603d] py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Choose Advanced
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <KnowMore />

        {/* How It Works Section */}
        <section className="p-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                How Face Matching Works
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Simple 4-step process to implement facial recognition and
                matching in your application
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#b7603d]   text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Upload Images
                </h3>
                <p className="text-gray-600">
                  Submit two facial images through our secure API endpoint for
                  comparison
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#b7603d]   text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Face Detection
                </h3>
                <p className="text-gray-600">
                  Our AI detects and extracts facial features from both images
                  with precision
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#b7603d]   text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Feature Analysis
                </h3>
                <p className="text-gray-600">
                  Advanced algorithms analyze and compare facial landmarks and
                  features
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#b7603d]   text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Match Results
                </h3>
                <p className="text-gray-600">
                  Receive similarity score and match confidence level in
                  real-time
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
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Why Choose Our Face Match API?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#d38769] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        Industry-Leading Accuracy
                      </h3>
                      <p className="text-gray-600">
                        Achieve 99.7% accuracy with our state-of-the-art facial
                        recognition algorithms
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#d38769] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        Scalable Infrastructure
                      </h3>
                      <p className="text-gray-600">
                        Handle millions of face matching requests with our
                        cloud-based infrastructure
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#d38769] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        Easy Integration
                      </h3>
                      <p className="text-gray-600">
                        Simple REST API with comprehensive documentation and
                        SDKs for quick implementation
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#d38769] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        Privacy Protection
                      </h3>
                      <p className="text-gray-600">
                        GDPR compliant with secure data handling and no
                        permanent storage of biometric data
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <img
                  src="/ui/Face-match-API/img2_Artboard 1.png"
                  alt="Face Match Benefits"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="p-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Industry Use Cases
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover how businesses across industries leverage our Face
                Match API for enhanced security and user experience
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#b7603d]   rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Access Control
                </h3>
                <p className="text-gray-600">
                  Secure building access and employee authentication with
                  contactless facial recognition
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#b7603d]   rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Identity Verification
                </h3>
                <p className="text-gray-600">
                  Verify customer identities for KYC compliance and fraud
                  prevention in financial services
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#b7603d] rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Attendance Systems
                </h3>
                <p className="text-gray-600">
                  Automate employee attendance tracking with accurate facial
                  recognition technology
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#b7603d] rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Customer Onboarding
                </h3>
                <p className="text-gray-600">
                  Streamline digital onboarding processes with instant identity
                  verification
                </p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#b7603d] rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Security Systems
                </h3>
                <p className="text-gray-600">
                  Enhance security with real-time face matching for surveillance
                  and monitoring
                </p>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#b7603d] rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Mobile Applications
                </h3>
                <p className="text-gray-600">
                  Integrate facial authentication into mobile apps for secure
                  user login
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
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Simple API Integration
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Get started with our Face Match API in minutes. Our RESTful
                  API is designed for developers with comprehensive
                  documentation and code examples.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#d38769] rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">
                      RESTful API with JSON responses
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#d38769] rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">
                      SDKs for popular programming languages
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#d38769] rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">
                      Comprehensive documentation and examples
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#d38769] rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">
                      24/7 developer support
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm overflow-x-auto">
                  <div className="mb-4">
                    <span className="text-gray-500">
                      # Face Match API Example
                    </span>
                  </div>
                  <div className="mb-2">
                    <span className="text-blue-400">curl</span>{" "}
                    <span className="text-yellow-400">-X POST</span>{" "}
                  </div>
                  <div className="mb-2 ml-4">
                    <span className="text-green-400">
                      "https://api.example.com/v1/face-match"
                    </span>{" "}
                  </div>
                  <div className="mb-2 ml-4">
                    <span className="text-yellow-400">-H</span>{" "}
                    <span className="text-green-400">
                      "Authorization: Bearer YOUR_API_KEY"
                    </span>{" "}
                  </div>
                  <div className="mb-2 ml-4">
                    <span className="text-yellow-400">-H</span>{" "}
                    <span className="text-green-400">
                      "Content-Type: application/json"
                    </span>{" "}
                  </div>
                  <div className="mb-2 ml-4">
                    <span className="text-yellow-400">-d</span>{" "}
                    <span className="text-green-400">
                      '
                      {`{"image1": "base64_encoded_image1", "image2": "base64_encoded_image2"}`}
                      '
                    </span>
                  </div>
                  <div className="border-t border-gray-700 pt-4">
                    <div className="text-gray-500"># Response</div>
                    <div className="text-green-400">{`{`}</div>
                    <div className="ml-4 text-green-400">"match": true,</div>
                    <div className="ml-4 text-green-400">
                      "confidence": 0.97,
                    </div>
                    <div className="ml-4 text-green-400">
                      "similarity_score": 0.95
                    </div>
                    <div className="text-green-400">{`}`}</div>
                  </div>
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

                Why You Should Pick Us to Be Your Trusted Partner for Face Verification API

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
                    7uniqueverify offers one of the safest and most reliable face match API verifications, allowing businesses to verify and validate identity in real-time in India. Our service allows for trust, the recipe for fraud, and provides the assurances of confidence for digital onboarding.                                      </p>
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

                    Organizations will know at that moment if a person is logging in with a fake or spoofed identity, using our Face Liveness Detection API in India. Clients will become confident knowing that only actual human users are being verified, which will help meet retaining compliance, security, and confidence in banks, fintech, and enterprise.                                 </p>
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

                    Our Face Verification API India is designed to provide scalable solutions for startups, financial institutions, and digital businesses. It enables seamless identity verification that reduces the risk of onboarding while increasing operational efficiency and maintaining accuracy.                      </p>
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
                    <a href="https://www.7uniqueverfiy.com" className="font-bold  underline"> 7uniqueverify </a> is a reliable provider of Face Identification API in India and offers reliable, resilient, and simple-to-integrate solutions. Businesses will build and develop client trust, expedite an identity verification process, and provide more efficient security for their businesses with real-time face authentication.                       </p>
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

export default FaceMatchAPIPage;
