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
            <p className={styles.status}>Private draft / Shopify direction</p>
          </div>

          <div className={styles.intro}>
            <div className={styles.introCopy}>
              <p className={styles.projectType}>
                Premium e-commerce / Digital brand direction
              </p>

              <h2 id="bosant-title" className={styles.title}>
                Bosant
              </h2>

              <p className={styles.summary}>
                A homepage direction for Bosant, a premium bedding retailer in
                Oslo — shaped to make the online store feel calmer, warmer and
                closer to the physical product experience.
              </p>
            </div>

            <aside className={styles.brief}>
              <p className={styles.noteLabel}>The brief</p>

              <p className={styles.noteText}>
                Bosant already had the product quality. The task was to make the storefront
                feel closer to it — calmer, softer and more deliberate, without losing its
                commercial purpose.
              </p>

              <p className={styles.draftNote}>
                The concept is a private draft direction and has not been
                published to the live storefront.
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
              A quieter storefront built around comfort, material quality and
              restraint.
            </h3>

            <p className={styles.bodyCopy}>
              The direction treats the homepage as one connected brand surface.
              Typography, spacing, warm neutral backgrounds, product imagery
              and trust details work together to create a calmer retail
              experience without losing clarity or commercial focus.
            </p>
          </div>

          <figure className={`${styles.figure} ${styles.selectionFigure}`}>
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

          <figure className={`${styles.figure} ${styles.tencelFigure}`}>
            <div className={styles.imageFrame}>
              <img
                className={styles.image}
                src="/bosant-collection.png"
                alt="Bosant Tencel Blend brand storytelling section"
              />
            </div>

            <figcaption className={styles.visualCaption}>
              <span>Material storytelling</span>
              <span>03 / Product value</span>
            </figcaption>
          </figure>
        </div>

        {/* BUSINESS / SHOPIFY */}
        <div className={styles.commerceSection}>
          <div className={styles.commerceCopy}>
            <p className={styles.sectionLabel}>Design within the business</p>

            <h3 className={styles.subheading}>
              A premium direction that still had to work inside real commerce.
            </h3>

            <p className={styles.bodyCopy}>
              The concept had to fit an existing Shopify storefront, not a
              blank design canvas. That meant working through theme structures,
              section logic, responsive behaviour and product collections while
              keeping the brand experience consistent.
            </p>
          </div>

          <figure className={`${styles.figure} ${styles.collectionFigure}`}>
            <div className={styles.wideFrame}>
              <img
                className={styles.wideImage}
                src="/bosant-tencel3.png"
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
              The goal was to reduce the gap between what Bosant sells and how
              the store feels: soft bedding, careful packaging, Scandinavian
              quality and a more considered sense of comfort.
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
              Homepage direction, UI design, digital brand refinement, product
              storytelling, responsive implementation and Shopify theme
              integration.
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