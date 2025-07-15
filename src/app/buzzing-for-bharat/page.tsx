import type React from "react"

const BuzzingForBharatPage: React.FC = () => {
  return (
    <main className="w-full mx-auto px-3 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -left-40 -top-40 w-80 h-80 rounded-full bg-[#b7603d] opacity-5 blur-3xl -z-10"></div>
      <div className="absolute -right-40 bottom-0 w-80 h-80 rounded-full bg-[#b7603d] opacity-5 blur-3xl -z-10"></div>
      <div className="absolute top-1/3 right-10 w-40 h-40 bg-[#b7603d] opacity-5 rounded-full -z-10"></div>

      {/* Hero Section */}
      <section className="text-center all-banner-section mx-auto relative pt-16 pb-1 md:16">
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Buzzing for <span className="text-[#b7603d]">भारत</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed max-w-2xl mx-auto">
            Empowering India's digital transformation with innovative verification solutions.
          </p>
        </div>

        {/* Decorative vector grid */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none -z-10">
          <svg
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full opacity-10"
          >
            <path 
              d="M0 80H160M80 0V160" 
              stroke="#b7603d" 
              strokeWidth="2"
            />
            <circle cx="80" cy="80" r="40" stroke="#b7603d" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Floating decorative dots */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#b7603d] rounded-full opacity-20"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-[#b7603d] rounded-full opacity-20"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-[#b7603d] rounded-full opacity-20"></div>
      </section>

      {/* Content Section */}
      <section className=" mt-5 md:mt-16 space-y-16 relative">
        {/* Diagonal decorative line */}
        <div className="absolute -left-20 top-1/2 w-[200%] h-px bg-[#b7603d] opacity-10 -rotate-45 -z-10"></div>

        {/* Feature 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Digital India Initiative</h3>
            <p className="text-gray-700 mb-4">
              7Unique Verify is proud to be part of India's digital transformation journey. We are committed to supporting
              the Digital India initiative by providing cutting-edge verification and identity solutions that enable
              secure, efficient, and inclusive digital services for all Indians.
            </p>
            <p className="text-gray-700">
              Our technology empowers businesses, government agencies, and financial institutions to build trust in the
              digital ecosystem while ensuring compliance with Indian regulations and standards.
            </p>
          </div>
          <div className="flex justify-center relative">
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#b7603d] opacity-10 rounded-full"></div>
            <img
              src="/img/image/indian-map-floating-smartwatch.png"
              alt="Digital India"
              className="w-full max-w-md h-auto object-contain rounded-lg"
            />
          </div>
        </div>

        {/* Feature 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="order-2 md:order-1 flex justify-center relative">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#b7603d] opacity-10 rounded-full"></div>
            <img
              src="/img/image/robot-handshake-human-background-futuristic-digital-age.png"
              alt="Innovation"
              className="w-full max-w-md h-auto object-contain rounded-lg"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Innovation for Bharat</h3>
            <p className="text-gray-700 mb-4">
              We believe in the power of innovation to solve real-world problems. Our solutions are designed
              specifically for the Indian market, understanding the unique challenges and opportunities in our diverse
              nation.
            </p>
            <p className="text-gray-700">
              From rural areas to metropolitan cities, our APIs and verification services are built to work seamlessly
              across India's varied technological landscape, ensuring that digital services reach every corner of
              Bharat.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="grid md:grid-cols-2 gap-12 items-center bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Empowering Businesses</h3>
            <p className="text-gray-700 mb-4">
              We are committed to empowering Indian businesses of all sizes - from startups to large enterprises - with
              the tools they need to verify identities, prevent fraud, and ensure compliance in the digital age.
            </p>
            <p className="text-gray-700">
              Our mission is to make advanced verification technology accessible and affordable for every business in
              India, contributing to the growth of a secure and trustworthy digital economy.
            </p>
          </div>
          <div className="flex justify-center relative">
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-[#b7603d] opacity-10 rounded-full"></div>
            <img
              src="/img/image/business-leader-standing-arrow-holding-flag-flat-vector-illustration-cartoon-people-training-doing-business-plan-leadership-victory-challenge-concept.png"
              alt="Business Growth"
              className="w-full max-w-md h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#f7f1ef] rounded-xl p-8 md:p-12 mt-16 text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#b7603d] rounded-full opacity-5 -z-10"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#b7603d] rounded-full opacity-5 -z-10"></div>
        
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Join the Digital Revolution</h3>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Be part of India's digital transformation. Partner with 7Unique Verify to build secure, efficient, and inclusive
          digital services that serve all of Bharat.
        </p>
        <a
          href="/contact-us"
          className="inline-block bg-[#b7603d] hover:bg-[#9c4f32] text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          Get Started Today
        </a>
      </section>
    </main>
  )
}

export default BuzzingForBharatPage