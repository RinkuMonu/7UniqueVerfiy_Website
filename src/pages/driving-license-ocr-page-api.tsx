import type React from "react"
import SEO from "../app/Helmet/helment";
import { useContext } from "react";
import { ContextData } from "../config/context";
import { SEOData } from "../type";

const DrivingLicenseOCRPageAPI: React.FC = () => {
  const { seo } = useContext(ContextData) as { seo: SEOData };
  return (
    <>
      <SEO seo={seo} />
      <main className="w-full mx-auto">
        {/* Hero Section - What is Driving License OCR? */}
        <section
          className="w-full bg-cover bg-center min-h-screen flex items-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-24"
          style={{ backgroundImage: "url('/img/bg (2).png')" }}
        >
          <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-2/3 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Instant Driving License Verification with OCR API
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
                Extract and validate driving license details with our AI-powered OCR technology.
              </h2>
              <p className="text-lg mb-4 text-white">
                Our Driving License OCR API provides instant extraction of license details from images and PDFs.
              </p>
              <p className="mb-4 text-white">
                From basic license information to comprehensive validation, we offer multiple verification methods.
              </p>
              <p className="mb-6 text-white">
                Trusted by ride-sharing platforms, insurance companies, and identity verification services.
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
                src="https://img.freepik.com/free-vector/flat-design-driving-license-template_23-2149902661.jpg?ga=GA1.1.389685255.1745228264&semt=ais_items_boosted&w=740"
                alt="Driving License OCR"
                className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
              />
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
          <div className="w-full mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              Where Can You Use <span className="text-[#b7603d]">Driving License OCR</span>?
            </h2>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🚗</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Ride-Sharing Platforms</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Verify driver credentials quickly during onboarding.
                </p>
                <div className="text-xs text-[#b7603d]   font-medium">"Safer rides!"</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Car Rental Services</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Validate driving licenses for vehicle rentals.
                </p>
                <div className="text-xs text-[#b7603d]   font-medium">"Verified drivers!"</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📑</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Insurance Providers</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Process driver information for policy issuance.
                </p>
                <div className="text-xs text-[#b7603d] font-medium">"Faster approvals!"</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">👮</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Traffic Enforcement</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Verify license validity during traffic stops.
                </p>
                <div className="text-xs text-orange-600 font-medium">"Efficient checks!"</div>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Banking Services</h3>
                <p className="text-gray-600 text-sm mb-3">
                  KYC verification using driving licenses.
                </p>
                <div className="text-xs text-red-600 font-medium">"Secure onboarding!"</div>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Background Checks</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Verify identity documents for employment.
                </p>
                <div className="text-xs text-teal-600 font-medium">"Trusted hires!"</div>
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
                    <span className="text-[#b7603d]   font-bold">📷</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Basic OCR Extraction</h3>
                    <span className="text-sm text-[#b7603d]   font-medium">Data Extraction</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Extract basic driving license details like name, license number, and validity.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">1-2 seconds</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Cost:</span>
                    <span className="font-medium">₹5-10 per verification</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">Quick data entry</span>
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
                    <h3 className="text-xl font-semibold text-gray-800">Advanced Validation</h3>
                    <span className="text-sm text-[#b7603d]   font-medium">Full Verification</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Provides complete license validation including authenticity checks and RTO database verification.
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
                    <span className="font-medium">Compliance checks</span>
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
                    <li>✓ License holder name</li>
                    <li>✓ License number</li>
                    <li>✓ Date of birth</li>
                    <li>✓ Father's/Spouse name</li>
                    <li>✓ Address</li>
                    <li>✓ License issue and expiry dates</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">Advanced Validation:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ License validity status</li>
                    <li>✓ Vehicle categories authorized</li>
                    <li>✓ Blood group</li>
                    <li>✓ Issuing RTO details</li>
                    <li>✓ Document authenticity check</li>
                    <li>✓ Blacklist status</li>
                    <li>✓ Traffic violations (where available)</li>
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
              How <span className="text-[#b7603d]">Driving License OCR</span> Works
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
                  <p className="text-gray-600 text-sm">Submit driving license image or PDF</p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    2
                  </div>
                  <h3 className="text-lg font-semibold mb-2">AI Processing</h3>
                  <p className="text-gray-600 text-sm">Our AI extracts text and structure</p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    3
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Data Validation</h3>
                  <p className="text-gray-600 text-sm">System validates extracted information</p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    4
                  </div>
                  <h3 className="text-lg font-semibold mb-2">RTO Database Check</h3>
                  <p className="text-gray-600 text-sm">API queries transport department databases</p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    5
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Return Results</h3>
                  <p className="text-gray-600 text-sm">Receive structured data and verification status</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-[#f7f1ef]








 p-6 rounded-lg">
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-[#d38769] rounded-full"></span>
                  <span>Supports all Indian license formats</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  <span>Works with photos and scans</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                  <span>Multi-language support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                  <span>Handles damaged documents</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span>Works in low-light conditions</span>
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
              Why Use Our <span className="text-[#b7603d]">Driving License OCR API</span>?
            </h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef]








   rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   text-xl">⚡</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Instant Processing</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Extract driving license details in seconds with our AI-powered OCR.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef]








 rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   text-xl">🆔</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Fraud Detection</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Identify fake or tampered licenses with advanced validation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef]








  rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d] text-xl">📋</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">KYC Compliance</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Meet regulatory requirements for identity verification.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-600 text-xl">🏢</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">High Accuracy</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  99.5% accuracy in text extraction from driving licenses.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-red-600 text-xl">🚫</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Expiry Alerts</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Get automatic notifications for expiring licenses.
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
                  Integrate driving license verification seamlessly into your applications with our developer-friendly API.
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
                    <span>Real-time processing</span>
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
                  <div className="text-blue-400">POST</div> <span className="text-white">/api/v1/driving-license-ocr</span>
                  <div className="text-gray-400 mt-2">Headers:</div>
                  <div className="ml-2 text-yellow-400">Authorization: Bearer YOUR_API_KEY</div>
                  <div className="ml-2 text-yellow-400">Content-Type: multipart/form-data</div>
                  <div className="text-yellow-400 mt-3">{"{"}</div>
                  <div className="ml-4 text-white">"image": "base64_encoded_image_or_file",</div>
                  <div className="ml-4 text-white">"verification_type": "advanced",</div>
                  <div className="ml-4 text-white">"region": "IN"</div>
                  <div className="text-yellow-400">{"}"}</div>
                  <div className="mt-4 text-gray-400">// Sample Response</div>
                  <div className="text-yellow-400">{"{"}</div>
                  <div className="ml-4 text-white">"status": "success",</div>
                  <div className="ml-4 text-white">"license_details": {"{"}</div>
                  <div className="ml-8 text-white">"license_number": "DL-0420110142341",</div>
                  <div className="ml-8 text-white">"holder_name": "RAJESH KUMAR",</div>
                  <div className="ml-8 text-white">"date_of_birth": "15-05-1985",</div>
                  <div className="ml-8 text-white">"father_name": "RAMESH KUMAR",</div>
                  <div className="ml-8 text-white">"address": "123 MAIN ST, BANGALORE, KARNATAKA",</div>
                  <div className="ml-8 text-white">"blood_group": "B+",</div>
                  <div className="ml-8 text-white">"issue_date": "20-08-2010",</div>
                  <div className="ml-8 text-white">"expiry_date": "19-08-2030",</div>
                  <div className="ml-8 text-white">"categories": ["MCWG", "LMV"],</div>
                  <div className="ml-8 text-white">"issuing_authority": "RTO BANGALORE"</div>
                  <div className="ml-4 text-white">{"}"},</div>
                  <div className="ml-4 text-white">"verification_status": {"{"}</div>
                  <div className="ml-8 text-white">"is_valid": true,</div>
                  <div className="ml-8 text-white">"is_expired": false,</div>
                  <div className="ml-8 text-white">"is_suspended": false,</div>
                  <div className="ml-8 text-white">"last_verified": "2023-06-15T12:34:56Z"</div>
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

export default DrivingLicenseOCRPageAPI