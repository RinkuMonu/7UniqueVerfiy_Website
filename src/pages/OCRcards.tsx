import React from "react";

const OCRCards: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 px-6 py-4">
              <h2 className="flex items-center gap-3 text-2xl font-semibold">
                <div className="rounded-full bg-[#b7603d]/10 p-2">
                  <svg className="h-6 w-6 text-[#b7603d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.25-4.5a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 7.5v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H12"
                    />
                  </svg>
                </div>
                Unlocking the Power of AI-Driven OCR
              </h2>
            </div>



          <p className="text-xl text-gray-600 max-w-2xl p-4">
            Transform your document processing with cutting-edge optical character recognition powered by AI
          </p>


        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5">
          {/* Card 1 */}
          <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
            <div className="relative overflow-hidden h-60">
              <img
                src="/img/AI-Driven OCR/AI-Driven2.png"
                alt="AI-based OCR reduces manual errors"
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-[#b7603d] text-white text-xs font-bold px-3 py-2 rounded-full shadow-md z-10">
                Precision
              </div>
            </div>
            <div className="p-6 pt-5">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Eliminate Manual Errors
              </h3>
              <p className="text-gray-600 mb-4">
                Our AI-powered OCR ensures 99.9% accuracy in document verification, eliminating human errors with consistent, automated processing.
              </p>
             
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
            <div className="relative overflow-hidden h-60">
              <img
                src="/img/AI-Driven OCR/AI-Driven3.png"
                alt="OCR for KYC fraud prevention"
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-[#b7603d] text-white text-xs font-bold px-3 py-2 rounded-full shadow-md z-10">
                Security
              </div>
            </div>
            <div className="p-6 pt-5">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                KYC Fraud Prevention
              </h3>
              <p className="text-gray-600 mb-4">
                Advanced document analysis detects forged IDs with 95% accuracy, strengthening your compliance while reducing fraud risks.
              </p>
            
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
            <div className="relative overflow-hidden h-60">
              <img
                src="/img/AI-Driven OCR/AI-Driven4.png"
                alt="Real-time OCR document processing"
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-[#b7603d] text-white text-xs font-bold px-3 py-2 rounded-full shadow-md z-10">
                Speed
              </div>
            </div>
            <div className="p-6 pt-5">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Instant Processing
              </h3>
              <p className="text-gray-600 mb-4">
                Process documents in real-time with sub-second response times, accelerating workflows while maintaining enterprise-grade accuracy.
              </p>
             
            </div>
          </div>
        </div>

        <div className="mt-16 text-center mb-5">
          <button className="bg-gradient-to-r from-[#b7603d] to-[#d88c6b] text-white font-medium py-3 px-8 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Explore All Features
          </button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default OCRCards;