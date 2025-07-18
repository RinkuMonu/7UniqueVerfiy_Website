import type React from "react"
import SEO from "../app/Helmet/helment";
import { useContext } from "react";
import { ContextData } from "../config/context";
import { SEOData } from "../type";

const GSTINOCRPageAPI: React.FC = () => {
  const { seo } = useContext(ContextData) as { seo: SEOData };
  return (
    <>
      <SEO seo={seo} />
      <main className="w-full mx-auto">
        {/* Hero Section - What is GSTIN OCR? */}
        <section
          className="w-full bg-cover bg-center min-h-screen flex items-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-24"
          style={{ backgroundImage: "url('/img/bg (2).png')" }}
        >
          <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-2/3 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Instant GSTIN Extraction & Verification API
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
                Extract GSTIN from invoices, validate details, and verify registration status with our powerful GSTIN OCR API.
              </h2>
              <p className="text-lg mb-4 text-white">
                Our GSTIN OCR API automatically extracts GST numbers from scanned documents and validates them against official GSTN databases.
              </p>
              <p className="mb-4 text-white">
                From basic validation to comprehensive taxpayer details, we offer multiple verification methods to meet your needs.
              </p>
              <p className="mb-6 text-white">
                Trusted by accounting firms, e-commerce platforms, and tax professionals across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="inline-block bg-[#b7603d] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#d19983] transition-colors text-center"
                >
                  Get Started
                </a>
                <a
                  href="#"
                  className="inline-block bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded hover:bg-white hover:text-[#b7603d] transition-colors text-center"
                >
                  View API Docs
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="https://img.freepik.com/free-vector/registration-form_23-2147981316.jpg?ga=GA1.1.389685255.1745228264&semt=ais_items_boosted&w=740"
                alt="GSTIN OCR Verification"
                className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
              />
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
          <div className="w-full mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              Where Can You Use <span className="text-[#b7603d]">GSTIN OCR</span>?
            </h2>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🧾</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Invoice Processing</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Automatically extract GSTIN from supplier invoices.
                </p>
                <div className="text-xs text-[#b7603d]   font-medium">"Automate data entry!"</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📑</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">E-way Bill Generation</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Validate GSTIN before generating e-way bills.
                </p>
                <div className="text-xs text-[#b7603d]   font-medium">"Compliant logistics!"</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Vendor Onboarding</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Verify GSTIN during vendor registration.
                </p>
                <div className="text-xs text-[#b7603d] font-medium">"Trusted suppliers!"</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">⚖️</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Tax Compliance</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Ensure GSTIN validity for tax filings.
                </p>
                <div className="text-xs text-orange-600 font-medium">"Audit-ready!"</div>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Banking Services</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Verify business GSTIN for loan processing.
                </p>
                <div className="text-xs text-red-600 font-medium">"Secure banking!"</div>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🛒</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">E-commerce Platforms</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Validate seller GSTIN for marketplace compliance.
                </p>
                <div className="text-xs text-teal-600 font-medium">"Verified sellers!"</div>
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
                    <span className="text-[#b7603d]   font-bold">🔢</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Basic GSTIN Check</h3>
                    <span className="text-sm text-[#b7603d]   font-medium">Format Validation</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Verify GSTIN format and checksum without external API calls.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">Instant</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Cost:</span>
                    <span className="font-medium">₹2-5 per verification</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">Initial format checks</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef]








   rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   font-bold">🏢</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Comprehensive GSTIN Check</h3>
                    <span className="text-sm text-[#b7603d]   font-medium">Full Taxpayer Profile</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Provides complete taxpayer details including registration status and business information.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">3-5 seconds</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Cost:</span>
                    <span className="font-medium">₹15-25 per verification</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">Thorough GSTIN verification</span>
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
                    <li>✓ GSTIN format validation</li>
                    <li>✓ Checksum verification</li>
                    <li>✓ State code validation</li>
                    <li>✓ PAN extraction</li>
                    <li>✓ Entity type identification</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">Comprehensive Check:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ Taxpayer legal name</li>
                    <li>✓ Registration status</li>
                    <li>✓ Registration date</li>
                    <li>✓ Business address</li>
                    <li>✓ Taxpayer type (Regular, Composition, etc.)</li>
                    <li>✓ Cancellation status (if applicable)</li>
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
              How <span className="text-[#b7603d]">GSTIN OCR</span> Works
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
                  <p className="text-gray-600 text-sm">Upload invoice or GST certificate</p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    2
                  </div>
                  <h3 className="text-lg font-semibold mb-2">OCR Processing</h3>
                  <p className="text-gray-600 text-sm">AI extracts GSTIN from document</p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    3
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Format Validation</h3>
                  <p className="text-gray-600 text-sm">System validates GSTIN structure</p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    4
                  </div>
                  <h3 className="text-lg font-semibold mb-2">GSTN Database Check</h3>
                  <p className="text-gray-600 text-sm">API queries GSTN database</p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    5
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Return Results</h3>
                  <p className="text-gray-600 text-sm">Receive verification status and details</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-[#f7f1ef]








 p-6 rounded-lg">
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-[#d38769] rounded-full"></span>
                  <span>GSTN Database</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  <span>Real-time Verification</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                  <span>Advanced OCR</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                  <span>All Taxpayers Coverage</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span>Registration Details</span>
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
              Why Use Our <span className="text-[#b7603d]">GSTIN OCR API</span>?
            </h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef]








   rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   text-xl">⏱️</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">90% Time Savings</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Reduce manual data entry by automatically extracting GSTIN from documents.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef]








 rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   text-xl">✅</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">99.9% Accuracy</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Our advanced OCR eliminates human errors in GSTIN transcription.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef]








  rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d] text-xl">📋</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">GSTR Compliance</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Ensure all invoices have valid GSTINs for compliant filings.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-600 text-xl">🔍</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Fraud Detection</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Identify fake or cancelled GSTINs before processing transactions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-red-600 text-xl">🔄</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Bulk Processing</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Process hundreds of invoices simultaneously with batch API.
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
                  Simple REST API with comprehensive documentation and SDK support.
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
                  Integrate GSTIN OCR seamlessly into your applications with our developer-friendly API and comprehensive documentation.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-[#b7603d]">✓</span>
                    <span>RESTful API with JSON responses</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#b7603d]">✓</span>
                    <span>Support for PDF, JPG, PNG formats</span>
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
                <a
                  href="#"
                  className="inline-block bg-[#b7603d] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#d19983] transition-colors"
                >
                  Read Full API Docs
                </a>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm overflow-x-auto">
                  <div className="mb-2 text-gray-400">// Sample API Request</div>
                  <div className="text-blue-400">POST</div> <span className="text-white">/api/v1/gstin-ocr</span>
                  <div className="text-gray-400 mt-2">Headers:</div>
                  <div className="ml-2 text-yellow-400">Authorization: Bearer YOUR_API_KEY</div>
                  <div className="ml-2 text-yellow-400">Content-Type: multipart/form-data</div>
                  <div className="text-yellow-400 mt-3">{"{"}</div>
                  <div className="ml-4 text-white">"file": "invoice.pdf",</div>
                  <div className="ml-4 text-white">"verification_type": "comprehensive",</div>
                  <div className="ml-4 text-white">"extract_address": true</div>
                  <div className="text-yellow-400">{"}"}</div>
                  <div className="mt-4 text-gray-400">// Sample Response</div>
                  <div className="text-yellow-400">{"{"}</div>
                  <div className="ml-4 text-white">"status": "success",</div>
                  <div className="ml-4 text-white">"gstin": "22ABCDE1234F2Z5",</div>
                  <div className="ml-4 text-white">"extracted_text": {"{"}</div>
                  <div className="ml-8 text-white">"gstin": "22ABCDE1234F2Z5",</div>
                  <div className="ml-8 text-white">"business_name": "Tech Solutions Pvt Ltd",</div>
                  <div className="ml-8 text-white">"address": "123 Business Park, Mumbai"</div>
                  <div className="ml-4 text-white">{"}"},</div>
                  <div className="ml-4 text-white">"verification_details": {"{"}</div>
                  <div className="ml-8 text-white">"legal_name": "TECH SOLUTIONS PRIVATE LIMITED",</div>
                  <div className="ml-8 text-white">"registration_date": "2017-07-01",</div>
                  <div className="ml-8 text-white">"status": "Active",</div>
                  <div className="ml-8 text-white">"business_address": "123 BUSINESS PARK, MUMBAI, MH 400001",</div>
                  <div className="ml-8 text-white">"taxpayer_type": "Regular",</div>
                  <div className="ml-8 text-white">"state_jurisdiction": "MUMBAI SOUTH",</div>
                  <div className="ml-8 text-white">"center_jurisdiction": "RANGE-42"</div>
                  <div className="ml-4 text-white">{"}"},</div>
                  <div className="ml-4 text-white">"confidence_score": 0.98</div>
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

export default GSTINOCRPageAPI