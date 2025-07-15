import React from "react";

const VerificationHero: React.FC = () => {
    return (
        <section
            className="w-full bg-cover bg-center min-h-screen flex items-center"
            style={{ backgroundImage: "url('/img/bg (2).png')" }}
        >
            <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Left: Text content */}
                <div className="w-full md:w-2/3 text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Employee Background Verification API
                    </h1>
                    <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
                        Hire Trusted Candidates with Confidence — Power Your HR with Seamless Verification
                    </h2>
                    <p className="text-lg mb-4 text-white">
                        Step into the future of secure hiring with our advanced background verification API. As a trusted BGV API provider, we empower businesses to screen employees quickly, accurately, and with complete reliability.
                    </p>
                    <p className="mb-4 text-white">
                        In today’s competitive landscape, hiring the wrong candidate can be costly. Our Employee Background Check API ensures you make smart hiring decisions by delivering real-time, verified employment and identity data.
                    </p>
                    <p className="mb-6 text-white">
                        Ready to take control of your hiring process? Our solution offers unmatched accuracy, compliance, and automation — allowing HR teams to conduct thorough background verifications with minimal effort. Build a trusted team, faster and smarter.
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
                        src="/img/Employee Background Verification API/Employee1.png"
                        alt="Background Verification Illustration"
                        className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
                    />
                </div>
            </div>
        </section>
    );
};

export default VerificationHero;
