function Contact() {
  return (
    <>
      <section className="contact_container">
        <div className="contact_heading">
          <div className="contact_title">
            <p>CONTACT</p>
            <h1>
              Tell us how your <br /> team plans today.
            </h1>
            <span>
              Walkthroughs run 25 minutes on your own <br /> backlog, not a demo
              workspace. Migration <br /> questions welcome.
            </span>
          </div>
          <div className="contact_info">
            <div className="contact_info-data">
              <p>OFFICE</p>
              <span>
                Keel Software Inc. <br /> 2 Berkeley Row Suite <br /> 400 <br />
                Boston MA 02116
              </span>
            </div>
            <div className="contact_info-data">
              <p>EMAIL</p>
              <a>hello@keel.dev</a>
              <a>sales@keel.dev</a>
            </div>
            <div className="contact_info-data">
              <p>PHONE</p>
              <span>+91 9834224785</span>
            </div>
            <div className="contact_info-data">
              <p>HOURS</p>
              <span>
                Replies Monday to <br /> Friday, 9:00-18:00 ET
              </span>
            </div>
          </div>
        </div>
        <div className="contact_input">
          <form>
            <div className="contact_input-box">
              <div className="contact_input-one">
                <label htmlFor="name">Name</label>
                <input type="text" />
              </div>
              <div className="contact_input-one">
                <label htmlFor="email">Work Email</label>
                <input type="email" />
              </div>
            </div>
            <div className="contact_input-box">
              <div className="contact_input-one">
                <label htmlFor="company">Company</label>
                <input type="text" />
              </div>
              <div className="contact_input-one">
                <label htmlFor="size">Team size</label>
                <select pl>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-200">51-200</option>
                  <option value="200+">200+</option>
                </select>
              </div>
            </div>
            <div className="contact_input-textarea">
              <label htmlFor="textarea">What are you trying to fix?</label>
              <textarea name="textarea"></textarea>
            </div>
            <button className="contact_input-btn">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}
export default Contact;
