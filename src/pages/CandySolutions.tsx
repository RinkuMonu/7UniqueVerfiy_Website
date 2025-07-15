export default function CandySolutions() {
  const candyFeatures = [
    {
      title: "Customizable UI",
      description:
        "CANDY lets you fully personalize the interface to reflect your brand identity—meeting both design goals and user journey expectations.",
      icon: "/img/user-experience.png",
    },
    {
      title: "Downtime Protection",
      description:
        "Built with resilience, CANDY ensures continuity with automatic fallbacks—your service stays live even when APIs face interruptions.",
      icon: "/img/secure-data.png",
    },
    {
      title: "Stronger Security",
      description:
        "With real-time threat monitoring, encryption, and MFA, CANDY by 7Unique Verify protects every transaction and user session end to end.",
      icon: "/img/encrypted.png",
    },
    {
      title: "Smoother Operations",
      description:
        "Automate your identity workflows and reduce manual load. CANDY helps boost speed, accuracy, and internal efficiency.",
      icon: "/img/workflow.png",
    },
  ];

  const candyBenefits = [
    "Real-time threat monitoring and protection",
    "Automatic fallback systems for continuity",
    "Multi-factor authentication integration",
    "Customizable brand interface design",
    "Automated workflow optimization",
  ];

  const whyChooseCandy = [
    {
      title: "Competitive Edge Technology",
      description:
        "Stay ahead of the pack with cutting-edge verification solutions that give your business the advantage in the market.",
    },
    {
      title: "Resilient Infrastructure",
      description:
        "Built with automatic fallbacks and downtime protection to ensure your services remain operational at all times.",
    },
    {
      title: "Brand-Focused Customization",
      description:
        "Fully personalize the interface to reflect your brand identity while meeting design goals and user expectations.",
    },
    {
      title: "End-to-End Security",
      description:
        "Comprehensive protection with real-time monitoring, encryption, and multi-factor authentication for every transaction.",
    },
  ];

  return (
    <div className="min-h-screen">


      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl space-y-8">



          {/* Features */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 px-6 py-4">
              <h2 className="flex items-center gap-3 text-2xl font-semibold">
                <div className="rounded-full bg-[#b7603d]/10 p-2">
                  <svg className="h-6 w-6 text-[#b7603d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                Why Stay Ahead of the Pack with
Our CANDY Solution?
              </h2>
            </div>
            <div className="p-8">
              <p className="text-lg text-gray-600 mb-8 text-center">
             Discover how CANDY gives your business the advantage in verification technology
              </p>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {candyFeatures.map((feature, index) => (
                  <div key={index} className="border-2 border-dashed border-gray-200 bg-gradient-to-br from-white to-gray-50 transition-all hover:border-[#b7603d]/30 hover:shadow-md rounded-lg overflow-hidden">
                    <div className="p-6 text-center">
                      <div className="mb-4 flex justify-center">
                        <div className="rounded-full bg-[#b7603d]/10 p-3">
                          <img src={feature.icon} alt={feature.title} className="h-6 w-6 p-50" />
                        </div>
                      </div>
                      <div className="mb-2 text-sm font-semibold text-[#b7603d]">{(index + 1).toString().padStart(2, "0")}</div>
                      <h3 className="mb-3 font-semibold">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>



        </div>
      </div>
    </div>
  );
}