import type React from "react"
import { Link } from "react-router-dom"

const DocumentVerificationPage: React.FC = () => {
  return (
    <main className="w-full pb-24">
      {/* Hero Section */}
      <section
        className="w-full bg-cover bg-center min-h-screen flex items-center px-16"
        style={{ backgroundImage: "url('/img/bg (2).png')" }}
      >
        <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-2/3 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">CKYC Search & Download API</h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
              Central KYC Registry with 7Unique Verify
            </h2>
            <p className="text-lg mb-4 text-white">
              Access and retrieve CKYC records in real-time using 7Unique Verify’s secure API. Streamline KYC operations by integrating verified data from India’s centralized KYC registry.
            </p>
            <p className="mb-4 text-white">
              Built for speed and compliance, our CKYC API empowers banks, NBFCs, and fintechs to verify, download, and store customer KYC records efficiently—minimizing duplication and fraud.
            </p>
            <p className="mb-6 text-white">
              Join 7Unique Verify in modernizing onboarding and compliance with scalable, RBI-compliant solutions.
            </p>
            <Link
              to="/document-verification-page-api"
              className="inline-block bg-[#b7603d] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#d19983] transition-colors"
            >
              Get Started
            </Link>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="../img/images/13.png"
              alt="CKYC Search & Download with 7Unique Verify"
              className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-1 md:px-8 lg:px-15">
        <div className="max-w-full bg-[#f7f1ef]








 rounded-3xl py-6 px-4 sm:px-6x md:py-12 md:px-20 lg:mx-30 xl:mx-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            <span className="text-[#b7603d]">7Unique Verify CKYC</span> API Features
          </h2>
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">
            <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
              <img
                src="../img/images/14.png"
                alt="CKYC Search"
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Smart CKYC Search</h3>
              <p className="text-gray-600">
                Query CKYC data using Aadhaar, PAN, or mobile number. Find verified records instantly from the central registry for seamless customer onboarding.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
              <img
                src="../img/images/15.png"
                alt="Record Download"
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Instant Record Download</h3>
              <p className="text-gray-600">
                Download complete CKYC documents and metadata, including customer details, photograph, and KYC verification status—ready for backend use.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0">
              <img
                src="../img/images/16.png"
                alt="RBI Compliance"
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">RBI Compliant Architecture</h3>
              <p className="text-gray-600">
                Fully aligned with RBI and CKYC norms. Enjoy secure, encrypted access with full audit logging to ensure transparency and compliance.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* How It Works Section */}
      <section className="py-16 bg-[#f7f1ef]








">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our document verification process is simple, secure, and efficient
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Document Upload</h3>
              <p className="text-gray-600">User uploads document image through your application</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Data Extraction</h3>
              <p className="text-gray-600">Our API extracts relevant information from the document</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Verification</h3>
              <p className="text-gray-600">Multiple checks validate document authenticity and data accuracy</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Results</h3>
              <p className="text-gray-600">Detailed verification results returned to your application</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Benefits of Document Verification</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#b7603d] mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <span className="font-semibold">Reduced Fraud:</span> Detect forged or tampered documents to prevent
                    fraud and financial losses.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#b7603d] mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <span className="font-semibold">Regulatory Compliance:</span> Meet KYC, AML, and other regulatory
                    requirements with comprehensive verification.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#b7603d] mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <span className="font-semibold">Improved Customer Experience:</span> Streamline onboarding with
                    fast, frictionless verification processes.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#b7603d] mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <span className="font-semibold">Cost Reduction:</span> Eliminate manual verification processes and
                    reduce operational costs.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#b7603d] mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <span className="font-semibold">Scalability:</span> Handle high volumes of verification requests
                    without compromising speed or accuracy.
                  </span>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="../img/images/2.png"
                alt="Document Verification Benefits"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-[#f7f1ef]








">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Industry Use Cases</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our Document Verification API serves diverse industries with tailored solutions
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#e6f7fb] rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#b7603d]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Financial Services</h3>
              <p className="text-gray-600">
                Verify customer identities during account opening, loan applications, and financial transactions to
                prevent fraud and ensure compliance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#e6f7fb] rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#b7603d]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Real Estate</h3>
              <p className="text-gray-600">
                Authenticate property documents, verify tenant identities, and validate ownership records for secure
                transactions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#e6f7fb] rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#b7603d]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
              <p className="text-gray-600">
                Verify medical credentials, insurance documents, and patient identities to ensure proper care and
                prevent insurance fraud.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#e6f7fb] rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#b7603d]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Employment</h3>
              <p className="text-gray-600">
                Validate candidate credentials, educational certificates, and employment history during hiring
                processes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#e6f7fb] rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#b7603d]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Government</h3>
              <p className="text-gray-600">
                Authenticate citizen documents for public services, benefits distribution, and regulatory compliance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#e6f7fb] rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#b7603d]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-gray-600">
                Verify student identities, academic credentials, and scholarship eligibility documents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* API Integration Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Simple API Integration</h2>
              <p className="text-gray-600 mb-6">
                Our Document Verification API is designed for easy integration with your existing systems. With
                comprehensive documentation and developer support, you can be up and running in no time.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#b7603d] mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>RESTful API with JSON responses</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#b7603d] mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>SDKs available for multiple programming languages</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#b7603d] mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Comprehensive documentation and code examples</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#b7603d] mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Dedicated developer support</span>
                </li>
              </ul>
              <a
                href="#"
                className="inline-block bg-[#b7603d] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#d19983] transition-colors"
              >
                View Documentation
              </a>
            </div>
            <div className="w-full md:w-1/2 bg-gray-800 rounded-lg shadow-lg p-6">
              <pre className="text-green-400 text-sm overflow-x-auto">
                <code>
                  {`// Example API Request
const response = await fetch('https://api.sprintverify.com/v1/document/verify', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    document_type: 'passport',
    document_image: 'base64_encoded_image',
    check_authenticity: true,
    extract_data: true
  })
});

const result = await response.json();
console.log(result);

// Example Response
{
  "status": "success",
  "verification_id": "ver_12345678",
  "document": {
    "type": "passport",
    "is_authentic": true,
    "confidence_score": 0.98,
    "extracted_data": {
      "name": "John Smith",
      "document_number": "AB1234567",
      "date_of_birth": "1985-05-15",
      "expiry_date": "2030-05-14",
      "issuing_country": "USA"
    }
  }
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      {/* <section className="py-16">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-[#b7603d] to-[#79d9ef] rounded-xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that trust our Document Verification API for secure and reliable identity
              verification.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="inline-block bg-white text-[#b7603d] font-semibold px-8 py-3 rounded shadow hover:bg-gray-100 transition-colors"
              >
                Sign Up Free
              </a>
              <a
                href="#"
                className="inline-block bg-transparent border border-white text-white font-semibold px-8 py-3 rounded shadow hover:bg-white hover:text-[#b7603d] transition-colors"
              >
                Request Demo
              </a>
            </div>
          </div>
        </div>  
      </section> */}
    </main>
  )
}

export default DocumentVerificationPage
