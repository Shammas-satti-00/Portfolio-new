import { useState, useEffect, useRef } from 'react'

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
  const sliderRef = useRef(null)

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

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -370,
        behavior: 'smooth'
      })
    }
  }

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 370,
        behavior: 'smooth'
      })
    }
  }

  const projects = [
    {
      id: 7,
      title: "Mars Vanguard",
      description: "Enter a fast-paced 3D space shooter where you battle endless waves of enemy ships in intense arcade-style combat.",
      image: "Mars vanguard.webp",
      technologies: ["Unity 3D", "C#", "Level Design", "Game Optimization"],
      category: "Games",
      linkType: "playstore",
      projectUrl: "https://play.google.com/store/apps/details?id=com.veeivs.marsvanguard"
    },
    {
      id: 8,
      title: "Airplane Skybound Simulator",
      description: "Become a skilled pilot, control powerful aircraft, and complete exciting missions as you explore the world from above.",
      image: "Airplane skybound simulaotr.png",
      technologies: ["Unity 3D", "C#", "Physics Simulation", "Flight Controls"],
      category: "Games",
      linkType: "playstore",
      projectUrl: "https://play.google.com/store/apps/details?id=com.vgl.airplane.skybound.simulator.game&pli=1"
    },
    {
      id: 1,
      title: "3D Physics & VR Game Environment",
      description: "Interactive 3D simulation environment built in Unity, focusing on physics-based controls and optimization.",
      image: "vr.jpeg",
      technologies: ["C#", "Unity 3D", "Physics Engine"],
      category: "Games",
      linkType: "github",
      projectUrl: "https://github.com/Shammas-satti-00/VR-Tutorial-Unity-3D"
    },
    {
      id: 3,
      title: "Shape Shifter Runner",
      description: "Player morphs into different forms (ball, cube, jet) to pass through obstacles of matching shapes.",
      image: "shape.png",
      technologies: ["Unity 3D", "C#"],
      category: "Games",
      linkType: "github",
      projectUrl: "https://github.com/Shammas-satti-00/Portfolio-Website.git"
    },
    {
      id: 9,
      title: "Tick-Tack Multiplayer (Unity 2D)",
      description: "A 2D multiplayer Tic-Tac-Toe style game built in Unity using Photon PUN for real-time online gameplay. Synchronization Remaining!",
      image: "tictac.png",
      technologies: ["Unity 2D", "C#", "Photon PUN", "Multiplayer"],
      category: "Games",
      linkType: "github",
      projectUrl: "https://github.com/Shammas-satti-00/Tick-Tack-Multiplayer-Unity-3D"
    },
    {
      id: 2,
      title: "Super Mario Game",
      description: "Created a 2D Mario-style platformer game using OpenGL in C++, featuring custom graphics and interactive gameplay mechanics.",
      image: "mario.jpeg",
      technologies: ["C++", "OpenGL"],
      category: "Games",
      linkType: "github",
      projectUrl: "https://github.com/Shammas-satti-00/Flappy-Mario-Game-in-C-with-opengl-"
    },
    {
      id: 6,
      title: "AI Based Deepfake Detection System",
      description: "Deepfake Detection and Sentiment Analysis system using Python, OpenCV, TensorFlow, and Natural Language Processing (NLP) techniques.",
      image: "deepfake.jpeg",
      technologies: ["Next.js", "NLP-Model", "ResNet", "Python", "Responsive Design"],
      category: "fullstack",
      linkType: "github",
      projectUrl: "https://github.com/Shammas-satti-00/AI-Powered-Deepfake-Detection-with-Sentiment-Analysis"
    },
    {
      id: 5,
      title: "AI Powered Skill Matcher",
      description: "AI tool that matches resumes with job descriptions using NLP and semantic skill extraction.",
      image: "skill-matcher.jpeg",
      technologies: ["NLP", "PyTorch", "Python", "MongoDB"],
      category: "fullstack",
      linkType: "github",
      projectUrl: "https://github.com/Shammas-satti-00/Ai-Powered-Skill-Matcher"
    },
    {
      id: 4,
      title: "E-Library",
      description: "Designed and developed a responsive E-Library website using HTML, CSS, and JavaScript for easy access to digital books and resources.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "fullstack",
      linkType: "github",
      projectUrl: "https://github.com/Shammas-satti-00/Web-Development-Project"
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

        <div className="slider-container-outer">
          <button className="slider-arrow prev" onClick={scrollLeft} aria-label="Previous Project">
            ‹
          </button>

          <div className="projects-slider-wrapper" ref={sliderRef}>
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
                        <a
                          href={project.projectUrl}
                          className={`project-link ${project.linkType}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.linkType === 'playstore' ? '🤖 Play Store' : '🐙 GitHub'}
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
          </div>

          <button className="slider-arrow next" onClick={scrollRight} aria-label="Next Project">
            ›
          </button>
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
          padding: 70px 0;
          align-items: flex-start;
        }

        .projects-intro {
          text-align: center;
          margin-bottom: 1.5rem;
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
          gap: 0.75rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 0.6rem 1.4rem;
          border: 1.5px solid var(--border-color);
          background: var(--card-bg);
          color: var(--text-secondary);
          border-radius: 25px;
          font-size: 0.88rem;
          font-weight: 600;
          font-family: inherit;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-btn:hover,
        .filter-btn.active {
          background: var(--accent-gradient);
          color: white;
          border-color: transparent;
          box-shadow: 0 4px 16px rgba(102, 126, 234, 0.35);
        }

        .slider-container-outer {
          position: relative;
          width: 100%;
          margin: 0 auto;
          padding: 0 45px;
        }

        .projects-slider-wrapper {
          overflow-x: auto;
          scroll-behavior: smooth;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          padding: 1rem 0;
        }

        .projects-slider-wrapper::-webkit-scrollbar {
          display: none;
        }

        .projects-grid {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
          width: max-content;
        }

        .project-card {
          flex: 0 0 340px;
          scroll-snap-align: start;
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 8px 24px var(--shadow-light);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          opacity: 0;
          transform: translateX(-40px);
          animation: slideInLeft 0.7s ease forwards;
        }

        .slider-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(26, 32, 44, 0.9);
          border: 1.5px solid var(--border-color);
          color: white;
          font-size: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px var(--shadow-light);
        }

        .slider-arrow.prev {
          left: -10px;
        }

        .slider-arrow.next {
          right: -10px;
        }

        .slider-arrow:hover {
          background: var(--accent-gradient);
          color: white;
          border-color: transparent;
          transform: translateY(-50%) scale(1.1);
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
          text-decoration: none;
          border-radius: 25px;
          font-weight: 600;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .project-link.playstore {
          background: #34a853;
          color: white;
          box-shadow: 0 4px 15px rgba(52, 168, 83, 0.4);
        }

        .project-link.playstore:hover {
          background: #2d8e47;
          transform: scale(1.05);
          box-shadow: 0 6px 20px rgba(52, 168, 83, 0.6);
        }

        .project-link.github {
          background: #1a202c;
          color: white;
          border: 1px solid var(--border-color);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }

        .project-link.github:hover {
          background: #2d3748;
          transform: scale(1.05);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
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
          font-size: 0.88rem;
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
          border: 1px solid var(--border-color);
          padding: 2.5rem;
          border-radius: 14px;
          box-shadow: 0 8px 24px var(--shadow-light);
          margin-top: 2rem;
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
            gap: 1.2rem;
          }

          .slider-arrow {
            display: none;
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
          .project-card {
            flex: 0 0 calc(100vw - 40px);
          }

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
