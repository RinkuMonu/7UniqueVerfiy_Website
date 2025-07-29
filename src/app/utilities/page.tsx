import UtilitiesHero from "../../pages/UtilitiesHero";
import UtilitiesCards from "../../pages/UtilitiesCards";
import UtilitiesAPISection from "../../pages/UtilitiesAPIs";
import UtilitiesOverview from "../../pages/UtilitesFeatures";
import HomeFAQ from "../../pages/HomeFAQ";
export default function UtilitiesPage() {
  return (
    <>
      <UtilitiesHero></UtilitiesHero>
      <UtilitiesCards></UtilitiesCards>
      <UtilitiesOverview></UtilitiesOverview>
      <UtilitiesAPISection></UtilitiesAPISection>
      <HomeFAQ></HomeFAQ>
    </>
  );
}
