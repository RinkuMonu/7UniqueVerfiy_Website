import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const navLinks = [
  {
    to: "/product",
    label: "Product",
    dropdown: true,
  },
  { to: "/home", label: "Home" },
  { to: "/blog", label: "Blog" },
  { to: "/media-articles", label: "Media & Article" },
  { to: "/contact-us", label: "Contact Us" },
];

export default function Navbar() {
  const location = useLocation();
  const [hovered, setHovered] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const isActive = (path: string) => location.pathname.startsWith(path);

  const productItems = [
    { icon: "bi bi-person-bounding-box", title: "CANDY", to: "/candy" },
    { icon: "bi bi-person-vcard-fill", title: "KYC", to: "/kyc" },
    { icon: "bi bi-person-rolodex", title: "KYB", to: "/kyb" },
    { icon: "bi bi-person-fill-slash", title: "Fraud Detection", to: "/fraud-detection" },
    { icon: "bi bi-check2-circle", title: "Phone Number Lookup", to: "/phone-number-lookup" },
    { icon: "bi bi-check2-all", title: "Financial Checks", to: "/financial-checks" },
    { icon: "bi bi-person-check", title: "Employee Background Verification", to: "/employee-verification" },
    { icon: "bi bi-person-lock", title: "AI Driven OCR Software", to: "/ocr" },
    { icon: "bi bi-bezier", title: "Utilities", to: "/utilities" },
  ];
  
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-16 py-6 flex items-center justify-between relative">
        {/* Logo */}
        <Link
          to="/home"
          className="flex items-center gap-2 font-bold text-xl text-[#373533]"
        >
          <img src="/img/7unique_verify-removebg-preview.png" alt="7unique Logo" className="w-50 h-10" />
        </Link>

        {/* Hamburger for Mobile */}
        <button
          className={`md:hidden text-2xl text-[#373533] transition duration-200 ${
            menuOpen ? "text-[#b7603d] rotate-90" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i
            className={`fas ${
              menuOpen ? "bi bi-chevron-bar-right" : "bi bi-layout-sidebar-inset"
            }`}
          ></i>
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            menuOpen ? "block hamburgerMenu active" : "hidden"
          } md:flex gap-8 items-start md:items-center absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent md:shadow-none shadow-md transition-all duration-300 p-4 md:p-0 z-50`}
        >
          {navLinks.map((link) => (
            <li
              key={link.to}
              className="group relative"
              onMouseEnter={() => !menuOpen && setHovered(link.to)}
              onMouseLeave={() => !menuOpen && setHovered(null)}
            >
              {link.dropdown ? (
                <>
                  <div
                    className={`font-medium text-base flex items-center gap-1 cursor-pointer hover:text-[#b3765e] transition-colors ${
                      isActive(link.to) ? "text-[#b7603d]" : "text-[#373533]"
                    }`}
                    onClick={() => {
                      if (menuOpen) {
                        setHovered(hovered === link.to ? null : link.to);
                      }
                    }}
                  >
                    {link.label}
                    <i
                      className={`fa-solid ${
                        hovered === link.to ? "bi bi-chevron-up" : "bi bi-chevron-down"
                      } text-xs`}
                    ></i>
                  </div>

                  {/* Mega Menu - Now simplified vertical layout */}
                  <div
                    className={`${
                      hovered === link.to ? "block" : "hidden"
                    } absolute md:left-0 bg-white rounded-md shadow-lg z-40 transition-all duration-200 ${
                      menuOpen ? "relative w-full mt-3" : "w-[250px]"
                    }`}
                  >
                    <div className="p-4 space-y-3">
                      {productItems.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.to}
                          className="flex items-center gap-3 cursor-pointer no-underline hover:bg-gray-100 p-2 rounded"
                          onClick={() => setMenuOpen(false)}
                        >
                          <div className="bg-[#fffcfb] text-[#b7603d] text-lg flex justify-center items-center w-7 h-7 rounded-sm border border-[#b35530]">
                            <i className={item.icon}></i>
                          </div>
                          <span className="text-sm font-medium text-black">
                            {item.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  to={link.to}
                  className={`block py-2 font-medium text-base hover:text-[#b3765e] transition-colors ${
                    location.pathname === link.to ? "text-[#b7603d]" : "text-[#373533]"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}

          {/* CTA Button (Mobile version) */}
          <li className="block md:hidden mt-3">
            <Link
              to="/pricing"
              className="block text-center bg-[#b7603d] text-white font-semibold rounded px-6 py-2 shadow hover:bg-[#b3765e] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </Link>
          </li>
        </ul>

        {/* CTA Button (Desktop version) */}
        <Link
          to="/pricing"
          className="hidden md:inline bg-[#b7603d] text-white font-semibold rounded px-6 py-2 ml-6 shadow hover:bg-[#b3765e] transition-colors"
        >
          Get Started
        </Link>
      </nav>
    </header>
  );
}