import { Link } from "react-router-dom";
import KnowMore from "../../components/KnowMore";
import img from "../../../public/ui/e-sign/E-sign_Artboard 1.png"
import TrustedSeo from "../../pages/TrustedSeo";

const TheESignVerification: React.FC = () => {
  const seoData = {
  badge: "Trust & Security",
  title: "Why we are a trusted partner for e-sign verification API solutions",
  subtitle: "Secure, reliable, and lightning-fast verification solutions built for modern businesses",
  highlights: [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>,
      text: '<a href="https://www.7uniqueverfiy.com" class="font-bold underline">7uniqueverify</a> offers the most trustworthy e-signature verification API so that businesses can confirm a secure and authentic digital signature in real time. Our e-signature verification solution ensures every e-signature is authentic and legally binding for a seamless digital verification process.'
    },
    {
      text: "With our e-sign verify online service, businesses can quickly and easily verify e-signatures remotely to confirm compliance with the e-signature legislation while minimizing the risk of fraud in electronic transactions."
    },
    {
      text: "Our Verify eSign solution provides a quick and secure way to validate e-signatures, thereby assuring the integrity of digital agreements. The service allows businesses to verify the authenticity of signed documents with minimal effort."
    },
    {
      text: 'If you are looking for easy and secure e-signature validation online, you will have instant access online to validate an electronic signature in real time. We aim to also improve your document management and verification process when validating an e-signature online.'
    }
  ],
  button: {
    text: "Get Started Today",
    link: "/contact-us"
  }
};
  return (
    <main className="w-full mx-auto">
      {/* Hero Section - What is eSign Verification? */}
      <section
        className="w-full bg-cover bg-center min-h-screen flex items-center  px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-24"
        style={{ backgroundImage: "url('/img/bg (2).png')" }}
      >
        <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-2/3 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Instant eSign Verification with Enterprise‑Grade Assurance
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
              Validate electronic signatures by confirming the signer’s identity and verifying the integrity of digitally signed documents—legally valid and tamper‑proof.
            </h2>
            <p className="text-lg mb-4 text-white">
              Our eSign Verification API checks embedded or detached digital signatures, validates certificate chains, OCSP/CRL status, timestamps, and document hashes to detect tampering. Works with PDF (PAdES), PKCS#7/CMS (P7S), and Aadhaar eSign/DSC certificates.
            </p>
            <p className="mb-4 text-white">
              Use it for contract execution, loan/insurance onboarding, HR/offer letters, e‑mandates, e‑invoices, and compliance workflows that demand legally enforceable signatures.
            </p>
            <p className="mb-6 text-white">
              Trusted by banks, insurers, fintechs, enterprises, and platforms to prevent fraud and ensure authenticity across digital journeys.
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
              src="/ui/e-sign/E-sign_Artboard 1.png"
              alt="eSign Verification"
              className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
        <div className="w-full mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Where Can You Use <span className="text-[#b7603d]">eSign Verification</span>?
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Banking & Finance
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Validate e‑signed loan documents, e‑mandates, and account opening forms.
              </p>
              <div className="text-xs text-[#b7603d] font-medium">
                "Safer underwriting!"
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📃</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Legal & Contracts
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Verify vendor agreements, NDAs, MSAs, and PoAs with certificate & timestamp checks.
              </p>
              <div className="text-xs text-[#b7603d] font-medium">
                "Legally enforceable!"
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Fraud Prevention
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Detect tampering by matching document hashes and revocation status.
              </p>
              <div className="text-xs text-[#b7603d] font-medium">
                "Tamper detection!"
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                HR & Onboarding
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Verify e‑signed offer letters, policies, and annexures at scale.
              </p>
              <div className="text-xs text-orange-600 font-medium">
                "Faster joins!"
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🧾</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Insurance & e‑Forms
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Validate proposal forms, claims, and endorsements with signer identity proof.
              </p>
              <div className="text-xs text-red-600 font-medium">
                "Authentic submissions!"
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Compliance & Audits
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Generate auditable evidence—certificate chain, OCSP/CRL, timestamps, and LTV.
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
            <span className="text-[#b7603d]">eSign Verification Mode</span>
          </h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#f7f1ef] rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#b7603d] font-bold">🧠</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    PDF/PAdES • Aadhaar eSign/DSC • P7S (Detached)
                  </h3>
                  <span className="text-sm text-[#b7603d] font-medium">
                    Signature Validation
                  </span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Submit a signed PDF (embedded), or a document hash with a detached PKCS#7/CMS signature. We validate certificate chains against trusted CAs, check OCSP/CRL revocation, verify timestamps, and compare hashes to detect tampering.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Response Time:</span>
                  <span className="font-medium">2–3 seconds</span>
                </div>
                                 <div className="flex justify-between">
                  <span className="text-gray-500">Best For:</span>
                  <span className="font-medium">Legally valid, tamper‑evident signatures</span>
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
                  <li>✓ Signer & certificate details (subject/issuer, serial, validity)</li>
                  <li>✓ Signature algorithm & trusted timestamp; OCSP/CRL status</li>
                  <li>✓ Document hash integrity check & tamper result (pass/fail)</li>
                  <li>✓ Signature type (Aadhaar/DSC/PAdES) and LTV readiness</li>
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
            How <span className="text-[#b7603d]">eSign Verification</span> Works
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
                <h3 className="text-lg font-semibold mb-2">Input</h3>
                <p className="text-gray-600 text-sm">
                  Provide signed PDF or document hash + detached signature
                </p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Parsing
                </h3>
                <p className="text-gray-600 text-sm">
                  Extract certificates, signature objects, and timestamps
                </p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Trust Checks
                </h3>
                <p className="text-gray-600 text-sm">
                  Build chain to trusted CA; verify OCSP/CRL and timestamp
                </p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Integrity
                </h3>
                <p className="text-gray-600 text-sm">
                  Re‑hash document and compare with signed digest to detect tampering
                </p>
              </div>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                  5
                </div>
                <h3 className="text-lg font-semibold mb-2">Results</h3>
                <p className="text-gray-600 text-sm">
                  Return validity, signer identity, hash match, and evidence bundle
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
                <span>Standards‑compliant (PAdES/CAdES)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                <span>Real‑time verification</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                <span>Trusted CAs & OCSP/CRL</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                <span>Tamper detection</span>
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
            Why Use Our <span className="text-[#b7603d]">eSign Verification API</span>?
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
                Verify signatures in 1–3 seconds with optimized cryptographic checks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div
                  className="w-12 h-12 bg-[#f7f1ef]






 rounded-full flex items-center justify-center mr-4"
                >
                  <span className="text-[#b7603d] text-xl">⚖️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Legally Valid
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                Evidence bundle with certificate chain, revocation, and timestamps for enforceability.
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
                Signer identity, signature details, and hash results—ready for workflows.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-orange-600 text-xl">✅</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Audit‑Ready
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                Export logs for compliance reviews and dispute resolution.
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
                Flag expired/compromised certs, revoked identities, or digest mismatches.
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
                Integrate eSign Verification seamlessly into your applications with our developer‑friendly API and comprehensive documentation.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>RESTful API with JSON responses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>Accepts embedded (PDF) or detached (P7S) signatures</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>OCSP/CRL and timestamp validation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>Configurable trust stores</span>
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
                <span className="text-white">/api/v1/esign-verify</span>
                <div className="text-gray-400 mt-2">Headers:</div>
                <div className="ml-2 text-yellow-400">
                  Authorization: Bearer YOUR_API_KEY
                </div>
                <div className="ml-2 text-yellow-400">
                  Content-Type: application/json
                </div>
                <div className="text-yellow-400 mt-3">{"{"}</div>
                <div className="ml-4 text-white">"document_url": "https://example.com/contract.pdf",</div>
                <div className="ml-4 text-white">"check_ocsp": true,</div>
                <div className="ml-4 text-white">"check_crl": true,</div>
                <div className="ml-4 text-white">"validate_timestamp": true</div>
                <div className="text-yellow-400">{"}"}</div>
                <div className="mt-4 text-gray-400">// Sample Response</div>
                <div className="text-yellow-400">{"{"}</div>
                <div className="ml-4 text-white">"valid": true,</div>
                <div className="ml-4 text-white">"tamper": false,</div>
                <div className="ml-4 text-white">"signer": {"{"}"name": "Rohit Verma", "certificate": {"{"}"issuer": "ABC Root CA", "serial": "4F:89:...", "valid_from": "2025-01-01", "valid_to": "2027-01-01"{"}"}{"}"},</div>
                <div className="ml-4 text-white">"signature": {"{"}"type": "PAdES", "algorithm": "RSA‑PSS/SHA‑256", "timestamp": "2025-08-01T10:15:00Z", "ocsp_status": "GOOD", "crl_checked": true{"}"},</div>
                <div className="ml-4 text-white">"document": {"{"}"sha256": "f1c3…9ab", "hash_matches": true{"}"},</div>
                <div className="ml-4 text-white">"ltv": true</div>
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

export default TheESignVerification;
