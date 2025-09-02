import type React from "react"
import { Link } from "react-router-dom"

const PANOCRPageAPI: React.FC = () => {
  return (
    <main className="w-full mx-auto">
      {/* Hero Section - What is PAN OCR? */}
      <section
        className="w-full bg-cover bg-center min-h-screen flex items-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-24"
        style={{ backgroundImage: "url('/img/bg (2).png')" }}
      >
        <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-2/3 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Instant PAN Card Verification with OCR API
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
              Extract and validate PAN card details automatically with our advanced OCR technology.
            </h2>
            <p className="text-lg mb-4 text-white">
              Our PAN OCR API provides instant extraction of PAN card details from images and PDFs with 99% accuracy.
            </p>
            <p className="mb-4 text-white">
              From basic PAN number validation to comprehensive cardholder verification, we offer multiple solutions for your needs.
            </p>
            <p className="mb-6 text-white">
              Trusted by banks, fintech companies, and compliance teams across India.
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
              src="https://img.freepik.com/free-vector/hand-drawn-driving-license-template_23-2150012071.jpg?ga=GA1.1.389685255.1745228264&semt=ais_items_boosted&w=740"
              alt="PAN Card OCR Verification"
              className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
        <div className="w-full mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Where Can You Use <span className="text-[#b7603d]">PAN OCR</span>?
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Bank Onboarding</h3>
              <p className="text-gray-600 text-sm mb-3">
                Automate PAN verification during customer onboarding.
              </p>
              <div className="text-xs text-[#b7603d]   font-medium">"Faster KYC!"</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Fintech Apps</h3>
              <p className="text-gray-600 text-sm mb-3">
                Enable PAN scanning in mobile applications.
              </p>
              <div className="text-xs text-[#b7603d]   font-medium">"Better UX!"</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Investment Platforms</h3>
              <p className="text-gray-600 text-sm mb-3">
                Verify investor PAN details instantly.
              </p>
              <div className="text-xs text-[#b7603d] font-medium">"Secure investing!"</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Corporate Compliance</h3>
              <p className="text-gray-600 text-sm mb-3">
                Validate employee PAN details for payroll.
              </p>
              <div className="text-xs text-orange-600 font-medium">"Easy compliance!"</div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">E-commerce</h3>
              <p className="text-gray-600 text-sm mb-3">
                Verify PAN for GST-compliant transactions.
              </p>
              <div className="text-xs text-red-600 font-medium">"Seamless checkout!"</div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📑</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Loan Processing</h3>
              <p className="text-gray-600 text-sm mb-3">
                Automate PAN verification for loan applications.
              </p>
              <div className="text-xs text-teal-600 font-medium">"Faster approvals!"</div>
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
                  <span className="text-[#b7603d]   font-bold">🔍</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Basic PAN OCR</h3>
                  <span className="text-sm text-[#b7603d]   font-medium">Text Extraction</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Extract PAN number, name, father's name, and date of birth from PAN card images.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Response Time:</span>
                  <span className="font-medium">1-2 seconds</span>
                </div>
                                 <div className="flex justify-between">
                  <span className="text-gray-500">Best For:</span>
                  <span className="font-medium">Basic PAN data capture</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#f7f1ef]








   rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#b7603d]   font-bold">✅</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Verified PAN Check</h3>
                  <span className="text-sm text-[#b7603d]   font-medium">Full Validation</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Extract PAN details and validate against government databases for authenticity.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Response Time:</span>
                  <span className="font-medium">2-3 seconds</span>
                </div>
                                 <div className="flex justify-between">
                  <span className="text-gray-500">Best For:</span>
                  <span className="font-medium">Regulatory compliance</span>
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
                  <li>✓ PAN number extraction</li>
                  <li>✓ Cardholder name</li>
                  <li>✓ Father's name</li>
                  <li>✓ Date of birth</li>
                  <li>✓ PAN card type (Individual/Company)</li>
                  <li>✓ Image quality score</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-700 mb-2">Verified Check:</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ PAN number validation</li>
                  <li>✓ Name matching with government records</li>
                  <li>✓ PAN status (Active/Inactive)</li>
                  <li>✓ PAN issue date</li>
                  <li>✓ Aadhaar linkage status (if available)</li>
                  <li>✓ PAN jurisdiction details</li>
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
            How <span className="text-[#b7603d]">PAN OCR</span> Works
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
                <p className="text-gray-600 text-sm">Upload PAN card image or PDF</p>
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
                <h3 className="text-lg font-semibold mb-2">Text Extraction</h3>
                <p className="text-gray-600 text-sm">OCR extracts all text fields</p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2">Data Validation</h3>
                <p className="text-gray-600 text-sm">Validate extracted information</p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  5
                </div>
                <h3 className="text-lg font-semibold mb-2">Return Results</h3>
                <p className="text-gray-600 text-sm">Structured PAN data in JSON</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-[#f7f1ef]








 p-6 rounded-lg">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-[#d38769] rounded-full"></span>
                <span>Supports all PAN card formats</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                <span>Handwritten PAN recognition</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                <span>Multi-language support</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                <span>Low-quality image handling</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span>Tamper detection</span>
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
            Why Use Our <span className="text-[#b7603d]">PAN OCR API</span>?
          </h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#f7f1ef]








   rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#b7603d]   text-xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">99% Accuracy</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Industry-leading OCR accuracy for PAN cards, even with low-quality images.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#f7f1ef]








 rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#b7603d]   text-xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Instant Processing</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Get results in seconds with our optimized OCR pipeline.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#f7f1ef]








  rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#b7603d] text-xl">📱</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Mobile Optimized</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Works perfectly with mobile camera captures and scans.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-orange-600 text-xl">🔒</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Secure Processing</h3>
              </div>
              <p className="text-gray-600 text-sm">
                End-to-end encryption and data privacy compliance.
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
                Process thousands of PAN cards simultaneously via API.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-teal-600 text-xl">🌐</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Global Coverage</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Supports PAN cards issued to NRIs and foreign nationals.
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
                Integrate PAN OCR seamlessly into your applications with our developer-friendly API and comprehensive documentation.
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
                  <span>Mobile SDKs for iOS and Android</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>Comprehensive error handling</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>Free testing sandbox</span>
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
                <div className="text-blue-400">POST</div> <span className="text-white">/api/v1/pan-ocr</span>
                <div className="text-gray-400 mt-2">Headers:</div>
                <div className="ml-2 text-yellow-400">Authorization: Bearer YOUR_API_KEY</div>
                <div className="ml-2 text-yellow-400">Content-Type: multipart/form-data</div>
                <div className="text-yellow-400 mt-3">{"{"}</div>
                <div className="ml-4 text-white">"image": "base64_encoded_image_or_file",</div>
                <div className="ml-4 text-white">"verification_type": "full_validation",</div>
                <div className="ml-4 text-white">"return_image_quality_score": true</div>
                <div className="text-yellow-400">{"}"}</div>
                <div className="mt-4 text-gray-400">// Sample Response</div>
                <div className="text-yellow-400">{"{"}</div>
                <div className="ml-4 text-white">"status": "success",</div>
                <div className="ml-4 text-white">"pan_details": {"{"}</div>
                <div className="ml-8 text-white">"pan_number": "ABCDE1234F",</div>
                <div className="ml-8 text-white">"name": "RAJESH KUMAR",</div>
                <div className="ml-8 text-white">"father_name": "RAMESH KUMAR",</div>
                <div className="ml-8 text-white">"date_of_birth": "15-05-1975",</div>
                <div className="ml-8 text-white">"pan_type": "Individual",</div>
                <div className="ml-8 text-white">"image_quality_score": 0.98</div>
                <div className="ml-4 text-white">{"}"},</div>
                <div className="ml-4 text-white">"validation_result": {"{"}</div>
                <div className="ml-8 text-white">"is_valid": true,</div>
                <div className="ml-8 text-white">"name_match_score": 1.0,</div>
                <div className="ml-8 text-white">"pan_status": "Active",</div>
                <div className="ml-8 text-white">"issue_date": "2010-08-20",</div>
                <div className="ml-8 text-white">"aadhaar_linked": true</div>
                <div className="ml-4 text-white">{"}"},</div>
                <div className="ml-4 text-white">"ocr_confidence_scores": {"{"}</div>
                <div className="ml-8 text-white">"pan_number": 0.99,</div>
                <div className="ml-8 text-white">"name": 0.97,</div>
                <div className="ml-8 text-white">"father_name": 0.95,</div>
                <div className="ml-8 text-white">"date_of_birth": 0.98</div>
                <div className="ml-4 text-white">{"}"}</div>
                <div className="text-yellow-400">{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PANOCRPageAPI