import type React from "react"
import SEO from "../app/Helmet/helment";
import { useContext } from "react";
import { ContextData } from "../config/context";
import { SEOData } from "../type";

const CreditReportCIBILEquifaxPageAPI: React.FC = () => {
  const { seo } = useContext(ContextData) as { seo: SEOData };
  return (
    <>
      <SEO seo={seo} />
      <main className="w-full mx-auto">
        {/* Hero Section - What is Credit Report Verification? */}
        <section
          className="w-full bg-cover bg-center min-h-screen flex items-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-24"
          style={{ backgroundImage: "url('/img/bg (2).png')" }}
        >
          <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-2/3 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Instant Credit Report Verification API
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
                Access CIBIL, Equifax, and other credit bureau data with our comprehensive Credit Report API.
              </h2>
              <p className="text-lg mb-4 text-white">
                Our Credit Check API provides instant validation of credit scores and history from major bureaus.
              </p>
              <p className="mb-4 text-white">
                From basic score checks to detailed credit history, we offer multiple verification methods to meet your needs.
              </p>
              <p className="mb-6 text-white">
                Trusted by banks, lenders, and financial institutions across India.
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
                src="https://img.freepik.com/free-vector/hand-drawn-credit-assessment-concept_23-2149171270.jpg?ga=GA1.1.389685255.1745228264&semt=ais_items_boosted&w=740"
                alt="Credit Report Verification"
                className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
              />
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
          <div className="w-full mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              Where Can You Use <span className="text-[#b7603d]">Credit Report Verification</span>?
            </h2>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Loan Approvals</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Assess creditworthiness before approving loans.
                </p>
                <div className="text-xs text-[#b7603d]   font-medium">"Smart lending decisions!"</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">💳</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Credit Card Applications</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Verify credit history for card approvals.
                </p>
                <div className="text-xs text-[#b7603d]   font-medium">"Risk assessment!"</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Mortgage Processing</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Evaluate credit profiles for home loans.
                </p>
                <div className="text-xs text-[#b7603d] font-medium">"Informed approvals!"</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">BNPL Services</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Check credit scores for Buy Now Pay Later services.
                </p>
                <div className="text-xs text-orange-600 font-medium">"Credit risk management!"</div>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Credit Monitoring</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Track credit score changes over time.
                </p>
                <div className="text-xs text-red-600 font-medium">"Financial health tracking!"</div>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Tenant Screening</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Assess financial reliability of potential tenants.
                </p>
                <div className="text-xs text-teal-600 font-medium">"Rental risk reduction!"</div>
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
                    <span className="text-[#b7603d]   font-bold">📈</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Basic Credit Check</h3>
                    <span className="text-sm text-[#b7603d]   font-medium">Score Verification</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Verify basic credit details like score, active accounts, and payment history.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">3-5 seconds</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Cost:</span>
                    <span className="font-medium">₹50-75 per verification</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">Quick credit assessments</span>
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
                    <h3 className="text-xl font-semibold text-gray-800">Comprehensive Credit Report</h3>
                    <span className="text-sm text-[#b7603d]   font-medium">Full Credit Profile</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Provides complete credit history including loans, credit cards, and payment behavior.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">5-8 seconds</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Cost:</span>
                    <span className="font-medium">₹100-150 per verification</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">Thorough credit analysis</span>
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
                    <li>✓ CIBIL/Equifax score</li>
                    <li>✓ Score band (Excellent/Good/Fair/Poor)</li>
                    <li>✓ Active credit accounts</li>
                    <li>✓ Credit utilization ratio</li>
                    <li>✓ Late payment history</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">Comprehensive Check:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ Detailed credit history</li>
                    <li>✓ Account payment history</li>
                    <li>✓ Credit inquiries</li>
                    <li>✓ Default records</li>
                    <li>✓ Loan details (types, amounts, tenure)</li>
                    <li>✓ Credit card utilization</li>
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
              How <span className="text-[#b7603d]">Credit Report Verification</span> Works
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
                  <h3 className="text-lg font-semibold mb-2">User Consent</h3>
                  <p className="text-gray-600 text-sm">Customer provides consent for credit check</p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    2
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Data Validation</h3>
                  <p className="text-gray-600 text-sm">System validates personal information</p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    3
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Bureau Query</h3>
                  <p className="text-gray-600 text-sm">API queries CIBIL/Equifax databases</p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    4
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Report Generation</h3>
                  <p className="text-gray-600 text-sm">Credit report is compiled</p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    5
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Secure Delivery</h3>
                  <p className="text-gray-600 text-sm">Receive credit score and report</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-[#f7f1ef]








 p-6 rounded-lg">
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-[#d38769] rounded-full"></span>
                  <span>CIBIL Database</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  <span>Equifax Coverage</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                  <span>Experian Integration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                  <span>Real-time Verification</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span>Secure API</span>
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
              Why Use Our <span className="text-[#b7603d]">Credit Report API</span>?
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
                  Get credit verification in 3-8 seconds with direct bureau access.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef]








 rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   text-xl">📊</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Risk Assessment</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Evaluate credit risk with comprehensive scoring models.
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
                  Meet RBI and financial regulations for credit checks.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-600 text-xl">🔍</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Detailed History</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Access complete payment history and credit behavior.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-red-600 text-xl">🔄</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Multiple Bureaus</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Access CIBIL, Equifax, Experian and other bureau data.
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
                  Simple REST API with comprehensive documentation.
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
                  Integrate credit report verification seamlessly into your applications with our developer-friendly API.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-[#b7603d]">✓</span>
                    <span>RESTful API with JSON responses</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#b7603d]">✓</span>
                    <span>Multiple bureau coverage</span>
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
                  <div className="text-blue-400">POST</div> <span className="text-white">/api/v1/credit-verification</span>
                  <div className="text-gray-400 mt-2">Headers:</div>
                  <div className="ml-2 text-yellow-400">Authorization: Bearer YOUR_API_KEY</div>
                  <div className="ml-2 text-yellow-400">Content-Type: application/json</div>
                  <div className="text-yellow-400 mt-3">{"{"}</div>
                  <div className="ml-4 text-white">"pan": "ABCDE1234F",</div>
                  <div className="ml-4 text-white">"full_name": "Rajesh Kumar",</div>
                  <div className="ml-4 text-white">"dob": "1985-05-15",</div>
                  <div className="ml-4 text-white">"mobile": "9876543210",</div>
                  <div className="ml-4 text-white">"report_type": "detailed"</div>
                  <div className="text-yellow-400">{"}"}</div>
                  <div className="mt-4 text-gray-400">// Sample Response</div>
                  <div className="text-yellow-400">{"{"}</div>
                  <div className="ml-4 text-white">"status": "success",</div>
                  <div className="ml-4 text-white">"credit_score": 785,</div>
                  <div className="ml-4 text-white">"score_band": "Excellent",</div>
                  <div className="ml-4 text-white">"credit_accounts": {"{"}</div>
                  <div className="ml-8 text-white">"total_accounts": 5,</div>
                  <div className="ml-8 text-white">"active_accounts": 3,</div>
                  <div className="ml-8 text-white">"delinquent_accounts": 0,</div>
                  <div className="ml-8 text-white">"credit_utilization": 0.35</div>
                  <div className="ml-4 text-white">{"}"},</div>
                  <div className="ml-4 text-white">"loan_details": [</div>
                  <div className="ml-8 text-white">{"{"} "type": "Home Loan", "lender": "HDFC Bank", "amount": 2500000, "emi": 25000, "status": "Active" {"}"},</div>
                  <div className="ml-8 text-white">{"{"} "type": "Personal Loan", "lender": "ICICI Bank", "amount": 500000, "emi": 12500, "status": "Closed" {"}"}</div>
                  <div className="ml-4 text-white">],</div>
                  <div className="ml-4 text-white">"credit_card_details": [</div>
                  <div className="ml-8 text-white">{"{"} "issuer": "SBI Card", "limit": 150000, "balance": 45000, "status": "Active" {"}"}</div>
                  <div className="ml-4 text-white">],</div>
                  <div className="ml-4 text-white">"payment_history": "000000000000000000000000",</div>
                  <div className="ml-4 text-white">"inquiries_last_6m": 2</div>
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

export default CreditReportCIBILEquifaxPageAPI