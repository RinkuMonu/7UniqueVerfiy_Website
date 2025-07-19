import type React from "react"
import { ContextData } from "../../config/context";
import { SEOData } from "../../type";
import SEO from "../Helmet/helment";
import { useContext } from "react";
import { Link } from "react-router-dom";

const PANVerificationPageApi: React.FC = () => {
  const { seo } = useContext(ContextData) as { seo: SEOData };
  return (
    <>
      <SEO seo={seo} />
      <main className="w-full mx-auto">
        {/* Hero Section - What is PAN Verification? */}
        <section
          className="w-full bg-cover bg-center min-h-screen flex items-center  px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-24"
          style={{ backgroundImage: "url('/img/bg (2).png')" }}
        >
          <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-2/3 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Verify PAN Cards Instantly with Complete Accuracy</h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
                Ensure tax compliance, prevent fraud, and streamline KYC processes with our comprehensive PAN Verification
                APIs.
              </h2>
              <p className="text-lg mb-4 text-white">
                Our PAN Verification API provides instant validation of PAN card details with both normal and detailed
                verification options, ensuring complete tax compliance and identity authentication.
              </p>
              <p className="mb-4 text-white">
                From basic PAN validation to detailed cardholder information, we offer comprehensive verification methods
                to meet your specific business requirements and regulatory compliance needs.
              </p>
              <p className="mb-6 text-white">
                Trusted by financial institutions, fintech companies, and businesses across India to ensure authentic PAN
                verification and prevent tax-related fraud.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={'/contact-us'}
                  className="inline-block bg-[#b7603d] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#d19983] transition-colors text-center"
                >
                  Get Started
                </Link>
                <Link to={'https://7uniqueverify-njzw.readme.io/reference/post_api-verify-bankverify#/'}
                  className="inline-block bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded hover:bg-white hover:text-[#b7603d] transition-colors text-center"
                >
                  View API Docs
                </Link>

              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="https://img.freepik.com/free-vector/tax-concept-illustration_114360-1234.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
                alt="PAN Verification"
                className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
              />
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
          <div className="w-full mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              Where Can You Use <span className="text-[#b7603d]">PAN Verification</span>?
            </h2>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Banking & Finance</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Verify customer PAN for account opening, loan processing, and KYC compliance.
                </p>
                <div className="text-xs text-[#b7603d]   font-medium">"Ensure tax compliance!"</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">💳</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Credit & Lending</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Validate PAN for credit card applications and loan eligibility assessments.
                </p>
                <div className="text-xs text-[#b7603d]   font-medium">"Prevent identity fraud!"</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Investment Platforms</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Verify investor PAN for mutual funds, stocks, and trading platforms.
                </p>
                <div className="text-xs text-[#b7603d] font-medium">"Regulatory compliance!"</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🛒</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">E-commerce</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Verify seller and high-value customer PAN for marketplace compliance.
                </p>
                <div className="text-xs text-orange-600 font-medium">"Secure transactions!"</div>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Insurance</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Validate policyholder PAN for insurance applications and claim processing.
                </p>
                <div className="text-xs text-red-600 font-medium">"Faster claim processing!"</div>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Corporate HR</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Verify employee PAN for payroll processing and tax compliance.
                </p>
                <div className="text-xs text-teal-600 font-medium">"Streamline payroll!"</div>
              </div>
            </div>
          </div>
        </section>

        {/* Verification Types Section */}
        <section className="bg-[#f7f1ef]








 py-16 px-4 md:px-8 lg:px-20">
          <div className="w-full mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              Choose Your <span className="text-[#b7603d]">Verification Method</span>
            </h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef]








 rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   font-bold">📋</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Normal PAN Verification</h3>
                    <span className="text-sm text-[#b7603d]   font-medium">Basic Validation</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Validates PAN number format and checks if the PAN exists in the Income Tax database.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">1-2 seconds</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Cost:</span>
                    <span className="font-medium">₹1-2 per verification</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">Basic compliance checks</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef]








   rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   font-bold">📊</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Detailed PAN Verification</h3>
                    <span className="text-sm text-[#b7603d]   font-medium">Comprehensive Check</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Provides complete PAN details including name, date of birth, and additional cardholder information.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">2-3 seconds</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Cost:</span>
                    <span className="font-medium">₹3-5 per verification</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">Complete KYC processes</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-lg font-semibold mb-4 text-gray-800">What You Get:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">Normal Verification:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ PAN validity status</li>
                    <li>✓ Basic format validation</li>
                    <li>✓ Active/Inactive status</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">Detailed Verification:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ Complete cardholder name</li>
                    <li>✓ Date of birth</li>
                    <li>✓ Father's name</li>
                    <li>✓ PAN status and category</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
          <div className="w-full mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              How <span className="text-[#b7603d]">PAN Verification</span> Works
            </h2>
            <div className="relative">
              <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-200"></div>
              <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-[#b7603d]
 to-transparent"></div>

              <div className="grid gap-8 grid-cols-1 md:grid-cols-5">
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    1
                  </div>
                  <h3 className="text-lg font-semibold mb-2">PAN Input</h3>
                  <p className="text-gray-600 text-sm">User enters PAN number and cardholder name for verification</p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    2
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Format Validation</h3>
                  <p className="text-gray-600 text-sm">System validates PAN format and structure compliance</p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    3
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Database Check</h3>
                  <p className="text-gray-600 text-sm">API queries Income Tax Department database for verification</p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    4
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Name Matching</h3>
                  <p className="text-gray-600 text-sm">Cross-reference provided name with official PAN records</p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    5
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Instant Results</h3>
                  <p className="text-gray-600 text-sm">Receive verification status and detailed information</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-[#f7f1ef]








 p-6 rounded-lg">
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-[#d38769] rounded-full"></span>
                  <span>Income Tax Database</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  <span>Real-time Verification</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                  <span>Secure API</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                  <span>Tax Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-[#f7f1ef]








 py-16 px-4 md:px-8 lg:px-20">
          <div className="w-full mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              Why Use Our <span className="text-[#b7603d]">PAN Verification API</span>?
            </h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef]








   rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   text-xl">⚡</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Instant Verification</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Get PAN verification results in 1-3 seconds with direct access to Income Tax databases.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef]








 rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   text-xl">🛡️</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Fraud Prevention</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Detect fake or invalid PAN cards to prevent identity fraud and financial crimes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef]








  rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d] text-xl">📋</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Tax Compliance</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Ensure compliance with tax regulations and KYC requirements for financial transactions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-600 text-xl">🔒</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Secure & Encrypted</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Bank-grade security with end-to-end encryption for all PAN verification requests.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-red-600 text-xl">📊</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Detailed Information</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Access comprehensive PAN details including name, DOB, and verification status.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-teal-600 text-xl">⚙️</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Easy Integration</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Simple REST API with comprehensive documentation and multiple SDK options.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
          <div className="w-full mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-1/2 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Simple <span className="text-[#b7603d]">API Integration</span>
                </h2>
                <p className="text-gray-600">
                  Integrate PAN verification seamlessly into your applications with our developer-friendly API and
                  comprehensive documentation.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-[#b7603d]">✓</span>
                    <span>RESTful API with JSON responses</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#b7603d]">✓</span>
                    <span>Multiple verification modes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#b7603d]">✓</span>
                    <span>Real-time verification results</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#b7603d]">✓</span>
                    <span>Comprehensive error handling</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#b7603d]">✓</span>
                    <span>Sandbox environment for testing</span>
                  </div>
                </div>
                <Link to={'https://7uniqueverify-njzw.readme.io/reference/post_api-verify-bankverify#/'}
                  className="inline-block bg-[#b7603d] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#d19983] transition-colors"
                >
                  Read Full API Docs
                </Link>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm overflow-x-auto">
                  <div className="mb-2 text-gray-400">// Sample API Request</div>
                  <div className="text-blue-400">POST</div> <span className="text-white">/api/v1/pan-verification</span>
                  <div className="text-gray-400 mt-2">Headers:</div>
                  <div className="ml-2 text-yellow-400">Authorization: Bearer YOUR_API_KEY</div>
                  <div className="ml-2 text-yellow-400">Content-Type: application/json</div>
                  <div className="text-yellow-400 mt-3">{"{"}</div>
                  <div className="ml-4 text-white">"pan_number": "ABCDE1234F",</div>
                  <div className="ml-4 text-white">"name": "John Doe",</div>
                  <div className="ml-4 text-white">"verification_type": "detailed"</div>
                  <div className="text-yellow-400">{"}"}</div>
                  <div className="mt-4 text-gray-400">// Sample Response</div>
                  <div className="text-yellow-400">{"{"}</div>
                  <div className="ml-4 text-white">"status": "verified",</div>
                  <div className="ml-4 text-white">"name_match": "exact",</div>
                  <div className="ml-4 text-white">"pan_status": "active",</div>
                  <div className="ml-4 text-white">"cardholder_name": "JOHN DOE",</div>
                  <div className="ml-4 text-white">"date_of_birth": "01/01/1990"</div>
                  <div className="text-yellow-400">{"}"}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default PANVerificationPageApi
