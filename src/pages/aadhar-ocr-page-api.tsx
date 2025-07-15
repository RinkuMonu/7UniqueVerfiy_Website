import type React from "react"

const AadhaarOCRPageAPI: React.FC = () => {
  return (
    <main className="w-full mx-auto">
      {/* Hero Section - What is Aadhaar OCR? */}
      <section
        className="w-full bg-cover bg-center min-h-screen flex items-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-24"
        style={{ backgroundImage: "url('/img/bg (2).png')" }}
      >
        <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-2/3 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Instant Aadhaar Data Extraction with OCR API
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
              Extract Aadhaar card details instantly with our AI-powered OCR technology.
            </h2>
            <p className="text-lg mb-4 text-white">
              Our Aadhaar OCR API automatically reads and verifies Aadhaar card information from scanned images or PDFs.
            </p>
            <p className="mb-4 text-white">
              From basic details to QR code verification, we offer multiple extraction methods to meet your needs.
            </p>
            <p className="mb-6 text-white">
              Trusted by banks, fintech companies, and government agencies across India.
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
              src="https://img.freepik.com/free-vector/indian-general-vote-background-with-ashoka-chakra_1017-50185.jpg?ga=GA1.1.389685255.1745228264&semt=ais_items_boosted&w=740"
              alt="Aadhaar OCR Extraction"
              className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
        <div className="w-full mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Where Can You Use <span className="text-[#b7603d]">Aadhaar OCR</span>?
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Banking Onboarding</h3>
              <p className="text-gray-600 text-sm mb-3">
                Automate customer KYC with instant Aadhaar data extraction.
              </p>
              <div className="text-xs text-[#b7603d]   font-medium">"Faster customer onboarding!"</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Fintech Apps</h3>
              <p className="text-gray-600 text-sm mb-3">
                Extract Aadhaar details for instant account verification.
              </p>
              <div className="text-xs text-[#b7603d]   font-medium">"Seamless user experience!"</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Healthcare</h3>
              <p className="text-gray-600 text-sm mb-3">
                Verify patient identity with Aadhaar details.
              </p>
              <div className="text-xs text-[#b7603d] font-medium">"Secure patient records!"</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">E-commerce</h3>
              <p className="text-gray-600 text-sm mb-3">
                Verify customer identity for COD orders.
              </p>
              <div className="text-xs text-orange-600 font-medium">"Reduce fraud!"</div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Government Services</h3>
              <p className="text-gray-600 text-sm mb-3">
                Automate citizen verification for welfare schemes.
              </p>
              <div className="text-xs text-red-600 font-medium">"Efficient governance!"</div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📑</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Telecom</h3>
              <p className="text-gray-600 text-sm mb-3">
                Extract details for SIM card verification.
              </p>
              <div className="text-xs text-teal-600 font-medium">"Instant activation!"</div>
            </div>
          </div>
        </div>
      </section>

      {/* Extraction Types Section */}
      <section className="bg-[#f7f1ef]








 py-16 px-4 md:px-8 lg:px-20">
        <div className="w-full mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Choose Your <span className="text-[#b7603d]">Extraction Method</span>
          </h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#f7f1ef]








 rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#b7603d]   font-bold">📄</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Front Side OCR</h3>
                  <span className="text-sm text-[#b7603d]   font-medium">Basic Details Extraction</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Extract basic details like name, gender, date of birth, and Aadhaar number from front side.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Response Time:</span>
                  <span className="font-medium">1-2 seconds</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Cost:</span>
                  <span className="font-medium">₹5-10 per extraction</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Best For:</span>
                  <span className="font-medium">Basic KYC verification</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#f7f1ef]








   rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#b7603d]   font-bold">🖨️</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Back Side OCR</h3>
                  <span className="text-sm text-[#b7603d]   font-medium">Address Extraction</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Extract complete address details from the back side of Aadhaar card.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Response Time:</span>
                  <span className="font-medium">2-3 seconds</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Cost:</span>
                  <span className="font-medium">₹10-15 per extraction</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Best For:</span>
                  <span className="font-medium">Address verification</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-lg font-semibold mb-4 text-gray-800">What You Get:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-gray-700 mb-2">Front Side:</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ Aadhaar number</li>
                  <li>✓ Full name</li>
                  <li>✓ Gender</li>
                  <li>✓ Date of birth</li>
                  <li>✓ Year of birth</li>
                  <li>✓ QR code data (if available)</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-700 mb-2">Back Side:</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ Complete address</li>
                  <li>✓ PIN code</li>
                  <li>✓ State</li>
                  <li>✓ District</li>
                  <li>✓ QR code verification</li>
                  <li>✓ Issue date (if available)</li>
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
            How <span className="text-[#b7603d]">Aadhaar OCR</span> Works
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
                <h3 className="text-lg font-semibold mb-2">Upload Image/PDF</h3>
                <p className="text-gray-600 text-sm">Upload Aadhaar front/back image or PDF</p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">AI Processing</h3>
                <p className="text-gray-600 text-sm">Our AI analyzes the document structure</p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Text Extraction</h3>
                <p className="text-gray-600 text-sm">OCR extracts all text fields accurately</p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2">Data Validation</h3>
                <p className="text-gray-600 text-sm">System validates extracted information</p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  5
                </div>
                <h3 className="text-lg font-semibold mb-2">Structured Output</h3>
                <p className="text-gray-600 text-sm">Receive clean JSON with extracted data</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-[#f7f1ef]








 p-6 rounded-lg">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-[#d38769] rounded-full"></span>
                <span>Supports JPG, PNG, PDF</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                <span>Handwritten text recognition</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                <span>QR code verification</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                <span>Masked Aadhaar support</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span>Multi-language support</span>
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
            Why Use Our <span className="text-[#b7603d]">Aadhaar OCR API</span>?
          </h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#f7f1ef]








   rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#b7603d]   text-xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Instant Extraction</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Extract Aadhaar details in 2-3 seconds with 99%+ accuracy.
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
                Detect fake Aadhaar cards with QR code verification.
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
                Meet RBI KYC requirements with verified Aadhaar data.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-orange-600 text-xl">🏢</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Multi-language Support</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Extract details from Aadhaar cards in any Indian language.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-red-600 text-xl">🚫</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Masked Aadhaar</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Supports extraction from masked Aadhaar cards (first 8 digits hidden).
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
                Integrate Aadhaar OCR seamlessly into your applications with our developer-friendly API and comprehensive documentation.
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
                <div className="text-blue-400">POST</div> <span className="text-white">/api/v1/aadhaar-ocr</span>
                <div className="text-gray-400 mt-2">Headers:</div>
                <div className="ml-2 text-yellow-400">Authorization: Bearer YOUR_API_KEY</div>
                <div className="ml-2 text-yellow-400">Content-Type: multipart/form-data</div>
                <div className="text-yellow-400 mt-3">{"{"}</div>
                <div className="ml-4 text-white">"file": "aadhaar_front.jpg",</div>
                <div className="ml-4 text-white">"extraction_type": "full",</div>
                <div className="ml-4 text-white">"verify_qr": true</div>
                <div className="text-yellow-400">{"}"}</div>
                <div className="mt-4 text-gray-400">// Sample Response</div>
                <div className="text-yellow-400">{"{"}</div>
                <div className="ml-4 text-white">"status": "success",</div>
                <div className="ml-4 text-white">"aadhaar_details": {"{"}</div>
                <div className="ml-8 text-white">"aadhaar_number": "XXXX XXXX 7890",</div>
                <div className="ml-8 text-white">"name": "RAJESH KUMAR",</div>
                <div className="ml-8 text-white">"gender": "MALE",</div>
                <div className="ml-8 text-white">"date_of_birth": "15-05-1985",</div>
                <div className="ml-8 text-white">"year_of_birth": "1985",</div>
                <div className="ml-8 text-white">"address": "H NO 123, SECTOR 5, NEW DELHI - 110001",</div>
                <div className="ml-8 text-white">"pin_code": "110001",</div>
                <div className="ml-8 text-white">"state": "DELHI",</div>
                <div className="ml-8 text-white">"district": "NEW DELHI",</div>
                <div className="ml-4 text-white">{"}"},</div>
                <div className="ml-4 text-white">"qr_verified": true,</div>
                <div className="ml-4 text-white">"confidence_score": 0.98,</div>
                <div className="ml-4 text-white">"is_masked": false</div>
                <div className="text-yellow-400">{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AadhaarOCRPageAPI