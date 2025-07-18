import type React from "react"
import { Link } from "react-router-dom"
import SEO from "../Helmet/helment"
import { useContext } from "react";
import { ContextData } from "../../config/context";
import { SEOData } from "../../type";

const FaceMatchAPIPage: React.FC = () => {
  const { seo } = useContext(ContextData) as { seo: SEOData };
  return (
    <>
      <SEO seo={seo} />
      <main className="w-full pb-24">
        {/* Hero Section */}
        <section
          className="w-full bg-cover bg-center min-h-screen flex items-center px-4 py-10"
          style={{ backgroundImage: "url('/img/bg (2).png')" }}
        >
          <div className="container mx-auto  flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-2/3 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">7Unique Verify – Face Match API</h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
                Real-time Facial Recognition & Identity Match
              </h2>
              <p className="text-lg mb-4 text-white">
                Verify identities with precision using 7Unique Verify’s Face Match API. Match faces in real-time using AI-powered facial feature detection and comparison technology.
              </p>
              <p className="mb-4 text-white">
                This API supports live face detection, selfie vs ID photo comparison, and similarity scoring – ensuring secure and contactless identity verification.
              </p>
              <p className="mb-6 text-white">
                Perfect for KYC, user onboarding, attendance systems, fintech apps, and access control where facial biometrics are critical.
              </p>
              <Link
                to="/face-match-page-api"
                className="inline-block bg-[#b7603d] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#d19983] transition-colors"
              >
                Get Started
              </Link>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="/img/image/rendering-blender-3d-icon-logo-faciel-recognition-illustration.png"
                alt="7Unique Verify Face Match API"
                className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="p-16 bg-[#f7f1ef]








">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Powerful Face Matching Features</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our Face Match API offers cutting-edge facial recognition technology with enterprise-grade security and
                accuracy
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#f7f1ef]








 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#b7603d]  " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">High Accuracy Recognition</h3>
                <p className="text-gray-600">
                  99.7% accuracy rate with advanced deep learning algorithms for precise facial feature detection and
                  matching
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#f7f1ef]








   rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#b7603d]  " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Real-time Processing</h3>
                <p className="text-gray-600">
                  Lightning-fast face matching with response times under 500ms for instant verification results
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#f7f1ef]








  rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#b7603d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Secure & Compliant</h3>
                <p className="text-gray-600">
                  GDPR compliant with end-to-end encryption and secure data handling for maximum privacy protection
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="p-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How Face Matching Works</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Simple 4-step process to implement facial recognition and matching in your application
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#b7603d]   text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Upload Images</h3>
                <p className="text-gray-600">Submit two facial images through our secure API endpoint for comparison</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#b7603d]   text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Face Detection</h3>
                <p className="text-gray-600">
                  Our AI detects and extracts facial features from both images with precision
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#b7603d]   text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Feature Analysis</h3>
                <p className="text-gray-600">Advanced algorithms analyze and compare facial landmarks and features</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#b7603d]   text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Match Results</h3>
                <p className="text-gray-600">Receive similarity score and match confidence level in real-time</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="p-16 bg-[#f7f1ef]








">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Why Choose Our Face Match API?</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#d38769] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Industry-Leading Accuracy</h3>
                      <p className="text-gray-600">
                        Achieve 99.7% accuracy with our state-of-the-art facial recognition algorithms
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#d38769] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Scalable Infrastructure</h3>
                      <p className="text-gray-600">
                        Handle millions of face matching requests with our cloud-based infrastructure
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#d38769] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Easy Integration</h3>
                      <p className="text-gray-600">
                        Simple REST API with comprehensive documentation and SDKs for quick implementation
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#d38769] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Privacy Protection</h3>
                      <p className="text-gray-600">
                        GDPR compliant with secure data handling and no permanent storage of biometric data
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <img
                  src="/img/image/flat-artificial-intelligence-background.png"
                  alt="Face Match Benefits"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="p-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Industry Use Cases</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover how businesses across industries leverage our Face Match API for enhanced security and user
                experience
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#b7603d]   rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Access Control</h3>
                <p className="text-gray-600">
                  Secure building access and employee authentication with contactless facial recognition
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#b7603d]   rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Identity Verification</h3>
                <p className="text-gray-600">
                  Verify customer identities for KYC compliance and fraud prevention in financial services
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#b7603d] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Attendance Systems</h3>
                <p className="text-gray-600">
                  Automate employee attendance tracking with accurate facial recognition technology
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#b7603d] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Customer Onboarding</h3>
                <p className="text-gray-600">
                  Streamline digital onboarding processes with instant identity verification
                </p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#b7603d] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Security Systems</h3>
                <p className="text-gray-600">
                  Enhance security with real-time face matching for surveillance and monitoring
                </p>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#b7603d] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Mobile Applications</h3>
                <p className="text-gray-600">Integrate facial authentication into mobile apps for secure user login</p>
              </div>
            </div>
          </div>
        </section>

        {/* API Integration Section */}
        <section className="p-16 bg-[#f7f1ef]








">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Simple API Integration</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Get started with our Face Match API in minutes. Our RESTful API is designed for developers with
                  comprehensive documentation and code examples.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#d38769] rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">RESTful API with JSON responses</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#d38769] rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">SDKs for popular programming languages</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#d38769] rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Comprehensive documentation and examples</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#d38769] rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">24/7 developer support</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm overflow-x-auto">
                  <div className="mb-4">
                    <span className="text-gray-500"># Face Match API Example</span>
                  </div>
                  <div className="mb-2">
                    <span className="text-blue-400">curl</span> <span className="text-yellow-400">-X POST</span>{" "}
                  </div>
                  <div className="mb-2 ml-4">
                    <span className="text-green-400">"https://api.example.com/v1/face-match"</span>{" "}
                  </div>
                  <div className="mb-2 ml-4">
                    <span className="text-yellow-400">-H</span>{" "}
                    <span className="text-green-400">"Authorization: Bearer YOUR_API_KEY"</span>{" "}
                  </div>
                  <div className="mb-2 ml-4">
                    <span className="text-yellow-400">-H</span>{" "}
                    <span className="text-green-400">"Content-Type: application/json"</span>{" "}
                  </div>
                  <div className="mb-2 ml-4">
                    <span className="text-yellow-400">-d</span>{" "}
                    <span className="text-green-400">
                      '{`{"image1": "base64_encoded_image1", "image2": "base64_encoded_image2"}`}'
                    </span>
                  </div>
                  <div className="border-t border-gray-700 pt-4">
                    <div className="text-gray-500"># Response</div>
                    <div className="text-green-400">{`{`}</div>
                    <div className="ml-4 text-green-400">"match": true,</div>
                    <div className="ml-4 text-green-400">"confidence": 0.97,</div>
                    <div className="ml-4 text-green-400">"similarity_score": 0.95</div>
                    <div className="text-green-400">{`}`}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default FaceMatchAPIPage
