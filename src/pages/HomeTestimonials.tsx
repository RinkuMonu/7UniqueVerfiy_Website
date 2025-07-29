import React from "react";
import "./homeTestimonials.css";
interface Testimonial {
  name: string;
  location: string;
  role: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Chandan Richards",
    location: "Pune, India",
    role: "Compliance Officer",
    quote:
      "7Unique Verify has simplified our KYC process completely. Real-time PAN and Aadhaar validation helps us onboard customers faster without compromising compliance.",
    rating: 5,
  },
  {
    name: "Deepak Sharma",
    location: "Gurgaon, India",
    role: "Risk Analyst",
    quote:
      "We've integrated multiple APIs from 7Unique Verify—CKYC, Voter ID, and DL checks. Their platform is reliable, fast, and easy to plug into our existing systems.",
    rating: 5,
  },
  {
    name: "Sonu Wilson",
    location: "Jaipur, India",
    role: "Operations Manager",
    quote:
      "Using 7Unique Verify, our employee background checks are now automated and verifiable within seconds. The support team is also very responsive and helpful.",
    rating: 5,
  },
];

interface StarsProps {
  count: number;
}

const Stars: React.FC<StarsProps> = ({ count }) => {
  return (
    <div className="flex items-center mb-2">
      {Array.from({ length: count }, (_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-[#b7603d] mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const HomeTestimonials: React.FC = () => {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#f8e9e3] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#f0d5cc] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-32 h-32 bg-[#e5c4b8] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative w-full mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#3a2a22] mb-4 relative inline-block">
            Real Stories from Satisfied Customers
            <svg
              className="absolute -bottom-2 left-0 w-full h-2 text-[#b7603d]"
              viewBox="0 0 200 10"
            >
              <path
                d="M0,5 Q50,10 100,5 T200,5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </h2>
          <p className="text-lg text-[#6e5c53] max-w-2xl mx-auto">
            Our clients' satisfaction is at the heart of everything we do. We
            take pride in delivering exceptional communication.
          </p>
        </div>

        {/* Stars rating summary */}
        <div className="flex flex-col md:flex-row gap-2 justify-center items-center mb-16">
          <div className="flex items-center bg-gradient-to-r from-[#b7603d] to-[#9c4d2e] px-4 py-2 rounded-full shadow-md transform hover:scale-105 transition-transform duration-300">
            <svg
              className="w-6 h-6 text-white mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-white font-bold text-lg mr-2">4.8/5</span>
            <span className="text-white text-sm">Based on 14K+ reviews</span>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={t.name}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#e9e0db] relative overflow-hidden group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#f8e9e3] rounded-bl-full transform translate-x-6 -translate-y-6 group-hover:bg-[#f0d5cc] transition-colors duration-300"></div>

              <Stars count={t.rating} />
              <blockquote className="text-lg text-[#3a2a22] mb-6 relative z-10">
                <svg
                  className="w-6 h-6 text-[#d9c7bf] mb-2 opacity-70"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="leading-relaxed">"{t.quote}"</p>
              </blockquote>
              <div className="mt-auto pt-4 border-t border-[#e9e0db]">
                <div className="font-bold text-[#3a2a22]">{t.name}</div>
                {t.role && (
                  <div className="text-sm text-[#6e5c53]">{t.role}</div>
                )}
                {t.location && (
                  <div className="text-sm text-[#6e5c53] flex items-center mt-1">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {t.location}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Floating vector elements */}
        <div className="hidden lg:block">
          <div className="absolute -left-20 top-1/3 w-40 h-40 bg-[#f0d5cc] rounded-full opacity-20 animate-float"></div>
          <div className="absolute right-0 bottom-0 w-32 h-32 bg-[#e5c4b8] rounded-full opacity-20 animate-float animation-delay-3000"></div>
          <svg
            className="absolute top-1/4 right-10 w-24 h-24 text-[#f0d5cc] animate-spin-slow"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>

      {/* <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-blob {
          animation: blob 7s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style> */}
    </section>
  );
};

export default HomeTestimonials;
