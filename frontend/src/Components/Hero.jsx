import { btn, btnLg, btnPrimary, btnSecondary, monoLabel } from "../lib/styles";

function Hero() {
  return (
    <section
      className="w-full max-w-[1100px] overflow-hidden px-6 pb-16 pt-20 sm:pt-24 lg:px-0 lg:pb-24 lg:pt-[120px]"
      aria-labelledby="hero-title"
    >
      <div className="grid items-center gap-16 lg:grid-cols-[1.02fr_1fr]">
        <div className="max-w-[620px]">
          <a
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white py-1 pr-4 pl-2 text-sm text-soft shadow-[0_1px_2px_rgb(16_17_20/0.05)] transition-colors duration-160 hover:border-accent-line hover:text-ink"
            href="#features"
          >
            <span
              className="mx-1 size-1.5 rounded-full bg-accent"
              aria-hidden="true"
            />
            Keel 2.0 — release notes write themselves
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h13" />
              <path d="M13 6.5 18.5 12 13 17.5" />
            </svg>
          </a>

          <h1
            id="hero-title"
            className="mb-6 text-balance text-[clamp(2.5rem,5.6vw,4.25rem)] font-semibold leading-[1.12] tracking-[-0.04em]"
          >
            The{" "}
            <span className="font-serif text-[1.08em] font-normal italic tracking-[-0.01em]">
              calm
            </span>{" "}
            way to ship serious software.
          </h1>

          <p className="max-w-[33em] text-[clamp(1.0625rem,1.3vw,1.1875rem)] leading-[1.55] text-muted">
            Keel holds cycle planning, delivery and release notes in one place,
            so your team spends its week building instead of reporting on what
            it built.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a className={`${btn} ${btnLg} ${btnPrimary}`} href="#pricing">
              Start free
            </a>
            <a className={`${btn} ${btnLg} ${btnSecondary}`} href="#contact">
              Book a walkthrough
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-4 text-sm text-muted">
            <li>Free for 14 days</li>
            <li className="relative before:absolute before:top-1/2 before:-left-4 before:size-[3px] before:-translate-y-1/2 before:rounded-full before:bg-line-strong">
              No card to start
            </li>
            <li className="relative before:absolute before:top-1/2 before:-left-4 before:size-[3px] before:-translate-y-1/2 before:rounded-full before:bg-line-strong">
              Import from Jira in an afternoon
            </li>
          </ul>
        </div>

        <div className="relative before:absolute before:-inset-x-[6%] before:-inset-y-[10%] before:-z-1 before:bg-[radial-gradient(60%_55%_at_55%_45%,#f7f7f5_0%,transparent_70%)]">
          <svg
            className="h-auto w-full overflow-visible"
            viewBox="0 0 580 400"
            role="img"
            aria-label="An abstract chart of one six-week cycle: a planned line and the actual line, marked at scope, build, review and ship."
          >
            <g stroke="#e6e6e2" strokeWidth="1">
              <line x1="40" y1="100" x2="540" y2="100" />
              <line x1="40" y1="180" x2="540" y2="180" />
              <line x1="40" y1="260" x2="540" y2="260" />
              <line x1="40" y1="340" x2="540" y2="340" />
            </g>

            <g stroke="#d5d5cf" strokeWidth="1">
              <line x1="60" y1="340" x2="60" y2="348" />
              <line x1="152" y1="340" x2="152" y2="348" />
              <line x1="244" y1="340" x2="244" y2="348" />
              <line x1="336" y1="340" x2="336" y2="348" />
              <line x1="428" y1="340" x2="428" y2="348" />
              <line x1="520" y1="340" x2="520" y2="348" />
            </g>

            <g
              className="fill-muted font-mono text-[10px] tracking-[0.1em] uppercase"
              textAnchor="middle"
            >
              <text x="60" y="368">
                W1
              </text>
              <text x="152" y="368">
                W2
              </text>
              <text x="244" y="368">
                W3
              </text>
              <text x="336" y="368">
                W4
              </text>
              <text x="428" y="368">
                W5
              </text>
              <text x="520" y="368">
                W6
              </text>
            </g>

            <path
              d="M60 172C140 172 160 244 260 244L336 244C428 244 448 192 520 192"
              fill="none"
              stroke="#c7dbd6"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M60 130C140 130 160 300 260 300L336 300C436 300 448 150 520 150"
              fill="none"
              stroke="#101114"
              strokeWidth="2"
              strokeLinecap="round"
            />

            <g>
              <circle cx="60" cy="130" r="7" fill="#fff" />
              <circle cx="60" cy="130" r="4" fill="#101114" />
              <text
                className="fill-soft font-mono text-[11px] tracking-[0.06em]"
                x="60"
                y="112"
                textAnchor="start"
              >
                Scope
              </text>
            </g>

            <g>
              <circle cx="260" cy="300" r="7" fill="#fff" />
              <circle cx="260" cy="300" r="4" fill="#101114" />
              <text
                className="fill-soft font-mono text-[11px] tracking-[0.06em]"
                x="260"
                y="326"
                textAnchor="middle"
              >
                Build
              </text>
            </g>

            <g>
              <circle cx="336" cy="300" r="7" fill="#fff" />
              <circle cx="336" cy="300" r="4" fill="#101114" />
              <text
                className="fill-soft font-mono text-[11px] tracking-[0.06em]"
                x="336"
                y="326"
                textAnchor="middle"
              >
                Review
              </text>
            </g>

            <g>
              <circle cx="520" cy="150" r="7" fill="#fff" />
              <circle cx="520" cy="150" r="4" fill="#0e4f4a" />
              <text
                className="fill-soft font-mono text-[11px] tracking-[0.06em]"
                x="520"
                y="132"
                textAnchor="end"
              >
                Ship
              </text>
            </g>

            <g className="fill-muted font-mono text-[10px] tracking-[0.1em] uppercase">
              <line
                x1="40"
                y1="34"
                x2="64"
                y2="34"
                stroke="#101114"
                strokeWidth="2"
              />
              <text x="72" y="38">
                actual
              </text>
              <line
                x1="140"
                y1="34"
                x2="164"
                y2="34"
                stroke="#c7dbd6"
                strokeWidth="1.5"
                strokeDasharray="5 6"
              />
              <text x="172" y="38">
                planned
              </text>
            </g>
          </svg>
        </div>
      </div>

      <div className="mt-20 grid gap-4 border-t border-line pt-8 lg:mt-24 lg:flex lg:items-center lg:gap-12">
        <p className={monoLabel}>Shipping on Keel</p>
        <ul className="flex flex-wrap gap-x-12 gap-y-6 font-medium tracking-[-0.015em] text-soft">
          <li>Northwind Labs</li>
          <li>Cadence</li>
          <li>Orbital Freight</li>
          <li>Halcyon</li>
          <li>Rye & Co</li>
        </ul>
      </div>
    </section>
  );
}

export default Hero;
