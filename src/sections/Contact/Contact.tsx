import styles from "./Contact.module.css";

function Contact() {
  return (
    <section
      id="contact"
      className={styles.section}
      aria-labelledby="contact-title"
    >
      <div className={styles.grid} aria-hidden="true" />
      <div className={`page-container ${styles.inner}`}>
      <h2 id="contact-title" className={styles.contact_title}>
          Contact
        </h2>
        <header className={styles.header}>
          <p className={styles.label}>
            <span className={styles.signal} aria-hidden="true" />
            Contact / Open channel
          </p>

          <p className={styles.location}>Oslo, Norway</p>
        </header>

        <div className={styles.content}>
          <div className={styles.message}>
            <h2 id="contact-title" className={styles.title}>
              See something worth
              <span> exploring?</span>
            </h2>

            <div className={styles.copy}>
              <p>
                If one of my projects interests you, ask me for a personal
                walkthrough. If you’re building something yourself and think I
                could contribute, tell me about it.
              </p>

              <p>
                I’m always interested in meeting developers, founders,
                investors and people working on products worth taking
                seriously.
              </p>
            </div>
          </div>

          <div className={styles.channel}>
            <p className={styles.channelLabel}>
              <span aria-hidden="true">&gt;</span> Open channel
            </p>

            <a className={styles.email} href="mailto:darinhjou@gmail.com">
              DarinHajou@gmail.com
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <footer className={styles.footer}>
          <nav className={styles.links} aria-label="Social links">
            <a href="YOUR_LINKEDIN" target="_blank" rel="noreferrer">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>

            <a href="YOUR_GITHUB" target="_blank" rel="noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </nav>

          <p className={styles.status}>
            <span className={styles.statusSignal} aria-hidden="true" />
            Channel open / 2026
          </p>
        </footer>
      </div>
    </section>
  );
}

export default Contact;