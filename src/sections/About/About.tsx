import styles from "./About.module.css";

function About() {
  return (
    <section
      id="about"
      className={styles.section}
      aria-labelledby="about-title"
    >
      <div className={`page-container ${styles.inner}`}>
        <header className={styles.header}>
          <h2 id="about-title" className={styles.title}>
            About
          </h2>

          <span className={styles.marker}>A little context</span>
        </header>

        <div className={styles.content}>
          <div className={styles.story}>
            <p className={styles.lead}>
              I’ve always been drawn to understanding how things work—technology,
              people and systems. Development became the place where those
              interests could turn into something useful.
            </p>

            <div className={styles.copy}>
              <p>
                My background is broader than development alone. I’ve studied
                psychology, philosophy, history and communication, worked closely
                with customers and businesses, and spent years around technology.
              </p>

              <p>
                That mix shapes how I approach products: technically, visually,
                commercially and from the user’s point of view. I care about how
                an interface feels, but also whether the system behind it works
                and whether the result solves a real problem.
              </p>

              <p>
                Outside work, most of my time goes to family, training, walking,
                camping and reading. I’m naturally curious, so I’m usually
                learning something whether I’m working or not.
              </p>
            </div>
          </div>

          <aside className={styles.details} aria-label="A few details">
            <div className={styles.detail}>
              <span>Based</span>
              <p>Oslo, Norway</p>
            </div>

            <div className={styles.detail}>
              <span>Currently</span>
              <p>Building Map of Pi and exploring better ways to work with AI.</p>
            </div>

            <div className={styles.detail}>
              <span>Outside the screen</span>
              <p>Family, training, walking, camping and reading.</p>
            </div>
          </aside>
        </div>

        <footer className={styles.footer}>
          <a className={styles.resumeLink} href="/cv_darin-v0.3.pdf">
          
            View résumé
            <span aria-hidden="true">↗</span>
          </a>
        </footer>
      </div>
    </section>
  );
}

export default About;