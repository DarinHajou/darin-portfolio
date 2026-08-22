import styles from "./Bosant.module.css";

function Bosant() {
  return (
    <section
      id="bosant"
      className={styles.section}
      aria-labelledby="bosant-title"
    >
      <div className={`page-container ${styles.inner}`}>
        {/* HEADER */}
        <header className={styles.header}>
          <div className={styles.meta}>
            <p>04 / Selected work</p>
            <p className={styles.status}>Draft concept / In development</p>
          </div>

          <div className={styles.intro}>
            <div className={styles.introCopy}>
              <p className={styles.projectType}>
                E-commerce / Digital brand direction
              </p>

              <h2 id="bosant-title" className={styles.title}>
                Bosant
              </h2>

              <p className={styles.summary}>
                A new homepage direction for an established premium bedding
                retailer in Oslo — designed to better translate the character
                of the physical brand into a more coherent digital experience.
              </p>
            </div>

            <aside className={styles.brief}>
              <p className={styles.noteLabel}>The brief</p>

              <p className={styles.noteText}>
                The task was not simply to restyle individual components. It
                meant reconsidering typography, hierarchy, imagery,
                merchandising and interaction as one connected brand system.
              </p>
            </aside>
          </div>
        </header>

        {/* HERO */}
        <figure className={styles.heroFigure}>
          <div className={styles.heroFrame}>
            <video
              className={styles.heroVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/bosant-hero-poster.jpg"
            >
              <source src="/bosant-hero.mp4" type="video/mp4" />
            </video>
          </div>

          <figcaption className={styles.visualCaption}>
            <span>Homepage direction</span>
            <span>01 / Brand atmosphere</span>
          </figcaption>
        </figure>

        {/* DIRECTION */}
        <div className={styles.directionSection}>
          <div className={styles.directionCopy}>
            <p className={styles.sectionLabel}>Designing the system</p>

            <h3 className={styles.subheading}>
              A calmer storefront built around comfort, material and restraint.
            </h3>

            <p className={styles.bodyCopy}>
              The direction was developed systematically rather than component
              by component. Typography, spacing, imagery, soft surfaces and
              product language all work toward the same quieter premium
              identity.
            </p>
          </div>

          <figure
            className={`${styles.figure} ${styles.selectionFigure}`}
          >
            <div className={styles.imageFrame}>
              <img
                className={styles.image}
                src="/bosant-tencel.png"
                alt="Bosant homepage product selection showing premium bedding and sleepwear"
              />
            </div>

            <figcaption className={styles.visualCaption}>
              <span>Product discovery</span>
              <span>02 / Merchandising</span>
            </figcaption>
          </figure>
        </div>

        {/* BUSINESS / SHOPIFY */}
        <div className={styles.commerceSection}>
          <div className={styles.commerceCopy}>
            <p className={styles.sectionLabel}>Design within the business</p>

            <h3 className={styles.subheading}>
              Brand direction that still has to function as commerce.
            </h3>

            <p className={styles.bodyCopy}>
              The concept had to work inside an established Shopify storefront,
              not an empty design canvas. That meant adapting the direction
              around existing theme structures, sections, templates and
              commerce behaviour while preserving the intended visual system.
            </p>
          </div>

          <figure className={`${styles.figure} ${styles.collectionFigure}`}>
            <div className={styles.wideFrame}>
              <img
                className={styles.wideImage}
                src="/bosant-collection.png"
                alt="Bosant Sara Emilie collection displayed within the Shopify storefront"
              />
            </div>

            <figcaption className={styles.visualCaption}>
              <span>Collection experience</span>
              <span>04 / Shopify implementation</span>
            </figcaption>
          </figure>
        </div>

        {/* BRAND DETAIL */}
        <div className={styles.brandDetail}>
          <div className={styles.brandDetailCopy}>
            <p className={styles.sectionLabel}>Physical to digital</p>

            <p className={styles.brandStatement}>
              The goal was to make the storefront feel like the same brand the
              customer encounters in the product, packaging and physical
              experience.
            </p>
          </div>

          <figure className={`${styles.figure} ${styles.packageFigure}`}>
            <div className={styles.packageFrame}>
              <img
                className={styles.packageImage}
                src="/bosant-package.png"
                alt="Bosant premium product packaging"
              />
            </div>
          </figure>
        </div>

        {/* FOOTER */}
        <footer className={styles.footer}>
          <div>
            <p className={styles.footerLabel}>Contribution</p>
            <p>
              Homepage direction, UI design, digital branding, responsive
              implementation and Shopify theme integration.
            </p>
          </div>

          <p className={styles.technology}>
            React / JavaScript / CSS / Shopify / Liquid
          </p>
        </footer>
      </div>
    </section>
  );
}

export default Bosant;