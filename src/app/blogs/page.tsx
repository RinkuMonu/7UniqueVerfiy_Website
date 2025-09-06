"use client";
import { useContext, useEffect, useState } from "react";
import HomeCTA from "../../pages/HomeCTA";
import { Link } from "react-router-dom";
import { ContextData } from "../../config/context";
import SEO from "../Helmet/helment";
import { SEOData } from "../../type";
import { motion } from "framer-motion";
// Define types
interface BlogPost {
  slug: string;
  title: string;
  image: string;
  created_at: string;
}

interface ColorPalette {
  primary: string;
  primaryLight: string;
  primaryDark: string;
  accent: string;
  background: string;
  text: string;
  lightText: string;
}
const colors: ColorPalette = {
  primary: "#b7603d",
  primaryLight: "#f0d8cf",
  primaryDark: "#8c4a2e",
  accent: "#5d8a66",
  background: "#faf7f5",
  text: "#2d2d2d",
  lightText: "#6d6d6d",
};
export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const { seo } = useContext(ContextData) as { seo: SEOData };

  const limit = 3;

  const fetchBlogs = async (newPage = 1) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://cms.sevenunique.com/apis/blogs/get-blogs.php?website_id=7&status=2&page=${newPage}&limit=${limit}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
          },
        }
      );

      const data = await res.json();

      if (data?.data) {
        setBlogs((prev) => [...prev, ...data.data]);

        const pagination = data.pagination || {};
        if (pagination.total_pages) {
          setTotalPages(pagination.total_pages);
        }

        if (newPage >= pagination.total_pages) {
          setHasMore(false);
        }
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogs(1);
  }, []);

  useEffect(() => {
    let throttleTimeout: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      if (throttleTimeout) return;

      throttleTimeout = setTimeout(() => {
        const scrollPosition = window.innerHeight + window.scrollY;
        const bottomOffset = document.body.offsetHeight - 1200; // earlier trigger

        if (scrollPosition >= bottomOffset && !loading && hasMore) {
          const nextPage = page + 1;
          setPage(nextPage);
          fetchBlogs(nextPage);
        }

        throttleTimeout = null;
      }, 1000); // throttle interval (ms)
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore, page]);

  return (
    <>
      <SEO seo={seo} />
      <main className="w-full mx-auto px-6 sm:px-10 bg-[#faf8f8] md:px-16 lg:px-20 xl:px-24 pb-24">
        <section className="text-center all-banner-section mx-auto relative">
          <motion.header
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=" text-center relative"
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
          {/* <p className="text-sm sm:text-base text-gray-600 mt-2 leading-relaxed relative z-10">
            We are passionate about transforming the way businesses communicate.
            Specializing in VOIP, telecom.
          </p> */}
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
            <svg
              aria-hidden="true"
              className="opacity-10"
              fill="none"
              height="160"
              width="160"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40 0v160M80 0v160M120 0v160M0 40h160M0 80h160M0 120h160"
                stroke="#D1D5DB"
                strokeWidth="1"
              />
            </svg>
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <article
                key={blog.slug}
                className="bg-[#F5F9FA] rounded-xl overflow-hidden shadow-sm"
              >
                <Link to={`/blogs/${blog.slug}`}>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-44 object-cover rounded-t-xl"
                    loading="lazy"
                  />
                  <div className="p-5">
                    <div className="flex items-center text-gray-600 text-xs mb-2 space-x-2">
                      <span>
                        {new Date(blog.created_at).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <h3 className="font-semibold text-base leading-snug mb-3">
                      {blog.title}
                    </h3>
                    <div className="text-xs font-semibold flex items-center space-x-1 text-black">
                      <span>Read More</span>
                      <span className="bg-[#b7603d] text-white rounded-full w-5 h-5 flex items-center justify-center text-sm font-bold leading-none">
                        ▹
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))
          ) : (
            <p className="col-span-full text-center py-10">
              No blog posts available.
            </p>
          )}
        </section>

        {loading && (
          <div className="flex justify-center mt-6">
            <div className="w-8 h-8 border-4 border-t-transparent border-[#b7603d] rounded-full animate-spin"></div>
          </div>
        )}

        {!hasMore && blogs.length > 0 && (
          <p className="text-center mt-6 text-gray-500">
            No more blogs to load
          </p>
        )}

        <HomeCTA />
      </main>
    </>
  );
}
