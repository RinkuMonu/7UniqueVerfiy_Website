import React from "react";
import { Link } from "react-router-dom";

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
            Utilities Verification API Suite for Digital Workflows
          </h1>
          {/* <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
            Verify, Validate & Integrate — Smarter Utilities for Smarter Systems
          </h2> */}
          <p className="text-lg mb-4 text-white">
            Automate verification of LEI, IMEI, and other utility data with 7uniqueverify’s secure API suite.
            Ideal for fintech, telecom, and logistics platforms looking to streamline compliance and reduce risk.
          </p>
          <p className="mb-4 text-white">
            Get real-time data checks to power reliable identity, audit, and onboarding processes with confidence.
          </p>
          {/* <p className="mb-6 text-white">
            Stay compliant, reduce fraud risks, and accelerate your decision-making processes—all through one integrated API platform. Built for performance, backed by accuracy.
          </p> */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to={"/contact-us"}
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
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/public/ui/Utilities-verification/img1_Artboard 1.png"
            alt="Utilities API Illustration"
            className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
          />
        </div>

      </div>
    </section>
  );
};

export default UtilitiesHero;
