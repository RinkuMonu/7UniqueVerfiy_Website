import React from "react";
import { MdContactPhone, MdVerifiedUser, MdSpeed } from "react-icons/md";
import { RiShieldCheckLine } from "react-icons/ri";
import { HiOutlineAdjustments } from "react-icons/hi";
import { Link } from "react-router-dom";

const LookupFeatures: React.FC = () => {
  const features = [
    {
      title: "Smart Access to Verified User Data",
      description:
        "7Unique Verify's Mobile Number Lookup API lets you fetch critical details like telecom info, UPI-linked VPAs, and UANs in seconds—perfect for real-time user profiling and onboarding checks.",
      icon: <MdContactPhone className="text-white text-3xl" />,
    },
    {
      title: "Boosted Identity & VPA Verification",
      description:
        "Easily validate phone numbers tied to financial credentials or employment IDs. Our API helps detect mismatches and block potential fraud before it affects your system.",
      icon: <RiShieldCheckLine className="text-white text-3xl" />,
    },
    {
      title: "Faster Operations with Better Accuracy",
      description:
        "Speed up customer verification, reduce transaction errors, and automate backend checks. Our API fits perfectly into your fintech, HRMS, or KYC stack without extra overhead.",
      icon: <MdSpeed className="text-white text-3xl" />,
    },
  ];

  return (
    <section className="relative py-10 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Decorative elements */}

      <div className="hidden lg:block absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-[#f9f0ec] -z-10"></div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-orange-50 to-red-50 px-6 py-4">
          <h2 className="flex items-center gap-3 text-2xl font-semibold">
            <div className="rounded-full bg-[#b7603d]/10 p-2">
              <svg className="h-6 w-6 text-[#b7603d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            Explore Our Mobile Lookup Capabilities
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 p-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute top-0 left-8 -mt-5 w-10 h-10 flex items-center justify-center bg-[#cf8c71] text-white rounded-lg group-hover:rotate-12 transition-transform duration-300">
                {feature.icon}
              </div>
              <div className="pt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-[#b7603d] transition-all duration-500"></div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-[#f9f0ec] to-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Transform Your Verification Process?
              </h3>
              <p className="text-gray-600 mb-8 text-lg">
                Our API delivers unmatched accuracy and speed with seamless integration into your existing systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={'/contact-us'}>
                  <button className="px-8 py-3.5 bg-[#b7603d] hover:bg-[#9c4f32] text-white font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
                    Get Started Now
                  </button>
                </Link>
                <Link to={'/contact-us'}>
                  <button className="px-8 py-3.5 border border-[#b7603d] text-[#b7603d] hover:bg-[#f9f0ec] font-medium rounded-lg transition-colors duration-300">
                    Contact Sales
                  </button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 bg-[#f9f0ec] flex items-center justify-center p-8">
              <img
                src="/img/Phone Number Lookup API/Phone Number3.png"
                alt="API Integration"
                className="w-full h-auto max-w-md object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LookupFeatures;