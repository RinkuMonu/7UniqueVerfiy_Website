import { motion } from "framer-motion";
import { FiArrowRight, FiUsers, FiCloud, FiPhone, FiServer } from "react-icons/fi";
import { Link } from "react-router-dom";
export default function HomeCTA() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="bg-gradient-to-r from-[#f8f1ee] to-[#f1e8e5] py-20 mt-14 rounded-2xl overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#f5d5cb] opacity-30 mix-blend-multiply animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-[#e3c7bd] opacity-30 mix-blend-multiply animate-blob"></div>
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 relative z-10">
        <motion.div 
          className="flex-1 flex flex-col items-start max-w-xl"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-[#b7603d] border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-[#d19983] border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-[#e3c7bd] border-2 border-white"></div>
            </div>
            <span className="text-sm font-semibold text-[#b7603d]">TEAM COLLABORATION</span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-[#373533] mb-6 leading-tight">
            Build <span className="text-[#b7603d]">Smarter</span> Connections with Our Expert Team
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-[#595c5c] text-lg mb-8">
            We specialize in simplifying business communication. From VOIP and cloud solutions to telecom innovation, our experts are here to power your growth.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/50 px-4 py-2 rounded-full">
              <FiUsers className="text-[#b7603d]" />
              <span className="text-sm font-medium">Team Solutions</span>
            </div>
            <div className="flex items-center gap-2 bg-white/50 px-4 py-2 rounded-full">
              <FiCloud className="text-[#b7603d]" />
              <span className="text-sm font-medium">Cloud Services</span>
            </div>
            <div className="flex items-center gap-2 bg-white/50 px-4 py-2 rounded-full">
              <FiPhone className="text-[#b7603d]" />
              <span className="text-sm font-medium">VOIP</span>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#b7603d] text-white font-bold shadow-lg hover:bg-[#a05536] transition-all hover:shadow-xl hover:-translate-y-1"
            >
              Get Started <FiArrowRight className="animate-pulse" />
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <img
              src="/img/image/follow-leader-concept-illustration.png"
              alt="Team collaboration illustration"
              className="rounded-2xl shadow-2xl w-[340px] lg:w-[420px] relative z-10"
            />
            <div className="absolute -bottom-6 -right-6 w-full h-full rounded-2xl border-4 border-[#b7603d] z-0"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}