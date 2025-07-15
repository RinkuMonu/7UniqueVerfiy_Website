import React, { useContext } from "react";
import KycHero from "../../pages/KycHero";
import KycCards from "../../pages/KycCards";
import KycFeatures from "../../pages/KycFeatures";
import APIsUnderKyc from "../../pages/KycAPIs";
import HomeFAQ from "../../pages/HomeFAQ";
import SEO from "../Helmet/helment";
import { ContextData } from "../../config/context";

// Define the type for your SEO data
interface SEOData {
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string;
  canonical_tag?: string;
  og_type?: string;
  og_title?: string;
  og_description?: string;
  og_url?: string;
  og_site_name?: string;
  og_image?: string;
}

// Define the context type
interface AppContext {
  seo: SEOData;
  // Add other context properties if they exist
}

const KycPage: React.FC = () => {
  const { seo } = useContext(ContextData) as AppContext;

  return (
    <>
      <SEO seo={seo} />
      <KycHero />
      <KycCards />
      <KycFeatures />
      <APIsUnderKyc />
      <HomeFAQ />
    </>
  );
};

export default KycPage;