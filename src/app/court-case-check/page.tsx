import { Link } from "react-router-dom";
import KnowMore from "../../components/KnowMore";

const CourtCaseCheck: React.FC = () => {
  return (
    <main className="w-full mx-auto">
      {/* Hero Section - What is Court Case Check? */}
      <section
        className="w-full bg-cover bg-center min-h-screen flex items-center  px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-24"
        style={{ backgroundImage: "url('/img/bg (2).png')" }}
      >
        <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-2/3 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Instant Court Case Check with PAN‑India Coverage
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
              Screen litigations, reduce risk, and streamline KYC/AML with our
              Court Case Check APIs that search official court sources.
            </h2>
            <p className="text-lg mb-4 text-white">
              Our Court Case Check API fetches and standardizes case details
              from official court portals (District, High Courts, and eCourts).
              Search by CNR number, Case number + year, FIR + Police Station
              (where available), or Party name with state/court filters.
            </p>
            <p className="mb-4 text-white">
              Use it for onboarding, underwriting, vendor/employment screening,
              and due diligence to identify active or historical litigations.
            </p>
            <p className="mb-6 text-white">
              Trusted by banks, NBFCs, fintechs, and enterprises to prevent
              fraud, ensure compliance, and accelerate decision‑making.
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
              alt="Court Case Check"
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
            <span className="text-[#b7603d]">Court Case Check</span>?
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Banking & Finance
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Litigation screening during account opening, lending, and
                periodic KYC.
              </p>
              <div className="text-xs text-[#b7603d]   font-medium">
                "Legal risk check!"
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                AML/KYC Compliance
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Ensure compliant onboarding by screening individuals/entities
                for active or past cases.
              </p>
              <div className="text-xs text-[#b7603d]   font-medium">
                "Regulatory compliance!"
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Risk & Fraud Investigation
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Identify criminal/civil cases, FIR matches, and patterns that
                indicate elevated risk.
              </p>
              <div className="text-xs text-[#b7603d] font-medium">
                "Fraud detection!"
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Merchant Onboarding
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Check directors/proprietors and business entities for litigation
                before activation.
              </p>
              <div className="text-xs text-orange-600 font-medium">
                "Safer onboarding!"
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">👔</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Employment & Vendor Screening
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Screen candidates and suppliers for pending/disposed cases to
                mitigate reputational risk.
              </p>
              <div className="text-xs text-red-600 font-medium">
                "Pre‑hire due diligence!"
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Collections & Recovery
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Track next hearing dates and case stages to prioritize
                collections workflows.
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
            <span className="text-[#b7603d]">Court Case Search Mode</span>
          </h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#f7f1ef] rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#b7603d]   font-bold">🧠</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    CNR / Case / FIR / Party Search
                  </h3>
                  <span className="text-sm text-[#b7603d]   font-medium">
                    PAN‑India Search
                  </span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Search by CNR for exact results, by Case number + year, by FIR
                (where available), or by Party name with state/court filters.
                Intelligent normalization improves hit‑rates on name‑based
                searches.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Response Time:</span>
                  <span className="font-medium">2–3 seconds</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Cost:</span>
                  <span className="font-medium">₹55–85 per check</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Best For:</span>
                  <span className="font-medium">
                    High‑accuracy court record retrieval
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
                  <li>✓ Case status (Pending/Disposed)</li>
                  <li>✓ Next hearing date & stage</li>
                  <li>✓ Court, bench, state & CNR</li>
                  <li>✓ Acts/sections & order links (when available)</li>
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
            How <span className="text-[#b7603d]">Court Case Check</span> Works
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
                  Provide CNR/Case No./FIR or Party name with state/court
                  filters
                </p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">Normalization</h3>
                <p className="text-gray-600 text-sm">
                  Clean and standardize inputs for reliable lookups
                </p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Source Fetch</h3>
                <p className="text-gray-600 text-sm">
                  Retrieve records from official court sources and parse details
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
                  Disambiguate party‑name results and compute confidence (when
                  applicable)
                </p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  5
                </div>
                <h3 className="text-lg font-semibold mb-2">Results</h3>
                <p className="text-gray-600 text-sm">
                  Get structured output: status, stage, next hearing, court,
                  parties, CNR
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
                <span>Official court sources</span>
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
                <span>Name‑based search support</span>
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
            <span className="text-[#b7603d]">Court Case Check API</span>?
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
                  <span className="text-[#b7603d]   text-xl">🌍</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  PAN‑India Coverage
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                District & High Courts supported with standardized output across
                jurisdictions.
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
                Status, stage, court, parties, advocates, next hearing, and
                more—ready for workflows.
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
                Audit‑friendly logs and consistent schemas for AML/KYC and risk
                assessments.
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
                Highlight adverse cases and criminal sections to trigger
                enhanced due diligence.
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
          <div className="flex flex-col lg:flex-row  gap-12">
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Simple <span className="text-[#b7603d]">API Integration</span>
              </h2>
              <p className="text-gray-600">
                Integrate Court Case Check seamlessly into your applications
                with our developer‑friendly API and comprehensive documentation.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>RESTful API with JSON responses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>Search by CNR, Case No., FIR, or Party name</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>Filters for state, court, and year</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>Configurable confidence for name‑based search</span>
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
                <span className="text-white">/api/v1/court-case-check</span>
                <div className="text-gray-400 mt-2">Headers:</div>
                <div className="ml-2 text-yellow-400">
                  Authorization: Bearer YOUR_API_KEY
                </div>
                <div className="ml-2 text-yellow-400">
                  Content-Type: application/json
                </div>
                <div className="text-yellow-400 mt-3">{"{"}</div>
                <div className="ml-4 text-white">"search_mode": "cnr",</div>
                <div className="ml-4 text-white">
                  "cnr": "1234567890123456",
                </div>
                <div className="ml-4 text-white">"state": "Rajasthan",</div>
                <div className="ml-4 text-white">
                  "court": "District Court Jaipur"
                </div>
                <div className="text-yellow-400">{"}"}</div>
                <div className="mt-4 text-gray-400">// Sample Response</div>
                <div className="text-yellow-400">{"{"}</div>
                <div className="ml-4 text-white">"statuscode": 200,</div>
                <div className="ml-4 text-white">"status": true,</div>
                <div className="ml-4 text-white">"message": "Success",</div>
                <div className="ml-4 text-white">"reference_id": 20223569,</div>
                <div className="ml-4 text-white">"data": {"{"}</div>
                <div className="ml-8 text-white">
                  "client_id": "ecourts_423g4fh4fhgf4h23g42fhg4f2hg",
                </div>
                <div className="ml-8 text-white">"search_params": {"{"}</div>
                <div className="ml-12 text-white">
                  "name": "Harpreet Singh",
                </div>
                <div className="ml-12 text-white">
                  "search_type": "individual"
                </div>
                <div className="ml-8 text-white">{"}"},</div>
                <div className="ml-8 text-white">"search_result": [</div>
                <div className="ml-12 text-white">{"{"}</div>
                <div className="ml-16 text-white">"state_name": "Punjab",</div>
                <div className="ml-16 text-white">"under_sections": "10",</div>
                <div className="ml-16 text-white">
                  "court_name": "Civil Judge Senior Division, SAS Nagar,
                  Mohali",
                </div>
                <div className="ml-16 text-white">
                  "under_acts": "Code of Civil Procedure",
                </div>
                <div className="ml-16 text-white">
                  "uniq_case_id": "260d6f1cffd441907099aff74d298d20",
                </div>
                <div className="ml-16 text-white">
                  "case_no": "200400003442015",
                </div>
                <div className="ml-16 text-white">
                  "address": "VPO NADALON TEHSIL GARHSHANKAR DISTT HOSHIARPUR",
                </div>
                <div className="ml-16 text-white">
                  "business_category": "Civil",
                </div>
                <div className="ml-16 text-white">"case_year": "2015",</div>
                <div className="ml-16 text-white">
                  "case_category": "civil",
                </div>
                <div className="ml-16 text-white">
                  "case_status": "CASE DISPOSED",
                </div>
                <div className="ml-16 text-white">"name": "GURDEEP BAGGA",</div>
                <div className="ml-16 text-white">
                  "oparty": "SATINDER KAUR, Inderjit",
                </div>
                <div className="ml-16 text-white">
                  "order_summary": "The case status is disposed"
                </div>
                <div className="ml-12 text-white">{"}"}</div>
                <div className="ml-8 text-white">]</div>
                <div className="ml-4 text-white">{"}"}</div>
                <div className="text-yellow-400">{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CourtCaseCheck;
