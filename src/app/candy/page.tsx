import CandyHero from "../../pages/CandyHero";
import CandySolutions from "../../pages/CandySolutions";
import CandyUseCases from "../../pages/CandyUse";
import CandyWorkflow from "../../pages/CandyWorkflow";
import CandyReasons from "../../pages/CandyCards";
import HomeFAQ from "../../pages/HomeFAQ";
import SEO from "../Helmet/helment";
import { ContextData } from "../../config/context";
import { useContext } from "react";
import { SEOData } from "../../type";



export default function CandyPage() {
  // Type the context data
  const { seo } = useContext(ContextData) as { seo: SEOData };

  return (
    <>
      <SEO seo={seo} />
      <CandyHero />
      <CandySolutions />
      <CandyUseCases />
      <CandyWorkflow />
      <CandyReasons />
      <HomeFAQ />
    </>
  );
}