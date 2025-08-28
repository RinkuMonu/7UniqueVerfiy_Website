import type React from "react"
import SEO from "../Helmet/helment"
import { useContext } from "react";
import { ContextData } from "../../config/context";
import { SEOData } from "../../type";

const BuzzingForBharatPage: React.FC = () => {
  const { seo } = useContext(ContextData) as { seo: SEOData };
  return (
    <>
      <SEO seo={seo} />
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
              Empowering India's digital transformation with real-time, secure verification APIs.
              From Aadhaar to PAN, DigiLocker to Face Match — we help businesses onboard users faster, safer, and fully compliant.
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
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Supporting the Digital India Initiative with Trusted Verification Solutions
              </h3>
              <p className="text-gray-700 mb-4">
                7uniqueverify is proud to contribute to India’s digital transformation. As a key enabler of the Digital India initiative, we offer advanced identity verification APIs, KYC solutions, and digital onboarding tools that support secure, fast, and inclusive access to digital services across the country.

              </p>
              <p className="text-gray-700">
                Our technology empowers businesses, fintech platforms, banks, and government agencies to build trust in the digital ecosystem through Aadhaar verification, PAN validation, and GST-based business checks—all while ensuring full compliance with Indian regulations and data protection laws.
              </p>
              <p className="text-gray-700">
                By enabling real-time verification, we help accelerate Digital India’s goals of transparency, efficiency, and universal digital access.

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
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Innovation for Bharat
              </h3>
              <p className="text-gray-700 mb-4">
                At 7uniqueverify, we believe in India-first innovation—developing solutions that solve real-world problems across every corner of Bharat, from rural villages to bustling metros.

              </p>
              <p className="text-gray-700">
                Our identity verification APIs, KYC solutions, and compliance tools are designed to meet the needs of India’s diverse population, working seamlessly across regional languages, variable internet speeds, and localized tech environments. Whether for financial inclusion, government schemes, or digital onboarding, we ensure that digital services reach every Indian citizen—securely, reliably, and at scale.

              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Empowering Businesses Across India
              </h3>
              <p className="text-gray-700 mb-4">
                At 7uniqueverify, we’re dedicated to empowering Indian businesses—from early-stage startups to large enterprises—with the tools they need to verify identities, prevent fraud, and stay compliant in today’s fast-evolving digital ecosystem.

              </p>
              <p className="text-gray-700">
                Our mission is to make advanced identity verification solutions, eKYC APIs, and compliance automation tools accessible and affordable for every business in India. By supporting secure onboarding and risk management, we help fuel the growth of a trusted, transparent, and digitally empowered economy.

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
            Be a part of India’s digital transformation journey. Partner with 7uniqueverify to create secure, compliant, and inclusive digital services—built to serve every citizen of Bharat.

          </p>
          <a
            href="/contact-us"
            className="inline-block bg-[#b7603d] hover:bg-[#9c4f32] text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            Get Started Today
          </a>
        </section>
      </main>
    </>
  )
}

export default BuzzingForBharatPage