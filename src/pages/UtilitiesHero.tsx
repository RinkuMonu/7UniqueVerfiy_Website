import React from "react";

const UtilitiesHero: React.FC = () => {
  return (
    <section
      className="w-full bg-cover bg-center min-h-screen flex items-center"
      style={{ backgroundImage: "url('/img/bg (2).png')" }}
    >
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left: Text Content */}
        <div className="w-full md:w-2/3 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Utilities Verification API Suite
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
            Verify, Validate & Integrate — Smarter Utilities for Smarter Systems
          </h2>
          <p className="text-lg mb-4 text-white">
            Automate compliance, enhance data accuracy, and reduce manual workloads with 7Unique Verify’s advanced Utility APIs. From LEI to IMEI validation, empower your backend with real-time intelligence.
          </p>
          <p className="mb-4 text-white">
            Designed for industries like fintech, logistics, and telecom, our Utilities API suite helps you verify critical identifiers—instantly and securely. Make onboarding, auditing, and validation faster and smarter.
          </p>
          <p className="mb-6 text-white">
            Stay compliant, reduce fraud risks, and accelerate your decision-making processes—all through one integrated API platform. Built for performance, backed by accuracy.
          </p>
          <a
            href="#"
            className="inline-block bg-[#b7603d] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#d19983] transition-colors"
          >
            Explore APIs
          </a>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/img/Utilities/Utilities1.png"
            alt="Utilities API Illustration"
            className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
          />
        </div>

      </div>
    </section>
  );
};

export default UtilitiesHero;
