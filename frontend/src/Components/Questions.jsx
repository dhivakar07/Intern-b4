import { useState } from "react";
import { monoLabel } from "../lib/styles";

const faqs = [
  {
    q: "How long does it take to move off our current tracker?",
    a: "Most teams finish a guided import in an afternoon. Issues, projects and people come across; history stays readable.",
  },
  {
    q: "Do you charge for stakeholders who only read?",
    a: "No. Viewers, commenters and changelog readers are free. Billing follows people who create work.",
  },
  {
    q: "What happens when the trial ends?",
    a: "Your workspace stays read-only until you pick a plan. Nothing is deleted and nothing ships to production without you.",
  },
  {
    q: "Can we self-host Keel?",
    a: "Cloud is the default. Self-hosting is available on Scale with a named account manager.",
  },
  {
    q: "How does the changelog know what to write?",
    a: "Keel drafts from the issue closed by each merged pull request. You edit the note before it goes public.",
  },
];

function PlusIcon({ open }) {
  return (
    <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-line-strong text-soft">
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <path d="M12 5.5v13" className={open ? "opacity-0" : ""} />
        <path d="M5.5 12h13" />
      </svg>
    </span>
  );
}

function Questions() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="faq"
      className="w-full border-t border-line bg-surface"
      aria-labelledby="faq-title"
    >
      <div className="mx-auto grid w-full max-w-[1100px] gap-12 px-6 py-24 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:px-0 lg:py-[120px]">
        <div className="max-w-[420px]">
          <p className={`${monoLabel} mb-4`}>Questions</p>
          <h2
            id="faq-title"
            className="text-balance text-[clamp(1.875rem,3.4vw,2.625rem)] font-semibold leading-[1.12] tracking-[-0.034em]"
          >
            Answers before you ask sales.
          </h2>
          <p className="mt-4 text-[clamp(1.0625rem,1.3vw,1.1875rem)] leading-[1.55] text-muted">
            Still stuck? Write to{" "}
            <a href="#contact" className="underline decoration-line-strong underline-offset-2 hover:text-accent">
              our team
            </a>{" "}
            and a person who uses Keel every day will reply.
          </p>
        </div>

        <div className="border-t border-line">
          {faqs.map((item, index) => {
            const open = openIndex === index;
            return (
              <div key={item.q} className="border-b border-line">
                <button
                  type="button"
                  className="flex w-full cursor-pointer items-center justify-between gap-6 bg-transparent py-5 text-left"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : index)}
                >
                  <span className="text-base font-medium tracking-[-0.015em] text-ink">
                    {item.q}
                  </span>
                  <PlusIcon open={open} />
                </button>
                {open && (
                  <p className="pb-5 pr-14 text-sm leading-[1.55] text-muted">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Questions;
