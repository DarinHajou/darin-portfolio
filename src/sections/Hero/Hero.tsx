import styles from "./Hero.module.css";

const selectedWork = [
  {
    index: "01",
    title: "Map of Pi",
  },
  {
    index: "02",
    title: "Reset with Context",
  },
  {
    index: "03",
    title: "Whisper",
  },
  {
    index: "04",
    title: "Bosant",
  },
];

function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.grid} aria-hidden="true" />

      <div className={`page-container ${styles.heroInner}`}>
        <div className={styles.metaRow}>
          <p className={styles.eyebrow}>
            <span className={styles.metaSignal} aria-hidden="true" />
            Frontend-focused full-stack developer / Oslo / 2026
          </p>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.copy}>
            <p className={styles.introLine}>Hi, I’m Darin.</p>

            <h1 id="hero-title" className={styles.title}>
              <span className={styles.titleLine}>I build digital</span>
              <span className={styles.titleLine}>products that solve</span>
              <span className={`${styles.titleLine} ${styles.accentText}`}>
                real problems.
              </span>
            </h1>

            <p className={styles.summary}>
              My focus is frontend, but my work spans the full product:
              interfaces and user flows, backend services, data models,
              payments, integrations, and business logic.
            </p>

            <a className={styles.heroLink} href="#work">
              View selected work
              <span aria-hidden="true">↘</span>
            </a>
          </div>

          <aside
            className={styles.personalNote}
            aria-label="How Darin approaches product development"
          >
            <p className={styles.noteLabel}>How I work</p>

            <p className={styles.noteText}>
              I like getting close to the whole product—how the interface
              feels, how the logic behaves, how the data moves, and whether
              the result is actually useful.
            </p>
          </aside>
        </div>

        <div id="work" className={styles.workShowcase}>
          <div className={styles.showcaseHeader}>
            <p className={styles.showcaseLabel}>Selected work / 01—04</p>

            <a className={styles.primaryLink} href="#projects">
              Explore projects
              <span aria-hidden="true">↘</span>
            </a>
          </div>

          <figure className={styles.workPreview}>
            <figcaption className={styles.previewHeader}>
              <span>Project preview</span>
              <span>01 / 04</span>
            </figcaption>

            <div className={styles.previewViewport}>
              <img
                className={styles.previewImage}
                src="/mop.png"
                alt="Map of Pi commerce platform preview"
              />
            </div>
          </figure>

          <div className={styles.workIndex}>
            <div className={styles.workIndexHeader}>
              <p>Project index</p>
              <span>04 projects</span>
            </div>

            <ol className={styles.workList}>
              {selectedWork.map((project, projectIndex) => (
                <li
                  className={`${styles.workItem} ${
                    projectIndex === 0 ? styles.workItemActive : ""
                  }`}
                  key={project.title}
                >
                  <span className={styles.workNumber}>{project.index}</span>
                  <span className={styles.workTitle}>{project.title}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;