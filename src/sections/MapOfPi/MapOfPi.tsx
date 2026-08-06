import styles from "./MapOfPi.module.css";

const contributions = [
  "Membership and renewal flows",
  "Pi payment approval and completion",
  "Referral architecture",
  "Watch Ads reward system",
  "Search and seller experiences",
  "Backend services and MongoDB models",
];

const projectBadges = [
  {
    src: "/hackaton.png",
    alt: "2024 Pi eCommerce Hackathon Winner",
  },
  {
    src: "/2M.png",
    alt: "2 million users and growing",
  },
  {
    src: "/140k.png",
    alt: "140 thousand sellers",
  },
];

function MapOfPi() {
  return (
    <section
      id="work"
      className={styles.section}
      aria-labelledby="map-of-pi-title"
    >
      <div className={`page-container ${styles.inner}`}>
        <header className={styles.projectHeader}>
          <div className={styles.meta}>
            <p className="label">01 / Selected work</p>
            <p className={styles.status}>Live platform</p>
          </div>

          <div className={styles.projectLead}>
            <div className={styles.projectIntro}>
              <div className={styles.introCore}>
                <div className={styles.titleRow}>
                  <h2 id="map-of-pi-title" className={styles.title}>
                    Map of Pi
                  </h2>

                  <img
                    className={styles.logo}
                    src="/mapofpi-logo.png"
                    alt=""
                    aria-hidden="true"
                  />
                </div>

                <p className={styles.summary}>
                  A live commerce platform that helps users discover businesses
                  and gives merchants a place to build a presence inside the Pi
                  ecosystem.
                </p>

                <p className={styles.role}>
                  <span className={styles.metaSignal} aria-hidden="true" />
                  Co-founder / Frontend-focused full-stack development
                </p>
              </div>

              <div className={styles.projectProof}>
                <p className={styles.proofLabel}>Platform proof</p>

                <ul className={styles.badgeList}>
                  {projectBadges.map((badge) => (
                    <li key={badge.src}>
                      <img
                        className={styles.badge}
                        src={badge.src}
                        alt={badge.alt}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <figure className={styles.walkthrough}>
              <div className={styles.walkthroughFrame}>
                <video
                  className={styles.walkthroughVideo}
                  src="/pi-video.mp4"
                  poster="/map-of-pi.png"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Map of Pi product walkthrough"
                  onLoadedMetadata={(event) => {
                    event.currentTarget.defaultPlaybackRate = 2.5;
                    event.currentTarget.playbackRate = 2.5;
                  }}
                  onPlay={(event) => {
                    event.currentTarget.playbackRate = 2.5;
                  }}
                />
              </div>

              <figcaption className={styles.walkthroughCaption}>
                <span>Product walkthrough</span>
                <span>01 / Live</span>
              </figcaption>
            </figure>
          </div>
        </header>

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
                <span>{String(index + 1).padStart(2, "0")}</span>
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