import { Link } from "react-router-dom";
import KnowMore from "../../components/KnowMore";
import TrustedSeo from "../../pages/TrustedSeo";

const RationCardVerification: React.FC = () => {
    const seoData = {
  badge: "Trust & Security",
  title: "Reasons We Are a Reliable Partner in Ration Card Verification Services",
  subtitle: "Secure, reliable, and lightning-fast verification solutions built for modern businesses",
  highlights: [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>,
      text: '<a href="https://www.7uniqueverfiy.com" class="font-bold underline">7uniqueverify</a> is your most trusted ration card verification API solution, enabling businesses to verify the validity of ration cards in a secure way. In the process, customers can feel confident only valid ration card data enters their operation, increasing efficiency and lessening the potential risk of becoming a victim of fraud.'
    },
    {
      text: "Our digital ration card verification solution makes it easy for businesses to verify conditions of ration cards presented in digital formats, with an effortless operation to integrate or even validate in real time. In turn, customers can easily maintain compliance and security of their valuable information."
    },
    {
      text: "Our instant ration card verification is designed for businesses to gain real-time results of the verification process in seconds; verifying ration cards is now as simple as clicking a button. The rapid, efficient process is seamless for your customers and minimizes efforts for your staff."
    },
    {
      text: 'Our ration card verification online service enables businesses to verify ration cards anywhere on the go. Our verification system is simple and verified with one touch. Verification data is critical to your operation, and gaining access when you need it is vital. All information gathered will provide a quick return on investment regarding time.'
    }
  ],
  button: {
    text: "Get Started Today",
    link: "/contact-us"
  }
};
  return (
    <main className="w-full mx-auto">
      {/* Hero Section - What is Ration Card Verification? */}
      <section
        className="w-full bg-cover bg-center min-h-screen flex items-center  px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-24"
        style={{ backgroundImage: "url('/img/bg (2).png')" }}
      >
        <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-2/3 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Instant Ration Card Verification with Multi-State Coverage
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
              Verify ration card details, reduce fraud, and streamline KYC/DBT onboarding with our Ration Card Verification APIs that query official PDS portals.
            </h2>
            <p className="text-lg mb-4 text-white">
              Our Ration Card Verification API fetches and standardizes beneficiary details from official state PDS portals. Search by Ration Card Number, Family/RC ID, or by Head-of-Family/Member name with state and district filters.
            </p>
            <p className="mb-4 text-white">
              Use it for citizen onboarding, subsidy/DBT eligibility checks, FPS dealer onboarding, and service delivery to validate active cards and household members.
            </p>
            <p className="mb-6 text-white">
              Trusted by banks, NBFCs, state departments, CSCs, and enterprises to prevent fraud, ensure compliance, and accelerate service delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={"/contact-us"}
                className="inline-block bg-[#b7603d] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#d19983] transition-colors text-center"
              >
                Get Started
              </Link>
              <Link
                to="https://7uniqueverify-njzw.readme.io/reference/"
                className="inline-block bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded hover:bg-white hover:text-[#b7603d] transition-colors text-center"
              >
                View API Docs
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://img.freepik.com/free-vector/legal-research-court-case-check-concept-illustration_114360-1234.jpg?w=740"
              alt="Ration Card Verification"
              className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
        <div className="w-full mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Where Can You Use <span className="text-[#b7603d]">Ration Card Verification</span>?
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Subsidy & DBT Checks
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Validate beneficiaries before disbursal; verify card status, scheme, and household members.
              </p>
              <div className="text-xs text-[#b7603d] font-medium">
                "Benefit eligibility!"
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Govt & eKYC Onboarding
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Faster onboarding for beneficiaries by validating RC details against state PDS records.
              </p>
              <div className="text-xs text-[#b7603d] font-medium">
                "Regulatory compliance!"
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Fraud Prevention
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Detect duplicate households, inactive/invalid cards, and mismatched names/addresses.
              </p>
              <div className="text-xs text-[#b7603d] font-medium">
                "Fraud detection!"
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                FPS Dealer Onboarding
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Verify shop and beneficiary details linked to a Fair Price Shop before activation.
              </p>
              <div className="text-xs text-orange-600 font-medium">
                "Safer onboarding!"
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">👔</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Citizen Services & Kiosks
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Enable CSC/PSK/kiosk operators to verify RCs instantly during service delivery.
              </p>
              <div className="text-xs text-red-600 font-medium">
                "Pre-service verification!"
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Service Delivery & Audits
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Audit delivery by tracking status (active/inactive), scheme type, and FPS mapping.
              </p>
              <div className="text-xs text-teal-600 font-medium">
                "Operational efficiency!"
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
            <span className="text-[#b7603d]">Ration Card Search Mode</span>
          </h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#f7f1ef] rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#b7603d] font-bold">🧠</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    RC No. / Family ID / Name Search
                  </h3>
                  <span className="text-sm text-[#b7603d] font-medium">
                    Multi-State Search
                  </span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Search by Ration Card No. or Family/RC ID for exact results, or by Head-of-Family / Member name with state/district filters. Intelligent normalization improves hit-rates on name-based searches (state formats supported).
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Response Time:</span>
                  <span className="font-medium">2–3 seconds</span>
                </div>
                                 <div className="flex justify-between">
                  <span className="text-gray-500">Best For:</span>
                  <span className="font-medium">
                    Accurate beneficiary verification
                  </span>
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
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ Ration Card No. & Family/RC ID</li>
                  <li>✓ Scheme (PHH/AAY/NFSA) & card type</li>
                  <li>✓ Head-of-Family & members (relations)</li>
                  <li>✓ FPS code/name & status (active/inactive)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <KnowMore />

      {/* How It Works Section */}
      <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
        <div className="w-full mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            How <span className="text-[#b7603d]">Ration Card Verification</span> Works
          </h2>
          <div className="relative">
            <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-200"></div>
            <div
              className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-[#b7603d]
 to-transparent"
            ></div>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-5">
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2">Query Input</h3>
                <p className="text-gray-600 text-sm">
                  Provide RC No./Family ID or HoF/Member name with state/district filters
                </p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Normalization
                </h3>
                <p className="text-gray-600 text-sm">
                  Clean and standardize inputs (state-specific formats) for reliable lookups
                </p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Source Fetch
                </h3>
                <p className="text-gray-600 text-sm">
                  Retrieve records from official state PDS sources and parse details
                </p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Matching & Scoring
                </h3>
                <p className="text-gray-600 text-sm">
                  Disambiguate name results and compute confidence (when applicable)
                </p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  5
                </div>
                <h3 className="text-lg font-semibold mb-2">Results</h3>
                <p className="text-gray-600 text-sm">
                  Get structured output: RC no., scheme, HoF, members, FPS, status
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
                <span>Official PDS portals</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                <span>Real-time processing</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                <span>Multi-state coverage</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                <span>Name-based search support</span>
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
            Why Use Our <span className="text-[#b7603d]">Ration Card Verification API</span>?
          </h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div
                  className="w-12 h-12 bg-[#f7f1ef]





   rounded-full flex items-center justify-center mr-4"
                >
                  <span className="text-[#b7603d] text-xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Lightning Fast
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                Get results in 1–3 seconds with optimized fetching and parsing from official PDS portals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div
                  className="w-12 h-12 bg-[#f7f1ef]





 rounded-full flex items-center justify-center mr-4"
                >
                  <span className="text-[#b7603d] text-xl">🌍</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Multi-State Coverage
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                State PDS portals supported with standardized output across jurisdictions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div
                  className="w-12 h-12 bg-[#f7f1ef]





  rounded-full flex items-center justify-center mr-4"
                >
                  <span className="text-[#b7603d] text-xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Structured, Actionable Data
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                RC no., scheme, HoF, members, FPS code/name, and status—ready for workflows.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-orange-600 text-xl">✅</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  DBT/eKYC-Ready
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                Audit-friendly logs and consistent schemas for DBT, eKYC, and welfare delivery checks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-red-600 text-xl">🛡️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Risk Signals
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                Highlight duplicate households, inactive cards, and mismatched details to trigger enhanced due diligence.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-teal-600 text-xl">⚙️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Easy Integration
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                Simple REST API with SDK options and clear error handling.
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
                Integrate Ration Card Verification seamlessly into your applications with
                our developer-friendly API and comprehensive documentation.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>RESTful API with JSON responses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>Search by RC No./Family ID or by HoF/Member name</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>Filters for state, district, and FPS</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>Optional confidence for name-based match</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>Sandbox environment for testing</span>
                </div>
              </div>
              <a
                href="https://7uniqueverify-njzw.readme.io/reference/"
                className="inline-block bg-[#b7603d] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#d19983] transition-colors"
              >
                Read Full API Docs
              </a>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm overflow-x-auto">
                <div className="mb-2 text-gray-400">// Sample API Request</div>
                <div className="text-blue-400">POST</div>{" "}
                <span className="text-white">/api/v1/ration-card-verify</span>
                <div className="text-gray-400 mt-2">Headers:</div>
                <div className="ml-2 text-yellow-400">
                  Authorization: Bearer YOUR_API_KEY
                </div>
                <div className="ml-2 text-yellow-400">
                  Content-Type: application/json
                </div>
                <div className="text-yellow-400 mt-3">{"{"}</div>
                <div className="ml-4 text-white">"search_mode": "rc_number",</div>
                <div className="ml-4 text-white">"ration_card_no": "RAJ/1234/5678",</div>
                <div className="ml-4 text-white">"state": "Rajasthan",</div>
                <div className="ml-4 text-white">"district": "Jaipur"</div>
                <div className="text-yellow-400">{"}"}</div>
                <div className="mt-4 text-gray-400">// Sample Response</div>
                <div className="text-yellow-400">{"{"}</div>
                <div className="ml-4 text-white">"match": true,</div>
                <div className="ml-4 text-white">"status": "Active",</div>
                <div className="ml-4 text-white">"scheme": "PHH",</div>
                <div className="ml-4 text-white">"hof_name": "Ramesh Kumar",</div>
                <div className="ml-4 text-white">"members": [{"{"}"name": "Sita Devi", "relation": "Wife"{"}"}],</div>
                <div className="ml-4 text-white">"fps_code": "RJ1234",</div>
                <div className="ml-4 text-white">"ration_card_no": "RAJ/1234/5678"</div>
                <div className="text-yellow-400">{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
        <TrustedSeo data={seoData}/>
    </main>
  );
};

export default RationCardVerification;
