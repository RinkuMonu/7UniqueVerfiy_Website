import type React from "react";
import { Link } from "react-router-dom";

const LivenessCheckAPIPage: React.FC = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        className="w-full bg-cover bg-center min-h-screen flex items-center"
        style={{ backgroundImage: "url('/img/bg (2).png')" }}
      >
        <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-2/3 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Liveness Check API
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
              Real-Time Biometric Liveness Detection by 7Unique Verify
            </h2>
            <p className="text-lg mb-4 text-white">
              Enhance your digital onboarding with 7Unique Verify’s Liveness
              Check API. Our technology ensures the user is a live human—not a
              static image or replayed video—using advanced AI-driven facial
              motion detection.
            </p>
            <p className="mb-4 text-white">
              This API prevents spoofing attacks, detects deepfakes, and
              verifies live user presence in real time, making it ideal for
              sensitive verifications like financial onboarding, KYC, and secure
              logins.
            </p>
            <p className="mb-6 text-white">
              Power up your applications with robust anti-spoofing technology
              trusted by fintechs, telecoms, healthcare, and remote verification
              platforms across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/liveness-check-api-pages"
                className="inline-block bg-[#b7603d] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#d19983] transition-colors text-center"
              >
                Get Started
              </Link>
              <a
                href="#"
                className="inline-block border border-white text-white font-semibold px-6 py-3 rounded hover:bg-white hover:text-[#b7603d] transition-colors text-center"
              >
                View Documentation
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/img/image/mobile-login-concept-illustration.png"
              alt="Liveness Check API by 7Unique Verify"
              className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px] rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="p-16 bg-[#f7f1ef]








">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced Liveness Detection Features
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our Liveness Check API provides cutting-edge anti-spoofing
              technology to ensure authentic human presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-[#f7f1ef]








  p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#b7603d]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
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
              <h3 className="text-xl font-semibold mb-3">
                Real-time Detection
              </h3>
              <p className="text-gray-600">
                Instantly detect live human presence using advanced computer
                vision and AI algorithms for real-time verification.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-[#f7f1ef]








  p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#b7603d]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Anti-Spoofing Protection
              </h3>
              <p className="text-gray-600">
                Prevent photo, video, and 3D mask attacks with sophisticated
                spoofing detection algorithms and techniques.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-[#f7f1ef]








  p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#b7603d]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">High Accuracy</h3>
              <p className="text-gray-600">
                Achieve industry-leading accuracy rates with minimal false
                positives and negatives for reliable verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="p-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Liveness Detection Works
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our advanced liveness detection process ensures authentic human
              presence through multiple verification layers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#b7603d] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Face Detection</h3>
              <p className="text-gray-600">
                Detect and locate human faces in the image or video stream using
                advanced facial recognition algorithms.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#b7603d] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Liveness Analysis</h3>
              <p className="text-gray-600">
                Analyze facial movements, micro-expressions, and physiological
                indicators to determine liveness.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#b7603d] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Spoofing Detection</h3>
              <p className="text-gray-600">
                Identify and prevent various spoofing attempts including photos,
                videos, and 3D masks.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#b7603d] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Verification Result
              </h3>
              <p className="text-gray-600">
                Provide instant verification results with confidence scores and
                detailed analysis reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="p-16 bg-[#f7f1ef]








">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Benefits of Liveness Detection
              </h2>
              <p className="text-gray-600 mb-8">
                Enhance security and prevent fraud with our advanced liveness
                detection technology that ensures authentic human presence.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#b7603d]   mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    <strong className="font-medium">
                      Prevent Identity Fraud:
                    </strong>{" "}
                    Stop fraudsters from using photos or videos to impersonate
                    others.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#b7603d]   mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    <strong className="font-medium">Enhanced Security:</strong>{" "}
                    Add an extra layer of security to your authentication
                    process.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#b7603d]   mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    <strong className="font-medium">
                      Regulatory Compliance:
                    </strong>{" "}
                    Meet KYC and AML requirements with verified identity checks.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#b7603d]   mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    <strong className="font-medium">User Experience:</strong>{" "}
                    Seamless verification process without compromising security.
                  </span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src="/img/image/social-networks-chat-using-phone-online-communication-digital-environment.png"
                alt="Liveness Detection Benefits"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="p-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry Use Cases
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Liveness detection is crucial across various industries for
              preventing fraud and ensuring secure authentication.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="bg-[#f7f1ef]








  p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-[#b7603d]"
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
              <h3 className="text-xl font-semibold mb-2">Banking & Finance</h3>
              <p className="text-gray-600">
                Secure account opening, loan applications, and high-value
                transactions with verified identity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="bg-[#f7f1ef]








  p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-[#b7603d]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Digital Onboarding</h3>
              <p className="text-gray-600">
                Verify new users during registration and account setup processes
                for various platforms.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="bg-[#f7f1ef]








  p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-[#b7603d]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Access Control</h3>
              <p className="text-gray-600">
                Secure physical and digital access to buildings, systems, and
                sensitive areas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="bg-[#f7f1ef]








  p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-[#b7603d]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
              <p className="text-gray-600">
                Verify patient identity for telemedicine consultations and
                medical record access.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="bg-[#f7f1ef]








  p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-[#b7603d]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-gray-600">
                Prevent cheating in online exams and verify student identity for
                remote learning.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="bg-[#f7f1ef]








  p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-[#b7603d]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Government Services
              </h3>
              <p className="text-gray-600">
                Secure citizen verification for digital government services and
                benefit applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* API Integration Section */}
      <section className="p-16 bg-[#f7f1ef]








">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Easy API Integration
              </h2>
              <p className="text-gray-600 mb-8">
                Integrate liveness detection into your application with our
                simple and powerful API. Get started in minutes with
                comprehensive documentation.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#b7603d]   mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Real-time video and image processing</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#b7603d]   mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Multiple detection modes and sensitivity levels</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#b7603d]   mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Detailed confidence scores and analysis reports</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
                <div className="text-gray-500 mb-2">
                  // Liveness Check API Example
                </div>
                <div className="text-blue-400">curl</div>{" "}
                <span className="text-yellow-300">-X POST</span> \<br />
                <span className="text-yellow-300">-H</span>{" "}
                <span className="text-green-300">
                  "Authorization: Bearer YOUR_API_KEY"
                </span>{" "}
                \<br />
                <span className="text-yellow-300">-H</span>{" "}
                <span className="text-green-300">
                  "Content-Type: multipart/form-data"
                </span>{" "}
                \<br />
                <span className="text-yellow-300">-F</span>{" "}
                <span className="text-green-300">"image=@selfie.jpg"</span> \
                <br />
                <span className="text-blue-400">
                  https://api.example.com/v1/liveness/check
                </span>
                <br />
                <br />
                <div className="text-gray-500">// Response</div>
                <div className="text-white">{"{"}</div>
                <div className="ml-4 text-blue-300">"is_live"</div>:{" "}
                <span className="text-green-300">true</span>,<br />
                <div className="ml-4 text-blue-300">"confidence"</div>:{" "}
                <span className="text-yellow-300">0.95</span>,<br />
                <div className="ml-4 text-blue-300">
                  "spoofing_detected"
                </div>: <span className="text-red-300">false</span>,<br />
                <div className="ml-4 text-blue-300">"analysis"</div>:{" "}
                <span className="text-green-300">"authentic_human"</span>
                <br />
                <div className="text-white">{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LivenessCheckAPIPage;
