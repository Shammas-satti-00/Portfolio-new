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
      description: "A fun and creative Lego-themed adventure game.",
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
      id: 15,
      title: "Shadow Runner",
      description: "An intense fast-paced 3D runner game where speed and precision determine survival against dynamic obstacles.",
      image: "vr.jpeg",
      video: "/folder/shaddow_runner.mp4",
      technologies: ["Unity 3D", "C#", "Obstacle Mechanics", "Runner Controls"],
      category: "Games",
      linkType: "github",
      projectUrl: "https://github.com/Shammas-satti-00/Shadow-Runner.git",
      featured: false
    },
    {
      id: 16,
      title: "Grid Battle Arena",
      description: "A strategic turn-based grid combat arena built with tactical tile navigation, unit mechanics, and 3D battle systems.",
      image: "vr.jpeg",
      video: "/folder/grid_battle.mp4",
      technologies: ["Unity 3D", "C#", "Grid System", "Turn-Based Strategy"],
      category: "Games",
      linkType: "github",
      projectUrl: "https://github.com/Shammas-satti-00/Grid-Battle-Arena-Unity-3D",
      featured: false
    },
    {
      id: 17,
      title: "RPG Prototype",
      description: "An exploratory 3D RPG gameplay prototype featuring interactive combat, character mechanics, and world design built with the Core game engine.",
      image: "vr.jpeg",
      video: "/folder/RGB_prototype.mp4",
      technologies: ["Core Engine", "Lua", "RPG Mechanics", "Level Design"],
      category: "Games",
      linkType: "github",
      projectUrl: "https://github.com/Shammas-satti-00",
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
      description: "A fun and creative cube game",
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
    { id: 'all', label: 'All' },
    { id: 'Games', label: 'Games' },
    { id: 'fullstack', label: 'Full Stack & AI' }
  ]

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter)

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
                    className={`project-link ${project.linkType === 'playstore' ? 'project-link-playstore' : 'project-link-source'}`}
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

        /* ── Clean Grid ── */
        .project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 1.5rem;
        }

        @media (min-width: 1024px) {
          .project-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .featured-card {
            grid-column: span 2;
          }

          .featured-card .card-media {
            height: 340px;
          }
        }

        .project-card {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(20px);
        }

        .project-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
          border-color: #cbd5e1;
        }

        .card-media {
          position: relative;
          height: 220px;
          width: 100%;
          overflow: hidden;
          background: var(--bg-tertiary);
        }

        .media-image, .media-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card:hover .media-image,
        .project-card:hover .media-video {
          transform: scale(1.04);
        }

        .media-hover {
          position: absolute;
          inset: 0;
          background: rgba(15, 23, 42, 0.6);
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
          padding: 0.6rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.85rem;
          color: #ffffff;
          background: #0f172a;
          text-decoration: none;
          transition: all 0.2s ease;
          transform: translateY(10px);
          opacity: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .project-card:hover .project-link {
          transform: translateY(0);
          opacity: 1;
          transition-delay: 0.1s;
        }

        .project-link:hover {
          background: #334155;
          color: #ffffff;
        }

        /* ── Dark Mode Only Adjustments ── */
        [data-theme="dark"] .project-link-source {
          background: #1e293b;
          color: #93c5fd;
          border: 1px solid #3b82f6;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.4);
        }

        [data-theme="dark"] .project-link-source:hover {
          background: #2563eb;
          color: #ffffff;
          border-color: #60a5fa;
          box-shadow: 0 4px 18px rgba(37, 99, 235, 0.45);
        }

        [data-theme="dark"] .project-link-playstore {
          background: #064e3b;
          color: #6ee7b7;
          border: 1px solid #10b981;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.4);
        }

        [data-theme="dark"] .project-link-playstore:hover {
          background: #059669;
          color: #ffffff;
          border-color: #34d399;
          box-shadow: 0 4px 18px rgba(16, 185, 129, 0.45);
        }

        .card-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .project-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.3;
          margin: 0 0 0.5rem;
          letter-spacing: -0.01em;
        }

        .project-description {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: auto;
        }

        .tech-tag {
          background: var(--bg-tertiary);
          color: var(--text-secondary);
          padding: 0.3rem 0.7rem;
          border-radius: 6px;
          font-size: 0.72rem;
          font-weight: 600;
          font-family: var(--font-mono);
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
          .featured-card {
            grid-column: span 1;
          }
          .featured-card .card-media {
            height: 220px;
          }
          .projects-section { padding: 60px 0; }
          .section-title { font-size: 2.2rem; }
        }
      `}</style>
    </section>
  )
}

export default Projects
