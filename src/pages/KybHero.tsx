import React from "react";
import { Link } from "react-router-dom";

const KybHero: React.FC = () => {
  return (
    <section
      className="w-full bg-cover bg-center min-h-screen flex items-center"
      style={{ backgroundImage: "url('/img/bg (2).png')" }}
    >
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Left: Text content */}
        <div className="w-full md:w-2/3 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
           Business_Identity Verification API
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
            Business Verification Made Seamless with 7Unique Verify
          </h2>
          <p className="text-lg mb-4 text-white">
            Strengthen your compliance process and minimize onboarding risk with our real-time KYB API. 7Unique Verify empowers you to validate business entities, directors, GST, and more—all from a single trusted platform.
          </p>
          <p className="mb-4 text-white">
            Whether you're onboarding vendors, partners, or B2B clients, our API helps you prevent fraud, meet regulatory norms, and make confident decisions—instantly.
          </p>
          <Link to={'/contact-us'}
            className="inline-block bg-[#b7603d] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#d19983] transition-colors"
          >
            Get Started
          </Link>

        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/img/KYB/KYB1.png"
            alt="KYB Verification Illustration"
            className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
          />
        </div>
      </div>
    </section>
  );
};

export default KybHero;
