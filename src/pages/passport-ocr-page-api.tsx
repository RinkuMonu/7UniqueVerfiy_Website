import type React from "react"
import { Link } from "react-router-dom"

const PassportOCRPageAPI: React.FC = () => {
  return (
    <main className="w-full mx-auto">
      {/* Hero Section - What is Passport OCR? */}
      <section
        className="w-full bg-cover bg-center min-h-screen flex items-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-24"
        style={{ backgroundImage: "url('/img/bg (2).png')" }}
      >
        <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-2/3 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Instant Passport Data Extraction API
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
              Automatically extract passport details with our AI-powered OCR technology.
            </h2>
            <p className="text-lg mb-4 text-white">
              Our Passport OCR API instantly reads and verifies passport information from scanned images or PDFs.
            </p>
            <p className="mb-4 text-white">
              From basic personal details to MRZ code extraction, we offer multiple verification methods to meet your needs.
            </p>
            <p className="mb-6 text-white">
              Trusted by airlines, immigration services, and KYC compliance teams worldwide.
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
              src="https://img.freepik.com/free-vector/visa-stamping-illustration_1284-52334.jpg?ga=GA1.1.389685255.1745228264&semt=ais_items_boosted&w=740"
              alt="Passport OCR Verification"
              className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
        <div className="w-full mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Where Can You Use <span className="text-[#b7603d]">Passport OCR</span>?
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">✈️</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Airline Check-in</h3>
              <p className="text-gray-600 text-sm mb-3">
                Automate passenger verification during online check-in.
              </p>
              <div className="text-xs text-[#b7603d]   font-medium">"Faster boarding!"</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏨</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Hotel Check-in</h3>
              <p className="text-gray-600 text-sm mb-3">
                Streamline guest registration with passport scanning.
              </p>
              <div className="text-xs text-[#b7603d]   font-medium">"Seamless check-in!"</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Banking KYC</h3>
              <p className="text-gray-600 text-sm mb-3">
                Automate customer identity verification for accounts.
              </p>
              <div className="text-xs text-[#b7603d] font-medium">"Compliant onboarding!"</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🛂</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Border Control</h3>
              <p className="text-gray-600 text-sm mb-3">
                Verify traveler identities at immigration checkpoints.
              </p>
              <div className="text-xs text-orange-600 font-medium">"Secure borders!"</div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Mobile Apps</h3>
              <p className="text-gray-600 text-sm mb-3">
                Add passport scanning to your mobile applications.
              </p>
              <div className="text-xs text-red-600 font-medium">"Mobile verification!"</div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Rental Services</h3>
              <p className="text-gray-600 text-sm mb-3">
                Verify customer identities for car/housing rentals.
              </p>
              <div className="text-xs text-teal-600 font-medium">"Trusted rentals!"</div>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Types Section */}
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
                  <h3 className="text-xl font-semibold text-gray-800">Basic Passport OCR</h3>
                  <span className="text-sm text-[#b7603d]   font-medium">Personal Details</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Extract basic passport details like name, passport number, and nationality.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Response Time:</span>
                  <span className="font-medium">1-2 seconds</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Cost:</span>
                  <span className="font-medium">$0.10-0.15 per scan</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Best For:</span>
                  <span className="font-medium">Quick verifications</span>
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
                  <h3 className="text-xl font-semibold text-gray-800">Advanced Passport OCR</h3>
                  <span className="text-sm text-[#b7603d]   font-medium">Full Data Extraction</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Extract complete passport data including MRZ code, expiration date, and biometric details.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Response Time:</span>
                  <span className="font-medium">2-3 seconds</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Cost:</span>
                  <span className="font-medium">$0.20-0.30 per scan</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Best For:</span>
                  <span className="font-medium">Compliance & security</span>
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
                  <li>✓ Passport number</li>
                  <li>✓ Full name</li>
                  <li>✓ Nationality</li>
                  <li>✓ Date of birth</li>
                  <li>✓ Gender</li>
                  <li>✓ Place of birth</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-700 mb-2">Advanced OCR:</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ Machine Readable Zone (MRZ) data</li>
                  <li>✓ Passport type</li>
                  <li>✓ Issue and expiration dates</li>
                  <li>✓ Issuing authority</li>
                  <li>✓ Biometric photo extraction</li>
                  <li>✓ Signature extraction</li>
                  <li>✓ Document authenticity checks</li>
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
            How <span className="text-[#b7603d]">Passport OCR</span> Works
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
                <h3 className="text-lg font-semibold mb-2">Upload Passport</h3>
                <p className="text-gray-600 text-sm">Upload image or PDF of passport</p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">Image Processing</h3>
                <p className="text-gray-600 text-sm">Enhance and prepare image for OCR</p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Data Extraction</h3>
                <p className="text-gray-600 text-sm">AI extracts text from passport</p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2">Data Validation</h3>
                <p className="text-gray-600 text-sm">Cross-check extracted information</p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  5
                </div>
                <h3 className="text-lg font-semibold mb-2">Structured Output</h3>
                <p className="text-gray-600 text-sm">Receive standardized JSON data</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-[#f7f1ef]








 p-6 rounded-lg">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-[#d38769] rounded-full"></span>
                <span>200+ Passport Formats</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                <span>Real-time Processing</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                <span>Secure API</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                <span>98% Accuracy</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span>MRZ Code Verification</span>
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
            Why Use Our <span className="text-[#b7603d]">Passport OCR API</span>?
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
                Extract passport data in 1-3 seconds with our AI-powered OCR.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#f7f1ef]








 rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#b7603d]   text-xl">🌐</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Global Coverage</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Supports passports from 200+ countries and territories.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#f7f1ef]








  rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#b7603d] text-xl">📋</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Compliance Ready</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Meet KYC, AML, and GDPR requirements for identity verification.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-orange-600 text-xl">🛡️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Fraud Detection</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Identify potential fake or tampered passports automatically.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-red-600 text-xl">📱</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Mobile Optimized</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Works perfectly with mobile camera captures and scans.
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
                Integrate passport OCR seamlessly into your applications with our developer-friendly API and comprehensive documentation.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>RESTful API with JSON responses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>200+ passport formats supported</span>
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
               <Link to={'https://7uniqueverify-njzw.readme.io/reference/post_api-verify-bankverify#/'}
                  className="inline-block bg-[#b7603d] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#d19983] transition-colors"
                >
                  Read Full API Docs
                </Link>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm overflow-x-auto">
                <div className="mb-2 text-gray-400">// Sample API Request</div>
                <div className="text-blue-400">POST</div> <span className="text-white">/api/v1/passport-ocr</span>
                <div className="text-gray-400 mt-2">Headers:</div>
                <div className="ml-2 text-yellow-400">Authorization: Bearer YOUR_API_KEY</div>
                <div className="ml-2 text-yellow-400">Content-Type: multipart/form-data</div>
                <div className="text-yellow-400 mt-3">{"{"}</div>
                <div className="ml-4 text-white">"image": "base64_encoded_image_or_pdf",</div>
                <div className="ml-4 text-white">"extraction_level": "advanced",</div>
                <div className="ml-4 text-white">"validate_mrz": true</div>
                <div className="text-yellow-400">{"}"}</div>
                <div className="mt-4 text-gray-400">// Sample Response</div>
                <div className="text-yellow-400">{"{"}</div>
                <div className="ml-4 text-white">"status": "success",</div>
                <div className="ml-4 text-white">"passport_data": {"{"}</div>
                <div className="ml-8 text-white">"passport_number": "P12345678",</div>
                <div className="ml-8 text-white">"surname": "SMITH",</div>
                <div className="ml-8 text-white">"given_names": "JOHN DAVID",</div>
                <div className="ml-8 text-white">"nationality": "UNITED STATES",</div>
                <div className="ml-8 text-white">"date_of_birth": "1985-07-15",</div>
                <div className="ml-8 text-white">"place_of_birth": "NEW YORK, USA",</div>
                <div className="ml-8 text-white">"gender": "M",</div>
                <div className="ml-8 text-white">"issue_date": "2020-01-10",</div>
                <div className="ml-8 text-white">"expiry_date": "2030-01-10",</div>
                <div className="ml-8 text-white">"issuing_authority": "US DEPARTMENT OF STATE"</div>
                <div className="ml-4 text-white">{"}"},</div>
                <div className="ml-4 text-white">"mrz_data": {"{"}</div>
                <div className="ml-8 text-white">"mrz_type": "TD2",</div>
                <div className="ml-8 text-white">"mrz_line1": "P&lt;USASMITH&lt;&lt;JOHN&lt;&lt;DAVID&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;",</div>
                <div className="ml-8 text-white">"mrz_line2": "P12345678&lt;0USA8507155M3001108&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;8"</div>
                <div className="ml-4 text-white">{"}"},</div>
                <div className="ml-4 text-white">"validation": {"{"}</div>
                <div className="ml-8 text-white">"mrz_valid": true,</div>
                <div className="ml-8 text-white">"document_expired": false,</div>
                <div className="ml-8 text-white">"potential_tampering": false</div>
                <div className="ml-4 text-white">{"}"},</div>
                <div className="ml-4 text-white">"image_quality": "good"</div>
                <div className="text-yellow-400">{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PassportOCRPageAPI