import React from "react";

const LookUpHero: React.FC = () => {
  return (
    <section
      className="w-full bg-cover bg-center min-h-screen flex items-center"
      style={{ backgroundImage: "url('/img/bg (2).png')" }}
    >
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left: Text content */}
        <div className="w-full md:w-2/3 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Phone Number Lookup API
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
            Verify Mobile Numbers with Real-Time Identity Insights
          </h2>
          <p className="text-lg mb-4 text-white">
            Enhance your KYC and user validation with our Phone Number Lookup API. Instantly fetch verified details like UAN, VPA, telecom operator, and more — using just a mobile number.
          </p>
          <p className="mb-4 text-white">
            Whether you're verifying transactions, onboarding users, or targeting communication campaigns, our API helps you retrieve real-time, reliable data with speed and security. Make smarter decisions, reduce fraud, and personalize customer experiences — all with one powerful API.
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
            src="/img/Phone Number Lookup API/Phone Number2.png"
            alt="Phone Number Lookup API Illustration"
            className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
          />
        </div>
      </div>
    </section>
  );
};

export default LookUpHero;
