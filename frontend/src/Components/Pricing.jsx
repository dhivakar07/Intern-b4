import { useState } from "react";
import {
  btn,
  btnFull,
  btnLg,
  btnPrimary,
  btnSecondary,
  monoLabel,
} from "../lib/styles";

const plans = [
  {
    id: "starter",
    name: "Starter",
    desc: "For a first team getting off spreadsheets and sticky notes.",
    monthly: "Free",
    annual: "Free",
    note: "Free for up to 10 people",
    cta: "Start free",
    href: "#contact",
    primary: false,
    recommended: false,
    features: [
      "Unlimited issues and projects",
      "Cycle planning",
      "30 days of insight history",
      "GitHub and Slack integrations",
      "Community support",
    ],
  },
  {
    id: "team",
    name: "Team",
    desc: "For product teams shipping on a cycle and publishing changes.",
    monthly: "$18",
    annual: "$15",
    note: "per person, per month",
    cta: "Start 14-day trial",
    href: "#contact",
    primary: true,
    recommended: true,
    features: [
      "Everything in Starter",
      "Automatic release notes and public changelog",
      "Unlimited insight history",
      "Roadmaps and dependency tracking",
      "Priority email support, 1 business day",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    desc: "For several teams that answer to security review and finance.",
    monthly: "$34",
    annual: "$29",
    note: "per person, per month",
    cta: "Talk to sales",
    href: "#contact",
    primary: false,
    recommended: false,
    features: [
      "Everything in Team",
      "SAML single sign-on and SCIM provisioning",
      "Audit log and data residency choice",
      "Custom workflows per team",
      "Named account manager",
    ],
  },
];

function CheckIcon() {
  return (
    <svg
      className="mt-[3px] text-accent"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  );
}

function Pricing() {
  const [billing, setBilling] = useState("monthly");

  return (
    <section
      className="w-full max-w-[1100px] border-t border-line px-6 py-24 md:px-0 md:py-[120px]"
      id="pricing"
      aria-labelledby="pricing-title"
    >
      <div className="mb-16 max-w-[640px]">
        <p className={`${monoLabel} mb-4`}>Pricing</p>
        <h2
          id="pricing-title"
          className="text-balance text-[clamp(1.875rem,3.4vw,2.625rem)] font-semibold leading-[1.12] tracking-[-0.034em]"
        >
          Priced per person, not per seat you forgot to remove.
        </h2>
        <p className="mt-4 text-[clamp(1.0625rem,1.3vw,1.1875rem)] leading-[1.55] text-muted">
          Billing follows the people creating work. Viewers, commenters and
          changelog readers are always free.
        </p>

        <div
          className="mt-6 inline-flex gap-1 rounded-full border border-line bg-white p-1 shadow-[0_1px_2px_rgb(16_17_20/0.05)]"
          role="radiogroup"
          aria-label="Billing period"
        >
          <button
            type="button"
            role="radio"
            aria-checked={billing === "monthly"}
            onClick={() => setBilling("monthly")}
            className={`cursor-pointer rounded-full border-0 px-4 py-2 text-sm font-medium transition-[background-color,color] duration-200 ${
              billing === "monthly"
                ? "bg-ink text-paper"
                : "bg-transparent text-muted"
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            role="radio"
            aria-checked={billing === "annual"}
            onClick={() => setBilling("annual")}
            className={`cursor-pointer rounded-full border-0 px-4 py-2 text-sm font-medium transition-[background-color,color] duration-200 ${
              billing === "annual"
                ? "bg-ink text-paper"
                : "bg-transparent text-muted"
            }`}
          >
            Annual — save 17%
          </button>
        </div>
      </div>

      <ul className="grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {plans.map((plan) => (
          <li
            key={plan.id}
            className="sm:last:col-span-2 lg:last:col-span-1"
          >
            <article
              className={`flex h-full flex-col rounded-[14px] border bg-white p-8 shadow-[0_1px_2px_rgb(16_17_20/0.05)] transition-[border-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_1px_2px_rgb(16_17_20/0.04),0_10px_28px_-14px_rgb(16_17_20/0.14)] ${
                plan.recommended
                  ? "border-ink shadow-[0_1px_2px_rgb(16_17_20/0.05),0_22px_48px_-20px_rgb(16_17_20/0.22)]"
                  : "border-line"
              }`}
              aria-labelledby={`plan-${plan.id}`}
            >
              <div className="mb-2 flex items-center gap-2">
                <h3
                  id={`plan-${plan.id}`}
                  className="text-[1.0625rem] font-semibold leading-[1.35] tracking-[-0.018em]"
                >
                  {plan.name}
                </h3>
                {plan.recommended && (
                  <span className="rounded-full border border-accent-line bg-accent-soft px-2 py-[3px] font-mono text-[0.6875rem] tracking-[0.08em] text-accent uppercase">
                    Recommended
                  </span>
                )}
              </div>

              <p className="pb-6 text-sm leading-[1.55] text-muted">
                {plan.desc}
              </p>

              <div className="flex items-baseline gap-2 border-t border-line py-6">
                <span className="text-4xl font-semibold tracking-[-0.04em] tabular-nums leading-none">
                  {billing === "monthly" ? plan.monthly : plan.annual}
                </span>
                <span className="text-sm text-muted">{plan.note}</span>
              </div>

              <a
                className={`${btn} ${btnLg} ${btnFull} mb-6 ${
                  plan.primary ? btnPrimary : btnSecondary
                }`}
                href={plan.href}
              >
                {plan.cta}
              </a>

              <ul className="grid list-none gap-2 border-t border-line pt-6">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="grid grid-cols-[16px_1fr] items-start gap-2 text-sm leading-normal text-soft"
                  >
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Pricing;
