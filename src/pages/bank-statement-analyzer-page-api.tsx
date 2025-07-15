import type React from "react"

const BankStatementAnalyzerPageAPI: React.FC = () => {
  return (
    <main className="w-full mx-auto">
      {/* Hero Section - What is Bank Statement Analysis? */}
      <section
        className="w-full bg-cover bg-center min-h-screen flex items-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-24"
        style={{ backgroundImage: "url('/img/bg (2).png')" }}
      >
        <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-2/3 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI-Powered Bank Statement Analysis API
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
              Extract insights, categorize transactions, and detect patterns with our advanced Bank Statement Analyzer API.
            </h2>
            <p className="text-lg mb-4 text-white">
              Our API provides comprehensive analysis of bank statements in PDF, CSV, or JSON formats.
            </p>
            <p className="mb-4 text-white">
              From basic transaction categorization to advanced financial health scoring, we offer multiple analysis levels.
            </p>
            <p className="mb-6 text-white">
              Trusted by fintech companies, lenders, and financial institutions worldwide.
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
              src="https://img.freepik.com/free-vector/hand-drawn-credit-assessment-concept_23-2149171285.jpg?ga=GA1.1.389685255.1745228264&semt=ais_items_boosted&w=740"
              alt="Bank Statement Analysis"
              className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
        <div className="w-full mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Where Can You Use <span className="text-[#b7603d]">Bank Statement Analysis</span>?
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Lending Decisions</h3>
              <p className="text-gray-600 text-sm mb-3">
                Analyze income patterns and spending habits for loan approvals.
              </p>
              <div className="text-xs text-[#b7603d]   font-medium">"Better risk assessment!"</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Financial Health</h3>
              <p className="text-gray-600 text-sm mb-3">
                Provide customers with spending insights and savings recommendations.
              </p>
              <div className="text-xs text-[#b7603d]   font-medium">"Personalized advice!"</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Fraud Detection</h3>
              <p className="text-gray-600 text-sm mb-3">
                Identify suspicious transactions and unusual spending patterns.
              </p>
              <div className="text-xs text-[#b7603d] font-medium">"Enhanced security!"</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Credit Scoring</h3>
              <p className="text-gray-600 text-sm mb-3">
                Generate alternative credit scores based on transaction history.
              </p>
              <div className="text-xs text-orange-600 font-medium">"More inclusive!"</div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">PFM Apps</h3>
              <p className="text-gray-600 text-sm mb-3">
                Power personal finance management tools with automatic categorization.
              </p>
              <div className="text-xs text-red-600 font-medium">"Smarter budgeting!"</div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Business Analytics</h3>
              <p className="text-gray-600 text-sm mb-3">
                Analyze cash flow patterns for business banking customers.
              </p>
              <div className="text-xs text-teal-600 font-medium">"Data-driven decisions!"</div>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Types Section */}
      <section className="bg-[#f7f1ef]








 py-16 px-4 md:px-8 lg:px-20">
        <div className="w-full mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Choose Your <span className="text-[#b7603d]">Analysis Level</span>
          </h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#f7f1ef]








 rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#b7603d]   font-bold">📋</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Basic Analysis</h3>
                  <span className="text-sm text-[#b7603d]   font-medium">Transaction Categorization</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Categorize transactions, calculate income/expenses, and identify basic patterns.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Processing Time:</span>
                  <span className="font-medium">10-30 seconds</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Cost:</span>
                  <span className="font-medium">₹10-15 per statement</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Best For:</span>
                  <span className="font-medium">Basic financial overview</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#f7f1ef]








   rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#b7603d]   font-bold">📈</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Advanced Analysis</h3>
                  <span className="text-sm text-[#b7603d]   font-medium">Financial Health Scoring</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Provides financial health scores, trend analysis, and predictive insights.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Processing Time:</span>
                  <span className="font-medium">30-60 seconds</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Cost:</span>
                  <span className="font-medium">₹20-30 per statement</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Best For:</span>
                  <span className="font-medium">Lending decisions and deep insights</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-lg font-semibold mb-4 text-gray-800">What You Get:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-gray-700 mb-2">Basic Analysis:</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ Transaction categorization</li>
                  <li>✓ Income/expense summary</li>
                  <li>✓ Recurring payments detection</li>
                  <li>✓ Monthly cash flow analysis</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-700 mb-2">Advanced Analysis:</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ Financial health score</li>
                  <li>✓ Spending habit analysis</li>
                  <li>✓ Fraud risk indicators</li>
                  <li>✓ Predictive cash flow</li>
                  <li>✓ Creditworthiness assessment</li>
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
            How <span className="text-[#b7603d]">Bank Statement Analysis</span> Works
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
                <h3 className="text-lg font-semibold mb-2">Upload Statement</h3>
                <p className="text-gray-600 text-sm">Submit PDF, CSV, or JSON bank statement</p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">Data Extraction</h3>
                <p className="text-gray-600 text-sm">OCR and structured data processing</p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Transaction Analysis</h3>
                <p className="text-gray-600 text-sm">AI-powered categorization and tagging</p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2">Pattern Detection</h3>
                <p className="text-gray-600 text-sm">Identify trends and anomalies</p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  5
                </div>
                <h3 className="text-lg font-semibold mb-2">Generate Insights</h3>
                <p className="text-gray-600 text-sm">Comprehensive financial report</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-[#f7f1ef]








 p-6 rounded-lg">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-[#d38769] rounded-full"></span>
                <span>All Bank Formats</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                <span>AI-Powered Analysis</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                <span>Secure Processing</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                <span>100+ Categories</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span>Bank-grade Encryption</span>
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
            Why Use Our <span className="text-[#b7603d]">Bank Statement API</span>?
          </h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#f7f1ef]








   rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#b7603d]   text-xl">🤖</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">AI-Powered Analysis</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Advanced machine learning models with 95%+ categorization accuracy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#f7f1ef]








 rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#b7603d]   text-xl">🏦</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Bank Coverage</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Supports 2000+ banks worldwide with automatic format detection.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#f7f1ef]








  rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#b7603d] text-xl">🔒</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Data Security</h3>
              </div>
              <p className="text-gray-600 text-sm">
                End-to-end encryption and GDPR compliance for sensitive financial data.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-orange-600 text-xl">📈</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Custom Metrics</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Tailored financial metrics based on your specific requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-red-600 text-xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Fast Processing</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Analyze 6 months of transactions in under 60 seconds.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-teal-600 text-xl">🔄</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Continuous Learning</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Our models improve over time with more transaction data processed.
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
                Integrate bank statement analysis seamlessly into your applications with our developer-friendly API and comprehensive documentation.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>RESTful API with JSON responses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>Support for PDF, CSV, and JSON statements</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>Webhook support for async processing</span>
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
                <div className="text-blue-400">POST</div> <span className="text-white">/api/v1/analyze-statement</span>
                <div className="text-gray-400 mt-2">Headers:</div>
                <div className="ml-2 text-yellow-400">Authorization: Bearer YOUR_API_KEY</div>
                <div className="ml-2 text-yellow-400">Content-Type: multipart/form-data</div>
                <div className="text-yellow-400 mt-3">{"{"}</div>
                <div className="ml-4 text-white">"file": "statement.pdf",</div>
                <div className="ml-4 text-white">"analysis_type": "advanced",</div>
                <div className="ml-4 text-white">"customer_id": "cust_12345"</div>
                <div className="text-yellow-400">{"}"}</div>
                <div className="mt-4 text-gray-400">// Sample Response</div>
                <div className="text-yellow-400">{"{"}</div>
                <div className="ml-4 text-white">"status": "completed",</div>
                <div className="ml-4 text-white">"analysis": {"{"}</div>
                <div className="ml-8 text-white">"period": "Jan 2023 - Jun 2023",</div>
                <div className="ml-8 text-white">"total_income": 125000,</div>
                <div className="ml-8 text-white">"total_expenses": 87500,</div>
                <div className="ml-8 text-white">"categories": {"{"}</div>
                <div className="ml-12 text-white">"housing": 25000,</div>
                <div className="ml-12 text-white">"food": 18000,</div>
                <div className="ml-12 text-white">"transportation": 12000,</div>
                <div className="ml-8 text-white">{"}"},</div>
                <div className="ml-8 text-white">"financial_health_score": 78,</div>
                <div className="ml-8 text-white">"recurring_payments": ["rent", "netflix"],</div>
                <div className="ml-8 text-white">"anomalies": ["unusual_cash_withdrawal"]</div>
                <div className="ml-4 text-white">{"}"},</div>
                <div className="ml-4 text-white">"analysis_timestamp": "2023-06-15T14:30:45Z"</div>
                <div className="text-yellow-400">{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default BankStatementAnalyzerPageAPI