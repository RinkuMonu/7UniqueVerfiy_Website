import React from "react";
import { Link } from "react-router-dom";

const OCRHero: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#fddfd3] to-[#fae2c7] min-h-screen flex items-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#e4ad98] rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-amber-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left: Text content */}
        <div className="w-full lg:w-1/2 text-[#c79784] space-y-6">
          {/* <div className="inline-block bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <p className="text-sm font-medium text-[#b7603d]">AI-POWERED DOCUMENT VERIFICATION</p>
          </div> */}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            AI-Powered OCR Document Verification API
            {/* Transform Documents Into <span className="text-[#b7603d]">Structured Data</span> Instantly */}
          </h1>


          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-5 h-5 rounded-full bg-gray-500 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <p className="ml-3 text-[#6e6d6d]">
                Convert documents into verified data instantly — trusted for compliance and onboarding across India.
              </p>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-5 h-5 rounded-full bg-gray-500 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <p className="ml-3 text-[#6e6d6d]">
                Our intelligent OCR API extracts structured data from Aadhaar, PAN, passports, invoices, and more with up to 99.8% accuracy.
              </p>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-5 h-5 rounded-full bg-gray-500 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <p className="ml-3 text-[#6e6d6d]">
                Reduce manual work and accelerate your KYC, banking, HR, and legal processes.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to={'/contact-us'}
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-[#b7603d] rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started for Free
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
            <Link to={'https://7uniqueverify-njzw.readme.io/reference/post_api-verify-bankverify#/'}
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-[#a16952] bg-transparent border border-gray-400 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              View API Documentation
            </Link>
          </div>

          <div className="pt-6 flex items-center space-x-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((item) => (
                <img
                  key={item}
                  src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item + 20}.jpg`}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-gray-800"
                />
              ))}
            </div>
            <div>
              <p className="text-sm text-gray-500">Trusted by 500+ companies worldwide</p>
              <div className="flex space-x-1 mt-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
                <span className="text-xs text-gray-600 ml-1">5.0 (200+ reviews)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <div className="relative w-full max-w-xl">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-gray-500 rounded-full filter blur-3xl opacity-20"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>

            <div className="relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-[#b36648] shadow-2xl">
              <img
                src="/img/AI-Driven OCR/AI-Driven1.png"
                alt="OCR API Illustration"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#855744] to-transparent p-6">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <p className="text-white font-medium">Real-time document processing</p>
                  <div className="flex items-center mt-2">
                    <div className="w-3 h-3 bg-[#d46134] rounded-full mr-2 animate-pulse"></div>
                    <p className="text-sm text-gray-300">Extracting data from uploaded document...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OCRHero;