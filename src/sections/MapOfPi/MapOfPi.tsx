import ProjectMedia from "../../components/ProjectMedia/ProjectMedia";
import styles from "./MapOfPi.module.css";

const contributions = [
  "Membership and renewal flows",
  "Pi payment approval and completion",
  "Referral architecture",
  "Watch Ads reward system",
  "Search and seller experiences",
  "Backend services and MongoDB models",
];

const technologies = [
  "React",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Pi SDK",
  "REST APIs",
  "Postman",
];

function MapOfPi() {
  return (
    <section id="work" className={styles.section}>
      <div className={`page-container ${styles.inner}`}>
        <header className={styles.intro}>
          <div className={styles.meta}>
            <p className="label">01 · Selected work</p>
            <p className={styles.status}>Live platform</p>
          </div>

          <div className={styles.headingGroup}>
            <h2 className={styles.title}>Map of Pi</h2>

            <p className={styles.summary}>
              [A concise explanation of what Map of Pi is and why the project
              matters.]
            </p>
          </div>
        </header>

        <ProjectMedia
          className={styles.media}
          title="Map of Pi"
          index="01"
          imageSrc="/images/map-of-pi-preview.jpg"
          alt="Map of Pi product interface"
        />

        <div className={styles.details}>
          <article className={styles.storyBlock}>
            <p className="label">The product</p>

            <p className={styles.bodyCopy}>
              [Explain the platform, the user problem it addresses, and the
              wider product context.]
            </p>
          </article>

          <article className={styles.storyBlock}>
            <p className="label">My role</p>

            <p className={styles.bodyCopy}>
              [Explain your role as co-founder and hands-on developer, including
              the areas where you contributed personally.]
            </p>
          </article>
        </div>

        <div className={styles.evidenceGrid}>
          <article className={styles.contributions}>
            <p className="label">Selected contributions</p>

            <ul className={styles.contributionList}>
              {contributions.map((contribution) => (
                <li key={contribution}>{contribution}</li>
              ))}
            </ul>
          </article>

          <article className={styles.systemMap}>
            <div className={styles.systemMapHeader}>
              <p className="label">System evidence</p>
              <span>Placeholder</span>
            </div>

            <div className={styles.systemMapBody}>
              <p>
                Contribution map, feature flow, architecture diagram, or another
                selected artifact will go here.
              </p>
            </div>
          </article>
        </div>

        <footer className={styles.footer}>
          <div className={styles.technologyGroup}>
            <p className="label">Selected technology</p>

            <ul className={styles.technologyList}>
              {technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>

          <div className={styles.projectLinks}>
            <a href="#" aria-label="View Map of Pi">
              View project
              <span aria-hidden="true">↗</span>
            </a>

            <a href="#" aria-label="Request a private Map of Pi walkthrough">
              Private walkthrough
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default MapOfPi;