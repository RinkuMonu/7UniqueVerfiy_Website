import { useParams } from "react-router-dom";
import { articles } from "./articelsdata";
import { motion } from "framer-motion";
import { useEffect } from "react";

const ArticleDetail = () => {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f1eb]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-20 text-[#b7603d] text-2xl font-medium"
        >
          Article not found
        </motion.div>
      </div>
    );
  }

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-[#f8f1eb] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        {/* Abstract vector shapes */}
        <svg className="absolute top-10 left-10 w-32 h-32 opacity-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#b7603d" d="M45,-60.8C57.8,-53.2,67.3,-38.5,73.5,-21.8C79.7,-5.1,82.6,13.6,75.8,27.6C69,41.6,52.5,51,35.1,60.3C17.7,69.6,-0.6,78.8,-16.5,74.8C-32.4,70.8,-45.9,53.6,-56.8,35.8C-67.7,18,-76,0.6,-73.3,-15.2C-70.6,-31,-56.8,-45.2,-41.5,-52.3C-26.2,-59.4,-9.4,-59.4,5.9,-66.4C21.2,-73.4,32.3,-87.4,45,-60.8Z" transform="translate(100 100)" />
        </svg>
        
        <svg className="absolute bottom-20 right-10 w-40 h-40 opacity-15" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#b7603d" d="M39.2,-56.4C52.9,-49.3,67.7,-42.1,74.9,-30.1C82.1,-18.1,81.7,-1.3,76.4,12.9C71.1,27.1,60.9,38.7,48.9,50.3C36.9,61.9,23.1,73.5,7.9,77.8C-7.3,82.1,-23.9,79.1,-36.8,69.7C-49.7,60.3,-59,44.5,-65.6,27.9C-72.2,11.3,-76.2,-6.1,-70.8,-19.3C-65.4,-32.5,-50.6,-41.5,-36.8,-48.6C-23,-55.7,-10.2,-60.9,1.8,-63.5C13.8,-66.1,27.6,-66.1,39.2,-56.4Z" transform="translate(100 100)" />
        </svg>
        
        {/* Geometric patterns */}
        <svg className="absolute top-1/4 -left-20 w-64 h-64 opacity-5" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="20" stroke="#b7603d" strokeWidth="2" fill="none" />
          <circle cx="75" cy="25" r="20" stroke="#b7603d" strokeWidth="2" fill="none" />
          <circle cx="25" cy="75" r="20" stroke="#b7603d" strokeWidth="2" fill="none" />
          <circle cx="75" cy="75" r="20" stroke="#b7603d" strokeWidth="2" fill="none" />
        </svg>
        
        <svg className="absolute bottom-1/3 -right-20 w-64 h-64 opacity-5" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="30" height="30" stroke="#b7603d" strokeWidth="2" fill="none" />
          <rect x="60" y="10" width="30" height="30" stroke="#b7603d" strokeWidth="2" fill="none" />
          <rect x="10" y="60" width="30" height="30" stroke="#b7603d" strokeWidth="2" fill="none" />
          <rect x="60" y="60" width="30" height="30" stroke="#b7603d" strokeWidth="2" fill="none" />
        </svg>

        {/* Blob elements */}
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#f0d9cc] opacity-30 mix-blend-multiply blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-[#e8c4b0] opacity-20 mix-blend-multiply blur-xl"></div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container max-w-4xl mx-auto py-16 px-4 relative z-10"
      >
        {/* Breadcrumb */}
        <motion.div variants={item} className="mb-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
              <li className="inline-flex items-center">
                <a href="/" className="inline-flex items-center text-sm font-medium text-[#b7603d] hover:text-[#8c4a2e]">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <a href="#" className="ml-1 text-sm font-medium text-gray-500 md:ml-2">{article.category}</a>
                </div>
              </li>
            </ol>
          </nav>
        </motion.div>

        {/* Article Header */}
        <motion.div variants={item} className="mb-12">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-[#b7603d] uppercase bg-[#f0d9cc] rounded-full mb-4"
          >
            {article.category}
          </motion.span>
          
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {article.title}
          </motion.h1>
          
          <motion.div 
            className="flex items-center text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <time className="text-sm">
              {new Date(article.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </time>
          </motion.div>
        </motion.div>

        {/* Featured Image */}
        <motion.div 
          variants={item}
          className="mb-12 rounded-xl overflow-hidden shadow-lg relative"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          {/* Vector decoration on image */}
          <svg className="absolute -bottom-10 -right-10 w-32 h-32 opacity-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#b7603d" d="M42.7,-60.3C54.3,-53.2,62.1,-39.1,68.8,-23.1C75.5,-7.1,81.1,10.8,75.9,25.1C70.7,39.4,54.7,50.1,38.6,58.8C22.5,67.5,6.2,74.2,-9.8,72.9C-25.8,71.6,-41.5,62.3,-53.4,49.3C-65.3,36.3,-73.3,19.6,-74.2,1.9C-75.1,-15.8,-68.9,-34.6,-56.4,-47.2C-43.9,-59.8,-25.1,-66.2,-7.3,-62.1C10.5,-58,21,-43.4,42.7,-60.3Z" transform="translate(100 100)" />
          </svg>
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-auto object-cover max-h-96"
          />
        </motion.div>

        {/* Article Content */}
        <motion.div 
          variants={item}
          className="prose prose-lg max-w-none text-gray-700 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {/* Small decorative vectors in content */}
          <svg className="absolute -left-20 top-1/4 w-16 h-16 opacity-10 hidden md:block" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,5 90,90 10,90" stroke="#b7603d" strokeWidth="2" fill="none" />
          </svg>
          
          {article.content.split('\n').map((paragraph, i) => (
            <motion.p 
              key={i} 
              className="mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.05 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>

        {/* Divider with vector decoration */}
        <motion.div 
          variants={item}
          className="my-12 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="border-t border-[#e8c4b0] relative">
            <svg className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 text-[#b7603d]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </motion.div>

        {/* Back button */}
        <motion.div 
          variants={item}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="text-center relative"
        >
          {/* Button decoration */}
          <svg className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-8 h-8 opacity-30 hidden md:block" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M20,50 Q35,20 50,50 T80,50" stroke="#b7603d" strokeWidth="2" fill="none" />
          </svg>
          
          <a 
            href="/media-articles" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#b7603d] hover:bg-[#8c4a2e] transition-colors duration-300 shadow-sm relative"
          >
            <svg className="-ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Articles
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ArticleDetail;