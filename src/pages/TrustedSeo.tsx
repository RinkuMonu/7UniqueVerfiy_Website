import { Key } from "react";

export default function TrustedSeo({ data }: any) {
  return (
    <section className="py-10 px-5 bg-gradient-to-br from-[#b7603d] via-[#c87a5d] to-[#9f4a2a] text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-white"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-white"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
            {data?.badge || "Trust & Security"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {data?.title || "Why You Can Trust Us to Deliver Bank Account Verification API"}
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/80">
            {data?.subtitle || "Secure, reliable, and lightning-fast verification solutions built for modern businesses"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {data?.highlights?.map((highlight: { icon: any; text: any; }, index: Key | null | undefined) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:shadow-xl"
            >
              <div className="flex items-start mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 mr-4 group-hover:bg-white/30 transition-colors">
                  {highlight.icon || <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>}
                </div>
              </div>
              <p className="text-lg leading-relaxed text-white/90" dangerouslySetInnerHTML={{ __html: highlight.text }} />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href={data?.button?.link || "/contact-us"}>
            <button className="px-8 py-3 bg-white text-[#b7603d] font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl">
              {data?.button?.text || "Get Started Today"}
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
