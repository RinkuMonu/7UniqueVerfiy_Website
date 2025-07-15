import React from "react";

const FraudPrevention: React.FC = () => {
  return (
    <section className="bg-white pb-10 pt-8 px-4 md:px-8 lg:px-20">
      <div className="w-full mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left: Content */}
        <div className="w-full lg:w-1/2 order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Smarter <span className="text-[#b7603d]">Fraud Prevention</span> Starts with 7Unique Verify
          </h2>

          <p className="text-gray-600 mb-4">
            Stay ahead of fraud with 7Unique Verify’s advanced API ecosystem. Whether you're screening new customers, validating transactions, or monitoring suspicious activity, our APIs deliver real-time insights that empower faster and safer decisions.
          </p>

          <p className="text-gray-600">
            From financial institutions to fintech startups, our fraud prevention APIs scale with your business and integrate seamlessly into existing systems—backed by automation, data intelligence, and compliance-ready tools.
          </p>
        </div>

        {/* Right: Image */}
        <div className="w-full lg:w-1/2 order-2 flex justify-center">
          <img
            src="/img/Fraud Detection/Fraud Detection6.png"
            alt="Fraud Prevention Illustration"
            className="w-full max-w-md h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default FraudPrevention;
