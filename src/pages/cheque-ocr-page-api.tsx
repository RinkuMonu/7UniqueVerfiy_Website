import type React from "react"
import SEO from "../app/Helmet/helment";
import { useContext } from "react";
import { ContextData } from "../config/context";
import { SEOData } from "../type";
import { Link } from "react-router-dom";

const ChequeOCRPageAPI: React.FC = () => {
  const { seo } = useContext(ContextData) as { seo: SEOData };
  return (
    <>
      <SEO seo={seo} />
      <main className="w-full mx-auto">
        {/* Hero Section - What is Cheque OCR? */}
        <section
          className="w-full bg-cover bg-center min-h-screen flex items-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-24"
          style={{ backgroundImage: "url('/img/bg (2).png')" }}
        >
          <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-2/3 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Intelligent Cheque Processing with OCR API
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
                Extract cheque details instantly with our high-accuracy Cheque OCR API.
              </h2>
              <p className="text-lg mb-4 text-white">
                Our Cheque OCR API automatically reads and verifies MICR codes, amounts, payee names and more from cheque images.
              </p>
              <p className="mb-4 text-white">
                Process cheques 10x faster with 99.5% accuracy, reducing manual entry errors.
              </p>
              <p className="mb-6 text-white">
                Trusted by banks, financial institutions, and accounting platforms worldwide.
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
                src="https://img.freepik.com/free-vector/voucher-templates_23-2147500434.jpg?ga=GA1.1.389685255.1745228264&semt=ais_items_boosted&w=740"
                alt="Cheque OCR Processing"
                className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
              />
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
          <div className="w-full mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              Where Can You Use <span className="text-[#b7603d]">Cheque OCR</span>?
            </h2>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Banking Operations</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Automate cheque processing for faster clearing.
                </p>
                <div className="text-xs text-[#b7603d]   font-medium">"Reduce processing time!"</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Accounting Software</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Import cheque data directly into accounting systems.
                </p>
                <div className="text-xs text-[#b7603d]   font-medium">"Eliminate manual entry!"</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Mobile Banking</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Enable mobile cheque deposits with instant data capture.
                </p>
                <div className="text-xs text-[#b7603d] font-medium">"Better customer experience!"</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Corporate Treasury</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Process bulk corporate cheques efficiently.
                </p>
                <div className="text-xs text-orange-600 font-medium">"High-volume processing!"</div>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Fraud Detection</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Identify altered or fraudulent cheques automatically.
                </p>
                <div className="text-xs text-red-600 font-medium">"Enhanced security!"</div>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🧾</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Payment Reconciliation</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Match payments with invoices automatically.
                </p>
                <div className="text-xs text-teal-600 font-medium">"Accurate reconciliation!"</div>
              </div>
            </div>
          </div>
        </section>

        {/* OCR Types Section */}
        <section className="bg-[#f7f1ef]








 py-16 px-4 md:px-8 lg:px-20">
          <div className="w-full mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              Choose Your <span className="text-[#b7603d]">OCR Method</span>
            </h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef]








 rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   font-bold">📄</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Basic Cheque OCR</h3>
                    <span className="text-sm text-[#b7603d]   font-medium">Essential Fields</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Extract key cheque details like MICR code, amount, and date.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">1-2 seconds</span>
                  </div>
                                     <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">Quick processing</span>
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
                    <h3 className="text-xl font-semibold text-gray-800">Advanced Cheque OCR</h3>
                    <span className="text-sm text-[#b7603d]   font-medium">Full Data Extraction</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Extract all cheque fields including payee name, signature verification, and fraud detection.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">2-3 seconds</span>
                  </div>
                                     <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">Comprehensive processing</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-lg font-semibold mb-4 text-gray-800">What You Get:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">Basic OCR:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ MICR code extraction</li>
                    <li>✓ Amount in words and numbers</li>
                    <li>✓ Cheque date</li>
                    <li>✓ Bank name and branch</li>
                    <li>✓ Account number</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">Advanced OCR:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ Payee name extraction</li>
                    <li>✓ Signature detection</li>
                    <li>✓ Fraud detection (altered amounts)</li>
                    <li>✓ Cheque type (bearer/account payee)</li>
                    <li>✓ Image quality assessment</li>
                    <li>✓ Confidence scores for each field</li>
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
              How <span className="text-[#b7603d]">Cheque OCR</span> Works
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
                  <h3 className="text-lg font-semibold mb-2">Upload Cheque</h3>
                  <p className="text-gray-600 text-sm">Upload cheque image or PDF</p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    2
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Image Processing</h3>
                  <p className="text-gray-600 text-sm">Enhance and clean the image</p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    3
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Field Detection</h3>
                  <p className="text-gray-600 text-sm">Locate all key fields on cheque</p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    4
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Text Extraction</h3>
                  <p className="text-gray-600 text-sm">OCR reads text from each field</p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    5
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Data Validation</h3>
                  <p className="text-gray-600 text-sm">Verify and return structured data</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-[#f7f1ef]








 p-6 rounded-lg">
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-[#d38769] rounded-full"></span>
                  <span>All Cheque Formats</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  <span>99.5% Accuracy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                  <span>MICR Code Recognition</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                  <span>Signature Detection</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span>Fraud Detection</span>
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
              Why Use Our <span className="text-[#b7603d]">Cheque OCR API</span>?
            </h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef]








   rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   text-xl">⏱️</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">10x Faster Processing</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Process cheques in seconds instead of minutes with manual entry.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef]








 rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   text-xl">🎯</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">99.5% Accuracy</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Industry-leading OCR accuracy with validation checks.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef]








  rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d] text-xl">🛡️</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Fraud Prevention</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Detect altered amounts, duplicate cheques, and suspicious patterns.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-600 text-xl">🏦</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Bank-Grade Security</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Enterprise-grade encryption and secure data handling.
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
                  Process hundreds of cheques simultaneously via API.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-teal-600 text-xl">🌐</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Global Cheque Support</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Supports cheques from 50+ countries and all major banks.
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
                  Integrate Cheque OCR seamlessly into your applications with our developer-friendly API and comprehensive documentation.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-[#b7603d]">✓</span>
                    <span>RESTful API with JSON responses</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#b7603d]">✓</span>
                    <span>Supports JPG, PNG, PDF formats</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#b7603d]">✓</span>
                    <span>Real-time and batch processing</span>
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
                  <div className="text-blue-400">POST</div> <span className="text-white">/api/v1/cheque-ocr</span>
                  <div className="text-gray-400 mt-2">Headers:</div>
                  <div className="ml-2 text-yellow-400">Authorization: Bearer YOUR_API_KEY</div>
                  <div className="ml-2 text-yellow-400">Content-Type: multipart/form-data</div>
                  <div className="text-yellow-400 mt-3">{"{"}</div>
                  <div className="ml-4 text-white">"image": "base64_encoded_image_or_pdf",</div>
                  <div className="ml-4 text-white">"ocr_type": "advanced",</div>
                  <div className="ml-4 text-white">"country_code": "IN",</div>
                  <div className="ml-4 text-white">"detect_fraud": true</div>
                  <div className="text-yellow-400">{"}"}</div>
                  <div className="mt-4 text-gray-400">// Sample Response</div>
                  <div className="text-yellow-400">{"{"}</div>
                  <div className="ml-4 text-white">"status": "success",</div>
                  <div className="ml-4 text-white">"cheque_details": {"{"}</div>
                  <div className="ml-8 text-white">"micr_code": "110456789",</div>
                  <div className="ml-8 text-white">"account_number": "1234567890",</div>
                  <div className="ml-8 text-white">"amount_in_numbers": "10,000.00",</div>
                  <div className="ml-8 text-white">"amount_in_words": "Ten thousand only",</div>
                  <div className="ml-8 text-white">"cheque_date": "2023-06-15",</div>
                  <div className="ml-8 text-white">"payee_name": "Rajesh Kumar",</div>
                  <div className="ml-8 text-white">"bank_name": "State Bank of India",</div>
                  <div className="ml-8 text-white">"branch_name": "Mumbai Main Branch",</div>
                  <div className="ml-8 text-white">"cheque_number": "987654",</div>
                  <div className="ml-8 text-white">"signature_present": true</div>
                  <div className="ml-4 text-white">{"}"},</div>
                  <div className="ml-4 text-white">"fraud_analysis": {"{"}</div>
                  <div className="ml-8 text-white">"is_altered": false,</div>
                  <div className="ml-8 text-white">"is_duplicate": false,</div>
                  <div className="ml-8 text-white">"confidence_score": 0.98</div>
                  <div className="ml-4 text-white">{"}"},</div>
                  <div className="ml-4 text-white">"processing_time_ms": 1250</div>
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

export default ChequeOCRPageAPI