import type React from "react";
import SEO from "../app/Helmet/helment";
import { useContext } from "react";
import { ContextData } from "../config/context";
import { SEOData } from "../type";
import { Link } from "react-router-dom";

const CrimeCheckPageAPI: React.FC = () => {
  const { seo } = useContext(ContextData) as { seo: SEOData };
  return (
    <>
      <SEO seo={seo} />
      <main className="w-full mx-auto">
        {/* Hero Section - What is Criminal Record Verification? */}
        <section
          className="w-full bg-cover bg-center min-h-screen flex items-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-24"
          style={{ backgroundImage: "url('/img/bg (2).png')" }}
        >
          <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-2/3 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Instant Criminal Background Checks with Complete Accuracy
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
                Ensure safety, prevent fraud, and streamline hiring processes
                with our comprehensive Criminal Record Verification API.
              </h2>
              <p className="text-lg mb-4 text-white">
                Our Crime Check API provides instant validation of criminal
                records against official databases across India.
              </p>
              <p className="mb-4 text-white">
                From basic checks to detailed criminal history, we offer
                comprehensive verification methods to meet your specific
                security and compliance needs.
              </p>
              <p className="mb-6 text-white">
                Trusted by employers, landlords, and businesses across India to
                ensure safe environments and compliance with regulations.
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
                src="https://img.freepik.com/free-vector/police-officers-crime-scene-concept-illustration_114360-21847.jpg?ga=GA1.1.389685255.1745228264&semt=ais_hybrid&w=740"
                alt="Criminal Record Verification"
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
              <span className="text-[#b7603d]">Criminal Record Checks</span>?
            </h2>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  Corporate Hiring
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Screen potential employees for criminal history before hiring.
                </p>
                <div className="text-xs text-[#b7603d]   font-medium">
                  "Safe workplace!"
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  Rental Applications
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Verify tenant backgrounds for property rentals and leases.
                </p>
                <div className="text-xs text-[#b7603d]   font-medium">
                  "Secure properties!"
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🏫</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  Educational Institutions
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Check staff and faculty backgrounds for campus safety.
                </p>
                <div className="text-xs text-[#b7603d] font-medium">
                  "Safe learning!"
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  Healthcare Facilities
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Verify medical staff and caregivers for patient safety.
                </p>
                <div className="text-xs text-orange-600 font-medium">
                  "Patient security!"
                </div>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  Government Contracts
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Screen contractors and vendors for sensitive projects.
                </p>
                <div className="text-xs text-red-600 font-medium">
                  "Security clearance!"
                </div>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  Financial Services
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Verify clients and employees for fraud prevention.
                </p>
                <div className="text-xs text-teal-600 font-medium">
                  "Fraud prevention!"
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
                    <span className="text-[#b7603d]   font-bold">🕵️‍♂️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Crime Check Individual
                    </h3>
                    <span className="text-sm text-[#b7603d]   font-medium">
                      Background verification
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Performs a detailed background verification of an individual
                  by checking for any criminal records using government and law
                  enforcement databases.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">2-3 seconds</span>
                  </div>
                 
                  <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">Basic identity checks</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef] rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   font-bold">🕵️‍♂️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Crime check Corporate
                    </h3>
                    <span className="text-sm text-[#b7603d]   font-medium">
                      Organization Background check
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Verifies the criminal history of a registered business entity,
                  identifying any legal or fraudulent activities linked to the
                  organization.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">3-5 seconds</span>
                  </div>
                 
                  <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">Basic identity checks</span>
                  </div>
                </div>
              </div>
              {/* <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef] rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   font-bold">🕵️‍♂️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Crime check Through Mobile Number
                    </h3>
                    <span className="text-sm text-[#b7603d]   font-medium">
                      Organization Background check
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Crime check through a mobile number refers to the process of
                  verifying if a mobile number is linked to any suspicious.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">3-5 seconds</span>
                  </div>
                                     <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">Basic identity checks</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef] rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   font-bold">📂</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Crime Report Download (JSON)
                    </h3>
                    <span className="text-sm text-[#b7603d]   font-medium">
                      Download (JSON)
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Allows users to download the structured crime report of an
                  individual or company in JSON format, suitable for API
                  integrations and automated systems.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">3-5 seconds</span>
                  </div>
                                     <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">Basic identity checks</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef] rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   font-bold">📄</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Crime Report Download (PDF)
                    </h3>
                    <span className="text-sm text-[#b7603d]   font-medium">
                      Download (PDF)
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Generates a formatted PDF report of the crime background
                  check, ideal for printing, documentation, or sharing with
                  clients or authorities.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">3-5 seconds</span>
                  </div>
                                     <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">Basic identity checks</span>
                  </div>
                </div>
              </div> */}
            </div>

            <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-lg font-semibold mb-4 text-gray-800">
                What You Get:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">
                    🕵️‍♂️ Crime Check (Individual):
                  </h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>
                      ✓ Verification against global criminal and fraud databases
                    </li>
                    <li>✓ Identity match and criminal history screening</li>
                    <li>
                      ✓ Ideal for personal KYC and background verification
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">
                    🏢 Crime Check (Company):
                  </h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>
                      ✓ Checks for fraudulent activity, blacklists, and
                      sanctions
                    </li>
                    <li>✓ Scans linked directors and company structure</li>
                    <li>
                      ✓ Ideal for vendor onboarding and business due diligence
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">
                    📂 Crime Report Download (JSON):
                  </h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>
                      ✓ Structured crime report in machine-readable JSON format
                    </li>
                    <li>✓ Suitable for API use and automated workflows</li>
                    <li>✓ Issuing country information</li>
                    <li>
                      ✓ Ideal for platforms requiring fast, integrated checks
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">
                    📄 Crime Report Download (PDF):
                  </h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ Professionally formatted crime report in PDF</li>
                    <li>
                      ✓ Suitable for sharing with clients, documentation, or
                      printing
                    </li>
                    <li>✓ Issuing country information</li>
                    <li>✓ Ideal for audits, legal use, or manual review</li>
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
              How{" "}
              <span className="text-[#b7603d]">
                Criminal Record Verification
              </span>{" "}
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
                  <h3 className="text-lg font-semibold mb-2">Identity Input</h3>
                  <p className="text-gray-600 text-sm">
                    User enters personal details for verification
                  </p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    2
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Data Validation
                  </h3>
                  <p className="text-gray-600 text-sm">
                    System validates identity information
                  </p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    3
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Database Check</h3>
                  <p className="text-gray-600 text-sm">
                    API queries national criminal databases
                  </p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    4
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Record Matching
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Cross-reference with criminal records
                  </p>
                </div>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                    5
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Secure Results</h3>
                  <p className="text-gray-600 text-sm">
                    Receive verification status and details
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
                  <span>National Databases</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  <span>Real-time Verification</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                  <span>Secure API</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                  <span>All India Coverage</span>
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
              <span className="text-[#b7603d]">Criminal Record Check API</span>?
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
                    Instant Results
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Get criminal record verification in 2-5 seconds with direct
                  database access.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div
                    className="w-12 h-12 bg-[#f7f1ef]








 rounded-full flex items-center justify-center mr-4"
                  >
                    <span className="text-[#b7603d]   text-xl">🛡️</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Risk Mitigation
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Reduce organizational risk by screening individuals with
                  criminal backgrounds.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div
                    className="w-12 h-12 bg-[#f7f1ef]








  rounded-full flex items-center justify-center mr-4"
                  >
                    <span className="text-[#b7603d] text-xl">📋</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Compliance Ready
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Meet regulatory requirements for background checks in
                  sensitive industries.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-600 text-xl">🔒</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Secure & Private
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Bank-grade security with end-to-end encryption for all
                  verification requests.
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
                  Access detailed criminal history including case numbers and
                  dispositions.
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
                  Simple REST API with comprehensive documentation and multiple
                  SDK options.
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
                  Integrate criminal record checks seamlessly into your
                  applications with our developer-friendly API and comprehensive
                  documentation.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-[#b7603d]">✓</span>
                    <span>RESTful API with JSON responses</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#b7603d]">✓</span>
                    <span>All India database coverage</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#b7603d]">✓</span>
                    <span>Real-time verification results</span>
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
                    // Sample API Request
                  </div>
                  <div className="text-blue-400">POST</div>{" "}
                  <span className="text-white">/api/v1/crime-check</span>
                  <div className="text-gray-400 mt-2">Headers:</div>
                  <div className="ml-2 text-yellow-400">
                    Authorization: Bearer YOUR_API_KEY
                  </div>
                  <div className="ml-2 text-yellow-400">
                    Content-Type: application/json
                  </div>
                  <div className="text-yellow-400 mt-3">{"{"}</div>
                  <div className="ml-4 text-white">
                    "full_name": "John Doe",
                  </div>
                  <div className="ml-4 text-white">"dob": "1985-05-15",</div>
                  <div className="ml-4 text-white">
                    "id_number": "ABCD123456",
                  </div>
                  <div className="ml-4 text-white">
                    "verification_type": "detailed"
                  </div>
                  <div className="text-yellow-400">{"}"}</div>
                  <div className="mt-4 text-gray-400">// Sample Response</div>
                  <div className="text-yellow-400">{"{"}</div>
                  <div className="ml-4 text-white">
                    "status": "match_found",
                  </div>
                  <div className="ml-4 text-white">"records": [</div>
                  <div className="ml-8 text-white">{"{"}</div>
                  <div className="ml-12 text-white">
                    "case_number": "FIR123/2020",
                  </div>
                  <div className="ml-12 text-white">"offense": "Fraud",</div>
                  <div className="ml-12 text-white">
                    "disposition": "Convicted",
                  </div>
                  <div className="ml-12 text-white">"date": "2021-03-15"</div>
                  <div className="ml-8 text-white">{"}"}</div>
                  <div className="ml-4 text-white">]</div>
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

export default CrimeCheckPageAPI;
