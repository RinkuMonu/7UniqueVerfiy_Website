import React from "react";

const LookUpCards: React.FC = () => {
  return (
    <section className="py-16 px-1 md:px-8 lg:px-15">
      <div
        className="bg-white rounded-lg shadow-lg overflow-hidden"
      >

        <div className="bg-gradient-to-r from-orange-50 to-red-50 px-6 py-4">
          <h2 className="flex items-center gap-3 text-2xl font-semibold">
            <div className="rounded-full bg-[#b7603d]/10 p-2">
              <svg className="h-6 w-6 text-[#b7603d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.25-4.5a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 7.5v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H12"
                />
              </svg>
            </div>
            Smarter Onboarding Starts with Verified Mobile Numbers
          </h2>
        </div>


        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left p-5">
          {/* Block 1 */}
          <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
            <img
              src="/img/phone number1.png"
              alt="Two-Step Verification Illustration"
              className="w-full  object-cover mb-4 group-hover:scale-105 transition-transform duration-500"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Instant Identity Match with One API Call

            </h3>
            <p className="text-gray-600">
              Verify mobile numbers instantly through a simple API call. Our developer-friendly interface returns accurate identity data—no manual entry or delays required.

            </p>
          </div>

          {/* Block 2 */}
          <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
            <img
              src="/img/Phone Number Lookup API/Phone Number4.png"
              alt="Data Phishing Prevention"
              className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Real-Time Fraud & Phishing Detection
            </h3>
            <p className="text-gray-600">
              Flag high-risk numbers and suspicious usage patterns before fraud impacts your platform. Ideal for digital lenders, KYC flows, and user onboarding in India.
            </p>
          </div>

          {/* Block 3 */}
          <div
            className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl
                          md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0"
          >
            <img
              src="/img/Phone Number Lookup API/Phone Number5.png"
              alt="Secure Document Verification"
              className="w-full object-contain mb-4 group-hover:scale-105 transition-transform duration-500"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Government-Linked Data Cross-Verification
            </h3>
            <p className="text-gray-600">
              Match mobile numbers with government-verified credentials for stronger identity assurance. Perfect for BFSI, HRMS, and any compliance-driven system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LookUpCards;
