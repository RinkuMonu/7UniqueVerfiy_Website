"use client"

import React from "react"

const UtilitiesCards: React.FC = () => {
  const utilitiesFeatures = [
    {
      image: "/img/Utilities/Utilities2.png",
      alt: "Currency Exchange API",
      title: "Currency Exchange API",
      description: "Access real-time and historical foreign exchange rates with 7Unique Verify's Currency Exchange API. Ideal for global pricing, invoicing, and accounting — fast, secure, and accurate.",
    },
    {
      image: "/img/Utilities/Utilities3.png",
      alt: "Comprehensive Risk Assessment",
      title: "Comprehensive Risk Assessment",
      description: "Make smarter, safer decisions with our integrated Risk Assessment module. Evaluate the credibility and compliance of customers, vendors, or partners before onboarding — reducing fraud and enhancing trust in every transaction.",
    },
    {
      image: "/img/Utilities/Utilities4.png",
      alt: "Smart Data Validation",
      title: "Smart Data Validation",
      description: "Instantly verify critical data such as IMEI numbers, user identities, or transaction details. 7Unique Verify's validation tools help reduce fraud and improve compliance across systems.",
    },
  ]

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl space-y-8">
          {/* Main Utilities Features Section */}
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
                Explore the Dynamic Capabilities of 7Unique Verify's Utilities API
              </h2>
            </div>
            <div className="p-8">
              <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">
                {utilitiesFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className={`bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl border border-gray-100 hover:border-[#b7603d]/30 ${
                      index === 2 ? "md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0" : ""
                    }`}
                  >
                    <div className="relative mb-4">
                      <img
                        src={feature.image}
                        alt={feature.alt}
                        className="w-full h-48 object-cover mb-4 rounded-lg"
                      />
                      <div className="absolute top-2 right-2 bg-white/90 p-2 rounded-full shadow-md">
                        {index === 0 && (
                          <svg className="h-5 w-5 text-[#b7603d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        )}
                        {index === 1 && (
                          <svg className="h-5 w-5 text-[#b7603d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        )}
                        {index === 2 && (
                          <svg className="h-5 w-5 text-[#b7603d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                    <div className="mb-2 text-sm font-semibold text-[#b7603d] flex items-center justify-center gap-2">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                        />
                      </svg>
                      {(index + 1).toString().padStart(2, "0")}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center justify-center gap-2">
                      {index === 0 && (
                        <svg className="h-5 w-5 text-[#b7603d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      )}
                      {index === 1 && (
                        <svg className="h-5 w-5 text-[#b7603d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      )}
                      {index === 2 && (
                        <svg className="h-5 w-5 text-[#b7603d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                          />
                        </svg>
                      )}
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UtilitiesCards