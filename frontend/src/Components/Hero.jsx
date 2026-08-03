function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <a className="announce" href="#features">
              <span className="dot" aria-hidden="true" />
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

            <h1 id="hero-title">
              The <span className="serif">calm</span> way to ship serious
              software.
            </h1>

            <p className="lead">
              Keel holds cycle planning, delivery and release notes in one place,
              so your team spends its week building instead of reporting on what
              it built.
            </p>

            <div className="hero-ctas">
              <a className="btn btn--primary btn--lg" href="#pricing">
                Start free
              </a>
              <a className="btn btn--secondary btn--lg" href="#contact">
                Book a walkthrough
              </a>
            </div>

            <ul className="hero-meta">
              <li>Free for 14 days</li>
              <li>No card to start</li>
              <li>Import from Jira in an afternoon</li>
            </ul>
          </div>

          <div className="art">
            <svg
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

              <g className="tick" textAnchor="middle">
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

              <g className="node">
                <circle cx="60" cy="130" r="7" fill="#fff" />
                <circle cx="60" cy="130" r="4" fill="#101114" />
                <text className="node-label" x="60" y="112" textAnchor="start">
                  Scope
                </text>
              </g>

              <g className="node">
                <circle cx="260" cy="300" r="7" fill="#fff" />
                <circle cx="260" cy="300" r="4" fill="#101114" />
                <text
                  className="node-label"
                  x="260"
                  y="326"
                  textAnchor="middle"
                >
                  Build
                </text>
              </g>

              <g className="node">
                <circle cx="336" cy="300" r="7" fill="#fff" />
                <circle cx="336" cy="300" r="4" fill="#101114" />
                <text
                  className="node-label"
                  x="336"
                  y="326"
                  textAnchor="middle"
                >
                  Review
                </text>
              </g>

              <g className="node">
                <circle cx="520" cy="150" r="7" fill="#fff" />
                <circle cx="520" cy="150" r="4" fill="#0e4f4a" />
                <text className="node-label" x="520" y="132" textAnchor="end">
                  Ship
                </text>
              </g>

              <g className="legend">
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

        <div className="customers">
          <p className="mono-label">Shipping on Keel</p>
          <ul className="customer-list">
            <li>Northwind Labs</li>
            <li>Cadence</li>
            <li>Orbital Freight</li>
            <li>Halcyon</li>
            <li>Rye & Co</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
