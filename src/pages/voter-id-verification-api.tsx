import type React from "react"

const VoterIDVerificationPageAPI: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative w-full mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Voter ID Verification API</h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Verify electoral identity instantly with our comprehensive Voter ID verification service
            </p>
            <p className="text-lg mb-10 text-purple-200 max-w-3xl mx-auto">
              Validate Voter ID details against official Election Commission databases for reliable identity
              verification and address proof validation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* API Overview */}
      <section className="py-20 bg-[#f7f1ef]








">
        <div className="w-full mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Voter ID Verification Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your electoral identity verification needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-[#f7f1ef]








  rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#b7603d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic</h3>
                <div className="text-4xl font-bold text-[#b7603d] mb-4">
                  ₹2<span className="text-lg text-gray-500">/verification</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#b7603d]   mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Up to 1,000 verifications/month</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#b7603d]   mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Basic voter information</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#b7603d]   mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Email support</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#b7603d]   mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Standard response time</span>
                </li>
              </ul>

              <button className="w-full bg-[#b7603d] text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Get Started
              </button>
            </div>

            {/* Professional Plan */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-purple-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-[#f7f1ef]








  rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#b7603d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
                <div className="text-4xl font-bold text-[#b7603d] mb-4">
                  ₹1.5<span className="text-lg text-gray-500">/verification</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#b7603d]   mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Up to 10,000 verifications/month</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#b7603d]   mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Detailed voter information</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#b7603d]   mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Priority support</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#b7603d]   mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Fast response time</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#b7603d]   mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Analytics dashboard</span>
                </li>
              </ul>

              <button className="w-full bg-[#b7603d] text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Start Free Trial
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-[#f7f1ef]








  rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#b7603d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <div className="text-4xl font-bold text-[#b7603d] mb-4">Custom</div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#b7603d]   mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Unlimited verifications</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#b7603d]   mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Complete voter database</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#b7603d]   mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>24/7 dedicated support</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#b7603d]   mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom integrations</span>
                </li>
              </ul>

              <button className="w-full bg-gray-800 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-900 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="w-full mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Use Cases</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how businesses leverage our Voter ID verification API
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#f7f1ef]








  rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🏛️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Government Services</h3>
              <p className="text-gray-600">
                Verify citizen identity for government services, welfare schemes, and official document issuance.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#f7f1ef]








  rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🏦</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Financial Services</h3>
              <p className="text-gray-600">
                Use Voter ID as address proof for KYC compliance and customer onboarding in banking and finance.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#f7f1ef]








  rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Platforms</h3>
              <p className="text-gray-600">
                Verify user identity for digital platforms, e-commerce, and online service registrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#f7f1ef]








">
        <div className="w-full mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Simple 4-step process to verify Voter ID details</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Submit Details</h3>
              <p className="text-gray-600">Send Voter ID number and basic details through our secure API endpoint.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Database Check</h3>
              <p className="text-gray-600">We verify the details against official Election Commission databases.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Validation</h3>
              <p className="text-gray-600">Advanced algorithms validate the voter information and address details.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Results</h3>
              <p className="text-gray-600">Receive comprehensive verification results with voter details and status.</p>
            </div>
          </div>
        </div>
      </section>

      {/* API Integration */}
      <section className="py-20 bg-white">
        <div className="w-full mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Easy API Integration</h2>
              <p className="text-xl text-gray-600 mb-8">
                Get started with our Voter ID verification API in minutes with comprehensive documentation and code
                examples.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-[#b7603d]   mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">RESTful API with JSON responses</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-[#b7603d]   mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Real-time verification results</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-[#b7603d]   mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Comprehensive error handling</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-[#b7603d]   mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">SDKs for popular languages</span>
                </div>
              </div>

              <button className="bg-[#b7603d] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors">
                View Documentation
              </button>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
              <div className="text-green-400 font-mono text-sm">
                <div className="text-gray-400 mb-2"># Sample API Request</div>
                <div className="text-blue-400">curl -X POST \</div>
                <div className="text-blue-400 ml-2">https://api.example.com/v1/voter-verification \</div>
                <div className="text-blue-400 ml-2">-H "Authorization: Bearer YOUR_API_KEY" \</div>
                <div className="text-blue-400 ml-2">-H "Content-Type: application/json" \</div>
                <div className="text-blue-400 ml-2">-d '{`{`}</div>
                <div className="text-yellow-400 ml-4">"voter_id": "ABC1234567",</div>
                <div className="text-yellow-400 ml-4">"name": "John Doe"</div>
                <div className="text-blue-400 ml-2">{`}`}'</div>

                <div className="text-gray-400 mt-4 mb-2"># Response</div>
                <div className="text-green-400">{`{`}</div>
                <div className="text-green-400 ml-2">"status": "verified",</div>
                <div className="text-green-400 ml-2">"voter_details": {`{`}</div>
                <div className="text-green-400 ml-4">"name": "John Doe",</div>
                <div className="text-green-400 ml-4">"constituency": "Delhi-001",</div>
                <div className="text-green-400 ml-4">"address": "..."</div>
                <div className="text-green-400 ml-2">{`}`}</div>
                <div className="text-green-400">{`}`}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="w-full mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-10 text-purple-100 max-w-3xl mx-auto">
            Join thousands of businesses using our Voter ID verification API to streamline their identity verification
            process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default VoterIDVerificationPageAPI
