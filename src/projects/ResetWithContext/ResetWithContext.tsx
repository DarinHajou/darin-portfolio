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
            <p> 02 / Selected work</p>
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

              <div className={styles.summaryGroup}>
                <p className={styles.summary}>
                  AI-assisted teams are creating decisions, assumptions, fixes, 
                  and architecture history inside private chats. None of that becomes reliable project memory.
                </p>

                <p className={styles.summary}>  
                  It helps developers and teams preserve decisions, corrections, superseded approaches, 
                  active context, and handoffs across tools, sessions, and time.
                </p>
              </div>
            </div>

            <aside className={styles.promise}>
              <p className={styles.promiseLabel}>Product promise</p>

              <p> Never re-explain the feature again. <br></br> <br />Never lose why the feature was built this way.</p>
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

        <p className={styles.supportText}>
          RWC starts as a local-first continuity and provenance layer for one developer, 
          but the long-term direction is shared project memory for AI-assisted teams.</p>

        <div className={styles.buildGrid}>
          <div className={styles.buildCopy}>
            <p className={styles.sectionLabel}>Current build</p>

            <h3 className={styles.subheading}>
              Capture, extraction, handoff.
            </h3>

            <p className={styles.bodyCopy}>
              The current prototype captures local AI work sessions, extracts early continuity signals, 
              and generates a reviewable handoff for continuing work in a new session. 
              Capture and local storage are working; signal extraction, candidate context, 
              and resolution are being actively tested.
            </p>
          </div>

          <figure className={styles.secondaryVisual}>
            <div className={styles.secondaryFrame}>
              <img
                className={styles.secondaryImage}
                src="/rwc-handoff.png"
                alt="Reset with Context prototype showing active context, corrections, open questions, and a generated handoff"
              />
            </div>

            <figcaption className={styles.visualCaption}>
              <span>Generated handoff</span>
              <span>02 / Prototype</span>
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
          <p className={styles.supportLine}>A continuity layer for decisions, corrections, handoffs, and source-linked project context.</p>
         
          <div className={styles.projectLinks}>
             <p className={styles.technology}>
             <p className={styles.label}>Selected technology</p>
            JavaScript / Browser extension / IndexedDB / Local-first
          </p>
            <a href="#contact">
              Request a private walkthrough
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default ResetWithContext;