import type React from "react";
import { Link } from "react-router-dom";

const WhatsAppVerificationPageAPI: React.FC = () => {
  return (
    <main className="w-full mx-auto">
      {/* Hero Section - What is WhatsApp Verification? */}
      <section
        className="w-full bg-cover bg-center min-h-screen flex items-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-24"
        style={{ backgroundImage: "url('/img/bg (2).png')" }}
      >
        <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-2/3 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              WhatsApp Verification API
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
              Secure, reliable WhatsApp number verification and OTP services for
              your business.
            </h2>
            <p className="text-lg mb-4 text-white">
              Our API provides instant WhatsApp number verification with high
              deliverability rates.
            </p>
            <p className="mb-4 text-white">
              From simple login authentication to complex transaction
              confirmations, we've got you covered.
            </p>
            <p className="mb-6 text-white">
              Trusted by businesses worldwide for secure customer verification
              and engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={"/contact-us"}
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
              src="https://img.freepik.com/free-vector/enter-otp-concept-illustration_114360-7897.jpg?ga=GA1.1.389685255.1745228264&semt=ais_hybrid&w=740"
              alt="WhatsApp Verification"
              className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
        <div className="w-full mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Where Can You Use{" "}
            <span className="text-[#b7603d]">WhatsApp Verification</span>?
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                User Authentication
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Secure login and account verification via WhatsApp OTP.
              </p>
              <div className="text-xs text-[#b7603d]   font-medium">
                "Passwordless login!"
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                E-commerce
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Verify customer numbers for orders and transactions.
              </p>
              <div className="text-xs text-[#b7603d]   font-medium">
                "Reduce fraud!"
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Banking
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Secure transaction confirmations and account changes.
              </p>
              <div className="text-xs text-[#b7603d] font-medium">
                "Enhanced security!"
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Healthcare
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Verify patient identities and appointment confirmations.
              </p>
              <div className="text-xs text-yellow-600 font-medium">
                "HIPAA compliant!"
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🚕</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Ride Sharing
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Verify driver and passenger numbers for safety.
              </p>
              <div className="text-xs text-red-600 font-medium">
                "Safer rides!"
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Social Networks
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Verify new user accounts to prevent fake profiles.
              </p>
              <div className="text-xs text-teal-600 font-medium">
                "Real users only!"
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Types Section */}
      <section className="bg-[#f7f1ef] py-16 px-4 md:px-8 lg:px-20">
          <div className="w-full mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              Choose Your{" "}
              <span className="text-[#b7603d]">Verification Method</span>
            </h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef]   rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Basic OTP Verification
                    </h3>
                    <span className="text-sm text-[#b7603d]   font-medium">
                      Standard Verification
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Send and verify one-time passwords via WhatsApp for simple
                  authentication.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Delivery Time:</span>
                    <span className="font-medium">2-5 seconds</span>
                  </div>
                                     <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">
                      Login flows, simple auth
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef] rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   font-bold">🔍</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                     Bulk Meassage
                    </h3>
                    <span className="text-sm text-[#b7603d]   font-medium">
                      AI-Powered
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Send Bulk Message in One Click" means you can send a single
                  message to hundreds or thousands of contacts at once—just by
                  clicking one button.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">5-10 seconds</span>
                  </div>
                                     <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">High-risk transactions</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-lg font-semibold mb-4 text-gray-800">
                What You Get:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">
                    Basic Verification:
                  </h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ OTP generation and validation</li>
                    <li>✓ Multiple language support</li>
                    <li>✓ Customizable templates</li>
                    <li>✓ Basic analytics</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">
                    key features:
                  </h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ Marketing (promotions, offers)</li>
                    <li>✓ Customer support</li>
                    <li>✓ Reminders/notifications</li>
                    <li>✓ WhatsApp campaigns </li>
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
            How <span className="text-[#b7603d]">WhatsApp Verification</span>{" "}
            Works
          </h2>
          <div className="relative">
            <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-200"></div>
            <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-[#b7603d] to-transparent"></div>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-5">
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2">User Initiation</h3>
                <p className="text-gray-600 text-sm">
                  User requests verification
                </p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">OTP Generation</h3>
                <p className="text-gray-600 text-sm">
                  System creates unique code
                </p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  WhatsApp Delivery
                </h3>
                <p className="text-gray-600 text-sm">Code sent via WhatsApp</p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2">User Input</h3>
                <p className="text-gray-600 text-sm">
                  User enters received code
                </p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  5
                </div>
                <h3 className="text-lg font-semibold mb-2">Validation</h3>
                <p className="text-gray-600 text-sm">
                  System verifies the code
                </p>
              </div>
            </div>
          </div>

          <div
            className="mt-12 bg-[#f7f1ef]








 p-6 rounded-lg"
          >
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-[#d38769] rounded-full"></span>
                <span>99.9% Delivery Rate</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                <span>Global Coverage</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                <span>Instant Verification</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        className="bg-[#f7f1ef]








 py-16 px-4 md:px-8 lg:px-20"
      >
        <div className="w-full mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Why Use Our{" "}
            <span className="text-[#b7603d]">WhatsApp Verification API</span>?
          </h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div
                  className="w-12 h-12 bg-[#f7f1ef]








   rounded-full flex items-center justify-center mr-4"
                >
                  <span className="text-[#b7603d]   text-xl">⏱️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Faster Delivery
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                WhatsApp messages deliver instantly compared to SMS, with higher
                open rates.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div
                  className="w-12 h-12 bg-[#f7f1ef]








 rounded-full flex items-center justify-center mr-4"
                >
                  <span className="text-[#b7603d]   text-xl">💰</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Cost Effective
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                Lower costs than traditional SMS verification with better
                engagement.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div
                  className="w-12 h-12 bg-[#f7f1ef]








  rounded-full flex items-center justify-center mr-4"
                >
                  <span className="text-[#b7603d] text-xl">🌎</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Global Reach
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                Works in all countries where WhatsApp is available with local
                numbers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-orange-600 text-xl">🔒</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  More Secure
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                End-to-end encrypted messages provide better security than SMS.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-red-600 text-xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Rich Analytics
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                Detailed delivery reports and user engagement metrics.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-teal-600 text-xl">🔄</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Easy Integration
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                Simple API integration with comprehensive documentation.
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
                Integrate WhatsApp verification seamlessly into your
                applications with our developer-friendly API.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>RESTful API with JSON responses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>Support for multiple languages</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>Webhooks for real-time updates</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>Pre-built SDKs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>Detailed documentation</span>
                </div>
              </div>
              <Link
                to={
                  "https://7uniqueverify-njzw.readme.io/reference/post_api-verify-bankverify#/"
                }
                className="inline-block bg-[#b7603d] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#d19983] transition-colors"
              >
                Read Full API Docs
              </Link>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm overflow-x-auto">
                <div className="mb-2 text-gray-400">// Sample API Request</div>
                <div className="text-blue-400">POST</div>{" "}
                <span className="text-white">/api/v1/whatsapp/verify</span>
                <div className="text-gray-400 mt-2">Headers:</div>
                <div className="ml-2 text-yellow-400">
                  Authorization: Bearer YOUR_API_KEY
                </div>
                <div className="ml-2 text-yellow-400">
                  Content-Type: application/json
                </div>
                <div className="text-yellow-400 mt-3">{"{"}</div>
                <div className="ml-4 text-white">
                  "phone_number": "+919876543210",
                </div>
                <div className="ml-4 text-white">"method": "otp",</div>
                <div className="ml-4 text-white">
                  "template": "login_verification",
                </div>
                <div className="ml-4 text-white">"language": "en"</div>
                <div className="text-yellow-400">{"}"}</div>
                <div className="mt-4 text-gray-400">// Sample Response</div>
                <div className="text-yellow-400">{"{"}</div>
                <div className="ml-4 text-white">"status": "success",</div>
                <div className="ml-4 text-white">
                  "verification_id": "ver_abc123xyz456",
                </div>
                <div className="ml-4 text-white">
                  "message": "OTP sent successfully",
                </div>
                <div className="ml-4 text-white">"expires_in": 300</div>
                <div className="text-yellow-400">{"}"}</div>
                <div className="mt-4 text-gray-400">// Verification Check</div>
                <div className="text-blue-400">POST</div>{" "}
                <span className="text-white">/api/v1/whatsapp/check</span>
                <div className="text-yellow-400">{"{"}</div>
                <div className="ml-4 text-white">
                  "verification_id": "ver_abc123xyz456",
                </div>
                <div className="ml-4 text-white">"code": "123456"</div>
                <div className="text-yellow-400">{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WhatsAppVerificationPageAPI;
