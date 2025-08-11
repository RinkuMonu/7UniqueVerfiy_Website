import type React from "react";
import SEO from "../app/Helmet/helment";
import { useContext } from "react";
import { ContextData } from "../config/context";
import { SEOData } from "../type";
import { Link } from "react-router-dom";

const AadhaarVerificationPageAPI: React.FC = () => {
  const { seo } = useContext(ContextData) as { seo: SEOData };
  return (
    <>
      <SEO seo={seo} />
      <main className="w-full mx-auto ">
        {/* Hero Section */}
        <section
          className="w-full bg-cover bg-center min-h-screen flex items-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-24"
          style={{ backgroundImage: "url('/img/bg (2).png')" }}
        >
          <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-2/3 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Secure Aadhaar Verification with Complete UIDAI Compliance
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
                Verify Aadhaar identities instantly with both OTP and non-OTP
                methods, ensuring authentic identity verification for your KYC
                processes.
              </h2>
              <p className="text-lg mb-4 text-white">
                Our comprehensive Aadhaar Verification API provides secure,
                UIDAI-compliant identity verification with multiple
                authentication methods to suit your business needs.
              </p>
              <p className="mb-4 text-white">
                From OTP-based verification to demographic validation, we offer
                flexible verification options while maintaining the highest
                standards of data privacy and security.
              </p>
              <p className="mb-6 text-white">
                Trusted by banks, fintech companies, and government agencies for
                secure identity verification with India's most reliable identity
                system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to={"/contact-us"}
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
                src="https://img.freepik.com/free-vector/identity-verification-concept-illustration_114360-4856.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
                alt="Aadhaar Verification"
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
              <span className="text-[#b7603d]">Aadhaar Verification</span>?
            </h2>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  Banking & Finance
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  KYC compliance for account opening, loan processing, and
                  financial services.
                </p>
                <div className="text-xs text-[#b7603d]   font-medium">
                  "UIDAI authorized verification!"
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  Telecom
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  SIM card activation and mobile number verification for telecom
                  operators.
                </p>
                <div className="text-xs text-[#b7603d]   font-medium">
                  "Instant SIM activation!"
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  Healthcare
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Patient registration and identity verification for healthcare
                  services.
                </p>
                <div className="text-xs text-[#b7603d] font-medium">
                  "Secure patient onboarding!"
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  Government Services
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Citizen verification for government schemes and digital
                  services.
                </p>
                <div className="text-xs text-orange-600 font-medium">
                  "Digital India compliance!"
                </div>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  Corporate HR
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Employee onboarding and identity verification for corporate
                  services.
                </p>
                <div className="text-xs text-red-600 font-medium">
                  "Streamline HR processes!"
                </div>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  Education
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Student verification and admission processes for educational
                  institutions.
                </p>
                <div className="text-xs text-teal-600 font-medium">
                  "Secure admissions!"
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
              <span className="text-[#b7603d]">Verification Method</span>
            </h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef] rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   font-bold">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Aadhaar Verification - Consented
                    </h3>
                    <span className="text-sm text-[#b7603d]   font-medium">
                      UIDAI Authorized
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Secure OTP-based verification with complete demographic
                  information and UIDAI compliance.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">3-5 seconds</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Cost:</span>
                    <span className="font-medium">₹3.5 per verification</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">
                      High-security applications
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef]  rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   font-bold">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Aadhaar Verification without OTP
                    </h3>
                    <span className="text-sm text-[#b7603d]   font-medium">
                      Demographic Verification
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Quick demographic verification without OTP for faster
                  processing and better user experience.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">2-5 seconds</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Cost:</span>
                    <span className="font-medium">₹4.5 per verification</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">
                      Quick verification needs
                    </span>
                  </div>
                </div>
              </div>
            
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef]  rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   font-bold">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Aadhaar QR Search
                    </h3>
                    <span className="text-sm text-[#b7603d]   font-medium">
                      Demographic Verification
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Quick demographic verification without OTP for faster
                  processing and better user experience.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">2-5 seconds</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Cost:</span>
                    <span className="font-medium">₹4 per verification</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">
                      Quick verification needs
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
                  <h5 className="font-medium text-gray-700 mb-2">
                    With OTP Verification:
                  </h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ Complete demographic data</li>
                    <li>✓ Address information</li>
                    <li>✓ Date of birth</li>
                    <li>✓ Gender information</li>
                    <li>✓ UIDAI authentication</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">
                    Without OTP Verification:
                  </h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ Name verification</li>
                    <li>✓ Aadhaar number validation</li>
                    <li>✓ Basic demographic match</li>
                    <li>✓ Faster processing</li>
                    <li>✓ Cost-effective solution</li>
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
              How <span className="text-[#b7603d]">Aadhaar Verification</span>{" "}
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
                  <h3 className="text-lg font-semibold mb-2">Aadhaar Input</h3>
                  <p className="text-gray-600 text-sm">
                    User enters 12-digit Aadhaar number for verification
                  </p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    2
                  </div>
                  <h3 className="text-lg font-semibold mb-2">OTP Generation</h3>
                  <p className="text-gray-600 text-sm">
                    System generates OTP and sends to registered mobile
                  </p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    3
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    UIDAI Verification
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Details verified against UIDAI database securely
                  </p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    4
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Data Validation
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Demographic information validated and processed
                  </p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    5
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Secure Results</h3>
                  <p className="text-gray-600 text-sm">
                    Verified information returned with privacy compliance
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
                  <span>UIDAI Authorized</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  <span>Privacy Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                  <span>Encrypted Data</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                  <span>No Data Storage</span>
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
              <span className="text-[#b7603d]">Aadhaar Verification API</span>?
            </h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div
                    className="w-12 h-12 bg-[#f7f1ef]








   rounded-full flex items-center justify-center mr-4"
                  >
                    <span className="text-[#b7603d]   text-xl">🏛️</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    UIDAI Authorized
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Official Authentication User Agency (AUA) with UIDAI approval
                  for legitimate verification.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div
                    className="w-12 h-12 bg-[#f7f1ef]








 rounded-full flex items-center justify-center mr-4"
                  >
                    <span className="text-[#b7603d]   text-xl">🔒</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Complete Privacy
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  No storage of Aadhaar data with end-to-end encryption ensuring
                  complete privacy protection.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div
                    className="w-12 h-12 bg-[#f7f1ef]








  rounded-full flex items-center justify-center mr-4"
                  >
                    <span className="text-[#b7603d] text-xl">⚡</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Multiple Options
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Choose between OTP and non-OTP verification based on your
                  security and speed requirements.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-600 text-xl">📋</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Regulatory Compliance
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Fully compliant with UIDAI guidelines and data protection
                  regulations for secure operations.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-red-600 text-xl">📊</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Comprehensive Data
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Access complete demographic information including name,
                  address, DOB, and gender details.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-teal-600 text-xl">🛡️</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Audit Trail
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Complete audit trail and logging for compliance monitoring and
                  regulatory requirements.
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
                  Easy <span className="text-[#b7603d]">API Integration</span>
                </h2>
                <p className="text-gray-600">
                  Integrate Aadhaar verification seamlessly with our
                  developer-friendly API and comprehensive documentation.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-[#b7603d]">✓</span>
                    <span>Simple REST API with JSON responses</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#b7603d]">✓</span>
                    <span>Multiple authentication methods</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#b7603d]">✓</span>
                    <span>Real-time webhook notifications</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#b7603d]">✓</span>
                    <span>Comprehensive error handling</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#b7603d]">✓</span>
                    <span>UIDAI compliant implementation</span>
                  </div>
                </div>
                <Link
                  to={
                    "https://7uniqueverify-njzw.readme.io/reference/post_api-verify-bankverify#/"
                  }
                  className="inline-block bg-[#b7603d] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#d19983] transition-colors"
                >
                  Read Full API Docs
                </Link>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm overflow-x-auto">
                  <div className="mb-2 text-gray-400">
                    // Aadhaar OTP Generation
                  </div>
                  <div className="text-blue-400">POST</div>{" "}
                  <span className="text-white">
                    /api/v1/aadhaar/generate-otp
                  </span>
                  <div className="text-yellow-400 mt-2">{"{"}</div>
                  <div className="ml-4 text-white">
                    "aadhaar_number": "123456789012"
                  </div>
                  <div className="text-yellow-400">{"}"}</div>
                  <div className="mt-4 text-gray-400">// OTP Verification</div>
                  <div className="text-blue-400">POST</div>{" "}
                  <span className="text-white">/api/v1/aadhaar/verify-otp</span>
                  <div className="text-yellow-400 mt-2">{"{"}</div>
                  <div className="ml-4 text-white">
                    "transaction_id": "abc123",
                  </div>
                  <div className="ml-4 text-white">"otp": "123456"</div>
                  <div className="text-yellow-400">{"}"}</div>
                  <div className="mt-4 text-gray-400">// Response</div>
                  <div className="text-yellow-400">{"{"}</div>
                  <div className="ml-4 text-white">"status": "verified",</div>
                  <div className="ml-4 text-white">"name": "JOHN DOE",</div>
                  <div className="ml-4 text-white">"address": "...",</div>
                  <div className="ml-4 text-white">"dob": "01/01/1990"</div>
                  <div className="text-yellow-400">{"}"}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AadhaarVerificationPageAPI;
