import { useState, useEffect } from 'react'

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('projects')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      id: 1,
      title: "VR Game Environment",
      description: "Immersive virtual reality game developed using Unity 3D, XR toolkit and C#.",
      image: "vr.jpeg",
      technologies: ["C#", "XR Toolkit", "Unity 3D"],
      category: "Games",
      githubUrl: "https://github.com/Shammas-satti-00/VR-Tutorial-Unity-3D"
    },
    {
      id: 2,
      title: "Super Mario Game",
      description: "Created a 2D Mario-style platformer game using OpenGL in C++, featuring custom graphics and interactive gameplay mechanics.",
      image: "mario.jpeg",
      technologies: ["C++", "OpenGL"],
      category: "Games",
      githubUrl: "https://github.com/Shammas-satti-00/Flappy-Mario-Game-in-C-with-opengl-"
    },
    {
      id: 3,
      title: "Shape Shifter Runner",
      description: "Player morphs into different forms (ball, cube, jet) to pass through obstacles of matching shapes.",
      image: "shape.png",
      technologies: ["Unity 3D", "C#"],
      category: "Games",
      githubUrl: "https://github.com/Shammas-satti-00/Portfolio-Website.git"
    },
    {
      id: 6,
      title: "AI Based Deepfake Detection System",
      description: "Deepfake Detection and Sentiment Analysis system using Python, OpenCV, TensorFlow, and Natural Language Processing (NLP) techniques.",
      image: "deepfake.jpeg",
      technologies: ["Next.js", "NLP-Model", "RestNet", "Python", "Responsive Design"],
      category: "fullstack",
      githubUrl: "https://github.com/Shammas-satti-00/AI-Powered-Deepfake-Detection-with-Sentiment-Analysis"
    },
    {
      id: 5,
      title: "AI Powered Skill Matcher",
      description: "AI tool that matches resumes with job descriptions using NLP and semantic skill extraction.",
      image: "skill-matcher.jpeg",
      technologies: ["NLP", "PyTorch", "Python", "MongoDB"],
      category: "fullstack",
      githubUrl: "https://github.com/Shammas-satti-00/Ai-Powered-Skill-Matcher"
    },
    {
      id: 4,
      title: "E-Library",
      description: "Designed and developed a responsive E-Library website using HTML, CSS, and JavaScript for easy access to digital books and resources.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "fullstack",
      githubUrl: "https://github.com/Shammas-satti-00/Web-Development-Project"
    }
    
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'Games', label: 'Games' },
    { id: 'fullstack', label: 'Full Stack' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        
        <div className={`projects-intro ${isVisible ? 'fade-in' : ''}`}>
          <p>
            Here are some of the projects I've worked on. Each project represents a unique challenge 
            and showcases different aspects of my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className={`filter-buttons ${isVisible ? 'fade-in' : ''}`}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card ${isVisible ? 'slide-in-left' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`projects-cta ${isVisible ? 'fade-in' : ''}`}>
          <h3>Interested in working together?</h3>
          <p>Let's discuss your project and see how I can help bring your ideas to life.</p>
          <button className="btn btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Get In Touch
          </button>
        </div>
      </div>

      <style jsx>{`
        .projects-section {
          background: var(--bg-secondary);
          padding: 100px 0;
        }

        .projects-intro {
          text-align: center;
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeIn 0.8s ease forwards;
        }

        .projects-intro p {
          font-size: 1.1rem;
          color: var(--text-muted);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .filter-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeIn 0.8s ease forwards;
          animation-delay: 0.2s;
        }

        .filter-btn {
          padding: 0.8rem 1.5rem;
          border: 2px solid var(--border-color);
          background: var(--card-bg);
          color: var(--text-secondary);
          border-radius: 25px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-btn:hover,
        .filter-btn.active {
          background: var(--accent-primary);
          color: white;
          border-color: var(--accent-primary);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .project-card {
          background: var(--card-bg);
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px var(--shadow-light);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          opacity: 0;
          transform: translateX(-50px);
          animation: slideInLeft 0.8s ease forwards;
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px var(--shadow-medium);
        }

        .project-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .project-card:hover .project-image img {
          transform: scale(1.1);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(102, 126, 234, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .project-link {
          padding: 0.8rem 1.5rem;
          background: white;
          color: var(--accent-primary);
          text-decoration: none;
          border-radius: 25px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .project-link:hover {
          background: var(--text-primary);
          color: white;
        }

        .project-content {
          padding: 1.5rem;
        }

        .project-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.8rem;
        }

        .project-description {
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          background: var(--bg-tertiary);
          color: var(--accent-primary);
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .projects-cta {
          text-align: center;
          background: var(--card-bg);
          padding: 3rem;
          border-radius: 15px;
          box-shadow: 0 10px 30px var(--shadow-light);
          opacity: 0;
          transform: translateY(30px);
          animation: fadeIn 0.8s ease forwards;
          animation-delay: 0.4s;
        }

        .projects-cta h3 {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .projects-cta p {
          color: var(--text-muted);
          margin-bottom: 2rem;
          font-size: 1.1rem;
        }

        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }

          .filter-buttons {
            gap: 0.8rem;
          }

          .filter-btn {
            padding: 0.8rem 1.5rem;
            font-size: 0.95rem;
          }
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .filter-buttons {
            gap: 0.5rem;
            flex-wrap: wrap;
            justify-content: center;
          }

          .filter-btn {
            padding: 0.6rem 1.2rem;
            font-size: 0.9rem;
          }

          .project-content {
            padding: 1rem;
          }

          .projects-cta {
            padding: 2rem;
          }

          .project-title {
            font-size: 1.2rem;
          }
        }

        @media (max-width: 640px) {
          .filter-buttons {
            gap: 0.4rem;
          }

          .filter-btn {
            padding: 0.5rem 1rem;
            font-size: 0.85rem;
          }

          .project-content {
            padding: 0.8rem;
          }

          .project-title {
            font-size: 1.1rem;
          }

          .projects-cta {
            padding: 1.5rem;
          }

          .projects-cta h3 {
            font-size: 1.6rem;
          }
        }

        @media (max-width: 480px) {
          .projects-cta h3 {
            font-size: 1.5rem;
          }

          .filter-buttons {
            flex-direction: column;
            align-items: center;
          }

          .filter-btn {
            width: 100%;
            max-width: 200px;
            padding: 0.6rem 1rem;
          }

          .project-content {
            padding: 0.7rem;
          }

          .project-title {
            font-size: 1rem;
          }

          .tech-tag {
            font-size: 0.7rem;
            padding: 0.2rem 0.6rem;
          }
        }

        @media (max-width: 360px) {
          .projects-cta h3 {
            font-size: 1.4rem;
          }

          .filter-btn {
            font-size: 0.8rem;
            padding: 0.5rem 0.8rem;
          }

          .project-title {
            font-size: 0.95rem;
          }

          .tech-tag {
            font-size: 0.65rem;
            padding: 0.15rem 0.5rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Projects
