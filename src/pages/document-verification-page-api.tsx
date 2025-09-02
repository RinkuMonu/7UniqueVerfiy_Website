import type React from "react"
import SEO from "../app/Helmet/helment";
import { useContext } from "react";
import { ContextData } from "../config/context";
import { SEOData } from "../type";
import { Link } from "react-router-dom";

const DocumentVerificationPageAPI: React.FC = () => {
  const { seo } = useContext(ContextData) as { seo: SEOData };
  return (
    <>
      <SEO seo={seo} />
      <main className="w-full mx-auto">
        {/* Hero Section - What is Document Verification? */}
        <section
          className="w-full bg-cover bg-center min-h-screen flex items-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-24"
          style={{ backgroundImage: "url('/img/bg (2).png')" }}
        >
          <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-2/3 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Secure Document Verification API
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
                Validate identity documents, detect fraud, and verify user authenticity with our Document Verification API.
              </h2>
              <p className="text-lg mb-4 text-white">
                Our Document API provides real-time verification of government-issued IDs, passports, and other critical documents.
              </p>
              <p className="mb-4 text-white">
                From basic format validation to advanced authenticity checks, we offer comprehensive verification methods to meet compliance needs.
              </p>
              <p className="mb-6 text-white">
                Trusted by financial institutions, healthcare providers, and businesses worldwide for KYC and AML compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={'/contact-us'}
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
                src="https://img.freepik.com/free-vector/hand-drawn-credit-assessment-concept-with-documents_23-2149154259.jpg?ga=GA1.1.389685255.1745228264&semt=ais_hybrid&w=740"
                alt="Document Verification"
                className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
              />
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
          <div className="w-full mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              Where Can You Use <span className="text-[#b7603d]">Document Verification</span>?
            </h2>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Banking & Finance</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Verify customer identities during account opening and transactions.
                </p>
                <div className="text-xs text-[#b7603d]   font-medium">"Comply with KYC regulations!"</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Healthcare</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Validate patient identities and insurance documents.
                </p>
                <div className="text-xs text-[#b7603d]   font-medium">"Prevent medical fraud!"</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">✈️</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Travel & Hospitality</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Verify passports and IDs for check-ins and bookings.
                </p>
                <div className="text-xs text-[#b7603d] font-medium">"Streamline check-ins!"</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Real Estate</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Authenticate client identities for property transactions.
                </p>
                <div className="text-xs text-orange-600 font-medium">"Secure transactions!"</div>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🛒</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">E-Commerce</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Verify age for restricted products and high-value purchases.
                </p>
                <div className="text-xs text-red-600 font-medium">"Prevent underage sales!"</div>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">👨‍💼</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Employment</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Verify candidate credentials and work authorization.
                </p>
                <div className="text-xs text-teal-600 font-medium">"Hire with confidence!"</div>
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
                    <span className="text-[#b7603d]   font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Basic Document Check</h3>
                    <span className="text-sm text-[#b7603d]   font-medium">Format Validation</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Verify if a document follows the correct format and contains required fields.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">2-3 seconds</span>
                  </div>
                
                  <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">Initial screening</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef]








   rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   font-bold">🔍</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Advanced Authentication</h3>
                    <span className="text-sm text-[#b7603d]   font-medium">Comprehensive Check</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Provides complete document verification including security feature checks and database validation.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">5-10 seconds</span>
                  </div>
                 
                  <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">Compliance & KYC</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-lg font-semibold mb-4 text-gray-800">What You Get:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">Basic Check:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ Document format validation</li>
                    <li>✓ Required field verification</li>
                    <li>✓ Basic OCR data extraction</li>
                    <li>✓ Expiry date check</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">Advanced Report:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ Security feature verification</li>
                    <li>✓ Government database cross-check</li>
                    <li>✓ Fraud detection analysis</li>
                    <li>✓ Face match verification</li>
                    <li>✓ Liveness detection</li>
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
              How <span className="text-[#b7603d]">Document Verification</span> Works
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
                  <h3 className="text-lg font-semibold mb-2">Upload Document</h3>
                  <p className="text-gray-600 text-sm">User uploads document image or scan</p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    2
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Data Extraction</h3>
                  <p className="text-gray-600 text-sm">OCR extracts text and data from document</p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    3
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Format Validation</h3>
                  <p className="text-gray-600 text-sm">System validates document structure</p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    4
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Security Checks</h3>
                  <p className="text-gray-600 text-sm">Verifies holograms, watermarks, etc.</p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    5
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Database Verification</h3>
                  <p className="text-gray-600 text-sm">Cross-checks with official databases</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-[#f7f1ef]








 p-6 rounded-lg">
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-[#d38769] rounded-full"></span>
                  <span>100+ Document Types</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  <span>Global Coverage</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                  <span>Military-grade Encryption</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                  <span>99.9% Accuracy</span>
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
              Why Use Our <span className="text-[#b7603d]">Document Verification API</span>?
            </h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef]








   rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   text-xl">⚡</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Fast Processing</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Get document verification results in seconds, not days.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef]








 rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   text-xl">🛡️</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Fraud Detection</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Advanced algorithms detect forged or tampered documents.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef]








  rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d] text-xl">📋</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Regulatory Compliance</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Meet KYC, AML, and other regulatory requirements.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-600 text-xl">🔍</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Detailed Analysis</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Comprehensive document authenticity checks.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-red-600 text-xl">🌐</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Global Coverage</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Supports IDs, passports, and documents from 150+ countries.
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
                  Simple REST API with comprehensive documentation and SDKs.
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
                  Integrate document verification seamlessly into your applications with our developer-friendly API and comprehensive documentation.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-[#b7603d]">✓</span>
                    <span>RESTful API with JSON responses</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#b7603d]">✓</span>
                    <span>150+ countries coverage</span>
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
                  <div className="text-blue-400">POST</div> <span className="text-white">/api/v1/document-verification</span>
                  <div className="text-gray-400 mt-2">Headers:</div>
                  <div className="ml-2 text-yellow-400">Authorization: Bearer YOUR_API_KEY</div>
                  <div className="ml-2 text-yellow-400">Content-Type: application/json</div>
                  <div className="text-yellow-400 mt-3">{"{"}</div>
                  <div className="ml-4 text-white">"document_type": "passport",</div>
                  <div className="ml-4 text-white">"country": "IN",</div>
                  <div className="ml-4 text-white">"document_front": "base64_encoded_image",</div>
                  <div className="ml-4 text-white">"document_back": "base64_encoded_image",</div>
                  <div className="ml-4 text-white">"verification_level": "advanced"</div>
                  <div className="text-yellow-400">{"}"}</div>
                  <div className="mt-4 text-gray-400">// Sample Response</div>
                  <div className="text-yellow-400">{"{"}</div>
                  <div className="ml-4 text-white">"status": "verified",</div>
                  <div className="ml-4 text-white">"document_type": "passport",</div>
                  <div className="ml-4 text-white">"country": "IN",</div>
                  <div className="ml-4 text-white">"is_genuine": true,</div>
                  <div className="ml-4 text-white">"is_expired": false,</div>
                  <div className="ml-4 text-white">"data_consistency": 98.7,</div>
                  <div className="ml-4 text-white">"security_features": {"{"}</div>
                  <div className="ml-8 text-white">"hologram": true,</div>
                  <div className="ml-8 text-white">"microprint": true,</div>
                  <div className="ml-8 text-white">"watermark": true</div>
                  <div className="ml-4 text-white">{"}"},</div>
                  <div className="ml-4 text-white">"extracted_data": {"{"}"...""{"}"}</div>
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

export default DocumentVerificationPageAPI