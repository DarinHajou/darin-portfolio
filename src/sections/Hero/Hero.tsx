import styles from "./Hero.module.css";
import ProjectMedia from "../../components/ProjectMedia/ProjectMedia";

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

        <ProjectMedia
          className={styles.preview}
          title="Selected products"
          index="01—04"
          imageSrc="/map-of-pi.jpg"
          alt="Selected project interfaces"
        />
      </div>
    </section>
  );
}

export default Hero;