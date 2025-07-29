import { FaComment } from "react-icons/fa";

export default function KnowMore() {
  return (
    <section className="pt-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500/40 to-orange-500/80 pb-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 py-14">
        {/* Left: Text Section */}
        <div className="text-left">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">
            Need Some Help?
          </h2>
          <p className="text-lg sm:text-md text-gray-600 max-w-xl">
            Need guidance or just a push in the right direction? Reach out to
            our experts whenever you like.
          </p>
        </div>

        {/* Right: Button Section */}
        <div>
          <a
            href="/contact-us"
            className="flex items-center justify-center gap-2 bg-[#b7603d] hover:bg-[#a04b2a] text-gray-100  font-medium py-3 px-6 rounded-lg transition-colors shadow-md"
          >
            <FaComment />
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
