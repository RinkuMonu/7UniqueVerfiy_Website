import type React from "react"
import SEO from "../app/Helmet/helment";
import { useContext } from "react";
import { ContextData } from "../config/context";
import { SEOData } from "../type";
import { Link } from "react-router-dom";

const FSSAIVerificationPageAPI: React.FC = () => {
  const { seo } = useContext(ContextData) as { seo: SEOData };
  return (
    <>
      <SEO seo={seo} />
      <main className="w-full mx-auto">
        {/* Hero Section - What is FSSAI Verification? */}
        <section
          className="w-full bg-cover bg-center min-h-screen flex items-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-24"
          style={{ backgroundImage: "url('/img/bg (2).png')" }}
        >
          <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-2/3 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Instant FSSAI License Verification API
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
                Validate food business licenses, compliance status, and authenticity with our comprehensive FSSAI Verification API.
              </h2>
              <p className="text-lg mb-4 text-white">
                Our FSSAI Check API provides instant validation of food business licenses against official FSSAI databases.
              </p>
              <p className="mb-4 text-white">
                From basic license information to comprehensive compliance history, we offer multiple verification methods to meet your needs.
              </p>
              <p className="mb-6 text-white">
                Trusted by food delivery platforms, compliance agencies, and food safety teams across India.
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
                src="https://img.freepik.com/free-vector/iso-certification-illustration-with-people-notepad_23-2148690777.jpg?ga=GA1.1.389685255.1745228264&semt=ais_items_boosted&w=740"
                alt="FSSAI License Verification"
                className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
              />
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
          <div className="w-full mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              Where Can You Use <span className="text-[#f8a51b]">FSSAI Verification</span>?
            </h2>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🍔</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Food Delivery Platforms</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Verify restaurant FSSAI licenses before onboarding.
                </p>
                <div className="text-xs text-orange-600 font-medium">"Safe food delivery!"</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🏪</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Retail Compliance</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Validate food product licenses for retail compliance.
                </p>
                <div className="text-xs text-[#b7603d]   font-medium">"Regulatory compliance!"</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Due Diligence</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Conduct background checks on food businesses.
                </p>
                <div className="text-xs text-[#b7603d]   font-medium">"Informed decisions!"</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">⚖️</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Legal Proceedings</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Verify FSSAI status for legal cases.
                </p>
                <div className="text-xs text-[#b7603d] font-medium">"Legal validation!"</div>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Manufacturers</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Verify supplier licenses for raw materials.
                </p>
                <div className="text-xs text-red-600 font-medium">"Safe ingredients!"</div>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Investor Services</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Verify food business compliance before investments.
                </p>
                <div className="text-xs text-teal-600 font-medium">"Smart investments!"</div>
              </div>
            </div>
          </div>
        </section>

        {/* Verification Types Section */}
        <section className="bg-[#f7f1ef]








 py-16 px-4 md:px-8 lg:px-20">
          <div className="w-full mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              Choose Your <span className="text-[#f8a51b]">Verification Method</span>
            </h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-600 font-bold">📄</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Basic FSSAI Check</h3>
                    <span className="text-sm text-orange-600 font-medium">License Validation</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Verify basic FSSAI details like license number, business name, and status.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">2-3 seconds</span>
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
                    <span className="text-[#b7603d]   font-bold">📋</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Comprehensive FSSAI Check</h3>
                    <span className="text-sm text-[#b7603d]   font-medium">Full Business Profile</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Provides complete FSSAI details including business type, products, and compliance history.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">3-5 seconds</span>
                  </div>
                                     <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">Thorough compliance checks</span>
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
                    <li>✓ Business name and FSSAI license number</li>
                    <li>✓ License status (Active/Expired)</li>
                    <li>✓ License type (Basic/State/Central)</li>
                    <li>✓ Business address</li>
                    <li>✓ Issuance date</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">Comprehensive Check:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ Business type (Manufacturer/Distributor/etc.)</li>
                    <li>✓ Product categories</li>
                    <li>✓ License validity period</li>
                    <li>✓ Compliance status</li>
                    <li>✓ Inspection history</li>
                    <li>✓ Previous violations (if any)</li>
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
              How <span className="text-[#f8a51b]">FSSAI Verification</span> Works
            </h2>
            <div className="relative">
              <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-200"></div>
              <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-[#f8a51b] to-transparent"></div>

              <div className="grid gap-8 grid-cols-1 md:grid-cols-5">
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#f8a51b] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    1
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Input FSSAI Details</h3>
                  <p className="text-gray-600 text-sm">Enter license number or business name</p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#f8a51b] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    2
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Data Validation</h3>
                  <p className="text-gray-600 text-sm">System validates business information</p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#f8a51b] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    3
                  </div>
                  <h3 className="text-lg font-semibold mb-2">FSSAI Database Check</h3>
                  <p className="text-gray-600 text-sm">API queries FSSAI license database</p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#f8a51b] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    4
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Record Matching</h3>
                  <p className="text-gray-600 text-sm">Cross-reference with business records</p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#f8a51b] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    5
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Secure Results</h3>
                  <p className="text-gray-600 text-sm">Receive verification status and details</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-[#f7f1ef]








 p-6 rounded-lg">
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-[#d38769] rounded-full"></span>
                  <span>FSSAI License Database</span>
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
                  <span>All Food Businesses Coverage</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span>Compliance Status</span>
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
              Why Use Our <span className="text-[#f8a51b]">FSSAI Verification API</span>?
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
                  Get FSSAI verification in 2-5 seconds with direct database access.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef]








 rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   text-xl">🍽️</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Food Safety</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Ensure food businesses comply with safety standards.
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
                  Meet regulatory requirements for food business verification.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-600 text-xl">🏪</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Business Details</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Access complete details of food businesses.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-red-600 text-xl">🚫</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Violation Check</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Identify businesses with food safety violations.
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
                  Simple <span className="text-[#f8a51b]">API Integration</span>
                </h2>
                <p className="text-gray-600">
                  Integrate FSSAI verification seamlessly into your applications with our developer-friendly API and comprehensive documentation.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-[#f8a51b]">✓</span>
                    <span>RESTful API with JSON responses</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#f8a51b]">✓</span>
                    <span>All registered food businesses coverage</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#f8a51b]">✓</span>
                    <span>Real-time verification results</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#f8a51b]">✓</span>
                    <span>Comprehensive error handling</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#f8a51b]">✓</span>
                    <span>Sandbox environment for testing</span>
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-block bg-[#f8a51b] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#f9b842] transition-colors"
                >
                  Read Full API Docs
                </a>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm overflow-x-auto">
                  <div className="mb-2 text-gray-400">// Sample API Request</div>
                  <div className="text-blue-400">POST</div> <span className="text-white">/api/v1/fssai-verification</span>
                  <div className="text-gray-400 mt-2">Headers:</div>
                  <div className="ml-2 text-yellow-400">Authorization: Bearer YOUR_API_KEY</div>
                  <div className="ml-2 text-yellow-400">Content-Type: application/json</div>
                  <div className="text-yellow-400 mt-3">{"{"}</div>
                  <div className="ml-4 text-white">"license_number": "11223344556677",</div>
                  <div className="ml-4 text-white">"business_name": "Fresh Foods Pvt Ltd",</div>
                  <div className="ml-4 text-white">"verification_type": "comprehensive"</div>
                  <div className="text-yellow-400">{"}"}</div>
                  <div className="mt-4 text-gray-400">// Sample Response</div>
                  <div className="text-yellow-400">{"{"}</div>
                  <div className="ml-4 text-white">"status": "valid",</div>
                  <div className="ml-4 text-white">"business_details": {"{"}</div>
                  <div className="ml-8 text-white">"name": "Fresh Foods Pvt Ltd",</div>
                  <div className="ml-8 text-white">"license_number": "11223344556677",</div>
                  <div className="ml-8 text-white">"status": "Active",</div>
                  <div className="ml-8 text-white">"license_type": "Central License",</div>
                  <div className="ml-8 text-white">"business_address": "123 Food Park, Mumbai",</div>
                  <div className="ml-8 text-white">"issuance_date": "2020-05-15",</div>
                  <div className="ml-8 text-white">"expiry_date": "2025-05-14"</div>
                  <div className="ml-4 text-white">{"}"},</div>
                  <div className="ml-4 text-white">"business_type": "Manufacturer",</div>
                  <div className="ml-4 text-white">"product_categories": ["Bakery", "Packaged Foods"],</div>
                  <div className="ml-4 text-white">"compliance_status": "Compliant",</div>
                  <div className="ml-4 text-white">"inspection_history": [</div>
                  <div className="ml-8 text-white">{"{"} "date": "2023-03-10", "result": "Satisfactory" {"}"},</div>
                  <div className="ml-8 text-white">{"{"} "date": "2022-06-15", "result": "Satisfactory" {"}"}</div>
                  <div className="ml-4 text-white">],</div>
                  <div className="ml-4 text-white">"violations": null</div>
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

export default FSSAIVerificationPageAPI