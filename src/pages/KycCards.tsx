"use client"

import type React from "react"

const KycCards: React.FC = () => {
  const kycFeatures = [
    {
      image: "/img/KYC/KYC2.png",
      alt: "Simplified Identity Verification",
      title: "Simplified Identity Verification",
      description:
        "Our KYC APIs are built for easy integration and real-time validation. Whether you're a developer or enterprise, enjoy a smooth user experience with high-accuracy results.",
    },
    {
      image: "/img/KYC/KYC3.png",
      alt: "Stronger Fraud Prevention",
      title: "Stronger Fraud Prevention",
      description:
        "Detect and block fake identities before they affect your system. 7uniqueverify empowers banks, fintechs, and marketplaces to stay secure and compliant from the start.",
    },
    {
      image: "/img/KYC/KYC4.png",
      alt: "Accurate, Compliant KYC Checks",
      title: "Accurate, Compliant KYC Checks",
      description:
        "Match user details against official Indian government records to ensure accurate identity verification—fully compliant with digital onboarding norms and legal standards.",
    },
  ]

  return (
    <div className="min-h-screen">


      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl space-y-8">
          {/* Main KYC Features Section */}
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
                KYC APIs: The Smarter Way to Authenticate Identities

              </h2>
            </div>
            <div className="p-8">

              <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">
                {kycFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className={`bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl border border-gray-100 hover:border-[#b7603d]/30 ${index === 2 ? "md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0" : ""
                      }`}
                  >
                    <div className="relative mb-4">
                      <img
                        src={feature.image || "/placeholder.svg"}
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
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        )}
                        {index === 1 && (
                          <svg className="h-5 w-5 text-[#b7603d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          </svg>
                        )}
                        {index === 2 && (
                          <svg className="h-5 w-5 text-[#b7603d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
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
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      )}
                      {index === 1 && (
                        <svg className="h-5 w-5 text-[#b7603d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                          />
                        </svg>
                      )}
                      {index === 2 && (
                        <svg className="h-5 w-5 text-[#b7603d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.25-4.5a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 7.5v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H12"
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

export default KycCards
