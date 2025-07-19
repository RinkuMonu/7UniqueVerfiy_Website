import type React from "react"
import { Link } from "react-router-dom"

const LivenessCheckAPIPages: React.FC = () => {
  return (
    <main className="w-full mx-auto">
      {/* Hero Section */}
      <section
        className="w-full bg-cover bg-center min-h-screen flex items-center  px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-24"
        style={{ backgroundImage: "url('/img/bg (2).png')" }}
      >
        <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-2/3 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Liveness Check API</h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
              Advanced Biometric Liveness Detection
            </h2>
            <p className="text-lg mb-4 text-white">
              Detect live human presence with our advanced Liveness Check API. Prevent spoofing attacks and ensure
              authentic biometric verification with real-time liveness detection technology.
            </p>
            <p className="mb-4 text-white">
              Our API uses advanced AI algorithms to detect live faces, prevent photo and video spoofing, and ensure
              genuine user presence during biometric authentication.
            </p>
            <p className="mb-6 text-white">
              Critical for secure authentication, digital onboarding, remote verification, and any application requiring
              anti-spoofing biometric security measures.
            </p>
            <Link to={'/contact-us'}
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
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://img.freepik.com/free-vector/biometric-concept-illustration_114360-1234.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
              alt="Liveness Check API"
              className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#f7f1ef]








 py-16 px-4 md:px-8 lg:px-15">
        <div className="max-w-full mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            <span className="text-[#b7603d]">Liveness Check</span> Features
          </h2>
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">
            <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
              <img
                src="https://img.freepik.com/free-vector/anti-spoofing-concept-illustration_114360-5678.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
                alt="Anti-Spoofing"
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Advanced Anti-Spoofing</h3>
              <p className="text-gray-600">
                Detect and prevent presentation attacks using photos, videos, masks, and deepfakes with 99.8% accuracy.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
              <img
                src="https://img.freepik.com/free-vector/passive-authentication-concept-illustration_114360-2345.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
                alt="Passive Liveness"
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Passive Liveness Detection</h3>
              <p className="text-gray-600">
                Frictionless verification that requires no user actions, providing a seamless experience while ensuring
                security.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0">
              <img
                src="https://img.freepik.com/free-vector/active-verification-concept-illustration_114360-1789.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
                alt="Active Liveness"
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Active Challenge Response</h3>
              <p className="text-gray-600">
                Interactive verification with randomized challenges like blinking, smiling, or head movements for
                enhanced security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
        <div className="w-full mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            How <span className="text-[#b7603d]">Liveness Check</span> Works
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Image Capture</h3>
              <p className="text-gray-600 text-sm">
                User's facial image or video is captured through your application and sent to our API.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">AI Analysis</h3>
              <p className="text-gray-600 text-sm">
                Advanced AI algorithms analyze the image for signs of spoofing and verify human presence.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Depth Detection</h3>
              <p className="text-gray-600 text-sm">
                3D facial mapping and texture analysis distinguish between real faces and flat images.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Verification Results</h3>
              <p className="text-gray-600 text-sm">
                Receive instant liveness verification results with confidence scores and detailed analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#f7f1ef]








 py-16 px-4 md:px-8 lg:px-20">
        <div className="w-full mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Benefits of <span className="text-[#b7603d]">Liveness Check</span>
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Enhanced Security</h4>
                  <p className="text-gray-600 text-sm">
                    Prevent identity fraud with advanced spoofing detection that blocks unauthorized access attempts.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Seamless User Experience</h4>
                  <p className="text-gray-600 text-sm">
                    Passive liveness detection requires no special actions, providing frictionless verification.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Regulatory Compliance</h4>
                  <p className="text-gray-600 text-sm">
                    Meet KYC and AML requirements with verified biometric authentication that prevents fraud.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Remote Verification</h4>
                  <p className="text-gray-600 text-sm">
                    Enable secure remote onboarding and authentication without physical presence requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src="https://img.freepik.com/free-vector/biometric-security-concept-illustration_114360-1234.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
              alt="Liveness Check Benefits"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
        <div className="w-full mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            <span className="text-[#b7603d]">Liveness Check</span> Use Cases
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-[#f7f1ef]








 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-lg font-semibold mb-2">Financial Services</h3>
              <p className="text-gray-600 text-sm">
                Secure customer onboarding and authentication for banking apps and financial services.
              </p>
            </div>
            <div className="bg-[#f7f1ef]








 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-lg font-semibold mb-2">Access Control</h3>
              <p className="text-gray-600 text-sm">
                Enhance security for physical and digital access control systems with liveness verification.
              </p>
            </div>
            <div className="bg-[#f7f1ef]








 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-lg font-semibold mb-2">Mobile Authentication</h3>
              <p className="text-gray-600 text-sm">
                Secure login and transaction authorization for mobile applications with biometric verification.
              </p>
            </div>
            <div className="bg-[#f7f1ef]








 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-lg font-semibold mb-2">Healthcare</h3>
              <p className="text-gray-600 text-sm">
                Verify patient identity for telemedicine services and secure access to medical records.
              </p>
            </div>
            <div className="bg-[#f7f1ef]








 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-lg font-semibold mb-2">Education</h3>
              <p className="text-gray-600 text-sm">
                Ensure exam integrity with student verification for online testing and certification.
              </p>
            </div>
            <div className="bg-[#f7f1ef]








 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-lg font-semibold mb-2">Government Services</h3>
              <p className="text-gray-600 text-sm">
                Secure citizen identity verification for government services and document issuance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* API Integration Section */}
      <section className="bg-[#f7f1ef]








 py-16 px-4 md:px-8 lg:px-20">
        <div className="w-full mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Easy <span className="text-[#b7603d]">API Integration</span>
              </h2>
              <p className="text-gray-600">
                Integrate liveness detection seamlessly into your applications with our developer-friendly API and
                comprehensive documentation.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>RESTful API with JSON responses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>Mobile SDKs for iOS and Android</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>Web SDK for browser integration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>Comprehensive error handling</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm overflow-x-auto">
                <div className="mb-2 text-gray-400">// Sample API Request</div>
                <div>POST /api/v1/liveness-check</div>
                <div className="text-yellow-400 mt-2">{"{"}</div>
                <div className="ml-4">"image": "base64_encoded_image",</div>
                <div className="ml-4">"check_type": "passive",</div>
                <div className="ml-4">"threshold": 0.9</div>
                <div className="text-yellow-400">{"}"}</div>
                <div className="mt-4 text-gray-400">// Response</div>
                <div className="text-yellow-400">{"{"}</div>
                <div className="ml-4">"liveness": true,</div>
                <div className="ml-4">"confidence": 0.98,</div>
                <div className="ml-4">"spoofing_attempts": {"{"}...</div>
                <div className="text-yellow-400">{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default LivenessCheckAPIPages
