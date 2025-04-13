import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Application Météo",
      description: "Une petite application météo en VueJS",
      img: "/images/meteo.png",
      link: "https://weatherappns.netlify.app/"
    },
    {
      title: "PokéApi",
      description: "Site ReactJS + API Pokémon afin de les lister et les rechercher",
      img: "/images/pokeapi.png",
      link: "https://nspokeapi.netlify.app/"
    }
  ];

  return (
    <section id="projects" className="projects">
      <h3>Mes projets</h3>
      <div className="grid">
        {projects.map((proj, idx) => (
          <div key={idx} className="card">
            <h4>{proj.title}</h4><br></br>
            <a href={proj.link} target="_blank" rel="noopener noreferrer">
              <img src={proj.img} alt={proj.title} className="project-img" />
            </a>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
