function Navbar() {
  return (
    <nav className="nav_container">
      <a className="nav_logo" href="#top">
        <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
          <rect x="0.5" y="0.5" width="21" height="21" rx="6" fill="#101114" />
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
        <h3>Keel</h3>
      </a>

      <div className="nav_category">
        <a href="#features">Product</a>
        <a href="#testimonials">Customers</a>
        <a href="#pricing">Pricing</a>
        <a href="#faq">FAQ</a>
      </div>

      <div className="nav_btns">
        <a className="nav_signin-btn" href="#signin">
          Sign in
        </a>
        <button type="button" className="nav_start-btn">
          Start free
        </button>
      </div>
    </nav>
  );
}

export default Navbar;