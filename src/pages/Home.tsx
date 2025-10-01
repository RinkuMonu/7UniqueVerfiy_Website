import HomeHero from "./HomeHero";
import HomeFeatures from "./HomeFeatures";
import HomeServices from "./HomeServices";
import HomeProcess from "./HomeProcess";
import HomeIntegrations from "./HomeIntegrations";
import HomePricing from "./HomePricing";
import HomeTestimonials from "./HomeTestimonials";
import HomeBlog from "./HomeBlog";
import HomeFAQ from "./HomeFAQ";
import HomeCTA from "./HomeCTA";
import Footer from "../components/Footer";
import SEO from "../app/Helmet/helment";
import { useContext } from "react";
import { ContextData } from "../config/context";
import { SEOData } from "../type";
import Head from "next/head";
export default function Home() {
  const { seo } = useContext(ContextData) as { seo: SEOData };
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.7uniqueverfiy.com/"
    },
    "headline": "Top API Provider in India | Reliable API Integration Services | 7Unique Verify",
    "description": "Looking for a reliable API provider in India? Sevenunique offers secure and scalable API integration services to help your business grow faster with automation.",
    "image": "https://www.7uniqueverfiy.com/ui/home/H1_1.png",
    "author": {
      "@type": "Organization",
      "name": "7Unique Verify",
      "url": "https://www.7uniqueverfiy.com/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "7Unique Verify",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.7uniqueverfiy.com/img/7unique_verify-removebg-preview.png"
      }
    },
    "datePublished": "",
    "dateModified": ""
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
      <SEO seo={seo} />
      <main>
        <HomeHero />
        <HomeFeatures />
        <HomeServices />
        <HomeProcess />
        {/* <HomeIntegrations /> */}
        <HomeTestimonials />

        {/* seo content section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            {/* Header Section */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold  text-[#9c4d2e] mb-4">
                Why partner with us as your verification API provider?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Powerful APIs to Simplify Verification and Compliance
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="max-w-6xl mx-auto">


              {/* Four Content Divs */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Card 1 */}
                <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#b7603d] hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 rounded-full bg-[#b7603d] mr-3"></div>
                    <h4 className="text-xl font-semibold text-gray-800">India's Best API Provider</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed flex-grow">
                    7uniqueverify is India's best API service provider. We provide secure and trusted verification APIs to support businesses in their fight against fraud and to stay vigilant and reliable, providing a wonderful and dependable digital onboarding experience for the customer and client.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#b7603d] hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 rounded-full bg-[#b7603d] mr-3"></div>
                    <h4 className="text-xl font-semibold text-gray-800">Complete Verification Suite</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed flex-grow">
                    We provide a complete suite of Identity Verification Solutions, PAN, Aadhaar, Bank Account, Crime Check, and Address Verification APIs. Our verification service is easy to integrate into an API and has you covered in India with real-time verification no matter how big your business is.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      { name: "PAN", url: "https://www.7uniqueverfiy.com/pan-verification" },
                      { name: "Aadhaar", url: "https://www.7uniqueverfiy.com/aadhaar-verification" },
                      { name: "Bank Account", url: "https://www.7uniqueverfiy.com/bank-account-verification" },
                      { name: "Crime Check", url: "https://www.7uniqueverfiy.com/crime-check-api" },
                    ].map((item) => (
                      <a
                        key={item.name}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 bg-[#f8f0ec] text-[#9c4d2e] rounded-full text-sm font-medium hover:bg-[#f0e0d9] transition-colors"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>

                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#b7603d] hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 rounded-full bg-[#b7603d] mr-3"></div>
                    <h4 className="text-xl font-semibold text-gray-800">Tailored KYC Solutions</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed flex-grow">
                    As the leader for <a href="https://www.7uniqueverfiy.com/kyc" className="font-bold underline">KYC Verification APIs</a>  , 7uniqueverify offers tailored solutions for startups, enterprises, fintech platforms, and global businesses. We customize our APIs to enhance security, reduce risk during onboarding, and provide hosted solutions designed for your business's growth.
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {['Startups', 'Enterprises', 'Fintech', 'Global Business'].map((item) => (
                      <div key={item} className="flex items-center">
                        <svg className="w-4 h-4 text-[#b7603d] mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card 4 */}
                <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#b7603d] hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 rounded-full bg-[#b7603d] mr-3"></div>
                    <h4 className="text-xl font-semibold text-gray-800">Reputable & Trustworthy</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed flex-grow">
                    When choosing 7uniqueverify, you are choosing a reputable API company in India. We have combined elite technology, secure frameworks, and trustworthy integration to help you run a safe, compliant, and low-risk operation.
                  </p>
                  <div className="mt-4 flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#9c4d2e]">100%</div>
                      <div className="text-xs text-gray-600">Secure</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#9c4d2e]">24/7</div>
                      <div className="text-xs text-gray-600">Support</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#9c4d2e]">99.9%</div>
                      <div className="text-xs text-gray-600">Uptime</div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </section>

        <HomeFAQ />

        {/* <HomePricing />
     
      <HomeBlog />
      <HomeFAQ />
      <HomeCTA /> */}
        {/* <Footer /> */}
      </main>

    </>
  );
}
