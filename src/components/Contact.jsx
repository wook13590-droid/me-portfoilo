
import '../styles/Contact.css'

function Contact() {
  return (
    <section className="contact section-padding" id="contact">
      <span className="section-label">04 — GET IN TOUCH</span>

      <div className="contact-content">
        <h2>
          LET'S MAKE
          <br />
          SOMETHING
          <br />
          <span>GREAT.</span>
        </h2>

        <div className="contact-right">
          <p>
            새로운 아이디어와 프로젝트에
            <br />
            함께할 기회를 기다리고 있습니다.
          </p>

          <a
            href="mailto:wook1359@naver.com"
            className="contact-button"
          >
            CONTACT ME ↗
          </a>
        </div>
      </div>

      <div className="contact-decoration">TW.</div>
    </section>
  )
}

export default Contact
