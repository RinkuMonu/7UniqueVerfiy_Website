import type React from "react"
import SEO from "../app/Helmet/helment";
import { useContext } from "react";
import { ContextData } from "../config/context";
import { SEOData } from "../type";
import { Link } from "react-router-dom";

const CurrencyExchangePageAPI: React.FC = () => {
  const { seo } = useContext(ContextData) as { seo: SEOData };
  return (
    <>
      <SEO seo={seo} />
      <main className="w-full mx-auto">
        {/* Hero Section - What is Currency Exchange API? */}
        <section
          className="w-full bg-cover bg-center min-h-screen flex items-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-24"
          style={{ backgroundImage: "url('/img/bg (2).png')" }}
        >
          <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-2/3 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Real-Time Currency Exchange Rates API
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
                Access accurate, up-to-date foreign exchange rates with our comprehensive Currency Exchange API.
              </h2>
              <p className="text-lg mb-4 text-white">
                Our Currency API provides real-time exchange rates for 168 world currencies with historical data and conversion endpoints.
              </p>
              <p className="mb-4 text-white">
                From simple currency conversion to complex financial calculations, we offer multiple integration methods to meet your needs.
              </p>
              <p className="mb-6 text-white">
                Trusted by banks, fintech companies, and e-commerce platforms worldwide.
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
                src="https://img.freepik.com/free-vector/blockchain-infographic_23-2147857766.jpg?ga=GA1.1.389685255.1745228264&semt=ais_items_boosted&w=740"
                alt="Currency Exchange API"
                className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
              />
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
          <div className="w-full mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              Where Can You Use <span className="text-[#b7603d]">Currency Exchange API</span>?
            </h2>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🛒</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">E-commerce</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Show prices in local currencies for international customers.
                </p>
                <div className="text-xs text-[#b7603d]   font-medium">"Global sales!"</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Banking Apps</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Provide real-time currency conversion in financial apps.
                </p>
                <div className="text-xs text-[#b7603d]   font-medium">"Customer convenience!"</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Financial Analysis</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Track currency fluctuations for investment decisions.
                </p>
                <div className="text-xs text-[#b7603d] font-medium">"Informed trading!"</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">✈️</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Travel Apps</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Help travelers calculate expenses in foreign currencies.
                </p>
                <div className="text-xs text-orange-600 font-medium">"Better trips!"</div>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Accounting</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Convert international transactions for financial reporting.
                </p>
                <div className="text-xs text-red-600 font-medium">"Accurate books!"</div>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Remittance Services</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Calculate transfer amounts with current exchange rates.
                </p>
                <div className="text-xs text-teal-600 font-medium">"Fair transfers!"</div>
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
                    <span className="text-[#b7603d]   font-bold">💵</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Basic Exchange Rates</h3>
                    <span className="text-sm text-[#b7603d]   font-medium">Real-time Rates</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Get current exchange rates for all major currency pairs with hourly updates.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Update Frequency:</span>
                    <span className="font-medium">Hourly</span>
                  </div>
                                     <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">Basic conversions</span>
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
                    <h3 className="text-xl font-semibold text-gray-800">Professional Plan</h3>
                    <span className="text-sm text-[#b7603d]   font-medium">Full Features</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Includes real-time rates, historical data, and currency conversion endpoints.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Update Frequency:</span>
                    <span className="font-medium">Every 5 minutes</span>
                  </div>
                                     <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">Financial applications</span>
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
                    <li>✓ 168 world currencies</li>
                    <li>✓ Hourly rate updates</li>
                    <li>✓ Base currency switching</li>
                    <li>✓ Simple conversion endpoint</li>
                    <li>✓ 10,000 requests/month</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">Professional Plan:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ All Basic features plus...</li>
                    <li>✓ 5-minute rate updates</li>
                    <li>✓ 5 years historical data</li>
                    <li>✓ Time-series data</li>
                    <li>✓ Change calculation</li>
                    <li>✓ 50,000 requests/month</li>
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
              How <span className="text-[#b7603d]">Currency API</span> Works
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
                  <h3 className="text-lg font-semibold mb-2">Data Collection</h3>
                  <p className="text-gray-600 text-sm">Aggregate rates from central banks</p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    2
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Rate Validation</h3>
                  <p className="text-gray-600 text-sm">Cross-verify with multiple sources</p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    3
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Data Processing</h3>
                  <p className="text-gray-600 text-sm">Calculate derived rates and pairs</p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    4
                  </div>
                  <h3 className="text-lg font-semibold mb-2">API Update</h3>
                  <p className="text-gray-600 text-sm">Push latest rates to API endpoints</p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    5
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Client Access</h3>
                  <p className="text-gray-600 text-sm">Your app receives current rates</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-[#f7f1ef]








 p-6 rounded-lg">
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-[#d38769] rounded-full"></span>
                  <span>168 Currencies</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  <span>Real-time Updates</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                  <span>5-Year History</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                  <span>Bank-Level Accuracy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span>Market Trends</span>
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
              Why Use Our <span className="text-[#b7603d]">Currency Exchange API</span>?
            </h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef]








   rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   text-xl">⚡</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Real-Time Rates</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Get currency rates updated every 5 minutes with our professional plan.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef]








 rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   text-xl">📅</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Historical Data</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Access 5 years of historical exchange rate data for trend analysis.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef]








  rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d] text-xl">🔢</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Bulk Endpoints</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Get all rates in a single API call to reduce requests and costs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-600 text-xl">🔄</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Currency Conversion</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Convert any amount between currencies with a simple API call.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-red-600 text-xl">📉</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Change Calculation</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Get percentage and value changes between any two dates.
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
                  Integrate currency exchange rates seamlessly into your applications with our developer-friendly API and comprehensive documentation.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-[#b7603d]">✓</span>
                    <span>RESTful API with JSON responses</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#b7603d]">✓</span>
                    <span>168 world currencies coverage</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#b7603d]">✓</span>
                    <span>Real-time and historical data</span>
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
                  <div className="text-blue-400">GET</div> <span className="text-white">/api/v1/latest?base=USD&amp;symbols=EUR,GBP,JPY</span>
                  <div className="text-gray-400 mt-2">Headers:</div>
                  <div className="ml-2 text-yellow-400">Authorization: Bearer YOUR_API_KEY</div>
                  <div className="ml-2 text-yellow-400">Accept: application/json</div>

                  <div className="mt-4 text-gray-400">// Sample Response</div>
                  <div className="text-yellow-400">{"{"}</div>
                  <div className="ml-4 text-white">"success": true,</div>
                  <div className="ml-4 text-white">"timestamp": 1620000000,</div>
                  <div className="ml-4 text-white">"base": "USD",</div>
                  <div className="ml-4 text-white">"date": "2023-05-01",</div>
                  <div className="ml-4 text-white">"rates": {"{"}</div>
                  <div className="ml-8 text-white">"EUR": 0.8923,</div>
                  <div className="ml-8 text-white">"GBP": 0.7721,</div>
                  <div className="ml-8 text-white">"JPY": 109.47</div>
                  <div className="ml-4 text-white">{"}"}</div>
                  <div className="text-yellow-400">{"}"}</div>

                  <div className="mt-6 text-gray-400">// Conversion Example</div>
                  <div className="text-blue-400">GET</div> <span className="text-white">/api/v1/convert?from=EUR&amp;to=USD&amp;amount=100</span>

                  <div className="mt-2 text-gray-400">// Sample Response</div>
                  <div className="text-yellow-400">{"{"}</div>
                  <div className="ml-4 text-white">"success": true,</div>
                  <div className="ml-4 text-white">"query": {"{"}</div>
                  <div className="ml-8 text-white">"from": "EUR",</div>
                  <div className="ml-8 text-white">"to": "USD",</div>
                  <div className="ml-8 text-white">"amount": 100</div>
                  <div className="ml-4 text-white">{"}"},</div>
                  <div className="ml-4 text-white">"info": {"{"}</div>
                  <div className="ml-8 text-white">"rate": 1.1207,</div>
                  <div className="ml-8 text-white">"timestamp": 1620000000</div>
                  <div className="ml-4 text-white">{"}"},</div>
                  <div className="ml-4 text-white">"result": 112.07</div>
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

export default CurrencyExchangePageAPI