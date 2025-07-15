"use client"

import type React from "react"

const CandyCards: React.FC = () => {
  const candyReasons = [
    {
      image: "/img/CANDY/CANDY4.png",
      alt: "Personalised Journey",
      title: "Personalized User Flow: The CANDY Advantage",
      description:
        "CANDY by 7Unique Verify lets you design user experiences that adapt in real-time—offering dynamic, need-based journeys for your users and partners.",
    },
    {
      image: "/img/CANDY/CANDY5.png",
      alt: "Trustworthy Efficiency",
      title: "Real-Time Accuracy: Built to Scale",
      description:
        "CANDY delivers instant, verified results with every API call. It's reliable, scalable, and eliminates manual effort—trusted by modern Indian businesses.",
    },
    {
      image: "/img/CANDY/CANDY6.png",
      alt: "Reliable KYC Verification",
      title: "Hassle-Free KYC: Verified in Seconds",
      description:
        "Say goodbye to bulk errors. With CANDY's smart backend, you get fast KYC checks—saving you time, cost, and manual overhead for good.",
    },
  ]

  return (
    <div className="min-h-screen">


      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl space-y-8">
          {/* Main Reasons Cards Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 px-6 py-4">
              <h2 className="flex items-center gap-3 text-2xl font-semibold">
                <div className="rounded-full bg-[#b7603d]/10 p-2">
                  <svg className="h-6 w-6 text-[#b7603d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                Top Reasons to Choose CANDY by 7UniqueVerify
              </h2>
            </div>
            <div className="p-8">

              <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">
                {candyReasons.map((reason, index) => (
                  <div
                    key={index}
                    className={`bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl border border-gray-100 hover:border-[#b7603d]/30 ${
                      index === 2 ? "md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0" : ""
                    }`}
                  >
                    <div className="relative mb-4">
                      <img
                        src={reason.image || "/placeholder.svg"}
                        alt={reason.alt}
                        className="w-75 h-48  rounded-lg align-self-center"
                      />
                      <div className="absolute top-2 right-2 bg-white/90 p-2 rounded-full shadow-md">
                        {index === 0 && (
                          <svg className="h-5 w-5 text-[#b7603d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        )}
                        {index === 1 && (
                          <svg className="h-5 w-5 text-[#b7603d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        )}
                        {index === 2 && (
                          <svg className="h-5 w-5 text-[#b7603d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
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
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      )}
                      {index === 1 && (
                        <svg className="h-5 w-5 text-[#b7603d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                      )}
                      {index === 2 && (
                        <svg className="h-5 w-5 text-[#b7603d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                      )}
                      {reason.title}
                    </h3>
                    <p className="text-gray-600">{reason.description}</p>
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

export default CandyCards
