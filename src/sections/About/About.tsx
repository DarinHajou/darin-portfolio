import styles from "./About.module.css";

function About() {
  return (
    <section
      id="about"
      className={styles.section}
      aria-labelledby="about-title"
    >
      <div className={`page-container ${styles.inner}`}>
        <h2 id="about-title" className={styles.title}>
          About
        </h2>

        <div className={styles.card}>
          <div className={styles.story}>
            <p className={styles.lead}>
              I’ve always been technical and naturally drawn to solving
              problems. Development eventually became the place where that
              clicked into something useful.
            </p>

            <div className={styles.copy}>
              <p>
                Development eventually gave that instinct a proper outlet: building systems, shaping products, and turning ideas into something real.
              </p>

              <p>
                I also come from a fairly broad background. I’ve studied
                psychology, philosophy, history and communication, worked with
                customers and business, and spent years around technology. That
                mix affects how I approach products: technically, visually,
                commercially, and from the user’s point of view.
              </p>

              <p>
                Outside work, most of my time goes to my family, training,
                walking, camping and reading. I’m naturally curious, so I tend
                to be learning something whether I’m working or not.
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
              <p>
                Building products and exploring what AI makes possible.
              </p>
            </div>

            <div className={styles.detail}>
              <span>Outside the screen</span>
              <p>Family, training, walking, camping and reading.</p>
            </div>
          </aside>

          <div className={styles.footer}>
            <a className={styles.resumeLink} href="/resume.pdf">
              View résumé
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;