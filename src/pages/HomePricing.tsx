import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  Key,
  ReactPortal,
} from "react";

const monthlyPlans = [
  {
    title: "Basic",
    price: 99,
    period: "/ month",
    features: [
      "Custom reports and analytics",
      "10 inventory locations",
      "Enhanced 24/7 chat support",
    ],
    link: "/product/basic",
    highlight: true,
  },
  {
    title: "Advanced",
    price: 299,
    period: "/ month",
    features: [
      "0.6% 3rd-party payment providers",
      "Custom reports and analytics",
      "15 additional staff accounts",
    ],
    link: "/product/advanced",
  },
  {
    title: "Enterprise",
    price: 499,
    period: "/ month",
    features: [
      "Custom reports and analytics",
      "Priority 24/7 phone support",
      "Localized global selling (50 markets)",
    ],
    link: "/product/enterprise",
  },
];

const yearlyPlans = [
  {
    title: "Basic",
    price: 199,
    period: "/ yearly",
    features: [
      "Custom reports and analytics",
      "10 inventory locations",
      "Enhanced 24/7 chat support",
    ],
    link: "/product/basic",
    highlight: true,
  },
  {
    title: "Advanced",
    price: 399,
    period: "/ yearly",
    features: [
      "0.6% 3rd-party payment providers",
      "Custom reports and analytics",
      "15 additional staff accounts",
    ],
    link: "/product/advanced",
  },
  {
    title: "Enterprise",
    price: 599,
    period: "/ yearly",
    features: [
      "Custom reports and analytics",
      "Priority 24/7 phone support",
      "Localized global selling (50 markets)",
    ],
    link: "/product/enterprise",
  },
];

function PlanCard({ title, price, period, features, link, highlight }: any) {
  return (
    <div
      className={`flex flex-col items-center justify-between bg-white p-7 rounded-2xl shadow-md border border-gray-100 ${highlight ? "ring-2 ring-[#b7603d]" : ""}`}
    >
      <div className="mb-2">
        <span className="inline-block bg-[#f9fbfb] text-[#b7603d] font-bold px-3 py-1 rounded-full text-xs mb-2">
          {title}
        </span>
      </div>
      <div className="flex items-baseline mb-3">
        <span className="text-3xl md:text-4xl font-bold text-[#373533]">
          ${price}
        </span>
        <span className="text-[#9c9e99] text-lg ml-1">{period}</span>
      </div>
      <ul className="text-[#373533] mb-4 text-md space-y-1 min-h-[92px] list-disc list-inside">
        {features.map(
          (
            f:
              | string
              | number
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | Iterable<ReactNode>
              | ReactPortal
              | null
              | undefined,
            index: Key | null | undefined
          ) => (
            <li key={index}>{typeof f === "string" ? f : null}</li>
          )
        )}
      </ul>
      <a
        href={link}
        className="w-full bg-[#b7603d] hover:bg-[#d19983] text-[#ffffff] font-bold text-center py-3 rounded mt-auto transition"
      >
        Start 7-day free trial
      </a>
      {highlight && (
        <span className="text-xs text-[#b7603d] font-bold mt-1">Best Deal</span>
      )}
    </div>
  );
}

export default function HomePricing() {
  return (
    <section className="bg-[#f1e8e5] py-16">
      <div className="w-full mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#373533] mb-4">
            Find the Right Plan for Seamless Communication.
          </h2>
          <p className="text-[#9c9e99] text-lg">
            The power of VOIP, telecom, and cloud technologies to deliver
            seamless communication solutions for businesses of all sizes.
          </p>
        </div>
        <div className="mb-8 flex justify-center gap-4">
          <button className="px-6 py-3 rounded-lg bg-[#b7603d] text-[#373533] font-semibold shadow">
            Monthly
          </button>
          <button className="px-6 py-3 rounded-lg bg-white text-[#373533] font-semibold border border-gray-200 hover:bg-[#f9fbfb]">
            Yearly
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {monthlyPlans.map((p) => (
            <PlanCard key={p.title + "m"} {...p} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {yearlyPlans.map((p) => (
            <PlanCard key={p.title + "y"} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
