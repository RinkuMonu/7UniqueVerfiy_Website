import type React from "react"

const ITRComplianceProfilePageAPI: React.FC = () => {
  return (
    <main className="w-full mx-auto">
      {/* Hero Section - What is ITR Compliance? */}
      <section
        className="w-full bg-cover bg-center min-h-screen flex items-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-24"
        style={{ backgroundImage: "url('/img/bg (2).png')" }}
      >
        <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-2/3 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Instant ITR Compliance Verification API
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
              Verify tax compliance, 26AS details, and ITR filing history with our comprehensive Income Tax Verification API.
            </h2>
            <p className="text-lg mb-4 text-white">
              Our ITR Check API provides instant validation of taxpayer details against official Income Tax Department databases.
            </p>
            <p className="mb-4 text-white">
              From basic ITR status to comprehensive financial profiles, we offer multiple verification methods to meet your needs.
            </p>
            <p className="mb-6 text-white">
              Trusted by banks, financial institutions, and compliance teams across India.
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
              src="https://img.freepik.com/free-vector/flat-finance-concept-with-cute-style_23-2147677390.jpg?ga=GA1.1.389685255.1745228264&semt=ais_items_boosted&w=740"
              alt="ITR Compliance Verification"
              className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
        <div className="w-full mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Where Can You Use <span className="text-[#b7603d]">ITR Verification</span>?
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Loan Processing</h3>
              <p className="text-gray-600 text-sm mb-3">
                Verify ITR filings and income details for loan approvals.
              </p>
              <div className="text-xs text-[#b7603d]   font-medium">"Accurate income verification!"</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📑</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">KYC Compliance</h3>
              <p className="text-gray-600 text-sm mb-3">
                Validate taxpayer identities for financial compliance.
              </p>
              <div className="text-xs text-[#b7603d]   font-medium">"Regulatory compliance!"</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Due Diligence</h3>
              <p className="text-gray-600 text-sm mb-3">
                Conduct financial background checks on individuals.
              </p>
              <div className="text-xs text-[#b7603d] font-medium">"Informed decisions!"</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Legal Proceedings</h3>
              <p className="text-gray-600 text-sm mb-3">
                Verify income details for legal cases.
              </p>
              <div className="text-xs text-orange-600 font-medium">"Legal validation!"</div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Employment Verification</h3>
              <p className="text-gray-600 text-sm mb-3">
                Verify declared income for employment screening.
              </p>
              <div className="text-xs text-red-600 font-medium">"Hiring confidence!"</div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Investor Services</h3>
              <p className="text-gray-600 text-sm mb-3">
                Verify financial backgrounds before investments.
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
                  <span className="text-[#b7603d]   font-bold">📊</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Basic ITR Check</h3>
                  <span className="text-sm text-[#b7603d]   font-medium">Filing Status</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Verify basic ITR filing status, PAN validity, and last filing year.
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
                  <h3 className="text-xl font-semibold text-gray-800">26AS Comprehensive Check</h3>
                  <span className="text-sm text-[#b7603d]   font-medium">Full Tax Profile</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Provides complete 26AS details including TDS, tax payments, and refunds.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Response Time:</span>
                  <span className="font-medium">5-8 seconds</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Cost:</span>
                  <span className="font-medium">₹30-40 per verification</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Best For:</span>
                  <span className="font-medium">Thorough financial checks</span>
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
                  <li>✓ PAN validity and status</li>
                  <li>✓ ITR filing status (Filed/Not Filed)</li>
                  <li>✓ Last filing assessment year</li>
                  <li>✓ Basic taxpayer details</li>
                  <li>✓ PAN-Aadhaar linking status</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-700 mb-2">Comprehensive Check:</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ Complete 26AS statement</li>
                  <li>✓ TDS details from all deductors</li>
                  <li>✓ Tax payments and refunds</li>
                  <li>✓ Previous years' ITR filing history</li>
                  <li>✓ Reported income details</li>
                  <li>✓ Tax demand and outstanding details</li>
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
            How <span className="text-[#b7603d]">ITR Verification</span> Works
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
                <h3 className="text-lg font-semibold mb-2">Input PAN Details</h3>
                <p className="text-gray-600 text-sm">Enter PAN or taxpayer name</p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">Data Validation</h3>
                <p className="text-gray-600 text-sm">System validates taxpayer information</p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Income Tax Database Check</h3>
                <p className="text-gray-600 text-sm">API queries Income Tax Department database</p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2">Record Matching</h3>
                <p className="text-gray-600 text-sm">Cross-reference with taxpayer records</p>
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
                <span>Income Tax Database</span>
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
                <span>All Taxpayers Coverage</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span>Financial History</span>
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
            Why Use Our <span className="text-[#b7603d]">ITR Verification API</span>?
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
                Get tax verification in 2-8 seconds with direct Income Tax Department access.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#f7f1ef]








 rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#b7603d]   text-xl">💰</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Income Verification</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Validate declared income against official tax records.
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
                Meet KYC and financial compliance requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-orange-600 text-xl">🏢</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">TDS Tracking</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Access complete TDS details from all deductors.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-red-600 text-xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Financial History</h3>
              </div>
              <p className="text-gray-600 text-sm">
                View multi-year ITR filing and income history.
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
                Integrate ITR verification seamlessly into your applications with our developer-friendly API and comprehensive documentation.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>RESTful API with JSON responses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>All taxpayers coverage</span>
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
                <div className="text-blue-400">POST</div> <span className="text-white">/api/v1/itr-verification</span>
                <div className="text-gray-400 mt-2">Headers:</div>
                <div className="ml-2 text-yellow-400">Authorization: Bearer YOUR_API_KEY</div>
                <div className="ml-2 text-yellow-400">Content-Type: application/json</div>
                <div className="text-yellow-400 mt-3">{"{"}</div>
                <div className="ml-4 text-white">"pan": "ABCDE1234F",</div>
                <div className="ml-4 text-white">"taxpayer_name": "Rajesh Kumar",</div>
                <div className="ml-4 text-white">"verification_type": "26as"</div>
                <div className="text-yellow-400">{"}"}</div>
                <div className="mt-4 text-gray-400">// Sample Response</div>
                <div className="text-yellow-400">{"{"}</div>
                <div className="ml-4 text-white">"status": "valid",</div>
                <div className="ml-4 text-white">"taxpayer_details": {"{"}</div>
                <div className="ml-8 text-white">"name": "Rajesh Kumar",</div>
                <div className="ml-8 text-white">"pan": "ABCDE1234F",</div>
                <div className="ml-8 text-white">"pan_status": "Active",</div>
                <div className="ml-8 text-white">"last_filing_year": "2023-24",</div>
                <div className="ml-8 text-white">"aadhaar_linked": true</div>
                <div className="ml-4 text-white">{"}"},</div>
                <div className="ml-4 text-white">"26as_details": {"{"}</div>
                <div className="ml-8 text-white">"total_tds": 125000,</div>
                <div className="ml-8 text-white">"total_tax_paid": 45000,</div>
                <div className="ml-8 text-white">"total_refund": 15000,</div>
                <div className="ml-8 text-white">"tds_deductors": [</div>
                <div className="ml-12 text-white">{"{"} "deductor_name": "Tech Solutions Pvt Ltd", "tan": "DELT12345", "amount": 75000, "section": "192" {"}"},</div>
                <div className="ml-12 text-white">{"{"} "deductor_name": "Innovate Services Ltd", "tan": "MUMT54321", "amount": 50000, "section": "194J" {"}"}</div>
                <div className="ml-8 text-white">]</div>
                <div className="ml-4 text-white">{"}"},</div>
                <div className="ml-4 text-white">"itr_history": [</div>
                <div className="ml-8 text-white">{"{"} "assessment_year": "2023-24", "filing_date": "2023-07-15", "total_income": 850000, "tax_paid": 125000 {"}"},</div>
                <div className="ml-8 text-white">{"{"} "assessment_year": "2022-23", "filing_date": "2022-07-20", "total_income": 750000, "tax_paid": 110000 {"}"}</div>
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

export default ITRComplianceProfilePageAPI