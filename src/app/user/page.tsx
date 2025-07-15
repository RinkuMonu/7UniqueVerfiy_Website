import HomeFAQ from "../../pages/HomeFAQ"

const UserManagement = () => {
  return (
    <>

     {/* Hero Section */}
<section className="bg-gradient-to-r from-indigo-400 to-[#b7603d] text-white py-20">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          7Unique Verify – User Management API
        </h1>
        <p className="text-xl mb-8">
          Secure, scalable, and intelligent user management solution. Enable real-time user authentication, KYC, and identity lifecycle handling in one seamless API integration.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-white text-[#b7603d] hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition duration-300">
            Get Started
          </button>
          <button className="border border-white text-white hover:bg-white hover:text-[#b7603d] px-6 py-3 rounded-md font-medium transition duration-300">
            View Documentation
          </button>
        </div>
      </div>
      <div className="md:w-1/2">
        <img
          src="../img/images/43.png"
          alt="User Management Dashboard"
          className="rounded-lg"
        />
      </div>
    </div>
  </div>
</section>

      {/* Features Section */}
      <section className="py-16 bg-[#f7f1ef]








">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features of Our User Management System</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our user management solution offers comprehensive features to securely manage user identities and access.
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
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Authentication</h3>
              <p className="text-gray-600">
                Multi-factor authentication, passwordless login, and biometric verification to ensure secure user
                access.
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
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">User Profile Management</h3>
              <p className="text-gray-600">
                Comprehensive user profile management with customizable fields, profile verification, and data
                validation.
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
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 010 4m-6 8a2 2 0 100-4m0 4a2 2 0 010-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 010-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Role-Based Access Control</h3>
              <p className="text-gray-600">
                Define user roles and permissions to control access to resources and functionalities within your
                application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Journey Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Seamless User Journey</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our user management system provides a seamless experience from registration to authentication and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#b7603d] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">User Registration</h3>
              <p className="text-gray-600">
                Simple and secure registration process with email verification and social login options.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#b7603d] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Identity Verification</h3>
              <p className="text-gray-600">
                Verify user identities through document verification, biometrics, or other methods.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#b7603d] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Profile Completion</h3>
              <p className="text-gray-600">
                Guide users to complete their profiles with necessary information and preferences.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#b7603d] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3">Ongoing Authentication</h3>
              <p className="text-gray-600">
                Secure and seamless authentication for returning users with multiple options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="py-16 bg-[#f7f1ef]








">
        <div className="container mx-auto px-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Enterprise-Grade Security</h2>
              <p className="text-gray-600 mb-8">
                Our user management system is built with security at its core, ensuring your user data is protected at
                all times.
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <strong className="font-medium">End-to-End Encryption:</strong> All user data is encrypted in
                    transit and at rest.
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <strong className="font-medium">Fraud Detection:</strong> Advanced algorithms to detect and prevent
                    fraudulent activities.
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <strong className="font-medium">Compliance:</strong> GDPR, CCPA, and other regulatory compliance
                    built-in.
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <strong className="font-medium">Audit Logs:</strong> Comprehensive logging of all user activities
                    for security and compliance.
                  </span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src="../img/images/44.png"
                alt="Security Features"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Seamless Integration</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our user management system integrates seamlessly with your existing infrastructure and third-party
              services.
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
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">RESTful API</h3>
              <p className="text-gray-600">
                Comprehensive API for seamless integration with your existing systems and applications.
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
              <h3 className="text-xl font-semibold mb-2">Single Sign-On (SSO)</h3>
              <p className="text-gray-600">
                Support for SAML, OAuth, and OpenID Connect for seamless authentication across multiple applications.
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
                    d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Social Login</h3>
              <p className="text-gray-600">
                Enable users to sign in with their social media accounts for a frictionless experience.
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
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">CRM Integration</h3>
              <p className="text-gray-600">
                Integrate with popular CRM systems to sync user data and provide a unified view of your customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Analytics Section */}
      <section className="py-16 bg-[#f7f1ef]








">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive User Analytics</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Gain deep insights into user behavior, engagement patterns, and system performance with our advanced
              analytics dashboard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-[#f7f1ef]








 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#b7603d]  "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">User Engagement</h3>
              <p className="text-gray-600">
                Track user activity, session duration, and engagement metrics across your platform.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-[#f7f1ef]








   p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#b7603d]  "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Growth Metrics</h3>
              <p className="text-gray-600">
                Monitor user acquisition, retention rates, and growth trends with detailed reporting.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-[#f7f1ef]








  p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-time Monitoring</h3>
              <p className="text-gray-600">
                Get real-time insights into user activities and system performance with live dashboards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-orange-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Compliance Reports</h3>
              <p className="text-gray-600">
                Generate compliance reports for audits and regulatory requirements automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <HomeFAQ />

    </>
  )
}

export default UserManagement
