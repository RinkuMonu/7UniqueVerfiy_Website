import { Routes, Route, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Services from "../pages/Services";
import ContactUsPage from "./contact-us/page";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "../components/Footer";
import BlogPage from "./blog/page";
import BlogDetail from "./blog/BlogDetails";
import ScrollToTop from "../components/ScrollToTop";
import MediaArticles from "./media-articels/page";
import ArticleDetail from "./media-articels/ArticleDetail";
import CandyPage from "./candy/page";
import KycPage from "./kyc/page";
import KybPage from "./kyb/page";
import FraudDetection from "./fraud-detection/page";
import PhoneLookUpPage from "./phone-number-lookup/page";
import FinancialCheckPage from "./financial-checks/page";
import EmployeeVarificationPage from "./employee-verification/page";
import OCRPage from "./ocr/page";
import UtilitiesPage from "./utilities/page";
import CrimeCheckAPIPage from "./crime-check-api/page";
import BankAccountVerificationPage from "./bank-account-verification/page";
import AadhaarVerificationPage from "./aadhaar-verification/page";
import PANVerificationPage from "./pan-verification/page";
import CKYCSearchPage from "./ckyc-search-download/page";
import PassportVerificationPage from "./passport-verification/page";
import DrivingLicenseVerificationPage from "./driving-license-verification/page";
import RCVerificationPage from "./rc-verification/page";
import VoterIDVerificationPage from "./voter-id-verification/page";
import MCAVerificationPage from "./mca-verification/page";
import MobileVerificationAPIPage from "./mobile-verification-api/page";
import DocumentVerificationPage from "./document-verification/page";
import UserPage from "./user/page";
import EmailAuthenticationPage from "./email-authentication/page";
import LivenessCheckAPIPage from "./liveness-check-api/page";
import OCRValidationPage from "./ocr-validation/page";
import WhatsappVerificationPage from "./whatsapp-verification/page";
import FaceMatchAPIPage from "./face-match-api/page";
import ProductsPage from "./products/page";
import DisclaimerPage from "./disclaimer/page";
import TermsConditionsPage from "./terms-and-conditions/page";
import PrivacyPolicyPage from "./privacy-policy/page";
import RefundCancellationPage from "./refund-cancellation/page";
import BuzzingForBharatPage from "./buzzing-for-bharat/page";
import APICatalogPage from "./api-catalog/page";
import PANVerificationPageApi from "./pan-verification-api/page";
import AadhaarVerificationPageAPI from "../pages/Aadhaar-Verification";
import NameMatchPageAPI from "../pages/Name-Match";
import VoterIDVerificationPageAPI from "../pages/voter-id-verification-api";
import DrivingLicenseVerificationPageAPI from "../pages/driving-license-verification-api";
import PassportVerificationPageAPI from "../pages/passport-verification-page-api";
import LivenessCheckAPIPages from "../pages/liveness-check-api";
import CrimeCheckPageAPI from "../pages/crime-check-page-api";
import MCAVerificationPageAPI from "../pages/mca-verification-api";
import MobileVerificationPageAPI from "../pages/mobile-verification-page-api";
import DocumentVerificationPageAPI from "../pages/document-verification-page-api";
import EmailAuthenticationPageAPI from "../pages/email-authentication-page-api";
import OCRValidationPageAPI from "../pages/ocr-validation-page-api";
import WhatsAppVerificationPageAPI from "../pages/whatsapp-verification-page-api";
import FaceMatchPageAPI from "../pages/face-match-page-api";
import CKYCSearchDownloadPageAPI from "../pages/ckyc-search-download-page-api";
import RCVerificationPageAPI from "../pages/rc-verification-page-api";
import VPAUPIIDVerificationPageAPI from "../pages/vpa-upi-id-verification-page-api";
import MobiletoUPIPageAPI from "../pages/mobile-to-upi-page-api";
import BankStatementAnalyzerPageAPI from "../pages/bank-statement-analyzer-page-api";
import IFSCCodeLookupPageAPI from "../pages/ifsc-code-lookup-page-api";
import GSTVerificationPageAPI from "../pages/gst-verification-page-api";
import DINVerificationPageAPI from "../pages/din-verification";
import ShopAndEstablishmentActVerificationPageAPI from "../pages/shop-and-establishment-act-verification-page-api";
import FSSAIVerificationPageAPI from "../pages/fssai-verification-page-api";
import LEIVerificationPageAPI from "../pages/lei-verification-page-api";
import CompanyNameToCINTANPageAPI from "../pages/company-name-to-cin-page-api";
import PANOCRPageAPI from "../pages/pan-ocr-page-api";
import AadhaarOCRPageAPI from "../pages/aadhar-ocr-page-api";
import PassportOCRPageAPI from "../pages/passport-ocr-page-api";
import VoterIDOCRPageAPI from "../pages/voter-id-ocr-page-api";
import ChequeOCRPageAPI from "../pages/cheque-ocr-page-api";
import GSTINOCRPageAPI from "../pages/gstin-ocr-page-api";
import CreditReportCIBILEquifaxPageAPI from "../pages/credit-report-cibil-page-api";
import PANToUANMobileToUANFetchPageAPI from "../pages/pan-uan-mobile-fetch-page-api";
import EPFODetailsPageAPI from "../pages/epfo-detail-page-api";
import ITRComplianceProfilePageAPI from "../pages/itr-compliance-page-api";
import ReverseGeoCodeVerificationPageAPI from "../pages/reverse-geo-code-verification-page-api";
import PincodeInfoPageAPI from "../pages/pincode-info-page-api";
import IMEIValidatorPageAPI from "../pages/imei-validator-page-api";
import CardValidatorPageAPI from "../pages/card-validator-page-api";
import CurrencyExchangePageAPI from "../pages/currency-exchange-page-api";
import TelecomOperatorFetchPageAPI from "../pages/telecom-operator-fetch-page-api";
import { ContextProvider } from "../config/context";
import { Lucky } from "./lucky/page";
import { DigilockerApi } from "./Digilocker/page";

function Placeholder({ name }: { name: string }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">{name} Page</h1>
      <nav className="flex flex-wrap gap-2 text-blue-500">
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/contact-us">Contact Us</Link>
        <Link to="/news-articles">Blog</Link>
        <Link to="/authentications/sign-in">Sign In</Link>
        <Link to="/authentications/sign-up">Sign Up</Link>
        <Link to="/utility/style-guide">Style Guide</Link>
        <Link to="/utility/changelog">Changelog</Link>
        <Link to="/utility/license">License</Link>
      </nav>
    </div>
  );
}

export default function App() {
  return (
    <>
      <ContextProvider>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/candy" element={<CandyPage />} />
          <Route path="/Ai_Dashboard" element={<Lucky />} />
          <Route path="/kyc" element={<KycPage />} />
          <Route path="/kyb" element={<KybPage />} />
          <Route path="/fraud-detection" element={<FraudDetection />} />
          <Route path="/phone-number-lookup" element={<PhoneLookUpPage />} />
          <Route path="/financial-checks" element={<FinancialCheckPage />} />
          <Route
            path="/employee-verification"
            element={<EmployeeVarificationPage />}
          />
          <Route path="/ocr" element={<OCRPage />} />
          <Route path="/utilities" element={<UtilitiesPage />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/media-articles" element={<MediaArticles />} />
          <Route path="/articles/:slug" element={<ArticleDetail />} />
          <Route
            path="/news/:slug"
            element={<Placeholder name="Blog Single" />}
          />
          <Route
            path="/services/:service"
            element={<Placeholder name="Service Single" />}
          />
          <Route
            path="/product/:product"
            element={<Placeholder name="Pricing Single" />}
          />
          <Route
            path="/utility/style-guide"
            element={<Placeholder name="Style Guide" />}
          />
          <Route
            path="/utility/changelog"
            element={<Placeholder name="Changelog" />}
          />
          <Route
            path="/utility/license"
            element={<Placeholder name="License" />}
          />
          <Route path="/404" element={<Placeholder name="404 Not Found" />} />
          <Route
            path="/401"
            element={<Placeholder name="401 Password Protected" />}
          />
          <Route
            path="/authentications/sign-in"
            element={<Placeholder name="Sign In" />}
          />
          <Route
            path="/authentications/sign-up"
            element={<Placeholder name="Sign Up" />}
          />
          <Route
            path="/authentications/forget-password"
            element={<Placeholder name="Forgot Password" />}
          />
          <Route
            path="/authentications/reset-password"
            element={<Placeholder name="Reset Password" />}
          />

          {/* New API Pages */}
          <Route path="/crime-check-api" element={<CrimeCheckAPIPage />} />
          <Route
            path="/bank-account-verification"
            element={<BankAccountVerificationPage />}
          />
          <Route
            path="/aadhaar-verification"
            element={<AadhaarVerificationPage />}
          />
          <Route path="/pan-verification" element={<PANVerificationPage />} />
          <Route path="/ckyc-search-&-download" element={<CKYCSearchPage />} />
          <Route
            path="/passport-verification"
            element={<PassportVerificationPage />}
          />
          <Route
            path="/driving-license-verification"
            element={<DrivingLicenseVerificationPage />}
          />
          <Route path="/rc-verification" element={<RCVerificationPage />} />
          <Route
            path="/voter-id-verification"
            element={<VoterIDVerificationPage />}
          />
          <Route path="/mca-verification" element={<MCAVerificationPage />} />
          <Route
            path="/mobile-verification-api"
            element={<MobileVerificationAPIPage />}
          />

          {/* Additional Services */}
          <Route
            path="/document-verification"
            element={<DocumentVerificationPage />}
          />
          <Route path="/user" element={<UserPage />} />
          <Route
            path="/email-authentication"
            element={<EmailAuthenticationPage />}
          />
          <Route
            path="/liveness-check-api"
            element={<LivenessCheckAPIPage />}
          />
          <Route path="/ocr-validation" element={<OCRValidationPage />} />
          <Route
            path="/whatsapp-verification"
            element={<WhatsappVerificationPage />}
          />
          <Route
            path="/digilocker-api"
            element={<DigilockerApi />}
          />
          <Route path="/face-match-api" element={<FaceMatchAPIPage />} />

          {/* Company Pages */}
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsConditionsPage />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route
            path="/refund-cancellation"
            element={<RefundCancellationPage />}
          />
          <Route
            path="/buzzing-for-bharat"
            element={<BuzzingForBharatPage />}
          />
          {/* API Pages */}
          <Route path="/api-catalog" element={<APICatalogPage />} />
          <Route
            path="/pan-verification-api"
            element={<PANVerificationPageApi />}
          />
          <Route
            path="/aadhaar-verification-api"
            element={<AadhaarVerificationPageAPI />}
          />
          <Route path="/name-match-api" element={<NameMatchPageAPI />} />
          <Route
            path="/liveness-check-api-pages"
            element={<LivenessCheckAPIPages />}
          />
          <Route
            path="/voter-id-verification-api"
            element={<VoterIDVerificationPageAPI />}
          />
          <Route
            path="/driving-license-verification-api"
            element={<DrivingLicenseVerificationPageAPI />}
          />
          <Route
            path="/passport-verification-page-api"
            element={<PassportVerificationPageAPI />}
          />
          <Route
            path="/ckyc-search-download-page-api"
            element={<CKYCSearchDownloadPageAPI />}
          />
          <Route path="/face-match-api" element={<FaceMatchAPIPage />} />
          <Route path="/crime-check-page-api" element={<CrimeCheckPageAPI />} />
          <Route
            path="/mca-verification-api"
            element={<MCAVerificationPageAPI />}
          />
          <Route
            path="/mobile-verification-page-api"
            element={<MobileVerificationPageAPI />}
          />
          <Route
            path="/document-verification-page-api"
            element={<DocumentVerificationPageAPI />}
          />
          <Route
            path="/email-authentication-page-api"
            element={<EmailAuthenticationPageAPI />}
          />
          <Route
            path="/ocr-validation-page-api"
            element={<OCRValidationPageAPI />}
          />
          <Route
            path="/whatsapp-verification-page-api"
            element={<WhatsAppVerificationPageAPI />}
          />
          <Route path="/face-match-page-api" element={<FaceMatchPageAPI />} />
          <Route
            path="/rc-verification-page-api"
            element={<RCVerificationPageAPI />}
          />
          <Route
            path="/vpa-upi-id-verification-page-api"
            element={<VPAUPIIDVerificationPageAPI />}
          />
          <Route
            path="/mobile-to-upi-page-api"
            element={<MobiletoUPIPageAPI />}
          />
          <Route
            path="/bank-statement-analyzer-page-api"
            element={<BankStatementAnalyzerPageAPI />}
          />
          <Route
            path="/ifsc-code-lookup-page-api"
            element={<IFSCCodeLookupPageAPI />}
          />
          <Route
            path="/gst-verification-page-api"
            element={<GSTVerificationPageAPI />}
          />
          <Route
            path="/din-verification-page-api"
            element={<DINVerificationPageAPI />}
          />
          <Route
            path="/shop-and-establishment-act-verification-page-api"
            element={<ShopAndEstablishmentActVerificationPageAPI />}
          />
          <Route
            path="/fssai-verification-page-api"
            element={<FSSAIVerificationPageAPI />}
          />
          <Route
            path="/lei-verification-page-api"
            element={<LEIVerificationPageAPI />}
          />
          <Route
            path="/company-name-to-cin-page-api"
            element={<CompanyNameToCINTANPageAPI />}
          />
          <Route path="/pan-ocr-page-api" element={<PANOCRPageAPI />} />
          <Route path="/aadhar-ocr-page-api" element={<AadhaarOCRPageAPI />} />
          <Route
            path="/driving-license-verification-page-api"
            element={<DrivingLicenseVerificationPageAPI />}
          />
          <Route
            path="/passport-ocr-page-api"
            element={<PassportOCRPageAPI />}
          />
          <Route
            path="/voter-id-ocr-page-api"
            element={<VoterIDOCRPageAPI />}
          />
          <Route path="/cheque-ocr-page-api" element={<ChequeOCRPageAPI />} />
          <Route path="/gstin-ocr-page-api" element={<GSTINOCRPageAPI />} />
          <Route
            path="/credit-report-cibil-page-api"
            element={<CreditReportCIBILEquifaxPageAPI />}
          />
          <Route
            path="/pan-uan-mobile-fetch-page-api"
            element={<PANToUANMobileToUANFetchPageAPI />}
          />
          <Route
            path="/epfo-detail-page-api"
            element={<EPFODetailsPageAPI />}
          />
          <Route
            path="/itr-compliance-page-api"
            element={<ITRComplianceProfilePageAPI />}
          />
          <Route
            path="/reverse-geo-code-verification-page-api"
            element={<ReverseGeoCodeVerificationPageAPI />}
          />
          <Route
            path="/pincode-info-page-api"
            element={<PincodeInfoPageAPI />}
          />
          <Route
            path="/imei-validator-page-api"
            element={<IMEIValidatorPageAPI />}
          />
          <Route
            path="/card-validator-page-api"
            element={<CardValidatorPageAPI />}
          />
          <Route
            path="/currency-exchange-page-api"
            element={<CurrencyExchangePageAPI />}
          />
          <Route
            path="/telecom-operator-fetch-page-api"
            element={<TelecomOperatorFetchPageAPI />}
          />

          <Route path="*" element={<Placeholder name="404 Not Found" />} />
        </Routes>
        <Footer />
      </ContextProvider>
    </>
  );
}
