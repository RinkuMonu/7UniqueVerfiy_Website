import { Link } from "react-router-dom";
import KnowMore from "../../components/KnowMore";

const MobileToFil: React.FC = () => {
  return (
    <main className="w-full mx-auto">
      {/* Hero Section - What is Mobile to Prefill? */}
      <section
        className="w-full bg-cover bg-center min-h-screen flex items-center  px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-24"
        style={{ backgroundImage: "url('/img/bg (2).png')" }}
      >
        <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-2/3 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Instant Mobile‑to‑Prefill with PAN‑India Coverage
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
              Get personal details, address, contact info, and PAN status from a
              registered mobile number to auto‑fill forms and speed up
              onboarding.
            </h2>
            <p className="text-lg mb-4 text-white">
              Our Mobile to Prefill API standardizes profile data from verified
              sources and partner networks (with consent). Search using a mobile
              number and optional consent OTP to retrieve prefill‑ready details.
            </p>
            <p className="mb-4 text-white">
              Use it for customer onboarding, checkout address autofill,
              DBT/eKYC, CRM updates, and merchant or agent activations that need
              quick, accurate user data.
            </p>
            <p className="mb-6 text-white">
              Trusted by banks, NBFCs, fintechs, e‑commerce, and government
              partners to reduce drop‑offs, prevent fraud, and accelerate
              journeys.
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
              alt="Mobile to Prefill"
              className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
        <div className="w-full mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Where Can You Use{" "}
            <span className="text-[#b7603d]">Mobile to Prefill</span>?
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Banking & Finance
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Prefill KYC and application forms using verified data linked to
                the mobile number.
              </p>
              <div className="text-xs text-[#b7603d]   font-medium">
                "Faster onboarding!"
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                eKYC & Compliance
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Reduce manual entry and errors with consent‑led prefill for
                regulated journeys.
              </p>
              <div className="text-xs text-[#b7603d]   font-medium">
                "Regulatory friendly!"
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Fraud Reduction
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Cross‑check contact identity and PAN presence to flag risky or
                incomplete profiles.
              </p>
              <div className="text-xs text-[#b7603d] font-medium">
                "Clean data!"
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Checkout & Address Autofill
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Auto‑populate address and contact fields to reduce cart
                drop‑offs.
              </p>
              <div className="text-xs text-orange-600 font-medium">
                "Higher conversions!"
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">👔</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                CRM & Support
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Identify callers with prefilled profiles for faster resolution
                and upsell.
              </p>
              <div className="text-xs text-red-600 font-medium">
                "Lower AHT!"
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Agent & Merchant Onboarding
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Prefill core details and PAN status to accelerate activations.
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
            <span className="text-[#b7603d]">Mobile to Prefill Mode</span>
          </h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#f7f1ef] rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#b7603d]   font-bold">🧠</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Mobile Number + Consent OTP
                  </h3>
                  <span className="text-sm text-[#b7603d]   font-medium">
                    Real‑time Prefill
                  </span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Use the registered mobile number with a consent OTP to fetch
                prefill‑ready profile data—name, address, contacts, and PAN
                status (where available).
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Response Time:</span>
                  <span className="font-medium">2–3 seconds</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Cost:</span>
                  <span className="font-medium">₹10–30 per check</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Best For:</span>
                  <span className="font-medium">
                    Fast, accurate form prefill
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
                  <li>✓ Full name and date of birth</li>
                  <li>✓ Address with district/state/pincode</li>
                  <li>✓ Contact details (alt phone/email when available)</li>
                  <li>✓ PAN presence/status (valid/masked)</li>
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
            How <span className="text-[#b7603d]">Mobile to Prefill</span> Works
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
                <h3 className="text-lg font-semibold mb-2">Mobile Input</h3>
                <p className="text-gray-600 text-sm">
                  Provide the registered mobile number and (optionally) request
                  consent OTP
                </p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Consent Validation
                </h3>
                <p className="text-gray-600 text-sm">
                  Validate OTP and sanitize the mobile input for reliable
                  lookups
                </p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Source Fetch</h3>
                <p className="text-gray-600 text-sm">
                  Retrieve profile from verified sources and normalize the data
                </p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Mapping & Scoring
                </h3>
                <p className="text-gray-600 text-sm">
                  Map fields to your schema and compute confidence when
                  applicable
                </p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  5
                </div>
                <h3 className="text-lg font-semibold mb-2">Prefill Response</h3>
                <p className="text-gray-600 text-sm">
                  Receive structured payload: name, address, contacts, PAN
                  status
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
                <span>Consent‑led data access</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                <span>Real-time processing</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                <span>PAN‑India coverage</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                <span>Prefill‑ready JSON</span>
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
            Why Use Our{" "}
            <span className="text-[#b7603d]">Mobile to Prefill API</span>?
          </h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div
                  className="w-12 h-12 bg-[#f7f1ef]







   rounded-full flex items-center justify-center mr-4"
                >
                  <span className="text-[#b7603d]   text-xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Lightning Fast
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                Get results in 1–3 seconds with optimized fetching and parsing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div
                  className="w-12 h-12 bg-[#f7f1ef]






 rounded-full flex items-center justify-center mr-4"
                >
                  <span className="text-[#b7603d]   text-xl">🌍</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  PAN‑India Coverage
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                Works across regions with standardized, consistent output.
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
                Name, address, contact, and PAN status—ready for prefill.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-orange-600 text-xl">✅</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Consent & Compliance
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                Consent‑first flows and auditable logs for regulated use‑cases.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-red-600 text-xl">🛡️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Data Quality Signals
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                Flag incomplete or mismatched profiles, and validate PAN
                presence.
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
                Simple REST API with clear errors and SDK options.
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
                Integrate Mobile to Prefill seamlessly into your applications
                with our developer‑friendly API and comprehensive documentation.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>RESTful API with JSON responses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>Search by mobile number with consent OTP</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>Optional address enrichment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>Configurable field mapping</span>
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
                <span className="text-white">/api/v1/mobile-to-prefill</span>
                <div className="text-gray-400 mt-2">Headers:</div>
                <div className="ml-2 text-yellow-400">
                  Authorization: Bearer YOUR_API_KEY
                </div>
                <div className="ml-2 text-yellow-400">
                  Content-Type: application/json
                </div>
                <div className="text-yellow-400 mt-3">{"{"}</div>
                <div className="ml-4 text-white">"mobile": "98XXXXXX12",</div>
                <div className="ml-4 text-white">"consent_otp": "123456"</div>
                <div className="text-yellow-400">{"}"}</div>
                <div className="mt-4 text-gray-400">// Sample Response</div>
                <div className="text-yellow-400">{"{"}</div>
                <div className="ml-4 text-white">"name": "Rahul Sharma",</div>
                <div className="ml-4 text-white">"dob": "1995-08-10",</div>
                <div className="ml-4 text-white">
                  "address": {"{"}"line1": "12, Shastri Nagar", "district":
                  "Jaipur", "state": "Rajasthan", "pincode": "302016"{"}"},
                </div>
                <div className="ml-4 text-white">
                  "contact": {"{"}"email": "rahul@example.com"{"}"},
                </div>
                <div className="ml-4 text-white">"pan_status": "valid"</div>
                <div className="text-yellow-400">{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MobileToFil;
