import { useState, useEffect } from 'react'

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState('Games')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('projects')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      id: 7,
      title: "Mars Vanguard",
      description: "Enter a fast-paced 3D space shooter where you battle endless waves of enemy ships in intense arcade-style combat.",
      image: "Mars vanguard.webp",
      video: "/folder/mars.mp4",
      technologies: ["Unity 3D", "C#", "Level Design", "Game Optimization"],
      category: "Games",
      linkType: "playstore",
      projectUrl: "https://play.google.com/store/apps/details?id=com.veeivs.marsvanguard",
      featured: true
    },
    {
      id: 8,
      title: "Airplane Skybound Simulator",
      description: "Become a skilled pilot, control powerful aircraft, and complete exciting missions as you explore the world from above.",
      image: "Airplane skybound simulaotr.png",
      video: "/folder/airplane skybound.mp4",
      technologies: ["Unity 3D", "C#", "Physics Simulation", "Flight Controls"],
      category: "Games",
      linkType: "playstore",
      projectUrl: "https://play.google.com/store/apps/details?id=com.vgl.airplane.skybound.simulator.game&pli=1",
      featured: true
    },
    {
      id: 11,
      title: "Kachujin Action",
      description: "Action-packed gameplay showcasing intricate character animations and combat mechanics.",
      image: "vr.jpeg",
      video: "/folder/kachujin.mp4",
      technologies: ["Unity 3D", "Animation", "C#"],
      category: "Games",
      linkType: "github",
      projectUrl: "https://github.com/Shammas-satti-00/Kachujin-Endless-Runner-Unity-3d",
      featured: false
    },
    {
      id: 12,
      title: "Furious Driving",
      description: "High-speed racing game with advanced vehicle physics and dynamic environments.",
      image: "vr.jpeg",
      video: "/folder/furious.mp4",
      technologies: ["Unity 3D", "Vehicle Physics"],
      category: "Games",
      linkType: "github",
      projectUrl: "https://github.com/Shammas-satti-00/Furious-Racer-Unity-3d",
      featured: false
    },
    {
      id: 13,
      title: "Atiana Lego",
      description: "A fun and creative Lego-themed adventure game featuring expansive worlds and interactive puzzles.",
      image: "vr.jpeg",
      video: "/folder/Atiana lego.mp4",
      technologies: ["Unity 3D", "C#", "Level Design"],
      category: "Games",
      linkType: "github",
      projectUrl: "https://github.com/Shammas-satti-00/Atiana-Roblox-Unity-3d",
      featured: false
    },
    {
      id: 14,
      title: "Terrain Exploration",
      description: "Procedurally generated terrain with advanced shaders and immersive exploration.",
      image: "vr.jpeg",
      video: "/folder/Terrian.mp4",
      technologies: ["Unity 3D", "Shaders", "Procedural Generation"],
      category: "Games",
      linkType: "github",
      projectUrl: "https://github.com/Shammas-satti-00/Terrain-World-Environment-Unity",
      featured: false
    },
    {
      id: 1,
      title: "Compound Environment",
      description: "A realistic 3D environment made in Unity, focusing on physics-based controls and optimization.",
      image: "vr.jpeg",
      video: "/folder/Compound Env.mp4",
      technologies: ["C#", "Unity 3D", "Physics Engine"],
      category: "Games",
      linkType: "github",
      projectUrl: "https://github.com/Shammas-satti-00/Unity-3D-learner-Projects",
      featured: false
    },
    {
      id: 3,
      title: "Cube Run",
      description: "A fun and creative cube game with challenging endless runner mechanics.",
      image: "shape.png",
      video: "/folder/cube ran.mp4",
      technologies: ["Unity 3D", "C#"],
      category: "Games",
      linkType: "github",
      projectUrl: "https://github.com/Shammas-satti-00/Cube-Runner-my-1st-",
      featured: false
    },
    {
      id: 2,
      title: "Super Performer",
      description: "A thrilling 2D runner game where your speed and precision determine your survival against a relentless onslaught of obstacles.",
      image: "mario.jpeg",
      video: "/folder/super rn.mp4",
      technologies: ["Unity 2D", "C#", "Physics Engine"],
      category: "Games",
      linkType: "github",
      projectUrl: "https://github.com/Shammas-satti-00/Super-Runner-2D-Unity-3d",
      featured: false
    },
    {
      id: 9,
      title: "Tick-Tack Multiplayer (Unity 2D)",
      description: "A 2D multiplayer Tic-Tac-Toe style game built in Unity using Photon PUN for real-time online gameplay.",
      image: "/tictac-multi.jpg",
      video: "",
      technologies: ["Unity 2D", "C#", "Photon PUN", "Multiplayer"],
      category: "Games",
      linkType: "github",
      projectUrl: "https://github.com/Shammas-satti-00/Tick-Tack-Multiplayer-Unity-3D",
      featured: false
    },
    {
      id: 6,
      title: "AI Based Deepfake Detection System",
      description: "Deepfake Detection and Sentiment Analysis system using Python, OpenCV, TensorFlow, and Natural Language Processing (NLP) techniques.",
      image: "/deepfake-ui.jpg",
      video: "",
      technologies: ["Next.js", "NLP-Model", "ResNet", "Python"],
      category: "fullstack",
      linkType: "github",
      projectUrl: "https://github.com/Shammas-satti-00/AI-Powered-Deepfake-Detection-with-Sentiment-Analysis",
      featured: false
    },
    {
      id: 5,
      title: "AI Powered Skill Matcher",
      description: "AI tool that matches resumes with job descriptions using NLP and semantic skill extraction.",
      image: "/skill-matcher-ui.jpg",
      video: "",
      technologies: ["NLP", "PyTorch", "Python", "MongoDB"],
      category: "fullstack",
      linkType: "github",
      projectUrl: "https://github.com/Shammas-satti-00/Ai-Powered-Skill-Matcher",
      featured: false
    },
    {
      id: 4,
      title: "E-Library",
      description: "Designed and developed a responsive E-Library website using HTML, CSS, and JavaScript for easy access to digital books.",
      image: "/elibrary-ui.jpg",
      video: "",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "fullstack",
      linkType: "github",
      projectUrl: "https://github.com/Shammas-satti-00/Web-Development-Project",
      featured: false
    }
  ]

  const filters = [
    { id: 'Games', label: 'Games' },
    { id: 'fullstack', label: 'Full Stack & AI' }
  ]

  const filteredProjects = projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">

        <div className="projects-header">
          <div className="header-content">
            <p className="section-label">Selected Work</p>
            <h2 className="section-title">Projects</h2>
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
        </div>

        <div className="project-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${project.featured ? 'featured-card' : ''} ${isVisible ? 'slide-up' : ''}`}
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              <div className="card-media">
                {project.video ? (
                  <video
                    src={project.video}
                    className="media-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={project.image}
                  />
                ) : (
                  <img src={project.image} alt={project.title} className="media-image" />
                )}

                <div className="media-hover">
                  <a
                    href={project.projectUrl}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.linkType === 'playstore' ? 'Play Store →' : 'View Source →'}
                  </a>
                </div>
              </div>

              <div className="card-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        .projects-section {
          background: var(--bg-secondary);
          padding: 100px 0;
          position: relative;
        }

        .section-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .projects-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 3.5rem;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .section-label {
          font-size: 0.8rem;
          font-family: var(--font-mono);
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.03em;
          line-height: 1;
        }

        .filter-buttons {
          display: flex;
          gap: 0.25rem;
          background: var(--card-bg);
          padding: 4px;
          border-radius: 10px;
          border: 1px solid var(--border-color);
        }

        .filter-btn {
          padding: 0.5rem 1.25rem;
          border: none;
          background: transparent;
          color: var(--text-secondary);
          border-radius: 7px;
          font-size: 0.85rem;
          font-weight: 600;
          font-family: var(--font-sans);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-btn:hover {
          color: var(--text-primary);
        }

        .filter-btn.active {
          background: var(--btn-primary-bg);
          color: var(--btn-primary-text);
        }

        /* ── Magazine Editorial Grid ── */
        .project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 3rem 2rem;
        }

        @media (min-width: 1024px) {
          .project-grid {
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: minmax(300px, auto);
          }
          .project-card:nth-child(4n+1) {
            grid-column: span 2;
          }
          .project-card:nth-child(4n+1) .card-media {
            height: 400px;
          }
        }

        .project-card {
          background: transparent;
          border: none;
          border-bottom: 2px solid var(--text-primary);
          border-radius: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.4s ease;
          padding-bottom: 1.5rem;
          opacity: 0;
          transform: translateY(20px);
        }

        .project-card:hover {
          transform: translateY(-4px);
        }

        .card-media {
          position: relative;
          height: 250px;
          width: 100%;
          margin: 0 0 1.5rem 0;
          border-radius: 0;
          overflow: hidden;
        }

        .media-image, .media-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card:hover .media-image,
        .project-card:hover .media-video {
          transform: scale(1.02);
        }

        .media-hover {
          position: absolute;
          inset: 0;
          background: rgba(15, 23, 42, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .media-hover {
          opacity: 1;
        }

        .project-link {
          padding: 0.8rem 2rem;
          border: 1px solid white;
          font-weight: 700;
          font-size: 0.85rem;
          color: white;
          background: transparent;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          text-decoration: none;
          transition: all 0.2s ease;
          opacity: 0;
        }

        .project-card:hover .project-link {
          opacity: 1;
        }

        .project-link:hover {
          background: white;
          color: black;
        }

        .card-body {
          padding: 0;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .project-title {
          font-size: 1.8rem;
          font-weight: 900;
          text-transform: uppercase;
          color: var(--text-primary);
          line-height: 1.1;
          margin: 0 0 1rem;
          letter-spacing: -0.02em;
        }

        .project-description {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          border-left: 3px solid var(--text-primary);
          padding-left: 1rem;
          flex-grow: 1;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          margin-top: auto;
          border-top: 1px solid var(--border-color);
          padding-top: 1rem;
        }

        .tech-tag {
          background: transparent;
          border: none;
          color: var(--text-primary);
          padding: 0;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .tech-tag:not(:last-child)::after {
          content: "•";
          margin: 0 0.5rem;
          color: var(--text-muted);
        }

        .slide-up {
          animation: slideUpFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 1024px) {
          .projects-header {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 768px) {
          .project-grid {
            grid-template-columns: 1fr;
          }
          .projects-section { padding: 60px 0; }
          .section-title { font-size: 2.2rem; }
        }
      `}</style>
    </section>
  )
}

export default Projects
