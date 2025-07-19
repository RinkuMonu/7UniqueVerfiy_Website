import type React from "react"
import SEO from "../app/Helmet/helment";
import { useContext } from "react";
import { ContextData } from "../config/context";
import { SEOData } from "../type";
import { Link } from "react-router-dom";

const CompanyNameToCINTANPageAPI: React.FC = () => {
  const { seo } = useContext(ContextData) as { seo: SEOData };
  return (
    <>
      <SEO seo={seo} />
      <main className="w-full mx-auto">
        {/* Hero Section - What is Company Name to CIN/TAN Verification? */}
        <section
          className="w-full bg-cover bg-center min-h-screen flex items-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-24"
          style={{ backgroundImage: "url('/img/bg (2).png')" }}
        >
          <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-2/3 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Instant Company Verification with CIN/TAN API
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
                Validate company credentials, registration details, and tax information with our comprehensive Company Verification API.
              </h2>
              <p className="text-lg mb-4 text-white">
                Our Company Check API provides instant validation of company details against official Ministry of Corporate Affairs and Income Tax databases.
              </p>
              <p className="mb-4 text-white">
                From basic company information to comprehensive registration history, we offer multiple verification methods to meet your needs.
              </p>
              <p className="mb-6 text-white">
                Trusted by banks, compliance agencies, and corporate governance teams across India.
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
                src="https://img.freepik.com/free-vector/flat-geometric-double-sided-horizontal-business-card-template_23-2149299854.jpg?ga=GA1.1.389685255.1745228264&semt=ais_items_boosted&w=740"
                alt="Company Verification"
                className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
              />
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
          <div className="w-full mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              Where Can You Use <span className="text-[#b7603d]">Company Verification</span>?
            </h2>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Vendor Onboarding</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Verify company credentials before onboarding new vendors.
                </p>
                <div className="text-xs text-[#b7603d]   font-medium">"Trusted partnerships!"</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📑</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">KYC Compliance</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Validate company identities for financial compliance.
                </p>
                <div className="text-xs text-[#b7603d]   font-medium">"Regulatory compliance!"</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Due Diligence</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Conduct background checks on business partners.
                </p>
                <div className="text-xs text-[#b7603d] font-medium">"Informed decisions!"</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">⚖️</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Legal Proceedings</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Verify company status for legal cases.
                </p>
                <div className="text-xs text-orange-600 font-medium">"Legal validation!"</div>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Banking Services</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Verify company details for corporate accounts.
                </p>
                <div className="text-xs text-red-600 font-medium">"Secure banking!"</div>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Investor Services</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Verify company backgrounds before investments.
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
              Choose Your <span className="text-[#b7603d]">Verification Method</span>
            </h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef]








 rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   font-bold">🏢</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Basic Company Check</h3>
                    <span className="text-sm text-[#b7603d]   font-medium">CIN Validation</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Verify basic company details like name, CIN, and registration status.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">2-3 seconds</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Cost:</span>
                    <span className="font-medium">₹10-15 per verification</span>
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
                    <h3 className="text-xl font-semibold text-gray-800">Comprehensive Company Check</h3>
                    <span className="text-sm text-[#b7603d]   font-medium">Full Company Profile</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Provides complete company details including registration, directors, and TAN information.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">3-5 seconds</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Cost:</span>
                    <span className="font-medium">₹20-30 per verification</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">Thorough company checks</span>
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
                    <li>✓ Company name and CIN</li>
                    <li>✓ Registration status</li>
                    <li>✓ Date of incorporation</li>
                    <li>✓ Company category</li>
                    <li>✓ Registered address</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">Comprehensive Check:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ Company directors and signatories</li>
                    <li>✓ TAN number and status</li>
                    <li>✓ Authorized capital</li>
                    <li>✓ Paid-up capital</li>
                    <li>✓ Business activity classification</li>
                    <li>✓ Latest financial status</li>
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
              How <span className="text-[#b7603d]">Company Verification</span> Works
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
                  <h3 className="text-lg font-semibold mb-2">Input Company Details</h3>
                  <p className="text-gray-600 text-sm">Enter company name or CIN</p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    2
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Data Validation</h3>
                  <p className="text-gray-600 text-sm">System validates company information</p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    3
                  </div>
                  <h3 className="text-lg font-semibold mb-2">MCA Database Check</h3>
                  <p className="text-gray-600 text-sm">API queries MCA company database</p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    4
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Record Matching</h3>
                  <p className="text-gray-600 text-sm">Cross-reference with company records</p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
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
                  <span>MCA Company Database</span>
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
                  <span>All Companies Coverage</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span>TAN Information</span>
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
              Why Use Our <span className="text-[#b7603d]">Company Verification API</span>?
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
                  Get company verification in 2-5 seconds with direct MCA database access.
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
                  Detect shell companies and verify legitimate businesses.
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
                  Meet KYC and AML requirements for business verification.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-600 text-xl">🏢</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Tax Information</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Access TAN details and tax compliance status.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-red-600 text-xl">🚫</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Blacklist Check</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Identify blacklisted or non-compliant companies automatically.
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
                  Integrate company verification seamlessly into your applications with our developer-friendly API and comprehensive documentation.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-[#b7603d]">✓</span>
                    <span>RESTful API with JSON responses</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#b7603d]">✓</span>
                    <span>All registered companies coverage</span>
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
                  <div className="text-blue-400">POST</div> <span className="text-white">/api/v1/company-verification</span>
                  <div className="text-gray-400 mt-2">Headers:</div>
                  <div className="ml-2 text-yellow-400">Authorization: Bearer YOUR_API_KEY</div>
                  <div className="ml-2 text-yellow-400">Content-Type: application/json</div>
                  <div className="text-yellow-400 mt-3">{"{"}</div>
                  <div className="ml-4 text-white">"company_name": "Tech Solutions Pvt Ltd",</div>
                  <div className="ml-4 text-white">"cin": "U74999MH2014PTC123456",</div>
                  <div className="ml-4 text-white">"verification_type": "comprehensive"</div>
                  <div className="text-yellow-400">{"}"}</div>
                  <div className="mt-4 text-gray-400">// Sample Response</div>
                  <div className="text-yellow-400">{"{"}</div>
                  <div className="ml-4 text-white">"status": "valid",</div>
                  <div className="ml-4 text-white">"company_details": {"{"}</div>
                  <div className="ml-8 text-white">"name": "Tech Solutions Private Limited",</div>
                  <div className="ml-8 text-white">"cin": "U74999MH2014PTC123456",</div>
                  <div className="ml-8 text-white">"status": "Active",</div>
                  <div className="ml-8 text-white">"date_of_incorporation": "2014-05-15",</div>
                  <div className="ml-8 text-white">"company_category": "Private Limited",</div>
                  <div className="ml-8 text-white">"company_subcategory": "Non-govt company",</div>
                  <div className="ml-8 text-white">"roc": "Mumbai",</div>
                  <div className="ml-8 text-white">"registered_address": "..."</div>
                  <div className="ml-4 text-white">{"}"},</div>
                  <div className="ml-4 text-white">"directors": [</div>
                  <div className="ml-8 text-white">{"{"} "name": "Rajesh Kumar", "din": "01234567", "designation": "Director" {"}"},</div>
                  <div className="ml-8 text-white">{"{"} "name": "Priya Sharma", "din": "07654321", "designation": "Managing Director" {"}"}</div>
                  <div className="ml-4 text-white">],</div>
                  <div className="ml-4 text-white">"tan_details": {"{"}</div>
                  <div className="ml-8 text-white">"tan": "BLR12345E",</div>
                  <div className="ml-8 text-white">"tan_registration_date": "2014-06-20",</div>
                  <div className="ml-8 text-white">"tan_status": "Active"</div>
                  <div className="ml-4 text-white">{"}"},</div>
                  <div className="ml-4 text-white">"financial_status": {"{"}</div>
                  <div className="ml-8 text-white">"authorized_capital": "10000000",</div>
                  <div className="ml-8 text-white">"paidup_capital": "7500000",</div>
                  <div className="ml-8 text-white">"latest_annual_return": "2022-03-31"</div>
                  <div className="ml-4 text-white">{"}"}</div>
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

export default CompanyNameToCINTANPageAPI