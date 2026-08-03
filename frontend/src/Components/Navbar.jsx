function Navbar() {
  return (
    <nav className="sticky top-0 z-100 flex h-16 w-full max-w-[1100px] items-center justify-between gap-6 bg-white px-6 min-[900px]:px-0">
      <a
        className="inline-flex items-center gap-2 text-[1.0625rem] font-semibold tracking-[-0.03em]"
        href="#top"
      >
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
        <span>Keel</span>
      </a>

      <div className="hidden items-center gap-1 min-[900px]:flex">
        <a
          href="#features"
          className="rounded-lg px-3.5 py-2 text-sm text-soft transition-colors duration-160 hover:bg-surface hover:text-ink"
        >
          Product
        </a>
        <a
          href="#testimonials"
          className="rounded-lg px-3.5 py-2 text-sm text-soft transition-colors duration-160 hover:bg-surface hover:text-ink"
        >
          Customers
        </a>
        <a
          href="#pricing"
          className="rounded-lg px-3.5 py-2 text-sm text-soft transition-colors duration-160 hover:bg-surface hover:text-ink"
        >
          Pricing
        </a>
        <a
          href="#faq"
          className="rounded-lg px-3.5 py-2 text-sm text-soft transition-colors duration-160 hover:bg-surface hover:text-ink"
        >
          FAQ
        </a>
      </div>

      <div className="flex items-center gap-4">
        <a
          className="cursor-pointer text-sm text-soft hover:text-ink"
          href="#signin"
        >
          Sign in
        </a>
        <button
          type="button"
          className="h-8 cursor-pointer rounded-[10px] border-0 bg-ink px-3.5 text-sm font-medium text-paper transition-[background-color,transform] duration-160 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02] hover:bg-ink-hover active:scale-[0.985]"
        >
          Start free
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
