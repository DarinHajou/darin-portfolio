import styles from "./Whisper.module.css";

const cravings = [
  { name: "Comfort", descriptor: "Warm / steady", className: styles.comfort },
  { name: "Escape", descriptor: "Drifting/ outward", className: styles.escape },
  { name: "Thrill", descriptor: "Charged/ alive", className: styles.thrill },
  { name: "Longing", descriptor: "Tender/ reaching", className: styles.longing },
  { name: "Release", descriptor: "Heavy/ deep", className: styles.release },
  { name: "Wonder", descriptor: "Shimmering/ cosmic", className: styles.wonder },
];

function Whisper() {
  return (
    <section
      id="whisper"
      className={styles.section}
      aria-labelledby="whispr-title"
    >
      <div className={styles.backgroundGrid} aria-hidden="true" />

      <div className={`page-container ${styles.inner}`}>
        <header className={styles.header}>
          <div className={styles.meta}>
            <p>03 / Selected work</p>
            <p className={styles.status}>Independent build</p>
          </div>

          <div className={styles.intro}>
            <div className={styles.introCopy}>
              <p className={styles.projectType}>
                Emotion-led film curation
              </p>

              <h2 id="whispr-title" className={styles.title}>
                Whispr
              </h2>

              <p className={styles.summary}>
                I started Whispr to learn what it actually means to integrate AI
                into a product — and to make something that felt considered all
                the way through. The experiment became less about generating
                movie recommendations and more about designing an interface for
                something people often struggle to describe: what they want a
                film to make them feel.
              </p>
            </div>

            <aside className={styles.marginNote}>
              <p className={styles.noteLabel}>Starting point</p>

              <p className={styles.noteText}>
                What if choosing a film began with the experience you wanted
                from it, rather than a genre, actor, or search query?
              </p>
            </aside>
          </div>
        </header>

        <div className={styles.thesis}>
          <p className={styles.sectionLabel}>The idea</p>

          <p className={styles.thesisStatement}>
            People do not always know which film they want. They often know what
            they want a film to do to them.
          </p>
        </div>

        <div className={styles.welcomeSection}>
          <div className={styles.welcomeCopy}>
            <p className={styles.sectionLabel}>Opening / Enter Whispr</p>

            <h3 className={styles.subheading}>
              An invitation before the choice.
            </h3>

            <p className={styles.bodyCopy}>
              Whispr opens with <span className={styles.solText}>Sol</span>{" "}
              asking what you&apos;re craving. The first moment is intentionally
              sparse: no genre grid, search field, or wall of recommendations —
              just an invitation to begin with the experience you want.
            </p>
          </div>

          <figure className={`${styles.figure} ${styles.welcomeFigure}`}>
            <div className={styles.welcomeFrame}>
              <img
                className={styles.welcomeImage}
                src="/whisper-landing.png"
                alt="Whispr opening experience asking what the user is craving"
              />
            </div>

            <figcaption className={styles.visualCaption}>
              <span>Opening state</span>
              <span>
                <span className={styles.solText}>Sol</span> / Entry point
              </span>
            </figcaption>
          </figure>
        </div>

        <div className={styles.firstSpread}>
          <div className={styles.spreadCopy}>
            <p className={styles.sectionLabel}>01 / Emotional input</p>

            <h3 className={styles.subheading}>
              Choose the feeling before the film.
            </h3>

            <p className={styles.bodyCopy}>
              From there, Whispr moves into six emotional cravings rather than
              familiar content categories. Intensity then changes how strongly
              that craving should shape the recommendation.
            </p>

            <p className={styles.bodyCopy}>
              Longing + Soft &amp; Gentle should lead somewhere meaningfully
              different from Longing + Deep &amp; Intense. The emotional input
              is not decoration around the search — it is the search.
            </p>
          </div>

          <figure className={`${styles.figure} ${styles.cravingFigure}`}>
            <div className={styles.productFrame}>
              <img
                className={styles.productImage}
                src="/whispr-cravings.png"
                alt="Whispr craving selection showing six glowing emotional choices"
              />
            </div>

            <figcaption className={styles.visualCaption}>
              <span>Craving system</span>
              <span>01 / Emotional vocabulary</span>
            </figcaption>
          </figure>

          <figure className={`${styles.figure} ${styles.intensityFigure}`}>
            <div className={styles.productFrame}>
              <img
                className={styles.productImage}
                src="/whispr-intensity.png"
                alt="Whispr intensity screen asking how deeply the selected craving should shape the recommendation"
              />
            </div>

            <figcaption className={styles.visualCaption}>
              <span>Intensity</span>
              <span>02 / Same craving, different night</span>
            </figcaption>
          </figure>
        </div>

        <div className={styles.paletteSection}>
          <div className={styles.paletteHeading}>
            <p className={styles.sectionLabel}>Emotional vocabulary</p>

            <p className={styles.paletteIntro}>
              Color and motion belong to the selected emotion, while the
              portfolio itself stays neutral.
            </p>
          </div>

          <ol className={styles.paletteList}>
            {cravings.map((craving, index) => (
              <li key={craving.name}>
                <span
                  className={`${styles.swatch} ${craving.className}`}
                />

                <div>
                  <span className={styles.paletteNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className={styles.paletteName}>{craving.name}</p>

                  <p className={styles.paletteDescriptor}>
                    {craving.descriptor}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className={styles.curationSection}>
          <figure className={`${styles.figure} ${styles.resultFigure}`}>
            <div className={styles.productFrame}>
              <img
                className={styles.productImage}
                src="/whispr-result.png"
                alt="Whispr presenting a film selected from the user's emotional intent"
              />
            </div>

            <figcaption className={styles.visualCaption}>
              <span>
                <span className={styles.solText}>Sol&apos;s</span>{" "}
                interpretation
              </span>

              <span>03 / One recommendation first</span>
            </figcaption>
          </figure>

          <div className={styles.curationCopy}>
            <p className={styles.sectionLabel}>02 / Curation, not search</p>

            <h3 className={styles.subheading}>
              One interpretation first. Then room to steer.
            </h3>

            <p className={styles.bodyCopy}>
              <span className={styles.solText}>Sol</span> leads with one film
              rather than another ranked wall of options. The user delegates
              some of the decision-making to a curator with a point of view,
              while still keeping control over the direction.
            </p>

            <p className={styles.bodyCopy}>
              If the interpretation is close but not quite right, refinement is
              directional: lighter, darker, more obscure, more recent, more
              surprising. The original emotional intent stays intact.
            </p>

            <figure className={`${styles.figure} ${styles.refineFigure}`}>
              <div className={styles.refineFrame}>
                <img
                  className={styles.refineImage}
                  src="/whispr-refine.png"
                  alt="Whispr controls for shifting the recommendation toward lighter, darker, newer, more obscure, or more surprising films"
                />
              </div>

              <figcaption className={styles.visualCaption}>
                <span>Directional refinement</span>
                <span>04 / Shift the interpretation</span>
              </figcaption>
            </figure>
          </div>
        </div>

        <footer className={styles.footer}>
          <div className={styles.systemNotes}>
            <div>
              <p className={`${styles.systemLabel} ${styles.solText}`}>
                Sol
              </p>

              <p>
                Emotional fit, ranking, tone, reasoning, and conversational
                refinement.
              </p>
            </div>

            <div>
              <p className={styles.systemLabel}>TMDB</p>

              <p>
                Canonical titles, dates, plots, posters, identifiers, links,
                and streaming availability.
              </p>
            </div>
          </div>

          <p className={styles.technology}>
            React / TypeScript / OpenAI / TMDB / Framer Motion
          </p>
        </footer>
      </div>
    </section>
  );
}

export default Whisper;