import Navigation from "../sections/Navigation/Navigation"
import Hero from "../sections/Hero/Hero"
import About from "../sections/About/About";

function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      {/* // <Contact /> */}
     <About />
    </>
  );
}

export default Home;