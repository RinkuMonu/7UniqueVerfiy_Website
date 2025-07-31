import type React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

// Vector graphics for each product (simplified versions)
const productVectors = [
  <svg key="0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z" fill="#B7603D" fillOpacity="0.2"/>
    <path d="M24 33C29.5228 33 34 28.5228 34 23C34 17.4772 29.5228 13 24 13C18.4772 13 14 17.4772 14 23C14 28.5228 18.4772 33 24 33Z" fill="#B7603D" fillOpacity="0.3"/>
    <path d="M24 30C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30Z" fill="#B7603D" fillOpacity="0.4"/>
    <path d="M24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28Z" fill="#B7603D"/>
  </svg>,
  <svg key="1" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 16H16V32H32V16Z" fill="#B7603D" fillOpacity="0.2"/>
    <path d="M28 20H20V28H28V20Z" fill="#B7603D" fillOpacity="0.4"/>
    <path d="M25 23H23V25H25V23Z" fill="#B7603D"/>
  </svg>,
  <svg key="2" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 16H32V24H16V16Z" fill="#B7603D" fillOpacity="0.2"/>
    <path d="M16 24H32V32H16V24Z" fill="#B7603D" fillOpacity="0.4"/>
    <path d="M20 20H28V22H20V20Z" fill="#B7603D"/>
    <path d="M20 28H28V30H20V28Z" fill="#B7603D"/>
  </svg>,
  <svg key="3" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12L36 24L24 36L12 24L24 12Z" fill="#B7603D" fillOpacity="0.2"/>
    <path d="M24 18L30 24L24 30L18 24L24 18Z" fill="#B7603D" fillOpacity="0.4"/>
    <path d="M24 22L26 24L24 26L22 24L24 22Z" fill="#B7603D"/>
  </svg>,
  <svg key="4" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12H36V36H12V12Z" fill="#B7603D" fillOpacity="0.2"/>
    <circle cx="24" cy="24" r="8" fill="#B7603D" fillOpacity="0.4"/>
    <circle cx="24" cy="24" r="4" fill="#B7603D"/>
  </svg>,
  <svg key="5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 24H36" stroke="#B7603D" strokeWidth="2" strokeLinecap="round"/>
    <path d="M24 12V36" stroke="#B7603D" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="24" cy="24" r="6" fill="#B7603D" fillOpacity="0.2"/>
    <circle cx="24" cy="24" r="3" fill="#B7603D" fillOpacity="0.4"/>
  </svg>,
  <svg key="6" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="12" width="24" height="24" rx="4" fill="#B7603D" fillOpacity="0.2"/>
    <rect x="16" y="16" width="16" height="16" rx="2" fill="#B7603D" fillOpacity="0.4"/>
    <rect x="20" y="20" width="8" height="8" rx="1" fill="#B7603D"/>
  </svg>,
  <svg key="7" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12H36V36H12V12Z" stroke="#B7603D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 18H30V30H18V18Z" fill="#B7603D" fillOpacity="0.4"/>
    <path d="M22 22H26V26H22V22Z" fill="#B7603D"/>
  </svg>,
  <svg key="8" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="12" fill="#B7603D" fillOpacity="0.2"/>
    <circle cx="24" cy="24" r="8" fill="#B7603D" fillOpacity="0.4"/>
    <circle cx="24" cy="24" r="4" fill="#B7603D"/>
  </svg>
];

const ProductsPage: React.FC = () => {
  const products = [
    {
      title: "CANDY - Identity as a Service",
      description: "AI-powered identity verification platform with customizable workflows and 100+ identity checks.",
      link: "/candy",
    },
    {
      title: "KYC Verification",
      description: "Comprehensive KYC solutions for identity verification and compliance requirements.",
      link: "/kyc",
    },
    {
      title: "KYB Verification",
      description: "Business verification and due diligence for enhanced risk management.",
      link: "/kyb",
    },
    {
      title: "Fraud Detection",
      description: "Advanced fraud detection and prevention using AI-powered risk assessment.",
      link: "/Fraud_Detection",
    },
    {
      title: "Phone Number Lookup",
      description: "Comprehensive mobile number verification and carrier information lookup.",
      link: "/phone-number-lookup",
    },
    {
      title: "Financial Checks",
      description: "Financial verification and credit assessment for secure transactions.",
      link: "/financial-checks",
    },
    {
      title: "Employee Background Verification",
      description: "Comprehensive background checks for secure hiring and onboarding.",
      link: "/employee-verification",
    },
    {
      title: "AI-Driven OCR Software",
      description: "Intelligent document processing and text extraction with AI technology.",
      link: "/ocr",
    },
    {
      title: "Utilities",
      description: "Essential utility APIs for currency exchange, IMEI validation, and more.",
      link: "/utilities",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <main className="w-full mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-24 bg-gradient-to-b from-[#f7f2f1] to-[#fffffe]">
      {/* Hero Section */}
      <section className="text-center all-banner-section mx-auto relative py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl text-[#B7603D] md:text-5xl font-bold leading-tight relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-[#B7603D]">
            Our Products
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-4 leading-relaxed max-w-2xl mx-auto relative z-10">
            Comprehensive verification and identity solutions for modern businesses.
          </p>
        </motion.div>

        <div
          aria-hidden="true"
          className="absolute inset-0 flex justify-center items-center pointer-events-none"
          style={{
            top: "0",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <motion.svg
            aria-hidden="true"
            className="opacity-10"
            fill="none"
            height="160"
            width="160"
            xmlns="http://www.w3.org/2000/svg"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            <path d="M40 0v160M80 0v160M120 0v160M0 40h160M0 80h160M0 120h160" stroke="#B7603D" strokeWidth="1" />
          </motion.svg>
        </div>
      </section>

      {/* Products Grid */}
      <motion.section 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {products.map((product, index) => (
          <motion.article 
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md p-6 border border-gray-100 relative"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
              {productVectors[index % productVectors.length]}
            </div>
            <div className="w-12 h-12 mb-4 rounded-lg bg-[#B7603D] bg-opacity-10 flex items-center justify-center">
              <div className="w-8 h-8 text-[#B7603D]">
                {productVectors[index % productVectors.length]}
              </div>
            </div>
            <h3 className="font-bold text-xl leading-snug mb-3 text-gray-800">{product.title}</h3>
            <p className="text-gray-600 text-sm mb-6">{product.description}</p>
            <Link 
              to={product.link} 
              className="inline-flex items-center text-sm font-medium text-[#B7603D] hover:text-[#8a4a2e] transition-colors"
            >
              <span>Learn more</span>
              <FiArrowRight className="ml-2" />
            </Link>
          </motion.article>
        ))}
      </motion.section>

      {/* Decorative elements */}
      <div className="fixed -bottom-20 -right-20 w-64 h-64 rounded-full bg-[#B7603D] bg-opacity-5 -z-10"></div>
      <div className="fixed -top-40 -left-40 w-80 h-80 rounded-full bg-[#B7603D] bg-opacity-5 -z-10"></div>
    </main>
  );
};

export default ProductsPage;