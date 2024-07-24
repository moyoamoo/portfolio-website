import "../css/contactMe.scss";

const ContactMe = () => {
  return (
    <>
      <section className="contact-me-section" id="contact-me">
        <h3>Contact Me</h3>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Your Name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message"></textarea>
          </div>
          <button type="button" className="submit-btn">Send Message</button>
        </form>
      </section>
    </>
  );
};

export default ContactMe;
