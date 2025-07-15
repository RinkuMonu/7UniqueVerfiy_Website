import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    q: "What is VOIP and how can it benefit my business?",
    a: "VOIP (Voice over Internet Protocol) lets you make calls using the internet instead of traditional phone lines. It's cost-effective, offers better call quality, and works perfectly with 7Unique Verify's cloud telephony solutions.",
  },
  {
    q: "Can VOIP integrate with 7Unique Verify's APIs and dashboards?",
    a: "Yes, 7Unique Verify's systems are designed to support seamless VOIP integration — whether it's for lead verification, number masking, or CRM syncing.",
  },
  {
    q: "Can I port my existing number while switching to VOIP with 7Unique Verify?",
    a: "Bilkul. Aap apna purana mobile ya landline number easily 7Unique Verify ke VOIP solution mein port kara sakte ho bina kisi rukawat ke.",
  },
  {
    q: "Is communication secure on VOIP networks?",
    a: "Yes, 7Unique Verify uses encrypted connections and secure infrastructure to protect your business calls and client data from any unauthorized access.",
  },
  {
    q: "What kind of support do I get with 7Unique Verify VOIP services?",
    a: "You get 24x7 support via chat, email, and call from our dedicated technical team. We also help you with setup, integration, and usage training.",
  },
];

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8  sm:py-28 bg-gradient-to-b from-[#f9f9f9] to-white relative overflow-hidden ">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-r from-[#f9f0eb]/20 to-[#f3f8fb]/20 -z-10"></div>
      <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#b7603d]/10 blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Section - Header */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="sticky top-8 space-y-6"
            >
              <span className="inline-block bg-[#f3e8e3] text-[#b7603d] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                FAQ
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Frequently Asked <br className="hidden lg:block" /> Questions
              </h1>
              <p className="text-lg text-gray-600">
                We've answered some common doubts to help you understand how 7Unique Verify's VOIP & telecom services can simplify communication for your business.
              </p>
              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#b7603d] hover:bg-[#9a4f32] text-white font-semibold text-base rounded-lg px-8 py-3 w-max transition-all shadow-lg hover:shadow-xl"
              >
                Know More
              </motion.button>
            </motion.div>
          </div>

          {/* Right Section - FAQ Accordion */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Floating number */}
                  <div className="absolute -left-12 top-0 hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-[#c08168] text-white font-bold text-lg shadow-md">
                    {idx + 1}
                  </div>
                  
                  {/* Question Card */}
                  <motion.button
                    className={`w-full flex justify-between items-center p-6 text-left font-medium text-lg cursor-pointer rounded-xl transition-all ${
                      openIndex === idx 
                        ? 'bg-[#f1e2dc] shadow-lg' 
                        : 'bg-white border border-gray-200/80 hover:border-[#b7603d]/50 shadow-md hover:shadow-lg'
                    }`}
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    whileHover={{ scale: 1.01 }}
                  >
                    <span className="text-gray-900 pr-4 font-semibold">{faq.q}</span>
                    <div className={`flex-shrink-0 ml-4 p-2 rounded-full transition-colors ${
                      openIndex === idx 
                        ? 'bg-[#f1f1f1] text-[#b7603d]' 
                        : 'bg-[#f3e8e3] text-gray-600 group-hover:bg-[#fae7de] group-hover:text-[#b7603d]'
                    }`}>
                      {openIndex === idx ? (
                        <FiMinus className="text-xl" />
                      ) : (
                        <FiPlus className="text-xl" />
                      )}
                    </div>
                  </motion.button>
                  
                  {/* Answer Section */}
                  <AnimatePresence>
                    {openIndex === idx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 mt-1 text-gray-600 bg-white rounded-b-xl shadow-lg border-t-0">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}