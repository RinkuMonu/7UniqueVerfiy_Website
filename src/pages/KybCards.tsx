import React from "react";
import { Link } from "react-router-dom";

const KybCards: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-6xl space-y-8">
        {/* Header with decorative elements */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 px-6 py-4">
            <h2 className="flex items-center gap-3 text-2xl font-semibold">
              <div className="rounded-full bg-[#b7603d]/10 p-2">
                <svg
                  className="h-6 w-6 text-[#b7603d]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.25-4.5a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 7.5v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H12"
                  />
                </svg>
              </div>
              <span className="relative z-10">
                Unlocking the Benefits of{" "}
                <span className="relative whitespace-nowrap">
                  <span className="relative z-10">7Unique Verify's</span>
                  <span className="absolute bottom-0 left-0 w-full h-3 bg-[#f0d9d0] -z-1"></span>
                </span>{" "}
                Business Identity API
              </span>
            </h2>
          </div>
        </div>

        {/* Cards with modern layout */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {/* Card 1 - Minimal with accent border */}
          <div className="group relative bg-white rounded-xl p-6 border-l-4 border-[#b7603d] shadow-sm hover:shadow-md transition-all duration-300">
            <div className="absolute top-6 -left-2 w-4 h-4 bg-[#b7603d] rounded-full"></div>
            <div className="mb-6 h-40 overflow-hidden rounded-lg">
              <img
                src="/img/KYB/KYB2.png"
                alt="Streamlined User Experience"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
              <span className="w-4 h-4 bg-[#b7603d] rounded-full mr-3"></span>
              Streamlined Onboarding
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our KYB API simplifies business verification with smooth
              integration and frictionless onboarding. Ensures high accuracy
              with minimal manual input, reducing delays and improving trust.
            </p>
            {/* <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
              <span className="text-sm font-medium text-[#b7603d]">Learn more →</span>
            </div> */}
          </div>

          {/* Card 2 - With floating label */}
          <div className="group relative bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="absolute -top-3 right-6 bg-[#b7603d] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
              Most Popular
            </div>
            <div className="mb-6 h-40 overflow-hidden rounded-lg relative">
              <img
                src="/img/KYB/KYB3.png"
                alt="Fraud Prevention"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Proactive Fraud Prevention
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Detect shell entities and fake registrations before onboarding.
              Flags inconsistencies using real-time government data to reduce
              risk with minimal effort.
            </p>
            <div className="mt-6">
              <Link to={"/contact-us"}>
                <button className="w-full py-2 bg-[#b7603d]/10 text-[#b7603d] font-medium rounded-lg hover:bg-[#b7603d]/20 transition-colors">
                  Get Started
                </button>
              </Link>
            </div>
          </div>

          {/* Card 3 - With stats highlight */}
          <div className="group relative bg-gradient-to-br from-[#f9f3f0] to-white rounded-xl p-6 border border-[#f0d9d0] shadow-sm hover:shadow-md transition-all duration-300">
            <div className="mb-6 h-40 overflow-hidden rounded-lg relative">
              <img
                src="/img/KYB/KYB4.png"
                alt="Reliable Business Verification"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-800">
                Verified Accuracy
              </h3>
              <span className="bg-[#b7603d] text-white text-sm px-2 py-1 rounded">
                99.8%
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Matched against official government sources (GST, MCA, Udyam) for
              validated, error-free results you can trust for confident
              decision-making.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-[#b7603d]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Real-time verification
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-[#b7603d]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Legal compliance
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-[#b7603d]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Audit-ready documentation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KybCards;
