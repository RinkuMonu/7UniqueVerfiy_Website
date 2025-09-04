import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { Link } from "react-router-dom";

import { asset } from "../lib/asset";
import "./homeTestimonials.css";

export default function HomeHero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-out",
    });
  }, []);

  return (
    <section className="relative pb-0 md:pb-10 bg-gradient-to-b from-white to-[#faf6f4] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#b7603d]/10 blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 rounded-full bg-[#b7603d]/5 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-[#b7603d]/5 blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:pt-16 md:pt-20 lg:pt-24 flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Headline and CTA */}
        <div className="w-full lg:w-1/2 flex flex-col text-left space-y-8">
          <div className="space-y-6" data-aos="fade-right" data-aos-delay="100">
            <h1 className="font-extrabold text-[#2a2a2a] text-4xl sm:text-5xl md:text-[45px] lg:text-[55px] leading-tight">
              <span className="text-[#b7603d]">India's</span> reliable API hub
              for all your KYC &{" "}
              <span className="relative inline-block">
                <span className="relative z-10">verification requirements</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#b7603d]/30"
                  viewBox="0 0 200 20"
                >
                  <path
                    d="M0,10 Q50,5 100,10 T200,10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="12"
                  />
                </svg>
              </span>
            </h1>
            <p className="text-[#6b6b6b] text-lg md:text-xl leading-relaxed tracking-wide max-w-lg">
              Easily verify more with PAN, Aadhaar, bank, GST, EPFO, and our
              safe and sharp API suits. A user-friendly dashboard, real-time
              results, and simple integration are available from one place.
            </p>
          </div>

          <div
            className="flex flex-row gap-4 sm:gap-6 w-full"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Link
              to="/about-us"
              className="relative inline-flex items-center justify-center px-4 sm:px-8 py-2 sm:py-4 overflow-hidden text-lg font-bold rounded-lg group transition-all duration-300 hover:scale-[1.02]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#b7603d] to-[#d19983] rounded-lg"></span>
              <span className="absolute inset-0.5 bg-[#b7603d] rounded-md transition-all duration-300 group-hover:bg-[#9c4f32]"></span>
              <span className="relative z-10 text-white">Know More</span>
              <svg
                className="ml-2 relative z-10 w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </Link>
            <Link
              to="/contact-us"
              className="relative inline-flex items-center justify-center px-4 sm:px-8 py-2 sm:py-4 overflow-hidden text-lg font-bold rounded-full group transition-all duration-300 hover:scale-[1.02]"
            >
              <span className="absolute inset-0 border-2 border-[#b7603d] rounded-full transition-all duration-300 group-hover:border-[#9c4f32]"></span>
              <span className="text-[#b7603d] transition-all duration-300 group-hover:text-[#9c4f32]">
                Contact Us
              </span>
              <svg
                className="ml-2 w-5 h-5 text-[#b7603d] transition-all duration-300 group-hover:text-[#9c4f32] group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
            </Link>
          </div>

          {/* Stats section */}
          <div
            className="grid grid-cols-3 sm:grid-cols-3 gap-4 mt-8"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {[
              { value: "10K+", label: "Businesses Served" },
              { value: "24/7", label: "Support" },
              { value: "99.9%", label: "Uptime" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow-sm border border-gray-100"
              >
                <p className="text-2xl font-bold text-[#b7603d]">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Hero Image with animations */}
        <div
          className="w-full lg:w-1/2 relative flex justify-center lg:justify-end"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div className="relative max-w-md xl:max-w-lg">
            {/* Floating elements */}
            <div
              className="absolute -top-8 -left-8 w-24 h-24 rounded-full bg-[#b7603d]/10 animate-float"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute -bottom-8 -right-8 w-20 h-20 rounded-full bg-[#b7603d]/10 animate-float"
              style={{ animationDelay: "1s" }}
            ></div>

            {/* Main image with floating animation */}
            <div
              className="relative animate-float"
              style={{ animationDelay: "0.2s" }}
            >
              <img
                 src="/ui/home/H1_1.png"
                alt="Hero visual with businesswoman and VOIP"
                className="relative z-10 w-full h-auto object-contain"
              />
              {/* Decorative border */}
              <div className="absolute inset-0 border-4 border-[#b7603d]/20 rounded-3xl transform rotate-2 translate-x-2 translate-y-2"></div>
            </div>

            {/* Floating vector elements */}
            <svg
              className="absolute top-1/4 -left-10 w-20 h-20 text-[#b7603d]/20 animate-spin-slow"
              viewBox="0 0 100 100"
              style={{ animationDirection: "reverse" }}
            >
              <path
                d="M50,10 Q70,20 90,50 Q70,80 50,90 Q30,80 10,50 Q30,20 50,10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            <svg
              className="absolute bottom-1/4 -right-10 w-24 h-24 text-[#b7603d]/20 animate-spin-slow"
              viewBox="0 0 100 100"
            >
              <path
                d="M20,50 Q35,20 50,20 Q65,20 80,50 Q65,80 50,80 Q35,80 20,50"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Trusted Companies Section (unchanged) */}
     <div className="relative z-10 border-t border-b border-gray-200 bg-[#f7fbff]">
  <div className="w-full mx-auto px-6 sm:px-8 lg:px-12">
    <div className="flex flex-col sm:flex-row items-center sm:items-stretch border-r border-gray-200">
      <div className="w-full sm:w-48 border-b sm:border-b-0 sm:border-r border-gray-200 py-6 flex items-center justify-center sm:justify-start">
        <p className="text-gray-700 text-[13px] leading-5 font-normal text-center sm:text-left max-w-[120px]">
          Trusted by high-
          <br />
          growth Companies
          <br />
          and investors
        </p>
      </div>
      <div
        className="relative w-full sm:flex-1 overflow-hidden py-6 flex"
        aria-label="Trusted companies slider"
      >
        <div
          className="flex space-x-12 whitespace-nowrap animate-marquee"
          style={{ animation: "marquee 20s linear infinite" }}
        >
          <div className="flex items-center space-x-2 flex-shrink-0">
            <img
              alt="Sisyphus company logo with green geometric shapes"
              className="h-10 w-10"
              src={asset("img/logo/cloth.jpg")}
            />
            <span className="font-semibold text-gray-900 text-[15px] leading-6">
              Seven Unique Branded Cloth
            </span>
          </div>
          <div className="flex items-center space-x-2 flex-shrink-0">
            <img
              alt="Capsule company logo with two overlapping blue circles"
              className="h-6 w-6"
              src={asset("img/logo/FINUNIQUE-LOGO.png")}
            />
            <span className="font-semibold text-gray-900 text-[15px] leading-6">
              Finunique
            </span>
          </div>
          <div className="flex items-center space-x-2 flex-shrink-0">
            <img
              alt="Lightbox company logo with black cube icon"
              className="h-6 w-6"
              src={asset("img/logo/digi.png")}
            />
            <span className="font-semibold text-gray-900 text-[15px] leading-6">
              DigiHub
            </span>
          </div>
          <div className="flex items-center space-x-2 flex-shrink-0">
            <img
              alt="Luminous company logo with green wavy lines"
              className="h-6 w-20"
              src={asset("img/logo/finunique-rummy-logo.png")}
            />
            <span className="font-semibold text-gray-900 text-[15px] leading-6">
              Finunique Rummy
            </span>
          </div>
          <div className="flex items-center space-x-2 flex-shrink-0">
            <img
              alt="Layers company logo with purple layered shapes"
              className="h-6 w-6"
              src={asset("img/logo/ABDKS-LOGO.png")}
            />
            <span className="font-semibold text-gray-900 text-[15px] leading-6">
              ABDKS
            </span>
          </div>
          <div className="flex items-center space-x-2 flex-shrink-0">
            <img
              alt="Sisyphus company logo with green geometric shapes"
              className="h-6 w-20"
              src={asset("img/logo/LOGO.png")}
            />
            <span className="font-semibold text-gray-900 text-[15px] leading-6">
              Edusphere
            </span>
          </div>
          <div className="flex items-center space-x-2 flex-shrink-0">
            <img
              alt="Sisyphus company logo with green geometric shapes"
              className="h-10 w-10"
              src={asset("img/logo/THE-BOOK-STORE.png")}
            />
            <span className="font-semibold text-gray-900 text-[15px] leading-6">
              The Book Store
            </span>
          </div>
          <div className="flex items-center space-x-2 flex-shrink-0">
            <img
              alt="Capsule company logo with two overlapping blue circles"
              className="h-10 w-10"
              src={asset("img/logo/Dentel.jpg")}
            />
            <span className="font-semibold text-gray-900 text-[15px] leading-6">
              Seven Unique Dentel
            </span>
          </div>
          <div className="flex items-center space-x-2 flex-shrink-0">
            <img
              alt="Lightbox company logo with black cube icon"
              className="h-10 w-20"
              src={asset("img/logo/real-estate_1.png")}
            />
            <span className="font-semibold text-gray-900 text-[15px] leading-6">
              Seven Unique Real State
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Add these keyframes to your global CSS */}
      {/* <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style> */}
    </section>
  );
}
