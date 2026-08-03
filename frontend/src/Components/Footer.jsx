import { useState } from "react";
import { btn, btnSecondary, monoLabel } from "../lib/styles";

function Footer() {
  const [status, setStatus] = useState(
    "One email a month. Unsubscribe in one click.",
  );
  const [done, setDone] = useState(false);

  const onSubscribe = (e) => {
    e.preventDefault();
    setStatus("Subscribed. First issue arrives at the start of next month.");
    setDone(true);
  };

  const linkClass =
    "text-sm text-soft transition-colors hover:text-accent";

  return (
    <footer className="w-full border-t border-line bg-surface px-6 pt-20 pb-10 lg:px-0 lg:pt-20 lg:pb-10">
      <div className="mx-auto w-full max-w-[1100px]">
        <div className="grid gap-16 border-b border-line-strong pb-16 lg:grid-cols-[1fr_1.35fr] lg:gap-20">
          <div className="grid content-start gap-6">
            <a
              className="inline-flex items-center gap-2 text-[1.0625rem] font-semibold tracking-[-0.03em] text-ink"
              href="#top"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
                <rect
                  x="0.5"
                  y="0.5"
                  width="21"
                  height="21"
                  rx="6"
                  fill="#101114"
                />
                <path
                  d="M5 8.25h12"
                  stroke="#fff"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  opacity="0.5"
                />
                <path
                  d="M5 8.75c0 4.4 2.7 7.75 6 7.75s6-3.35 6-7.75"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
              Keel
            </a>

            <p className="max-w-[30ch] text-sm text-muted">
              Planning, delivery and release notes in one place.
            </p>

            <form className="grid max-w-[360px] gap-2" onSubmit={onSubscribe}>
              <label htmlFor="n-email" className="text-sm font-medium">
                What we shipped, once a month
              </label>
              <div className="flex gap-2">
                <input
                  id="n-email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  autoComplete="email"
                  required
                  className="h-10 min-w-0 flex-1 rounded-[10px] border border-line-strong bg-white px-4 text-sm text-ink focus:border-accent focus:shadow-[0_0_0_3px_#e9f0ee] focus:outline-none"
                />
                <button className={`${btn} ${btnSecondary}`} type="submit">
                  Subscribe
                </button>
              </div>
              <div
                aria-live="polite"
                className={`min-h-5 text-xs ${done ? "text-accent" : "text-muted"}`}
              >
                {status}
              </div>
            </form>
          </div>

          <nav
            className="grid grid-cols-2 gap-x-6 gap-y-10 min-[720px]:grid-cols-4"
            aria-label="Footer"
          >
            <div>
              <h2 className={`${monoLabel} mb-4 font-medium`}>Product</h2>
              <ul className="grid gap-2">
                <li>
                  <a className={linkClass} href="#features">
                    Cycle planning
                  </a>
                </li>
                <li>
                  <a className={linkClass} href="#features">
                    Release notes
                  </a>
                </li>
                <li>
                  <a className={linkClass} href="#features">
                    Insights
                  </a>
                </li>
                <li>
                  <a className={linkClass} href="#features">
                    Integrations
                  </a>
                </li>
                <li>
                  <a className={linkClass} href="#">
                    Changelog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className={`${monoLabel} mb-4 font-medium`}>Company</h2>
              <ul className="grid gap-2">
                <li>
                  <a className={linkClass} href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className={linkClass} href="#testimonials">
                    Customers
                  </a>
                </li>
                <li>
                  <a className={linkClass} href="#">
                    Careers
                  </a>
                </li>
                <li>
                  <a className={linkClass} href="#">
                    Blog
                  </a>
                </li>
                <li>
                  <a className={linkClass} href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className={`${monoLabel} mb-4 font-medium`}>Resources</h2>
              <ul className="grid gap-2">
                <li>
                  <a className={linkClass} href="#">
                    Documentation
                  </a>
                </li>
                <li>
                  <a className={linkClass} href="#">
                    API reference
                  </a>
                </li>
                <li>
                  <a className={linkClass} href="#">
                    Migration guide
                  </a>
                </li>
                <li>
                  <a className={linkClass} href="#">
                    Status
                  </a>
                </li>
                <li>
                  <a className={linkClass} href="#">
                    Security
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className={`${monoLabel} mb-4 font-medium`}>Legal</h2>
              <ul className="grid gap-2">
                <li>
                  <a className={linkClass} href="#">
                    Terms
                  </a>
                </li>
                <li>
                  <a className={linkClass} href="#">
                    Privacy
                  </a>
                </li>
                <li>
                  <a className={linkClass} href="#">
                    Subprocessors
                  </a>
                </li>
                <li>
                  <a className={linkClass} href="#">
                    DPA
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-4 pt-8 text-xs text-muted">
          <p>© 2026 Keel Software, Inc. All rights reserved.</p>
          <p className="flex items-center">
            <span
              className="mr-1.5 inline-block size-1.5 rounded-full bg-accent"
              aria-hidden="true"
            />
            All systems operational
          </p>

          <ul className="ml-auto flex gap-2">
            <li>
              <a
                href="#"
                aria-label="Keel on X"
                className="inline-flex size-8 items-center justify-center rounded-[10px] border border-transparent text-muted transition-all duration-160 hover:border-line-strong hover:bg-white hover:text-ink"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.2 4h2.7l-5.9 6.7 6.9 9.3h-5.4l-4.2-5.6L6.3 20H3.6l6.3-7.2L3.3 4h5.5l3.9 5.2zm-.9 14.4h1.5L7.7 5.5H6.1z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="Keel on GitHub"
                className="inline-flex size-8 items-center justify-center rounded-[10px] border border-transparent text-muted transition-all duration-160 hover:border-line-strong hover:bg-white hover:text-ink"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.6-.2.6-.5v-1.7c-2.4.5-3-1.1-3-1.1-.4-1-1-1.3-1-1.3-.8-.6 0-.6 0-.6.9.1 1.4 1 1.4 1 .8 1.4 2.1 1 2.6.8.1-.6.3-1 .6-1.3-2-.2-4-1-4-4.3 0-1 .3-1.7.9-2.3-.1-.2-.4-1.1.1-2.3 0 0 .7-.2 2.4.9a8.3 8.3 0 0 1 4.4 0c1.7-1.1 2.4-.9 2.4-.9.5 1.2.2 2.1.1 2.3.6.6.9 1.4.9 2.3 0 3.3-2 4.1-4 4.3.4.4.6.9.6 1.8v2.6c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.5" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="Keel on LinkedIn"
                className="inline-flex size-8 items-center justify-center rounded-[10px] border border-transparent text-muted transition-all duration-160 hover:border-line-strong hover:bg-white hover:text-ink"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M6.2 8.7H3.6V20h2.6zM4.9 3.9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M20.4 13.2c0-2.9-1.6-4.7-3.9-4.7-1.4 0-2.3.7-2.7 1.4V8.7H8.5V20h2.6v-5.8c0-1.4.5-2.5 1.9-2.5s1.8 1 1.8 2.4V20h2.6z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
