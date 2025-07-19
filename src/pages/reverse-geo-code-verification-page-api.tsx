import type React from "react"
import { Link } from "react-router-dom"

const ReverseGeoCodeVerificationPageAPI: React.FC = () => {
  return (
    <main className="w-full mx-auto">
      {/* Hero Section - What is Reverse Geo Code Verification? */}
      <section
        className="w-full bg-cover bg-center min-h-screen flex items-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-24"
        style={{ backgroundImage: "url('/img/bg (2).png')" }}
      >
        <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-2/3 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Instant Location Verification with Reverse Geocoding API
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
              Convert geographic coordinates into human-readable addresses with our high-precision Reverse Geocoding API.
            </h2>
            <p className="text-lg mb-4 text-white">
              Our API provides accurate address information from latitude/longitude coordinates with global coverage.
            </p>
            <p className="mb-4 text-white">
              From simple address lookups to comprehensive location intelligence, we offer multiple verification methods.
            </p>
            <p className="mb-6 text-white">
              Trusted by logistics companies, mobile apps, and GIS platforms worldwide.
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
              src="https://img.freepik.com/free-vector/flat-hotel-booking-concept-background_23-2148190940.jpg?ga=GA1.1.389685255.1745228264&semt=ais_items_boosted&w=740"
              alt="Reverse Geocoding"
              className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
        <div className="w-full mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Where Can You Use <span className="text-[#b7603d]">Reverse Geocoding</span>?
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Ride-Sharing Apps</h3>
              <p className="text-gray-600 text-sm mb-3">
                Display pickup/drop locations in readable addresses.
              </p>
              <div className="text-xs text-[#b7603d]   font-medium">"Better UX for riders!"</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Mobile Apps</h3>
              <p className="text-gray-600 text-sm mb-3">
                Convert device GPS coordinates to addresses.
              </p>
              <div className="text-xs text-[#b7603d]   font-medium">"Location services!"</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Business Analytics</h3>
              <p className="text-gray-600 text-sm mb-3">
                Analyze customer locations from coordinate data.
              </p>
              <div className="text-xs text-[#b7603d] font-medium">"Location intelligence!"</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Logistics</h3>
              <p className="text-gray-600 text-sm mb-3">
                Verify delivery locations from driver coordinates.
              </p>
              <div className="text-xs text-orange-600 font-medium">"Accurate deliveries!"</div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🛰️</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">GIS Systems</h3>
              <p className="text-gray-600 text-sm mb-3">
                Enhance geographic information systems with addresses.
              </p>
              <div className="text-xs text-red-600 font-medium">"Spatial analysis!"</div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🆘</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Emergency Services</h3>
              <p className="text-gray-600 text-sm mb-3">
                Convert emergency call coordinates to dispatch addresses.
              </p>
              <div className="text-xs text-teal-600 font-medium">"Faster response!"</div>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Types Section */}
      <section className="bg-[#f7f1ef]








 py-16 px-4 md:px-8 lg:px-20">
        <div className="w-full mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Choose Your <span className="text-[#b7603d]">Geocoding Method</span>
          </h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#f7f1ef]








 rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#b7603d]   font-bold">📍</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Basic Reverse Geocode</h3>
                  <span className="text-sm text-[#b7603d]   font-medium">Address Lookup</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Convert coordinates to a human-readable street address.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Response Time:</span>
                  <span className="font-medium">50-100ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Cost:</span>
                  <span className="font-medium">$0.0005 per request</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Best For:</span>
                  <span className="font-medium">Simple address display</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#f7f1ef]








   rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#b7603d]   font-bold">🌍</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Advanced Geocoding</h3>
                  <span className="text-sm text-[#b7603d]   font-medium">Location Intelligence</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Get comprehensive location data including neighborhood, city, and points of interest.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Response Time:</span>
                  <span className="font-medium">100-200ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Cost:</span>
                  <span className="font-medium">$0.001 per request</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Best For:</span>
                  <span className="font-medium">Detailed location analysis</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-lg font-semibold mb-4 text-gray-800">What You Get:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-gray-700 mb-2">Basic Lookup:</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ Street address</li>
                  <li>✓ City and postal code</li>
                  <li>✓ Country and region</li>
                  <li>✓ Formatted address</li>
                  <li>✓ Location type (rooftop, approximate)</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-700 mb-2">Advanced Lookup:</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ Neighborhood and district</li>
                  <li>✓ Points of interest nearby</li>
                  <li>✓ Timezone information</li>
                  <li>✓ Elevation data</li>
                  <li>✓ Political boundaries</li>
                  <li>✓ Plus codes for address sharing</li>
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
            How <span className="text-[#b7603d]">Reverse Geocoding</span> Works
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
                <h3 className="text-lg font-semibold mb-2">Input Coordinates</h3>
                <p className="text-gray-600 text-sm">Provide latitude/longitude</p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">Location Matching</h3>
                <p className="text-gray-600 text-sm">Find nearest known address</p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Address Interpolation</h3>
                <p className="text-gray-600 text-sm">Calculate precise street address</p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2">Data Enhancement</h3>
                <p className="text-gray-600 text-sm">Add contextual location details</p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  5
                </div>
                <h3 className="text-lg font-semibold mb-2">Return Results</h3>
                <p className="text-gray-600 text-sm">Deliver formatted address data</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-[#f7f1ef]








 p-6 rounded-lg">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-[#d38769] rounded-full"></span>
                <span>Global Coverage</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                <span>Sub-meter Accuracy</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                <span>Multiple Language Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                <span>Local Address Formats</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span>Road Network Analysis</span>
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
            Why Use Our <span className="text-[#b7603d]">Reverse Geocoding API</span>?
          </h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#f7f1ef]








   rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#b7603d]   text-xl">🌐</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Global Coverage</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Address lookup for coordinates anywhere in the world with local formatting.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#f7f1ef]








 rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#b7603d]   text-xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">High Precision</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Sub-meter accuracy with rooftop-level precision where available.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#f7f1ef]








  rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#b7603d] text-xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Fast Response</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Average response times under 100ms for most requests.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-orange-600 text-xl">🔄</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Bulk Processing</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Process thousands of coordinates in a single API call.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-red-600 text-xl">🔒</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Privacy Compliance</h3>
              </div>
              <p className="text-gray-600 text-sm">
                GDPR-compliant with no personal data storage.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-teal-600 text-xl">🆓</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Free Tier</h3>
              </div>
              <p className="text-gray-600 text-sm">
                1,000 free requests per month for testing and development.
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
                Integrate reverse geocoding into your applications with our developer-friendly API and comprehensive documentation.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>RESTful API with JSON responses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>Multiple language support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>Real-time results</span>
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
                <div className="text-blue-400">GET</div> <span className="text-white">/api/v1/reverse-geocode?lat=28.6139&lng=77.2090</span>
                <div className="text-gray-400 mt-2">Headers:</div>
                <div className="ml-2 text-yellow-400">Authorization: Bearer YOUR_API_KEY</div>
                <div className="ml-2 text-yellow-400">Accept-Language: en</div>
                <div className="mt-4 text-gray-400">// Sample Response</div>
                <div className="text-yellow-400">{"{"}</div>
                <div className="ml-4 text-white">"status": "success",</div>
                <div className="ml-4 text-white">"address": {"{"}</div>
                <div className="ml-8 text-white">"street": "Rajpath",</div>
                <div className="ml-8 text-white">"neighborhood": "Central Delhi",</div>
                <div className="ml-8 text-white">"locality": "New Delhi",</div>
                <div className="ml-8 text-white">"postal_code": "110001",</div>
                <div className="ml-8 text-white">"city": "New Delhi",</div>
                <div className="ml-8 text-white">"region": "Delhi",</div>
                <div className="ml-8 text-white">"country": "India",</div>
                <div className="ml-8 text-white">"country_code": "IN",</div>
                <div className="ml-8 text-white">"formatted_address": "Rajpath, Central Delhi, New Delhi, Delhi 110001, India"</div>
                <div className="ml-4 text-white">{"}"},</div>
                <div className="ml-4 text-white">"plus_code": "7JWV+JQ New Delhi, India",</div>
                <div className="ml-4 text-white">"timezone": "Asia/Kolkata",</div>
                <div className="ml-4 text-white">"elevation": 216,</div>
                <div className="ml-4 text-white">"accuracy": "ROOFTOP"</div>
                <div className="text-yellow-400">{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ReverseGeoCodeVerificationPageAPI