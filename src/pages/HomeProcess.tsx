import { FaFileAlt, FaCheckCircle, FaSearch, FaClipboardCheck } from 'react-icons/fa';

export default function HomeProcess() {
  return (
    <section className="bg-[#f5f3f2] py-16 section our-process pb-16">
      <section className="relative w-full mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center" data-aos="zoom-in-down">
          <p className="text-xs font-semibold text-[#0f172a] mb-2 tracking-widest">
            OUR PROCESS
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f172a] leading-tight mb-4">
            Verification Process That's Fast,
            <br className="hidden sm:block" />
            Reliable & Fully Digital
          </h2>
          <p className="text-sm text-[#475569] max-w-xl mx-auto">
            From document collection to real-time validation, we simplify the entire journey using powerful APIs like Aadhaar, PAN, DL, and CKYC—designed for Indian businesses.
          </p>
        </div>

        <nav
          aria-label="Process steps"
          className="navborder max-w-5xl mx-auto mt-12 flex justify-between text-xs font-semibold text-[#0f172a]"
        >
          <div className="relative flex-1 flex justify-center">
            <span className="relative z-10 bg-[#f3f8fb] border border-dashed border-[#cbd5e1] rounded-full px-5 py-1">
              Step 01
            </span>
          </div>
          <div className="relative flex-1 flex justify-center">
            <span className="relative z-10 bg-[#f3f8fb] border border-dashed border-[#cbd5e1] rounded-full px-5 py-1">
              Step 02
            </span>
          </div>
          <div className="relative flex-1 flex justify-center">
            <span className="relative z-10 bg-[#f3f8fb] border border-dashed border-[#cbd5e1] rounded-full px-5 py-1">
              Step 03
            </span>
          </div>
          <div className="relative flex-1 flex justify-center">
            <span className="relative z-10 bg-[#f3f8fb] border border-dashed border-[#cbd5e1] rounded-full px-5 py-1">
              Step 04
            </span>
          </div>
        </nav>

        <div className="mt-10 w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="zoom-out">
          <article className="bg-white rounded-xl p-8 flex flex-col items-center text-center">
            <div className="bg-[#b7603d] rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <FaFileAlt className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-[#0f172a] mb-2 text-lg">
              Submit Basic Details
            </h3>
            <p className="text-[#475569] text-sm leading-relaxed">
              Start with user or entity information like Aadhaar number, PAN, or mobile number via API or form.
            </p>
          </article>

          <article className="bg-white rounded-xl p-8 flex flex-col items-center text-center">
            <div className="bg-[#b7603d] rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <FaCheckCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-[#0f172a] mb-2 text-lg">
              Instant Data Validation
            </h3>
            <p className="text-[#475569] text-sm leading-relaxed">
              Real-time validation using 7Unique Verify's APIs with OTP or consent-based authentication.
            </p>
          </article>

          <article className="bg-white rounded-xl p-8 flex flex-col items-center text-center">
            <div className="bg-[#b7603d] rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <FaSearch className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-[#0f172a] mb-2 text-lg">
              Data Cross-Check
            </h3>
            <p className="text-[#475569] text-sm leading-relaxed">
              Verified data is matched against official databases (UIDAI, NSDL, MoRTH, etc.) for fraud prevention.
            </p>
          </article>

          <article className="bg-white rounded-xl p-8 flex flex-col items-center text-center">
            <div className="bg-[#b7603d] rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <FaClipboardCheck className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-[#0f172a] mb-2 text-lg">
              Verification Complete
            </h3>
            <p className="text-[#475569] text-sm leading-relaxed">
              Receive success or failure response instantly with detailed verification report and reference ID.
            </p>
          </article>
        </div>
      </section>
    </section>
  );
}