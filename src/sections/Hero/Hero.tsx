import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`page-container ${styles.heroInner}`}>
        <div className={styles.introduction}>
          <p className={`label ${styles.eyebrow}`}>
            Portfolio · Oslo · 2026
          </p>

          <h1 id="hero-title" className={styles.title}>
            Product-minded frontend developer with hands-on full-stack
            experience.
          </h1>
        </div>

        <div className={styles.supportingContent}>
          <p className={styles.summary}>
            I build practical digital products while understanding how
            interfaces, backend systems, data, and business rules connect.
          </p>

          <div className={styles.actions}>
            <a className={styles.primaryLink} href="#work">
              View selected work
              <span aria-hidden="true">↘</span>
            </a>

            <p className={styles.location}>
              Frontend development
              <br />
              Product building
              <br />
              Oslo, Norway
            </p>
          </div>
        </div>

        <div className={styles.preview} aria-label="Project preview placeholder">
          <div className={styles.previewHeader}>
            <span>Selected products</span>
            <span>01—04</span>
          </div>

          <div className={styles.previewBody}>
            <p>Project visual composition will go here.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;