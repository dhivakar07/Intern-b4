import { monoLabel } from "../lib/styles";

const quotes = [
  {
    body: "We stopped writing release notes by hand in week one. Six months on, every ship still has a note, which was never true before.",
    name: "Sana Okonkwo",
    role: "VP Engineering, Northwind Labs",
  },
  {
    body: "Planning used to eat a full afternoon for eleven people. It is a 25 minute call now, and the cycle actually reflects what we finish.",
    name: "Marcus Feld",
    role: "Head of Product, Cadence",
  },
  {
    body: "The carry-over chart was uncomfortable to look at, and then it was the thing that got us to cut scope. That is a rare tool.",
    name: "Priya Raghunathan",
    role: "Engineering Manager, Orbital Freight",
  },
];

function Testimonial() {
  return (
    <section
      id="testimonials"
      className="w-full border-t border-line bg-surface"
      aria-labelledby="testimonials-title"
    >
      <div className="mx-auto w-full max-w-[1100px] px-6 py-24 md:px-0 md:py-[120px]">
        <div className="mb-16 max-w-[640px]">
          <p className={`${monoLabel} mb-4`}>Customers</p>
          <h2
            id="testimonials-title"
            className="text-balance text-[clamp(1.875rem,3.4vw,2.625rem)] font-semibold leading-[1.12] tracking-[-0.034em]"
          >
            Teams that stopped narrating their work.
          </h2>
          <p className="mt-4 max-w-[33em] text-[clamp(1.0625rem,1.3vw,1.1875rem)] leading-[1.55] text-muted">
            Three notes from people who run cycles on Keel, lightly trimmed for
            length.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
          {quotes.map((quote) => (
            <blockquote
              key={quote.name}
              className="flex h-full flex-col rounded-[14px] border border-line bg-white p-8 shadow-[0_1px_2px_rgb(16_17_20/0.05)]"
            >
              <p className="mb-2 font-serif text-4xl leading-none text-accent">
                “
              </p>
              <p className="mb-6 flex-1 border-b border-line pb-6 text-sm leading-[1.55] text-soft">
                {quote.body}
              </p>
              <footer>
                <cite className="not-italic">
                  <span className="block text-[1.0625rem] font-semibold tracking-[-0.018em] text-accent">
                    {quote.name}
                  </span>
                  <span className="mt-1 block text-sm text-muted">
                    {quote.role}
                  </span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
