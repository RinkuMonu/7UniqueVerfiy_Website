import React, { useContext, useEffect, useState, ChangeEvent, FormEvent } from "react";
import Swal from "sweetalert2";
import { motion, Variants } from "framer-motion";
import { ContextData } from "../../config/context";
import SEO from "../Helmet/helment";
import { SEOData } from "../../type";
import { Link } from "react-router-dom";

// Type definitions
interface FormData {
  name: string;
  email: string;
  contact: string;
  message: string;
}

interface ContactDetails {
  address?: string;
  email?: string;
  phone?: string;
  [key: string]: any; // For any additional properties
}



interface ContactInfoItem {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode | string | string[];
}

export default function ContactUsPage() {
  const { seo } = useContext(ContextData) as { seo: SEOData };
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", 
  });
};



  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const [contactDetails, setContactDetails] = useState<ContactDetails | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    const fetchContactDetails = async () => {
      try {
        const response = await fetch(
          "https://cms.sevenunique.com/apis/contact/get-contact-details.php?website_id=7",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
            },
          }
        );

        const data = await response.json();
        if (data?.data) {
          setContactDetails(data.data);
        }
      } catch (error) {
        console.error("Error fetching contact details:", error);
      }
    };

    fetchContactDetails();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const onlyLetters = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    setFormData(prev => ({ ...prev, name: onlyLetters }));
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (!/^\d*$/.test(val)) return;
    if (val.length === 1 && /^[0-5]/.test(val)) return;
    if (val.length > 10) return;
    setFormData(prev => ({ ...prev, contact: val }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.contact,
      message: formData.message,
      service: "N/A",
      website_id: 7,
    };

    try {
      const response = await fetch(
        "https://cms.sevenunique.com/apis/contact-query/set-contact-details.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        await Swal.fire({
          title: "Success!",
          text: "Our team will contact you soon",
          icon: "success",
          confirmButtonColor: "#b7603d",
        });

        setFormData({ name: "", email: "", contact: "", message: "" });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      await Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again later.",
        icon: "error",
        confirmButtonColor: "#d33",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  // Contact information items
  const contactInfoItems: ContactInfoItem[] = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#b7603d">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      ),
      label: "Location:",
      value: contactDetails?.address
        ? contactDetails.address.split("|").map((addr: string, i: number) => (
          <p key={i} className="leading-snug">{addr.trim()}</p>
        ))
        : "Not available",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#b7603d">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      label: "Email address:",
      value: contactDetails?.email
        ? contactDetails.email.split(",").map((email: string, i: number) => (
          <a key={i} href={`mailto:${email.trim()}`} className="block text-sm text-gray-700 hover:underline">
            {email.trim()}
          </a>
        ))
        : "Not available",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#b7603d">
          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
        </svg>
      ),
      label: "Phone number:",
      value: contactDetails?.phone || "Not available",
    },
  ];

  return (
    <>
      <SEO seo={seo} />
      <main className="w-full mx-auto px-3 sm:px-8 lg:px-10 bg-[linear-gradient(to_bottom,_#f7f2f1,_#ffffff)]">
        {/* Background decorative elements */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
          <svg className="absolute top-10 left-10 w-32 h-32 opacity-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#b7603d"
              d="M45,-60.8C57.8,-53.2,67.3,-38.5,73.5,-21.8C79.7,-5.1,82.6,13.6,75.8,27.6C69,41.6,52.5,51,35.1,60.3C17.7,69.6,-0.6,78.8,-16.5,74.8C-32.4,70.8,-45.9,53.6,-56.8,35.8C-67.7,18,-76,0.6,-73.3,-15.2C-70.6,-31,-56.8,-45.2,-41.5,-52.3C-26.2,-59.4,-9.4,-59.4,5.9,-66.4C21.2,-73.4,32.3,-87.4,45,-60.8Z"
              transform="translate(100 100)"
            />
          </svg>
          <svg className="absolute bottom-20 right-10 w-40 h-40 opacity-15" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#b7603d"
              d="M39.2,-56.4C52.9,-49.3,67.7,-42.1,74.9,-30.1C82.1,-18.1,81.7,-1.3,76.4,12.9C71.1,27.1,60.9,38.7,48.9,50.3C36.9,61.9,23.1,73.5,7.9,77.8C-7.3,82.1,-23.9,79.1,-36.8,69.7C-49.7,60.3,-59,44.5,-65.6,27.9C-72.2,11.3,-76.2,-6.1,-70.8,-19.3C-65.4,-32.5,-50.6,-41.5,-36.8,-48.6C-23,-55.7,-10.2,-60.9,1.8,-63.5C13.8,-66.1,27.6,-66.1,39.2,-56.4Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        {/* Hero Banner Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center all-banner-section mx-auto relative py-20"
        >
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-semibold text-[#b7603d] leading-tight relative z-10"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-sm sm:text-base text-black px-2 mt-4 max-w-md mx-auto leading-relaxed relative z-10"
          >
            We are passionate about transforming the way businesses communicate. Specializing in VOIP, telecom.
          </motion.p>
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
            <svg aria-hidden="true" className="opacity-10" fill="none" height="160" width="160" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 0v160M80 0v160M120 0v160M0 40h160M0 80h160M0 120h160" stroke="#b7603d" strokeWidth="1" />
            </svg>
          </div>
        </motion.section>

        <div className="mt-16 mb-20">
          {/* Get in Touch form */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            aria-label="Get in Touch form"
            className="bg-[#f7f1ef] rounded-xl p-8 max-w-5xl mx-auto mb-16 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 opacity-10">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#b7603d"
                  d="M42.7,-60.3C54.3,-53.2,62.1,-39.1,68.8,-23.1C75.5,-7.1,81.1,10.8,75.9,25.1C70.7,39.4,54.7,50.1,38.6,58.8C22.5,67.5,6.2,74.2,-9.8,72.9C-25.8,71.6,-41.5,62.3,-53.4,49.3C-65.3,36.3,-73.3,19.6,-74.2,1.9C-75.1,-15.8,-68.9,-34.6,-56.4,-47.2C-43.9,-59.8,-25.1,-66.2,-7.3,-62.1C10.5,-58,21,-43.4,42.7,-60.3Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-semibold text-[#b7603d] mb-8"
            >
              Get in Touch
            </motion.h2>

            <motion.form
              variants={container}
              initial="hidden"
              animate="show"
              className="relative z-10 space-y-6"
              onSubmit={handleSubmit}
            >
              <motion.div variants={item} className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleNameChange}
                  className="flex-1 rounded-md border border-[#e8c4b0] px-4 py-3 text-sm placeholder-[#b7603d] focus:outline-none focus:ring-2 focus:ring-[#b7603d] bg-white"
                  placeholder="Your Name*"
                  required
                  type="text"
                />
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="flex-1 rounded-md border border-[#e8c4b0] px-4 py-3 text-sm placeholder-[#b7603d] focus:outline-none focus:ring-2 focus:ring-[#b7603d] bg-white"
                  placeholder="Enter Email*"
                  required
                  type="email"
                />
              </motion.div>
              <motion.div variants={item}>
                <input
                  name="contact"
                  value={formData.contact}
                  onChange={handlePhoneChange}
                  className="w-full rounded-md border border-[#e8c4b0] px-4 py-3 text-sm placeholder-[#b7603d] focus:outline-none focus:ring-2 focus:ring-[#b7603d] bg-white"
                  placeholder="Mobile No."
                  type="tel"
                  required
                />
              </motion.div>
              <motion.div variants={item}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-md border border-[#e8c4b0] px-4 py-3 text-sm placeholder-[#b7603d] resize-none focus:outline-none focus:ring-2 focus:ring-[#b7603d] bg-white"
                  placeholder="Your Message"
                  rows={4}
                />
              </motion.div>
              <motion.div variants={item}>
                <button
                  className="bg-[#b7603d] hover:bg-[#8c4a2e] text-white font-semibold text-sm rounded-full px-8 py-3 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "Submit Now"
                  )}
                </button>
              </motion.div>
            </motion.form>
          </motion.section>

          {/* Contact information */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            aria-label="Contact information"
            className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20"
          >
            {contactInfoItems.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-[#f7f1ef] rounded-xl p-6 flex flex-col items-start space-y-4 border border-[#e8c4b0] hover:border-[#b7603d] transition-all duration-300"
              >
                <div className="p-2 rounded-full bg-[#f0d9cc]">{item.icon}</div>
                <div className="text-sm text-[#8c4a2e]">
                  <p className="font-semibold mb-1">{item.label}</p>
                  <div className="font-bold space-y-1">
                    {Array.isArray(item.value) ? item.value : item.value}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.section>

          {/* Start Your Journey section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            aria-label="Start Your Journey call to action"
            className="bg-gradient-to-r from-[#fae7dd] to-[#e7c9b9] rounded-xl p-8 max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between space-y-8 sm:space-y-0 relative overflow-hidden"
          >
            <div className="absolute -bottom-20 -left-20 w-64 h-64 opacity-10">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#b7603d"
                  d="M42.7,-60.3C54.3,-53.2,62.1,-39.1,68.8,-23.1C75.5,-7.1,81.1,10.8,75.9,25.1C70.7,39.4,54.7,50.1,38.6,58.8C22.5,67.5,6.2,74.2,-9.8,72.9C-25.8,71.6,-41.5,62.3,-53.4,49.3C-65.3,36.3,-73.3,19.6,-74.2,1.9C-75.1,-15.8,-68.9,-34.6,-56.4,-47.2C-43.9,-59.8,-25.1,-66.2,-7.3,-62.1C10.5,-58,21,-43.4,42.7,-60.3Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>

            <div className="max-w-xl relative z-10">
              <h2 className="text-3xl font-semibold text-[#b7603d] leading-tight mb-3">
                Start Your Journey
                <br />
                With our team.
              </h2>
              <p className="text-[#8c4a2e] text-sm sm:text-base max-w-md mb-6">
                We are passionate about transforming the way businesses communicate. Specializing in VOIP, telecom.
              </p>
              <Link to={'/contact-us'}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#b7603d] hover:bg-[#8c4a2e] text-white font-semibold text-sm rounded-full px-8 py-3 transition-all duration-300 shadow-md hover:shadow-lg"
                  onClick={scrollToTop}
                >
                  Get Started ⬆
                </motion.button>
              </Link>
            </div>
            <motion.div
              initial={{ x: 20 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="relative w-full max-w-xs sm:max-w-sm z-10"
            >
              <img
                alt="Call Report graph with green line chart and partial face of a person wearing a headset"
                height="120"
                width="320"
                src="/img/159537166_b84be38d-71db-4b68-9796-a625ce3320f4-removebg-preview.png"
              />
            </motion.div>
          </motion.section>
        </div>
      </main>
    </>
  );
}