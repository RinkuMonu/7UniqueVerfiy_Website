import FinancialHero from "../../pages/FinancialHero";
import FinancialCards from "../../pages/FinancialCards";
import FinancialFeatures from "../../pages/FinancialFeatures";
import FinancialChecksAPIs from "../../pages/FinancialAPIs";
import HomeFAQ from "../../pages/HomeFAQ";
export default function FinancialCheckPage() {
  return (
 <>
 <FinancialHero></FinancialHero>
 <FinancialFeatures></FinancialFeatures>
 <FinancialCards></FinancialCards>
 <FinancialChecksAPIs></FinancialChecksAPIs>
 <HomeFAQ></HomeFAQ>
 </>
  );
}