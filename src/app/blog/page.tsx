"use client";
import { useContext, useEffect, useState } from "react";
import HomeCTA from "../../pages/HomeCTA";
import { Link } from "react-router-dom";
import { ContextData } from "../../config/context";
import SEO from "../Helmet/helment";
import { SEOData } from "../../type";

// Define types for your data structures
interface BlogPost {
  slug: string;
  title: string;
  image: string;
  created_at: string;
  // Add other properties as needed
}

export default function BlogPage() {
  const [blogPosts, setAllblog] = useState<BlogPost[]>([]);
  const { seo } = useContext(ContextData) as { seo: SEOData };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          "https://cms.sevenunique.com/apis/blogs/get-blogs.php?website_id=7&status=2",
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
          setAllblog(data.data);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

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
          {blogPosts.length > 0 ? (
            blogPosts.map((blog) => (
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

        <HomeCTA />
      </main>
    </>
  );
}
