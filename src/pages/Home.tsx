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
      <SEO seo={seo} />
      <main>
        <HomeHero />
        <HomeFeatures />
        <HomeServices />
        <HomeProcess />
        {/* <HomeIntegrations /> */}
        <HomeTestimonials />
        <HomeFAQ />
 
        {/* <HomePricing />
     
      <HomeBlog />
      <HomeFAQ />
      <HomeCTA /> */}
        {/* <Footer /> */}
      </main>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
    </>
  );
}
