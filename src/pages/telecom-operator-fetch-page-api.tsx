import type React from "react"
import { Link } from "react-router-dom"

const TelecomOperatorFetchPageAPI: React.FC = () => {
  return (
    <main className="w-full mx-auto">
      {/* Hero Section - What is Telecom Operator API? */}
      <section
        className="w-full bg-cover bg-center min-h-screen flex items-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-24"
        style={{ backgroundImage: "url('/img/bg (2).png')" }}
      >
        <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-2/3 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Telecom Operator Data API
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
              Access comprehensive telecom operator data including carrier lookup, number validation, and roaming information.
            </h2>
            <p className="text-lg mb-4 text-white">
              Our Telecom API provides real-time operator identification for phone numbers worldwide with detailed carrier information.
            </p>
            <p className="mb-4 text-white">
              From simple number validation to complex routing decisions, we offer multiple integration methods to meet your telecom needs.
            </p>
            <p className="mb-6 text-white">
              Trusted by telecom providers, call centers, and communication platforms globally.
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
              src="https://img.freepik.com/free-vector/5g-internet-horizontal-illustration_1284-71102.jpg?ga=GA1.1.389685255.1745228264&semt=ais_items_boosted&w=740"
              alt="Telecom Operator API"
              className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
        <div className="w-full mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Where Can You Use <span className="text-[#b7603d]">Telecom Operator API</span>?
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Call Centers</h3>
              <p className="text-gray-600 text-sm mb-3">
                Route calls based on carrier information for optimal connectivity.
              </p>
              <div className="text-xs text-[#b7603d]   font-medium">"Better call quality!"</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Mobile Apps</h3>
              <p className="text-gray-600 text-sm mb-3">
                Detect user's carrier for customized services and offers.
              </p>
              <div className="text-xs text-[#b7603d]   font-medium">"Personalized experience!"</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Fraud Prevention</h3>
              <p className="text-gray-600 text-sm mb-3">
                Identify suspicious numbers based on carrier data.
              </p>
              <div className="text-xs text-[#b7603d] font-medium">"Secure transactions!"</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">SMS Services</h3>
              <p className="text-gray-600 text-sm mb-3">
                Optimize message delivery based on recipient's carrier.
              </p>
              <div className="text-xs text-orange-600 font-medium">"Higher deliverability!"</div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Roaming Services</h3>
              <p className="text-gray-600 text-sm mb-3">
                Detect when users are roaming to offer appropriate plans.
              </p>
              <div className="text-xs text-red-600 font-medium">"Better roaming deals!"</div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Analytics</h3>
              <p className="text-gray-600 text-sm mb-3">
                Analyze carrier distribution among your user base.
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
            Choose Your <span className="text-[#b7603d]">API Plan</span>
          </h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#f7f1ef]








 rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#b7603d]   font-bold">📱</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Basic Lookup</h3>
                  <span className="text-sm text-[#b7603d]   font-medium">Carrier Identification</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Get basic carrier information for phone numbers with standard lookup speed.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Lookup Speed:</span>
                  <span className="font-medium">Standard</span>
                </div>
                                 <div className="flex justify-between">
                  <span className="text-gray-500">Best For:</span>
                  <span className="font-medium">Basic carrier lookup</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#f7f1ef]








   rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#b7603d]   font-bold">🚀</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Professional Plan</h3>
                  <span className="text-sm text-[#b7603d]   font-medium">Full Features</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Includes real-time lookups, roaming detection, and detailed carrier data.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Lookup Speed:</span>
                  <span className="font-medium">Real-time</span>
                </div>
                                 <div className="flex justify-between">
                  <span className="text-gray-500">Best For:</span>
                  <span className="font-medium">Enterprise applications</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-lg font-semibold mb-4 text-gray-800">What You Get:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-gray-700 mb-2">Basic Plan:</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ 200+ countries coverage</li>
                  <li>✓ Standard lookup speed</li>
                  <li>✓ Carrier name identification</li>
                  <li>✓ Network type detection</li>
                  <li>✓ 10,000 lookups/month</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-700 mb-2">Professional Plan:</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ All Basic features plus...</li>
                  <li>✓ Real-time lookups</li>
                  <li>✓ Roaming status detection</li>
                  <li>✓ Line type identification</li>
                  <li>✓ Carrier network details</li>
                  <li>✓ 50,000 lookups/month</li>
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
            How <span className="text-[#b7603d]">Telecom API</span> Works
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
                <h3 className="text-lg font-semibold mb-2">Number Input</h3>
                <p className="text-gray-600 text-sm">Your app sends a phone number to our API</p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">Database Query</h3>
                <p className="text-gray-600 text-sm">We check our telecom operator database</p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Data Validation</h3>
                <p className="text-gray-600 text-sm">Verify with multiple telecom sources</p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2">Response Preparation</h3>
                <p className="text-gray-600 text-sm">Compile comprehensive carrier data</p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  5
                </div>
                <h3 className="text-lg font-semibold mb-2">Result Delivery</h3>
                <p className="text-gray-600 text-sm">Your app receives detailed operator info</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-[#f7f1ef]








 p-6 rounded-lg">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-[#d38769] rounded-full"></span>
                <span>200+ Countries</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                <span>Real-time Lookups</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                <span>Roaming Detection</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                <span>Network Type</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span>Line Type</span>
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
            Why Use Our <span className="text-[#b7603d]">Telecom Operator API</span>?
          </h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#f7f1ef]








   rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#b7603d]   text-xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Real-Time Data</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Get the most current telecom operator information with our professional plan.
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
                Comprehensive coverage of operators in 200+ countries worldwide.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#f7f1ef]








  rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#b7603d] text-xl">🔄</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Roaming Detection</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Identify when numbers are roaming outside their home network.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-orange-600 text-xl">📶</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Network Type</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Detect whether a number is on GSM, CDMA, VoIP, or other network types.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-red-600 text-xl">🏠</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Line Type</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Identify mobile, landline, toll-free, and other line types.
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
                Integrate telecom operator lookup seamlessly into your applications with our developer-friendly API and comprehensive documentation.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>RESTful API with JSON responses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>200+ countries coverage</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>Real-time operator data</span>
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
                <div className="text-blue-400">GET</div> <span className="text-white">/api/v1/lookup?number=+14155552671</span>
                <div className="text-gray-400 mt-2">Headers:</div>
                <div className="ml-2 text-yellow-400">Authorization: Bearer YOUR_API_KEY</div>
                <div className="ml-2 text-yellow-400">Accept: application/json</div>
                
                <div className="mt-4 text-gray-400">// Sample Response</div>
                <div className="text-yellow-400">{"{"}</div>
                <div className="ml-4 text-white">"success": true,</div>
                <div className="ml-4 text-white">"number": "+14155552671",</div>
                <div className="ml-4 text-white">"country_code": "US",</div>
                <div className="ml-4 text-white">"operator": {"{"}</div>
                <div className="ml-8 text-white">"name": "AT&T Mobility",</div>
                <div className="ml-8 text-white">"mcc": "310",</div>
                <div className="ml-8 text-white">"mnc": "410",</div>
                <div className="ml-8 text-white">"network_type": "GSM",</div>
                <div className="ml-8 text-white">"line_type": "mobile"</div>
                <div className="ml-4 text-white">{"}"},</div>
                <div className="ml-4 text-white">"roaming": {"{"}</div>
                <div className="ml-8 text-white">"status": false,</div>
                <div className="ml-8 text-white">"country": null</div>
                <div className="ml-4 text-white">{"}"}</div>
                <div className="text-yellow-400">{"}"}</div>

                <div className="mt-6 text-gray-400">// Bulk Lookup Example</div>
                <div className="text-blue-400">POST</div> <span className="text-white">/api/v1/bulk-lookup</span>
                <div className="text-gray-400 mt-2">Body:</div>
                <div className="ml-2 text-white">{"{"}</div>
                <div className="ml-4 text-white">"numbers": ["+14155552671", "+442072222222"]</div>
                <div className="ml-2 text-white">{"}"}</div>
                
                <div className="mt-2 text-gray-400">// Sample Response</div>
                <div className="text-yellow-400">{"{"}</div>
                <div className="ml-4 text-white">"success": true,</div>
                <div className="ml-4 text-white">"results": [</div>
                <div className="ml-8 text-white">{"{"}</div>
                <div className="ml-12 text-white">"number": "+14155552671",</div>
                <div className="ml-12 text-white">"operator": "AT&T Mobility",</div>
                <div className="ml-12 text-white">"country_code": "US"</div>
                <div className="ml-8 text-white">{"}"},</div>
                <div className="ml-8 text-white">{"{"}</div>
                <div className="ml-12 text-white">"number": "+442072222222",</div>
                <div className="ml-12 text-white">"operator": "Vodafone UK",</div>
                <div className="ml-12 text-white">"country_code": "GB"</div>
                <div className="ml-8 text-white">{"}"}</div>
                <div className="ml-4 text-white">]</div>
                <div className="text-yellow-400">{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default TelecomOperatorFetchPageAPI