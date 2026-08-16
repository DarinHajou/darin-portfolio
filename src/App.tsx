import './App.css'
import Navigation from './sections/Navigation/Navigation';
import Hero from './sections/Hero/Hero';
import MapOfPi from './projects/MapOfPi/MapOfPi';
import ResetWithContext from "./projects/ResetWithContext/ResetWithContext";
import Whisper from './projects/Whisper/Whisper';
import ProjectMedia from './components/ProjectMedia/ProjectMedia';

function App() {
  return (
    <>
      <Navigation />

      <main id="top">
        <Hero />

        <MapOfPi />

        <ResetWithContext/>

        <Whisper />
        <ProjectMedia />

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