import styles from "./MapOfPi.module.css";

const contributions = [
  "Membership and renewal flows",
  "Pi payment approval and completion",
  "Referral architecture",
  "Watch Ads reward system",
  "Search and seller experiences",
  "Backend services and MongoDB models",
];

const context = [
  "Approximately 2M users",
  "100K+ merchants",
  "Live Pi ecosystem product",
];

function MapOfPi() {
  return (
    <section
      id="work"
      className={styles.section}
      aria-labelledby="map-of-pi-title"
    >
      <div className={`page-container ${styles.inner}`}>
        <header className={styles.intro}>
          <div className={styles.meta}>
            <p className="label">01 / Selected work</p>
            <p className={styles.status}>Live platform</p>
          </div>

          <div className={styles.headingGroup}>
            <h2 id="map-of-pi-title" className={styles.title}>
              Map of Pi
            </h2>

            <p className={styles.summary}>
              A live commerce platform that helps users discover businesses and
              gives merchants a place to build a presence inside the Pi
              ecosystem.
            </p>
          </div>
        </header>

        <section
          className={styles.productEvidence}
          aria-label="Map of Pi product walkthrough and interface preview"
        >
          <header className={styles.evidenceHeader}>
            <p>Product evidence</p>
            <span>Walkthrough / 01</span>
          </header>

          <div className={styles.evidenceGrid}>
            <figure className={styles.videoPanel}>
              <div className={styles.videoFrame}>
                <video
                  className={styles.video}
                  src="/Meet-Darin.mp4"
                  poster="/map-of-pi.png"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Map of Pi mobile product walkthrough"
                />
              </div>

              <figcaption className={styles.mediaCaption}>
                Mobile product walkthrough
                <span>Live platform</span>
              </figcaption>
            </figure>

            <div className={styles.evidenceDetails}>
              <figure className={styles.stillPanel}>
                <div className={styles.stillFrame}>
                  <img
                    className={styles.stillImage}
                    src="/map-of-pi.png"
                    alt="Map of Pi platform overview"
                  />
                </div>

                <figcaption className={styles.mediaCaption}>
                  Platform overview
                  <span>Global commerce network</span>
                </figcaption>
              </figure>

              <article className={styles.evidenceNote}>
                <p className="label">What this shows</p>

                <p>
                  A product spanning discovery, merchant tools, memberships, payments,
                  and commerce flows across a live user ecosystem.
                </p>
              </article>
            </div>
          </div>
        </section>

        <div className={styles.overview}>
          <article className={styles.storyBlock}>
            <p className="label">The product</p>

            <p className={styles.bodyCopy}>
              Map of Pi connects a global community of users and merchants
              through search, business discovery, seller tools, memberships,
              payments, and commerce features.
            </p>
          </article>

          <article className={styles.storyBlock}>
            <p className="label">My contribution</p>

            <p className={styles.bodyCopy}>
              As a co-founder and hands-on developer, I contribute across
              frontend experiences, backend services, payments, data models,
              and the product rules connecting them.
            </p>
          </article>

          <aside className={styles.contextBlock}>
            <p className="label">Context</p>

            <ul className={styles.contextList}>
              {context.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>

        <section
          className={styles.contributionsSection}
          aria-labelledby="contributions-title"
        >
          <header className={styles.contributionsHeader}>
            <p id="contributions-title" className="label">
              Selected contributions
            </p>

            <p>
              Work spanning frontend, backend, payments, data, and product
              logic.
            </p>
          </header>

          <ol className={styles.contributionList}>
            {contributions.map((contribution, index) => (
              <li key={contribution}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p>{contribution}</p>
              </li>
            ))}
          </ol>
        </section>

        <footer className={styles.footer}>
          <div className={styles.technologyGroup}>
            <p className="label">Selected technology</p>

            <p className={styles.technologyText}>
              React / TypeScript / Node.js / MongoDB / Pi SDK / REST APIs
            </p>
          </div>

          <div className={styles.projectLinks}>
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

export default MapOfPi;