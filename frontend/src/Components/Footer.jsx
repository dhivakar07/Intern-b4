import { useState } from "react";

function Footer() {
  const [status, setStatus] = useState(
    "One email a month. Unsubscribe in one click."
  );
  const [done, setDone] = useState(false);

  const onSubscribe = (e) => {
    e.preventDefault();
    setStatus("Subscribed. First issue arrives at the start of next month.");
    setDone(true);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="footer-logo" href="#top">
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

            <p className="tagline">
              Planning, delivery and release notes in one place.
            </p>

            <form className="newsletter" onSubmit={onSubscribe}>
              <label htmlFor="n-email">What we shipped, once a month</label>
              <div className="controls">
                <input
                  id="n-email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  autoComplete="email"
                  required
                />
                <button className="btn btn--secondary" type="submit">
                  Subscribe
                </button>
              </div>
              <div
                aria-live="polite"
                className="status"
                data-done={done || undefined}
              >
                {status}
              </div>
            </form>
          </div>

          <nav className="footer-nav" aria-label="Footer">
            <div>
              <h2 className="mono-label">Product</h2>
              <ul>
                <li>
                  <a href="#features">Cycle planning</a>
                </li>
                <li>
                  <a href="#features">Release notes</a>
                </li>
                <li>
                  <a href="#features">Insights</a>
                </li>
                <li>
                  <a href="#features">Integrations</a>
                </li>
                <li>
                  <a href="#">Changelog</a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mono-label">Company</h2>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#testimonials">Customers</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mono-label">Resources</h2>
              <ul>
                <li>
                  <a href="#">Documentation</a>
                </li>
                <li>
                  <a href="#">API reference</a>
                </li>
                <li>
                  <a href="#">Migration guide</a>
                </li>
                <li>
                  <a href="#">Status</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mono-label">Legal</h2>
              <ul>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Subprocessors</a>
                </li>
                <li>
                  <a href="#">DPA</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Keel Software, Inc. All rights reserved.</p>
          <p>
            <span className="status-dot" aria-hidden="true" />
            All systems operational
          </p>

          <ul className="socials">
            <li>
              <a href="#" aria-label="Keel on X">
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
              <a href="#" aria-label="Keel on GitHub">
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
              <a href="#" aria-label="Keel on LinkedIn">
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