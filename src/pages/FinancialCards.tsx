import React from "react";
import SEO from "../app/Helmet/helment";
import { useContext } from "react";
import { ContextData } from "../config/context";
import { SEOData } from "../type";

const FinancialCards: React.FC = () => {
  const { seo } = useContext(ContextData) as { seo: SEOData };
  return (
    <>
      <SEO seo={seo} />
      <section className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 px-6 py-4">
              <h2 className="flex items-center gap-3 text-2xl font-semibold">
                <div className="rounded-full bg-[#b7603d]/10 p-2">
                  <svg className="h-6 w-6 text-[#b7603d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.25-4.5a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 7.5v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H12"
                    />
                  </svg>
                </div>
                Key Capabilities of Financial Checks API

              </h2>
            </div>


            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left py-5">
              {/* Block 1 */}
              <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
                <img
                  src="/img/Financial Checks API/Financial3.png"
                  alt="Fraud Detection"
                  className="w-full h-48 object-contain mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Fraud Detection
                </h3>
                <p className="text-gray-600">
                  Identify financial fraud in real time using advanced transaction pattern analysis and risk scoring. 7uniqueverify empowers Indian businesses to act early and build user trust.
                </p>
              </div>

              {/* Block 2 */}
              <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
                <img
                  src="/img/Financial Checks API/Financial4.png"
                  alt="Credit Risk Analysis"
                  className="w-full h-48 object-contain mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Credit Risk Analysis

                </h3>
                <p className="text-gray-600">
                  Easily assess the creditworthiness of users and businesses by analyzing ITR data, liabilities, and repayment behavior—enabling better decisions in loans, BNPL, and insurance.
                </p>
              </div>

              {/* Block 3 */}
              <div
                className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl
                          md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0"
              >
                <img
                  src="/img/Financial Checks API/Financial5.png"
                  alt="Regulatory Compliance"
                  className="w-full h-48 object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Regulatory Compliance
                </h3>
                <p className="text-gray-600">
                  Meet Indian regulatory standards with automated data checks and audit-ready reporting. Reduce risk, boost transparency, and ensure smoother financial operations.

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FinancialCards;
