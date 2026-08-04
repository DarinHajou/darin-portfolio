import ProjectMedia from "../../components/ProjectMedia/ProjectMedia";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.grid} aria-hidden="true" />

      <div className={`page-container ${styles.heroInner}`}>
        <div className={styles.metaRow}>
          <p className={styles.eyebrow}>
            <span className={styles.metaSignal} aria-hidden="true" />
            Portfolio / Oslo / 2026
          </p>

          <p className={styles.status}>System / Active</p>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.copy}>
            <h1 id="hero-title" className={styles.title}>
              Hi, I’m Darin. I build digital products that{" "}
              <span className={styles.accentText}>
                solve real problems.
              </span>
            </h1>

            <div className={styles.supportingContent}>
              <p className={styles.summary}>
                Product-minded frontend developer with hands-on experience
                across interfaces, backend logic, data, payments, and AI
                integrations.
              </p>

              <div className={styles.actions}>
                <a className={styles.primaryLink} href="#work">
                  View selected work
                  <span aria-hidden="true">↘</span>
                </a>

                <p className={styles.disciplines}>
                  Interface / Data / Logic / Product
                </p>
              </div>
            </div>
          </div>

          <div className={styles.previewWrap}>
            <ProjectMedia
              className={styles.preview}
              title="Selected products"
              index="01—04"
              imageSrc="/map-of-pi.jpg"
              alt="Selected project interfaces"
            />
          </div>
        </div>

        <div className={styles.systemLine} aria-hidden="true">
          <span>Frontend</span>
          <span>Full-stack</span>
          <span>AI integration</span>
          <span>Product systems</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;