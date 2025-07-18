import SEO from "../app/Helmet/helment";
import { useContext } from "react";
import { ContextData } from "../config/context";
import { SEOData } from "../type";
export default function CandyHero() {
  const { seo } = useContext(ContextData) as { seo: SEOData };
  return (
    <>
      <SEO seo={seo} />
      <section
        className="w-full bg-cover bg-center min-h-screen flex items-center"
        style={{ backgroundImage: "url('/img/bg (2).png')" }}
      >
        <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left text section */}
          <div className="md:w-2/3 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              CANDY – Smart IDaaS by 7Unique Verify
            </h1>
            <p className="text-lg text-white mb-4">
              Transform identity verification with CANDY, an AI-powered IDaaS solution by 7Unique Verify—designed for Indian businesses.
            </p>
            <p className="mb-4 text-white">
              As a future-ready Identity Gateway, CANDY offers fully customizable flows and seamless compliance, powered by <strong>100+ verification APIs</strong>.
            </p>
            <p className="mb-4 text-white">
              With a no-code backend, CANDY makes integration simple—ideal for banks, NBFCs, and HR teams seeking fast and accurate identity validation.
            </p>
            <p className="mb-4 text-white">
              Stay compliant with evolving KYC norms—CANDY automates checks while adapting to your industry-specific requirements.
            </p>
            <p className="mb-6 text-white">
              Boost conversions and cut manual work with smart, scalable ID verification from the house of 7Unique Verify.
            </p>
            <a
              href="#"
              className="inline-block bg-[#b7603d] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#d19983] transition-colors"
            >
              Get Started
            </a>
          </div>


          {/* Right image section */}
          <div className="md:w-1/3 flex justify-center">
            <img
              src="/img/CANDY/CANDY1.png"
              alt="CANDY Hero Banner"
              className="w-[90%] md:w-[120%] max-w-none h-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
}
