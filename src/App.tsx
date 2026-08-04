import './App.css'

import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />

      <main id="top">
        <section className="page-container page-section">
          <p className="label">Portfolio · 2026</p>

          <h1 className="heading-display">
            Product-minded frontend developer with hands-on full-stack
            experience.
          </h1>
        </section>

        <section id="work" className="page-container page-section">
          <h2 className="heading-section">Selected work</h2>
        </section>

        <section id="about" className="page-container page-section">
          <h2 className="heading-section">About</h2>
        </section>

        <section id="contact" className="page-container page-section">
          <h2 className="heading-section">Contact</h2>
        </section>
      </main>
    </>
  );
}

export default App
