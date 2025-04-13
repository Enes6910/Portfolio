import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import "./../App?css"

const About = () => {

  const skills = [
    "HTML", "CSS", "JS", "ReactJS", "JAVA", "PHP", "VueJS", "Symfony", "Bootstrap", "Python"
  ]

  return (
    <div className="about-container">
      <header className="about-header">
        <h1>À propos de moi<span className="dot">.</span></h1>
      </header>

      <main className="about-content">
        <div className="about-left">
          <img src="./images/avatarNS.jpg" alt="Moi" className="about-photo" />
          <div className="about-socials">
            <a href="https://github.com/Enes6910" target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/enes-saglam-8bb9812b3/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="mailto:enes.saglam.bts@gmail.com">
              <FaEnvelope /> E-mail
            </a>
          </div>
        </div>

        <div className="about-right">
          <p>Salut, je suis <strong>Enes</strong>, étudiant en BTS SIO option SLAM (Solutions Logicielles et Applications Métiers). Passionné par le développement web et la création d’applications, j’aime transformer des idées en projets concrets et fonctionnels..</p>
          <p>Actuellement en formation, je me spécialise dans les technologies comme JavaScript, React, Node.js et MySQL, tout en continuant à explorer d'autres outils pour élargir mes compétences..</p>
          <p>Curieux, motivé et toujours prêt à apprendre, je suis à la recherche de projets, de stages ou d’opportunités pour progresser et contribuer à des solutions utiles et bien pensées.</p>
          <h3>Compétences :</h3>
          <ul className="skills-list">
            {skills.map(skill => <li key={skill}>{skill}</li>)}
          </ul>
        </div>
      </main>
    </div>
  )
}

export default About
