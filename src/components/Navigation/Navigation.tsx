import { useState } from "react";
import styles from "./Navigation.module.css";

const navigationLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Résumé", href: "/resume.pdf" },
  { label: "Contact", href: "#contact" },
];

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`page-container ${styles.navigation}`}>
        <a
          className={styles.name}
          href="#top"
          onClick={closeMenu}
          aria-label="Go to the top of the page"
        >
          Darin Hussein
        </a>

        <button
          className={styles.menuButton}
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((currentState) => !currentState)}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>

        <nav
          id="primary-navigation"
          className={`${styles.nav} ${
            isMenuOpen ? styles.navOpen : ""
          }`}
          aria-label="Primary navigation"
        >
          <ul className={styles.navList}>
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <a
                  className={styles.navLink}
                  href={link.href}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;