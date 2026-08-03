import { useState } from "react";

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
    <section className="section" id="pricing" aria-labelledby="pricing-title">
      <div className="container">
        <div className="section-head">
          <p className="mono-label">Pricing</p>
          <h2 id="pricing-title">
            Priced per person, not per seat you forgot to remove.
          </h2>
          <p className="lead">
            Billing follows the people creating work. Viewers, commenters and
            changelog readers are always free.
          </p>

          <div className="billing" role="radiogroup" aria-label="Billing period">
            <button
              type="button"
              role="radio"
              aria-checked={billing === "monthly"}
              onClick={() => setBilling("monthly")}
            >
              Monthly
            </button>
            <button
              type="button"
              role="radio"
              aria-checked={billing === "annual"}
              onClick={() => setBilling("annual")}
            >
              Annual — save 17%
            </button>
          </div>
        </div>

        <ul className="plans">
          {plans.map((plan) => (
            <li key={plan.id}>
              <article
                className="plan"
                data-recommended={plan.recommended || undefined}
                aria-labelledby={`plan-${plan.id}`}
              >
                <div className="plan-name">
                  <h3 id={`plan-${plan.id}`}>{plan.name}</h3>
                  {plan.recommended && <span className="badge">Recommended</span>}
                </div>

                <p className="desc">{plan.desc}</p>

                <div className="price-row">
                  <span className="price">
                    {billing === "monthly" ? plan.monthly : plan.annual}
                  </span>
                  <span className="price-note">{plan.note}</span>
                </div>

                <a
                  className={`btn btn--lg btn--full ${
                    plan.primary ? "btn--primary" : "btn--secondary"
                  }`}
                  href={plan.href}
                >
                  {plan.cta}
                </a>

                <ul className="plan-features">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Pricing;