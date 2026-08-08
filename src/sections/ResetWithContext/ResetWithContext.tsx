import styles from "./ResetWithContext.module.css";

const currentBuild = [
  {
    index: "01",
    title: "Local live session capturing",
    status: "Built",
  },
  {
    index: "02",
    title: "Primitive signal extraction",
    status: "Working",
  },
  {
    index: "03",
    title: "Candidate context extraction",
    status: "In development",
  },
  {
    index: "04",
    title: "Reviewable handoff interface",
    status: "Prototype",
  },
];

function ResetWithContext() {
  return (
    <section
      id="rwc"
      className={styles.section}
      aria-labelledby="rwc-title"
    >
      <div className={styles.backgroundGrid} aria-hidden="true" />

      <div className={`page-container ${styles.inner}`}>
        <header className={styles.header}>
          <div className={styles.meta}>
            <p>02 / Selected work</p>
            <p className={styles.status}>Active prototype</p>
          </div>

          <div className={styles.intro}>
            <div className={styles.introCopy}>
              <p className={styles.projectType}>
                Local AI continuity and provenance
              </p>

              <h2 id="rwc-title" className={styles.title}>
                RWC — Reset with Context
              </h2>

              <p className={styles.summary}>
                A local continuity tool for AI-assisted work. The current
                prototype captures important session context and turns it into
                a reviewable handoff, while the broader direction is reliable
                project memory across sessions, tools, and teams.
              </p>
            </div>

            <aside className={styles.promise}>
              <p className={styles.promiseLabel}>Product promise</p>

              <p>Keep AI work coherent across sessions.</p>
            </aside>
          </div>
        </header>

        <figure className={styles.primaryVisual}>
          <div className={styles.primaryFrame}>
            <img
              className={styles.primaryImage}
              src="/RWC-button.png"
              alt="Reset with Context integrated into ChatGPT with a Create handoff button beside the message composer"
            />
          </div>

          <figcaption className={styles.visualCaption}>
            <span>In-context integration</span>
            <span>01 / Local extension</span>
          </figcaption>
        </figure>

        <div className={styles.buildGrid}>
          <div className={styles.buildCopy}>
            <p className={styles.sectionLabel}>Current build</p>

            <h3 className={styles.subheading}>
              From captured session to reviewable handoff.
            </h3>

            <p className={styles.bodyCopy}>
              The prototype combines local session capture with an evolving
              context-extraction pipeline and a reviewable handoff interface.
              The continuation flow is working, while the extraction and
              resolution logic continues to be developed and tested.
            </p>
          </div>

          <figure className={styles.secondaryVisual}>
            <div className={styles.secondaryFrame}>
              <img
                className={styles.secondaryImage}
                src="/RWC-handoff.png"
                alt="Reset with Context prototype showing active context, corrections, open questions, and a generated handoff"
              />
            </div>

            <figcaption className={styles.visualCaption}>
              <span>Current build / Generated handoff</span>
              <span>02 / Prototype surface</span>
            </figcaption>
          </figure>

          <ol className={styles.buildList}>
            {currentBuild.map((item) => (
              <li key={item.index}>
                <span className={styles.buildNumber}>{item.index}</span>

                <p className={styles.buildTitle}>{item.title}</p>

                <span className={styles.buildStatus}>{item.status}</span>
              </li>
            ))}
          </ol>
        </div>

        <footer className={styles.footer}>
          <p className={styles.positioning}>
            Git tracks code history. Reset with Context tracks AI-work
            reasoning history.
          </p>

          <p className={styles.technology}>
            JavaScript / Browser extension / IndexedDB / Local-first
          </p>
        </footer>
      </div>
    </section>
  );
}

export default ResetWithContext;