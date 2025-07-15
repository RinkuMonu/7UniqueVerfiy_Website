"use client";
import { useContext, useEffect, useState } from "react";
import HomeCTA from "../../pages/HomeCTA";
import { Link } from "react-router-dom";
import { ContextData } from "../../config/context";
import SEO from "../Helmet/helment";
import { SEOData } from "../../type";

// Define types
interface BlogPost {
  slug: string;
  title: string;
  image: string;
  created_at: string;
}

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
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 600 &&
        !loading &&
        hasMore
      ) {
        const nextPage = page + 1;
        setPage(nextPage);
        fetchBlogs(nextPage);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore, page]);

  return (
    <>
      <SEO seo={seo} />
      <main className="w-full mx-auto px-6 sm:px-10 bg-[#faf8f8] md:px-16 lg:px-20 xl:px-24 pb-24">
        <section className="text-center all-banner-section mx-auto relative">
          <h2 className="text-3xl sm:text-4xl font-semibold leading-tight relative z-10">
            News &amp; Articles
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2 leading-relaxed relative z-10">
            We are passionate about transforming the way businesses communicate.
            Specializing in VOIP, telecom.
          </p>
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
                <Link to={`/blog/${blog.slug}`}>
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
          <p className="text-center mt-6 text-gray-500">No more blogs to load</p>
        )}

        <HomeCTA />
      </main>
    </>
  );
}
