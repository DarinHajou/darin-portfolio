import styles from "./About.module.css"

function About() {
  return (
    <section 
      id="about" 
      className={styles.section} 
      aria-labelledby="about-title"
    >
      <h1 className={styles.aboutTitle}>About</h1>
      
    </section>
  )  
}

export default About;