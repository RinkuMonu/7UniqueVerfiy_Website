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

export default function Home() {
  const { seo } = useContext(ContextData) as { seo: SEOData };
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
    </>
  );
}
