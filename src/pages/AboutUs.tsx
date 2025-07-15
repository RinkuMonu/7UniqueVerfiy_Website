export default function AboutUs() {
  return (
    <main>
      {/* Hero Title */}
      <section className="bg-[#f9fbfb] py-16 px-4 sm:py-20 sm:px-6 section our-process">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#373533] mb-4 sm:mb-5">About Us</h1>
          <p className="text-base sm:text-lg md:text-xl text-[#9c9e99] mb-6 sm:mb-8">
            At 7Unique Verify, we build intelligent API-based identity solutions that help businesses simplify customer verification, KYC, and onboarding—securely and efficiently.
          </p>
          <a
            href="/contact-us"
            className="inline-block px-6 py-2 sm:px-8 sm:py-3 bg-[#b7603d] text-[#373533] font-bold rounded-lg shadow hover:bg-[#d19983] transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Company Offerings/Highlights */}
      <section className="bg-white py-14 px-4 sm:py-16 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#373533] mb-4 sm:mb-5">
              Simplifying Digital Identity for India
            </h2>
            <p className="text-[#595c5c] mb-6 sm:mb-7 text-sm sm:text-base">
              7Unique Verify empowers businesses with secure, scalable identity verification tools—from PAN, Aadhaar, and bank verification to enterprise onboarding APIs. Built for startups, banks, fintechs, and enterprise use cases.
            </p>
            <ul className="space-y-3 text-sm sm:text-base">
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 mr-3 mt-1 rounded-full bg-[#b7603d]" />
                Real-time identity verification with 99.9% accuracy
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 mr-3 mt-1 rounded-full bg-[#b7603d]" />
                Modular APIs built for scale, compliance, and ease
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 mr-3 mt-1 rounded-full bg-[#b7603d]" />
                Responsive support, fast deployment, and plug-and-play setup
              </li>
            </ul>
          </div>
          {/* Right image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=450&q=80"
              alt="Digital KYC platform"
              className="rounded-xl shadow-md w-[280px] sm:w-[320px] md:w-[360px]"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#f9fbfb] py-14 px-4 sm:py-16 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#373533] text-center mb-8 sm:mb-10">
            Why Choose 7Unique Verify?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
            {/* Feature Card */}
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow flex flex-col items-center text-center border border-[#e7e7eb]">
              <img src="https://ext.same-assets.com/1049470090/451744652.svg" alt="Secure" className="mb-4 sm:mb-5 h-8 sm:h-10" />
              <h3 className="font-bold text-md sm:text-lg mb-1 sm:mb-2 text-[#373533]">Secure & Compliant</h3>
              <p className="text-[#595c5c] text-sm sm:text-base">
                We follow strict data protection standards to ensure your verifications are secure and compliant.
              </p>
            </div>
            {/* Feature Card */}
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow flex flex-col items-center text-center border border-[#e7e7eb]">
              <img src="https://ext.same-assets.com/1049470090/60733936.svg" alt="Innovative" className="mb-4 sm:mb-5 h-8 sm:h-10" />
              <h3 className="font-bold text-md sm:text-lg mb-1 sm:mb-2 text-[#373533]">Fast & Future-Ready</h3>
              <p className="text-[#595c5c] text-sm sm:text-base">
                Our no-code-ready APIs and modern infrastructure help you go live faster with confidence.
              </p>
            </div>
            {/* Feature Card */}
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow flex flex-col items-center text-center border border-[#e7e7eb]">
              <img src="https://ext.same-assets.com/1049470090/2604988885.svg" alt="Support" className="mb-4 sm:mb-5 h-8 sm:h-10" />
              <h3 className="font-bold text-md sm:text-lg mb-1 sm:mb-2 text-[#373533]">Expert Support</h3>
              <p className="text-[#595c5c] text-sm sm:text-base">
                From integration to scaling, our dedicated support team is available 24/7 to guide you every step.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
