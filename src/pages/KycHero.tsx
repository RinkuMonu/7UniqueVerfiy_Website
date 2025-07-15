import React from "react";

const KycHero: React.FC = () => {
  return (
    <section
      className="w-full bg-cover bg-center min-h-screen flex items-center"
      style={{ backgroundImage: "url('/img/bg (2).png')" }}
    >
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left: Text content */}
        <div className="w-full md:w-2/3 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            KYC Verification API
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
            Smart KYC API by 7Unique Verify – Fast, Secure & Compliant
          </h2>
          <p className="text-lg mb-4 text-white">
            Instantly validate your users, customers, or employees with 7Unique Verify’s advanced KYC verification suite. Built for fintechs, lenders, HRMS, and onboarding teams.
          </p>
          <p className="mb-4 text-white">
            Our KYC APIs leverage AI and machine learning to automate identity checks—reducing manual review and ensuring full regulatory compliance.
          </p>
          <p className="mb-6 text-white">
            From document scanning to behavior pattern analysis, we deliver precision KYC that’s fast, scalable, and secure—built for India’s digital-first businesses.
          </p>
          <a
            href="#"
            className="inline-block bg-[#b7603d] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#d19983] transition-colors"
          >
            Get Started
          </a>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/img/KYC/KYC1.png"
            alt="KYC Verification Illustration"
            className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
          />
        </div>
      </div>
    </section>
  );
};

export default KycHero;
