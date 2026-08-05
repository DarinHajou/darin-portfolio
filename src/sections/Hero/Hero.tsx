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
            Darin / Oslo / 2026
          </p>

          <p className={styles.status}>
            Frontend developer / Product builder
          </p>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.copy}>
            <p className={styles.introLine}>Hi, I’m Darin.</p>

            <h1 id="hero-title" className={styles.title}>
              <span className={styles.titleLead}>
                I build digital products
              </span>

              <span className={styles.accentText}>
                that solve real problems.
              </span>
            </h1>
          </div>

          <aside
            className={styles.personalNote}
            aria-label="How Darin approaches product development"
          >
            <p className={styles.noteLabel}>How I work</p>

            <p className={styles.noteText}>
              I start with the problem, not the technology. Once the problem is clear, the interface, architecture, and implementation become easier to define. 
            </p>
          </aside>
        </div>

        <div className={styles.lowerContent}>
          <div className={styles.supportingContent}>
            <p className={styles.summary}>
              Most of my experience comes from building and improving real
              products, not isolated demos. I work frontend-first, but I’m
              comfortable following a feature through the backend, data, and
              product rules behind it.
            </p>

            <div className={styles.actions}>
              <a className={styles.primaryLink} href="#work">
                View selected work
                <span aria-hidden="true">↘</span>
              </a>

              <p className={styles.disciplines}>
                Interface / Logic / Data / Product
              </p>
            </div>
          </div>

          <div className={styles.previewWrap}>
            <ProjectMedia
              className={styles.preview}
              title="One of the products I help build"
              index="Map of Pi / 01"
              imageSrc="/map-of-pi.jpg"
              alt="Map of Pi commerce platform interface"
            />
          </div>
        </div>

        <div className={styles.systemLine}>
          <span>Frontend first</span>
          <span>Curious across the stack</span>
          <span>Focused on useful products</span>
          <span>Based in Oslo</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;