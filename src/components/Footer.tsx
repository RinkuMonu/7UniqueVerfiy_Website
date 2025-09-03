import { Link, useLocation } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
export default function Footer() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  interface ContactDetails {
    address: string;
    phone: string;
    email: string;
  }

  interface SocialAccount {
    account_link: string;
    icon_class: string;
  }
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const [contactDetails, setContactDetails] = useState<ContactDetails | null>(
    null
  );
  const [socailDetails, setSocailDetails] = useState<SocialAccount[]>([]);

  useEffect(() => {
    const fetchContactDetails = async () => {
      try {
        const [contactDtails, socialLink] = await Promise.all([
          fetch(
            "https://cms.sevenunique.com/apis/contact/get-contact-details.php?website_id=7",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
              },
            }
          ),
          fetch(
            "https://cms.sevenunique.com/apis/social-media/get-social-accounts.php?website_id=7",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
              },
            }
          ),
        ]);
        const contactjson = await contactDtails.json();
        const socialjson = await socialLink.json();
        // console.log("contact", contactjson?.data);
        // console.log("social", socialjson?.data);
        setContactDetails(contactjson?.data);
        setSocailDetails(socialjson?.data);
      } catch (error) {
        console.error("Error fetching contact details:", error);
      }
    };
    fetchContactDetails();
  }, []);
  return (
    <footer
      className="border-t border-[#eaeaea] pt-12 pb-6 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('../../../public/ui/footer/img1_Artboard 1.png')",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-5 gap-5 pb-10">
        {/* Products - moved to first column */}
        <div>
          <h3 className="font-semibold text-black mb-6 text-lg relative pb-2">
            Products
            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#b7603d]"></span>
          </h3>
          <ul className="space-y-2">
            {[
              "Crime Check API",
              "Bank Account Verification",
              "Aadhaar Verification",
              "PAN Verification",
              // "CKYC Search & download",
              "Passport Verification",
              "Driving License Verification",
              "RC Verification",
              "Voter ID Verification",
              "MCA Verification",
              // "Mobile Verification API",
              "Challan verification",
              "Court Case Check",
            ].map((item, index) => {
              const path = `/${item.toLowerCase().replace(/ /g, "-")}`;
              return (
                <li key={index}>
                  <Link
                    to={path}
                    className={`inline-block py-1 text-gray-700 hover:text-[#b7603d] transition-colors duration-300 relative group ${activeLink === path ? "text-[#b7603d]" : ""}`}
                  >
                    {item}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-[#b7603d] transition-all duration-300 ${activeLink === path ? "w-full" : "w-0 group-hover:w-full"}`}
                    ></span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Single Link - second column */}
        <div>
          <h3 className="font-semibold text-black mb-6 text-lg relative pb-2">
            Single Link
            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#b7603d]"></span>
          </h3>
          <ul className="space-y-2">
            {[
              // "Document Verification",
              "User",
              "Email Authentication",
              "Liveness check API",
              // "OCR Validation",
              "Whatsapp Verification",
              "Face Match API",
              "Name Match API",
              // "ITR Profile Summary",
              // "Credit Score API",

              // "Digilocker",
              "Ration Card Verification",
              "Mobile To Fill",
              "Land Verification",
              "Doctor Verification",
              // "Nurse ID Verification",
              "eSign Verification",
              "Digilocker",
            ].map((item, index) => {
              const path = `/${item.toLowerCase().replace(/ /g, "-")}`;
              return (
                <li key={index}>
                  <Link
                    to={path}
                    className={`inline-block py-1 text-gray-700 hover:text-[#b7603d] transition-colors duration-300 relative group ${activeLink === path ? "text-[#b7603d]" : ""}`}
                  >
                    {item}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-[#b7603d] transition-all duration-300 ${activeLink === path ? "w-full" : "w-0 group-hover:w-full"}`}
                    ></span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Resources - fourth column */}
        <div>
          <h3 className="font-semibold text-black mb-6 text-lg relative pb-2">
            Resources
            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#b7603d]"></span>
          </h3>
          <ul className="space-y-2">
            {[
              { name: "Contact Us", path: "/contact-us" },
              { name: "Terms and Conditions", path: "/terms-and-conditions" },
              { name: "Privacy Policy", path: "/privacy-policy" },
              { name: "Refund and Cancellation", path: "/refund-cancellation" },
              {
                name: "Documentation",
                path: "https://7uniqueverify-njzw.readme.io/reference/post_api-verify-bankverify#/",
              },
              { name: "Blog", path: "/blog" },
              { name: "Buzzing for भारत", path: "/buzzing-for-bharat" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`inline-block py-1 text-gray-700 hover:text-[#b7603d] transition-colors duration-300 relative group ${activeLink === item.path ? "text-[#b7603d]" : ""}`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#b7603d] transition-all duration-300 ${activeLink === item.path ? "w-full" : "w-0 group-hover:w-full"}`}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company - third column */}
        <div>
          <h3 className="font-semibold text-black mb-6 text-lg relative pb-2">
            Company
            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#b7603d]"></span>
          </h3>
          <ul className="space-y-2">
            {["Products", "Candy", "Disclaimer"].map((item, index) => {
              const path = `/${item.toLowerCase().replace(/ /g, "-")}`;
              return (
                <li key={index}>
                  <Link
                    to={path}
                    className={`inline-block py-1 text-gray-700 hover:text-[#b7603d] transition-colors duration-300 relative group ${activeLink === path ? "text-[#b7603d]" : ""}`}
                  >
                    {item}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-[#b7603d] transition-all duration-300 ${activeLink === path ? "w-full" : "w-0 group-hover:w-full"}`}
                    ></span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Logo and About - moved to last column (right side) */}
        <div className="col-span-1 md:col-span-1">
          <Link to="/contact-us" className="flex items-center gap-2">
            <img
              src="/img/7unique_verify-removebg-preview.png"
              alt="7Unique Verify Logo"
              className="w-50 h-50"
            />
          </Link>
          <p className="mb-4 leading-relaxed text-sm text-gray-700">
            7Unique Verify is your trusted partner for simplified and fast
            identity verification solutions. Eliminate paperwork, reduce fraud,
            and verify users with ease using our robust API stack.
          </p>

          {/* Support Information */}

          <div className="mb-4">
            <h4 className="font-semibold text-black mb-2 text-md">Support</h4>
            <div className="text-sm text-gray-700 space-y-1">
              {(contactDetails?.address || "").split("|").map((addr, index) => (
                <p
                  key={index}
                  className="flex items-start gap-2 leading-snug text-sm text-gray-800"
                >
                  <FaMapMarkerAlt className="text-[#b7603d] w-4 h-4 mt-0.5 flex-shrink-0" />
                  {addr.trim()}
                </p>
              ))}

              {contactDetails?.phone && (
                <p className="flex items-center gap-2 text-sm text-gray-800">
                  <FaPhoneAlt className="text-[#b7603d] w-4 h-4 mt-0.5 flex-shrink-0" />
                  {contactDetails.phone}
                </p>
              )}

              {(contactDetails?.email || "").split(",").map((email, i) => (
                <a
                  key={i}
                  href={`mailto:${email.trim()}`}
                  className="flex items-center gap-2 text-sm text-gray-800 hover:underline"
                >
                  <FaEnvelope className="text-[#b7603d] w-4 h-4 mt-0.5 flex-shrink-0" />
                  {email.trim()}
                </a>
              ))}
            </div>
          </div>
          {/* Social Icons */}
          <div className="flex gap-3 text-[#b7603d] text-2xl">
            {socailDetails?.map((social, index) => (
              <a
                key={index}
                href={social.account_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
                dangerouslySetInnerHTML={{ __html: social.icon_class }}
              />
            ))}
            {/* <Link
              to="/contact-us"
              aria-label="Facebook"
              className="hover:text-[#d19983] transition-colors duration-300"
            >
              <i className="bi bi-facebook"></i>
            </Link>
            <Link
              to="/contact-us"
              aria-label="LinkedIn"
              className="hover:text-[#d19983] transition-colors duration-300"
            >
              <i className="bi bi-linkedin"></i>
            </Link>
            <Link
              to="/contact-us"
              aria-label="X Twitter"
              className="hover:text-[#d19983] transition-colors duration-300"
            >
              <i className="bi bi-twitter-x"></i>
            </Link>
            <Link
              to="/contact-us"
              aria-label="YouTube"
              className="hover:text-[#d19983] transition-colors duration-300"
            >
              <i className="bi bi-youtube"></i>
            </Link> */}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 border-t border-[#eaeaea] pt-6 text-center text-[#080808] text-sm">
        <span>
          ©️ 2025 7UniqueVerify. A brand of Sevenunique Tech Solutions Pvt.
          Ltd.. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
