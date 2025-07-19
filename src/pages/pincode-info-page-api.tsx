import type React from "react"
import { Link } from "react-router-dom"

const PincodeInfoPageAPI: React.FC = () => {
  return (
    <main className="w-full mx-auto">
      {/* Hero Section - What is Pincode Verification? */}
      <section
        className="w-full bg-cover bg-center min-h-screen flex items-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-24"
        style={{ backgroundImage: "url('/img/bg (2).png')" }}
      >
        <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-2/3 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Instant Pincode Verification API
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
              Validate postal addresses, city details, and service availability with our comprehensive Pincode API.
            </h2>
            <p className="text-lg mb-4 text-white">
              Our Pincode API provides instant validation of Indian postal codes against official India Post databases.
            </p>
            <p className="mb-4 text-white">
              From basic location information to comprehensive delivery details, we offer multiple verification methods to meet your needs.
            </p>
            <p className="mb-6 text-white">
              Trusted by e-commerce platforms, logistics companies, and address verification services across India.
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
              src="https://img.freepik.com/free-vector/api-concept-illustration_114360-9822.jpg?ga=GA1.1.389685255.1745228264&semt=ais_items_boosted&w=740"
              alt="Pincode Verification"
              className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
        <div className="w-full mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Where Can You Use <span className="text-[#b7603d]">Pincode Verification</span>?
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">E-commerce Checkout</h3>
              <p className="text-gray-600 text-sm mb-3">
                Validate delivery addresses during checkout process.
              </p>
              <div className="text-xs text-[#b7603d]   font-medium">"Reduce failed deliveries!"</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Logistics Planning</h3>
              <p className="text-gray-600 text-sm mb-3">
                Optimize delivery routes with accurate pincode data.
              </p>
              <div className="text-xs text-[#b7603d]   font-medium">"Efficient deliveries!"</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Address Verification</h3>
              <p className="text-gray-600 text-sm mb-3">
                Verify customer addresses for financial services.
              </p>
              <div className="text-xs text-[#b7603d] font-medium">"Prevent fraud!"</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Banking Services</h3>
              <p className="text-gray-600 text-sm mb-3">
                Validate customer addresses for KYC compliance.
              </p>
              <div className="text-xs text-orange-600 font-medium">"Regulatory compliance!"</div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">User Registration</h3>
              <p className="text-gray-600 text-sm mb-3">
                Auto-fill city/state from pincode during signup.
              </p>
              <div className="text-xs text-red-600 font-medium">"Better UX!"</div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🗺️</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Market Analysis</h3>
              <p className="text-gray-600 text-sm mb-3">
                Analyze service availability by location.
              </p>
              <div className="text-xs text-teal-600 font-medium">"Data-driven decisions!"</div>
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
                  <span className="text-[#b7603d]   font-bold">📍</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Basic Pincode Lookup</h3>
                  <span className="text-sm text-[#b7603d]   font-medium">Location Validation</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Verify basic pincode details like city, state, and district.
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
                  <span className="font-medium">Quick validations</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#f7f1ef]








   rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#b7603d]   font-bold">📦</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Comprehensive Pincode Check</h3>
                  <span className="text-sm text-[#b7603d]   font-medium">Full Postal Details</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Provides complete postal details including delivery status and service availability.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Response Time:</span>
                  <span className="font-medium">2-3 seconds</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Cost:</span>
                  <span className="font-medium">₹15-20 per verification</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Best For:</span>
                  <span className="font-medium">Logistics planning</span>
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
                  <li>✓ Pincode validation status</li>
                  <li>✓ City/District name</li>
                  <li>✓ State and region</li>
                  <li>✓ Postal office name</li>
                  <li>✓ Postal office type</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-700 mb-2">Comprehensive Check:</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ Delivery status (Deliverable/Non-deliverable)</li>
                  <li>✓ Multiple offices serving the pincode</li>
                  <li>✓ Division and region details</li>
                  <li>✓ Courier service availability</li>
                  <li>✓ Special delivery restrictions</li>
                  <li>✓ Latitude/Longitude coordinates</li>
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
            How <span className="text-[#b7603d]">Pincode Verification</span> Works
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
                <h3 className="text-lg font-semibold mb-2">Input Pincode</h3>
                <p className="text-gray-600 text-sm">Enter 6-digit Indian pincode</p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">Data Validation</h3>
                <p className="text-gray-600 text-sm">System validates pincode format</p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">India Post Database Check</h3>
                <p className="text-gray-600 text-sm">API queries official postal database</p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2">Location Matching</h3>
                <p className="text-gray-600 text-sm">Cross-reference with postal records</p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  5
                </div>
                <h3 className="text-lg font-semibold mb-2">Detailed Results</h3>
                <p className="text-gray-600 text-sm">Receive location details and service info</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-[#f7f1ef]








 p-6 rounded-lg">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-[#d38769] rounded-full"></span>
                <span>India Post Database</span>
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
                <span>All India Coverage</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span>Delivery Status</span>
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
            Why Use Our <span className="text-[#b7603d]">Pincode Verification API</span>?
          </h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#f7f1ef]








   rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#b7603d]   text-xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Instant Results</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Get pincode verification in 1-3 seconds with direct India Post database access.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#f7f1ef]








 rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#b7603d]   text-xl">📦</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Delivery Optimization</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Reduce failed deliveries with accurate pincode validation.
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
                Meet KYC requirements for address verification.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-orange-600 text-xl">🏠</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Address Auto-completion</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Auto-fill city/state/district from pincode for better UX.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-red-600 text-xl">🚫</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Service Availability</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Check if location is serviceable before accepting orders.
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
                Integrate pincode verification seamlessly into your applications with our developer-friendly API and comprehensive documentation.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>RESTful API with JSON responses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>All India pincode coverage</span>
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
                <div className="text-blue-400">GET</div> <span className="text-white">/api/v1/pincode/110001</span>
                <div className="text-gray-400 mt-2">Headers:</div>
                <div className="ml-2 text-yellow-400">Authorization: Bearer YOUR_API_KEY</div>
                <div className="ml-2 text-yellow-400">Content-Type: application/json</div>
                
                <div className="mt-4 text-gray-400">// Sample Response</div>
                <div className="text-yellow-400">{"{"}</div>
                <div className="ml-4 text-white">"status": "success",</div>
                <div className="ml-4 text-white">"pincode": "110001",</div>
                <div className="ml-4 text-white">"post_office": "Connaught Place",</div>
                <div className="ml-4 text-white">"district": "New Delhi",</div>
                <div className="ml-4 text-white">"state": "Delhi",</div>
                <div className="ml-4 text-white">"region": "Delhi",</div>
                <div className="ml-4 text-white">"division": "New Delhi Central",</div>
                <div className="ml-4 text-white">"delivery_status": "Deliverable",</div>
                <div className="ml-4 text-white">"latitude": "28.6333",</div>
                <div className="ml-4 text-white">"longitude": "77.2167",</div>
                <div className="ml-4 text-white">"service_available": ["Standard", "Express", "COD"],</div>
                <div className="ml-4 text-white">"postal_circle": "Delhi",</div>
                <div className="ml-4 text-white">"taluk": "New Delhi",</div>
                <div className="ml-4 text-white">"related_suboffice": ["Parliament House", "Gole Market"]</div>
                <div className="text-yellow-400">{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PincodeInfoPageAPI