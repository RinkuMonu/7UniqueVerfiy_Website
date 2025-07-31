import FraudDetectionHero from "../../pages/FraudDetection";
import FraudCards from "../../pages/FraudCards";
import FraudFeatures from "../../pages/FraudFeatures";
import FraudPrevention from "../../pages/FraudPrevention";
import FraudIndicatorsAPIs from "../../pages/FraudAPIs";
import HomeFAQ from "../../pages/HomeFAQ";

export default function FraudDetection() {
  return (
    <>
      <FraudDetectionHero></FraudDetectionHero>
      <FraudCards></FraudCards>
      <FraudFeatures></FraudFeatures>
      <FraudPrevention></FraudPrevention>
      <FraudIndicatorsAPIs></FraudIndicatorsAPIs>
      <HomeFAQ></HomeFAQ>
    </>
  );
}
