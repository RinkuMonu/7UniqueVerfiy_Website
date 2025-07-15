const NameMatchPageAPI: React.FC = () => {
    return (
        <main className="w-full mx-auto">
            {/* Hero Section - What is Name Match? */}
            <section
                className="w-full bg-cover bg-center min-h-screen flex items-center  px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-24"
                style={{ backgroundImage: "url('/img/bg (2).png')" }}
            >
                <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="w-full md:w-2/3 text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Verify Name Matches Instantly with AI-Powered Accuracy
                        </h1>
                        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
                            Ensure identity verification, prevent fraud, and streamline KYC processes with our intelligent Name Match
                            APIs that handle variations and aliases.
                        </h2>
                        <p className="text-lg mb-4 text-white">
                            Our Name Match API provides intelligent comparison of names across documents, handling variations,
                            nicknames, and cultural differences to ensure accurate identity verification.
                        </p>
                        <p className="mb-4 text-white">
                            From basic exact matches to fuzzy matching with confidence scores, we offer comprehensive methods to meet
                            your specific business requirements and compliance needs.
                        </p>
                        <p className="mb-6 text-white">
                            Trusted by banks, financial institutions, and businesses worldwide to ensure accurate name verification
                            and prevent identity fraud.
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
                            src="https://img.freepik.com/free-vector/name-matching-concept-illustration_114360-1234.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
                            alt="Name Match"
                            className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
                        />
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
                <div className="w-full mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
                        Where Can You Use <span className="text-[#b7603d]">Name Match</span>?
                    </h2>
                    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                            <div className="text-4xl mb-4">🏦</div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">Banking & Finance</h3>
                            <p className="text-gray-600 text-sm mb-3">
                                Verify customer names across multiple documents for account opening and loan processing.
                            </p>
                            <div className="text-xs text-[#b7603d]   font-medium">"Identity verification!"</div>
                        </div>
                        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                            <div className="text-4xl mb-4">📋</div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">KYC Compliance</h3>
                            <p className="text-gray-600 text-sm mb-3">
                                Ensure name consistency across KYC documents for regulatory compliance and risk management.
                            </p>
                            <div className="text-xs text-[#b7603d]   font-medium">"Regulatory compliance!"</div>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                            <div className="text-4xl mb-4">🛡️</div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">Fraud Prevention</h3>
                            <p className="text-gray-600 text-sm mb-3">
                                Detect identity fraud by comparing names across different verification sources and documents.
                            </p>
                            <div className="text-xs text-[#b7603d] font-medium">"Fraud detection!"</div>
                        </div>
                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                            <div className="text-4xl mb-4">💳</div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">Payment Processing</h3>
                            <p className="text-gray-600 text-sm mb-3">
                                Verify cardholder names against account names for secure payment processing and authorization.
                            </p>
                            <div className="text-xs text-orange-600 font-medium">"Payment security!"</div>
                        </div>
                        <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                            <div className="text-4xl mb-4">🏥</div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">Healthcare</h3>
                            <p className="text-gray-600 text-sm mb-3">
                                Match patient names across medical records and insurance documents for accurate healthcare delivery.
                            </p>
                            <div className="text-xs text-red-600 font-medium">"Patient verification!"</div>
                        </div>
                        <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                            <div className="text-4xl mb-4">📊</div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">Data Deduplication</h3>
                            <p className="text-gray-600 text-sm mb-3">
                                Identify duplicate records and merge customer data by matching names with variations.
                            </p>
                            <div className="text-xs text-teal-600 font-medium">"Data quality!"</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Verification Types Section */}
            <section className="bg-[#f7f1ef]








 py-16 px-4 md:px-8 lg:px-20">
                <div className="w-full mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
                        Choose Your <span className="text-[#b7603d]">Name Matching Method</span>
                    </h2>
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-[#f7f1ef]








 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-[#b7603d]   font-bold">🎯</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800">Exact Name Match</h3>
                                    <span className="text-sm text-[#b7603d]   font-medium">Precise Matching</span>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4">
                                Performs exact string comparison between names, ideal for strict verification requirements and
                                regulatory compliance.
                            </p>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Response Time:</span>
                                    <span className="font-medium">1-2 seconds</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Cost:</span>
                                    <span className="font-medium">₹2-3 per match</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Best For:</span>
                                    <span className="font-medium">Strict compliance checks</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-[#f7f1ef]








   rounded-full flex items-center justify-center mr-4">
                                    <span className="text-[#b7603d]   font-bold">🧠</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800">Fuzzy Name Match</h3>
                                    <span className="text-sm text-[#b7603d]   font-medium">AI-Powered Matching</span>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4">
                                Uses advanced algorithms to match names with variations, nicknames, and cultural differences with
                                confidence scores.
                            </p>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Response Time:</span>
                                    <span className="font-medium">2-3 seconds</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Cost:</span>
                                    <span className="font-medium">₹4-6 per match</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Best For:</span>
                                    <span className="font-medium">Real-world name variations</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
                        <h4 className="text-lg font-semibold mb-4 text-gray-800">What You Get:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h5 className="font-medium text-gray-700 mb-2">Exact Match:</h5>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>✓ True/False match result</li>
                                    <li>✓ Character-by-character comparison</li>
                                    <li>✓ Case-insensitive options</li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="font-medium text-gray-700 mb-2">Fuzzy Match:</h5>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>✓ Confidence score (0-100%)</li>
                                    <li>✓ Handles nicknames and variations</li>
                                    <li>✓ Cultural name differences</li>
                                    <li>✓ Phonetic matching support</li>
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
                        How <span className="text-[#b7603d]">Name Match</span> Works
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
                                <h3 className="text-lg font-semibold mb-2">Name Input</h3>
                                <p className="text-gray-600 text-sm">Provide two names to compare and match type preference</p>
                            </div>
                            <div className="text-center relative">
                                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                                    2
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Text Preprocessing</h3>
                                <p className="text-gray-600 text-sm">Clean and normalize names for accurate comparison</p>
                            </div>
                            <div className="text-center relative">
                                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                                    3
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Algorithm Processing</h3>
                                <p className="text-gray-600 text-sm">Apply matching algorithms based on selected method</p>
                            </div>
                            <div className="text-center relative">
                                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                                    4
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Confidence Scoring</h3>
                                <p className="text-gray-600 text-sm">Calculate match confidence and similarity percentage</p>
                            </div>
                            <div className="text-center relative">
                                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                                    5
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Match Results</h3>
                                <p className="text-gray-600 text-sm">Receive detailed match results with confidence scores</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 bg-[#f7f1ef]








 p-6 rounded-lg">
                        <div className="flex flex-wrap justify-center gap-6 text-sm">
                            <div className="flex items-center space-x-2">
                                <span className="w-3 h-3 bg-[#d38769] rounded-full"></span>
                                <span>AI-Powered Algorithms</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                                <span>Real-time Processing</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                                <span>Cultural Awareness</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                                <span>Phonetic Matching</span>
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
                        Why Use Our <span className="text-[#b7603d]">Name Match API</span>?
                    </h2>
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-[#f7f1ef]








   rounded-full flex items-center justify-center mr-4">
                                    <span className="text-[#b7603d]   text-xl">⚡</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Lightning Fast</h3>
                            </div>
                            <p className="text-gray-600 text-sm">
                                Get name match results in 1-3 seconds with optimized algorithms and efficient processing.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-[#f7f1ef]








 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-[#b7603d]   text-xl">🧠</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">AI-Powered Intelligence</h3>
                            </div>
                            <p className="text-gray-600 text-sm">
                                Advanced machine learning algorithms handle complex name variations and cultural differences.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-[#f7f1ef]








  rounded-full flex items-center justify-center mr-4">
                                    <span className="text-[#b7603d] text-xl">📊</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Confidence Scoring</h3>
                            </div>
                            <p className="text-gray-600 text-sm">
                                Get detailed confidence scores to make informed decisions about name matches and verification.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-orange-600 text-xl">🌍</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Global Name Support</h3>
                            </div>
                            <p className="text-gray-600 text-sm">
                                Handle names from different cultures, languages, and naming conventions with high accuracy.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-red-600 text-xl">🛡️</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Fraud Prevention</h3>
                            </div>
                            <p className="text-gray-600 text-sm">
                                Detect potential identity fraud by identifying inconsistent name patterns across documents.
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
                                Simple REST API with comprehensive documentation and multiple SDK options.
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
                                Integrate name matching seamlessly into your applications with our developer-friendly API and
                                comprehensive documentation.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-2">
                                    <span className="text-[#b7603d]">✓</span>
                                    <span>RESTful API with JSON responses</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-[#b7603d]">✓</span>
                                    <span>Multiple matching algorithms</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-[#b7603d]">✓</span>
                                    <span>Configurable confidence thresholds</span>
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
                                <div className="text-blue-400">POST</div> <span className="text-white">/api/v1/name-match</span>
                                <div className="text-gray-400 mt-2">Headers:</div>
                                <div className="ml-2 text-yellow-400">Authorization: Bearer YOUR_API_KEY</div>
                                <div className="ml-2 text-yellow-400">Content-Type: application/json</div>
                                <div className="text-yellow-400 mt-3">{"{"}</div>
                                <div className="ml-4 text-white">"name1": "John Doe",</div>
                                <div className="ml-4 text-white">"name2": "Jon D",</div>
                                <div className="ml-4 text-white">"match_type": "fuzzy"</div>
                                <div className="text-yellow-400">{"}"}</div>
                                <div className="mt-4 text-gray-400">// Sample Response</div>
                                <div className="text-yellow-400">{"{"}</div>
                                <div className="ml-4 text-white">"match": true,</div>
                                <div className="ml-4 text-white">"confidence_score": 85.5,</div>
                                <div className="ml-4 text-white">"match_type": "fuzzy",</div>
                                <div className="ml-4 text-white">"similarity": "high"</div>
                                <div className="text-yellow-400">{"}"}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default NameMatchPageAPI