import { monoLabel, btn, btnPrimary, btnLg } from "../lib/styles";

function Contact() {
  return (
    <section
      id="contact"
      className="w-full max-w-[1100px] border-t border-line px-6 py-24 md:px-0 md:py-[120px]"
      aria-labelledby="contact-title"
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:items-start">
        <div>
          <div className="border-b border-line pb-10">
            <p className={`${monoLabel} mb-4`}>Contact</p>
            <h2
              id="contact-title"
              className="text-balance text-[clamp(1.875rem,3.4vw,2.625rem)] font-semibold leading-[1.12] tracking-[-0.034em]"
            >
              Tell us how your team plans today.
            </h2>
            <p className="mt-4 max-w-[33em] text-[clamp(1.0625rem,1.3vw,1.1875rem)] leading-[1.55] text-muted">
              Walkthroughs run 25 minutes on your own backlog, not a demo
              workspace. Migration questions welcome.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="grid gap-1.5">
              <p className={monoLabel}>Office</p>
              <p className="text-sm leading-[1.55] text-muted">
                Keel Software Inc.
                <br />
                2 Berkeley Row Suite 400
                <br />
                Boston MA 02116
              </p>
            </div>
            <div className="grid gap-1.5">
              <p className={monoLabel}>Email</p>
              <a
                href="mailto:hello@keel.dev"
                className="text-sm text-accent underline underline-offset-2"
              >
                hello@keel.dev
              </a>
              <a
                href="mailto:sales@keel.dev"
                className="text-sm text-accent underline underline-offset-2"
              >
                sales@keel.dev
              </a>
            </div>
            <div className="grid gap-1.5">
              <p className={monoLabel}>Phone</p>
              <p className="text-sm text-muted">+1 (617) 555-0142</p>
            </div>
            <div className="grid gap-1.5">
              <p className={monoLabel}>Hours</p>
              <p className="text-sm leading-[1.55] text-muted">
                Replies Monday to Friday,
                <br />
                9:00–18:00 ET
              </p>
            </div>
          </div>
        </div>

        <form
          className="rounded-[14px] border border-line bg-white p-6 shadow-[0_1px_2px_rgb(16_17_20/0.05)] sm:p-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="grid gap-1.5">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="h-10 rounded-[10px] border border-line-strong bg-white px-3 text-sm text-ink focus:border-accent focus:shadow-[0_0_0_3px_#e9f0ee] focus:outline-none"
              />
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="email" className="text-sm font-medium">
                Work email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="h-10 rounded-[10px] border border-line-strong bg-white px-3 text-sm text-ink focus:border-accent focus:shadow-[0_0_0_3px_#e9f0ee] focus:outline-none"
              />
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="company" className="text-sm font-medium">
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                className="h-10 rounded-[10px] border border-line-strong bg-white px-3 text-sm text-ink focus:border-accent focus:shadow-[0_0_0_3px_#e9f0ee] focus:outline-none"
              />
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="size" className="text-sm font-medium">
                Team size
              </label>
              <select
                id="size"
                name="size"
                className="h-10 rounded-[10px] border border-line-strong bg-white px-3 text-sm text-ink focus:border-accent focus:shadow-[0_0_0_3px_#e9f0ee] focus:outline-none"
                defaultValue="1-10"
              >
                <option value="1-10">1–10</option>
                <option value="11-50">11–50</option>
                <option value="51-200">51–200</option>
                <option value="200+">200+</option>
              </select>
            </div>
          </div>

          <div className="mt-6 grid gap-1.5">
            <label htmlFor="message" className="text-sm font-medium">
              What are you trying to fix?
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="resize-none rounded-[10px] border border-line-strong bg-white px-3 py-2 text-sm text-ink focus:border-accent focus:shadow-[0_0_0_3px_#e9f0ee] focus:outline-none"
            />
          </div>

          <button type="submit" className={`${btn} ${btnLg} ${btnPrimary} mt-6`}>
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
