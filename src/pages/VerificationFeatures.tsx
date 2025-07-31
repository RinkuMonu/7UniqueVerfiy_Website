import React from "react";
import { FaUserCheck, FaChartLine, FaShieldAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const VerificationFeatures: React.FC = () => {
  const features = [
    {
      title: "Elevate Verification Accuracy",
      description:
        "Our Employment Background Screening API provides accurate and current data on employment history, credentials, and education—helping you steer clear of candidates who misrepresent qualifications or experience.",
      icon: <FaUserCheck className="text-white text-2xl" />,
      bgColor: "bg-gradient-to-br from-[#b7603d] to-[#d47a4a]",
    },
    {
      title: "Boost Efficiency and Cut Costs",
      description:
        "Automate your background screening process to save time and resources. Speed up hiring and onboard qualified candidates quickly with a streamlined pre-employment verification workflow.",
      icon: <FaChartLine className="text-white text-2xl" />,
      bgColor: "bg-gradient-to-br from-[#9c4d2f] to-[#b7603d]",
    },
    {
      title: "Minimize Risk & Strengthen Verification",
      description:
        "Avoid costly mistakes and reduce fraud by leveraging our BGV API. Ensure trustworthy, compliant hiring by mitigating legal and reputational risks.",
      icon: <FaShieldAlt className="text-white text-2xl" />,
      bgColor: "bg-gradient-to-br from-[#d47a4a] to-[#e8915e]",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-4 md:px-8 lg:px-20 overflow-hidden">
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-7xl space-y-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 px-6 py-4">
              <h2 className="flex items-center gap-3 text-2xl font-semibold">
                <div className="rounded-full bg-[#b7603d]/10 p-2">
                  <svg
                    className="h-6 w-6 text-[#b7603d]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                Transform Your Hiring With Our Verification API
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl p-4">
              Advanced technology for smarter, safer, and faster employment
              verification.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-5">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={`absolute top-0 left-0 w-full h-1 ${feature.bgColor.replace("bg-gradient-to-br", "bg-gradient-to-r")}`}
                  ></div>
                  <div className="bg-white p-8 pt-12 h-full">
                    <div
                      className={`${feature.bgColor} w-14 h-14 rounded-lg flex items-center justify-center mb-6 transform group-hover:-translate-y-1 transition-all duration-300`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                    <div className="mt-6">
                      <div className="w-8 h-0.5 bg-[#b7603d]"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 bg-gradient-to-r from-[#b7603d] to-[#e8915e] rounded-2xl p-0.5">
              <div className="bg-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Ready to streamline your hiring process?
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Integrate our verification API in minutes and start making
                    better hiring decisions today.
                  </p>
                  <Link to={"/contact-us"}>
                    <button className="bg-gradient-to-r from-[#b7603d] to-[#e8915e] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
                      Request a Demo
                    </button>
                  </Link>
                </div>
                <div className="md:w-1/2">
                  <img
                    src="/img/Employee Background Verification API/Employee5.png"
                    alt="Team collaboration"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerificationFeatures;
