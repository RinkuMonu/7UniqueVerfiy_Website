import { Link } from "react-router-dom";
import KnowMore from "../../components/KnowMore";

const DoctorVerification: React.FC = () => {
  return (
    <main className="w-full mx-auto">
      {/* Hero Section - What is Doctor Verification? */}
      <section
        className="w-full bg-cover bg-center min-h-screen flex items-center  px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-24"
        style={{ backgroundImage: "url('/img/bg (2).png')" }}
      >
        <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-2/3 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Instant Doctor Verification with PAN‑India Coverage
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
              Verify a registered doctor's credentials from official medical
              councils to ensure authenticity and reduce fraud.
            </h2>
            <p className="text-lg mb-4 text-white">
              Our Doctor Verification API fetches and standardizes council
              registration details: doctor name, registration number, council,
              registration year/validity, qualifications, specialization, and
              status (Active/Suspended/Cancelled). Search by Registration No.,
              Council, NMC ID, or by Name with council/state filters.
            </p>
            <p className="mb-4 text-white">
              Use it for healthcare hiring & credentialing,
              telemedicine/e‑pharmacy compliance, hospital privileges, insurance
              empanelment, and marketplace listing verification.
            </p>
            <p className="mb-6 text-white">
              Trusted by hospitals, clinics, insurers, healthtechs, and
              marketplaces to maintain high provider quality and compliance.
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
              src="../img/doctor-verification/img1_Artboard 1.png"
              alt="Doctor Verification"
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
            <span className="text-[#b7603d]">Doctor Verification</span>?
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Hospital Privileges & Hiring
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Credential doctors before granting privileges or onboarding into
                hospital systems.
              </p>
              <div className="text-xs text-[#b7603d] font-medium">
                "Safer credentialing!"
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💊</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Telemedicine & e‑Pharmacy Compliance
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Verify registration details to display qualified prescribers and
                meet compliance.
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
                Detect impersonation or invalid registrations; monitor status
                changes.
              </p>
              <div className="text-xs text-[#b7603d] font-medium">
                "Verified providers!"
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Insurance Empanelment
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Validate qualifications and council records during payer network
                onboarding.
              </p>
              <div className="text-xs text-orange-600 font-medium">
                "Authentic networks!"
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🩺</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Marketplaces & Listings
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Show verified badges on doctor profiles to boost patient trust.
              </p>
              <div className="text-xs text-red-600 font-medium">
                "Trust & safety!"
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Compliance & Audits
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Maintain audit trails of verification for regulatory reviews.
              </p>
              <div className="text-xs text-teal-600 font-medium">
                "Clean audits!"
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
            <span className="text-[#b7603d]">Doctor Search Mode</span>
          </h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#f7f1ef] rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#b7603d] font-bold">🧠</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Registration No. • Council • Name/NMC ID
                  </h3>
                  <span className="text-sm text-[#b7603d] font-medium">
                    PAN‑India Search
                  </span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Search by Registration Number with Council for exact results, or
                by Name/NMC ID with state/council filters. Intelligent
                normalization improves hit‑rates on name‑based searches and
                resolves duplicates.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Response Time:</span>
                  <span className="font-medium">2–3 seconds</span>
                </div>
                                 <div className="flex justify-between">
                  <span className="text-gray-500">Best For:</span>
                  <span className="font-medium">
                    Accurate registration verification
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
                  <li>✓ Doctor name, Registration No., Council</li>
                  <li>
                    ✓ Registration year/validity & status
                    (Active/Suspended/Cancelled)
                  </li>
                  <li>✓ Qualifications & specialization</li>
                  <li>✓ NMC ID & optional affiliations (when available)</li>
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
            How <span className="text-[#b7603d]">Doctor Verification</span>{" "}
            Works
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
                  Provide Registration No./Council or Name/NMC ID with filters
                </p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">Normalization</h3>
                <p className="text-gray-600 text-sm">
                  Standardize inputs and council codes for reliable lookups
                </p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Source Fetch</h3>
                <p className="text-gray-600 text-sm">
                  Retrieve records from official medical councils and parse
                  details
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
                  Disambiguate name matches and compute confidence for similar
                  profiles
                </p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  5
                </div>
                <h3 className="text-lg font-semibold mb-2">Results</h3>
                <p className="text-gray-600 text-sm">
                  Get structured output: name, reg no., council, status, year,
                  qualifications
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
                <span>Official medical councils</span>
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
                <span>Credentialing‑ready</span>
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
            <span className="text-[#b7603d]">Doctor Verification API</span>?
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
                Get results in 1–3 seconds with optimized fetching and parsing
                from official sources.
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
                  PAN‑India Coverage
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                National & state medical councils supported with standardized
                output.
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
                Registration, qualifications, specialization, and status—ready
                for workflows.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-orange-600 text-xl">✅</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Compliance‑Ready
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                Audit‑friendly logs for clinical governance, payer onboarding,
                and regulations.
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
                Highlight suspended/cancelled registrations and mismatches.
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
                Integrate Doctor Verification seamlessly into your applications
                with our developer‑friendly API and comprehensive documentation.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>RESTful API with JSON responses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>Search by Reg No., Council, Name/NMC ID</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>Filters for state and council</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>Optional confidence for name‑based match</span>
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
                <span className="text-white">/api/v1/doctor-verify</span>
                <div className="text-gray-400 mt-2">Headers:</div>
                <div className="ml-2 text-yellow-400">
                  Authorization: Bearer YOUR_API_KEY
                </div>
                <div className="ml-2 text-yellow-400">
                  Content-Type: application/json
                </div>
                <div className="text-yellow-400 mt-3">{"{"}</div>
                <div className="ml-4 text-white">
                  "search_mode": "registration_no",
                </div>
                <div className="ml-4 text-white">
                  "registration_no": "MMC/2020/123456",
                </div>
                <div className="ml-4 text-white">
                  "council": "Maharashtra Medical Council"
                </div>
                <div className="text-yellow-400">{"}"}</div>
                <div className="mt-4 text-gray-400">// Sample Response</div>
                <div className="text-yellow-400">{"{"}</div>
                <div className="ml-4 text-white">"match": true,</div>
                <div className="ml-4 text-white">
                  "name": "Dr. Rahul Sharma",
                </div>
                <div className="ml-4 text-white">
                  "registration_no": "MMC/2020/123456",
                </div>
                <div className="ml-4 text-white">
                  "council": "Maharashtra Medical Council",
                </div>
                <div className="ml-4 text-white">"status": "Active",</div>
                <div className="ml-4 text-white">
                  "registration_year": 2020,
                </div>
                <div className="ml-4 text-white">
                  "qualifications": ["MBBS", "MD (Medicine)"],
                </div>
                <div className="ml-4 text-white">
                  "specialization": ["Internal Medicine"],
                </div>
                <div className="ml-4 text-white">
                  "nmc_id": "NMC/IN/1234567"
                </div>
                <div className="text-yellow-400">{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DoctorVerification;
