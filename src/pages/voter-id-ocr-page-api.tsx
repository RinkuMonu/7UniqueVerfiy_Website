import type React from "react"

const VoterIDOCRPageAPI: React.FC = () => {
  return (
    <main className="w-full mx-auto">
      {/* Hero Section - What is Voter ID OCR? */}
      <section
        className="w-full bg-cover bg-center min-h-screen flex items-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-24"
        style={{ backgroundImage: "url('/img/bg (2).png')" }}
      >
        <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-2/3 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Instant Voter ID Verification with OCR API
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
              Extract and validate voter ID details instantly with our AI-powered OCR technology.
            </h2>
            <p className="text-lg mb-4 text-white">
              Our Voter ID OCR API provides accurate data extraction from voter ID cards with 99.5% accuracy.
            </p>
            <p className="mb-4 text-white">
              From basic voter information to comprehensive verification against electoral rolls, we offer multiple verification methods.
            </p>
            <p className="mb-6 text-white">
              Trusted by government agencies, banks, and identity verification platforms across India.
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
              src="https://img.freepik.com/free-vector/id-card-concept-illustration_114360-1314.jpg?ga=GA1.1.389685255.1745228264&semt=ais_items_boosted&w=740"
              alt="Voter ID OCR Verification"
              className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
        <div className="w-full mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Where Can You Use <span className="text-[#b7603d]">Voter ID OCR</span>?
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Government Services</h3>
              <p className="text-gray-600 text-sm mb-3">
                Verify voter identity for government welfare programs.
              </p>
              <div className="text-xs text-[#b7603d]   font-medium">"Citizen verification!"</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📑</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">KYC Compliance</h3>
              <p className="text-gray-600 text-sm mb-3">
                Validate voter IDs for financial compliance and banking.
              </p>
              <div className="text-xs text-[#b7603d]   font-medium">"Regulatory compliance!"</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Background Checks</h3>
              <p className="text-gray-600 text-sm mb-3">
                Conduct identity verification for employment.
              </p>
              <div className="text-xs text-[#b7603d] font-medium">"Hiring verification!"</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Legal Verification</h3>
              <p className="text-gray-600 text-sm mb-3">
                Verify voter identity for legal proceedings.
              </p>
              <div className="text-xs text-orange-600 font-medium">"Legal validation!"</div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Banking Services</h3>
              <p className="text-gray-600 text-sm mb-3">
                Verify identity for account opening and loans.
              </p>
              <div className="text-xs text-red-600 font-medium">"Secure banking!"</div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Election Services</h3>
              <p className="text-gray-600 text-sm mb-3">
                Verify voter registration status and details.
              </p>
              <div className="text-xs text-teal-600 font-medium">"Election integrity!"</div>
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
                  <span className="text-[#b7603d]   font-bold">📄</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Basic OCR Extraction</h3>
                  <span className="text-sm text-[#b7603d]   font-medium">Data Extraction</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Extract basic voter details like name, voter ID number, and address from voter ID cards.
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
                  <span className="font-medium">Quick data extraction</span>
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
                  <h3 className="text-xl font-semibold text-gray-800">Full Verification</h3>
                  <span className="text-sm text-[#b7603d]   font-medium">Electoral Roll Check</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Provides complete voter verification against official electoral rolls with photo matching.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Response Time:</span>
                  <span className="font-medium">3-5 seconds</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Cost:</span>
                  <span className="font-medium">₹15-20 per verification</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Best For:</span>
                  <span className="font-medium">Thorough identity verification</span>
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
                  <li>✓ Voter name and ID number</li>
                  <li>✓ Father's/Mother's name</li>
                  <li>✓ Date of birth</li>
                  <li>✓ Address details</li>
                  <li>✓ Gender</li>
                  <li>✓ Card issue date</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-700 mb-2">Full Verification:</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ Electoral roll verification status</li>
                  <li>✓ Constituency details</li>
                  <li>✓ Part number and serial number</li>
                  <li>✓ Photo matching with electoral records</li>
                  <li>✓ Age verification</li>
                  <li>✓ Voter status (Active/Inactive)</li>
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
            How <span className="text-[#b7603d]">Voter ID OCR</span> Works
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
                <h3 className="text-lg font-semibold mb-2">Upload Voter ID</h3>
                <p className="text-gray-600 text-sm">Upload image or PDF of voter ID card</p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">AI Processing</h3>
                <p className="text-gray-600 text-sm">Our AI extracts text and analyzes document</p>
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
                <h3 className="text-lg font-semibold mb-2">Database Check</h3>
                <p className="text-gray-600 text-sm">API queries electoral database (if full verification)</p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  5
                </div>
                <h3 className="text-lg font-semibold mb-2">Return Results</h3>
                <p className="text-gray-600 text-sm">Receive extracted data and verification status</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-[#f7f1ef]








 p-6 rounded-lg">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-[#d38769] rounded-full"></span>
                <span>Supports all state voter IDs</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                <span>Real-time verification</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                <span>Secure API</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                <span>99.5% accuracy</span>
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
            Why Use Our <span className="text-[#b7603d]">Voter ID OCR API</span>?
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
                Get voter ID verification in 2-5 seconds with our optimized OCR pipeline.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#f7f1ef]








 rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#b7603d]   text-xl">🆔</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Fraud Prevention</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Detect fake or tampered voter IDs with advanced document analysis.
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
                Meet RBI KYC requirements for identity verification.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-orange-600 text-xl">🏢</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Address Verification</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Extract and verify address details from voter IDs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-red-600 text-xl">📷</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Photo Extraction</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Extract voter photos for identity matching.
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
                Integrate Voter ID OCR seamlessly into your applications with our developer-friendly API and comprehensive documentation.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>RESTful API with JSON responses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>Supports all Indian voter ID formats</span>
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
                <div className="text-blue-400">POST</div> <span className="text-white">/api/v1/voter-id-ocr</span>
                <div className="text-gray-400 mt-2">Headers:</div>
                <div className="ml-2 text-yellow-400">Authorization: Bearer YOUR_API_KEY</div>
                <div className="ml-2 text-yellow-400">Content-Type: multipart/form-data</div>
                <div className="text-yellow-400 mt-3">{"{"}</div>
                <div className="ml-4 text-white">"image": "base64_encoded_image_or_pdf",</div>
                <div className="ml-4 text-white">"verification_type": "full",</div>
                <div className="ml-4 text-white">"state_code": "MH"</div>
                <div className="text-yellow-400">{"}"}</div>
                <div className="mt-4 text-gray-400">// Sample Response</div>
                <div className="text-yellow-400">{"{"}</div>
                <div className="ml-4 text-white">"status": "success",</div>
                <div className="ml-4 text-white">"voter_details": {"{"}</div>
                <div className="ml-8 text-white">"name": "Rajesh Kumar",</div>
                <div className="ml-8 text-white">"voter_id": "ABC1234567",</div>
                <div className="ml-8 text-white">"father_name": "Ramesh Kumar",</div>
                <div className="ml-8 text-white">"date_of_birth": "1985-05-15",</div>
                <div className="ml-8 text-white">"gender": "Male",</div>
                <div className="ml-8 text-white">"address": "Flat 101, Sunshine Apartments...",</div>
                <div className="ml-8 text-white">"state": "Maharashtra",</div>
                <div className="ml-8 text-white">"district": "Mumbai",</div>
                <div className="ml-8 text-white">"assembly_constituency": "Mumbai North",</div>
                <div className="ml-8 text-white">"part_number": "12",</div>
                <div className="ml-8 text-white">"serial_number": "1234"</div>
                <div className="ml-4 text-white">{"}"},</div>
                <div className="ml-4 text-white">"verification_status": {"{"}</div>
                <div className="ml-8 text-white">"electoral_roll_match": true,</div>
                <div className="ml-8 text-white">"photo_match": true,</div>
                <div className="ml-8 text-white">"document_tamper_status": false,</div>
                <div className="ml-8 text-white">"last_verified_date": "2023-10-15"</div>
                <div className="ml-4 text-white">{"}"},</div>
                <div className="ml-4 text-white">"extracted_photo": "base64_encoded_photo"</div>
                <div className="text-yellow-400">{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default VoterIDOCRPageAPI