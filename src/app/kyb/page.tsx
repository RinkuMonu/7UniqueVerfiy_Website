import KybHero from "../../pages/KybHero";
import KybCards from "../../pages/KybCards";
import KybFeatures from "../../pages/KybFeatures";
import APIsUnderKyb from "../../pages/KybAPIs";
import HomeFAQ from "../../pages/HomeFAQ";
import SEO from "../Helmet/helment";
import { useContext } from "react";
import { ContextData } from "../../config/context";
import { SEOData } from "../../type";

export default function KybPage() {
  const { seo } = useContext(ContextData) as { seo: SEOData };
  return (
    <>
      <SEO seo={seo} />
      <KybHero></KybHero>
      <KybCards></KybCards>
      <KybFeatures></KybFeatures>
      <APIsUnderKyb></APIsUnderKyb>
      <HomeFAQ></HomeFAQ>
    </>
  );
}