import type React from "react";
import SEO from "../Helmet/helment";
import { useContext } from "react";
import { ContextData } from "../../config/context";
import { SEOData } from "../../type";
import KnowMore from "../../components/KnowMore";

const OCRValidationPage: React.FC = () => {
  const { seo } = useContext(ContextData) as { seo: SEOData };
  return (
    <>
      <SEO seo={seo} />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section
          className="w-full bg-cover bg-center min-h-screen flex items-center"
          style={{ backgroundImage: "url('/img/bg (2).png')" }}
        >
          <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-2/3 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                OCR Validation API – by 7Unique Verify
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
                Smart Document Recognition & Information Validation
              </h2>
              <p className="text-lg mb-4 text-white">
                Automate text extraction from scanned documents with precision
                using our advanced OCR Validation API. Designed for high-volume
                data verification with intelligent accuracy.
              </p>
              <p className="mb-4 text-white">
                7Unique Verify’s API offers multilingual OCR, layout-aware
                parsing, structured data mapping, and format consistency checks
                across PAN, Aadhaar, DL, utility bills, and more.
              </p>
              <p className="mb-6 text-white">
                Ideal for banks, fintechs, NBFCs, and digital platforms looking
                to automate KYC, onboarding, and document compliance with ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/ocr-validation-page-api"
                  className="inline-block bg-[#b7603d] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#d19983] transition-colors text-center"
                >
                  Get Started
                </a>
                <a
                  href="#"
                  className="inline-block border border-white text-white font-semibold px-6 py-3 rounded hover:bg-white hover:text-[#b7603d] transition-colors text-center"
                >
                  View Documentation
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="/img/image/flat-design-api-illustration.png"
                alt="OCR Validation"
                className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px] rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="p-16 bg-[#f7f1ef]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Advanced OCR Validation Features
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our OCR Validation API combines cutting-edge optical character
                recognition with intelligent validation for accurate document
                processing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <img
                  src="/img/image/21530023_6435775.jpg"
                  className="w-full h-48 object-contain mb-4"
                />

                <h3 className="text-xl font-semibold mb-3">
                  Multi-Language Support
                </h3>
                <p className="text-gray-600">
                  Extract text from documents in over 100 languages with high
                  accuracy and support for various scripts and fonts.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <img
                  src="/img/image/5566766_2892186.jpg"
                  className="w-full h-48 object-contain mb-4"
                />
                <h3 className="text-xl font-semibold mb-3">
                  Document Structure Recognition
                </h3>
                <p className="text-gray-600">
                  Identify and extract structured data from forms, tables,
                  invoices, and other formatted documents automatically.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <img
                  src="/img/image/11669184_20943801.jpg"
                  className="w-full h-48 object-contain mb-4"
                />
                <h3 className="text-xl font-semibold mb-3">
                  Real-time Validation
                </h3>
                <p className="text-gray-600">
                  Validate extracted data against predefined rules, formats, and
                  databases for immediate accuracy verification.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f1ef] py-16 px-4 md:px-8 lg:px-20">
          <div className="w-full mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              Choose Your{" "}
              <span className="text-[#b7603d]">OCR Validation Level</span>
            </h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef] rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Advance Text Extraction
                    </h3>
                    <span className="text-sm text-[#b7603d]   font-medium">
                      Standard OCR
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Detailing all types of documents with advanced validation"
                  means this OCR API can read and verify various document types
                  (like Aadhaar, PAN, Passport, Voter ID, DL, etc.) using
                  advanced AI-based validation to ensure authenticity, format
                  accuracy, and data extraction.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">1-3 seconds</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Cost:</span>
                    <span className="font-medium">₹1-2 per page</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">Simple documents</span>
                  </div>
                </div>
              </div>

              {/* <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f7f1ef] rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#b7603d]   font-bold">🔍</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Advanced Document Analysis
                    </h3>
                    <span className="text-sm text-[#b7603d]   font-medium">
                      AI-Powered OCR
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Advanced text recognition with layout analysis, handwriting
                  support, and complex document understanding.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">3-8 seconds</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Cost:</span>
                    <span className="font-medium">₹3-5 per page</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium">Complex documents</span>
                  </div>
                </div>
              </div> */}
            </div>

            <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-lg font-semibold mb-4 text-gray-800">
                What You Get:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">Advance OCR:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ Handwriting recognition</li>
                    <li>✓ Document structure analysis</li>
                    <li>✓ Table and form extraction</li>
                    <li>✓ Data validation</li>
                    <li>✓ Contextual understanding</li>
                  </ul>
                </div>
                {/* <div>
                  <h5 className="font-medium text-gray-700 mb-2">
                    Advanced OCR:
                  </h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ Handwriting recognition</li>
                    <li>✓ Document structure analysis</li>
                    <li>✓ Table and form extraction</li>
                    <li>✓ Data validation</li>
                    <li>✓ Contextual understanding</li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </section>
        <KnowMore />
        {/* How It Works Section */}
        <section className="p-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How OCR Validation Works
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our intelligent OCR process combines advanced image processing
                with machine learning for accurate text extraction and
                validation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className=" bg-[#b7603d]   text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Image Preprocessing
                </h3>
                <p className="text-gray-600">
                  Enhance image quality, correct skew, remove noise, and
                  optimize contrast for better text recognition.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#b7603d]   text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">Text Extraction</h3>
                <p className="text-gray-600">
                  Use advanced OCR algorithms to identify and extract text from
                  various document types and formats.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#b7603d]   text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Data Validation</h3>
                <p className="text-gray-600">
                  Validate extracted data against business rules, format
                  requirements, and external databases.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#b7603d]  text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Structured Output
                </h3>
                <p className="text-gray-600">
                  Deliver validated data in structured formats with confidence
                  scores and validation results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section
          className="p-16 bg-[#f7f1ef]








"
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Benefits of OCR Validation
                </h2>
                <p className="text-gray-600 mb-8">
                  Streamline document processing and improve data accuracy with
                  our intelligent OCR validation technology.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#b7603d]   mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      <strong className="font-medium">
                        Automate Data Entry:
                      </strong>{" "}
                      Eliminate manual data entry and reduce human errors
                      significantly.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#b7603d]   mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      <strong className="font-medium">Improve Accuracy:</strong>{" "}
                      Achieve higher accuracy rates than manual processing with
                      AI-powered validation.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#b7603d]   mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      <strong className="font-medium">
                        Reduce Processing Time:
                      </strong>{" "}
                      Process documents in seconds instead of hours or days.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#b7603d]   mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      <strong className="font-medium">Cost Savings:</strong>{" "}
                      Reduce operational costs and improve efficiency across
                      your organization.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <img
                  src="/img/image/work-team-checking-giant-check-list.png"
                  alt="OCR Validation Benefits"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="p-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Industry Use Cases
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                OCR validation is essential across various industries for
                automating document processing and improving data accuracy.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div
                  className="bg-[#f7f1ef]








   p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-[#b7603d]  "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Banking & Finance
                </h3>
                <p className="text-gray-600">
                  Process loan applications, bank statements, and financial
                  documents with automated data extraction.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div
                  className="bg-[#f7f1ef]








   p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-[#b7603d]  "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
                <p className="text-gray-600">
                  Digitize medical records, insurance forms, and patient
                  information for efficient healthcare management.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div
                  className="bg-[#f7f1ef]








   p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-[#b7603d]  "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Legal Services</h3>
                <p className="text-gray-600">
                  Extract and validate information from contracts, legal
                  documents, and court filings automatically.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div
                  className="bg-[#f7f1ef]








   p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-[#b7603d]  "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Retail & E-commerce
                </h3>
                <p className="text-gray-600">
                  Process invoices, receipts, and inventory documents for
                  streamlined operations.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div
                  className="bg-[#f7f1ef]








   p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-[#b7603d]  "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Human Resources</h3>
                <p className="text-gray-600">
                  Automate resume screening, employee onboarding, and document
                  verification processes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div
                  className="bg-[#f7f1ef]








   p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-[#b7603d]  "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-gray-600">
                  Digitize student records, transcripts, and academic documents
                  for efficient administration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* API Integration Section */}
        <section
          className="p-16 bg-[#f7f1ef]








"
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Powerful API Integration
                </h2>
                <p className="text-gray-600 mb-8">
                  Integrate OCR validation into your workflow with our
                  comprehensive API. Support for multiple document formats and
                  real-time processing.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#b7603d]   mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      Support for PDF, JPG, PNG, TIFF, and more formats
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#b7603d]   mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      Batch processing for high-volume document workflows
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#b7603d]   mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      Custom validation rules and business logic integration
                    </span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
                  <div className="text-gray-500 mb-2">
                    // OCR Validation API Example
                  </div>
                  <div className="text-blue-400">curl</div>{" "}
                  <span className="text-yellow-300">-X POST</span> \<br />
                  <span className="text-yellow-300">-H</span>{" "}
                  <span className="text-green-300">
                    "Authorization: Bearer YOUR_API_KEY"
                  </span>{" "}
                  \<br />
                  <span className="text-yellow-300">-H</span>{" "}
                  <span className="text-green-300">
                    "Content-Type: multipart/form-data"
                  </span>{" "}
                  \<br />
                  <span className="text-yellow-300">-F</span>{" "}
                  <span className="text-green-300">
                    "document=@invoice.pdf"
                  </span>{" "}
                  \<br />
                  <span className="text-blue-400">
                    https://api.example.com/v1/ocr/validate
                  </span>
                  <br />
                  <br />
                  <div className="text-gray-500">// Response</div>
                  <div className="text-white">{"{"}</div>
                  <div className="ml-4 text-blue-300">
                    "extracted_text"
                  </div>:{" "}
                  <span className="text-green-300">"Invoice #12345..."</span>,
                  <br />
                  <div className="ml-4 text-blue-300">"confidence"</div>:{" "}
                  <span className="text-yellow-300">0.98</span>,<br />
                  <div className="ml-4 text-blue-300">
                    "validated_fields"
                  </div>: <span className="text-green-300">{"{"}</span>
                  <br />
                  <div className="ml-8 text-blue-300">
                    "invoice_number"
                  </div>: <span className="text-green-300">"12345"</span>,<br />
                  <div className="ml-8 text-blue-300">"amount"</div>:{" "}
                  <span className="text-yellow-300">1250.00</span>
                  <br />
                  <div className="ml-4 text-green-300">{"}"}</div>
                  <br />
                  <div className="text-white">{"}"}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default OCRValidationPage;
