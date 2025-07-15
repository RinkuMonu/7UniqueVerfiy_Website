import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaBookmark,
  FaRegBookmark,
} from "react-icons/fa";
import {
  RiHomeHeartLine,
  RiFlaskLine,
  RiPlantLine,
  RiSparklingLine,
} from "react-icons/ri";
import { ContextData } from "../../config/context";

// Type definitions
interface ColorPalette {
  primary: string;
  primaryLight: string;
  primaryDark: string;
  accent: string;
  background: string;
  text: string;
  lightText: string;
}

interface Article {
  img: string;
  title: string;
  slug: string;
  category: string;
  desc: string;
  date: string;
  premium: boolean;
  readTime?: string;
}

interface CategoryButton {
  name: string;
  icon: React.ReactNode;
}

interface ArticleCardProps {
  article: Article;
  index: number;
}

interface CornerVectorProps {
  position: string;
}

// Color palette
const colors: ColorPalette = {
  primary: "#b7603d",
  primaryLight: "#f0d8cf",
  primaryDark: "#8c4a2e",
  accent: "#5d8a66",
  background: "#faf7f5",
  text: "#2d2d2d",
  lightText: "#6d6d6d",
};

// Floating orbs
const FloatingOrbs: React.FC = () => (
  <>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{
        opacity: [0, 0.3, 0],
        y: [40, 0, -40],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full"
      style={{ backgroundColor: colors.primary, opacity: 0.1 }}
    />
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{
        opacity: [0, 0.2, 0],
        x: [-60, 0, 60],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "linear",
        delay: 3,
      }}
      className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full"
      style={{ backgroundColor: colors.accent, opacity: 0.1 }}
    />
  </>
);

const CornerVector: React.FC<CornerVectorProps> = ({ position }) => (
  <svg
    className={`absolute ${position} -z-10`}
    width="240"
    height="240"
    viewBox="0 0 240 240"
    fill="none"
  >
    <path
      d="M240 0H0V240C132.5 240 240 132.5 240 0Z"
      fill={colors.primary}
      fillOpacity="0.05"
    />
  </svg>
);

// Articles data
const articleData: Article[] = [
  {
    img: "/img/1.1.jpg",
    title: "How to Create a Cozy Atmosphere",
    slug: "create-cozy-atmosphere",
    category: "Candle Tips",
    desc: "Simple steps to create your home's best warm ambiance.",
    date: "Saturday, 04 Nov 2023",
    premium: false,
    readTime: "5 min read",
  },
  {
    img: "/img/1.2.jpg",
    title: "The Benefits of Aromatherapy in Home",
    slug: "benefits-of-aromatherapy",
    category: "Wellness Tips",
    desc: "Simple steps to make your home feel warm.",
    date: "Saturday, 04 Nov 2023",
    premium: false,
    readTime: "4 min read",
  },
  {
    img: "/img/1.3.jpg",
    title: "Sustainable Living: Tips for Homes",
    slug: "sustainable-living-tips",
    category: "Candle Tips",
    desc: "Simple steps to create your home's best warm ambiance.",
    date: "Saturday, 04 Nov 2023",
    premium: false,
    readTime: "6 min read",
  },
  {
    img: "/img/1.4.jpg",
    title: "How to Create a Cozy Atmosphere",
    slug: "create-cozy-atmosphere-2",
    category: "Candle Tips",
    desc: "Simple steps to create your home's best warm ambiance.",
    date: "Saturday, 04 Nov 2023",
    premium: false,
    readTime: "3 min read",
  },
  {
    img: "/img/1.5.jpg",
    title: "Creating a Relaxing Outdoor Space",
    slug: "relaxing-outdoor-space",
    category: "Wellness Tips",
    desc: "Simple steps to create your home's best warm ambiance.",
    date: "Saturday, 04 Nov 2023",
    premium: false,
    readTime: "7 min read",
  },
  {
    img: "/img/1.6.jpg",
    title: "Essential Tips for Home Organization",
    slug: "home-organization-tips",
    category: "Candle Tips",
    desc: "Simple steps to create your home's best warm ambiance.",
    date: "Saturday, 04 Nov 2023",
    premium: false,
    readTime: "5 min read",
  },
];

// Category buttons data
const categoryButtons: CategoryButton[] = [
  { name: "All Collections", icon: <RiHomeHeartLine /> },
  { name: "Candle Craft", icon: <RiFlaskLine /> },
  { name: "Wellness", icon: <RiSparklingLine /> },
  { name: "Eco Living", icon: <RiPlantLine /> },
  { name: "Lifestyle", icon: <RiSparklingLine /> },
];

// ArticleCard component
const ArticleCard: React.FC<ArticleCardProps> = ({ article, index }) => {
  const controls = useAnimation();

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{
          y: -10,
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        }}
        onHoverStart={() => controls.start("hover")}
        onHoverEnd={() => controls.start("initial")}
        className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group relative"
        style={{ height: "420px" }}
      >
        <motion.div
          className="relative h-56 overflow-hidden"
          initial={{ scale: 1 }}
          animate={controls}
          variants={{
            initial: { scale: 1 },
            hover: { scale: 1.05 },
          }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={article.img}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
        </motion.div>

        <div className="p-6 flex flex-col h-44">
          <div className="flex justify-between items-start mb-3">
            <span
              className="text-xs font-medium px-3 py-1 rounded-full"
              style={{
                backgroundColor: colors.primaryLight,
                color: colors.primaryDark,
              }}
            >
              {article.category}
            </span>
            <span className="text-xs" style={{ color: colors.lightText }}>
              {article.readTime}
            </span>
          </div>

          <Link to={`/articles/${article.slug}`}>
            <h3
              className="text-xl font-semibold mb-3 leading-tight group-hover:underline"
              style={{ color: colors.text }}
            >
              {article.title}
            </h3>
          </Link>

          <p
            className="text-sm mb-4 flex-grow"
            style={{ color: colors.lightText }}
          >
            {article.desc}
          </p>

          <div className="flex items-center justify-between">
            <div
              className="flex items-center text-xs"
              style={{ color: colors.lightText }}
            >
              <FaCalendarAlt
                className="mr-2"
                style={{ color: colors.primary }}
              />
              <span>{article.date}</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-amber-500 transition-colors"
            >
              {article.premium ? <FaBookmark /> : <FaRegBookmark />}
            </motion.button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          animate={controls}
          variants={{
            initial: { opacity: 0, x: "-100%" },
            hover: { opacity: 0.4, x: "200%" },
          }}
          transition={{ duration: 0.8 }}
          className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/80 to-transparent"
        />
      </motion.article>
    </>
  );
};

// Main page component
const MediaArticles: React.FC = () => {
  return (
    <div
      className="relative overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      <CornerVector position="top-0 right-0" />
      <CornerVector position="bottom-0 left-0 rotate-180" />
      <FloatingOrbs />

      {/* Main container */}
      <div className="container mx-auto px-6 py-24 max-w-7xl">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center relative"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1"
            style={{ backgroundColor: colors.primary }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm uppercase tracking-widest mb-4 font-medium"
            style={{ color: colors.primary }}
          >
            The Art of Living
          </motion.p>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            style={{ color: colors.text }}
          >
            Explore <span style={{ color: colors.primary }}>Our Latest</span>{" "}
            Insights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg max-w-2xl mx-auto"
            style={{ color: colors.lightText }}
          >
            Discover tips and trends for your health and home.
          </motion.p>
        </motion.header>

        {/* Featured Section */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured Article */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 relative group"
            >
              <div className="absolute inset-0 rounded-3xl overflow-hidden z-0">
                <motion.img
                  src="/img/1.1.jpg"
                  alt="Featured article"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/20"></div>
              </div>

              <div className="relative z-10 h-full min-h-[500px] flex flex-col justify-end p-10">
                <div className="max-w-2xl">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="inline-block px-4 py-2 text-xs font-bold rounded-full mb-4 shadow-sm"
                    style={{
                      backgroundColor: colors.primaryLight,
                      color: colors.primaryDark,
                    }}
                  >
                    Online Guide
                  </motion.span>

                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
                  >
                    The Benefits of Aromatherapy in Home
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-white/90 mb-6 text-lg"
                  >
                    Simple steps to make your home feel warm and inviting.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center"
                  >
                    <Link
                      to="#"
                      className="flex items-center text-sm font-medium group"
                      style={{ color: colors.primaryLight }}
                    >
                      <span className="mr-2 group-hover:underline">
                        Explore the Collection
                      </span>
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                        }}
                      >
                        <FaArrowRight />
                      </motion.span>
                    </Link>
                    <span className="mx-4 text-white/50">|</span>
                    <div className="flex items-center text-xs text-white/80">
                      <FaCalendarAlt className="mr-2" />
                      <span>04 Nov 2023</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Category Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col space-y-4"
            >
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg font-semibold mb-2 pl-2"
                style={{ color: colors.text }}
              >
                Explore Collections
              </motion.h3>

              {categoryButtons.map((cat, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{
                    x: 8,
                    backgroundColor:
                      i === 0 ? colors.primaryDark : colors.primaryLight,
                  }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center px-6 py-4 rounded-xl text-left transition-all ${
                    i === 0
                      ? `text-white shadow-lg`
                      : `bg-white hover:shadow-md`
                  }`}
                  style={{
                    backgroundColor: i === 0 ? colors.primary : "white",
                    color: i === 0 ? "white" : colors.text,
                    border:
                      i === 0 ? "none" : `1px solid ${colors.primaryLight}`,
                  }}
                >
                  <span
                    className="mr-4 text-lg"
                    style={{ color: i === 0 ? "white" : colors.primary }}
                  >
                    {cat.icon}
                  </span>
                  <span>{cat.name}</span>
                  {i === 0 && (
                    <motion.span
                      className="ml-auto text-xs px-2 py-1 rounded-full"
                      style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                      whileHover={{ scale: 1.05 }}
                    >
                      24 articles
                    </motion.span>
                  )}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Article Grid */}
        <section className="mb-10 sm:mb-16 md:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articleData.map((article, i) => (
              <ArticleCard key={i} article={article} index={i} />
            ))}
          </div>
        </section>

        {/* Premium CTA - Modern & Vector-Enhanced */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden mb-2 bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-xl"
        >
          {/* Floating Vector Decorations */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            {/* Abstract Blob Vector */}
            <svg
              className="absolute -top-20 -left-20 w-64 h-64"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill={colors.primary}
                d="M45.2,-58.3C58.1,-49.2,67.5,-33.4,70.5,-16.9C73.5,-0.4,70.1,16.9,60.5,32.4C50.9,47.9,35.1,61.7,16.9,68.9C-1.3,76.1,-21.9,76.7,-38.2,67.9C-54.5,59.1,-66.5,40.9,-69.8,21.7C-73.1,2.5,-67.7,-17.7,-56.3,-33.3C-44.9,-48.9,-27.5,-59.9,-8.8,-55.6C9.9,-51.3,19.8,-31.7,45.2,-58.3Z"
                transform="translate(100 100)"
              />
            </svg>

            {/* Geometric Pattern */}
            <svg
              className="absolute -bottom-10 -right-10 w-72 h-72 opacity-70"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill={colors.accent}
                d="M0 0 L200 0 L200 200 L0 200 Z"
                fillOpacity="0.05"
              />
              <path
                fill={colors.accent}
                d="M20 20 L180 20 L180 180 L20 180 Z"
                stroke={colors.accent}
                strokeWidth="2"
                fillOpacity="0"
              />
              <circle
                cx="100"
                cy="100"
                r="40"
                fill={colors.primary}
                fillOpacity="0.1"
              />
            </svg>
          </div>

          {/* Content */}
          <div className="relative z-10 p-8 md:p-12 text-center">
            {/* Premium Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center mb-6 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="mr-2"
              >
                <path
                  d="M12 1L15.09 7.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 7.26L12 1Z"
                  fill={colors.primary}
                  stroke={colors.primary}
                  strokeWidth="1.5"
                />
              </svg>
              <span className="font-medium" style={{ color: colors.primary }}>
                Premium Membership
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-4 bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
              }}
            >
              Unlock Exclusive Perks
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg mb-8 max-w-2xl mx-auto text-gray-600"
            >
              Elevate your experience with early access, premium content, and
              members-only benefits.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-row justify-center gap-3"
            >
              <motion.button
                whileHover={{
                  scale: 1.03,
                  boxShadow: `0 5px 20px ${colors.primary}30`,
                }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 rounded-lg font-semibold flex items-center justify-center gap-2"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  color: "white",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 13L9 17L19 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Join Now
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.03,
                  backgroundColor: `${colors.primary}08`,
                  borderColor: colors.primary,
                }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 rounded-lg font-semibold border-2"
                style={{
                  borderColor: colors.primary,
                  color: colors.primary,
                }}
              >
                See Features
              </motion.button>
            </motion.div>

            {/* Decorative Bottom Vector */}
            <svg
              className="absolute -bottom-20 left-0 w-full h-20 opacity-80"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                fill={colors.primary}
                opacity="0.1"
              />
            </svg>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default MediaArticles;
