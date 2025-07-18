"use client";
import { useParams, Link } from "react-router-dom";
import { FaUserPen } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import axios from "axios";
import DOMPurify from "dompurify";
import { useContext, useEffect, useState } from "react";
import { ContextData } from "../../config/context";
import { SEOData } from "../../type";
import SEO from "../Helmet/helment";

// Define types for your data structures
interface BlogPost {
  slug: string;
  title: string;
  content: string;
  image: string;
  created_at: string;
  category_id: number;
  // Add other properties as needed
}

interface Category {
  name: string;
  // Add other properties as needed
}

const cleanContent = (html: string): string => {
  return DOMPurify.sanitize(html, {
    FORBID_ATTR: [""], // removes inline styles
  });
};

export default function BlogDetail() {
  const { seo } = useContext(ContextData) as { seo: SEOData };
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [category, setCategory] = useState<Category | null>(null);

  useEffect(() => {
    setPost(null);
    setCategory(null);

    const fetchBlogPost = async () => {
      try {
        const postRes = await fetch(
          `https://cms.sevenunique.com/apis/blogs/get-blogs.php?status=2&slug=${slug}&website_id=7`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
            },
          }
        );

        const postJson = await postRes.json();

        if (postJson.status === "success" && postJson.data.length > 0) {
          const matchedPost = postJson.data.find((p: BlogPost) => p.slug === slug);
          if (matchedPost) {
            matchedPost.content = cleanContent(matchedPost.content);
            setPost(matchedPost);

            // Fetch category after post is set
            const categoryRes = await fetch(
              `https://cms.sevenunique.com/apis/category/get_category_by_id.php?category_id=${matchedPost.category_id}`,
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
                },
              }
            );
            const categoryJson = await categoryRes.json();
            setCategory(categoryJson.data);
          } else {
            setPost(null);
          }
        }
      } catch (err) {
        console.error("Failed to fetch blog post:", err);
      }
    };

    fetchBlogPost();
  }, [slug]);

  if (!post) {
    return (
      <div className="py-16 px-4 text-center">
        <h2 className="text-2xl text-red-600 font-semibold">Blog not found.</h2>
        <div className="mt-4">
          <Link
            to="/blog"
            className="inline-block px-6 py-2 bg-[#b7603d] text-white rounded hover:bg-blue-700"
          >
            Back to Blog List
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO seo={seo} />
      <section className="py-16 px-4 bg-white max-w-5xl mx-auto">
        <img
          src={post?.image}
          alt={post?.title}
          className="w-full h-[400px] object-cover rounded mb-6"
        />
        <span className="flex items-center gap-5">
          <span className="flex items-center">
            <FaCalendarAlt className="mr-2 text-cyan-500" />
            {new Date(post?.created_at).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
          {category && (
            <span className="rounded-lg bg-slate-300 px-3 text-sm">
              {category.name}
            </span>
          )}
        </span>

        <h1 className="text-3xl font-bold my-6">{post?.title}</h1>

        <div
          className="space-y-4 text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post?.content }}
        />

        <div className="mt-8">
          <Link
            to="/blog"
            className="inline-block border border-[#b7603d] text-[#b7603d] hover:bg-[#b7603d] hover:text-white transition px-6 py-2 rounded"
          >
            ← Back to All Blogs
          </Link>
        </div>
      </section>
    </>
  );
}