import styles from "./Hero.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const selectedWork = [
  {
    index: "01",
    title: "Map of Pi",
    link: "/Projects/map-of-pi",
    image: "/mop3.png",
  },
  {
    index: "02",
    title: "Reset with Context",
    link: "/Projects/reset-with-context",
    image: "/rwc-handoff.png",
  },
  {
    index: "03",
    title: "Whispr",
    link: "/Projects/whispr",
    image:"/whispr-craving.png",
  },
  {
    index: "04",
    title: "Bosant",
    link: "/Projects/bosant",
    image: "/bosant-hero.png",
  },
];


function Hero() {
  const [preview, setPreview] = useState("/mop3.png"); 
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
              <span className={styles.titleLine}>
                I build the
              </span>

              <span className={styles.titleLine}>
                interface and the
              </span>

              <span className={`${styles.titleLine} ${styles.accentText}`}>
                systems behind it.
              </span>
            </h1>

            <p className={styles.summary}>
              Frontend-focused full-stack developer building polished interfaces
              and the services, payments, and data flows behind them.
            </p>

            <a className={styles.heroLink} href="#work">
              View selected 
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
              feels, how the logic behaves, how the user thinks, how the data moves, and whether
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
                src={preview}
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
                  onMouseEnter={() => setPreview(project.image)}
                  onMouseLeave={() => setPreview("/mop3.png")}
                  className={`${styles.workItem} ${
                    projectIndex === 0 ? styles.workItemActive : ""
                  }`}
                  key={project.title}
                >
                  <Link to={project.link} className={styles.workItemLink}>
                    <span className={styles.workNumber}>{project.index}</span>
                    <span className={styles.workTitle}>{project.title}</span>
                  </Link>
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