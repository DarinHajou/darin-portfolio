import './App.css'
import Navigation from "./components/Navigation/Navigation";
import Hero from "./sections/Hero/Hero";
import MapOfPi from "./sections/MapOfPi/MapOfPi";

function App() {
  return (
    <>
      <Navigation />

      <main id="top">
        <Hero />

        <MapOfPi />

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

export default App;