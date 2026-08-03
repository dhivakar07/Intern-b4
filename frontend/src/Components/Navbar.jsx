function Navbar() {
  return (
    <>
      <nav className="nav_container">
        <div className="nav_logo">
          <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
            <rect
              x=".5"
              y=".5"
              width="21"
              height="21"
              rx="6"
              fill="var(--ink)"
            />
            <path
              d="M5 8.25h12"
              stroke="var(--paper)"
              strokeWidth="1.4"
              strokeLinecap="round"
              opacity=".5"
            />
            <path
              d="M5 8.75c0 4.4 2.7 7.75 6 7.75s6-3.35 6-7.75"
              fill="none"
              stroke="var(--paper)"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
          <h3>Keel</h3>
        </div>
        <div className="nav_category">
          <p>
            <a>Product</a>
          </p>
          <p>
            <a>Customers</a>
          </p>
          <p>
            <a>Pricing</a>
          </p>
          <p>
            <a>FAQ</a>
          </p>
        </div>
        <div className="nav_btns">
          <a className="nav_signin-btn">Sign in</a>
          <button className="nav_start-btn">Start free</button>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
