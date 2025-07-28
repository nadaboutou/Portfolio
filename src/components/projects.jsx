import { useEffect, useRef } from 'react';
import "./projects.modules.css";

export default function Projects() {
  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const projects = [
    {
      title: "CRAPR",
      description: "A web app that lets users give away or claim unwanted items locally, making decluttering easy and eco-friendly through community sharing.",
      techStack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Mongoose", "Axios", "Passport.js", "Google OAuth 2.0", "JWT", "Multer", "Vercel", "Render"],
      demoLink: "#",
      codeLink: "#",
      screenshot: "https://via.placeholder.com/800x450/333/4CAF50?text=CRAPR+Screenshot"
    },
    {
      title: "CinéLand",
      description: "An installable, offline-first movie rental PWA designed in Figma with a focus on responsive UI, intuitive user flows, and accessibility. Currently in development.",
      techStack: ["Figma"],
      demoLink: "#",
      codeLink: "#",
      screenshot: "https://via.placeholder.com/800x450/333/4CAF50?text=CinéLand+Design"
    },
    {
      title: "Dev-Licious",
      description: "A multi-page recipe discovery website that allows users to search, filter, and explore recipes. Features include recipe details, a cooking blog, and client-side pagination for smooth UX.",
      techStack: ["HTML", "CSS", "JavaScript (vanilla)", "DummyJSON API", "LocalStorage", "Git", "GitHub", "Google Fonts"],
      demoLink: "#",
      codeLink: "#",
      screenshot: "https://via.placeholder.com/800x450/333/4CAF50?text=Dev-Licious+Screenshot"
    }
  ];

  return (
    <section id="projects">
      <div>
        <h2>Projects</h2>
        
        {projects.map((project, index) => (
          <div 
            key={project.title}
            ref={el => projectRefs.current[index] = el}
            className="project-card"
          >
            <h3>{project.title}</h3>
            <img 
              src={project.screenshot} 
              alt={`${project.title} screenshot`} 
              className="project-screenshot" 
            />
            <ul>
              <li>{project.description}</li>
            </ul>
            
            <div className="tech-stack">
              {project.techStack.map(tech => (
                <span key={tech} className="tech-item">{tech}</span>
              ))}
            </div>
            
            <div className="project-links">
              <a href={project.demoLink} className="project-link demo">Live Demo</a>
              <a href={project.codeLink} className="project-link">View Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}