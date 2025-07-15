import React from "react";
import {
  FaPassport,
  FaEnvelopeOpenText,
  FaIdBadge,
  FaPhoneAlt,
  FaFileInvoiceDollar,
  FaAddressCard,
} from "react-icons/fa";

const EmployeeBGVAPIs: React.FC = () => {
  const apiServices = [
    {
      name: "Passport Verification",
      icon: <FaPassport />,
      description: "Instantly verify passport data to confirm employee identity for global onboarding.",
    },
    {
      name: "Email Authentication Solutions",
      icon: <FaEnvelopeOpenText />,
      description: "Validate email ownership to reduce fraud and improve hiring communication reliability.",
    },
    {
      name: "EPFO without OTP",
      icon: <FaIdBadge />,
      description: "Retrieve EPFO details directly without OTP for faster background validation.",
    },
    {
      name: "Mobile to UAN",
      icon: <FaPhoneAlt />,
      description: "Map mobile numbers to UAN records to validate employee work history securely.",
    },
    {
      name: "ITR Details Get",
      icon: <FaFileInvoiceDollar />,
      description: "Fetch Income Tax Return insights to assess candidate's financial stability.",
    },
    {
      name: "PAN to UAN",
      icon: <FaAddressCard />,
      description: "Connect PAN with UAN to ensure consistent identity mapping across systems.",
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
                <svg className="h-6 w-6 text-[#b7603d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
             APIs Under Employee Background Checks
            </h2>
          </div>



        <div className="grid grid-cols-2 md:grid-cols-3 md:gap-6 gap-3 p-5">
          {apiServices.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-center mb-4 text-[#b7603d] text-4xl">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.name}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
      </div>
    </section>
  );
};

export default EmployeeBGVAPIs;
