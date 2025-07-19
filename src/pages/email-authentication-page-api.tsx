import type React from "react"
import SEO from "../app/Helmet/helment";
import { useContext } from "react";
import { ContextData } from "../config/context";
import { SEOData } from "../type";
import { Link } from "react-router-dom";

const EmailAuthenticationPageAPI: React.FC = () => {
  const { seo } = useContext(ContextData) as { seo: SEOData };
  return (
    <>
      <SEO seo={seo} />
      <main className="w-full mx-auto">
        {/* Hero Section - What is Email Authentication? */}
        <section
          className="w-full bg-cover bg-center min-h-screen flex items-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-24"
          style={{ backgroundImage: "url('/img/bg (2).png')" }}
        >
          <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-2/3 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Secure Email Authentication API
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
                Verify email addresses, detect disposable emails, and authenticate users with our Email Verification API.
              </h2>
              <p className="text-lg mb-4 text-white">
                Our Email API provides real-time verification of email validity, domain authenticity, and mailbox existence.
              </p>
              <p className="mb-4 text-white">
                From basic syntax checks to advanced mailbox verification, we offer comprehensive methods to ensure email authenticity.
              </p>
              <p className="mb-6 text-white">
                Trusted by businesses worldwide for reducing fraud, improving deliverability, and enhancing user onboarding.
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
                src="https://img.freepik.com/free-vector/secure-login-concept-illustration_114360-4585.jpg?w=740&t=st=1717580000~exp=1717580600~hmac=7c9c0f8a1b8e8e8b8e8e8b8e8e8b8e8e8e8b8e8e8b8e8e8b8e8e8b8e8e8b8e8"
                alt="Email Authentication"
                className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
              />
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
          <div className="w-full mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              Where Can You Use <span className="text-[#b7603d]">Email Authentication</span>?
            </h2>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">User Registration</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Verify email validity during signup to prevent fake accounts.
                </p>
                <div className="text-xs text-[#b7603d]   font-medium">"Reduce fake signups!"</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🛒</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">E-Commerce</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Validate customer emails to ensure successful order communications.
                </p>
                <div className="text-xs text-[#b7603d]   font-medium">"Improve deliverability!"</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Marketing</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Clean email lists to improve campaign performance metrics.
                </p>
                <div className="text-xs text-[#b7603d] font-medium">"Boost open rates!"</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Banking</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Authenticate financial transaction notifications.
                </p>
                <div className="text-xs text-orange-600 font-medium">"Secure communications!"</div>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">👨‍💼</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">HR Systems</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Validate employee and candidate email addresses.
                </p>
                <div className="text-xs text-red-600 font-medium">"Prevent onboarding issues!"</div>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🔐</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Security</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Detect disposable emails used for fraudulent activities.
                </p>
                <div className="text-xs text-teal-600 font-medium">"Prevent fraud!"</div>
              </div>
            </div>
          </div>
        </section>

        {/* Verification Types Section */}
        <section className="bg-[#f7f1ef]








 py-16 px-4 md:px-8 lg:px-20">
          <div className="w-full mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              Choose Your <span className="text-[#b7603d]">Verification Level</span>
            </h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef]








 rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Basic Email Check</h3>
                    <span className="text-sm text-[#b7603d]   font-medium">Syntax Validation</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Verify if an email follows the correct format and has a valid domain structure.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">Instant</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Cost:</span>
                    <span className="font-medium">₹0.5-1 per verification</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">Initial screening</span>
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
                    <h3 className="text-xl font-semibold text-gray-800">Advanced Verification</h3>
                    <span className="text-sm text-[#b7603d]   font-medium">Mailbox Check</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Provides complete email verification including domain validation and mailbox existence check.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">2-5 seconds</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Cost:</span>
                    <span className="font-medium">₹1.5-3 per verification</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">Critical communications</span>
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
                    <li>✓ Syntax validation</li>
                    <li>✓ Domain format check</li>
                    <li>✓ Disposable email detection</li>
                    <li>✓ Free email provider check</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">Advanced Report:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ MX record verification</li>
                    <li>✓ SMTP validation</li>
                    <li>✓ Mailbox existence check</li>
                    <li>✓ Catch-all domain detection</li>
                    <li>✓ Role-based account detection</li>
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
              How <span className="text-[#b7603d]">Email Authentication</span> Works
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
                  <h3 className="text-lg font-semibold mb-2">Enter Email</h3>
                  <p className="text-gray-600 text-sm">User provides email address</p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    2
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Syntax Check</h3>
                  <p className="text-gray-600 text-sm">Validate email format and structure</p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    3
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Domain Verification</h3>
                  <p className="text-gray-600 text-sm">Check DNS and MX records</p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    4
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Mailbox Check</h3>
                  <p className="text-gray-600 text-sm">Verify mailbox existence</p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    5
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Risk Analysis</h3>
                  <p className="text-gray-600 text-sm">Assess email reputation and risk</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-[#f7f1ef]








 p-6 rounded-lg">
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-[#d38769] rounded-full"></span>
                  <span>99.9% Accuracy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  <span>Global Coverage</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                  <span>Real-time Results</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                  <span>500M+ Domain Database</span>
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
              Why Use Our <span className="text-[#b7603d]">Email Authentication API</span>?
            </h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef]








   rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   text-xl">⚡</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Instant Verification</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Get email verification results in milliseconds during user signup.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef]








 rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   text-xl">📈</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Improved Deliverability</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Reduce bounce rates by ensuring valid email addresses.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef]








  rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d] text-xl">🚫</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Fraud Prevention</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Detect disposable and temporary email addresses used for fraud.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-600 text-xl">🛡️</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Spam Protection</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Filter out spam traps and honey pots from your mailing lists.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-red-600 text-xl">🔍</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Detailed Reporting</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Get comprehensive analysis of each email verification.
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
                  Simple REST API with comprehensive documentation and SDKs.
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
                  Integrate email verification seamlessly into your applications with our developer-friendly API and comprehensive documentation.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-[#b7603d]">✓</span>
                    <span>RESTful API with JSON responses</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#b7603d]">✓</span>
                    <span>Global email provider coverage</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#b7603d]">✓</span>
                    <span>Real-time verification results</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#b7603d]">✓</span>
                    <span>Bulk verification endpoints</span>
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
                  <div className="text-blue-400">GET</div> <span className="text-white">/api/v1/email-verification?email=user@example.com</span>
                  <div className="text-gray-400 mt-2">Headers:</div>
                  <div className="ml-2 text-yellow-400">Authorization: Bearer YOUR_API_KEY</div>
                  <div className="text-yellow-400 mt-3">{"{"}</div>
                  <div className="ml-4 text-white">"email": "user@example.com",</div>
                  <div className="ml-4 text-white">"verification_level": "advanced"</div>
                  <div className="text-yellow-400">{"}"}</div>
                  <div className="mt-4 text-gray-400">// Sample Response</div>
                  <div className="text-yellow-400">{"{"}</div>
                  <div className="ml-4 text-white">"email": "user@example.com",</div>
                  <div className="ml-4 text-white">"is_valid_format": true,</div>
                  <div className="ml-4 text-white">"is_disposable": false,</div>
                  <div className="ml-4 text-white">"is_free_provider": false,</div>
                  <div className="ml-4 text-white">"domain": "example.com",</div>
                  <div className="ml-4 text-white">"is_domain_valid": true,</div>
                  <div className="ml-4 text-white">"is_mx_found": true,</div>
                  <div className="ml-4 text-white">"is_smtp_valid": true,</div>
                  <div className="ml-4 text-white">"is_deliverable": true,</div>
                  <div className="ml-4 text-white">"is_catch_all": false,</div>
                  <div className="ml-4 text-white">"is_role_account": false,</div>
                  <div className="ml-4 text-white">"risk_score": 0.1,</div>
                  <div className="ml-4 text-white">"verification_status": "deliverable"</div>
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

export default EmailAuthenticationPageAPI