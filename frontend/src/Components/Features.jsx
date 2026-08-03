import { monoLabel } from "../lib/styles";

const features = [
  {
    title: "Cycle Planning",
    body: "Drag work into a two-week cycle and Keel flags the overcommitment before the cycle starts, not at the retro.",
  },
  {
    title: "Release notes that write themselves",
    body: "Merge a pull request and Keel drafts the customer-facing note from the issue it closed. You edit and publish.",
  },
  {
    title: "Numbers that hold up",
    body: "Throughput, carry-over and cycle time measured per team. No story points, no velocity theatre.",
  },
  {
    title: "Connected to the real work",
    body: "Two-way sync with GitHub and GitLab, threaded updates in Slack, and Figma frames attached to the issue.",
  },
  {
    title: "Built for the keyboard",
    body: "Every action has a shortcut and a command menu entry. Triage a week of inbox in a couple of minutes.",
  },
  {
    title: "Admin without the ticket queue",
    body: "SAML single sign-on, granular roles and a searchable audit log your security reviewer can read alone.",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="w-full max-w-[1100px] border-t border-line px-6 py-24 md:px-0 md:py-[120px]"
      aria-labelledby="features-title"
    >
      <div className="mb-16 max-w-[640px]">
        <p className={`${monoLabel} mb-4`}>What Keel does</p>
        <h2
          id="features-title"
          className="text-balance text-[clamp(1.875rem,3.4vw,2.625rem)] font-semibold leading-[1.12] tracking-[-0.034em]"
        >
          Six things, done properly.
        </h2>
        <p className="mt-4 max-w-[33em] text-[clamp(1.0625rem,1.3vw,1.1875rem)] leading-[1.55] text-muted">
          No configuration weekend, no plugin marketplace. The parts of the job
          a product team actually repeats every fortnight.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="rounded-[14px] border border-line bg-white p-8 shadow-[0_1px_2px_rgb(16_17_20/0.05)] transition-[border-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_1px_2px_rgb(16_17_20/0.04),0_10px_28px_-14px_rgb(16_17_20/0.14)]"
          >
            <h3 className="mb-3 text-[1.0625rem] font-semibold tracking-[-0.018em] leading-[1.35]">
              {feature.title}
            </h3>
            <p className="text-sm leading-[1.55] text-muted">{feature.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Features;
