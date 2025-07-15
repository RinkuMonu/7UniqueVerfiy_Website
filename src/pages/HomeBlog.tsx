const blogPosts = [
  {
    title: 'Mastering Responsive Design: Best Practices for 2024',
    date: 'Dec 18, 2024',
    author: 'Jamie Carter',
    excerpt: 'Learn the latest responsive design strategies to optimize user experience across all screens in 2024.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    link: '/news/mastering-responsive-design-best-practices-for-2024',
  },
  {
    title: 'Cloud-Based Phone Systems: Boosting Remote Productivity',
    date: 'Nov 11, 2024',
    author: 'Devon Lane',
    excerpt: 'Explore how modern cloud phone systems transform business support, remote work, and operational efficiency.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    link: '/news/cloud-phone-systems-remote-productivity',
  },
  {
    title: 'Unified Communication: Why Every Business Needs It',
    date: 'Oct 28, 2024',
    author: 'Jenny Wilson',
    excerpt: 'Combine calls, chats, and video under one platform. Discover how it drives collaboration and scalability.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    link: '/news/unified-communications-modern-business',
  },
];

export default function HomeBlog() {
  return (
    <section className="bg-[#f1e8e5] py-16">
      <div className="w-full mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#373533] mb-4 text-center">
          Latest Tech Insights & Communication Trends
        </h2>
        <p className="text-lg text-[#9c9e99] text-center mb-14 max-w-2xl mx-auto">
          Stay ahead with expert takes on VOIP, cloud APIs, digital communication, and scalable tech solutions.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <a
              key={post.link}
              href={post.link}
              className="bg-white hover:shadow-lg transition rounded-xl overflow-hidden block shadow border border-[#e0e5ef]"
            >
              <img
                src={post.image}
                alt={`Thumbnail for ${post.title}`}
                className="object-cover h-44 w-full"
              />
              <div className="p-6 flex flex-col h-full">
                <div className="text-sm text-[#9c9e99] mb-1">{post.author} / {post.date}</div>
                <div className="font-bold text-lg text-[#373533] mb-3">{post.title}</div>
                <div className="text-[#595c5c] text-base mb-4">{post.excerpt}</div>
                <span className="inline-flex items-center text-[#b7603d] font-bold hover:underline mt-auto">
                  Read more
                  <img
                    src="https://ext.same-assets.com/1049470090/3253856763.svg"
                    alt="Right arrow icon"
                    className="h-4 w-4 ml-2"
                  />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
