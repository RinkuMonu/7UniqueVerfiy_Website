const services = [
  {
    title: 'Hosted VOIP Solutions',
    icon: 'https://ext.same-assets.com/1049470090/4038023982.svg',
    desc: 'Easy management, reliability, and cost-effective connectivity for your business.',
  },
  {
    title: 'Unified Communications',
    icon: 'https://ext.same-assets.com/1049470090/3892385804.svg',
    desc: 'Integrate voice, video, messaging, and collaboration seamlessly into one solution.',
  },
  {
    title: 'SIP Trunking Services',
    icon: 'https://ext.same-assets.com/1049470090/3289590066.svg',
    desc: 'Cost-effective, scalable telephony for businesses seeking modern phone infrastructure.',
  },
  {
    title: 'Virtual Phone Numbers',
    icon: 'https://cdn.prod.website-files.com/675a786888260c63ee46dcc4/675e73c3c15c6d2e3ec97571_Macbook%20Mockup%202.png',
    desc: 'Professional presence anywhere with global, easy-to-manage numbers for your business.',
  },
];

export default function Services() {
  return (
    <>
      <main>
        {/* Intro */}
        <section className="bg-[#f9fbfb] py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#373533] mb-5">Our Services</h1>
            <p className="text-lg md:text-xl text-[#9c9e99] mb-8">
              Empowering businesses with innovative, reliable, and scalable VOIP, telecom, and cloud communication solutions tailored for growth.
            </p>
          </div>
        </section>
        {/* Services Grid */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {services.map((srv) => (
              <div key={srv.title} className="bg-[#f9fbfb] p-8 rounded-xl shadow flex flex-col items-center text-center h-full border border-[#f1ecd7]">
                <img src={srv.icon} alt={srv.title} className="w-16 h-16 mb-5 object-contain" />
                <h3 className="font-bold text-lg mb-3 text-[#373533]">{srv.title}</h3>
                <p className="text-[#9c9e99]">{srv.desc}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Technology/Process Section */}
        <section className="bg-[#f9fbfb] py-16 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            {/* Left: Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#373533] mb-5">Seamless Integration, Maximum Impact</h2>
              <p className="text-[#595c5c] mb-7">Our cloud-driven VOIP and telecom technologies integrate effortlessly into your business, scaling with your team, customers, and goals for the future.</p>
              <ul className="list-disc pl-6 text-[#373533]">
                <li className="mb-1">Smart unified communications platform</li>
                <li className="mb-1">HD voice quality & reliability across all devices</li>
                <li>Advanced data, reporting, and call analytics</li>
              </ul>
            </div>
            {/* Right: Visual asset */}
            <div className="flex justify-center">
              <img src="https://cdn.prod.website-files.com/675a786888260c63ee46dcc4/675e73c31b6bcbf650522673_Macbook%20Mockup%204.png" alt="Tech Process" className="rounded-lg shadow w-[320px]" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
