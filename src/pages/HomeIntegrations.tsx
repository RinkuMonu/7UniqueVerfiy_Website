export default function HomeIntegrations() {
  return (
    <section className="bg-white py-16">
      <div className="w-full mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Instant Messaging Integration (col 1) */}
          <div className="bg-[#f9fbfb] rounded-2xl shadow-sm px-6 py-8 mb-8 md:mb-0 flex flex-col items-start border-t-[4px] border-[#b7603d]">
            <div className="flex gap-3 mb-4">
              <img src="https://ext.same-assets.com/1049470090/1914368053.svg" alt="Cloud-Based Call Analytics" className="w-8 h-8" />
              <img src="https://ext.same-assets.com/1049470090/1914368053.svg" alt="Best Secure User Authentication" className="w-8 h-8" />
              <img src="https://ext.same-assets.com/1049470090/1914368053.svg" alt="Remote Work Connectivity" className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-[#373533]">Instant Messaging Integration</h3>
            <p className="text-[#9c9e99] mb-2">Powerful features to enhance your business communication, including:</p>
            <ul className="list-disc pl-6 text-[#373533] text-sm">
              <li>Cloud-Based Call Analytics</li>
              <li>Best Secure User Authentication</li>
              <li>Remote Work Connectivity</li>
            </ul>
          </div>
          {/* Seamless Software Integration (col 2) */}
          <div className="bg-[#f9fbfb] rounded-2xl shadow-sm p-8 flex flex-col items-start border-t-[4px] border-[#b7603d]">
            <h3 className="font-bold text-lg mb-2 text-[#373533]">Seamless Software Integration</h3>
            <p className="text-[#9c9e99] mb-2">Our solution integrates voice, video, messaging.</p>
            <ul className="list-disc pl-6 text-[#373533] text-sm">
              <li>Clear audio for communication</li>
              <li>Easily scale your communication</li>
              <li>Encrypted cloud-based services</li>
            </ul>
          </div>
          {/* Real Customizable Dashboard (col 3) */}
          <div className="bg-[#f9fbfb] rounded-2xl shadow-sm px-6 py-8 flex flex-col items-start border-t-[4px] border-[#373533]">
            <h3 className="font-bold text-lg mb-2 text-[#373533]">Real Customizable Dashboard</h3>
            <p className="text-[#9c9e99] mb-2">Voice, video, messaging, and collaboration in a single dashboard:</p>
            <ul className="list-disc pl-6 text-[#373533] text-sm">
              <li>Automated call routing</li>
              <li>Record and store calls for training</li>
              <li>Access your communication</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
