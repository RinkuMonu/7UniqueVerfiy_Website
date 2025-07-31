import type React from "react";
import SEO from "../app/Helmet/helment";
import { useContext } from "react";
import { ContextData } from "../config/context";
import { SEOData } from "../type";
import { Link } from "react-router-dom";

const FaceMatchPageAPI: React.FC = () => {
  const { seo } = useContext(ContextData) as { seo: SEOData };
  return (
    <>
      <SEO seo={seo} />
      <main className="w-full mx-auto">
        {/* Hero Section - What is Face Match API? */}
        <section
          className="w-full bg-cover bg-center min-h-screen flex items-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-24"
          style={{ backgroundImage: "url('/img/bg (2).png')" }}
        >
          <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-2/3 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Verify Identity Instantly with Advanced Face Matching Technology
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
                Ensure secure authentication, prevent identity fraud, and
                streamline user verification with our comprehensive Face Match
                APIs.
              </h2>
              <p className="text-lg mb-4 text-white">
                Our Face Match API provides instant facial recognition and
                comparison to ensure authentic user verification and prevent
                identity fraud with industry-leading accuracy.
              </p>
              <p className="mb-4 text-white">
                From basic face comparison to advanced biometric matching and
                liveness detection, we offer comprehensive methods to meet your
                specific business requirements and security needs.
              </p>
              <p className="mb-6 text-white">
                Trusted by banks, fintech companies, and businesses worldwide to
                ensure secure facial verification and prevent unauthorized
                access.
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
                src="https://img.freepik.com/free-vector/visa-stamping-illustration_1284-52334.jpg?ga=GA1.1.389685255.1745228264&semt=ais_items_boosted&w=740"
                alt="Face Match API"
                className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
              />
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section
          className="bg-[#f7f1ef]








 py-16 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24"
        >
          <div className="w-full mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
              <span className="text-[#b7603d]">Face Match API</span> Use Cases
            </h2>
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">
              <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
                <img
                  src="https://img.freepik.com/free-vector/finance-services-financial-transaction-e-commerce-e-payment_335657-3134.jpg?ga=GA1.1.389685255.1745228264&semt=ais_items_boosted&w=740"
                  alt="Banking & Finance"
                  className="w-full h-48 object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Banking & Finance
                </h3>
                <p className="text-gray-600">
                  Secure customer onboarding, transaction verification, and
                  account access with facial recognition technology for enhanced
                  security.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
                <img
                  src="https://img.freepik.com/free-vector/fingerprint-concept-illustration_114360-3630.jpg?ga=GA1.1.389685255.1745228264&semt=ais_items_boosted&w=740"
                  alt="Access Control"
                  className="w-full h-48 object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Access Control
                </h3>
                <p className="text-gray-600">
                  Implement contactless access control for buildings, offices,
                  and secure areas with facial recognition authentication.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0">
                <img
                  src="https://img.freepik.com/free-vector/flat-safer-internet-day-background_52683-154505.jpg?ga=GA1.1.389685255.1745228264&semt=ais_items_boosted&w=740"
                  alt="Identity Verification"
                  className="w-full h-48 object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Identity Verification
                </h3>
                <p className="text-gray-600">
                  Verify customer identities for KYC compliance, account
                  registration, and fraud prevention across various industries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Verification Types Section */}
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
                <div className="text-2xl font-bold text-[#b7603d] mb-4">
                  ₹2 per verification
                </div>
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
                <div className="text-2xl font-bold mb-4">
                  ₹5 per verification
                </div>
                <Link to={"/contact-us"}>
                  <button className="w-full bg-white text-[#b7603d] py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Choose Advanced
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section
          className="bg-[#f7f1ef]








 py-16 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24"
        >
          <div className="w-full mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                How <span className="text-[#b7603d]">Face Match</span> Works
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our face matching process is designed to be simple, secure, and
                highly accurate for seamless integration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="bg-[#b7603d] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-4">Upload Images</h3>
                <p className="text-gray-600">
                  Submit two facial images through our secure API endpoint for
                  comparison and analysis.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#b7603d] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-4">Face Detection</h3>
                <p className="text-gray-600">
                  Our AI detects and extracts facial features from both images
                  with high precision and accuracy.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#b7603d] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-4">Feature Analysis</h3>
                <p className="text-gray-600">
                  Advanced algorithms analyze facial landmarks, geometry, and
                  unique characteristics for comparison.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#b7603d] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Similarity Scoring
                </h3>
                <p className="text-gray-600">
                  Generate confidence scores and similarity percentages based on
                  facial feature matching algorithms.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#b7603d] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  5
                </div>
                <h3 className="text-xl font-semibold mb-4">Instant Results</h3>
                <p className="text-gray-600">
                  Receive comprehensive verification results with match status
                  and detailed analysis in real-time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24">
          <div className="w-full mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose Our{" "}
                  <span className="text-[#b7603d]">Face Match API</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Our face matching solution offers unmatched accuracy,
                  security, and reliability for your business needs.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-[#b7603d] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        99.7% Accuracy Rate
                      </h3>
                      <p className="text-gray-600">
                        Industry-leading facial recognition accuracy with
                        advanced deep learning algorithms and continuous model
                        improvements.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#b7603d] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Lightning Fast Processing
                      </h3>
                      <p className="text-gray-600">
                        Get verification results in under 2 seconds with our
                        optimized infrastructure and efficient algorithms.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#b7603d] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Enterprise Security
                      </h3>
                      <p className="text-gray-600">
                        Bank-grade security with encrypted data transmission,
                        secure storage, and compliance with international
                        standards.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#b7603d] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Easy Integration
                      </h3>
                      <p className="text-gray-600">
                        Simple REST API with comprehensive documentation, SDKs,
                        and 24/7 developer support for quick implementation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2">
                <img
                  src="https://img.freepik.com/free-vector/wearable-technology-illustration_24908-61581.jpg?ga=GA1.1.389685255.1745228264&semt=ais_items_boosted&w=740"
                  alt="Face Match Benefits"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* API Integration Section */}
        <section
          className="bg-[#f7f1ef]








 py-16 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24"
        >
          <div className="w-full mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Simple <span className="text-[#b7603d]">API Integration</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Get started with our Face Match API in minutes. Simple REST
                  endpoints, comprehensive documentation, and multiple SDK
                  options.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="bg-[#b7603d] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">
                      ✓
                    </div>
                    <span className="text-gray-700">
                      RESTful API with JSON responses
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-[#b7603d] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">
                      ✓
                    </div>
                    <span className="text-gray-700">
                      SDKs for popular programming languages
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-[#b7603d] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">
                      ✓
                    </div>
                    <span className="text-gray-700">
                      Webhook support for real-time updates
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-[#b7603d] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">
                      ✓
                    </div>
                    <span className="text-gray-700">
                      Comprehensive API documentation
                    </span>
                  </div>
                </div>

                <a
                  href="https://7uniqueverify-njzw.readme.io/reference/post_api-verify-bankverify#/"
                  className="inline-block bg-[#b7603d] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#d19983] transition-colors"
                >
                  View API Documentation
                </a>
              </div>

              <div className="lg:w-1/2">
                <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
                  <div className="text-gray-400 mb-2">
                    # Face Match API Example
                  </div>
                  <div className="text-white">
                    curl -X POST https://api.example.com/v1/face-match \
                  </div>
                  <div className="text-white ml-4">
                    -H "Authorization: Bearer YOUR_API_KEY" \
                  </div>
                  <div className="text-white ml-4">
                    -H "Content-Type: application/json" \
                  </div>
                  <div className="text-white ml-4">-d '{`{`}</div>
                  <div className="text-white ml-8">
                    "image1": "base64_encoded_image1",
                  </div>
                  <div className="text-white ml-8">
                    "image2": "base64_encoded_image2",
                  </div>
                  <div className="text-white ml-8">
                    "verification_type": "advanced"
                  </div>
                  <div className="text-white ml-4">{`}`}'</div>
                  <br />
                  <div className="text-gray-400 mb-2"># Response</div>
                  <div className="text-yellow-400">{`{`}</div>
                  <div className="text-white ml-4">"match": true,</div>
                  <div className="text-white ml-4">"confidence": 0.97,</div>
                  <div className="text-white ml-4">
                    "similarity_score": 95.8,
                  </div>
                  <div className="text-white ml-4">
                    "liveness_check": "passed"
                  </div>
                  <div className="text-yellow-400">{`}`}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
      </main>
    </>
  );
};

export default FaceMatchPageAPI;
