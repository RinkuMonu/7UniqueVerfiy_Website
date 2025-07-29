import React from "react";
import { Link } from "react-router-dom";
import { LuckyHeroSection } from "./hero";
import { UsageSection } from "./usageSection";
import { LuckySteps } from "./stepes";
import { LuckyWallet } from "./wallet";
import { LuckyTransaction } from "./luckyTransation";
import KnowMore from "../../components/KnowMore";
import HomeTestimonials from "../../pages/HomeTestimonials";

export const Lucky = () => {
  return (
    <>
      <section
        className="w-full bg-cover bg-center min-h-screen flex items-center px-4 py-10"
        style={{ backgroundImage: "url('/img/bg (2).png')" }}
      >
        <div className="container mx-auto  flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-2/3 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              7Unique Verify – Face Match API
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
              Real-time Facial Recognition & Identity Match
            </h2>
            <p className="text-lg mb-4 text-white">
              Verify identities with precision using 7Unique Verify’s Face Match
              API. Match faces in real-time using AI-powered facial feature
              detection and comparison technology.
            </p>
            <p className="mb-4 text-white">
              This API supports live face detection, selfie vs ID photo
              comparison, and similarity scoring – ensuring secure and
              contactless identity verification.
            </p>
            <p className="mb-6 text-white">
              Perfect for KYC, user onboarding, attendance systems, fintech
              apps, and access control where facial biometrics are critical.
            </p>
            <Link
              to="/contact-us"
              className="inline-block bg-[#b7603d] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#d19983] transition-colors"
            >
              Get Started
            </Link>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/img/image/rendering-blender-3d-icon-logo-faciel-recognition-illustration.png"
              alt="7Unique Verify Face Match API"
              className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
            />
          </div>
        </div>
      </section>
      <LuckyHeroSection />
      <UsageSection />
      <LuckyTransaction />
      <LuckyWallet />
      <LuckySteps />
      <KnowMore />
      <HomeTestimonials />
    </>
  );
};
