import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import {
  FaMoneyCheckAlt,
  FaPhoneAlt,
  FaServer,
  FaFax,
  FaPhone,
  FaChartLine,
  FaChevronRight,
} from "react-icons/fa";

interface ServiceCardProps {
  icon: React.ReactNode;
  label: string;
  description?: string;
  delay: number;
}

export default function HomeServices() {
  const services = [
    {
      icon: <FaMoneyCheckAlt className="text-lg" />,
      label: "KYC & Identity Verification",
    },
    {
      icon: <FaPhoneAlt className="text-lg" />,
      label: "Banking & Financial Verification",
    },
    {
      icon: <FaServer className="text-lg" />,
      label: " Business & GST Checks",
    },
    {
      icon: <FaFax className="text-lg" />,
      label: "Document & Face Match",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <section className="relative mx-auto px-6 py-20 lg:py-28 overflow-hidden bg-white">
      {/* Subtle background texture */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(183, 96, 61, 0.2) 0%, transparent 20%),
            radial-gradient(circle at 75% 75%, rgba(214, 144, 95, 0.2) 0%, transparent 20%)
          `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/6 opacity-5"
        >
          <svg width="120" height="120" viewBox="0 0 120 120">
            <path d="M60,0 L120,60 L60,120 L0,60 Z" fill="#b7603d" />
          </svg>
        </motion.div>

        <motion.div
          animate={{ y: [0, 30, 0], rotate: [0, 10, 0] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-1/4 right-1/5 opacity-5"
        >
          <svg width="80" height="80" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="40" fill="#d6905f" />
          </svg>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Title decoration */}
              <div className="absolute -left-8 -top-2 w-16 h-16 opacity-10">
                <svg viewBox="0 0 100 100">
                  <path d="M50,0 L100,50 L50,100 L0,50 Z" fill="#b7603d" />
                </svg>
              </div>

              <p className="text-sm font-medium mb-4 tracking-widest uppercase text-[#b7603d]">
                OUR SERVICES
              </p>

              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                <span className="text-gray-900">Powerful APIs </span>
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage: "linear-gradient(90deg, #b7603d, #d6905f)",
                  }}
                >
                  to Simplify Verification and Compliance
                </span>
              </h2>

              <div className="relative pl-6 mb-10">
                <div
                  className="absolute left-0 top-0 h-full w-1 rounded-full"
                  style={{
                    background: "linear-gradient(to bottom, #b7603d, #d6905f)",
                  }}
                />
                <p className="text-gray-600 text-lg">
                  Explore how our API solutions help businesses automate KYC,
                  onboarding, and compliance across multiple sectors with speed
                  and accuracy.
                </p>
              </div>
            </motion.div>

            <div className="grid gap-4 ">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  label={service.label}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 px-5 md:px-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Floating indicators */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 z-20"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl"
                  style={{
                    background: "linear-gradient(135deg, #b7603d, #d6905f)",
                  }}
                >
                  <FaPhone className="text-xl" />
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="absolute -bottom-6 -left-6 z-20"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl"
                  style={{
                    background: "linear-gradient(135deg, #b7603d, #d6905f)",
                  }}
                >
                  <FaChartLine className="text-xl" />
                </div>
              </motion.div>

              {/* Main image container */}
              <div className="relative rounded-2xl overflow-hidden shadow-md  border border-gray-100">
                <img
                  alt="Business communication dashboard"
                  className="w-full h-auto md:h-96 lg:h-[700px] xl:h-[700px] object-fill transition-transform duration-500 hover:scale-105"
                  src="https://img.freepik.com/premium-vector/concept-illustration-depicting-diverse-group-people-collaborating_1263357-35348.jpg?ga=GA1.1.389685255.1745228264&semt=ais_hybrid&w=740"
                  width="800"
                  height="500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://via.placeholder.com/800x500?text=Business+Dashboard";
                  }}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">
                      Advanced Dashboard
                    </h3>
                    <p className="text-white/90">
                      Real-time analytics and call management
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  label,
  description,
  delay,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: delay,
      }}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(183, 96, 61, 0.1)",
      }}
      className="group relative bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-300 overflow-hidden"
    >
      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#b7603d]/5 to-[#d6905f]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10 flex items-start gap-5">
        {/* Icon with animated border */}
        <div className="relative flex-shrink-0">
          <motion.div
            className="absolute -inset-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: "linear-gradient(135deg, #b7603d, #d6905f)" }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <div
            className="relative w-12 h-12 rounded-lg flex items-center justify-center text-white"
            style={{ background: "linear-gradient(135deg, #b7603d, #d6905f)" }}
          >
            {icon}
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#b7603d] transition-colors duration-300">
            {label}
          </h3>
          {description && <p className="text-gray-500 mt-2">{description}</p>}
        </div>

        {/* Animated arrow */}
        <div className="ml-4 self-center">
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-gray-300 group-hover:text-[#b7603d] group-hover:bg-[#f5ebe6] transition-all duration-300">
            <FaChevronRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
